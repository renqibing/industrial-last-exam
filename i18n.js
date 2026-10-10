(() => {
  'use strict';
  const translations = {
  "页面帮助": "Page help",
  "收录标准": "Acceptance criteria",
  "常见问题": "FAQ",
  "高校 Logo 展示": "University logos",
  "汇聚专业力量": "Bringing engineering expertise together",
  "上海交通大学官网": "Shanghai Jiao Tong University website",
  "上海交通大学 Logo": "Shanghai Jiao Tong University logo",
  "上海交通大学": "Shanghai Jiao Tong University",
  "加州大学伯克利分校官网": "University of California, Berkeley website",
  "加州大学伯克利分校 Logo": "University of California, Berkeley logo",
  "加州大学伯克利分校": "UC Berkeley",
  "复旦大学官网": "Fudan University website",
  "复旦大学 Logo": "Fudan University logo",
  "复旦大学": "Fudan University",
  "斯坦福大学官网": "Stanford University website",
  "斯坦福大学 Logo": "Stanford University logo",
  "斯坦福大学": "Stanford University",
  "清华大学官网": "Tsinghua University website",
  "清华大学 Logo": "Tsinghua University logo",
  "清华大学": "Tsinghua University",
  "北京大学官网": "Peking University website",
  "北京大学 Logo": "Peking University logo",
  "北京大学": "Peking University",
  "华东理工大学官网": "East China University of Science and Technology website",
  "华东理工大学 Logo": "East China University of Science and Technology logo",
  "华东理工大学": "East China University of Science and Technology",
  "南洋理工大学官网": "Nanyang Technological University website",
  "南洋理工大学 Logo": "Nanyang Technological University logo",
  "南洋理工大学": "Nanyang Technological University",
  "新加坡国立大学官网": "National University of Singapore website",
  "新加坡国立大学 Logo": "National University of Singapore logo",
  "新加坡国立大学": "National University of Singapore",
  "苏黎世联邦理工学院官网": "ETH Zurich website",
  "苏黎世联邦理工学院 Logo": "ETH Zurich logo",
  "苏黎世联邦理工学院": "ETH Zurich",
  "洛桑联邦理工学院官网": "EPFL website",
  "洛桑联邦理工学院 Logo": "EPFL logo",
  "洛桑联邦理工学院": "EPFL",
  "剑桥大学官网": "University of Cambridge website",
  "剑桥大学 Logo": "University of Cambridge logo",
  "剑桥大学": "University of Cambridge",
  "慕尼黑工业大学官网": "Technical University of Munich website",
  "慕尼黑工业大学 Logo": "Technical University of Munich logo",
  "慕尼黑工业大学": "Technical University of Munich",
  "计划征集的工程设计领域": "Engineering fields we plan to cover",
  "工程设计领域宽图，可左右滚动": "Engineering fields banner; scroll horizontally to explore",
  "计划征集八个工程设计领域：土木与建筑、机械与产品、化工与流程、集成电路、电路与 PCB、电气与控制、制造与工装、光学与光电。": "Eight planned engineering fields: civil and building design, mechanical and product design, chemical and process engineering, integrated circuits, circuits and PCB, electrical and controls, manufacturing and tooling, and optics and photonics.",
  "左右滑动查看领域": "Swipe to explore the fields",
  "工程设计领域与典型任务": "Engineering fields and typical tasks",
  "土木与建筑：建筑与结构设计、BIM 建模、工程校核。": "Civil and building design: buildings, structures, BIM modeling and engineering checks.",
  "机械与产品：零件与装配设计、机构设计、产品造型。": "Mechanical and product design: parts, assemblies, mechanisms and product form.",
  "化工与流程：工艺流程、设备选型、过程仿真。": "Chemical and process engineering: process flows, equipment selection and process simulation.",
  "集成电路：芯片电路设计、版图、时序与功耗验证。": "Integrated circuits: chip circuits, layouts, timing and power verification.",
  "电路与 PCB：原理图、元件布局、布线与电气检查。": "Circuits and PCB: schematics, component placement, routing and electrical checks.",
  "电气与控制：电气系统、控制方案、系统仿真与调试。": "Electrical and controls: electrical systems, control schemes, simulation and commissioning.",
  "制造与工装：制造工艺、模具夹具、加工路径规划。": "Manufacturing and tooling: manufacturing processes, molds, fixtures and toolpath planning.",
  "光学与光电：光学系统、光机结构、光电器件设计。": "Optics and photonics: optical systems, optomechanical structures and optoelectronic devices.",
  "交给 AI 来做。": "Let AI take them on.",
  "不用懂 AI。": "No AI knowledge needed.",
  "就像把一项工作交给同事。": "Just brief us as you would a colleague.",
  "任务说明": "Task guidance",
  "题目收录标准": "Task acceptance criteria",
  "难度与论文署名": "Difficulty and paper co-authorship",
  "放大查看提交说明图": "Enlarge the submission guide",
  " 一张图，看懂怎么提交": " See how to submit at a glance",
  "查看题目收录标准": "View task acceptance criteria",
  "要做什么？": "What needs to be done?",
  "给哪些起始材料？": "What are the starting materials?",
  "写明从哪个文件开始，以及每份材料的用途。": "Say which file to start from and what each file is for.",
  "添加附件": "Add attachments",
  "最多 10 个 · 共 25 MB": "Up to 10 files · 25 MB total",
  "选择任务附件": "Choose task attachments",
  "用什么软件？": "Which software is needed?",
  "软件名和版本；需要插件、专用库或特定系统也写上。": "Name and version, plus any required plugins, custom libraries or operating system.",
  "例如：KiCad 10.0，Windows；附所需封装库。": "For example: KiCad 10.0 on Windows; include the required footprint library.",
  "最后交什么？": "What should be delivered?",
  "文件格式、文件名，以及结果要包含什么。": "File formats, filenames and what the results must include.",
  "怎样算做对？": "How will you check the result?",
  "硬标准": "Objective checks",
  "：指标、容差或检查脚本。": ": targets, tolerances or checking scripts. ",
  "软标准": "Expert review",
  "：参考结果和验收要点，可由 AI 辅助评审。": ": reference results and review criteria; AI can assist with the review.",
  "联系方式 ": "Contact ",
  "选填，方便补充资料": "Optional, for follow-up questions",
  "邮箱或微信": "Email or WeChat",
  "没有脚本也能提交。": "No checking script? You can still submit.",
  "把验收办法说清楚就行。": "Just explain how to check the result.",
  "提交任务": "Submit task",
  "拿不准的地方，点开看看。": "Click a question for the details.",
  "什么样的题目会被收录？": "What makes a task eligible?",
  "真实": "Real",
  "：来自实际工作，使用业内常用的专业软件。": ": drawn from actual work, using professional software common in the field.",
  "够难": "Difficult",
  "：需要领域经验和完整工作量，通常要专家花数天，不只是几个简单操作。": ": requires domain expertise and substantial work, usually several days for an expert, rather than a few simple operations.",
  "能验收": "Assessable",
  "：有明确的交付结果和检查办法，能判断哪里做对、哪里没做到。": ": has clear deliverables and checks that show what was done correctly and what was missed.",
  "收录前还会核对材料是否齐全、流程能否复现、参考结果是否真实，并测试实际难度。": "Before accepting a task, we check that the materials are complete, the workflow is reproducible and the reference results come from actual work. We also test its difficulty.",
  "查看难度分级与署名门槛": "View difficulty levels and authorship thresholds",
  "需要准备哪些文件？": "Which files should I prepare?",
  "提供起始工程文件、图纸或数据，必要的素材、插件和专用库，以及一次真实完成任务得到的参考结果。写清各文件的用途、软件版本、输出格式和验收要求；截图也可以辅助说明。": "Provide the starting project files, drawings or data, any required assets, plugins and custom libraries, and reference results from actually completing the task. Explain each file’s purpose, software versions, output formats and acceptance requirements. Screenshots can help.",
  "请用你有权分享的材料。涉及保密项目，可换成公开或脱敏数据，保留真实的工作约束和验收标准。": "Use materials you have permission to share. For confidential projects, use public or de-identified data while keeping the real constraints and acceptance criteria.",
  "我不懂 AI，也需要自己先测试吗？": "Do I need to know AI or test the task first?",
  "不用懂 AI，也不要求自己先测试。像交给同事一样，说清目标、起始材料、软件、交付结果和验收办法就行。我们再统一测试和审核。": "No AI knowledge or prior testing is required. Brief us as you would a colleague: explain the goal, starting materials, software, deliverables and checks. We handle the testing and review.",
  "一定要有评分脚本、唯一答案吗？": "Do I need a scoring script or a single correct answer?",
  "不必会编程。已有检查脚本可以附上；没有就写尺寸、公差、连接、性能等验收项，并提供参考文件或截图。": "You do not need to code. Include checking scripts if you have them. Otherwise, specify checks such as dimensions, tolerances, connections and performance, with reference files or screenshots.",
  "可以有多个合格方案，关键是标准要明确。把“好看”“设计合理”拆成具体检查项；需要时可由 AI 辅助评审、专家复核。参考结果必须来自真实完成的工作流程。": "Several solutions can be acceptable, as long as the criteria are clear. Turn “looks good” or “a sensible design” into specific checks. AI can assist with review, with expert verification when needed. Reference results must come from actually completing the workflow.",
  "商业软件或内部软件可以用吗？": "Can I use commercial or in-house software?",
  "可以先提交。请写清软件名、准确版本、操作系统、插件，以及许可或账号要求。关键是评测时能安装、访问和运行；内部软件请说明可供测试的环境或替代方案。": "Yes, submit it for review. Specify the software, exact version, operating system, plugins and any license or account requirements. It must be installable, accessible and runnable for evaluation. For in-house software, describe a test environment or an alternative.",
  "Near-term、Last-exam 和论文署名怎么算？": "How do Near-term, Last-exam and paper co-authorship work?",
  "由我们按同一验收标准测试 ": "We test ",
  " 和 ": " and ",
  "，取两者平均分（满分 1）。你不用自己测试。": " against the same acceptance criteria and average their scores (out of 1). You do not need to test the task yourself.",
  "题目分级与论文署名门槛": "Task levels and paper co-authorship thresholds",
  "题目级别": "Task level",
  "AI 平均得分": "Average AI score",
  "署名门槛": "Authorship threshold",
  "近期挑战": "Near-term challenge",
  "低于 50%": "Below 50%",
  "平均分 < 0.5": "Average score < 0.5",
  "至少 3 道题": "At least 3 tasks",
  "更难一档": "More demanding",
  "低于 10%": "Below 10%",
  "平均分 < 0.1": "Average score < 0.1",
  "至少 1 道题": "At least 1 task",
  "达到任一门槛，即具备论文联合署名资格（Data Contributor）。只统计通过审核的题目；同一题的额外变体按 1/3 道计。参考结果须由实际运行产生，并提供清楚的验收标准。": "Meeting either threshold qualifies you for paper co-authorship as a Data Contributor. Only accepted tasks count; each additional variant of the same task counts as 1/3 of a task. Reference results must come from actual runs, with clear acceptance criteria.",
  "发布前，我们会用届时最新强模型复测、筛题，确保题库在发布时仍有挑战性。": "Before release, we will retest and select tasks using the latest strong models so the benchmark remains challenging when published.",
  "以上为本项目的收录与署名规则。": "These are this project’s task acceptance and authorship rules.",
  "填好以后，怎么把任务交给我们？": "How do I send you the finished task?",
  "点击“提交任务”会上传填写内容和附件；看到提交编号，就表示已保存。请保留这个编号。“导出备份”会在你的电脑上生成 ZIP 文件，方便自己留存。": "Click “Submit task” to upload your description and attachments. A submission ID confirms they have been saved; keep that ID. “Export backup” creates a ZIP file on your computer for your own records.",
  "附件最多 10 个，总大小不超过 25 MB；更大的资料可以在“起始材料”里填下载链接。联系方式选填，方便后续补充资料。": "Attach up to 10 files, totaling no more than 25 MB. For larger materials, put download links in “Starting materials”. Contact details are optional and help us follow up.",
  "填写后提交，收到编号即已保存": "Submit your task; a submission ID confirms it is saved",
  "导出备份": "Export backup",
  "再提交一道": "Submit another task",
  "正在提交…": "Submitting…",
  "已提交": "Submitted",
  "正在打包…": "Preparing backup…",
  "移除": "Remove",
  "移除 ": "Remove ",
  "附件最多 10 个，总大小不超过 25 MB；大文件请在“起始材料”里填下载链接。": "Attach up to 10 files, totaling no more than 25 MB. For larger files, provide download links in “Starting materials”.",
  "附件文件名过长，请缩短后再添加。": "An attachment filename is too long. Shorten it before adding the file.",
  "提交说明完整图": "Full submission guide",
  "关闭": "Close",
  "请填写任务、软件、交付结果和验收办法。": "Please describe the task, software, deliverables and acceptance checks.",
  "请说明起始材料、填写下载链接，或添加附件。": "Please describe the starting materials, provide download links or add attachments.",
  "提交服务尚未配置。请先导出备份，保留填写内容和附件。": "The submission service is not configured yet. Export a backup to keep your description and attachments.",
  "正在上传并保存，较大附件可能需要几分钟，请保留这个页面。": "Uploading and saving. Large attachments may take a few minutes; keep this page open.",
  "附件最多 10 个，总大小不超过 25 MB；大文件请改填下载链接。": "Attach up to 10 files, totaling no more than 25 MB. Use download links for larger files.",
  "暂时无法确认保存，请稍后再试。": "We cannot confirm that your task was saved yet. Please try again shortly.",
  "提交未完成，请检查填写内容后重试。": "The submission did not complete. Check your details and try again.",
  " 填写内容和附件仍在，也可以先导出备份。": " Your description and attachments are still here. You can export a backup.",
  "还没有收到保存回执。填写内容和附件仍在，请再试一次或导出备份。": "No save confirmation has arrived yet. Your description and attachments are still here; try again or export a backup.",
  "任务和附件已保存。提交编号：": "Your task and attachments are saved. Submission ID: ",
  "。请保留这个编号；也可以导出备份。": ". Keep this ID; you can also export a backup.",
  "等待时间较长，还无法确认保存。": "This is taking longer than expected. We cannot confirm that your task was saved yet.",
  "网络连接中断，还无法确认保存。": "The connection was interrupted. We cannot confirm that your task was saved yet.",
  " 填写内容和附件仍在，请再试一次或导出备份。": " Your description and attachments are still here; try again or export a backup.",
  "要做什么": "Task",
  "起始材料": "Starting materials",
  "软件与版本": "Software and version",
  "交付结果": "Deliverables",
  "验收办法": "Acceptance checks",
  "联系方式": "Contact",
  "未填写": "Not provided",
  "\n\n附件\n": "\n\nAttachments\n",
  "（原名：": " (original filename: ",
  "）": ")",
  "\n\n提交编号\n": "\n\nSubmission ID\n",
  "任务说明.txt": "task-description.txt",
  "任务已保存，备份也已导出。提交编号：": "Your task is saved and the backup has been exported. Submission ID: ",
  "。": ".",
  "备份已导出。要交给我们，请点击“提交任务”。": "Backup exported. Click “Submit task” to send it to us.",
  "导出失败，填写内容和附件仍在，请再试一次。": "Backup export failed. Your description and attachments are still here; please try again.",
  "请从提交页面发送任务。": "Please send your task from the submission page.",
  "此接口只支持提交任务和状态检查。": "This service supports task submissions and status checks only.",
  "提交格式有误，请从表单重试。": "The submission format is invalid. Please try again from the form.",
  "附件总大小不能超过 25 MB。": "Attachments must total no more than 25 MB.",
  "无法读取附件，请重新选择后提交。": "The attachments could not be read. Select them again and retry.",
  "任务信息格式有误，请重试。": "The task information has an invalid format. Please retry.",
  "填写内容过长，请精简后提交。": "The description is too long. Shorten it and try again.",
  "提交编号有误，请刷新页面后重试。": "The submission ID is invalid. Export a backup, then reload and retry.",
  "附件格式有误。": "The attachment format is invalid.",
  "最多 10 个附件，总大小不能超过 25 MB。": "Attach up to 10 files, totaling no more than 25 MB.",
  "请提供起始材料说明、下载链接或附件。": "Provide a description of the starting materials, download links or attachments.",
  "附件文件名过长，请缩短后再试。": "An attachment filename is too long. Shorten it and retry.",
  "任务暂时无法保存，请稍后重试。填写内容仍在。": "The task cannot be saved right now. Try again shortly; your description is still here.",
  "无法确认附件内容，请保留填写内容和附件后重试。": "The attachments could not be verified. Keep your description and files, then retry.",
  "此提交编号已有另一份任务，请刷新后提交修改版。": "This submission ID already belongs to another task. Export a backup before reloading to submit the revised version.",
  "附件暂时无法保存，请稍后重试。填写内容和附件仍在。": "Attachments cannot be saved right now. Try again shortly; your description and files are still here.",
  "附件保存未确认，请再试一次。填写内容和附件仍在。": "The attachment save is not confirmed. Retry; your description and files are still here.",
  "保存尚未确认，请再试一次。填写内容和附件仍在。": "Saving is not confirmed yet. Retry; your description and files are still here.",
  "我们是一支关注 AI 与工程落地的跨学科团队。我们已在化工、PCB 和三维工程建模中积累一批真实任务，并与 Stanford、Berkeley 等高校及国内企业开展合作，正在打造「工程设计 LastXM」：用中试阶段的真实设计研发难题，检验 AI 能否用专业软件完成工程工作。题目要真实、够难、能验收；你不用懂 AI，像交给同事一样说明任务即可。参与者有机会与工程师、AI 研究者和产业伙伴交流、探索联合研究；达到贡献标准可参与论文联合署名，优秀贡献有机会获得奖金。": "We are an interdisciplinary team focused on AI and real engineering work. We have collected tasks in chemical engineering, PCB design and 3D engineering modeling, and collaborate with universities including Stanford and Berkeley and companies in China. Engineering Design LastXM benchmarks AI on real design and R&D challenges at the pilot stage, using professional software. Tasks should be real, difficult and assessable. No AI expertise is needed: brief us as you would a colleague. Contributors can connect with engineers, AI researchers and industry peers and explore joint research. Meeting the contribution criteria qualifies you for paper co-authorship; outstanding contributions may receive cash awards.",
  "工程设计 LastXM · 任务征集": "Engineering Design LastXM · Submit a task",
  "工程设计 LastXM 首页": "Engineering Design LastXM home",
  "工程设计 ": "Engineering Design ",
  "工程设计 LastXM ": "Engineering Design LastXM ",
  "中试工程设计难题征集": "Call for pilot-stage design tasks",
  "把中试里的设计难题，": "Bring your pilot-stage design tasks.",
  "从化工、PCB 和三维工程建模的积累出发，征集各方向面向中试的设计研发任务。": "Building on our work in chemical engineering, PCB design and 3D modeling, we seek pilot-stage design and R&D tasks across these fields.",
  "CAD 建模、仿真、优化与设计验证贯穿各方向，跨专业任务也欢迎。": "CAD modeling, simulation, optimization and design validation span all fields. Tasks across disciplines are welcome.",
  "提交一道中试工程设计难题": "Submit a pilot-stage design task",
  "用专业语言填写，说明中试应用、目标规模和工程约束。": "Use the language of your field. Describe the pilot application, intended scale and engineering constraints.",
  "像交给同事一样，写清中试应用或工程验证阶段、设计对象、目标规模和主要约束。": "Brief us as you would a colleague. State the pilot application or engineering-validation stage, design target, intended scale and main constraints.",
  "例如：为中试装置设计控制板，依据给定原理图完成 PCB 布局布线，满足接口、隔离、尺寸和安装要求。": "For example: design a control board for pilot equipment, lay out and route the PCB from the supplied schematic, and meet interface, isolation, size and mounting requirements.",
  "提供工程文件、设计要求、参考结果或检查脚本；写清用途，也可填下载链接。": "Provide engineering files, design requirements, reference results or checking scripts. Explain their purpose, or provide download links.",
  "例如：可编辑的 .kicad_pcb、DRC 报告，以及中试设计要求的逐项检查结果。": "For example: an editable .kicad_pcb, a DRC report and a check of each pilot-stage design requirement.",
  "例如：DRC 违规和未连接项均为 0；满足附件中的接口、隔离、安装等工程要求。没有脚本，就写你平时怎么验收，并附真实完成的参考结果。": "For example: zero DRC violations and unconnected items, with interface, isolation and mounting requirements met. Without a script, describe your usual checks and include reference results from a completed workflow.",
  "中试控制板示例：任务、起始文件、软件、交付结果和验收办法": "Pilot control-board example: task, starting files, software, deliverables and acceptance checks",
  "中试控制板示例，仅演示填写方式；实际题目需附可复现材料，并通过难度审核。": "Pilot control-board example: a guide to filling in the form. Actual tasks require reproducible materials and difficulty review.",
  "填入中试 PCB 示例": "Load pilot PCB example",
  "参与有哪些收获？": "What can I gain from contributing?",
  "你可以了解 AI 在本专业的实际能力，与不同领域的工程师、AI 研究者和产业伙伴交流，探索联合研究机会。达到贡献标准可参与论文联合署名；优秀贡献有机会获得奖金，金额、名额和发放安排以本项目公布的规则为准。": "Learn what AI can do in your field, connect with engineers, AI researchers and industry peers, and explore joint research. Meeting the contribution criteria qualifies you for paper co-authorship. Outstanding contributions may receive cash awards; amounts, available awards and payment arrangements follow the rules announced by this project.",
  "面向中试与工程验证的设计研发 AI 基准": "An AI benchmark for pilot-stage design and engineering validation",
  "只征集中试及同等工程验证阶段的设计研发任务；实验室原理验证、生产执行和日常运维不在本轮范围内。": "We seek design and R&D tasks for pilot-scale development and comparable engineering validation. Laboratory-only proof-of-concept tasks, production execution and routine operations are outside this round’s scope.",
  "征集范围": "Scope",
  "先看范围：题目需对应中试及同等工程验证阶段的设计研发。满足范围后，再看三点：": "First check the scope: the task must address design and R&D for pilot-scale development or comparable engineering validation. Then check these three criteria:",
  "面向哪些阶段？和 AI for Science 怎么区分？": "What is the scope, and how does it differ from AI for Science?",
  "本轮聚焦面向中试的设计研发：化工可以是工程放大与中试装置设计，机械、电子等可以是样机与试验线设计，其他专业可用同等工程验证场景表述。只停留在实验室规模的科学探索、原理验证或小试题目暂不收录，生产执行和日常运维也另行评测。": "This round focuses on design and R&D for the pilot stage: process scale-up and pilot-plant design in chemical engineering, prototype and pilot-line design in mechanical or electronic engineering, and comparable engineering-validation scenarios in other fields. Tasks limited to laboratory-scale scientific exploration, proof of concept or bench-scale experiments are outside this round’s scope. Production execution and routine operations are evaluated separately.",
  "我们按应用阶段与工程要求划定范围，而不是仅按学科标签分类。科学研究成果可以作为起点，但任务必须落到中试应用、真实工程约束和可验收的设计交付。可以在专业软件里完成设计、建模、仿真或校核，不要求 AI 直接操作现场设备。": "We define the scope by application stage and engineering requirements, rather than discipline labels alone. Research results can be a starting point, but the task must address a pilot application, real engineering constraints and assessable design deliverables. Design, modeling, simulation and checks can take place in professional software; AI is not required to operate physical equipment.",
  "怎么说明中试背景？还要多填一项吗？": "How do I describe the pilot context? Is another field needed?",
  "不用增加填写项。在“要做什么”中写清设计用于什么中试应用、处于哪个验证阶段、目标规模和主要约束，例如处理量、尺寸、功率或样机性能；在“起始材料”中提供可分享的工程文件、数据和设计依据；在“怎样算做对”中写清验收标准，并提供实际完成任务得到的参考结果。": "No extra field is needed. In the task description, state the pilot application, validation stage, intended scale and main constraints—for example, throughput, dimensions, power or prototype performance. Provide shareable engineering files, data and design inputs with the starting materials. In the acceptance checks, state clear criteria and provide reference results from actually completing the task.",
  "按本专业的语言和指标说明即可。没有评分脚本也能提交，关键是材料足够复现，交付结果能按中试工程要求检查。": "Use the language and measures familiar to your field. You can submit without a scoring script; the materials must support reproduction and the deliverables must be checkable against the pilot-stage engineering requirements.",
  "为一套中试装置的控制系统完成控制板 PCB 布局与布线。依据给定原理图、外壳和安装条件，完成元件布局、布线、双面 GND 覆铜和接地过孔；满足附件规定的供电、接口、隔离、尺寸和安装约束。": "Lay out and route a control-board PCB for a pilot plant or pilot equipment. Use the supplied schematic, enclosure and mounting conditions to complete component placement, routing, GND copper pours on both sides and ground vias. Meet the power, interface, isolation, size and mounting constraints in the design requirements.",
  "起始文件：pilot_controller.kicad_sch、design_requirements.pdf；附外壳尺寸、接口与供电要求、专用封装库、参考布局和检查脚本（如有）。说明控制板用于什么中试装置及其设计工作条件。": "Starting files: pilot_controller.kicad_sch and design_requirements.pdf. Include enclosure dimensions, interface and power requirements, custom footprint libraries, a reference layout and checking scripts if available. Describe the pilot application and design operating conditions.",
  "KiCad 10.0，Windows；如需专用库，请一并提供。": "KiCad 10.0 on Windows. Include any required custom libraries.",
  "交付可编辑的 pilot_controller.kicad_pcb、DRC 报告，以及对中试设计要求的逐项检查结果。": "Deliver an editable pilot_controller.kicad_pcb, a DRC report and a check of each pilot-stage design requirement.",
  "硬标准：DRC 违规和未连接项均为 0；尺寸、安装孔、接口、隔离和供电要求符合 design_requirements.pdf，并提供检查记录。软标准：对照实际完成的参考设计，评审布局、散热和可制造性；需要时由 AI 辅助评审、专家复核。": "Objective checks: zero DRC violations and unconnected items. Dimensions, mounting holes, interfaces, isolation and power requirements must meet design_requirements.pdf, with checking records. Expert review: compare the layout, thermal design and manufacturability with reference results from a completed workflow. AI can assist with review, with expert verification when needed.",
  "工程设计 LastXM 提交说明完整图": "Engineering Design LastXM full submission guide",
  "工程设计LastXM-任务包.zip": "engineering-design-lastxm-task.zip"
};
  const reverse = new Map(Object.entries(translations).map(([zh, en]) => [en, zh]));
  let language = 'zh';
  function translate(source, lang = language) {
    if (lang === 'en') {
      if (Object.hasOwn(translations, source)) return translations[source];
      const trimmed = source.trim();
      return Object.hasOwn(translations, trimmed)
        ? source.replace(trimmed, translations[trimmed]) : source;
    }
    return reverse.get(source) ?? source;
  }
  const texts = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (node.parentElement.closest('script,style,textarea,[data-language-switch]')) continue;
    if (translate(node.data, 'en') !== node.data) texts.push({ node, source: node.data });
  }
  const attributes = [];
  for (const element of document.querySelectorAll('[placeholder],[alt],[aria-label],[title]')) {
    if (element.closest('[data-language-switch]')) continue;
    for (const name of ['placeholder', 'alt', 'aria-label', 'title']) {
      const source = element.getAttribute(name);
      if (source && translate(source, 'en') !== source) attributes.push({ element, name, source });
    }
  }
  const title = document.title;
  const guide = document.querySelector('.guide-trigger img');
  const banner = document.querySelector('.domain-banner');
  const buttons = document.querySelectorAll('[data-language]');
  function setLanguage(next, remember = true) {
    if (next !== 'zh' && next !== 'en') return;
    language = next;
    document.documentElement.lang = next === 'en' ? 'en' : 'zh-CN';
    document.title = translate(title);
    for (const { node, source } of texts) node.data = translate(source);
    for (const { element, name, source } of attributes) element.setAttribute(name, translate(source));
    guide.src = next === 'en' ? './submission-guide.en.png?v=lastxm-pilot-1' : './submission-guide.png?v=lastxm-pilot-1';
    banner.src = next === 'en' ? './engineering-domains-banner.en.png' : './engineering-domains-banner.png';
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.language === next)));
    if (remember) {
      try { localStorage.setItem('industrial-last-exam-language', next); } catch {}
      try {
        const url = new URL(window.location.href);
        url.searchParams.set('lang', next);
        history.replaceState(history.state, '', url.href);
      } catch {}
    }
    window.dispatchEvent(new CustomEvent('industrial-language-change', { detail: { language: next } }));
  }
  window.IndustrialI18n = {
    text: source => translate(source),
    translator: () => { const captured = language; return source => translate(source, captured); },
    get language() { return language; },
    setLanguage,
    example: source => Object.fromEntries(Object.entries(source).map(([key, value]) => [key, translate(value)])),
    serverMessage: (source, fallback) => {
      const translated = translate(source || fallback);
      return language === 'en' && /[\u3400-\u9fff]/.test(translated) ? translate(fallback) : translated;
    },
  };
  buttons.forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.language)));
  let preferred = 'zh';
  try {
    const explicit = new URL(window.location.href).searchParams.get('lang');
    const saved = localStorage.getItem('industrial-last-exam-language');
    preferred = ['zh', 'en'].includes(explicit) ? explicit : ['zh', 'en'].includes(saved) ? saved : 'zh';
  } catch {
    try { preferred = new URL(window.location.href).searchParams.get('lang') === 'en' ? 'en' : 'zh'; } catch {}
  }
  setLanguage(preferred, false);
})();
