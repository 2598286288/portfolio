window.PORTFOLIO_PROJECTS = [
  {
    id: "escapement",
    no: "01",
    featured: true,
    type: "个人项目",
    title: "擒纵机构桌面玩具",
    meta: "2026.03 – 2026.06 ｜ SolidWorks / FDM 3D 打印",
    tagline: "约 20 个零件自主建模、出图、打印与装配，复现间歇步进。",
    summary: "以开源擒纵机构为设计参考，独立完成约 20 个零件的自主建模、整机装配、工程图与 FDM 打印调试，复现「发条储能 → 齿轮系减速 → 擒纵轮间歇步进」的传动链。",
    cardPoints: [
      "约 20 个零件 SolidWorks 建模与整机装配",
      "梳理传动链并完成干涉检查",
      "FDM 打印、装配与轴孔 / 毛刺修正"
    ],
    bullets: [
      {
        label: "建模装配",
        text: "完成发条、多级齿轮、擒纵轮 / 擒纵叉、机架、轴销等约 20 个零件的建模与装配约束，输出装配图及关键零件工程图。"
      },
      {
        label: "传动复核",
        text: "梳理发条—齿轮系—擒纵传动链，通过装配约束与干涉检查验证机构可动性。"
      },
      {
        label: "打印调试",
        text: "PLA / 0.4 mm 喷嘴，按结构件与配合件分组调参；扩孔修正轴孔收缩、去毛刺、调平热床，实现连续步进。"
      }
    ],
    metrics: ["20 个零件", "0.12–0.2 mm 层高", "连续步进"],
    cover: "assets/img/assembled.jpg",
    coverAlt: "擒纵机构整机装配完成图",
    media: [
      {
        type: "model",
        src: "assets/model/escapement.glb?v=4",
        poster: "assets/img/hero-render.jpg",
        caption: "SolidWorks 装配体 / 可拖动旋转",
        alt: "擒纵机构 3D 装配模型"
      },
      {
        type: "video",
        src: "assets/video/demo.mp4",
        poster: "assets/video/poster.jpg",
        caption: "连续运行 / 19 秒",
        aria: "擒纵机构连续运行演示"
      }
    ]
  },
  {
    id: "butterfly",
    no: "02",
    type: "建模手",
    title: "仿生扑翼蝴蝶",
    meta: "2025.03 – 2025.06 ｜ SolidWorks / 3D 打印",
    tagline: "曲柄摇杆 + 主副翼重叠联动，SG92 ×2 直驱。",
    summary: "以曲柄摇杆机构为核心完成扑翼整机建模与装配，采用主副翼重叠联动、SG92 ×2 舵机直驱、PET 翼膜与碳纤维翼梁的轻量化方案。当前展示数字样机与扑动仿真视频。",
    bullets: [
      {
        label: "整机建模",
        text: "完成扑翼整机建模与装配，梳理曲柄摇杆—主副翼的传动与联动关系。"
      },
      {
        label: "轻量化",
        text: "采用 3D 打印主体 + 碳纤维翼梁 + PET 翼膜，兼顾轻量与可制造性。"
      },
      {
        label: "运动仿真",
        text: "输出扑动仿真视频，检查扑动循环、翼面干涉与运动关系。"
      }
    ],
    metrics: ["SG92 ×2", "PET + 碳纤维", "数字样机"],
    cover: "assets/projects/butterfly/hero.png",
    coverAlt: "仿生扑翼蝴蝶整机数字样机",
    media: [
      {
        type: "image",
        src: "assets/projects/butterfly/hero.png",
        caption: "整机数字样机 / 3/4 视角",
        alt: "仿生扑翼蝴蝶整机数字样机",
        fit: "contain"
      },
      {
        type: "video",
        src: "assets/projects/butterfly/flap.mp4",
        poster: "assets/projects/butterfly/flap-poster.jpg",
        caption: "扑动仿真 / 6.9 秒",
        aria: "仿生扑翼蝴蝶扑动仿真"
      }
    ]
  },
  {
    id: "five-claw",
    no: "03",
    type: "个人练习",
    title: "五爪装配体",
    meta: "SolidWorks 2025 ｜ 装配 / 爆炸图 / 动画",
    tagline: "5 爪联动，12 种零件、92 个实例，完成装配、爆炸图与动画。",
    summary: "个人 SolidWorks 装配练习，完成五爪联动装配体的装配约束、爆炸视图与联动动画，重点展示装配关系与零件分组。",
    bullets: [
      {
        label: "装配约束",
        text: "完成底座 / 爪碗、夹具 / 爪壳、支撑盖 / 碗关节、连杆键、销轴等 12 种零件、92 个实例的装配。"
      },
      {
        label: "爆炸视图",
        text: "输出爆炸视图，按零件分组梳理装配关系。"
      },
      {
        label: "联动动画",
        text: "制作五爪联动动画，展示五爪运动与装配逻辑。"
      }
    ],
    metrics: ["5 爪", "12 种零件", "92 个实例"],
    cover: "assets/projects/five-claw/poster-card.jpg",
    coverAlt: "五爪装配体爆炸视图",
    media: [
      {
        type: "image",
        src: "assets/projects/five-claw/poster-annotated.jpg",
        caption: "爆炸视图 / 零件分组",
        alt: "五爪装配体爆炸视图与零件分组",
        fit: "contain"
      },
      {
        type: "video",
        src: "assets/projects/five-claw/animation.mp4",
        poster: "assets/projects/five-claw/poster-card.jpg",
        caption: "五爪联动 / 12 秒",
        aria: "五爪装配体联动动画"
      }
    ]
  },
  {
    id: "linxin",
    no: "04",
    type: "实习",
    title: "立鑫特 · 治具设计",
    meta: "2026.07 – 2026.09 ｜ 自动化助理工程师",
    tagline: "丝印、夹具、计时保压三类治具，50+ 套图纸，换型 +30%。",
    summary: "面向多规格模具工件，完成丝印治具、夹具治具 1 与计时保压治具的结构设计、出图及现场调试；累计输出 50 余套图纸，换型效率提升约 30%。",
    bullets: [
      {
        label: "丝印治具",
        text: "完成结构设计、出图与装配调试。"
      },
      {
        label: "夹具治具 1",
        text: "设计多规格夹取 / 快换结构，适配不同工件换型。"
      },
      {
        label: "计时保压治具",
        text: "完成结构设计与现场调试，附两段动作视频。"
      }
    ],
    metrics: ["50+ 套图纸", "+30% 换型", "3 类治具"],
    cover: "assets/projects/linxin/fixture.jpg",
    coverAlt: "立鑫特夹具治具 1 装配现场",
    media: [
      {
        type: "image",
        src: "assets/projects/linxin/screen.jpg",
        caption: "丝印治具 / 实物",
        alt: "立鑫特丝印治具实物"
      },
      {
        type: "image",
        src: "assets/projects/linxin/fixture.jpg",
        caption: "夹具治具 1 / 装配现场",
        alt: "立鑫特夹具治具 1 装配现场"
      },
      {
        type: "video",
        src: "assets/projects/linxin/pressure-01.mp4",
        poster: "assets/projects/linxin/pressure-01-poster.jpg",
        caption: "计时保压治具 / 动作 01",
        aria: "计时保压治具动作 01"
      },
      {
        type: "video",
        src: "assets/projects/linxin/pressure-02.mp4",
        poster: "assets/projects/linxin/pressure-02-poster.jpg",
        caption: "计时保压治具 / 动作 02",
        aria: "计时保压治具动作 02"
      }
    ]
  },
  {
    id: "cnc",
    no: "05",
    type: "竞赛",
    title: "数控综合应用技术",
    meta: "2022.09 – 2023.05 ｜ 数控车工位主操作手 ｜ 省一等奖",
    tagline: "4 小时完成 8 件赛件车削，关键尺寸 0.02 mm 以内。",
    summary: "广东省职业院校技能大赛（数控综合应用技术）参赛项目：4 小时内完成 8 件赛件车削，覆盖轴类、套类、螺纹与圆弧曲面，并协同完成装配与误差修正。",
    bullets: [
      {
        label: "工艺编排",
        text: "独立完成 8 件赛件车削，自主编排粗精加工工序与切削参数。"
      },
      {
        label: "刀路仿真",
        text: "使用 Mastercam 完成刀路设计与仿真，优化进 / 退刀，程序一次通过率 95% 以上。"
      },
      {
        label: "精度装配",
        text: "关键尺寸公差控制在 0.02 mm 以内，协同完成 1 小时装配与误差修正，获省级一等奖。"
      }
    ],
    metrics: ["省一等奖", "8 件 / 4 h", "0.02 mm", "95%"],
    cover: "assets/projects/cnc/model.jpg",
    coverAlt: "数控比赛赛件装配完成图",
    media: [
      {
        type: "image",
        src: "assets/projects/cnc/model.jpg",
        caption: "赛件装配 / 实物",
        alt: "数控比赛赛件装配完成图"
      },
      {
        type: "image",
        src: "assets/projects/cnc/part-drawing.png",
        caption: "赛件零件图",
        alt: "数控赛件零件图",
        fit: "contain"
      },
      {
        type: "image",
        src: "assets/projects/cnc/assembly-drawing.png",
        caption: "赛件装配图",
        alt: "数控赛件装配图",
        fit: "contain"
      },
      {
        type: "video",
        src: "assets/projects/cnc/demo.mp4",
        poster: "assets/projects/cnc/model.jpg",
        caption: "赛件运行 / 11 秒",
        aria: "数控比赛赛件运行演示"
      }
    ]
  }
];