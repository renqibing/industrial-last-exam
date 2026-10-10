const EXAMPLE={"task":"为一套设备的控制系统完成控制板 PCB 布局与布线。依据给定原理图、外壳和安装条件，完成元件布局、布线、双面 GND 覆铜和接地过孔；满足附件规定的供电、接口、隔离、尺寸和安装约束。","materials":"起始文件：controller.kicad_sch、design_requirements.pdf；附外壳尺寸、接口与供电要求、专用封装库、参考布局和检查脚本（如有）。说明控制板的使用场景及其设计工作条件。","software":"KiCad 10.0，Windows；如需专用库，请一并提供。","output":"交付可编辑的 controller.kicad_pcb、DRC 报告，以及对设计要求的逐项检查结果。","acceptance":"硬标准：DRC 违规和未连接项均为 0；尺寸、安装孔、接口、隔离和供电要求符合 design_requirements.pdf，并提供检查记录。软标准：对照实际完成的参考设计，评审布局、散热和可制造性；需要时由 AI 辅助评审、专家复核。","contact":""};const GUIDE=document.querySelector('.guide-trigger img').src;

window.SUBMISSION_API_ENDPOINT="https://industrial-last-exam-receiver.renqibing.workers.dev/api/submissions";
(() => {
  'use strict';
  const t = window.IndustrialI18n.text;
  const form = document.querySelector('form');
  if (!form) return;
  const fields = ['task', 'materials', 'software', 'output', 'acceptance', 'contact'];
  const selected = [];
  const fileInput = form.querySelector('input[type=file]');
  const submitButton = form.querySelector('button[type=submit]');
  const fieldset = form.querySelector('fieldset');
  const submitRow = form.querySelector('.submit-row');
  const exampleButton = document.querySelector('.form-heading button');
  const attachmentButton = document.getElementById('attachment-button');
  const maxBytes = 25 * 1024 * 1024;
  let requestId = null;
  let receiptId = null;
  let submitting = false;
  let exporting = false;
  let lastMessage = null;

  const actions = document.createElement('div');
  actions.className = 'submission-actions';
  actions.style.cssText = 'display:flex;flex-wrap:wrap;align-items:center;justify-content:flex-end;gap:10px';
  submitButton.before(actions);
  actions.append(submitButton);
  const backupButton = document.createElement('button');
  backupButton.type = 'button';
  backupButton.textContent = t('导出备份');
  backupButton.className = 'submission-backup';
  backupButton.style.cssText = 'padding:8px 12px;border:1px solid #c9d5df;border-radius:6px;font-size:14px;color:#456078;white-space:nowrap';
  actions.append(backupButton);
  const newTaskButton = document.createElement('button');
  newTaskButton.type = 'button';
  newTaskButton.textContent = t('再提交一道');
  newTaskButton.hidden = true;
  newTaskButton.style.cssText = backupButton.style.cssText;
  actions.append(newTaskButton);

  function showMessage(message, success = false) {
    lastMessage = { message, success };
    const rendered = typeof message === 'function' ? message() : message;
    let element = document.getElementById('local-error');
    if (!element) {
      element = document.createElement('p');
      element.id = 'local-error';
      element.className = 'form-error';
      submitRow.before(element);
    }
    element.setAttribute('role', success ? 'status' : 'alert');
    element.setAttribute('aria-live', success ? 'polite' : 'assertive');
    element.style.cssText = success ? 'border-color:#087c79;background:#edf8f4;color:#176455;overflow-wrap:anywhere' : '';
    element.textContent = rendered;
  }

  function updateControls() {
    const busy = submitting || exporting;
    if (fieldset) fieldset.disabled = busy;
    exampleButton.disabled = busy;
    attachmentButton.disabled = busy;
    fileInput.disabled = busy;
    fields.forEach(key => document.getElementById(key).disabled = busy);
    form.querySelectorAll('.file-list button').forEach(button => button.disabled = busy);
    submitButton.disabled = busy || Boolean(receiptId);
    submitButton.textContent = submitting ? t('正在提交…') : receiptId ? t('已提交') : t('提交任务');
    backupButton.disabled = busy;
    backupButton.textContent = exporting ? t('正在打包…') : t('导出备份');
    newTaskButton.disabled = busy;
    newTaskButton.hidden = !receiptId;
    form.setAttribute('aria-busy', submitting ? 'true' : 'false');
  }

  function changed() {
    if (submitting || exporting) return;
    requestId = null;
    receiptId = null;
    lastMessage = null;
    document.getElementById('local-error')?.remove();
    updateControls();
  }

  function drawFiles() {
    let list = form.querySelector('.file-list');
    if (!list) {
      list = document.createElement('ul');
      list.className = 'file-list';
      form.querySelector('.upload-row').after(list);
    }
    list.replaceChildren();
    selected.forEach((file, index) => {
      const item = document.createElement('li');
      const text = document.createElement('span');
      text.textContent = `${file.name} · ${(file.size / 1024 / 1024).toFixed(2)} MB`;
      const button = document.createElement('button');
      button.type = 'button';
      button.textContent = t('移除');
      button.setAttribute('aria-label', t('移除 ') + file.name);
      button.style.cssText = 'padding:4px 8px;font-size:14px';
      button.disabled = submitting || exporting;
      button.onclick = () => {
        if (submitting || exporting) return;
        selected.splice(index, 1);
        changed();
        drawFiles();
      };
      item.append(text, button);
      list.append(item);
    });
  }

  fields.forEach(key => document.getElementById(key).addEventListener('input', changed));
  fileInput.onchange = () => {
    if (submitting || exporting) return;
    const next = [...selected, ...fileInput.files];
    fileInput.value = '';
    if (next.length > 10 || next.reduce((sum, file) => sum + file.size, 0) > maxBytes) {
      showMessage(() => t('附件最多 10 个，总大小不超过 25 MB；大文件请在“起始材料”里填下载链接。'));
      return;
    }
    if (next.some(file => file.name.length > 255)) {
      showMessage(() => t('附件文件名过长，请缩短后再添加。'));
      return;
    }
    selected.splice(0, selected.length, ...next);
    changed();
    drawFiles();
  };
  attachmentButton.onclick = () => { if (!submitting && !exporting) fileInput.click(); };
  exampleButton.onclick = () => {
    if (submitting || exporting) return;
    const example = window.IndustrialI18n.example(EXAMPLE);
    fields.forEach(key => document.getElementById(key).value = example[key] || '');
    changed();
  };
  newTaskButton.onclick = () => {
    if (submitting || exporting) return;
    fields.forEach(key => document.getElementById(key).value = '');
    selected.splice(0, selected.length);
    fileInput.value = '';
    changed();
    drawFiles();
    document.getElementById('task').focus();
  };

  const preview = document.createElement('dialog');
  preview.className = 'guide-dialog';
  preview.style.cssText = 'width:94vw;padding:24px;border:1px solid #d7e0e8;border-radius:10px;position:fixed;inset:0;margin:auto';
  preview.setAttribute('aria-label', t('提交说明完整图'));
  const close = document.createElement('button');
  close.type = 'button';
  close.textContent = t('关闭');
  close.style.cssText = 'display:block;margin:0 0 14px auto;padding:5px 14px;border:1px solid #c9d5df;border-radius:5px';
  close.onclick = () => preview.close();
  const picture = document.createElement('img');
  picture.src = GUIDE;
  picture.alt = t('工程设计 LastXM 提交说明完整图');
  picture.style.width = '100%';
  preview.append(close, picture);
  document.body.append(preview);
  document.querySelector('.guide-trigger').onclick = () => preview.showModal();
  preview.addEventListener('click', event => { if (event.target === preview) preview.close(); });

  function readValues() {
    if (!form.reportValidity()) return null;
    const values = Object.fromEntries(fields.map(key => [key, document.getElementById(key).value.trim()]));
    if (['task', 'software', 'output', 'acceptance'].some(key => !values[key])) {
      showMessage(() => t('请填写任务、软件、交付结果和验收办法。'));
      return null;
    }
    if (!values.materials && !selected.length) {
      showMessage(() => t('请说明起始材料、填写下载链接，或添加附件。'));
      return null;
    }
    return values;
  }

  function newRequestId() {
    if (typeof crypto.randomUUID === 'function') return crypto.randomUUID();
    const bytes = crypto.getRandomValues(new Uint8Array(16));
    bytes[6] = (bytes[6] & 15) | 64;
    bytes[8] = (bytes[8] & 63) | 128;
    const hex = [...bytes].map(byte => byte.toString(16).padStart(2, '0')).join('');
    return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
  }

  form.onsubmit = async event => {
    event.preventDefault();
    if (submitting || exporting || receiptId) return;
    const values = readValues();
    if (!values) return;
    let endpoint;
    try {
      if (!window.SUBMISSION_API_ENDPOINT || window.SUBMISSION_API_ENDPOINT === "REPLACE_WITH_VERIFIED_PUBLIC_API") throw new Error('Missing endpoint');
      endpoint = new URL(window.SUBMISSION_API_ENDPOINT, window.location.href);
      if (endpoint.protocol !== 'https:' && !(endpoint.protocol === 'http:' && ['localhost', '127.0.0.1', '[::1]'].includes(endpoint.hostname))) throw new Error('Invalid endpoint');
    } catch {
      showMessage(() => t('提交服务尚未配置。请先导出备份，保留填写内容和附件。'));
      return;
    }
    requestId ||= newRequestId();
    const payload = new FormData();
    fields.forEach(key => payload.append(key, values[key]));
    payload.append('requestId', requestId);
    selected.forEach(file => payload.append('files', file, file.name));
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 360000);
    submitting = true;
    updateControls();
    showMessage(() => t('正在上传并保存，较大附件可能需要几分钟，请保留这个页面。'), true);
    try {
      const response = await fetch(endpoint.href, {
        method: 'POST', body: payload, credentials: 'omit', cache: 'no-store',
        headers: { Accept: 'application/json' }, signal: controller.signal,
      });
      let result;
      try { result = await response.json(); } catch { result = null; }
      if (!response.ok) {
        const serverMessage = typeof result?.error === 'string' ? result.error.slice(0, 500) : '';
        const fallback = response.status === 413
          ? t('附件最多 10 个，总大小不超过 25 MB；大文件请改填下载链接。')
          : response.status >= 500
            ? t('暂时无法确认保存，请稍后再试。')
            : t('提交未完成，请检查填写内容后重试。');
        showMessage(() => window.IndustrialI18n.serverMessage(serverMessage, fallback) + t(' 填写内容和附件仍在，也可以先导出备份。'));
        return;
      }
      if (result?.id !== requestId || result?.status !== 'saved') {
        showMessage(() => t('还没有收到保存回执。填写内容和附件仍在，请再试一次或导出备份。'));
        return;
      }
      receiptId = result.id;
      showMessage(() => t('任务和附件已保存。提交编号：') + receiptId + t('。请保留这个编号；也可以导出备份。'), true);
    } catch (error) {
      showMessage(() => (error?.name === 'AbortError' ? t('等待时间较长，还无法确认保存。') : t('网络连接中断，还无法确认保存。')) + t(' 填写内容和附件仍在，请再试一次或导出备份。'));
    } finally {
      clearTimeout(timeout);
      submitting = false;
      updateControls();
    }
  };

  function crc32(data) {
    let crc = -1;
    for (const byte of data) {
      crc ^= byte;
      for (let index = 0; index < 8; index++) crc = (crc >>> 1) ^ ((crc & 1) ? 0xedb88320 : 0);
    }
    return (crc ^ -1) >>> 0;
  }
  function header(length) {
    const bytes = new Uint8Array(length);
    return { bytes, view: new DataView(bytes.buffer) };
  }
  function zip(files) {
    const encoder = new TextEncoder();
    const pieces = [], central = [];
    let offset = 0;
    for (const file of files) {
      const name = encoder.encode(file.name), data = file.bytes, crc = crc32(data);
      const local = header(30);
      local.view.setUint32(0, 0x04034b50, true);
      local.view.setUint16(4, 20, true);
      local.view.setUint16(6, 0x0800, true);
      local.view.setUint32(14, crc, true);
      local.view.setUint32(18, data.length, true);
      local.view.setUint32(22, data.length, true);
      local.view.setUint16(26, name.length, true);
      pieces.push(local.bytes, name, data);
      const entry = header(46);
      entry.view.setUint32(0, 0x02014b50, true);
      entry.view.setUint16(4, 20, true);
      entry.view.setUint16(6, 20, true);
      entry.view.setUint16(8, 0x0800, true);
      entry.view.setUint32(16, crc, true);
      entry.view.setUint32(20, data.length, true);
      entry.view.setUint32(24, data.length, true);
      entry.view.setUint16(28, name.length, true);
      entry.view.setUint32(42, offset, true);
      central.push(entry.bytes, name);
      offset += 30 + name.length + data.length;
    }
    const centralBytes = central.reduce((sum, bytes) => sum + bytes.length, 0);
    const end = header(22);
    end.view.setUint32(0, 0x06054b50, true);
    end.view.setUint16(8, files.length, true);
    end.view.setUint16(10, files.length, true);
    end.view.setUint32(12, centralBytes, true);
    end.view.setUint32(16, offset, true);
    return new Blob([...pieces, ...central, end.bytes], { type: 'application/zip' });
  }

  backupButton.onclick = async () => {
    if (submitting || exporting) return;
    const values = readValues();
    if (!values) return;
    exporting = true;
    updateControls();
    try {
      const exportText = window.IndustrialI18n.translator();
      const encoder = new TextEncoder();
      const attachments = selected.map((file, index) => ({
        name: file.name, size: file.size,
        path: 'attachments/' + (index + 1) + '-' + file.name.replace(/[\\/\u0000-\u001f]/g, '_'),
      }));
      const record = { ...values, attachments, createdAt: new Date().toISOString(), ...(receiptId ? { submissionId: receiptId } : {}) };
      const labels = { task: exportText('要做什么'), materials: exportText('起始材料'), software: exportText('软件与版本'), output: exportText('交付结果'), acceptance: exportText('验收办法'), contact: exportText('联系方式') };
      const text = fields.map(key => labels[key] + '\n' + (values[key] || exportText('未填写'))).join('\n\n')
        + exportText('\n\n附件\n') + attachments.map(attachment => attachment.path + exportText('（原名：') + attachment.name + exportText('）')).join('\n')
        + (receiptId ? exportText('\n\n提交编号\n') + receiptId : '');
      const packed = [
        { name: 'task.json', bytes: encoder.encode(JSON.stringify(record, null, 2)) },
        { name: exportText('任务说明.txt'), bytes: encoder.encode(text) },
      ];
      for (let index = 0; index < selected.length; index++) {
        packed.push({ name: attachments[index].path, bytes: new Uint8Array(await selected[index].arrayBuffer()) });
      }
      const url = URL.createObjectURL(zip(packed));
      const link = document.createElement('a');
      link.href = url;
      link.download = exportText('工程设计LastXM-任务包.zip');
      document.body.append(link);
      link.click();
      link.remove();
      setTimeout(() => URL.revokeObjectURL(url), 2000);
      showMessage(() => receiptId
        ? t('任务已保存，备份也已导出。提交编号：') + receiptId + t('。')
        : t('备份已导出。要交给我们，请点击“提交任务”。'), true);
    } catch {
      showMessage(() => t('导出失败，填写内容和附件仍在，请再试一次。'));
    } finally {
      exporting = false;
      updateControls();
    }
  };
  function refreshLanguage() {
    updateControls();
    newTaskButton.textContent = t('再提交一道');
    drawFiles();
    preview.setAttribute('aria-label', t('提交说明完整图'));
    close.textContent = t('关闭');
    picture.alt = t('工程设计 LastXM 提交说明完整图');
    picture.src = document.querySelector('.guide-trigger img').src;
    if (lastMessage) showMessage(lastMessage.message, lastMessage.success);
  }
  window.addEventListener('industrial-language-change', refreshLanguage);
  refreshLanguage();
})();
