---
page_type: sample
author: Ectrico
description: A GameMode of developing Minecraft scripts using TypeScript and a build process.
ms.author: 3041494808@qq.com
ms.date: 22/09/2024
languages:
  - typescript
products:
  - minecraft
---

--介绍--  
游戏模式：SCP: Inbreak(入侵)  
游戏玩法：  
回合时间共12分钟  
准备时间10s>  
设施内刷新保安人员  
设施外刷新混沌分裂者  
准备时间0s>  
设施外刷新九尾狐  
回合时间>  
一共有6次随机时间的随机支援刷新  
回合时间0s>  
游戏结束  
判定胜利队伍  
此版本为测试版，暂时只以击杀对方所有人为胜利目的。  
  
--使用方法--  
一、配置模式  
打开行为文件的main.js  
// 模式管理员配置，您将可以使用#help等模式控制指令，将以下字段改成你自己的玩家ID，例如：["test1", "test2"]  
var Admin = ["Ectrico", "whz2006", "Removenuke", "A POTATO awa"];  
修改以下内容为你的地图坐标  
// MTF刷新位置  
var SpawnPointNTF = [  
  { x: 2066, y: 66, z: -4894 },  
  { x: 2068, y: 66, z: -4894 },  
  { x: 2070, y: 66, z: -4894 },  
  { x: 2066, y: 66, z: -4896 },  
  { x: 2068, y: 66, z: -4896 },  
  { x: 2070, y: 66, z: -4896 },  
  { x: 2066, y: 66, z: -4898 },  
  { x: 2068, y: 66, z: -4898 },  
  { x: 2070, y: 66, z: -4898 }  
];  
// CI刷新位置  
var SpawnPointCI = [  
  { x: 1958, y: 105, z: -4723 },  
  { x: 1959, y: 106, z: -4722 },  
  { x: 1960, y: 106, z: -4721 },  
  { x: 1962, y: 105, z: -4718 },  
  { x: 1964, y: 104, z: -4715 },  
  { x: 1939, y: 105, z: -4716 },  
  { x: 1937, y: 105, z: -4718 },  
  { x: 1936, y: 105, z: -4720 },  
  { x: 1934, y: 105, z: -4722 }  
];  
// Guard刷新位置  
var SpawnPointGuard = [  
  { x: 1930, y: 60, z: -4649 },  
  { x: 1930, y: 60, z: -4651 },  
  { x: 1930, y: 60, z: -4653 },  
  { x: 1932, y: 60, z: -4649 },  
  { x: 1932, y: 60, z: -4651 },  
  { x: 1932, y: 60, z: -4653 },  
  { x: 1934, y: 60, z: -4649 },  
  { x: 1934, y: 60, z: -4651 },  
  { x: 1934, y: 60, z: -4653 }  
];  
如果需要修改游戏角色武器装备，请查看包含以下字段的角色对象  
  items: [  
    ["l4gg:m16", 1],  
    ["l4gg:m16_mag", 8],  
    ["bli:lv5", 1]  
  ],  
  armor: [  
    ["slot.armor.head", "bli:fast_gasmask"],  
    ["slot.armor.chest", "bli:vest_ntf"],  
    ["slot.armor.legs", "bli:pants_ntf"],  
    ["slot.armor.feet", "bli:boots_guard"]  
  ]  
将其中""字符串内物品id修改即可，其中items内的number是物品数量  
其他内容不建议修改，如果您理解其中的工作方式，建议修改源文件并自行编译。  
  
二、模式依赖  
该模式需要以下内容才可正常运行：  
1.FTRF-INFRA-Script_v1.3.0（建筑方块/护甲）：https://www.ftstudio.top/?download=ftrf-infrastructure  
  或FTRF-Armor_v1.2.0（仅支持部分护甲）：https://www.ftstudio.top/?download=ftrf-armor%e6%8a%a4%e7%94%b2%e5%8c%85_v1-0-0  
2.FTRF-SCP.CB_Sounds.v1.0.0（广播/音效）：https://www.ftstudio.top/?download=ftrf-scp-cb_sounds-v1-0-0-scp%e6%94%b6%e5%ae%b9%e5%a4%b1%e6%95%88%e9%9f%b3%e6%95%88%e5%8c%85  
