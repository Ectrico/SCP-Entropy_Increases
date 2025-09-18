import { Dimension, PlatformType, Player, system, world } from "@minecraft/server";
import { EscapeRewardDrops } from "../main";

//经验曲线：升级所需经验 = base_exp × (level^exp_factor)
//经验曲线：升级所需经验 = 100 × (level^1.05)

// const ExpSystem = {
//   PlayerExp: new Map<string, number>(),
//   PlayerLevel: new Map<string, number>(),
// };
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

export function ExpSetExp(PlayerID: string, Exp: number) {
  world.setDynamicProperty(`ExpExp^${PlayerID}`, Exp);
}

export function ExpSetLevel(PlayerID: string, Level: number) {
  world.setDynamicProperty(`ExpLevel^${PlayerID}`, Level);
}

export function ExpGetExp(PlayerID: string) {
  const Exp = world.getDynamicProperty(`ExpExp^${PlayerID}`);
  if (world.getDynamicProperty(`ExpExp^${PlayerID}`)) {
    return Exp;
  } //
  else {
    ExpSetExp(PlayerID, 1);
    ExpGetExp(PlayerID);
  }
}

export function ExpGetLevel(PlayerID: string) {
  const Level = world.getDynamicProperty(`ExpLevel^${PlayerID}`);
  if (world.getDynamicProperty(`ExpLevel^${PlayerID}`)) {
    return Level;
  } //
  else {
    // world.sendMessage(`else`);
    ExpSetLevel(PlayerID, 1);
    ExpGetLevel(PlayerID);
  }
}

export function ExpAddExp(PlayerID: string, value: number) {
  let Exp = ExpGetExp(PlayerID) as number;
  let Level = ExpGetLevel(PlayerID) as number;
  const NewExp = Exp + value;
  ExpUpgrade(PlayerID, Level, NewExp);
  overworld.runCommand(`playsound "Save1" "${PlayerID}" 0 0 0 10000000000`);
}

function ExpUpgrade(PlayerID: string, Level: number, Exp: number) {
  if (Level < 1250) {
    const NextLevelExpNum = 100 * Math.pow(Level, 1.05);
    if (Exp > NextLevelExpNum) {
      Level += 1;
      ExpSetLevel(PlayerID, Level);
      overworld.runCommand(`playsound "Save2" "${PlayerID}" 0 0 0 10000000000`);
      EscapeRewardDrops(PlayerID);
    }
    ExpSetExp(PlayerID, Exp);
  }
}

let ExpOfMinute = 9;
export function AddExpOfMinute() {
  for (const player of world.getAllPlayers()) {
    ExpAddExp(player.name, ExpOfMinute);
    player.sendMessage(`§f你因 在服务器中游玩 获得了 §e${ExpOfMinute} §f点经验！`);
    player.sendMessage(
      `§f你现在的经验值是 §e${ExpGetExp(player.name)}/${Math.floor(
        100 * Math.pow(ExpGetLevel(player.name) as number, 1.05)
      )} §f等级是 §e${ExpGetLevel(player.name)}！`
    );
  }
}

export function ExpChangeMassage(player: Player, addExpNum: number, reason: string) {
  player.sendMessage(`§f你因 ${reason} 获得了 §e${addExpNum} §f点经验！`);
  player.sendMessage(
    `§f你现在的经验值是 §e${ExpGetExp(player.name)}/${Math.floor(
      100 * Math.pow(ExpGetLevel(player.name) as number, 1.05)
    )} §f等级是 §e${ExpGetLevel(player.name)}！`
  );
}
