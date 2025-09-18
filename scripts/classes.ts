import { world, system, Dimension, Player, Vector3 } from "@minecraft/server";
import {
  SpawnPointNTF,
  SpawnPointCI,
  SpawnPointGuard,
  SpawnPointSCP035,
  SpawnPointClassD,
  SpawnPointSCP173,
  SpawnPointSCP966,
  SpawnPointRes,
  SpawnPointSCP106,
  SpawnPointSH,
  SpawnPointSCP457,
  SpawnPointSNE,
  SpawnPointSCP066,
  SpawnPointSCP049,
  SpawnPointSCP096,
  SpawnPointGOC,
  SpawnPointSCP008_1,
} from "./maps/ft_site_15";
import { CustomSupportLimit } from "./main";
import { PlaySoundForAllPlayer } from "./misc";
import { SCP049_Infection, SCP049ChooseType, SpawnPointSCP049_2 } from "./character_skills";
// 定义主世界维度
let overworld!: Dimension;
// 定义下界维度
let nether!: Dimension;
// 定义末地维度
let theEnd!: Dimension;

world.afterEvents.worldLoad.subscribe((arg) => {
  // 获取主世界维度
  overworld = world.getDimension("overworld");
  // 获取下界维度
  nether = world.getDimension("nether");
  // 获取末地维度
  theEnd = world.getDimension("the_end");
});

export const AllClassesTag = [
  "sci",
  "res_asst",
  "res_doctor",
  "res",
  "res_senior",
  "res_chief",
  "res_cog_haz",
  "allguard",
  "guard",
  "guard_med",
  "guard_tech",
  "guard_rru",
  "guard_chief",
  "guard_hs",
  "guard_sd",
  "allntf",
  "ntf",
  "ntf_breaker",
  "ntf_sniper",
  "ntf_med",
  "ntf_com",
  "allsne",
  "sne",
  "sne_breaker",
  "sne_com",
  "allrrh",
  "rrh",
  "allclassd",
  "classd",
  "classd_thief",
  "classd_rioters",
  "classd_madman",
  "classd_engineer",
  "classd_fugitive",
  "allci",
  "ci_agent",
  "ci",
  "ci_breaker",
  "ci_sniper",
  "ci_med",
  "ci_com",
  "allgoc",
  "goc",
  "goc_des",
  "goc_com",
  "scp",
  "sh",
  "scp173",
  "scp457",
  "scp066",
  "scp049",
  "scp049_2",
  "scp049_2_f",
  "scp049_2_s",
  "scp966",
  "scp106",
  "scp096",
  "scp035",
  "scp008_1",
];

export const CanSpawnSCPTags = ["scp173", "scp457", "scp066", "scp049", "scp106", "scp096"];

export const CanEscapeClassesTag = ["sci", "allclassd", "scp"];

export const CanEvacuateClassesTag = ["sci", "allguard", "allntf", "allsne", "allrrh", "allgoc"];

const HumanInventory = [18, 27];
//
//
//
//
//
export const ClassD = {
  title: "§6Class D",
  subtitle: "§6D级人员",
  target_tip: "§f躲避安保人员的搜捕\n注意突破收容的异常\n他们会杀死你\n尽一切可能逃离设施",
  tag: "classd",
  group: "allclassd",
  items: [
    // ["l4gg:ak47", 1],
    // ["l4gg:ak47_mag", 16],
    // ["bli:lvci", 1],
  ],
  armor: [
    // ["slot.armor.head", "bli:fast_gasmask_ci"],
    ["slot.armor.chest", "bli:classd_clothes"],
    ["slot.armor.legs", "bli:pants_classd"],
    // ["slot.armor.feet", "bli:boots_guard"],
  ],
  inventory: HumanInventory,
};

export const ClassD_Thief = {
  title: "§6Class D - Thief",
  subtitle: "§6D级人员 - 小偷",
  target_tip:
    "§f事故发生前\n你从一个安保人员的裤裆里偷了些东西\n利用好它们。躲避安保人员的搜捕\n注意突破收容的异常\n他们会杀死你\n尽一切可能逃离设施",
  tag: "classd_thief",
  group: "allclassd",
  items: [
    ["bli:yeshiyi", 1, "random", "bli:lv1", 1],
    ["bli:first_aid_kit", 1, "random", "bli:small_first_aid_kit", 1],
    // ["bli:lvci", 1],
  ],
  armor: [
    // ["slot.armor.head", "bli:fast_gasmask_ci"],
    ["slot.armor.chest", "bli:classd_clothes"],
    ["slot.armor.legs", "bli:pants_classd"],
    // ["slot.armor.feet", "bli:boots_guard"],
  ],
  inventory: HumanInventory,
};

export const ClassD_Rioters = {
  title: "§6Class D - Rioters",
  subtitle: "§6D级人员 - 暴动分子",
  target_tip:
    "§f关在这里的每一天你都密谋着造反\n因此你积累了些武器\n躲避安保人员的搜捕\n注意突破收容的异常\n他们会杀死你\n尽一切可能逃离设施",
  tag: "classd_rioters",
  group: "allclassd",
  items: [
    ["bli:simple_knife", 1, "random", "bli:water_pipe", 1],
    // ["l4gg:ak47_mag", 16],
    // ["bli:lvci", 1],
  ],
  armor: [
    // ["slot.armor.head", "bli:fast_gasmask_ci"],
    ["slot.armor.chest", "bli:classd_clothes"],
    ["slot.armor.legs", "bli:pants_classd"],
    // ["slot.armor.feet", "bli:boots_guard"],
  ],
  inventory: HumanInventory,
};

export const ClassD_Madman = {
  title: "§vClass D - Madman",
  subtitle: "§vD级人员 - 疯子",
  target_tip:
    "§f你在一天天的囚禁与恐吓中逐渐癫狂\n因此你疯了，是的，真的疯了\n你现在见谁打谁，即使是你的队友\n尽一切可能逃离设施",
  tag: "classd_madman",
  group: "allclassd",
  items: [["bli:simple_knife", 1, "random", "bli:water_pipe", 1]],
  armor: [
    // ["slot.armor.head", "bli:fast_gasmask_ci"],
    ["slot.armor.chest", "bli:vest_inverse"],
    ["slot.armor.legs", "bli:pants_classd"],
    // ["slot.armor.feet", "bli:boots_guard"],
  ],
  inventory: HumanInventory,
};

export const ClassD_Engineer = {
  title: "§6Class D - Engineer",
  subtitle: "§6D级人员 - 技工",
  target_tip:
    "§f你在该站点经常协助电工进行设施维护\n因此你还拥有一些保险丝存货\n帮助队友修复损坏的设备\n躲避安保人员的搜捕\n注意突破收容的异常\n他们会杀死你\n尽一切可能逃离设施",
  tag: "classd_engineer",
  group: "allclassd",
  items: [
    ["bli:fuse_6a", 1, "random", "bli:fuse_9a", 1],
    // ["l4gg:ak47_mag", 16],
    // ["bli:lvci", 1],
  ],
  armor: [
    // ["slot.armor.head", "bli:fast_gasmask_ci"],
    ["slot.armor.chest", "bli:classd_clothes"],
    ["slot.armor.legs", "bli:pants_classd"],
    // ["slot.armor.feet", "bli:boots_guard"],
  ],
  inventory: HumanInventory,
};

export const ClassD_Fugitive = {
  title: "§6Class D - Fugitive",
  subtitle: "§6D级人员 - 潜逃者",
  target_tip:
    "§f你通过“非法”渠道偷窃了一个SCP-268\n副手持SCP-268时其他人会将你忽略\n利用好这个道具，这会让逃离轻而易举\n躲避安保人员的搜捕\n注意突破收容的异常\n他们会杀死你\n尽一切可能逃离设施",
  tag: "classd_fugitive",
  group: "allclassd",
  items: [
    ["bli:scp268", 1],
    // ["l4gg:ak47_mag", 16],
    // ["bli:lvci", 1],
  ],
  armor: [
    // ["slot.armor.head", "bli:fast_gasmask_ci"],
    ["slot.armor.chest", "bli:classd_clothes"],
    ["slot.armor.legs", "bli:pants_classd"],
    // ["slot.armor.feet", "bli:boots_guard"],
  ],
  inventory: HumanInventory,
};

export const CI_Agent = {
  title: "§2Chaos Insurgency - Agent",
  subtitle: "§2混沌分裂者 - 特工",
  target_tip: "§f你早已潜伏多时\n现在是时候了\n组织D级人员\n与支援部队里应外合\n帮助D级逃离设施",
  tag: "ci_agent",
  group: "allclassd",
  items: [
    ["bli:taser_m26", 1],
    ["bli:lv1", 1],
    // ["bli:lvci", 1],
  ],
  armor: [
    // ["slot.armor.head", "bli:fast_gasmask_ci"],
    ["slot.armor.chest", "bli:classd_clothes"],
    ["slot.armor.legs", "bli:pants_classd"],
    // ["slot.armor.feet", "bli:boots_guard"],
  ],
  inventory: HumanInventory,
};

// ClassD刷新函数
// 刷新上限
const LimitClassDDefault = 27;
const LimitCIAgentDef = 1;
const LimitClassDFugitiveDef = 1;
export function spawn_classd() {
  let LimitClassD = LimitClassDDefault;
  if (CustomSupportLimit !== undefined) {
    LimitClassD = CustomSupportLimit;
  }
  let PreSpawnPlayer = world.getAllPlayers();
  let LimitCIAgent = LimitCIAgentDef;
  let LimitClassDFugitive = LimitClassDFugitiveDef;
  // world.sendMessage(`指挥官上限：${LimitCom}`);
  PreSpawnPlayer.forEach((player) => {
    const position = player.location;
    const PlayerTag = player.getTags();
    const PlayerID = player.name;
    if (LimitClassD !== 0) {
      if (AllClassesTag.some((arg) => PlayerTag.includes(arg))) {
      } else {
        if (!player.hasTag("dev")) {
          player.removeTag("spectator");
          overworld.runCommand(`effect "${PlayerID}" clear`);
          overworld.runCommand(`gamemode adventure "${PlayerID}"`);
          const SpawnPointID = Math.floor(Math.random() * SpawnPointClassD.length);
          // world.sendMessage(`SpawnPointID:${SpawnPointID} Player:${PlayerID}`);
          overworld.runCommand(
            `tp "${PlayerID}" ${SpawnPointClassD[SpawnPointID].x} ${SpawnPointClassD[SpawnPointID].y} ${SpawnPointClassD[SpawnPointID].z}`
          );
          const SpawnAllType = [
            ClassD,
            ClassD_Thief,
            ClassD_Rioters,
            CI_Agent,
            ClassD_Engineer,
            ClassD_Madman,
            ClassD_Fugitive,
          ];
          const TypeRandom = Math.floor(Math.random() * SpawnAllType.length);
          let SpawnType = SpawnAllType[TypeRandom];
          if (SpawnType === CI_Agent && LimitCIAgent !== 1) {
            SpawnType = ClassD;
          }
          if (SpawnType === CI_Agent && LimitCIAgent === 1) {
            LimitCIAgent = 0;
          }
          if (SpawnType === ClassD_Fugitive && LimitClassDFugitive !== 1) {
            SpawnType = ClassD;
          }
          if (SpawnType === ClassD_Fugitive && LimitClassDFugitive === 1) {
            LimitClassDFugitive = 0;
          }
          player.addTag(`${SpawnType.tag}`);
          player.addTag(`${SpawnType.group}`);
          overworld.runCommand(`title "${PlayerID}" times 0 300 0`);
          overworld.runCommand(`title "${PlayerID}" title ${SpawnType.title}`);
          overworld.runCommand(`title "${PlayerID}" subtitle ${SpawnType.subtitle}\n${SpawnType.target_tip}`);
          // player.sendMessage(`====================================`);
          // player.sendMessage(`§e>>>[角色信息]§f你是${SpawnType.subtitle}，§e任务目标：${SpawnType.target_tip}。`);
          // player.sendMessage(`====================================`);
          overworld.runCommand(`clear "${PlayerID}"`);
          overworld.runCommand(`effect "${PlayerID}" instant_health 1 255 true`);
          overworld.runCommand(`effect "${PlayerID}" resistance 20 255 true`);
          for (let slot = SpawnType.inventory[0]; slot < SpawnType.inventory[1]; slot++) {
            overworld.runCommand(
              `replaceitem entity "${PlayerID}" slot.inventory ${slot} ei:disable 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          overworld.runCommand(
            `replaceitem entity "${PlayerID}" slot.hotbar 8 ei:id_card 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
          );
          for (let i = 0; i < SpawnType.items.length; i++) {
            if (SpawnType.items[i][2] === "random") {
              const RandomNum = Math.random();
              // const RandomItemNum = SpawnType.items[i].length;
              if (RandomNum <= 0.5) {
                overworld.runCommand(`give "${PlayerID}" ${SpawnType.items[i][0]} ${SpawnType.items[i][1]}`);
              } //
              else {
                overworld.runCommand(`give "${PlayerID}" ${SpawnType.items[i][3]} ${SpawnType.items[i][4]}`);
              }
            } //
            else {
              overworld.runCommand(`give "${PlayerID}" ${SpawnType.items[i][0]} ${SpawnType.items[i][1]}`);
            }
          }
          for (let i = 0; i < SpawnType.armor.length; i++) {
            overworld.runCommand(
              `replaceitem entity "${PlayerID}" ${SpawnType.armor[i][0]} 0 ${SpawnType.armor[i][1]} 1 0`
            );
            // if (["slot.armor.chest", "slot.armor.legs"].includes(SpawnType.armor[i][0])) {
            //   overworld.runCommand(
            //     `replaceitem entity "${PlayerID}" ${SpawnType.armor[i][0]} 0 ${SpawnType.armor[i][1]} 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            //   );
            // }
          }
          // if (PlayerID === "Ectrico") {
          //   overworld.runCommand(
          //     `replaceitem entity "${PlayerID}"slot.armor.legs 0 bli:skirt_classd 1 0 {"minecraft:keep_on_death":{}}`
          //   );
          // }
          LimitClassD--;
        }
      }
    }
  });
}
//
//
//-------------------------------------------------------------------------------------------------------------------------------------------------------------
//
//
export const Res_Asst = {
  title: "§bAssistant Researcher",
  subtitle: "§b研究助理",
  target_tip:
    "§f注意突破收容的异常和已经出逃的D级人员\n他们会杀死你\n寻求安全官员与MTF的帮助\n尽一切可能逃离设施\n§e听从研究主管的调度\n他有与你相比更高的权限",
  tag: "res_asst",
  group: "sci",
  items: [["bli:lv2", 1]],
  armor: [
    // ["slot.armor.head", "bli:fast_gasmask_ci"],
    ["slot.armor.chest", "bli:res_clothes"],
    // ["slot.armor.legs", "bli:pants_ci"],
    // ["slot.armor.feet", "bli:boots_guard"],
  ],
  inventory: HumanInventory,
};

export const Res_Doctor = {
  title: "§bDoctor",
  subtitle: "§b医生",
  target_tip:
    "§f注意突破收容的异常和已经出逃的D级人员\n他们会杀死你\n寻求安全官员与MTF的帮助\n用你的医疗包帮助队友\n尽一切可能逃离设施\n§e听从研究主管的调度\n他有与你相比更高的权限",
  tag: "res_doctor",
  group: "sci",
  items: [
    ["bli:lv3", 1],
    ["bli:first_aid_kit_medic", 1],
  ],
  armor: [
    // ["slot.armor.head", "bli:fast_gasmask_ci"],
    ["slot.armor.chest", "bli:res_clothes"],
    // ["slot.armor.legs", "bli:pants_ci"],
    // ["slot.armor.feet", "bli:boots_guard"],
  ],
  inventory: HumanInventory,
};

export const Res = {
  title: "§bResearcher",
  subtitle: "§b研究人员",
  target_tip:
    "§f注意突破收容的异常和已经出逃的D级人员\n他们会杀死你\n寻求安全官员与MTF的帮助\n尽一切可能逃离设施\n§e听从研究主管的调度\n他有与你相比更高的权限",
  tag: "res",
  group: "sci",
  items: [["bli:lv3", 1]],
  armor: [
    // ["slot.armor.head", "bli:fast_gasmask_ci"],
    ["slot.armor.chest", "bli:res_clothes"],
    // ["slot.armor.legs", "bli:pants_ci"],
    // ["slot.armor.feet", "bli:boots_guard"],
  ],
  inventory: HumanInventory,
};

export const Res_Senior = {
  title: "§bSenior Researcher",
  subtitle: "§b高级研究人员",
  target_tip:
    "§f注意突破收容的异常和已经出逃的D级人员\n他们会杀死你\n寻求安全官员与MTF的帮助\n尽一切可能逃离设施\n§e听从研究主管的调度\n他有与你相比更高的权限",
  tag: "res_senior",
  group: "sci",
  items: [
    ["bli:lv4", 1],
    ["bli:yeshiyi", 1],
  ],
  armor: [
    // ["slot.armor.head", "bli:fast_gasmask_ci"],
    ["slot.armor.chest", "bli:res_clothes"],
    // ["slot.armor.legs", "bli:pants_ci"],
    // ["slot.armor.feet", "bli:boots_guard"],
  ],
  inventory: HumanInventory,
};

export const Res_Chief = {
  title: "§bResearch Chief",
  subtitle: "§b研究主管",
  target_tip:
    "§f注意突破收容的异常和已经出逃的D级人员\n他们会杀死你\n寻求安全官员与MTF的帮助\n尽一切可能逃离设施\n§e你拥有相比其他人更高的权限\n可以带领队友快速通过某些位置",
  tag: "res_chief",
  group: "sci",
  items: [
    ["bli:lv5", 1],
    ["bli:glock18", 1],
    ["bli:pistol_mag", 8],
  ],
  armor: [
    // ["slot.armor.head", "bli:fast_gasmask_ci"],
    ["slot.armor.chest", "bli:res_clothes"],
    // ["slot.armor.legs", "bli:pants_ci"],
    // ["slot.armor.feet", "bli:boots_guard"],
  ],
  inventory: HumanInventory,
};

export const Res_CogHaz = {
  title: "§bCognitive Hazard Researcher",
  subtitle: "§b认知危害专家",
  target_tip:
    "§f注意突破收容的异常和已经出逃的D级人员\n他们会杀死你\n寻求安全官员与MTF的帮助\n尽一切可能逃离设施\n§e你拥有针对SCP的抑制工具\n可以协助队友压制SCP异常",
  tag: "res_cog_haz",
  group: "sci",
  items: [
    ["bli:lv4", 1],
    ["ei:spray_fire_extinguisher", 1],
    ["ei:spray_lavender", 1],
    ["ei:spray_poison", 1],
  ],
  armor: [
    // ["slot.armor.head", "bli:fast_gasmask_ci"],
    ["slot.armor.chest", "bli:hazmat_suit_gray"],
    // ["slot.armor.legs", "bli:pants_ci"],
    // ["slot.armor.feet", "bli:boots_guard"],
  ],
  inventory: HumanInventory,
};

// Res刷新函数
// 刷新上限
const LimitResDefault = 27;
const LimitResDoctorDef = 1;
const LimitResChiefDef = 1;
const LimitResCogHazDef = 1;
export function spawn_res() {
  let LimitRes = LimitResDefault;
  if (CustomSupportLimit !== undefined) {
    LimitRes = CustomSupportLimit;
  }
  let PreSpawnPlayer = world.getAllPlayers();
  let LimitResDoctor = LimitResDoctorDef;
  let LimitResChief = LimitResChiefDef;
  let LimitResCogHaz = LimitResCogHazDef;
  // world.sendMessage(`指挥官上限：${LimitCom}`);
  PreSpawnPlayer.forEach((player) => {
    const position = player.location;
    const PlayerTag = player.getTags();
    const PlayerID = player.name;
    if (LimitRes !== 0) {
      if (AllClassesTag.some((arg) => PlayerTag.includes(arg))) {
      } else {
        if (!player.hasTag("dev")) {
          player.removeTag("spectator");
          overworld.runCommand(`effect "${PlayerID}" clear`);
          overworld.runCommand(`gamemode adventure "${PlayerID}"`);
          const SpawnPointID = Math.floor(Math.random() * SpawnPointRes.length);
          // world.sendMessage(`SpawnPointID:${SpawnPointID} Player:${PlayerID}`);
          overworld.runCommand(
            `tp "${PlayerID}" ${SpawnPointRes[SpawnPointID].x} ${SpawnPointRes[SpawnPointID].y} ${SpawnPointRes[SpawnPointID].z}`
          );
          const SpawnAllType = [Res_Asst, Res, Res_Doctor, Res_Senior, Res_Chief, Res_CogHaz];
          const TypeRandom = Math.floor(Math.random() * SpawnAllType.length);
          let SpawnType = SpawnAllType[TypeRandom];
          if (SpawnType === Res_Doctor && LimitResDoctor !== 1) {
            SpawnType = Res;
          }
          if (SpawnType === Res_Doctor && LimitResDoctor === 1) {
            LimitResDoctor = 0;
          }
          if (SpawnType === Res_Chief && LimitResChief !== 1) {
            SpawnType = Res;
          }
          if (SpawnType === Res_Chief && LimitResChief === 1) {
            LimitResChief = 0;
          }
          if (SpawnType === Res_CogHaz && LimitResCogHaz !== 1) {
            SpawnType = Res_CogHaz;
          }
          if (SpawnType === Res_CogHaz && LimitResCogHaz === 1) {
            LimitResCogHaz = 0;
          }
          player.addTag(`${SpawnType.tag}`);
          player.addTag(`${SpawnType.group}`);
          overworld.runCommand(`title "${PlayerID}" times 0 300 0`);
          overworld.runCommand(`title "${PlayerID}" title ${SpawnType.title}`);
          overworld.runCommand(`title "${PlayerID}" subtitle ${SpawnType.subtitle}\n${SpawnType.target_tip}`);
          // player.sendMessage(`====================================`);
          // player.sendMessage(`§e>>>[角色信息]§f你是${SpawnType.subtitle}，§e任务目标：${SpawnType.target_tip}。`);
          // player.sendMessage(`====================================`);
          overworld.runCommand(`clear "${PlayerID}"`);
          overworld.runCommand(`effect "${PlayerID}" instant_health 1 255 true`);
          overworld.runCommand(`effect "${PlayerID}" resistance 20 255 true`);
          for (let slot = SpawnType.inventory[0]; slot < SpawnType.inventory[1]; slot++) {
            overworld.runCommand(
              `replaceitem entity "${PlayerID}" slot.inventory ${slot} ei:disable 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          overworld.runCommand(
            `replaceitem entity "${PlayerID}" slot.hotbar 8 ei:id_card 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
          );
          for (let i = 0; i < SpawnType.items.length; i++) {
            if (SpawnType.items[i][2] === "random") {
              const RandomNum = Math.random();
              // const RandomItemNum = SpawnType.items[i].length;
              if (RandomNum <= 0.5) {
                overworld.runCommand(`give "${PlayerID}" ${SpawnType.items[i][0]} ${SpawnType.items[i][1]}`);
              } //
              else {
                overworld.runCommand(`give "${PlayerID}" ${SpawnType.items[i][3]} ${SpawnType.items[i][4]}`);
              }
            } //
            else {
              overworld.runCommand(`give "${PlayerID}" ${SpawnType.items[i][0]} ${SpawnType.items[i][1]}`);
            }
          }
          for (let i = 0; i < SpawnType.armor.length; i++) {
            overworld.runCommand(
              `replaceitem entity "${PlayerID}" ${SpawnType.armor[i][0]} 0 ${SpawnType.armor[i][1]} 1 0`
            );
            // if (["slot.armor.chest", "slot.armor.legs"].includes(SpawnType.armor[i][0])) {
            //   overworld.runCommand(
            //     `replaceitem entity "${PlayerID}" ${SpawnType.armor[i][0]} 0 ${SpawnType.armor[i][1]} 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            //   );
            // }
          }
          if (PlayerID === "Ectrico") {
            overworld.runCommand(`give "${PlayerID}" bli:skirt 1 0 {"minecraft:keep_on_death":{}}`);
          }
          LimitRes--;
        }
      }
    }
  });
}
//
//
//-------------------------------------------------------------------------------------------------------------------------------------------------------------
//
//
export const Guard = {
  title: "§1Security Officer",
  subtitle: "§1安全官员",
  target_tip:
    "§f无效化你见到的所有SCP项目\n杀死你看到的所有D级人员\n营救仍困在设施内的工作人员\n消灭所有入侵者\n不惜一切代价保护设施",
  tag: "guard",
  group: "allguard",
  items: [
    ["bli:fnp90", 1],
    ["bli:smg_mag", 16],
    ["bli:lv2", 1],
  ],
  armor: [
    ["slot.armor.head", "bli:fast_glass"],
    ["slot.armor.chest", "bli:vest_guard"],
    ["slot.armor.legs", "bli:pants_guard"],
    ["slot.armor.feet", "bli:boots_guard"],
  ],
  inventory: HumanInventory,
};

export const Guard_Med = {
  title: "§aMedical Security Officer",
  subtitle: "§a医疗安全官员",
  target_tip:
    "§6为你的队友进行治疗\n§f无效化你见到的所有SCP项目\n杀死你看到的所有D级人员\n营救仍困在设施内的工作人员\n消灭所有入侵者\n不惜一切代价保护设施",
  tag: "guard_med",
  group: "allguard",
  items: [
    ["bli:glock19", 1],
    ["bli:pistol_mag", 16],
    ["bli:lv2", 1],
    ["bli:first_aid_kit_medic", 1],
  ],
  armor: [
    ["slot.armor.head", "bli:fast_med"],
    ["slot.armor.chest", "bli:vest_guard_med"],
    ["slot.armor.legs", "bli:pants_guard_med"],
    ["slot.armor.feet", "bli:boots_guard"],
  ],
  inventory: HumanInventory,
};

export const Guard_Tech = {
  title: "§sTechnicians Security Officer",
  subtitle: "§b安全官员 - 技术工程师",
  target_tip:
    "§6你携带一根保险丝\n可以进行有效的即时电力维护\n协助你的队友\n§f无效化你见到的所有SCP项目\n杀死你看到的所有D级人员\n营救仍困在设施内的工作人员\n消灭所有入侵者\n不惜一切代价保护设施",
  tag: "guard_tech",
  group: "allguard",
  items: [
    ["bli:hkump45", 1],
    ["bli:smg_mag", 16],
    ["bli:lvfs", 1],
    ["bli:fuse_8a", 1],
  ],
  armor: [
    ["slot.armor.head", "bli:fast_glass_hd"],
    ["slot.armor.chest", "bli:vest_guard"],
    ["slot.armor.legs", "bli:pants_guard"],
    ["slot.armor.feet", "bli:boots_guard"],
  ],
  inventory: HumanInventory,
};

export const Rapid_Reaction_Unit = {
  title: "§bMTF - Rapid Reaction Unit",
  subtitle: "§bMTF-快速反应单位",
  target_tip:
    "§f你拥有相比其他安全官员更高的权限\n无效化你见到的所有SCP项目\n杀死你看到的所有D级人员，营救仍困在设施内的工作人员，消灭所有入侵者，不惜一切代价保护设施",
  tag: "guard_rru",
  group: "allguard",
  items: [
    ["bli:mp9", 1],
    ["bli:smg_mag", 16],
    ["bli:lv5", 1],
    ["bli:first_aid_kit", 1],
    ["bli:first_aid_kit_blue", 1],
    ["bli:yeshiyi", 1],
  ],
  armor: [
    ["slot.armor.head", "bli:gasmask"],
    ["slot.armor.chest", "bli:vest_guard_blue"],
    ["slot.armor.legs", "bli:pants_guard_h"],
    ["slot.armor.feet", "bli:boots_guard"],
  ],
  inventory: HumanInventory,
};

export const Guard_Chief = {
  title: "§bSecurity Chief",
  subtitle: "§b安全主管",
  target_tip:
    "§f指挥你的队员\n无效化你见到的所有SCP项目\n杀死你看到的所有D级人员\n营救仍困在设施内的工作人员\n消灭所有入侵者\n不惜一切代价保护设施",
  tag: "guard_chief",
  group: "allguard",
  items: [
    ["bli:hkump45", 1],
    ["bli:smg_mag", 16],
    ["bli:lv5", 1],
    ["bli:lvfs", 1],
  ],
  armor: [
    ["slot.armor.head", "bli:fast_med"],
    ["slot.armor.chest", "bli:vest_guard"],
    ["slot.armor.legs", "bli:pants_guard"],
    ["slot.armor.feet", "bli:boots_guard"],
  ],
  inventory: HumanInventory,
};

export const Hazmat_Security = {
  title: "§bHazmat Security",
  subtitle: "§b防护安全员",
  target_tip:
    "§f你携带可抑制部分SCP项目的化学品\n无效化你见到的所有SCP项目\n杀死你看到的所有D级人员，营救仍困在设施内的工作人员，消灭所有入侵者，不惜一切代价保护设施",
  tag: "guard_hs",
  group: "allguard",
  items: [
    ["bli:hkmp5pdw", 1],
    ["bli:smg_mag", 16],
    ["bli:lv4", 1],
    ["ei:spray_fire_extinguisher", 1],
    ["ei:spray_lavender", 1],
    ["ei:spray_poison", 1],
  ],
  armor: [
    ["slot.armor.head", "bli:yeshiyi"],
    ["slot.armor.chest", "bli:hazmat_suit"],
    // ["slot.armor.legs", "bli:pants_ci"],
    // ["slot.armor.feet", "bli:boots_guard"],
  ],
  inventory: HumanInventory,
};

export const Site_Director = {
  title: "§bSite Director",
  subtitle: "§b站点主管",
  target_tip:
    "§f组织站点的所有基金会成员遏制收容失效\n无效化你见到的所有SCP项目\n杀死你看到的所有D级人员\n营救仍困在设施内的工作人员\n消灭所有入侵者\n不惜一切代价保护设施",
  tag: "guard_sd",
  group: "allguard",
  items: [
    ["bli:taser_m26", 1],
    ["bli:lvsm", 1],
    ["bli:scp500", 1],
  ],
  armor: [
    // ["slot.armor.head", "bli:fast_med"],
    // ["slot.armor.chest", "bli:vest_guard"],
    // ["slot.armor.legs", "bli:pants_guard"],
    // ["slot.armor.feet", "bli:boots_guard"],
  ],
  inventory: HumanInventory,
};

// Guard刷新函数
// 刷新上限
const LimitGuardDefault = 27;
const LimitGuardMedDef = 1;
const LimitGuardTechDef = 1;
const LimitGuardChiefDef = 1;
const LimitHazmatSecurityDef = 1;
const LimitSite_DirectorDef = 1;
export function support_guard() {
  // world.playMusic("AN");
  // world.sendMessage(`§e[ANNOUNCE] §bMTF unit Epsilon-11, designated Nine-Tailed Fox, has entered the facility.`);
  let LimitGuard = LimitGuardDefault;
  if (CustomSupportLimit !== undefined) {
    LimitGuard = CustomSupportLimit;
  }
  let PreSpawnPlayer = world.getAllPlayers();
  let LimitMed = LimitGuardMedDef;
  let LimitTech = LimitGuardTechDef;
  let LimitChief = LimitGuardChiefDef;
  let LimitHazmatSecurity = LimitHazmatSecurityDef;
  let LimitSite_Director = LimitSite_DirectorDef;
  // world.sendMessage(`指挥官上限：${LimitCom}`);
  PreSpawnPlayer.forEach((player) => {
    const position = player.location;
    const PlayerTag = player.getTags();
    const PlayerID = player.name;
    if (LimitGuard !== 0) {
      if (AllClassesTag.some((arg) => PlayerTag.includes(arg))) {
      } else {
        if (!player.hasTag("dev")) {
          player.removeTag("spectator");
          overworld.runCommand(`effect "${PlayerID}" clear`);
          overworld.runCommand(`gamemode adventure "${PlayerID}"`);
          const SpawnPointID = Math.floor(Math.random() * SpawnPointGuard.length);
          // world.sendMessage(`SpawnPointID:${SpawnPointID} Player:${PlayerID}`);
          overworld.runCommand(
            `tp "${PlayerID}" ${SpawnPointGuard[SpawnPointID].x} ${SpawnPointGuard[SpawnPointID].y} ${SpawnPointGuard[SpawnPointID].z}`
          );
          const SpawnAllType = [
            Guard,
            Guard_Med,
            Guard_Tech,
            Rapid_Reaction_Unit,
            Guard_Chief,
            Hazmat_Security,
            Site_Director,
          ];
          const TypeRandom = Math.floor(Math.random() * SpawnAllType.length);
          let SpawnType = SpawnAllType[TypeRandom];
          if (SpawnType === Guard_Med && LimitMed !== 1) {
            SpawnType = Guard;
          }
          if (SpawnType === Guard_Med && LimitMed === 1) {
            LimitMed = 0;
          }
          if (SpawnType === Guard_Chief && LimitChief !== 1) {
            SpawnType = Guard;
          }
          if (SpawnType === Guard_Chief && LimitChief === 1) {
            LimitChief = 0;
          }
          if (SpawnType === Guard_Tech && LimitTech !== 1) {
            SpawnType = Guard;
          }
          if (SpawnType === Guard_Tech && LimitTech === 1) {
            LimitTech = 0;
          }
          if (SpawnType === Hazmat_Security && LimitHazmatSecurity !== 1) {
            SpawnType = Guard;
          }
          if (SpawnType === Hazmat_Security && LimitHazmatSecurity === 1) {
            LimitHazmatSecurity = 0;
          }
          if (SpawnType === Site_Director && LimitSite_Director !== 1) {
            SpawnType = Guard;
          }
          if (SpawnType === Site_Director && LimitSite_Director === 1) {
            LimitSite_Director = 0;
          }
          player.addTag(`${SpawnType.tag}`);
          player.addTag(`${SpawnType.group}`);
          overworld.runCommand(`title "${PlayerID}" times 0 300 0`);
          overworld.runCommand(`title "${PlayerID}" title ${SpawnType.title}`);
          overworld.runCommand(`title "${PlayerID}" subtitle ${SpawnType.subtitle}\n${SpawnType.target_tip}`);
          // player.sendMessage(`====================================`);
          // player.sendMessage(`§e>>>[角色信息]§f你是${SpawnType.subtitle}，§e任务目标：${SpawnType.target_tip}。`);
          // player.sendMessage(`====================================`);
          overworld.runCommand(`clear "${PlayerID}"`);
          overworld.runCommand(`effect "${PlayerID}" instant_health 1 255 true`);
          overworld.runCommand(`effect "${PlayerID}" resistance 20 255 true`);
          for (let slot = SpawnType.inventory[0]; slot < SpawnType.inventory[1]; slot++) {
            overworld.runCommand(
              `replaceitem entity "${PlayerID}" slot.inventory ${slot} ei:disable 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          overworld.runCommand(
            `replaceitem entity "${PlayerID}" slot.hotbar 8 ei:id_card 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
          );
          for (let i = 0; i < SpawnType.items.length; i++) {
            overworld.runCommand(`give "${PlayerID}" ${SpawnType.items[i][0]} ${SpawnType.items[i][1]}`);
          }
          for (let i = 0; i < SpawnType.armor.length; i++) {
            overworld.runCommand(
              `replaceitem entity "${PlayerID}" ${SpawnType.armor[i][0]} 0 ${SpawnType.armor[i][1]} 1 0`
            );
            // if (["slot.armor.chest", "slot.armor.legs"].includes(SpawnType.armor[i][0])) {
            //   overworld.runCommand(
            //     `replaceitem entity "${PlayerID}" ${SpawnType.armor[i][0]} 0 ${SpawnType.armor[i][1]} 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            //   );
            // }
          }
          LimitGuard--;
        }
      }
    }
  });
}
//
//
//-------------------------------------------------------------------------------------------------------------------------------------------------------------
//
//
export const NTF_Rifle = {
  title: "§bMTF - Nine Tailed Fox - Soldier",
  subtitle: "§b机动特遣队-九尾狐-队员§f",
  target_tip:
    "§f支援设施内的安全官员\n配合他们遏制混沌分裂者的入侵\n重新收容或无效化已经突破收容的异常项目\n尽全力保护设施安全\n听从指挥官的指挥",
  tag: "ntf",
  group: "allntf",
  items: [
    ["bli:m4a1s", 1],
    ["bli:rifle_mag", 15],
    ["bli:lv5", 1],
    ["ei:mtf_terminal", 1],
  ],
  armor: [
    ["slot.armor.head", "bli:fast_gasmask"],
    ["slot.armor.chest", "bli:vest_ntf"],
    ["slot.armor.legs", "bli:pants_ntf"],
    ["slot.armor.feet", "bli:boots_guard"],
  ],
  inventory: HumanInventory,
};

export const NTF_Breaker = {
  title: "§bMTF - Nine Tailed Fox - Breaker",
  subtitle: "§b机动特遣队-九尾狐-突破手",
  target_tip:
    "§f支援设施内的安全官员\n配合他们遏制混沌分裂者的入侵\n重新收容或无效化已经突破收容的异常项目\n尽全力保护设施安全\n听从指挥官的指挥",
  tag: "ntf_breaker",
  group: "allntf",
  items: [
    ["bli:m3super90", 1],
    ["bli:shotgun_mag", 15],
    ["bli:lv5", 1],
    ["ei:mtf_terminal", 1],
  ],
  armor: [
    ["slot.armor.head", "bli:fast_glass_hd"],
    ["slot.armor.chest", "bli:vest_ntf"],
    ["slot.armor.legs", "bli:pants_ntf"],
    ["slot.armor.feet", "bli:boots_guard"],
  ],
  inventory: HumanInventory,
};

export const NTF_Sniper = {
  title: "§bMTF - Nine Tailed Fox - Sniper",
  subtitle: "§b机动特遣队-九尾狐-狙击手",
  target_tip:
    "§f支援设施内的安全官员\n配合他们遏制混沌分裂者的入侵\n重新收容或无效化已经突破收容的异常项目\n尽全力保护设施安全\n听从指挥官的指挥",
  tag: "ntf_sniper",
  group: "allntf",
  items: [
    ["bli:sr25", 1],
    ["bli:rifle_mag", 15],
    ["bli:lv5", 1],
    ["ei:mtf_terminal", 1],
  ],
  armor: [
    ["slot.armor.head", "bli:fast_med"],
    ["slot.armor.chest", "bli:vest_ntf"],
    ["slot.armor.legs", "bli:pants_ntf"],
    ["slot.armor.feet", "bli:boots_guard"],
  ],
  inventory: HumanInventory,
};

export const NTF_Med = {
  title: "§bMTF - Nine Tailed Fox - Medic",
  subtitle: "§b机动特遣队-九尾狐-医疗兵",
  target_tip:
    "§6为你的队友进行治疗\n§f支援设施内的安全官员\n配合他们遏制混沌分裂者的入侵\n重新收容或无效化已经突破收容的异常项目\n尽全力保护设施安全",
  tag: "ntf_med",
  group: "allntf",
  items: [
    ["bli:mp9", 1],
    ["bli:smg_mag", 16],
    ["bli:lv5", 1],
    ["bli:first_aid_kit_medic", 1],
    ["ei:mtf_terminal", 1],
  ],
  armor: [
    ["slot.armor.head", "bli:fast_med"],
    ["slot.armor.chest", "bli:vest_guard"],
    ["slot.armor.legs", "bli:pants_guard"],
    ["slot.armor.feet", "bli:boots_guard"],
  ],
  inventory: HumanInventory,
};

export const NTF_Commander = {
  title: "§bMTF - Nine Tailed Fox - Commander",
  subtitle: "§b机动特遣队-九尾狐-指挥官",
  target_tip:
    "§f指挥你的队员\n支援设施内的安全官员\n配合他们遏制混沌分裂者的入侵\n重新收容或无效化已经突破收容的异常项目\n尽全力保护设施安全",
  tag: "ntf_com",
  group: "allntf",
  items: [
    ["bli:hk416", 1],
    ["bli:rifle_mag", 15],
    ["bli:lv5", 1],
    ["bli:lvw", 1],
    ["bli:yeshiyi", 1],
    ["ei:mtf_terminal", 1],
  ],
  armor: [
    ["slot.armor.head", "bli:fast_med"],
    ["slot.armor.chest", "bli:vest_ntf"],
    ["slot.armor.legs", "bli:pants_ntf"],
    ["slot.armor.feet", "bli:boots_guard"],
  ],
  inventory: HumanInventory,
};

// NTF刷新函数
// 刷新上限
const LimitNTFDef = 27;
const LimitNTFMedDef = 1;
const LimitNTFComDef = 1;
const LimitNTFSniperDef = 1;
export function support_ntf() {
  world.sendMessage(`§e[ANNOUNCE] §bMTF unit Epsilon-11, designated Nine-Tailed Fox, has entered the facility.`);
  let LimitNTF = LimitNTFDef;
  if (CustomSupportLimit !== undefined) {
    LimitNTF = CustomSupportLimit;
  }
  let PreSpawnPlayer = world.getAllPlayers();
  let LimitMed = LimitNTFMedDef;
  let LimitCom = LimitNTFComDef;
  let LimitSniper = LimitNTFSniperDef;
  // world.sendMessage(`指挥官上限：${LimitCom}`);
  PreSpawnPlayer.forEach((player) => {
    const position = player.location;
    const PlayerTag = player.getTags();
    const PlayerID = player.name;
    overworld.runCommand(`playsound "AN" "${PlayerID}" ${position.x} ${position.y} ${position.z} 100`);
    if (LimitNTF !== 0) {
      // world.sendMessage(`刷新限制：${LimitNTF}`);
      if (AllClassesTag.some((arg) => PlayerTag.includes(arg))) {
        // world.sendMessage(`§e[GameMode]>_: §f当前对局不存在旁观者，生成失败.`);
      } else {
        if (!player.hasTag("dev")) {
          player.removeTag("spectator");
          overworld.runCommand(`effect "${PlayerID}" clear`);
          overworld.runCommand(`gamemode adventure "${PlayerID}"`);
          const SpawnPointID = Math.floor(Math.random() * SpawnPointNTF.length);
          // world.sendMessage(`SpawnPointID:${SpawnPointID} Player:${PlayerID}`);
          overworld.runCommand(
            `tp "${PlayerID}" ${SpawnPointNTF[SpawnPointID].x} ${SpawnPointNTF[SpawnPointID].y} ${SpawnPointNTF[SpawnPointID].z}`
          );
          const SpawnAllType = [NTF_Rifle, NTF_Rifle, NTF_Breaker, NTF_Med, NTF_Commander, NTF_Sniper];
          const TypeRandom = Math.floor(Math.random() * SpawnAllType.length);
          let SpawnType = SpawnAllType[TypeRandom];
          if (SpawnType === NTF_Med && LimitMed !== 1) {
            SpawnType = NTF_Rifle;
            // world.sendMessage(`指挥官上限：${LimitCom},改为刷新NTF_Rifle`);
          }
          if (SpawnType === NTF_Med && LimitMed === 1) {
            LimitMed = 0;
            // world.sendMessage(`刷新指挥官,上限--：${LimitCom}`);
          }
          if (SpawnType === NTF_Commander && LimitCom !== 1) {
            SpawnType = NTF_Rifle;
            // world.sendMessage(`指挥官上限：${LimitCom},改为刷新NTF_Rifle`);
          }
          if (SpawnType === NTF_Commander && LimitCom === 1) {
            LimitCom = 0;
            // world.sendMessage(`刷新指挥官,上限--：${LimitCom}`);
          }
          if (SpawnType === NTF_Sniper && LimitSniper !== 1) {
            SpawnType = NTF_Rifle;
            // world.sendMessage(`指挥官上限：${LimitCom},改为刷新NTF_Rifle`);
          }
          if (SpawnType === NTF_Sniper && LimitSniper === 1) {
            LimitSniper = 0;
            // world.sendMessage(`刷新指挥官,上限--：${LimitCom}`);
          }
          player.addTag(`${SpawnType.tag}`);
          player.addTag(`${SpawnType.group}`);
          overworld.runCommand(`title "${PlayerID}" times 0 300 0`);
          overworld.runCommand(`title "${PlayerID}" title ${SpawnType.title}`);
          overworld.runCommand(`title "${PlayerID}" subtitle ${SpawnType.subtitle}\n${SpawnType.target_tip}`);
          // player.sendMessage(`====================================`);
          // player.sendMessage(`§e>>>[角色信息]§f你是${SpawnType.subtitle}，§e任务目标：${SpawnType.target_tip}。`);
          // player.sendMessage(`====================================`);
          overworld.runCommand(`clear "${PlayerID}"`);
          overworld.runCommand(`effect "${PlayerID}" instant_health 1 255 true`);
          overworld.runCommand(`effect "${PlayerID}" resistance 20 255 true`);
          for (let slot = SpawnType.inventory[0]; slot < SpawnType.inventory[1]; slot++) {
            overworld.runCommand(
              `replaceitem entity "${PlayerID}" slot.inventory ${slot} ei:disable 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          overworld.runCommand(
            `replaceitem entity "${PlayerID}" slot.hotbar 8 ei:id_card 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
          );
          for (let i = 0; i < SpawnType.items.length; i++) {
            overworld.runCommand(`give "${PlayerID}" ${SpawnType.items[i][0]} ${SpawnType.items[i][1]}`);
          }
          for (let i = 0; i < SpawnType.armor.length; i++) {
            overworld.runCommand(
              `replaceitem entity "${PlayerID}" ${SpawnType.armor[i][0]} 0 ${SpawnType.armor[i][1]} 1 0`
            );
            // if (["slot.armor.chest", "slot.armor.legs"].includes(SpawnType.armor[i][0])) {
            //   overworld.runCommand(
            //     `replaceitem entity "${PlayerID}" ${SpawnType.armor[i][0]} 0 ${SpawnType.armor[i][1]} 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            //   );
            // }
          }
          LimitNTF--;
        }
      }
    }
  });
}
//
//
//-------------------------------------------------------------------------------------------------------------------------------------------------------------
//
//
export const SNE_Commandos = {
  title: "§sMTF - See No Evil - Commandos",
  subtitle: "§s机动特遣队-非礼勿视-突击队员§f",
  target_tip:
    "§f支援设施内的安全官员\n帮助收容视觉模因危害类SCP\n配合他们遏制混沌分裂者的入侵\n重新收容或无效化已经突破收容的异常项目\n尽全力保护设施安全\n听从指挥官的指挥",
  tag: "sne",
  group: "allsne",
  items: [
    ["bli:hkmp5pdw", 1],
    ["bli:smg_mag", 15],
    ["bli:lv5", 1],
    ["ei:mtf_terminal", 1],
  ],
  armor: [
    ["slot.armor.head", "bli:yeshiyi"],
    ["slot.armor.chest", "bli:vest_sne"],
    ["slot.armor.legs", "bli:pants_sne"],
    ["slot.armor.feet", "bli:boots_guard"],
  ],
  inventory: HumanInventory,
};

export const SNE_Breaker = {
  title: "§sMTF - See No Evil - Breaker",
  subtitle: "§s机动特遣队-非礼勿视-突破手",
  target_tip:
    "§f支援设施内的安全官员\n帮助收容视觉模因危害类SCP\n配合他们遏制混沌分裂者的入侵\n重新收容或无效化已经突破收容的异常项目\n尽全力保护设施安全\n听从指挥官的指挥",
  tag: "sne_breaker",
  group: "allsne",
  items: [
    ["bli:m3super90", 1],
    ["bli:shotgun_mag", 15],
    ["bli:lv5", 1],
    ["ei:mtf_terminal", 1],
  ],
  armor: [
    ["slot.armor.head", "bli:yeshiyi"],
    ["slot.armor.chest", "bli:vest_sne"],
    ["slot.armor.legs", "bli:pants_sne"],
    ["slot.armor.feet", "bli:boots_guard"],
  ],
  inventory: HumanInventory,
};

export const SNE_Commander = {
  title: "§sMTF - See No Evil - Commander",
  subtitle: "§s机动特遣队-非礼勿视-指挥官",
  target_tip:
    "§f指挥你的队员\n支援设施内的安全官员\n帮助收容视觉模因危害类SCP\n配合他们遏制混沌分裂者的入侵\n重新收容或无效化已经突破收容的异常项目\n尽全力保护设施安全",
  tag: "sne_com",
  group: "allsne",
  items: [
    ["bli:m4a1", 1],
    ["bli:rifle_mag", 15],
    ["bli:lv5", 1],
    ["bli:lvw", 1],
    ["ei:mtf_terminal", 1],
  ],
  armor: [
    ["slot.armor.head", "bli:yeshiyi"],
    ["slot.armor.chest", "bli:vest_sne"],
    ["slot.armor.legs", "bli:pants_sne"],
    ["slot.armor.feet", "bli:boots_guard"],
  ],
  inventory: HumanInventory,
};

// SNE刷新函数
// 刷新上限
const LimitSNEDef = 3;
const LimitSNEMedDef = 1;
const LimitSNEComDef = 1;
const LimitSNESniperDef = 1;
export function support_sne() {
  world.sendMessage(`§e[ANNOUNCE] §bMTF unit Eta-10, designated See No Evil, has entered the facility.`);
  let LimitSNE = LimitSNEDef;
  if (CustomSupportLimit !== undefined) {
    LimitSNE = CustomSupportLimit;
  }
  let PreSpawnPlayer = world.getAllPlayers();
  let LimitMed = LimitSNEMedDef;
  let LimitCom = LimitSNEComDef;
  let LimitSniper = LimitSNESniperDef;
  // world.sendMessage(`指挥官上限：${LimitCom}`);
  PreSpawnPlayer.forEach((player) => {
    const position = player.location;
    const PlayerTag = player.getTags();
    const PlayerID = player.name;
    overworld.runCommand(`playsound "AN2" "${PlayerID}" ${position.x} ${position.y} ${position.z} 100`);
    if (LimitSNE !== 0) {
      // world.sendMessage(`刷新限制：${LimitSNE}`);
      if (AllClassesTag.some((arg) => PlayerTag.includes(arg))) {
        // world.sendMessage(`§e[GameMode]>_: §f当前对局不存在旁观者，生成失败.`);
      } else {
        if (!player.hasTag("dev")) {
          player.removeTag("spectator");
          overworld.runCommand(`effect "${PlayerID}" clear`);
          overworld.runCommand(`gamemode adventure "${PlayerID}"`);
          const SpawnPointID = Math.floor(Math.random() * SpawnPointSNE.length);
          // world.sendMessage(`SpawnPointID:${SpawnPointID} Player:${PlayerID}`);
          overworld.runCommand(
            `tp "${PlayerID}" ${SpawnPointSNE[SpawnPointID].x} ${SpawnPointSNE[SpawnPointID].y} ${SpawnPointSNE[SpawnPointID].z}`
          );
          const SpawnAllType = [SNE_Commandos, SNE_Commandos, SNE_Breaker, SNE_Commander];
          const TypeRandom = Math.floor(Math.random() * SpawnAllType.length);
          let SpawnType = SpawnAllType[TypeRandom];
          if (SpawnType === SNE_Commander && LimitCom !== 1) {
            SpawnType = SNE_Commandos;
            // world.sendMessage(`指挥官上限：${LimitCom},改为刷新SNE_Rifle`);
          }
          if (SpawnType === SNE_Commander && LimitCom === 1) {
            LimitCom = 0;
            // world.sendMessage(`刷新指挥官,上限--：${LimitCom}`);
          }
          player.addTag(`${SpawnType.tag}`);
          player.addTag(`${SpawnType.group}`);
          overworld.runCommand(`title "${PlayerID}" times 0 300 0`);
          overworld.runCommand(`title "${PlayerID}" title ${SpawnType.title}`);
          overworld.runCommand(`title "${PlayerID}" subtitle ${SpawnType.subtitle}\n${SpawnType.target_tip}`);
          // player.sendMessage(`====================================`);
          // player.sendMessage(`§e>>>[角色信息]§f你是${SpawnType.subtitle}，§e任务目标：${SpawnType.target_tip}。`);
          // player.sendMessage(`====================================`);
          overworld.runCommand(`clear "${PlayerID}"`);
          overworld.runCommand(`effect "${PlayerID}" instant_health 1 255 true`);
          overworld.runCommand(`effect "${PlayerID}" resistance 20 255 true`);
          for (let slot = SpawnType.inventory[0]; slot < SpawnType.inventory[1]; slot++) {
            overworld.runCommand(
              `replaceitem entity "${PlayerID}" slot.inventory ${slot} ei:disable 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          overworld.runCommand(
            `replaceitem entity "${PlayerID}" slot.hotbar 8 ei:id_card 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
          );
          for (let i = 0; i < SpawnType.items.length; i++) {
            overworld.runCommand(`give "${PlayerID}" ${SpawnType.items[i][0]} ${SpawnType.items[i][1]}`);
          }
          for (let i = 0; i < SpawnType.armor.length; i++) {
            overworld.runCommand(
              `replaceitem entity "${PlayerID}" ${SpawnType.armor[i][0]} 0 ${SpawnType.armor[i][1]} 1 0`
            );
            // if (["slot.armor.chest", "slot.armor.legs"].includes(SpawnType.armor[i][0])) {
            //   overworld.runCommand(
            //     `replaceitem entity "${PlayerID}" ${SpawnType.armor[i][0]} 0 ${SpawnType.armor[i][1]} 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            //   );
            // }
          }
          LimitSNE--;
        }
      }
    }
  });
}
//
//
//-------------------------------------------------------------------------------------------------------------------------------------------------------------
//
//
export const GOC_Commandos = {
  title: "§bGlobal Occult Coalition - Commandos",
  subtitle: "§b全球超自然联盟-突击队员§f",
  target_tip:
    "§fGOC已获得授权协助遏制收容失效\n杀死你见到的所有SCP\n对于入侵的混沌分裂者可随意交火\n保护你见到的D级人员\n听从指挥官的指挥",
  tag: "goc",
  group: "allgoc",
  items: [
    ["bli:m3super90", 1],
    ["bli:shotgun_mag", 15],
    ["bli:lv5", 1],
  ],
  armor: [
    ["slot.armor.head", "bli:fast_tech"],
    ["slot.armor.chest", "bli:vest_tech"],
    ["slot.armor.legs", "bli:pants_tech"],
    ["slot.armor.feet", "bli:boots_guard"],
  ],
  inventory: HumanInventory,
};

export const GOC_Des = {
  title: "§bGlobal Occult Coalition - Destroyer",
  subtitle: "§b全球超自然联盟-'毁灭者'",
  target_tip:
    "§fGOC已获得授权协助遏制收容失效\n杀死你见到的所有SCP\n对于入侵的混沌分裂者可随意交火\n保护你见到的D级人员\n§e你配备了政府资助的大威力激光武器\n可以对SCP造成巨量伤害\n§f听从指挥官的指挥",
  tag: "goc_des",
  group: "allgoc",
  items: [
    ["bli:tau", 1],
    ["bli:lv5", 1],
  ],
  armor: [
    ["slot.armor.head", "bli:fast_tech"],
    ["slot.armor.chest", "bli:vest_tech"],
    ["slot.armor.legs", "bli:pants_tech"],
    ["slot.armor.feet", "bli:boots_guard"],
  ],
  inventory: HumanInventory,
};

export const GOC_Commander = {
  title: "§bGlobal Occult Coalition - Commander",
  subtitle: "§b全球超自然联盟-指挥官",
  target_tip:
    "§fGOC已获得授权协助遏制收容失效\n指挥你的队员\n杀死你见到的所有SCP\n对于入侵的混沌分裂者可随意交火\n保护你见到的D级人员",
  tag: "goc_com",
  group: "allgoc",
  items: [
    ["bli:ak103", 1],
    ["bli:rifle_mag", 15],
    ["bli:lv5", 1],
    ["bli:lvw", 1],
  ],
  armor: [
    ["slot.armor.head", "bli:fast_tech"],
    ["slot.armor.chest", "bli:vest_tech"],
    ["slot.armor.legs", "bli:pants_tech"],
    ["slot.armor.feet", "bli:boots_guard"],
  ],
  inventory: HumanInventory,
};

// SNE刷新函数
// 刷新上限
const LimitGOCDef = 3;
const LimitGOCDesDef = 1;
const LimitGOCComDef = 1;
export function support_goc() {
  // world.sendMessage(`§e[ANNOUNCE] §bMTF unit Epsilon-11, designated Nine-Tailed Fox, has entered the facility.`);
  let LimitGOC = LimitGOCDef;
  if (CustomSupportLimit !== undefined) {
    LimitGOC = CustomSupportLimit;
  }
  let PreSpawnPlayer = world.getAllPlayers();
  let LimitDes = LimitGOCDesDef;
  let LimitCom = LimitGOCComDef;
  // world.sendMessage(`指挥官上限：${LimitCom}`);
  PreSpawnPlayer.forEach((player) => {
    const position = player.location;
    const PlayerTag = player.getTags();
    const PlayerID = player.name;
    // overworld.runCommand(`playsound "AN" "${PlayerID}" ${position.x} ${position.y} ${position.z} 100`);
    if (LimitGOC !== 0) {
      // world.sendMessage(`刷新限制：${LimitGOC}`);
      if (AllClassesTag.some((arg) => PlayerTag.includes(arg))) {
        // world.sendMessage(`§e[GameMode]>_: §f当前对局不存在旁观者，生成失败.`);
      } else {
        if (!player.hasTag("dev")) {
          player.removeTag("spectator");
          overworld.runCommand(`effect "${PlayerID}" clear`);
          overworld.runCommand(`gamemode adventure "${PlayerID}"`);
          const SpawnPointID = Math.floor(Math.random() * SpawnPointGOC.length);
          // world.sendMessage(`SpawnPointID:${SpawnPointID} Player:${PlayerID}`);
          overworld.runCommand(
            `tp "${PlayerID}" ${SpawnPointGOC[SpawnPointID].x} ${SpawnPointGOC[SpawnPointID].y} ${SpawnPointGOC[SpawnPointID].z}`
          );
          let SpawnType: any;
          switch (LimitGOC) {
            case 3:
              SpawnType = GOC_Commandos;
              break;
            case 2:
              SpawnType = GOC_Des;
              break;
            case 1:
              SpawnType = GOC_Commander;
              break;
          }
          // const SpawnAllType = [GOC_Commandos, GOC_Des, GOC_Commander];
          // const TypeRandom = Math.floor(Math.random() * SpawnAllType.length);
          // let SpawnType = SpawnAllType[TypeRandom];
          // if (SpawnType === GOC_Des && LimitDes !== 1) {
          //   SpawnType = GOC_Commandos;
          //   // world.sendMessage(`指挥官上限：${LimitCom},改为刷新GOC_Commandos`);
          // }
          // if (SpawnType === GOC_Des && LimitDes === 1) {
          //   LimitDes = 0;
          //   // world.sendMessage(`刷新指挥官,上限--：${LimitCom}`);
          // }
          // if (SpawnType === GOC_Commander && LimitCom !== 1) {
          //   SpawnType = GOC_Commandos;
          //   // world.sendMessage(`指挥官上限：${LimitCom},改为刷新GOC_Commandos`);
          // }
          // if (SpawnType === GOC_Commander && LimitCom === 1) {
          //   LimitCom = 0;
          //   // world.sendMessage(`刷新指挥官,上限--：${LimitCom}`);
          // }
          player.addTag(`${SpawnType.tag}`);
          player.addTag(`${SpawnType.group}`);
          overworld.runCommand(`title "${PlayerID}" times 0 300 0`);
          overworld.runCommand(`title "${PlayerID}" title ${SpawnType.title}`);
          overworld.runCommand(`title "${PlayerID}" subtitle ${SpawnType.subtitle}\n${SpawnType.target_tip}`);
          // player.sendMessage(`====================================`);
          // player.sendMessage(`§e>>>[角色信息]§f你是${SpawnType.subtitle}，§e任务目标：${SpawnType.target_tip}。`);
          // player.sendMessage(`====================================`);
          overworld.runCommand(`clear "${PlayerID}"`);
          overworld.runCommand(`effect "${PlayerID}" instant_health 1 255 true`);
          overworld.runCommand(`effect "${PlayerID}" resistance 20 255 true`);
          for (let slot = SpawnType.inventory[0]; slot < SpawnType.inventory[1]; slot++) {
            overworld.runCommand(
              `replaceitem entity "${PlayerID}" slot.inventory ${slot} ei:disable 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          overworld.runCommand(
            `replaceitem entity "${PlayerID}" slot.hotbar 8 ei:id_card 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
          );
          for (let i = 0; i < SpawnType.items.length; i++) {
            overworld.runCommand(`give "${PlayerID}" ${SpawnType.items[i][0]} ${SpawnType.items[i][1]}`);
          }
          for (let i = 0; i < SpawnType.armor.length; i++) {
            overworld.runCommand(
              `replaceitem entity "${PlayerID}" ${SpawnType.armor[i][0]} 0 ${SpawnType.armor[i][1]} 1 0`
            );
            // if (["slot.armor.chest", "slot.armor.legs"].includes(SpawnType.armor[i][0])) {
            //   overworld.runCommand(
            //     `replaceitem entity "${PlayerID}" ${SpawnType.armor[i][0]} 0 ${SpawnType.armor[i][1]} 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            //   );
            // }
          }
          LimitGOC--;
        }
      }
    }
  });
}
//
//
//-------------------------------------------------------------------------------------------------------------------------------------------------------------
//
//
export const RRH = {
  title: "§cMTF - Red Right Hand",
  subtitle: "§c机动特遣队-红右手",
  target_tip:
    "§f你代表着O5议会\n支援设施内的安全官员\n配合他们遏制混沌分裂者的入侵\n重新收容或无效化已经突破收容的异常项目\n尽全力保护设施安全\n§e必要时可自行启用Omega核弹头",
  tag: "rrh",
  group: "allrrh",
  items: [
    ["bli:hk416", 1],
    ["bli:mp9", 1],
    ["bli:lvwan", 1],
    ["ei:mtf_terminal", 1],
    ["bli:rifle_mag", 15],
    ["bli:smg_mag", 15],
  ],
  armor: [
    ["slot.armor.head", "bli:fast_rrh"],
    ["slot.armor.chest", "bli:vest_rrh"],
    ["slot.armor.legs", "bli:pants_rrh"],
    ["slot.armor.feet", "bli:boots_guard"],
  ],
  inventory: HumanInventory,
};

// RRH刷新函数
// 刷新上限
const LimitRRHDef = 3;
export function support_rrh() {
  world.sendMessage(`§e[ANNOUNCE] §eMTF unit Alpha-1, designated Red Right Hand, has entered the facility.`);
  let LimitRRH = LimitRRHDef;
  if (CustomSupportLimit !== undefined) {
    LimitRRH = CustomSupportLimit;
  }
  let PreSpawnPlayer = world.getAllPlayers();
  // world.sendMessage(`指挥官上限：${LimitCom}`);
  PreSpawnPlayer.forEach((player) => {
    const position = player.location;
    const PlayerTag = player.getTags();
    const PlayerID = player.name;
    overworld.runCommand(`playsound "ANA1" "${PlayerID}" ${position.x} ${position.y} ${position.z} 100`);
    if (LimitRRH !== 0) {
      // world.sendMessage(`刷新限制：${LimitRRH}`);
      if (AllClassesTag.some((arg) => PlayerTag.includes(arg))) {
        // world.sendMessage(`§e[GameMode]>_: §f当前对局不存在旁观者，生成失败.`);
      } else {
        if (!player.hasTag("dev")) {
          player.removeTag("spectator");
          overworld.runCommand(`effect "${PlayerID}" clear`);
          overworld.runCommand(`gamemode adventure "${PlayerID}"`);
          const SpawnPointID = Math.floor(Math.random() * SpawnPointSNE.length);
          // world.sendMessage(`SpawnPointID:${SpawnPointID} Player:${PlayerID}`);
          overworld.runCommand(
            `tp "${PlayerID}" ${SpawnPointSNE[SpawnPointID].x} ${SpawnPointSNE[SpawnPointID].y} ${SpawnPointSNE[SpawnPointID].z}`
          );
          const SpawnAllType = [RRH, RRH];
          const TypeRandom = Math.floor(Math.random() * SpawnAllType.length);
          let SpawnType = SpawnAllType[TypeRandom];
          player.addTag(`${SpawnType.tag}`);
          player.addTag(`${SpawnType.group}`);
          overworld.runCommand(`title "${PlayerID}" times 0 300 0`);
          overworld.runCommand(`title "${PlayerID}" title ${SpawnType.title}`);
          overworld.runCommand(`title "${PlayerID}" subtitle ${SpawnType.subtitle}\n${SpawnType.target_tip}`);
          // player.sendMessage(`====================================`);
          // player.sendMessage(`§e>>>[角色信息]§f你是${SpawnType.subtitle}，§e任务目标：${SpawnType.target_tip}。`);
          // player.sendMessage(`====================================`);
          overworld.runCommand(`clear "${PlayerID}"`);
          overworld.runCommand(`effect "${PlayerID}" instant_health 1 255 true`);
          overworld.runCommand(`effect "${PlayerID}" resistance 20 255 true`);
          for (let slot = SpawnType.inventory[0]; slot < SpawnType.inventory[1]; slot++) {
            overworld.runCommand(
              `replaceitem entity "${PlayerID}" slot.inventory ${slot} ei:disable 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          overworld.runCommand(
            `replaceitem entity "${PlayerID}" slot.hotbar 8 ei:id_card 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
          );
          for (let i = 0; i < SpawnType.items.length; i++) {
            overworld.runCommand(`give "${PlayerID}" ${SpawnType.items[i][0]} ${SpawnType.items[i][1]}`);
          }
          for (let i = 0; i < SpawnType.armor.length; i++) {
            overworld.runCommand(
              `replaceitem entity "${PlayerID}" ${SpawnType.armor[i][0]} 0 ${SpawnType.armor[i][1]} 1 0`
            );
            // if (["slot.armor.chest", "slot.armor.legs"].includes(SpawnType.armor[i][0])) {
            //   overworld.runCommand(
            //     `replaceitem entity "${PlayerID}" ${SpawnType.armor[i][0]} 0 ${SpawnType.armor[i][1]} 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            //   );
            // }
          }
          LimitRRH--;
        }
      }
    }
  });
}
//
//
//-------------------------------------------------------------------------------------------------------------------------------------------------------------
//
//
export const CI_Rifle = {
  title: "§2Chaos Insurgency - Soldier",
  subtitle: "§2混沌分裂者-士兵",
  target_tip: "§f消灭一切阻止你们的人\n抢夺SCP物品",
  tag: "ci",
  group: "allci",
  items: [
    ["bli:ak103", 1],
    ["bli:rifle_mag", 16],
    ["bli:lvci", 1],
  ],
  armor: [
    ["slot.armor.head", "bli:fast_gasmask_ci"],
    ["slot.armor.chest", "bli:vest_ci"],
    ["slot.armor.legs", "bli:pants_ci"],
    ["slot.armor.feet", "bli:boots_guard"],
  ],
  inventory: HumanInventory,
};

export const CI_Breaker = {
  title: "§2Chaos Insurgency - Breaker",
  subtitle: "§2混沌分裂者-突破手",
  target_tip: "§f协助你的队友\n消灭一切阻止你们的人\n抢夺SCP物品",
  tag: "ci_breaker",
  group: "allci",
  items: [
    ["bli:m3super90", 1],
    ["bli:shotgun_mag", 15],
    ["bli:lvci", 1],
  ],
  armor: [
    ["slot.armor.head", "bli:fast_glass_hd"],
    ["slot.armor.chest", "bli:vest_ci_h"],
    ["slot.armor.legs", "bli:pants_ci"],
    ["slot.armor.feet", "bli:boots_guard"],
  ],
  inventory: HumanInventory,
};

export const CI_Sniper = {
  title: "§2Chaos Insurgency - Sniper",
  subtitle: "§2混沌分裂者-狙击手",
  target_tip: "§f协助你的队友\n消灭一切阻止你们的人\n抢夺SCP物品",
  tag: "ci_sniper",
  group: "allci",
  items: [
    ["bli:sr25", 1],
    ["bli:rifle_mag", 16],
    ["bli:lvci", 1],
  ],
  armor: [
    ["slot.armor.head", "bli:fast_med"],
    ["slot.armor.chest", "bli:vest_ci"],
    ["slot.armor.legs", "bli:pants_ci"],
    ["slot.armor.feet", "bli:boots_guard"],
  ],
  inventory: HumanInventory,
};

export const CI_Med = {
  title: "§2Chaos Insurgency - Medic",
  subtitle: "§2混沌分裂者-医疗兵",
  target_tip: "§f为你的队友进行治疗\n消灭一切阻止你们的人\n抢夺SCP物品",
  tag: "ci_med",
  group: "allci",
  items: [
    ["bli:hkmp7", 1],
    ["bli:smg_mag", 16],
    ["bli:lvci", 1],
    ["bli:first_aid_kit_medic", 1],
  ],
  armor: [
    ["slot.armor.head", "bli:fast_med"],
    ["slot.armor.chest", "bli:vest_ci"],
    ["slot.armor.legs", "bli:pants_ci"],
    ["slot.armor.feet", "bli:boots_guard"],
  ],
  inventory: HumanInventory,
};

export const CI_Commander = {
  title: "§2Chaos Insurgency - Commander",
  subtitle: "§2混沌分裂者-指挥官",
  target_tip: "§f指挥你的队员\n消灭一切阻止你们的人\n抢夺SCP物品",
  tag: "ci_com",
  group: "allci",
  items: [
    ["bli:ak103t", 1],
    ["bli:rifle_mag", 16],
    ["bli:lvci", 1],
    ["bli:lvw", 1],
  ],
  armor: [
    ["slot.armor.head", "bli:fast_med"],
    ["slot.armor.chest", "bli:vest_ci"],
    ["slot.armor.legs", "bli:pants_ci"],
    ["slot.armor.feet", "bli:boots_guard"],
  ],
  inventory: HumanInventory,
};

// CI刷新函数
// 刷新上限
const LimitCIDefault = 27;
const LimitCIMedDef = 1;
const LimitCIComDef = 1;
const LimitCISniperDef = 1;
export function support_ci() {
  // world.playMusic("AN");
  // world.sendMessage(`§e[ANNOUNCE] §bMTF unit Epsilon-11, designated Nine-Tailed Fox, has entered the facility.`);
  let LimitCI = LimitCIDefault;
  if (CustomSupportLimit !== undefined) {
    LimitCI = CustomSupportLimit;
  }
  let PreSpawnPlayer = world.getAllPlayers();
  let LimitMed = LimitCIMedDef;
  let LimitCom = LimitCIComDef;
  let LimitSniper = LimitCISniperDef;
  // world.sendMessage(`指挥官上限：${LimitCom}`);
  // world.sendMessage(`上限：${LimitCI}`);
  PreSpawnPlayer.forEach((player) => {
    const position = player.location;
    const PlayerTag = player.getTags();
    const PlayerID = player.name;
    if (LimitCI !== 0) {
      if (AllClassesTag.some((arg) => PlayerTag.includes(arg))) {
      } else {
        if (!player.hasTag("dev")) {
          player.removeTag("spectator");
          overworld.runCommand(`effect "${PlayerID}" clear`);
          overworld.runCommand(`gamemode adventure "${PlayerID}"`);
          const SpawnPointID = Math.floor(Math.random() * SpawnPointCI.length);
          // world.sendMessage(`SpawnPointID:${SpawnPointID} Player:${PlayerID}`);
          // world.sendMessage(`上限：${LimitCI}`);
          overworld.runCommand(
            `tp "${PlayerID}" ${SpawnPointCI[SpawnPointID].x} ${SpawnPointCI[SpawnPointID].y} ${SpawnPointCI[SpawnPointID].z}`
          );
          const SpawnAllType = [CI_Rifle, CI_Rifle, CI_Breaker, CI_Med, CI_Commander, CI_Sniper];
          const TypeRandom = Math.floor(Math.random() * SpawnAllType.length);
          let SpawnType = SpawnAllType[TypeRandom];
          if (SpawnType === CI_Med && LimitMed !== 1) {
            SpawnType = CI_Med;
            // world.sendMessage(`指挥官上限：${LimitCom},改为刷新CI_Rifle`);
          }
          if (SpawnType === CI_Med && LimitMed === 1) {
            LimitMed = 0;
            // world.sendMessage(`刷新指挥官,上限--：${LimitCom}`);
          }
          if (SpawnType === CI_Commander && LimitCom !== 1) {
            SpawnType = CI_Rifle;
            // world.sendMessage(`指挥官上限：${LimitCom},改为刷新CI_Rifle`);
          }
          if (SpawnType === CI_Commander && LimitCom === 1) {
            LimitCom = 0;
            // world.sendMessage(`刷新指挥官,上限--：${LimitCom}`);
          }
          if (SpawnType === CI_Sniper && LimitSniper !== 1) {
            SpawnType = CI_Rifle;
          }
          if (SpawnType === CI_Sniper && LimitSniper === 1) {
            LimitSniper = 0;
          }
          player.addTag(`${SpawnType.tag}`);
          player.addTag(`${SpawnType.group}`);
          overworld.runCommand(`title "${PlayerID}" times 0 300 0`);
          overworld.runCommand(`title "${PlayerID}" title ${SpawnType.title}`);
          overworld.runCommand(`title "${PlayerID}" subtitle ${SpawnType.subtitle}\n${SpawnType.target_tip}`);
          // player.sendMessage(`====================================`);
          // player.sendMessage(`§e>>>[角色信息]§f你是${SpawnType.subtitle}，§e任务目标：${SpawnType.target_tip}。`);
          // player.sendMessage(`====================================`);
          overworld.runCommand(`clear "${PlayerID}"`);
          overworld.runCommand(`effect "${PlayerID}" instant_health 1 255 true`);
          overworld.runCommand(`effect "${PlayerID}" resistance 20 255 true`);
          for (let slot = SpawnType.inventory[0]; slot < SpawnType.inventory[1]; slot++) {
            overworld.runCommand(
              `replaceitem entity "${PlayerID}" slot.inventory ${slot} ei:disable 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          overworld.runCommand(
            `replaceitem entity "${PlayerID}" slot.hotbar 8 ei:id_card 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
          );
          for (let i = 0; i < SpawnType.items.length; i++) {
            overworld.runCommand(`give "${PlayerID}" ${SpawnType.items[i][0]} ${SpawnType.items[i][1]}`);
          }
          for (let i = 0; i < SpawnType.armor.length; i++) {
            overworld.runCommand(
              `replaceitem entity "${PlayerID}" ${SpawnType.armor[i][0]} 0 ${SpawnType.armor[i][1]} 1 0`
            );
            // if (["slot.armor.chest", "slot.armor.legs"].includes(SpawnType.armor[i][0])) {
            //   overworld.runCommand(
            //     `replaceitem entity "${PlayerID}" ${SpawnType.armor[i][0]} 0 ${SpawnType.armor[i][1]} 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            //   );
            // }
          }
          LimitCI--;
        }
      }
    }
  });
}
//
//
//-------------------------------------------------------------------------------------------------------------------------------------------------------------
//
//
export const SerpentS_Hand = {
  title: "§cSerpent's Hand",
  subtitle: "§c蛇之手",
  target_tip: "§f配合其他蛇之手成员\n帮助设施内的SCP逃离这座设施\n杀死一切阻挡你的人",
  tag: "sh",
  group: "scp",
  items: [
    ["bli:m4a1", 1],
    ["bli:rifle_mag", 16],
    ["bli:lv3", 1],
    ["bli:scp500", 1],
  ],
  armor: [
    ["slot.armor.head", "air"],
    ["slot.armor.chest", "bli:sh_clothes"],
    ["slot.armor.legs", "air"],
    ["slot.armor.feet", "air"],
  ],
  inventory: [0, 27],
  hotbar: [0, 9],
};

// SerpentS_Hand刷新函数
// 刷新上限
const LimitSerpentS_HandDef = 27;
export function support_sh() {
  let LimitSerpentS_Hand = LimitSerpentS_HandDef;
  let PreSpawnPlayer = world.getAllPlayers();
  PreSpawnPlayer.forEach((player) => {
    const position = player.location;
    const PlayerTag = player.getTags();
    const PlayerID = player.name;
    if (LimitSerpentS_Hand !== 0) {
      if (AllClassesTag.some((arg) => PlayerTag.includes(arg))) {
        // world.sendMessage(`§e[GameMode]>_: §f当前对局不存在旁观者，生成失败.`);
      } else {
        if (!player.hasTag("dev")) {
          player.removeTag("spectator");
          overworld.runCommand(`effect "${PlayerID}" clear`);
          overworld.runCommand(`gamemode adventure "${PlayerID}"`);
          const SpawnPointID = 0;
          overworld.runCommand(
            `tp "${PlayerID}" ${SpawnPointSH[SpawnPointID].x} ${SpawnPointSH[SpawnPointID].y} ${SpawnPointSH[SpawnPointID].z}`
          );
          // const SpawnAllType = [];
          // const TypeRandom = Math.floor(Math.random() * SpawnAllType.length);
          let SpawnType = SerpentS_Hand;
          player.addTag(`${SpawnType.tag}`);
          player.addTag(`${SpawnType.group}`);
          overworld.runCommand(`title "${PlayerID}" times 0 300 0`);
          overworld.runCommand(`title "${PlayerID}" title ${SpawnType.title}`);
          overworld.runCommand(`title "${PlayerID}" subtitle ${SpawnType.subtitle}\n${SpawnType.target_tip}`);
          // player.sendMessage(`====================================`);
          // player.sendMessage(`§e>>>[角色信息]§f你是${SpawnType.subtitle}，§e任务目标：${SpawnType.target_tip}。`);
          // player.sendMessage(`====================================`);
          overworld.runCommand(`clear "${PlayerID}"`);
          overworld.runCommand(`effect "${PlayerID}" instant_health 1 255 true`);
          overworld.runCommand(`effect "${PlayerID}" resistance 5 255 true`);
          // for (let slot = SpawnType.inventory[0]; slot < SpawnType.inventory[1]; slot++) {
          //   overworld.runCommand(
          //     `replaceitem entity "${PlayerID}" slot.inventory ${slot} ei:disable 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
          //   );
          // }
          // for (let slot = SpawnType.hotbar[0]; slot < SpawnType.hotbar[1]; slot++) {
          //   overworld.runCommand(
          //     `replaceitem entity "${PlayerID}" slot.hotbar ${slot} ei:disable 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
          //   );
          // }
          for (let i = 0; i < SpawnType.armor.length; i++) {
            overworld.runCommand(
              `replaceitem entity "${PlayerID}" ${SpawnType.armor[i][0]} 0 ${SpawnType.armor[i][1]} 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          overworld.runCommand(
            `replaceitem entity "${PlayerID}" slot.hotbar 8 ei:id_card 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
          );
          for (let i = 0; i < SpawnType.items.length; i++) {
            overworld.runCommand(`give "${PlayerID}" ${SpawnType.items[i][0]} ${SpawnType.items[i][1]}`);
          }
          // for (let j = SpawnType.items.length; j < 9 - SpawnType.items.length; j++) {
          //   overworld.runCommand(
          //     `replaceitem entity "${PlayerID}" slot.hotbar ${j} ei:disable 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
          //   );
          // }
          LimitSerpentS_Hand--;
        }
      }
    }
  });
}
//
//
//-------------------------------------------------------------------------------------------------------------------------------------------------------------
//
//
export const SCP_173 = {
  title: "§cSCP-173",
  subtitle: "§cSCP-173 - 最初之作'雕像'",
  target_tip:
    "§f你是一个坚固的雕像\n你可以轻松的扭断人类的颈部\n但有人看着你的时候你无法移动\n借助眨眼间隙进行攻击\n杀光你看到的所有人并逃离设施",
  tag: "scp173",
  group: "scp",
  items: [
    // ["l4gg:shotgun", 1],
    // ["l4gg:shotgun_bullet_item", 72],
    // ["bli:lv5", 1],
    // ["bli:scp500", 5],
  ],
  armor: [
    ["slot.armor.head", "air"],
    ["slot.armor.chest", "air"],
    ["slot.armor.legs", "air"],
    ["slot.armor.feet", "bli:scp173"],
  ],
  inventory: [0, 27],
  hotbar: [0, 9],
};

// SCP-173刷新函数
// 刷新上限
const Limit173Def = 1;
export function spawn173() {
  let Limit173 = Limit173Def;
  let PreSpawnPlayer = world.getAllPlayers();
  PreSpawnPlayer.forEach((player) => {
    const position = player.location;
    const PlayerTag = player.getTags();
    const PlayerID = player.name;
    if (Limit173 !== 0) {
      if (AllClassesTag.some((arg) => PlayerTag.includes(arg))) {
        // world.sendMessage(`§e[GameMode]>_: §f当前对局不存在旁观者，生成失败.`);
      } else {
        if (!player.hasTag("dev")) {
          player.removeTag("spectator");
          overworld.runCommand(`effect "${PlayerID}" clear`);
          overworld.runCommand(`gamemode adventure "${PlayerID}"`);
          const SpawnPointID = 0;
          overworld.runCommand(
            `tp "${PlayerID}" ${SpawnPointSCP173[SpawnPointID].x} ${SpawnPointSCP173[SpawnPointID].y} ${SpawnPointSCP173[SpawnPointID].z}`
          );
          // const SpawnAllType = [];
          // const TypeRandom = Math.floor(Math.random() * SpawnAllType.length);
          let SpawnType = SCP_173;
          player.addTag(`${SpawnType.tag}`);
          player.addTag(`${SpawnType.group}`);
          overworld.runCommand(`title "${PlayerID}" times 0 300 0`);
          overworld.runCommand(`title "${PlayerID}" title ${SpawnType.title}`);
          overworld.runCommand(`title "${PlayerID}" subtitle ${SpawnType.subtitle}\n${SpawnType.target_tip}`);
          // player.sendMessage(`====================================`);
          // player.sendMessage(`§e>>>[角色信息]§f你是${SpawnType.subtitle}，§e任务目标：${SpawnType.target_tip}。`);
          // player.sendMessage(`====================================`);
          overworld.runCommand(`clear "${PlayerID}"`);
          overworld.runCommand(`effect "${PlayerID}" health_boost 100000 94 true`);
          overworld.runCommand(`effect "${PlayerID}" instant_health 1 255 true`);
          overworld.runCommand(`effect "${PlayerID}" resistance 5 255 true`);
          for (let slot = SpawnType.inventory[0]; slot < SpawnType.inventory[1]; slot++) {
            overworld.runCommand(
              `replaceitem entity "${PlayerID}" slot.inventory ${slot} ei:disable 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          for (let slot = SpawnType.hotbar[0]; slot < SpawnType.hotbar[1]; slot++) {
            overworld.runCommand(
              `replaceitem entity "${PlayerID}" slot.hotbar ${slot} ei:disable 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          for (let i = 0; i < SpawnType.items.length; i++) {
            overworld.runCommand(
              `replaceitem entity "${PlayerID}" slot.hotbar ${i} ${SpawnType.items[i][0]} ${SpawnType.items[i][1]} 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          for (let j = SpawnType.items.length; j < 9 - SpawnType.items.length; j++) {
            overworld.runCommand(
              `replaceitem entity "${PlayerID}" slot.hotbar ${j} ei:disable 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          for (let i = 0; i < SpawnType.armor.length; i++) {
            overworld.runCommand(
              `replaceitem entity "${PlayerID}" ${SpawnType.armor[i][0]} 0 ${SpawnType.armor[i][1]} 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          Limit173--;
        }
      }
    }
  });
}
//
//
//-------------------------------------------------------------------------------------------------------------------------------------------------------------
//
//
export const SCP_457 = {
  title: "§cSCP-457",
  subtitle: "§cSCP-457 - '火男'",
  target_tip: "§f你全身持续燃烧着火焰\n靠近人类使用高温烧死他们\n杀光你看到的所有人并逃离设施",
  tag: "scp457",
  group: "scp",
  items: [
    // ["l4gg:shotgun", 1],
    // ["l4gg:shotgun_bullet_item", 72],
    // ["bli:lv5", 1],
    // ["bli:scp500", 5],
  ],
  armor: [
    ["slot.armor.head", "icon:scp_457"],
    ["slot.armor.chest", "air"],
    ["slot.armor.legs", "air"],
    ["slot.armor.feet", "air"],
  ],
  inventory: [0, 27],
  hotbar: [0, 9],
};

// SCP-457刷新函数
// 刷新上限
const Limit457Def = 1;
export function spawn457() {
  let Limit457 = Limit457Def;
  let PreSpawnPlayer = world.getAllPlayers();
  PreSpawnPlayer.forEach((player) => {
    const position = player.location;
    const PlayerTag = player.getTags();
    const PlayerID = player.name;
    if (Limit457 !== 0) {
      if (AllClassesTag.some((arg) => PlayerTag.includes(arg))) {
        // world.sendMessage(`§e[GameMode]>_: §f当前对局不存在旁观者，生成失败.`);
      } else {
        if (!player.hasTag("dev")) {
          player.removeTag("spectator");
          overworld.runCommand(`effect "${PlayerID}" clear`);
          overworld.runCommand(`gamemode adventure "${PlayerID}"`);
          const SpawnPointID = 0;
          overworld.runCommand(
            `tp "${PlayerID}" ${SpawnPointSCP457[SpawnPointID].x} ${SpawnPointSCP457[SpawnPointID].y} ${SpawnPointSCP457[SpawnPointID].z}`
          );
          // const SpawnAllType = [];
          // const TypeRandom = Math.floor(Math.random() * SpawnAllType.length);
          let SpawnType = SCP_457;
          player.addTag(`${SpawnType.tag}`);
          player.addTag(`${SpawnType.group}`);
          overworld.runCommand(`title "${PlayerID}" times 0 300 0`);
          overworld.runCommand(`title "${PlayerID}" title ${SpawnType.title}`);
          overworld.runCommand(`title "${PlayerID}" subtitle ${SpawnType.subtitle}\n${SpawnType.target_tip}`);
          // player.sendMessage(`====================================`);
          // player.sendMessage(`§e>>>[角色信息]§f你是${SpawnType.subtitle}，§e任务目标：${SpawnType.target_tip}。`);
          // player.sendMessage(`====================================`);
          overworld.runCommand(`clear "${PlayerID}"`);
          overworld.runCommand(`effect "${PlayerID}" health_boost 100000 44 true`);
          overworld.runCommand(`effect "${PlayerID}" instant_health 1 255 true`);
          overworld.runCommand(`effect "${PlayerID}" resistance 5 255 true`);
          for (let slot = SpawnType.inventory[0]; slot < SpawnType.inventory[1]; slot++) {
            overworld.runCommand(
              `replaceitem entity "${PlayerID}" slot.inventory ${slot} ei:disable 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          for (let slot = SpawnType.hotbar[0]; slot < SpawnType.hotbar[1]; slot++) {
            overworld.runCommand(
              `replaceitem entity "${PlayerID}" slot.hotbar ${slot} ei:disable 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          for (let i = 0; i < SpawnType.items.length; i++) {
            overworld.runCommand(
              `replaceitem entity "${PlayerID}" slot.hotbar ${i} ${SpawnType.items[i][0]} ${SpawnType.items[i][1]} 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          for (let j = SpawnType.items.length; j < 9 - SpawnType.items.length; j++) {
            overworld.runCommand(
              `replaceitem entity "${PlayerID}" slot.hotbar ${j} ei:disable 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          for (let i = 0; i < SpawnType.armor.length; i++) {
            overworld.runCommand(
              `replaceitem entity "${PlayerID}" ${SpawnType.armor[i][0]} 0 ${SpawnType.armor[i][1]} 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          Limit457--;
        }
      }
    }
  });
}
//
//
//-------------------------------------------------------------------------------------------------------------------------------------------------------------
//
//
export const SCP_066 = {
  title: "§cSCP-066",
  subtitle: "§cSCP-066 - 'Eric的玩具'",
  target_tip: "§f你可以放出声音巨大的音乐\n半径10格内的所有人类都将受到伤害\n杀光你看到的所有人并逃离设施",
  tag: "scp066",
  group: "scp",
  items: [
    ["ei:music_attack", 1],
    ["ei:rush_stick", 1],
    ["ei:music_attack_eric", 1],
    ["ei:music_attack_note", 1],
    ["ei:change_models", 1],
  ],
  armor: [
    ["slot.armor.head", "icon:scp_066"],
    ["slot.armor.chest", "air"],
    ["slot.armor.legs", "air"],
    ["slot.armor.feet", "air"],
  ],
  inventory: [0, 27],
  hotbar: [0, 9],
};

// SCP-066刷新函数
// 刷新上限
const Limit066Def = 1;
export function spawn066() {
  let Limit066 = Limit066Def;
  let PreSpawnPlayer = world.getAllPlayers();
  PreSpawnPlayer.forEach((player) => {
    const position = player.location;
    const PlayerTag = player.getTags();
    const PlayerID = player.name;
    if (Limit066 !== 0) {
      if (AllClassesTag.some((arg) => PlayerTag.includes(arg))) {
        // world.sendMessage(`§e[GameMode]>_: §f当前对局不存在旁观者，生成失败.`);
      } else {
        if (!player.hasTag("dev")) {
          player.removeTag("spectator");
          overworld.runCommand(`effect "${PlayerID}" clear`);
          overworld.runCommand(`gamemode adventure "${PlayerID}"`);
          const SpawnPointID = 0;
          overworld.runCommand(
            `tp "${PlayerID}" ${SpawnPointSCP066[SpawnPointID].x} ${SpawnPointSCP066[SpawnPointID].y} ${SpawnPointSCP066[SpawnPointID].z}`
          );
          // const SpawnAllType = [];
          // const TypeRandom = Math.floor(Math.random() * SpawnAllType.length);
          let SpawnType = SCP_066;
          player.addTag(`${SpawnType.tag}`);
          player.addTag(`${SpawnType.group}`);
          overworld.runCommand(`title "${PlayerID}" times 0 300 0`);
          overworld.runCommand(`title "${PlayerID}" title ${SpawnType.title}`);
          overworld.runCommand(`title "${PlayerID}" subtitle ${SpawnType.subtitle}\n${SpawnType.target_tip}`);
          // player.sendMessage(`====================================`);
          // player.sendMessage(`§e>>>[角色信息]§f你是${SpawnType.subtitle}，§e任务目标：${SpawnType.target_tip}。`);
          // player.sendMessage(`====================================`);
          overworld.runCommand(`clear "${PlayerID}"`);
          overworld.runCommand(`effect "${PlayerID}" health_boost 100000 44 true`);
          overworld.runCommand(`effect "${PlayerID}" instant_health 1 255 true`);
          overworld.runCommand(`effect "${PlayerID}" resistance 5 255 true`);
          for (let slot = SpawnType.inventory[0]; slot < SpawnType.inventory[1]; slot++) {
            overworld.runCommand(
              `replaceitem entity "${PlayerID}" slot.inventory ${slot} ei:disable 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          for (let slot = SpawnType.hotbar[0]; slot < SpawnType.hotbar[1]; slot++) {
            overworld.runCommand(
              `replaceitem entity "${PlayerID}" slot.hotbar ${slot} ei:disable 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          for (let i = 0; i < SpawnType.items.length; i++) {
            overworld.runCommand(
              `replaceitem entity "${PlayerID}" slot.hotbar ${i} ${SpawnType.items[i][0]} ${SpawnType.items[i][1]} 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          for (let j = SpawnType.items.length; j < 9 - SpawnType.items.length; j++) {
            overworld.runCommand(
              `replaceitem entity "${PlayerID}" slot.hotbar ${j} ei:disable 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          for (let i = 0; i < SpawnType.armor.length; i++) {
            overworld.runCommand(
              `replaceitem entity "${PlayerID}" ${SpawnType.armor[i][0]} 0 ${SpawnType.armor[i][1]} 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          Limit066--;
        }
      }
    }
  });
}
//
//
//-------------------------------------------------------------------------------------------------------------------------------------------------------------
//
//
export const SCP_049 = {
  title: "§cSCP-049",
  subtitle: "§cSCP-049 - '疫医'",
  target_tip:
    "§f在你看来这里的很多人类都感染了怪病\n你需要治愈他们\n你的触摸对人类来说是致命的\n杀光你看到的所有人并逃离设施",
  tag: "scp049",
  group: "scp",
  items: [
    // ["ei:music_attack", 1],
    // ["ei:rush_stick", 1],
    // ["ei:music_attack_eric", 1],
    // ["ei:music_attack_note", 1],
    // ["ei:change_models", 1],
  ],
  armor: [
    ["slot.armor.head", "icon:scp_049"],
    ["slot.armor.chest", "air"],
    ["slot.armor.legs", "air"],
    ["slot.armor.feet", "air"],
  ],
  inventory: [0, 27],
  hotbar: [0, 9],
};

// SCP-049刷新函数
// 刷新上限
const Limit049Def = 1;
export function spawn049() {
  let Limit049 = Limit049Def;
  let PreSpawnPlayer = world.getAllPlayers();
  PreSpawnPlayer.forEach((player) => {
    const position = player.location;
    const PlayerTag = player.getTags();
    const PlayerID = player.name;
    if (Limit049 !== 0) {
      if (AllClassesTag.some((arg) => PlayerTag.includes(arg))) {
        // world.sendMessage(`§e[GameMode]>_: §f当前对局不存在旁观者，生成失败.`);
      } else {
        if (!player.hasTag("dev")) {
          player.removeTag("spectator");
          overworld.runCommand(`effect "${PlayerID}" clear`);
          overworld.runCommand(`gamemode adventure "${PlayerID}"`);
          const SpawnPointID = 0;
          overworld.runCommand(
            `tp "${PlayerID}" ${SpawnPointSCP049[SpawnPointID].x} ${SpawnPointSCP049[SpawnPointID].y} ${SpawnPointSCP049[SpawnPointID].z}`
          );
          // const SpawnAllType = [];
          // const TypeRandom = Math.floor(Math.random() * SpawnAllType.length);
          let SpawnType = SCP_049;
          player.addTag(`${SpawnType.tag}`);
          player.addTag(`${SpawnType.group}`);
          overworld.runCommand(`title "${PlayerID}" times 0 300 0`);
          overworld.runCommand(`title "${PlayerID}" title ${SpawnType.title}`);
          overworld.runCommand(`title "${PlayerID}" subtitle ${SpawnType.subtitle}\n${SpawnType.target_tip}`);
          // player.sendMessage(`====================================`);
          // player.sendMessage(`§e>>>[角色信息]§f你是${SpawnType.subtitle}，§e任务目标：${SpawnType.target_tip}。`);
          // player.sendMessage(`====================================`);
          overworld.runCommand(`clear "${PlayerID}"`);
          overworld.runCommand(`effect "${PlayerID}" health_boost 100000 44 true`);
          overworld.runCommand(`effect "${PlayerID}" instant_health 1 255 true`);
          overworld.runCommand(`effect "${PlayerID}" resistance 5 255 true`);
          for (let slot = SpawnType.inventory[0]; slot < SpawnType.inventory[1]; slot++) {
            overworld.runCommand(
              `replaceitem entity "${PlayerID}" slot.inventory ${slot} ei:disable 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          for (let slot = SpawnType.hotbar[0]; slot < SpawnType.hotbar[1]; slot++) {
            overworld.runCommand(
              `replaceitem entity "${PlayerID}" slot.hotbar ${slot} ei:disable 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          for (let i = 0; i < SpawnType.items.length; i++) {
            overworld.runCommand(
              `replaceitem entity "${PlayerID}" slot.hotbar ${i} ${SpawnType.items[i][0]} ${SpawnType.items[i][1]} 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          for (let j = SpawnType.items.length; j < 9 - SpawnType.items.length; j++) {
            overworld.runCommand(
              `replaceitem entity "${PlayerID}" slot.hotbar ${j} ei:disable 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          for (let i = 0; i < SpawnType.armor.length; i++) {
            overworld.runCommand(
              `replaceitem entity "${PlayerID}" ${SpawnType.armor[i][0]} 0 ${SpawnType.armor[i][1]} 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          Limit049--;
        }
      }
    }
  });
}
//
//
//-------------------------------------------------------------------------------------------------------------------------------------------------------------
//
//
export const SCP_049_2 = {
  title: "§cSCP-049-2 - Normal",
  subtitle: "§cSCP-049-2(标准型)",
  target_tip: "§f你被049“治愈”了\n你感到自己变得强壮非常渴望活物\n听从“主治医生”的引导\n杀光你看到的所有人并逃离设施",
  tag: "scp049_2",
  group: "scp",
  items: [
    // ["ei:music_attack", 1],
    // ["ei:rush_stick", 1],
    // ["ei:music_attack_eric", 1],
    // ["ei:music_attack_note", 1],
    // ["ei:change_models", 1],
  ],
  armor: [
    ["slot.armor.head", "icon:scp_049_2"],
    ["slot.armor.chest", "air"],
    ["slot.armor.legs", "air"],
    ["slot.armor.feet", "air"],
  ],
  inventory: [0, 27],
  hotbar: [0, 9],
  health: 24,
};

export const SCP_049_2_Fast = {
  title: "§cSCP-049-2 - Fast",
  subtitle: "§cSCP-049-2(快速型)",
  target_tip: "§f你被049“治愈”了\n你感到自己变得强壮非常渴望活物\n听从“主治医生”的引导\n杀光你看到的所有人并逃离设施",
  tag: "scp049_2_f",
  group: "scp",
  items: [
    // ["ei:music_attack", 1],
    // ["ei:rush_stick", 1],
    // ["ei:music_attack_eric", 1],
    // ["ei:music_attack_note", 1],
    // ["ei:change_models", 1],
  ],
  armor: [
    ["slot.armor.head", "icon:scp_049_2"],
    ["slot.armor.chest", "air"],
    ["slot.armor.legs", "air"],
    ["slot.armor.feet", "air"],
  ],
  inventory: [0, 27],
  hotbar: [0, 9],
  health: 4,
};

export const SCP_049_2_Slow = {
  title: "§cSCP-049-2 - Slow",
  subtitle: "§cSCP-049-2(缓慢型)",
  target_tip: "§f你被049“治愈”了\n你感到自己变得强壮非常渴望活物\n听从“主治医生”的引导\n杀光你看到的所有人并逃离设施",
  tag: "scp049_2_s",
  group: "scp",
  items: [
    // ["ei:music_attack", 1],
    // ["ei:rush_stick", 1],
    // ["ei:music_attack_eric", 1],
    // ["ei:music_attack_note", 1],
    // ["ei:change_models", 1],
  ],
  armor: [
    ["slot.armor.head", "icon:scp_049_2"],
    ["slot.armor.chest", "air"],
    ["slot.armor.legs", "air"],
    ["slot.armor.feet", "air"],
  ],
  inventory: [0, 27],
  hotbar: [0, 9],
  health: 44,
};

// SCP-049-2刷新函数
// 刷新上限
const Limit049_2Def = 1;
export function spawn049_2(player: Player) {
  try {
    let Limit049_2 = Limit049_2Def;
    // const player = SCP049_Infection;
    // const position = player.location;
    const PlayerTag = player.getTags();
    const PlayerID = player.name;
    if (Limit049_2 !== 0) {
      if (AllClassesTag.some((arg) => PlayerTag.includes(arg))) {
        // world.sendMessage(`§e[GameMode]>_: §f当前对局不存在旁观者，生成失败.`);
      } else {
        // if (!player.hasTag("dev")) {
        player.removeTag("spectator");
        overworld.runCommand(`effect "${PlayerID}" clear`);
        overworld.runCommand(`gamemode adventure "${PlayerID}"`);
        const SpawnPointID = 0;
        overworld.runCommand(
          `tp "${PlayerID}" ${SpawnPointSCP049_2[SpawnPointID].x} ${SpawnPointSCP049_2[SpawnPointID].y} ${SpawnPointSCP049_2[SpawnPointID].z}`
        );
        // const SpawnAllType = [];
        // const TypeRandom = Math.floor(Math.random() * SpawnAllType.length);
        let SpawnType = SCP049ChooseType;
        player.addTag(`${SpawnType.tag}`);
        player.addTag(`${SpawnType.group}`);
        overworld.runCommand(`title "${PlayerID}" times 0 300 0`);
        overworld.runCommand(`title "${PlayerID}" title ${SpawnType.title}`);
        overworld.runCommand(`title "${PlayerID}" subtitle ${SpawnType.subtitle}\n${SpawnType.target_tip}`);
        // player.sendMessage(`====================================`);
        // player.sendMessage(`§e>>>[角色信息]§f你是${SpawnType.subtitle}，§e任务目标：${SpawnType.target_tip}。`);
        // player.sendMessage(`====================================`);
        overworld.runCommand(`clear "${PlayerID}"`);
        overworld.runCommand(`effect "${PlayerID}" health_boost 100000 ${SpawnType.health} true`);
        overworld.runCommand(`effect "${PlayerID}" instant_health 1 255 true`);
        overworld.runCommand(`effect "${PlayerID}" resistance 5 255 true`);
        for (let slot = SpawnType.inventory[0]; slot < SpawnType.inventory[1]; slot++) {
          overworld.runCommand(
            `replaceitem entity "${PlayerID}" slot.inventory ${slot} ei:disable 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
          );
        }
        for (let slot = SpawnType.hotbar[0]; slot < SpawnType.hotbar[1]; slot++) {
          overworld.runCommand(
            `replaceitem entity "${PlayerID}" slot.hotbar ${slot} ei:disable 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
          );
        }
        for (let i = 0; i < SpawnType.items.length; i++) {
          overworld.runCommand(
            `replaceitem entity "${PlayerID}" slot.hotbar ${i} ${SpawnType.items[i][0]} ${SpawnType.items[i][1]} 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
          );
        }
        for (let j = SpawnType.items.length; j < 9 - SpawnType.items.length; j++) {
          overworld.runCommand(
            `replaceitem entity "${PlayerID}" slot.hotbar ${j} ei:disable 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
          );
        }
        for (let i = 0; i < SpawnType.armor.length; i++) {
          overworld.runCommand(
            `replaceitem entity "${PlayerID}" ${SpawnType.armor[i][0]} 0 ${SpawnType.armor[i][1]} 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
          );
        }
        Limit049_2--;
        // }
      }
    }
  } catch {}
}
//
//
//-------------------------------------------------------------------------------------------------------------------------------------------------------------
//
//
export const SCP_966 = {
  title: "§cSCP-966",
  subtitle: "§cSCP-966 - '睡梦杀手'",
  target_tip:
    "§f你注视的人类会变的虚弱\n用锋利的爪子杀死他们\n人类在正常情况下看不到你\n小心那些携带夜视仪的人类\n杀光你看到的所有人并逃离设施",
  tag: "scp966",
  group: "scp",
  items: [
    // ["l4gg:shotgun", 1],
    // ["l4gg:shotgun_bullet_item", 72],
    // ["bli:lv5", 1],
    // ["bli:scp500", 5],
  ],
  armor: [
    ["slot.armor.head", "air"],
    ["slot.armor.chest", "air"],
    ["slot.armor.legs", "air"],
    ["slot.armor.feet", "air"],
  ],
  inventory: [0, 27],
  hotbar: [0, 9],
};

// SCP-966刷新函数
// 刷新上限
const Limit966Def = 1;
export function spawn966() {
  let Limit966 = Limit966Def;
  let PreSpawnPlayer = world.getAllPlayers();
  PreSpawnPlayer.forEach((player) => {
    const position = player.location;
    const PlayerTag = player.getTags();
    const PlayerID = player.name;
    if (Limit966 !== 0) {
      if (AllClassesTag.some((arg) => PlayerTag.includes(arg))) {
        // world.sendMessage(`§e[GameMode]>_: §f当前对局不存在旁观者，生成失败.`);
      } else {
        if (!player.hasTag("dev")) {
          player.removeTag("spectator");
          overworld.runCommand(`effect "${PlayerID}" clear`);
          overworld.runCommand(`gamemode adventure "${PlayerID}"`);
          const SpawnPointID = 0;
          overworld.runCommand(
            `tp "${PlayerID}" ${SpawnPointSCP966[SpawnPointID].x} ${SpawnPointSCP966[SpawnPointID].y} ${SpawnPointSCP966[SpawnPointID].z}`
          );
          // const SpawnAllType = [];
          // const TypeRandom = Math.floor(Math.random() * SpawnAllType.length);
          let SpawnType = SCP_966;
          player.addTag(`${SpawnType.tag}`);
          player.addTag(`${SpawnType.group}`);
          overworld.runCommand(`title "${PlayerID}" times 0 300 0`);
          overworld.runCommand(`title "${PlayerID}" title ${SpawnType.title}`);
          overworld.runCommand(`title "${PlayerID}" subtitle ${SpawnType.subtitle}\n${SpawnType.target_tip}`);
          // player.sendMessage(`====================================`);
          // player.sendMessage(`§e>>>[角色信息]§f你是${SpawnType.subtitle}，§e任务目标：${SpawnType.target_tip}。`);
          // player.sendMessage(`====================================`);
          overworld.runCommand(`clear "${PlayerID}"`);
          overworld.runCommand(`effect "${PlayerID}" health_boost 100000 44 true`);
          overworld.runCommand(`effect "${PlayerID}" instant_health 1 255 true`);
          overworld.runCommand(`effect "${PlayerID}" resistance 5 255 true`);
          for (let slot = SpawnType.inventory[0]; slot < SpawnType.inventory[1]; slot++) {
            overworld.runCommand(
              `replaceitem entity "${PlayerID}" slot.inventory ${slot} ei:disable 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          for (let slot = SpawnType.hotbar[0]; slot < SpawnType.hotbar[1]; slot++) {
            overworld.runCommand(
              `replaceitem entity "${PlayerID}" slot.hotbar ${slot} ei:disable 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          for (let i = 0; i < SpawnType.items.length; i++) {
            overworld.runCommand(
              `replaceitem entity "${PlayerID}" slot.hotbar ${i} ${SpawnType.items[i][0]} ${SpawnType.items[i][1]} 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          for (let j = SpawnType.items.length; j < 9 - SpawnType.items.length; j++) {
            overworld.runCommand(
              `replaceitem entity "${PlayerID}" slot.hotbar ${j} ei:disable 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          for (let i = 0; i < SpawnType.armor.length; i++) {
            overworld.runCommand(
              `replaceitem entity "${PlayerID}" ${SpawnType.armor[i][0]} 0 ${SpawnType.armor[i][1]} 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          Limit966--;
        }
      }
    }
  });
}
//
//
//-------------------------------------------------------------------------------------------------------------------------------------------------------------
//
//
export const SCP_106 = {
  title: "§cSCP-106",
  subtitle: "§cSCP-106 - '恐怖老人'",
  target_tip: "§f你可以将人类抓入你的口袋空间并杀死他们\n你可以穿过大多数的门\n杀光你看到的所有人并逃离设施",
  tag: "scp106",
  group: "scp",
  items: [
    ["ei:setpoint", 1],
    ["ei:gotopoint", 1],
    // ["bli:lv5", 1],
    // ["bli:scp500", 5],
  ],
  armor: [
    ["slot.armor.head", "icon:scp_106"],
    ["slot.armor.chest", "air"],
    ["slot.armor.legs", "air"],
    ["slot.armor.feet", "air"],
  ],
  inventory: [0, 27],
  hotbar: [0, 9],
};

// SCP-106刷新函数
// 刷新上限
const Limit106Def = 1;
export function spawn106() {
  let Limit106 = Limit106Def;
  let PreSpawnPlayer = world.getAllPlayers();
  PreSpawnPlayer.forEach((player) => {
    const position = player.location;
    const PlayerTag = player.getTags();
    const PlayerID = player.name;
    if (Limit106 !== 0) {
      if (AllClassesTag.some((arg) => PlayerTag.includes(arg))) {
        // world.sendMessage(`§e[GameMode]>_: §f当前对局不存在旁观者，生成失败.`);
      } else {
        if (!player.hasTag("dev")) {
          player.removeTag("spectator");
          overworld.runCommand(`effect "${PlayerID}" clear`);
          overworld.runCommand(`gamemode adventure "${PlayerID}"`);
          const SpawnPointID = 0;
          overworld.runCommand(
            `tp "${PlayerID}" ${SpawnPointSCP106[SpawnPointID].x} ${SpawnPointSCP106[SpawnPointID].y} ${SpawnPointSCP106[SpawnPointID].z}`
          );
          // const SpawnAllType = [];
          // const TypeRandom = Math.floor(Math.random() * SpawnAllType.length);
          let SpawnType = SCP_106;
          player.addTag(`${SpawnType.tag}`);
          player.addTag(`${SpawnType.group}`);
          overworld.runCommand(`title "${PlayerID}" times 0 300 0`);
          overworld.runCommand(`title "${PlayerID}" title ${SpawnType.title}`);
          overworld.runCommand(`title "${PlayerID}" subtitle ${SpawnType.subtitle}\n${SpawnType.target_tip}`);
          // player.sendMessage(`====================================`);
          // player.sendMessage(`§e>>>[角色信息]§f你是${SpawnType.subtitle}，§e任务目标：${SpawnType.target_tip}。`);
          // player.sendMessage(`====================================`);
          overworld.runCommand(`clear "${PlayerID}"`);
          overworld.runCommand(`effect "${PlayerID}" health_boost 100000 44 true`);
          overworld.runCommand(`effect "${PlayerID}" instant_health 1 255 true`);
          overworld.runCommand(`effect "${PlayerID}" resistance 5 255 true`);
          for (let slot = SpawnType.inventory[0]; slot < SpawnType.inventory[1]; slot++) {
            overworld.runCommand(
              `replaceitem entity "${PlayerID}" slot.inventory ${slot} ei:disable 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          for (let slot = SpawnType.hotbar[0]; slot < SpawnType.hotbar[1]; slot++) {
            overworld.runCommand(
              `replaceitem entity "${PlayerID}" slot.hotbar ${slot} ei:disable 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          for (let i = 0; i < SpawnType.items.length; i++) {
            overworld.runCommand(
              `replaceitem entity "${PlayerID}" slot.hotbar ${i} ${SpawnType.items[i][0]} ${SpawnType.items[i][1]} 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          for (let j = SpawnType.items.length; j < 9 - SpawnType.items.length; j++) {
            overworld.runCommand(
              `replaceitem entity "${PlayerID}" slot.hotbar ${j} ei:disable 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          for (let i = 0; i < SpawnType.armor.length; i++) {
            overworld.runCommand(
              `replaceitem entity "${PlayerID}" ${SpawnType.armor[i][0]} 0 ${SpawnType.armor[i][1]} 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          Limit106--;
        }
      }
    }
  });
}
//
//
//-------------------------------------------------------------------------------------------------------------------------------------------------------------
//
//
export const SCP_096 = {
  title: "§cSCP-096",
  subtitle: "§cSCP-096 - '害羞的人'",
  target_tip:
    "§f大多数情况下你是温顺的\n当人类看到你的脸时将激怒你\n狂怒时你可以徒手掰开大部分门\n并且可以对靠近你的人造成致命攻击\n杀光你看到的所有人并逃离设施",
  tag: "scp096",
  group: "scp",
  items: [
    // ["ei:setpoint", 1],
    // ["ei:gotopoint", 1],
    // ["bli:lv5", 1],
    // ["bli:scp500", 5],
  ],
  armor: [
    ["slot.armor.head", "icon:scp_096_normal"],
    ["slot.armor.chest", "air"],
    ["slot.armor.legs", "air"],
    ["slot.armor.feet", "air"],
  ],
  inventory: [0, 27],
  hotbar: [0, 9],
};

// SCP-096刷新函数
// 刷新上限
const Limit096Def = 1;
export function spawn096() {
  let Limit096 = Limit096Def;
  let PreSpawnPlayer = world.getAllPlayers();
  PreSpawnPlayer.forEach((player) => {
    const position = player.location;
    const PlayerTag = player.getTags();
    const PlayerID = player.name;
    if (Limit096 !== 0) {
      if (AllClassesTag.some((arg) => PlayerTag.includes(arg))) {
        // world.sendMessage(`§e[GameMode]>_: §f当前对局不存在旁观者，生成失败.`);
      } else {
        if (!player.hasTag("dev")) {
          player.removeTag("spectator");
          overworld.runCommand(`effect "${PlayerID}" clear`);
          overworld.runCommand(`gamemode adventure "${PlayerID}"`);
          const SpawnPointID = 0;
          overworld.runCommand(
            `tp "${PlayerID}" ${SpawnPointSCP096[SpawnPointID].x} ${SpawnPointSCP096[SpawnPointID].y} ${SpawnPointSCP096[SpawnPointID].z}`
          );
          // const SpawnAllType = [];
          // const TypeRandom = Math.floor(Math.random() * SpawnAllType.length);
          let SpawnType = SCP_096;
          player.addTag(`${SpawnType.tag}`);
          player.addTag(`${SpawnType.group}`);
          overworld.runCommand(`title "${PlayerID}" times 0 300 0`);
          overworld.runCommand(`title "${PlayerID}" title ${SpawnType.title}`);
          overworld.runCommand(`title "${PlayerID}" subtitle ${SpawnType.subtitle}\n${SpawnType.target_tip}`);
          // player.sendMessage(`====================================`);
          // player.sendMessage(`§e>>>[角色信息]§f你是${SpawnType.subtitle}，§e任务目标：${SpawnType.target_tip}。`);
          // player.sendMessage(`====================================`);
          overworld.runCommand(`clear "${PlayerID}"`);
          overworld.runCommand(`effect "${PlayerID}" health_boost 100000 44 true`);
          overworld.runCommand(`effect "${PlayerID}" instant_health 1 255 true`);
          overworld.runCommand(`effect "${PlayerID}" resistance 5 255 true`);
          for (let slot = SpawnType.inventory[0]; slot < SpawnType.inventory[1]; slot++) {
            overworld.runCommand(
              `replaceitem entity "${PlayerID}" slot.inventory ${slot} ei:disable 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          for (let slot = SpawnType.hotbar[0]; slot < SpawnType.hotbar[1]; slot++) {
            overworld.runCommand(
              `replaceitem entity "${PlayerID}" slot.hotbar ${slot} ei:disable 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          for (let i = 0; i < SpawnType.items.length; i++) {
            overworld.runCommand(
              `replaceitem entity "${PlayerID}" slot.hotbar ${i} ${SpawnType.items[i][0]} ${SpawnType.items[i][1]} 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          for (let j = SpawnType.items.length; j < 9 - SpawnType.items.length; j++) {
            overworld.runCommand(
              `replaceitem entity "${PlayerID}" slot.hotbar ${j} ei:disable 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          for (let i = 0; i < SpawnType.armor.length; i++) {
            overworld.runCommand(
              `replaceitem entity "${PlayerID}" ${SpawnType.armor[i][0]} 0 ${SpawnType.armor[i][1]} 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          Limit096--;
        }
      }
    }
  });
}
//
//
//-------------------------------------------------------------------------------------------------------------------------------------------------------------
//
//
export const SCP_035 = {
  title: "§cSCP-035",
  subtitle: "§c占据面具",
  target_tip:
    "§f你勾引了一位三级研究员戴上了你\n现在你可以自由的控制他的身体\n你强化了这具身体使其更坚韧\n但代价是这具身体会逐渐遭受腐蚀\n利用好这副身躯\n杀光他们所有人",
  tag: "scp035",
  group: "scp",
  items: [
    ["minecraft:netherite_axe", 1],
    ["bli:glock19", 1],
    ["bli:pistol_mag", 3],
  ],
  armor: [
    // ["slot.armor.head", "turtle_helmet"],
    // ["slot.armor.chest", "air"],
    // ["slot.armor.legs", "air"],
    // ["slot.armor.feet", "air"],
  ],
  inventory: [0, 27],
  hotbar: [6, 9],
};

// SCP-035刷新函数
// 刷新上限
const Limit035Def = 1;
export function spawn035() {
  let Limit035 = Limit035Def;
  let PreSpawnPlayer = world.getAllPlayers();
  PreSpawnPlayer.forEach((player) => {
    const position = player.location;
    const PlayerTag = player.getTags();
    const PlayerID = player.name;
    if (Limit035 !== 0) {
      if (AllClassesTag.some((arg) => PlayerTag.includes(arg))) {
        // world.sendMessage(`§e[GameMode]>_: §f当前对局不存在旁观者，生成失败.`);
      } else {
        if (!player.hasTag("dev")) {
          player.removeTag("spectator");
          overworld.runCommand(`effect "${PlayerID}" clear`);
          overworld.runCommand(`gamemode adventure "${PlayerID}"`);
          const SpawnPointID = Math.floor(Math.random() * SpawnPointSCP035.length);
          overworld.runCommand(
            `tp "${PlayerID}" ${SpawnPointSCP035[SpawnPointID].x} ${SpawnPointSCP035[SpawnPointID].y} ${SpawnPointSCP035[SpawnPointID].z}`
          );
          // const SpawnAllType = [];
          // const TypeRandom = Math.floor(Math.random() * SpawnAllType.length);
          let SpawnType = SCP_035;
          player.addTag(`${SpawnType.tag}`);
          player.addTag(`${SpawnType.group}`);
          overworld.runCommand(`title "${PlayerID}" times 0 300 0`);
          overworld.runCommand(`title "${PlayerID}" title ${SpawnType.title}`);
          overworld.runCommand(`title "${PlayerID}" subtitle ${SpawnType.subtitle}\n${SpawnType.target_tip}`);
          // player.sendMessage(`====================================`);
          // player.sendMessage(`§e>>>[角色信息]§f你是${SpawnType.subtitle}，§e任务目标：${SpawnType.target_tip}。`);
          // player.sendMessage(`====================================`);
          overworld.runCommand(`clear "${PlayerID}"`);
          overworld.runCommand(`effect "${PlayerID}" instant_health 1 255 true`);
          overworld.runCommand(`effect "${PlayerID}" resistance 5 255 true`);
          for (let i = 0; i < SpawnType.items.length; i++) {
            overworld.runCommand(`give "${PlayerID}" ${SpawnType.items[i][0]} ${SpawnType.items[i][1]}`);
          }
          for (let i = 0; i < SpawnType.armor.length; i++) {
            overworld.runCommand(
              `replaceitem entity "${PlayerID}" ${SpawnType.armor[i][0]} 0 ${SpawnType.armor[i][1]} 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
            );
          }
          Limit035--;
        }
      }
    }
  });
}
//
//
//-------------------------------------------------------------------------------------------------------------------------------------------------------------
//
//
export const SCP_008_1 = {
  title: "§cSCP-008-1",
  subtitle: "§cSCP-008丧尸病毒受感染个体",
  target_tip:
    "§f你是SCP-008感染者\n肌肉耐力和力量增强, 新陈代谢速度极低\n你只能进行基本的身体活动\n你现在会精力充沛地朝着与人类相关的景象、\n声音和气味移动并试图摄入目标\n§c被你攻击的人会被感染为像你一样的个体\n杀光你看到的所有人并逃离设施§f",
  tag: "scp008_1",
  group: "scp",
  items: [
    // ["ei:music_attack", 1],
    // ["ei:rush_stick", 1],
    // ["ei:music_attack_eric", 1],
    // ["ei:music_attack_note", 1],
    // ["ei:change_models", 1],
  ],
  armor: [
    ["slot.armor.head", "icon:scp_049_2"],
    ["slot.armor.chest", "air"],
    ["slot.armor.legs", "air"],
    ["slot.armor.feet", "air"],
  ],
  inventory: [0, 27],
  hotbar: [0, 9],
  health: 14,
};

// SCP-008-1刷新函数
// 刷新上限
const Limit008_1Def = 1;
export function spawn008_1(player: Player, spawnlocation: Vector3) {
  ClearAllTag(player);
  let Limit008_1 = Limit008_1Def;
  const position = player.location;
  const PlayerTag = player.getTags();
  const PlayerID = player.name;
  if (Limit008_1 !== 0) {
    if (AllClassesTag.some((arg) => PlayerTag.includes(arg))) {
      // world.sendMessage(`§e[GameMode]>_: §f当前对局不存在旁观者，生成失败.`);
    } else {
      if (!player.hasTag("dev")) {
        player.removeTag("spectator");
        overworld.runCommand(`effect "${PlayerID}" clear`);
        overworld.runCommand(`gamemode adventure "${PlayerID}"`);
        const SpawnPointID = 0;
        overworld.runCommand(`tp "${PlayerID}" ${spawnlocation.x} ${spawnlocation.y} ${spawnlocation.z}`);
        // const SpawnAllType = [];
        // const TypeRandom = Math.floor(Math.random() * SpawnAllType.length);
        let SpawnType = SCP_008_1;
        player.addTag(`${SpawnType.tag}`);
        player.addTag(`${SpawnType.group}`);
        overworld.runCommand(`title "${PlayerID}" times 0 300 0`);
        overworld.runCommand(`title "${PlayerID}" title ${SpawnType.title}`);
        overworld.runCommand(`title "${PlayerID}" subtitle ${SpawnType.subtitle}\n${SpawnType.target_tip}`);
        // player.sendMessage(`====================================`);
        // player.sendMessage(`§e>>>[角色信息]§f你是${SpawnType.subtitle}，§e任务目标：${SpawnType.target_tip}。`);
        // player.sendMessage(`====================================`);
        overworld.runCommand(`clear "${PlayerID}"`);
        overworld.runCommand(`effect "${PlayerID}" health_boost 100000 ${SpawnType.health} true`);
        overworld.runCommand(`effect "${PlayerID}" instant_health 1 255 true`);
        overworld.runCommand(`effect "${PlayerID}" resistance 5 255 true`);
        for (let slot = SpawnType.inventory[0]; slot < SpawnType.inventory[1]; slot++) {
          overworld.runCommand(
            `replaceitem entity "${PlayerID}" slot.inventory ${slot} ei:disable 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
          );
        }
        for (let slot = SpawnType.hotbar[0]; slot < SpawnType.hotbar[1]; slot++) {
          overworld.runCommand(
            `replaceitem entity "${PlayerID}" slot.hotbar ${slot} ei:disable 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
          );
        }
        for (let i = 0; i < SpawnType.items.length; i++) {
          overworld.runCommand(
            `replaceitem entity "${PlayerID}" slot.hotbar ${i} ${SpawnType.items[i][0]} ${SpawnType.items[i][1]} 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
          );
        }
        for (let j = SpawnType.items.length; j < 9 - SpawnType.items.length; j++) {
          overworld.runCommand(
            `replaceitem entity "${PlayerID}" slot.hotbar ${j} ei:disable 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
          );
        }
        for (let i = 0; i < SpawnType.armor.length; i++) {
          overworld.runCommand(
            `replaceitem entity "${PlayerID}" ${SpawnType.armor[i][0]} 0 ${SpawnType.armor[i][1]} 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
          );
        }
        Limit008_1--;
      }
    }
  }
}
//
//
//-------------------------------------------------------------------------------------------------------------------------------------------------------------
//
//
// 随机支援部队刷新
export function support_random() {
  const Random = Math.random();
  if (Random < 0.35) {
    support_ntf();
  } //
  else if (Random > 0.35 && Random < 0.55) {
    support_sne();
  } //
  else if (Random > 0.55 && Random < 0.8) {
    support_ci();
  } //
  else {
    support_sh();
  }
}

// 设施扫描
export function FacilityDetect() {
  let ResSum = 0;
  let ClassDSum = 0;
  let GuardSum = 0;
  let NTFSum = 0;
  let SNESum = 0;
  let RRHSum = 0;
  let CISum = 0;
  let SCPSum = 0;
  const AllPlayer = world.getAllPlayers();
  for (const Player of AllPlayer) {
    if (Player.hasTag("sci")) {
      ResSum++;
    }
    if (Player.hasTag("allclassd")) {
      ClassDSum++;
    }
    if (Player.hasTag("allguard")) {
      GuardSum++;
    }
    if (Player.hasTag("allntf")) {
      NTFSum++;
    }
    if (Player.hasTag("allsne")) {
      SNESum++;
    }
    if (Player.hasTag("allrrh")) {
      RRHSum++;
    }
    if (Player.hasTag("allci")) {
      CISum++;
    }
    if (Player.hasTag("scp")) {
      SCPSum++;
    }
  }
  world.sendMessage(
    `§e[ANNOUNCE] §bControl to NTF, camera scan complete. Multiple stragglers. Their positions are now being broadcasted to you.`
  );
  PlaySoundForAllPlayer("ACF1");
  for (const Player of AllPlayer) {
    const PlayerID = Player.name;
    const position = Player.location;
    if (
      Player.hasTag("allguard") ||
      Player.hasTag("allntf") ||
      Player.hasTag("allsne") ||
      Player.hasTag("allrrh") ||
      Player.hasTag("dev")
    ) {
      Player.sendMessage(`§e[Scan System] §bResearcher§f: ${ResSum}`);
      Player.sendMessage(`§e[Scan System] §6Class-D§f: ${ClassDSum}`);
      Player.sendMessage(`§e[Scan System] §1Security Officer§f: ${GuardSum}`);
      Player.sendMessage(`§e[Scan System] §bMTF-Epsilon-11§f: ${NTFSum}`);
      Player.sendMessage(`§e[Scan System] §sMTF-Eta-10§f: ${SNESum}`);
      Player.sendMessage(`§e[Scan System] §cMTF-Alpha-10§f: ${RRHSum}`);
      Player.sendMessage(`§e[Scan System] §2Chaos Insurgency§f: ${CISum}`);
      Player.sendMessage(`§e[Scan System] §cSCP Subject§f: ${SCPSum}`);
    }
  }
}

// 清除所有标签
export function ClearAllTag(player: Player) {
  for (let i = 0; i < AllClassesTag.length; i++) {
    player.removeTag(`${AllClassesTag[i]}`);
  }
}

// SCP随机不重复刷新
export function SpawnRandomSCP(num: number) {
  if (num > CanSpawnSCPTags.length) {
    num = CanSpawnSCPTags.length;
  }
  let SCPTags = CanSpawnSCPTags;
  let RandomTagsList: string[] = [];
  for (let i = 0; i < num; i++) {
    let RandomNum = Math.random();
    const RandomSCP = SCPTags[Math.floor(SCPTags.length * RandomNum)];
    RandomTagsList.push(RandomSCP.split("p")[1]);
    SCPTags = SCPTags.filter((scp) => scp !== RandomSCP);
  }

  for (const number of RandomTagsList) {
    // world.sendMessage(number);
    // eval(`spawn${number}()`);
    switch (number) {
      case "173":
        spawn173();
        break;
      case "457":
        spawn457();
        break;
      case "066":
        spawn066();
        break;
      case "049":
        spawn049();
        break;
      case "106":
        spawn106();
        break;
      case "096":
        spawn096();
        break;
    }
  }
}
