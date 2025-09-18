import { world, system, } from "@minecraft/server";
import { AllClassesTag, support_ntf, support_ci, support_guard, spawn035, support_random, FacilityDetect, spawn_classd, spawn173, spawn_res, spawn966, spawn106, support_sh, spawn457, ClearAllTag, support_sne, support_rrh, spawn066, spawn049, spawn096, SpawnRandomSCP, support_goc, spawn008_1, } from "./classes";
import { RandomItemSpawn, FixedItemSpawn, ClearAllItems } from "./items_spawn";
import { HumanRaycast, SCP096Raycast, SCP106Noclip, SCP457Burning, SCP966Raycast, } from "./character_skills";
import { Pocket_Dimension, SpawnPointSCP008_1, Terminal } from "./maps/ft_site_15";
import { AlphaWarheadDeactivated, AlphaWarheadReset, BreachActivat, CheckPointTeleport, EEOpenSpawnGOC, EleBoxFuseReset, EleBoxWireReset, EmergencyExitDoorSet, EscapeFacility, FireDoorReset, GateA_Reset, HelipadEvacuate, LeverReset, LibraryTeleport, OmegaWarheadDeactivated, OmegaWarheadRemoteReset, OmegaWarheadReset, PocketDimensionTeleport, SCP035Clear, SCP035Spawn, SCP914Clear, } from "./map_event";
import { RegisterCustomComponent } from "./item_components";
import { ClassesName, ClearAllCorpse, PlaySoundForAllPlayer, ShowNameTagClasses, SpawnCorpseOnPlayerDeath, } from "./misc";
import { ShowCustomizeMenu } from "./customize/custom_skin";
import { DefaultPlayerSkinDataLoad, LoadSkinInfo, SetSkinState, SkinStateString } from "./customize/player_skin_data";
import { M4A1_S_SkinList, M4A1_SkinList, SkinList } from "./customize/weapon_skin_data";
import { AddExpOfMinute, ExpAddExp, ExpGetExp, ExpGetLevel, ExpSetExp, ExpSetLevel } from "./exp_system/exp_system";
import { VoteChangeMode } from "./mode_control/vote_change";
import { sprayCanComponentRegistry } from "./items_function/spray_can";
import { equipSCP035OnInteract } from "./entities/scp035";
// 定义主世界维度
let overworld;
// 定义下界维度
let nether;
// 定义末地维度
let theEnd;
// 接入全局函数
equipSCP035OnInteract();
// 注册自定义组件
RegisterCustomComponent();
SpawnCorpseOnPlayerDeath();
sprayCanComponentRegistry();
world.afterEvents.worldLoad.subscribe(() => {
    // 从地图动态属性读取所有玩家皮肤信息
    LoadSkinInfo();
    // 加载默认玩家皮肤
    DefaultPlayerSkinDataLoad();
    overworld = world.getDimension("overworld");
    // 获取下界维度
    nether = world.getDimension("nether");
    // 获取末地维度
    theEnd = world.getDimension("the_end");
});
// 熵增
export const Entropy_Increases = {
    PreTimeDef: 70,
    RoundTimeDef: 1800,
    ResetTimeDef: 60,
};
// 入侵
export const Inbreak = {
    PreTimeDef: 60,
    RoundTimeDef: 720,
    ResetTimeDef: 60,
};
// 感染
export const Infection = {
    PreTimeDef: 30,
    RoundTimeDef: 720,
    ResetTimeDef: 60,
};
// 插件版本
const Version = "v1.7.0";
// 开发者数组
const Dev = ["Ectrico"];
// 秒单位，一秒应对应多少tick，作用于全局
export const SecondUnit = 19;
// 模式
export let GameMode = Entropy_Increases;
// 模式修改函数
export function setGameMode(mode) {
    GameMode = mode;
}
// 地图
export const Maps = { Site_15: "Site-15", Site_217: "Site-217" };
export const Map = Maps.Site_15;
// 初始化对局
world.afterEvents.worldLoad.subscribe(() => {
    overworld.runCommand(`kill @e[type=item]`);
    ResetPlayer();
});
let PreTimeDef = 60;
let RoundTimeDef = 1800;
let ResetTimeDef = 60;
export let PreTime;
export let ResetTime;
export let RoundTime;
function InitializePreTime() {
    PreTime = GameMode.PreTimeDef;
    PreTime++;
}
function InitializeResetTime() {
    ResetTime = GameMode.ResetTimeDef;
    ResetTime++;
}
function InitializeRoundTime() {
    RoundTime = GameMode.RoundTimeDef;
    RoundTime++;
}
InitializeResetTime();
// InitializePreTime();
// InitializeRoundTime()
//
//
//----------------------------------------------------------------------------------
//
//
// 倒计时函数
let ResetTimeIntervalId;
function ResetTimeReduce() {
    ResetTimeIntervalId = system.runInterval(() => {
        ResetTime--;
        overworld.runCommand(`title @a actionbar 重置时间：${ResetTime}`);
        if (ResetTime === 0) {
            system.clearRun(ResetTimeIntervalId); // 停止计时器
            // InitializePreTime();
            // PreTimeReduce();
            let PlayerNum = 0;
            let DevNum = 0;
            for (const player of world.getAllPlayers()) {
                if (player.hasTag("dev")) {
                    DevNum++;
                }
                else {
                    PlayerNum++;
                }
            }
            if (PlayerNum > 1) {
                InitializePreTime();
                PreTimeReduce();
            } //
            else {
                world.sendMessage(`§6无法启动对局，当前游戏人数不足2人。`);
                world.sendMessage(`§e在线开发状态玩家数：${DevNum}`);
                ServerNowPlayerDetect = 1;
            }
        }
    }, SecondUnit);
}
let PreTimeIntervalId;
function PreTimeReduce() {
    PreTimeIntervalId = system.runInterval(() => {
        PreTime--;
        overworld.runCommand(`title @a actionbar 准备时间：${PreTime}`);
        if (PreTime === 0) {
            system.clearRun(PreTimeIntervalId); // 停止计时器
            InitializeRoundTime();
            RoundTimeReduce();
            RoundTimeState = true;
        }
    }, SecondUnit);
}
let RoundTimeIntervalId;
let RoundTimeState = false;
function RoundTimeReduce() {
    RoundTimeIntervalId = system.runInterval(() => {
        RoundTime--;
        overworld.runCommand(`title @a actionbar 回合时间： ${Math.floor(RoundTime / 60)}:${RoundTime % 60 < 10 ? "0" : ""}${RoundTime % 60}`);
        if (RoundTime === 0) {
            system.clearRun(RoundTimeIntervalId); // 停止计时器
            RoundTimeState = false;
            InitializeResetTime();
            ResetTimeReduce();
        }
    }, SecondUnit);
}
// 从重置时间起始
ResetTimeReduce();
//
//
//----------------------------------------------------------------------------------
//
//
export let CustomSupportLimit;
// 对局事件
// 事件控制器
let PreTimeStart = 1;
let EnableDeadCount = 0;
system.runInterval(() => {
    if (PreTime === GameMode.PreTimeDef && PreTimeStart === 1) {
        //遍历玩家事件
        let player = world.getAllPlayers();
        //
        if (GameMode === Entropy_Increases) {
            world.sendMessage(`§b[BGM] §eOpening Credits - Hans Zimmer,Lorne Balfe`);
            PlaySoundForAllPlayer("OC");
            player.forEach((player) => {
                const position = player.location;
                const playerID = player.name;
                system.runTimeout(() => {
                    overworld.runCommand(`playsound "AL2" "${playerID}" ${position.x.toFixed(2)} ${position.y.toFixed(2)} ${position.z.toFixed(2)} 100`);
                    overworld.runCommand(`camerashake add "${playerID}" 0.05 60`);
                }, SecondUnit * 10);
            });
            overworld.runCommand(`title @a times 0 200 0`);
            overworld.runCommand(`title @a title §eGameMode - §eSCP: Entropy_Increases`);
            overworld.runCommand(`title @a subtitle §e游戏模式 - §eSCP: 熵增 - ${Version}`);
            world.sendMessage(`§e游戏模式 - §eSCP: 熵增 - §bFission_Track工作室项目作品 - §6#help获取模式帮助`);
            system.runTimeout(() => {
                world.sendMessage(`§e[ANNOUNCE] §cThe site is experiencing multiple Keter and Euclid-level containment breaches. Full-site lockdown initiated.`);
                // 角色生成
                let LimitAverage = Math.floor(player.length / 4);
                if (LimitAverage < 1) {
                    LimitAverage = 1;
                }
                system.runTimeout(() => {
                    CustomSupportLimit = LimitAverage;
                    spawn_res();
                }, 1);
                system.runTimeout(() => {
                    CustomSupportLimit = LimitAverage;
                    SpawnRandomSCP(LimitAverage);
                }, 2);
                system.runTimeout(() => {
                    CustomSupportLimit = LimitAverage;
                    support_guard();
                }, 3);
                system.runTimeout(() => {
                    CustomSupportLimit = 27;
                    spawn_classd();
                    CustomSupportLimit = undefined;
                }, 4);
            }, SecondUnit * 10);
        }
        //
        if (GameMode === Inbreak) {
            world.sendMessage(`§b[BGM] §eHummell Gets the Rockets (Alan Walker Remix) - Hans Zimmer,Alan Walker`);
            player.forEach((player) => {
                const position = player.location;
                const playerID = player.name;
                overworld.runCommand(`playsound "Hummell Gets the Rockets" "${playerID}" ${position.x.toFixed(2)} ${position.y.toFixed(2)} ${position.z.toFixed(2)} 100`);
            });
            overworld.runCommand(`title @a times 0 200 0`);
            overworld.runCommand(`title @a title §eGameMode - §2SCP: Inbreak`);
            overworld.runCommand(`title @a subtitle §e游戏模式 - §2SCP: 入侵 - 1.0.0`);
            world.sendMessage(`§e游戏模式 - §2SCP: 入侵 - §bFission_Track工作室开源项目作品 - §6#help获取模式帮助`);
            let LimitAverage = Math.floor(player.length / 4);
            if (LimitAverage < 1) {
                LimitAverage = 1;
            }
            system.runTimeout(() => {
                CustomSupportLimit = LimitAverage;
                support_guard();
            }, SecondUnit * 10);
            system.runTimeout(() => {
                CustomSupportLimit = 2 * LimitAverage;
                support_ci();
            }, 250);
            system.runTimeout(() => {
                CustomSupportLimit = undefined;
            }, 300);
        }
        //
        if (GameMode === Infection) {
            world.sendMessage(`§b[BGM] §eBriefing [Black Mesa - Blue Shift Bonus OST] - Daver`);
            player.forEach((player) => {
                const position = player.location;
                const playerID = player.name;
                overworld.runCommand(`playsound "Briefing" "${playerID}" ${position.x.toFixed(2)} ${position.y.toFixed(2)} ${position.z.toFixed(2)} 100`);
            });
            overworld.runCommand(`title @a times 0 200 0`);
            overworld.runCommand(`title @a title §eGameMode - §cSCP: Infection`);
            overworld.runCommand(`title @a subtitle §e游戏模式 - §cSCP: 感染 - 0.1.0`);
            world.sendMessage(`§e游戏模式 - §cSCP: 感染 - §bFission_Track工作室项目作品 - §6#help获取模式帮助`);
            let LimitAverage = Math.floor(player.length / 2);
            if (LimitAverage < 1) {
                LimitAverage = 1;
            }
            system.runTimeout(() => {
                spawn008_1(world.getAllPlayers()[Math.floor(Math.random() * world.getAllPlayers().length)], SpawnPointSCP008_1[0]);
                system.runTimeout(() => {
                    CustomSupportLimit = LimitAverage;
                    support_guard();
                }, SecondUnit * 10);
                system.runTimeout(() => {
                    spawn_classd();
                }, 50);
                system.runTimeout(() => {
                    CustomSupportLimit = undefined;
                }, 100);
            }, 200);
        }
        EnableDeadCount = 1;
        PreTimeStart = 0;
    }
}, 1);
let RoundTimeStart = 1;
let VictoryDecision = 0;
let VictoryDecision2 = 1;
system.runInterval(() => {
    if (RoundTime === GameMode.RoundTimeDef && RoundTimeStart === 1) {
        world.sendMessage(`§e游戏开始`);
        overworld.runCommand(`title @a times 0 200 0`);
        overworld.runCommand(`title @a title §eGame Start. Good Luck！.`);
        // system.runTimeout(() => {
        //   MusicVote("ROKR", "§e空输部队的小曲");
        // }, 100);
        if (GameMode === Entropy_Increases) {
            BreachActivat();
        }
        if (GameMode === Inbreak) {
            overworld.runCommand(`title @a subtitle §bMTF九尾狐机动特遣队已进入设施`);
            support_ntf();
        }
        if (GameMode === Infection) {
            world.sendMessage(`§e[ANNOUNCE]§c设施遭遇SCP-008病毒泄露，§e请设施内的所有D级人员与安保人员合作，§6杀死所有SCP-008实体`);
            world.sendMessage(`§e[ANNOUNCE]§c设施遭遇SCP-008病毒泄露，§e请设施内的所有D级人员与安保人员合作，§6杀死所有SCP-008实体`);
            world.sendMessage(`§e[ANNOUNCE]§c设施遭遇SCP-008病毒泄露，§e请设施内的所有D级人员与安保人员合作，§6杀死所有SCP-008实体`);
        }
        //遍历玩家事件
        let player = world.getAllPlayers();
        player.forEach((player) => {
            const position = player.location;
            const playerID = player.name;
            overworld.runCommand(`playsound "Bell2" "${playerID}" ${position.x.toFixed(2)} ${position.y.toFixed(2)} ${position.z.toFixed(2)} 100`);
        });
        RoundTimeStart = 0;
        system.runTimeout(() => {
            VictoryDecision = 1;
            VictoryDecision2 = 1;
        }, 100);
    }
}, 1);
let RoundTime660 = 1;
system.runInterval(() => {
    if (GameMode === Inbreak) {
        if (RoundTime === 660 && RoundTime660 === 1) {
            const AllPlayer = world.getAllPlayers();
            for (const Player of AllPlayer) {
                const PlayerID = Player.name;
                const position = Player.location;
                overworld.runCommand(`playsound "ACC" "${PlayerID}" ${position.x.toFixed(2)} ${position.y.toFixed(2)} ${position.z.toFixed(2)} 100`);
            }
            world.sendMessage(`§e[ANNOUNCE] §bControl to NTF. We are now checking the camera feeds for potential threats. You should see any unauthorized intruders or escapees pinged on your navigation devices.`);
            RoundTime660 = 0;
        }
    }
}, 2);
let RoundTime620 = 1;
system.runInterval(() => {
    if (GameMode === Inbreak) {
        if (RoundTime === 620 && RoundTime620 === 1) {
            const RandomDelay = Math.random() * 1000;
            system.runTimeout(() => {
                support_random();
            }, RandomDelay);
            RoundTime620 = 0;
        }
    }
}, 2);
let RoundTime500 = 1;
system.runInterval(() => {
    if (GameMode === Inbreak) {
        if (RoundTime === 500 && RoundTime500 === 1) {
            const RandomDelay = Math.random() * 1000;
            system.runTimeout(() => {
                support_random();
            }, RandomDelay);
            const AllPlayer = world.getAllPlayers();
            for (const Player of AllPlayer) {
                const PlayerID = Player.name;
                const position = Player.location;
                overworld.runCommand(`playsound "HGTR" "${PlayerID}" ${position.x.toFixed(2)} ${position.y.toFixed(2)} ${position.z.toFixed(2)} 100`);
            }
            world.sendMessage(`§b[BGM] §eHummell Gets The Rockets - Nick Glennie-Smith,Hans Zimmer,Harry Gregson-Williams`);
            RoundTime500 = 0;
        }
    }
}, 2);
let RoundTime480 = 1;
system.runInterval(() => {
    if (GameMode === Inbreak) {
        if (RoundTime === 480 && RoundTime480 === 1) {
            FacilityDetect();
            RoundTime480 = 0;
        }
    }
    //
    if (GameMode === Infection) {
        if (RoundTime === 380 && RoundTime380 === 1) {
            const RandomDelay = Math.random() * 1000;
            system.runTimeout(() => {
                support_ntf();
                PlaySoundForAllPlayer("The_Keeper");
                world.sendMessage(`§b[BGM] §eThe Keeper [Black Mesa - Blue Shift OST] - Daver`);
            }, RandomDelay);
            RoundTime380 = 0;
        }
    }
}, 2);
let RoundTime380 = 1;
system.runInterval(() => {
    if (GameMode === Inbreak) {
        if (RoundTime === 380 && RoundTime380 === 1) {
            const RandomDelay = Math.random() * 1000;
            system.runTimeout(() => {
                support_random();
            }, RandomDelay);
            RoundTime380 = 0;
        }
    }
}, 2);
system.runInterval(() => {
    if (GameMode === Inbreak) {
        if (RoundTime === 300 && RoundTime300 === 1) {
            FacilityDetect();
            RoundTime300 = 0;
        }
    }
}, 2);
let RoundTime260 = 1;
system.runInterval(() => {
    if (GameMode === Inbreak) {
        if (RoundTime === 260 && RoundTime260 === 1) {
            const RandomDelay = Math.random() * 1000;
            system.runTimeout(() => {
                support_random();
            }, RandomDelay);
            RoundTime260 = 0;
        }
    }
}, 2);
let RoundTime240 = 1;
system.runInterval(() => {
    if (GameMode === Infection) {
        if (RoundTime === 240 && RoundTime240 === 1) {
            const RandomDelay = Math.random() * 1000;
            system.runTimeout(() => {
                support_ntf();
                PlaySoundForAllPlayer("Flammable");
                world.sendMessage(`§b[BGM] §eFlammable [Black Mesa - Blue Shift OST] - Daver`);
            }, RandomDelay);
            RoundTime240 = 0;
        }
    }
}, 2);
let RoundTime140 = 1;
system.runInterval(() => {
    if (GameMode === Inbreak) {
        if (RoundTime === 140 && RoundTime140 === 1) {
            const RandomDelay = Math.random() * 1000;
            system.runTimeout(() => {
                support_random();
            }, RandomDelay);
            RoundTime140 = 0;
        }
    }
}, 2);
system.runInterval(() => {
    if (GameMode === Inbreak) {
        if (RoundTime === 120 && RoundTime120 === 1) {
            FacilityDetect();
            RoundTime120 = 0;
        }
    }
}, 2);
//
//
//
// 熵增事件
let RandomSupport = 1;
// let NTF_FD = 1;
let RoundTime1500 = 1;
let RoundTime1000 = 1;
let RoundTime900 = 1;
let RoundTime600 = 1;
let RoundTime300 = 1;
let RoundTime180 = 1;
let RoundTime150 = 1;
let RoundTime120 = 1;
system.runInterval(() => {
    //
    if (GameMode === Entropy_Increases) {
        if (RoundTime <= 1500 &&
            RoundTime % 300 === 0 &&
            RoundTime !== 600 &&
            RandomSupport === 1 &&
            RoundTimeState === true) {
            RandomSupport = 0;
            // NTF_FD = 1;
            let RandomTimeout = Math.random() * (SecondUnit * 50);
            system.runTimeout(() => {
                support_random();
            }, RandomTimeout);
        }
        if (RoundTime <= 1500 + 1 && (RoundTime - 1) % 300 === 0 && RoundTimeState === true) {
            RandomSupport = 1;
        }
        if (RoundTime === 1500 && RoundTime1500 === 1) {
            RoundTime1500 = 0;
            world.sendMessage(`§b[BGM] §eAttack - Hans Zimmer`);
            PlaySoundForAllPlayer("Attack");
        }
        //
        if (RoundTime === 1000 && RoundTime1000 === 1) {
            RoundTime1000 = 0;
            world.sendMessage(`§b[BGM] §eHummell Gets The Rockets - Nick Glennie-Smith,Hans Zimmer,Harry Gregson-Williams`);
            PlaySoundForAllPlayer("HGTR");
        }
        //
        if (RoundTime === 900 && RoundTime900 === 1) {
            RoundTime900 = 0;
            EmergencyExitDoorSet("enable");
        }
        //
        if (RoundTime === 600 && RoundTime600 === 1) {
            RoundTime600 = 0;
            let RandomTimeout = Math.random() * (SecondUnit * 50);
            system.runTimeout(() => {
                support_rrh();
            }, RandomTimeout);
            world.sendMessage(`§b[BGM] §eTime - Hans Zimmer`);
            PlaySoundForAllPlayer("Time");
        }
        //
        if (RoundTime === 180 && RoundTime180 === 1) {
            RoundTime180 = 0;
            const AllPlayer = world.getAllPlayers();
            for (const Player of AllPlayer) {
                const PlayerID = Player.name;
                const position = Player.location;
                overworld.runCommand(`playsound "WYEK" "${PlayerID}" ${position.x.toFixed(2)} ${position.y.toFixed(2)} ${position.z.toFixed(2)} 100`);
            }
            world.sendMessage(`§b[BGM] §eWould You Even Know - Michael Wyckoff,Veronica Goudie`);
        }
        //
        if (RoundTime === 150 && RoundTime150 === 1) {
            RoundTime150 = 0;
            OmegaWarheadDeactivated();
        }
        //
        if (RoundTime === 120 && RoundTime120 === 1) {
            RoundTime120 = 0;
            AlphaWarheadDeactivated();
        }
    }
}, 2);
//
//
//
let ResetTimeStart = 1;
const Team = {
    Foundation: "§bSCP基金会",
    CI: "§2混沌分裂者",
    SCP: "§cSCP",
    Unknown: "§f无",
};
let VictoryTeam;
system.runInterval(() => {
    if (ResetTime === GameMode.ResetTimeDef && ResetTimeStart === 1) {
        // 获取所有玩家
        let AllPlayers = world.getAllPlayers();
        system.runTimeout(() => {
            VictoryDecision = 0;
        }, 5);
        overworld.runCommand(`title @a times 0 1200 0`);
        overworld.runCommand(`stopsound @a`);
        overworld.runCommand(`title @a title §eGame Over！`);
        overworld.runCommand(`title @a subtitle §e游戏结束，请等待下一回合开始！`);
        world.sendMessage(`§c游戏结束`);
        world.sendMessage(`§e=============================`);
        world.sendMessage(` `);
        if (VictoryTeam === undefined) {
            VictoryTeam = Team.Unknown;
        }
        world.sendMessage(`本回合胜利阵营： ${VictoryTeam}`);
        if (GameMode === Inbreak) {
            world.sendMessage(`本次设施攻击共造成： ${DeadCount} 人死亡`);
        }
        world.sendMessage(` `);
        // 奖励掉落
        if (AllPlayers.length >= 7) {
            if (Math.random() < 0.55) {
                RewardDrops();
                world.sendMessage(`§f如果中奖, 请将截图私信于QQ群主, `);
            }
            //
            else {
                world.sendMessage(`§6没有奖励物品掉落。`);
            }
        }
        //
        else {
            world.sendMessage(`§6由于游戏人数低于7人, 无法进行奖励物品掉落。`);
        }
        //
        world.sendMessage(` `);
        world.sendMessage(`§e=============================`);
        //遍历玩家事件
        AllPlayers.forEach((player) => {
            const position = player.location;
            const playerID = player.name;
            overworld.runCommand(`playsound "Bell1" "${playerID}" ${position.x.toFixed(2)} ${position.y.toFixed(2)} ${position.z.toFixed(2)} 100`);
        });
        EnableDeadCount = 0;
        DeadCount = 0;
        ResetTimeStart = 0;
        RandomSupport = 0;
        // NTF_FD = 0;
    }
}, 2);
let ResetTime5 = 1;
let ResetTime40 = 1;
system.runInterval(() => {
    if (ResetTime === 40 && ResetTime40 === 1) {
        ResetTime40 = 0;
        VoteChangeMode();
    }
    if (ResetTime === 5 && ResetTime5 === 1) {
        overworld.runCommand(`gamemode spectator @a[tag=!dev]`);
        ResetTime5 = 0;
        // 移除所有玩家所有标签
        for (const player of world.getAllPlayers()) {
            ClearAllTag(player);
        }
        // 地图重置
        LoadSkinInfo();
        ClearAllItems();
        EleBoxFuseReset();
        EleBoxWireReset();
        EmergencyExitDoorSet("disable");
        LeverReset();
        AlphaWarheadReset();
        OmegaWarheadReset();
        OmegaWarheadRemoteReset();
        GateA_Reset();
        FireDoorReset();
        ClearAllCorpse();
        SCP914Clear();
        SCP035Clear();
        // 无效化106传送点
        world.setDynamicProperty("scp106telepoint", undefined);
        system.runTimeout(() => {
            RandomItemSpawn();
            FixedItemSpawn();
            SCP035Spawn();
        }, 60);
    }
}, 2);
function ResetEvent() {
    ResetTimeStart = 1;
    ResetTime40 = 1;
    ResetTime5 = 1;
    PreTimeStart = 1;
    RoundTimeStart = 1;
    RoundTime1500 = 1;
    RoundTime1000 = 1;
    RoundTime900 = 1;
    RoundTime660 = 1;
    RoundTime620 = 1;
    RoundTime600 = 1;
    RoundTime500 = 1;
    RoundTime480 = 1;
    RoundTime380 = 1;
    RoundTime300 = 1;
    RoundTime260 = 1;
    RoundTime240 = 1;
    RoundTime180 = 1;
    RoundTime140 = 1;
    RoundTime150 = 1;
    RoundTime120 = 1;
    RandomSupport = 1;
    RoundTimeState = false;
    // NTF_FD = 1;
}
system.runInterval(() => {
    if (ResetTime === 1) {
        ResetPlayer();
        overworld.runCommand(`kill @e[type=item]`);
        ResetEvent();
    }
}, 0);
//
//
//
//
//
// 胜利判定
system.runInterval(() => {
    if (VictoryDecision === 1) {
        let foundNtf = false; // 标记是否有 NTF 玩家
        let foundCi = false; // 标记是否有 CI 玩家
        let foundSCP = false; // 标记是否有 SCP 玩家
        const players = world.getPlayers();
        if (players.length === 0) {
            return; // 如果没有玩家，不进行判定
        }
        if (GameMode === Infection) {
            for (const player of players) {
                // 如果找到了 NTF 或 Guard 玩家，标记 foundNtf 为 true
                if (player.hasTag("sci") ||
                    player.hasTag("allguard") ||
                    player.hasTag("allntf") ||
                    player.hasTag("allsne") ||
                    player.hasTag("allrrh") ||
                    player.hasTag("allgoc") ||
                    player.hasTag("allclassd")) {
                    foundNtf = true;
                }
                // 如果找到了 SCP 玩家，标记 foundSCP 为 true
                if (player.hasTag("scp")) {
                    foundSCP = true;
                }
                // 如果三方都存在，提前退出循环
                if (foundNtf && foundSCP) {
                    break;
                }
            }
        } //
        else {
            for (const player of players) {
                // 如果找到了 NTF 或 Guard 玩家，标记 foundNtf 为 true
                if (player.hasTag("sci") ||
                    player.hasTag("allguard") ||
                    player.hasTag("allntf") ||
                    player.hasTag("allsne") ||
                    player.hasTag("allrrh") ||
                    player.hasTag("allgoc")) {
                    foundNtf = true;
                }
                // 如果找到了 CI 玩家，标记 foundCi 为 true
                if (player.hasTag("allclassd") || player.hasTag("allci")) {
                    foundCi = true;
                }
                // 如果找到了 SCP 玩家，标记 foundSCP 为 true
                if (player.hasTag("scp")) {
                    foundSCP = true;
                }
                // 如果三方都存在，提前退出循环
                if (foundNtf && foundCi && foundSCP) {
                    break;
                }
            }
        }
        // 计算剩余的阵营数量
        const remainingTeams = [foundNtf, foundCi, foundSCP].filter(Boolean).length;
        // 当只剩下一个阵营时，判断其胜利
        if (remainingTeams === 1 && VictoryDecision2 === 1) {
            if (foundNtf) {
                SCPFoundationVictory(); // 基金会胜利
            }
            else if (foundCi) {
                CIVictory(); // 混沌胜利
            }
            else if (foundSCP) {
                SCPVictory(); // SCP 胜利
            }
        }
    }
}, 0);
function CIVictory() {
    VictoryTeam = Team.CI;
    InitializeRound();
    VictoryDecision2 = 0;
}
function SCPFoundationVictory() {
    VictoryTeam = Team.Foundation;
    InitializeRound();
    VictoryDecision2 = 0;
}
function SCPVictory() {
    VictoryTeam = Team.SCP;
    InitializeRound();
    VictoryDecision2 = 0;
}
//
//
//----------------------------------------------------------------------------------
//
//
// 初始化函数
function InitializeRound() {
    overworld.runCommand(`kill @e[type=item]`);
    ResetPlayer();
    //重置倒计时系统
    if (ResetTime > 0 && ResetTime < ResetTimeDef) {
        system.clearRun(ResetTimeIntervalId);
    }
    if (PreTime > 0 && PreTime < PreTimeDef) {
        system.clearRun(PreTimeIntervalId);
    }
    if (RoundTime > 0 && PreTime < RoundTimeDef) {
        system.clearRun(RoundTimeIntervalId);
    }
    ResetEvent();
    InitializeResetTime();
    ResetTimeReduce();
    world.sendMessage("§e[GameMode]>_: §fRound Restarted.");
}
//
//
//----------------------------------------------------------------------------------
//
//
function ResetPlayer() {
    //重置玩家角色
    for (const player of world.getAllPlayers()) {
        const PlayerID = player.name;
        for (let i = 0; i < AllClassesTag.length; i++) {
            // world.sendMessage(`已尝试为玩家${PlayerID}移除tag:${AllClassesTag[i]}`);
            overworld.runCommand(`tag "${PlayerID}" remove ${AllClassesTag[i]}`);
        }
    }
}
//
//
//----------------------------------------------------------------------------------
//
//
function ForceStart() {
    InitializePreTime();
    PreTimeReduce();
}
//
//
//----------------------------------------------------------------------------------
//
//
// 模式自定义指令
world.afterEvents.chatSend.subscribe((arg) => {
    const sender = arg.sender;
    const senderID = arg.sender.name;
    const message = arg.message;
    const Operator = sender.hasTag("operator");
    if (message === "#help") {
        sender.sendMessage(`§e============模式指令帮助菜单============`);
        sender.sendMessage(` `);
        sender.sendMessage(`-----------常规指令-----------`);
        sender.sendMessage(`§b#version - 查看游戏模式版本§7`);
        sender.sendMessage(`§7[无效]#customize - 打开自定义个性化菜单§7`);
        sender.sendMessage(`-----------管理员指令-----------`);
        sender.sendMessage(`§e#round restart - 重启回合§7`);
        sender.sendMessage(`§e#spawn support random - 强制刷新支援：随机§7`);
        sender.sendMessage(`§e#spawn support ntf - 强制刷新支援：NTF§7`);
        sender.sendMessage(`§e#spawn support sne - 强制刷新支援：SNE§7`);
        sender.sendMessage(`§e#spawn support rrh - 强制刷新支援：RRH§7`);
        sender.sendMessage(`§e#spawn support ci - 强制刷新支援：CI§7`);
        sender.sendMessage(`§e#spawn support sh - 强制刷新支援：蛇之手§7`);
        sender.sendMessage(`§e#spawn res - 强制刷新：Researcher§7`);
        sender.sendMessage(`§e#spawn classd - 强制刷新：Class D§7`);
        sender.sendMessage(`§e#spawn guard - 强制刷新：安保人员§7`);
        sender.sendMessage(`§e#spawn scp173 - 强制刷新：SCP-173§7`);
        sender.sendMessage(`§e#spawn scp457 - 强制刷新：SCP-457§7`);
        sender.sendMessage(`§e#spawn scp066 - 强制刷新：SCP-066§7(全局限1)`);
        sender.sendMessage(`§e#spawn scp066 - 强制刷新：SCP-049§7(全局限1)`);
        sender.sendMessage(`§e#spawn scp966 - 强制刷新：SCP-966§7`);
        sender.sendMessage(`§e#spawn scp106 - 强制刷新：SCP-106§7`);
        sender.sendMessage(`§e#spawn scp035 - 强制刷新：SCP-035§7`);
        sender.sendMessage(`§e#spawn scp008-1 <PlayerID> - 强制刷新：SCP-008-1§7`);
        sender.sendMessage(`§e#force start - 强制启动回合§7`);
        sender.sendMessage(`§e#time skip reset - 时间控制：跳过重置时间§7`);
        sender.sendMessage(`§e#time skip pre - 强制刷新：跳过准备时间§7`);
        sender.sendMessage(`§e#time skip round - 强制刷新：跳过回合时间§7`);
        sender.sendMessage(`§e#time set <type> <number> - 设置<type>的时间为...§7`);
        sender.sendMessage(`§e#facility scan - 扫描设施§7`);
        sender.sendMessage(`§e#exp get <PlayerID> - 获取玩家经验等级数据§7`);
        sender.sendMessage(`§e#exp set exp/level <PlayerID> <value> - 设置玩家经验/等级§7`);
        sender.sendMessage(`§e#exp add exp <PlayerID> <value> - 为玩家添加经验§7`);
        sender.sendMessage(`§e#drops random - 随机刷新奖励掉落§7`);
        sender.sendMessage(`§e#skin set <PlayerID> <SkinID> <true/false> - 设置玩家自定义皮肤状态§7`);
        // sender.sendMessage(`§e#test - 执行目前定义的开发测试§7`);
        sender.sendMessage(` `);
        sender.sendMessage(`§e================End！=================`);
    }
    if (message === "#test") {
        // SCP096ScreamAttack(sender);
        SpawnRandomSCP(7);
    }
    if (message === "#version") {
        world.sendMessage(`§e[GameMode]>_: §fSCP: Inbreak ${Version}`);
    }
    if (message === "#customize") {
        ShowCustomizeMenu(sender);
        world.sendMessage(`§e[GameMode]>_: §fCustom Menu Opened.`);
    }
    if ((Dev.includes(senderID) || Operator) && message === "#round restart") {
        InitializeRound();
    }
    if ((Dev.includes(senderID) || Operator) && message === "#spawn support random") {
        support_random();
        world.sendMessage("§e[GameMode]>_: §fSupport has been Spawned.");
    }
    if ((Dev.includes(senderID) || Operator) && message === "#spawn support ntf") {
        support_ntf();
        world.sendMessage("§e[GameMode]>_: §fNTF has been Spawned.");
    }
    if ((Dev.includes(senderID) || Operator) && message === "#spawn support sne") {
        support_sne();
        world.sendMessage("§e[GameMode]>_: §fSNE has been Spawned.");
    }
    if ((Dev.includes(senderID) || Operator) && message === "#spawn support rrh") {
        support_rrh();
        world.sendMessage("§e[GameMode]>_: §fRRH has been Spawned.");
    }
    if ((Dev.includes(senderID) || Operator) && message === "#spawn support ci") {
        support_ci();
        world.sendMessage("§e[GameMode]>_: §fCI has been Spawned.");
    }
    if ((Dev.includes(senderID) || Operator) && message === "#spawn support goc") {
        support_goc();
        world.sendMessage("§e[GameMode]>_: §fGOC has been Spawned.");
    }
    if ((Dev.includes(senderID) || Operator) && message === "#spawn support sh") {
        support_sh();
        world.sendMessage("§e[GameMode]>_: §fSerpent's Hand has been Spawned.");
    }
    if ((Dev.includes(senderID) || Operator) && message === "#spawn res") {
        spawn_res();
        world.sendMessage("§e[GameMode]>_: §fResearcher has been Spawned.");
    }
    if ((Dev.includes(senderID) || Operator) && message === "#spawn classd") {
        spawn_classd();
        world.sendMessage("§e[GameMode]>_: §fClass D has been Spawned.");
    }
    if ((Dev.includes(senderID) || Operator) && message === "#spawn guard") {
        support_guard();
        world.sendMessage("§e[GameMode]>_: §fGuard has been Spawned.");
    }
    if ((Dev.includes(senderID) || Operator) && message === "#spawn scp173") {
        spawn173();
        world.sendMessage("§e[GameMode]>_: §fSCP-173 has been Spawned.");
    }
    if ((Dev.includes(senderID) || Operator) && message === "#spawn scp457") {
        spawn457();
        world.sendMessage("§e[GameMode]>_: §fSCP-457 has been Spawned.");
    }
    if ((Dev.includes(senderID) || Operator) && message === "#spawn scp066") {
        spawn066();
        world.sendMessage("§e[GameMode]>_: §fSCP-066 has been Spawned.");
    }
    if ((Dev.includes(senderID) || Operator) && message === "#spawn scp049") {
        spawn049();
        world.sendMessage("§e[GameMode]>_: §fSCP-049 has been Spawned.");
    }
    if ((Dev.includes(senderID) || Operator) && message === "#spawn scp966") {
        spawn966();
        world.sendMessage("§e[GameMode]>_: §fSCP-966 has been Spawned.");
    }
    if ((Dev.includes(senderID) || Operator) && message === "#spawn scp106") {
        spawn106();
        world.sendMessage("§e[GameMode]>_: §fSCP-106 has been Spawned.");
    }
    if ((Dev.includes(senderID) || Operator) && message === "#spawn scp096") {
        spawn096();
        world.sendMessage("§e[GameMode]>_: §fSCP-096 has been Spawned.");
    }
    if ((Dev.includes(senderID) || Operator) && message === "#spawn scp035") {
        spawn035();
        world.sendMessage("§e[GameMode]>_: §fSCP-035 has been Spawned.");
    }
    if ((Dev.includes(senderID) || Operator) &&
        message.split(" ")[0] === "#spawn" &&
        message.split(" ")[1] === "scp008-1") {
        const playerId = message.split(" ")[2];
        for (const player of world.getAllPlayers()) {
            if (player.name === playerId) {
                spawn008_1(player, SpawnPointSCP008_1[0]);
                world.sendMessage("§e[GameMode]>_: §fSCP-008-1 has been Spawned.");
            }
        }
    }
    if ((Dev.includes(senderID) || Operator) && message === "#force start") {
        ForceStart();
        world.sendMessage("§e[GameMode]>_: §fForce Started.");
    }
    if ((Dev.includes(senderID) || Operator) && message === "#time skip reset") {
        ResetTime = 7;
        world.sendMessage("§e[GameMode]>_: §fResetTime Skiped.");
    }
    if ((Dev.includes(senderID) || Operator) && message === "#time skip pre") {
        PreTime = 1;
        world.sendMessage("§e[GameMode]>_: §fPreTime Skiped.");
    }
    if ((Dev.includes(senderID) || Operator) && message === "#time skip round") {
        RoundTime = 1;
        world.sendMessage("§e[GameMode]>_: §fRoundTime Skiped.");
    }
    if ((Dev.includes(senderID) || Operator) && message.split(" ")[0] === "#time" && message.split(" ")[1] === "set") {
        const SetTime = Number(message.split(" ")[3]);
        if (message.split(" ")[2] === "reset") {
            ResetTime = SetTime;
        }
        if (message.split(" ")[2] === "pre") {
            PreTime = SetTime;
        }
        if (message.split(" ")[2] === "round") {
            RoundTime = SetTime;
        }
    }
    if ((Dev.includes(senderID) || Operator) && message === "#facility scan") {
        world.sendMessage("§e[GameMode]>_: §fFacility Scan Complete!");
        FacilityDetect();
    }
    if ((Dev.includes(senderID) || Operator) && message.split(" ")[0] === "#exp") {
        let state = "undefined";
        if (message.split(" ")[1] === "get") {
            sender.sendMessage(`§e[GameMode]>_: §f玩家：${message.split(" ")[2]} 经验：${ExpGetExp(`${message.split(" ")[2]}`)} 等级：${ExpGetLevel(`${message.split(" ")[2]}`)}`);
        } //
        else if (message.split(" ")[1] === "set") {
            if (message.split(" ")[2] === "exp") {
                ExpSetExp(`${message.split(" ")[3]}`, Number(message.split(" ")[4]));
                sender.sendMessage(`§e[GameMode]>_: §f已将玩家：${message.split(" ")[3]} 的经验点数设置为 ${message.split(" ")[4]}`);
                sender.sendMessage(`§e[GameMode]>_: §f玩家：${message.split(" ")[3]} 现有经验点数：${ExpGetExp(message.split(" ")[3])}`);
            } //
            else if (message.split(" ")[2] === "level") {
                ExpSetLevel(`${message.split(" ")[3]}`, Number(message.split(" ")[4]));
            } //
        } //
        else if (message.split(" ")[1] === "add") {
            if (message.split(" ")[2] === "exp") {
                ExpAddExp(`${message.split(" ")[3]}`, Number(message.split(" ")[4]));
                sender.sendMessage(`§e[GameMode]>_: §f已为玩家：${message.split(" ")[3]} 添加经验点数 ${message.split(" ")[4]}`);
                sender.sendMessage(`§e[GameMode]>_: §f玩家：${message.split(" ")[3]} 现有经验点数：${ExpGetExp(message.split(" ")[3])} 等级：${ExpGetLevel(message.split(" ")[3])}`);
            }
        } //
        else {
            ("undefined");
        }
    }
    if ((Dev.includes(senderID) || Operator) && message === "#drops random") {
        world.sendMessage("§e[GameMode]>_: §fDroped!");
        RewardDrops();
    }
    if ((Dev.includes(senderID) || Operator) && message.split(" ")[0] === "#skin" && message.split(" ")[1] === "set") {
        let state = "undefined";
        if (message.split(" ")[4] === "true") {
            state = SkinStateString.true;
        } //
        else if (message.split(" ")[4] === "false") {
            state = SkinStateString.false;
        } //
        else {
            ("undefined");
        }
        SetSkinState(message.split(" ")[2], message.split(" ")[3], state);
        world.sendMessage(`§e[GameMode]>_: §fSkin Set §b${message.split(" ")[2]} - ${message.split(" ")[3]} - ${state}!`);
    }
});
//
//
//----------------------------------------------------------------------------------
//
//
// 1tick全局循环
let EIRaycast173 = 1;
// 173眨眼
let EIBLINKING = 1;
let EIBlinkTime = 10;
function EIBlink() {
    if (EIBlinkTime > 0) {
        system.runTimeout(() => {
            if (EIBLINKING === 1) {
                EIBlinkTime--;
            }
            // world.sendMessage(`${EIBlinkTime}`);
            EIBlink();
        }, 20);
    }
    if (EIBlinkTime === 0) {
        EIRaycast173 = 0;
        // world.sendMessage(`Raycast173${EIRaycast173}`);
        EIBlinkTime = 10;
        const AllPlayers = world.getAllPlayers();
        for (const Player of AllPlayers) {
            overworld.runCommand(`camera @a[tag=!scp] fade time 0 0.5 0 color 0 0 0`);
        }
        system.runTimeout(() => {
            EIBlink();
            EIRaycast173 = 1;
            // world.sendMessage(`Raycast173${EIRaycast173}`);
        }, 10);
    }
}
EIBlink();
world.afterEvents.worldLoad.subscribe(() => {
    system.runInterval(() => {
        try {
            // 夜视仪效果
            overworld.runCommand(`effect @a[hasitem={item=bli:yeshiyi,location=slot.armor.head}] night_vision 15 255 true`);
            // 夜视仪效果
            overworld.runCommand(`effect @a[hasitem={item=bli:scp268,location=slot.weapon.offhand}] invisibility 1 0 true`);
            // SCP夜视效果
            overworld.runCommand(`effect @a[tag=scp] night_vision 15 255 true`);
            // SCP-714效果
            overworld.runCommand(`effect @a[hasitem={item=bli:scp714,location=slot.weapon.offhand}] slowness 2 0 true`);
            // 角色血量恒定加成
            // overworld.runCommand(`effect @a[tag=ci] health_boost 100000 0 true`);
            // overworld.runCommand(`effect @a[tag=ntf] health_boost 100000 0 true`);
            // overworld.runCommand(`effect @a[tag=guard] health_boost 100000 0 true`);
            overworld.runCommand(`effect @a[tag=scp173] health_boost 100000 94 true`);
            overworld.runCommand(`effect @a[tag=scp,tag=!sh,tag=!scp049_2,tag=!scp049_2_f] health_boost 100000 44 true`);
            // SCP-173
            overworld.runCommand(`effect @a[tag=scp173] invisibility 3 255 true`);
            overworld.runCommand(`effect @a[tag=scp173] speed 3 10 true`);
            const result = overworld.runCommand(`execute as @a[tag=scp173] at @s run damage @e[r=1,tag=!scp] 100 entity_attack entity @s`);
            if (result.successCount > 0) {
                overworld.runCommand(`execute as @a[tag=scp173] at @s run playsound NS3 @a ~ ~ ~`);
            }
            // overworld.runCommand(`effect @a[tag=scp173] resistance 1 255 true`);
            if (EIRaycast173 === 1) {
                HumanRaycast();
            }
            // SCP-457
            SCP457Burning();
            overworld.runCommand(`effect @a[tag=scp457] invisibility 3 255 true`);
            // SCP-066
            overworld.runCommand(`effect @a[tag=scp066] invisibility 3 255 true`);
            overworld.runCommand(`effect @a[tag=scp066] slowness 3 0 true`);
            // SCP-049 & SCP-049-2
            overworld.runCommand(`effect @a[tag=scp049] invisibility 3 255 true`);
            overworld.runCommand(`effect @a[tag=scp049_2] invisibility 3 255 true`);
            overworld.runCommand(`effect @a[tag=scp049_2_f] invisibility 3 255 true`);
            overworld.runCommand(`effect @a[tag=scp049_2_s] invisibility 3 255 true`);
            overworld.runCommand(`effect @a[tag=scp049_2_f] speed 3 0 true`);
            overworld.runCommand(`effect @a[tag=scp049_2_s] slowness 3 2 true`);
            // SCP-966
            SCP966Raycast();
            overworld.runCommand(`effect @a[tag=scp966] invisibility 3 255 true`);
            overworld.runCommand(`effect @a[tag=scp966] slowness 3 0 true`);
            overworld.runCommand(`effect @a[tag=scp966] strength 2 1 true`);
            // SCP-106
            overworld.runCommand(`effect @a[tag=scp106] invisibility 3 255 true`);
            overworld.runCommand(`effect @a[tag=scp106] slowness 3 0 true`);
            // overworld.runCommand(`effect @a[tag=scp106] resistance 1 255 true`);
            overworld.runCommand(`execute as @a[tag=scp106] at @s run tp @a[tag=!scp,m=!spectator,r=1] ${Pocket_Dimension.Pocket.x} ${Pocket_Dimension.Pocket.y} ${Pocket_Dimension.Pocket.z}`);
            // SCP-096
            overworld.runCommand(`effect @a[tag=scp096] invisibility 3 255 true`);
            SCP096Raycast();
            // SCP-035
            overworld.runCommand(`effect @a[tag=scp035] health_boost 100000 25 true`);
            overworld.runCommand(`effect @a[tag=scp035] hunger 3 3 true`);
            overworld.runCommand(`clear @a[tag=scp035] first_aid_kit_medic`);
            // SCP-008-1
            // overworld.runCommand(`effect @a[tag=scp008_1] slowness 3 0 true`);
            overworld.runCommand(`effect @a[tag=scp008_1] invisibility 3 255 true`);
            // overworld.runCommand(`effect @a[tag=scp008_1] speed 3 0 true`);
            // // 删除特定物品
            // overworld.runCommand(`clear @a[tag=!scp035,tag=!dev] turtle_helmet`);
        }
        catch (_a) { }
    }, 1);
    // 5tick全局循环
    system.runInterval(() => {
        // 106穿门
        SCP106Noclip();
        // 口袋空间传送
        PocketDimensionTeleport();
        // 检查站传送
        CheckPointTeleport();
        // 逃离设施
        EscapeFacility();
        // 撤离设施
        HelipadEvacuate();
        // ID显示
        ShowNameTagClasses();
        // Omega核弹结束对局检测
        OmegaWarheadEnd();
        // 蛇之手图书馆传送
        LibraryTeleport();
        // GOC条件刷新
        EEOpenSpawnGOC();
    }, 7);
});
// 100tick全局循环
let ServerNowPlayerDetect = 0;
world.afterEvents.worldLoad.subscribe(() => {
    system.runInterval(() => {
        overworld.runCommand(`effect @a saturation 10000 255 true`);
        // let AllPlayer = world.getAllPlayers();
        // // 玩家名称标签替换为空字符串
        // AllPlayer.forEach((element) => {
        //   const position = element.location;
        //   const playerID = element.name;
        //   // element.nameTag = "";
        // });
        //服务器人数判定
        const ServerNowPlayer = world.getAllPlayers();
        if (ServerNowPlayerDetect === 1) {
            let PlayerNum = 0;
            let DevNum = 0;
            for (const Player of ServerNowPlayer) {
                if (Player.hasTag("dev")) {
                    DevNum++;
                }
                else {
                    PlayerNum++;
                }
            }
            if (PlayerNum > 1) {
                InitializeRound();
                ServerNowPlayerDetect = 0;
            }
        }
        //
        //
        //
        // SCP治疗量
        overworld.runCommand(`effect @a[tag=scp173] instant_health 3 0 true`);
        // overworld.runCommand(`effect @a[tag=scp457] instant_health 3 0 true`);
        // overworld.runCommand(`effect @a[tag=scp106] instant_health 3 0 true`);
        // overworld.runCommand(`effect @a[tag=scp966] instant_health 3 0 true`);
        overworld.runCommand(`effect @a[tag=scp035] poison 2 2 true`);
    }, 100);
    // 180tick全局循环
    system.runInterval(() => {
        // 173声音
        overworld.runCommand(`execute as @a[tag=scp173] at @s run playsound 173R @a ~ ~ ~`);
    }, 180);
    // // 400tick全局循环
    // system.runInterval(() => {
    //   for (let [key, value] of SprayPlayerState) {
    //     world.sendMessage("清除中");
    //     try {
    //       system.clearRun(value);
    //     } catch {}
    //     SprayPlayerState.delete(key);
    //   }
    // }, 400);
    // 500tick全局循环
    system.runInterval(() => {
        // 049声音
        overworld.runCommand(`execute as @a[tag=scp049] at @s run playsound 049C @a ~ ~ ~`);
    }, 500);
    // 700tick全局循环
    system.runInterval(() => {
        // 106声音
        overworld.runCommand(`execute as @a[tag=scp106] at @s run playsound 106C @a ~ ~ ~`);
    }, 700);
    // 1200tick全局循环
    system.runInterval(() => {
        AddExpOfMinute();
    }, 3600);
});
//
//
//
//
//
// Omega核弹结束对局函数
export function OmegaWarheadEnd() {
    if (RoundTime > 150) {
        const OmegaWarheadTerminal = overworld.getBlock(Terminal.OmegaWarhead);
        const TerminalState = OmegaWarheadTerminal === null || OmegaWarheadTerminal === void 0 ? void 0 : OmegaWarheadTerminal.permutation.getState("ft:warhead_state");
        if (TerminalState === "detonated") {
            RoundTime = 5;
            world.sendMessage(`对局因Omega核弹的引爆而结束！`);
        }
    }
}
//
//
//----------------------------------------------------------------------------------
//
//
// 玩家加入事件
world.afterEvents.playerJoin.subscribe((arg) => {
    const player = arg.playerName;
    overworld.runCommand(`kill "${player}"`);
    system.runTimeout(() => {
        for (let i = 0; i < AllClassesTag.length; i++) {
            overworld.runCommand(`tag "${player}" remove ${AllClassesTag[i]}`);
        }
    }, 300);
});
//
//
//----------------------------------------------------------------------------------
//
//
// 玩家死亡事件
// const DeadPointMap = new Map<string, Vector3>();
// system.runInterval(() => {
//   for (const player of overworld.getPlayers()) {
//     const playerID = player.name;
//     const playerPosition = player.location;
//     DeadPointMap.set(playerID, playerPosition);
//   }
// }, 100);
let DeadCount = 0;
world.afterEvents.entityDie.subscribe((arg) => {
    const DiedEntity = arg.deadEntity;
    if (DiedEntity.typeId === "minecraft:player") {
        const DiedPlayer = DiedEntity;
        const DiedPlayerID = DiedPlayer.name;
        system.runTimeout(() => {
            overworld.runCommand(`clear "${DiedPlayerID}"`);
        }, 20);
        // const AttackPlayer = arg.damageSource.damagingEntity?.nameTag;
        const DiedPlayerTags = DiedEntity.getTags();
        // world.sendMessage(`${AttackPlayer}`);
        let DiedPlayerClasses;
        DiedPlayerClasses = ClassesName(DiedEntity);
        // if (DiedPlayerTags.includes("ntf")) {
        //    = "§bNine Tailed Fox";
        // } else if (DiedPlayerTags.includes("ci")) {
        //   DiedPlayerClasses = "§2Chaos Insurgency";
        // } else {
        //   DiedPlayerClasses = "Unknow";
        // }
        // const DeadPoint = DeadPointMap.get(DiedPlayerID);
        // if (DeadPoint !== undefined) {
        //   system.runTimeout(() => {
        //     overworld.runCommand(`tp "${DiedPlayerID}" ${DeadPoint.x} ${DeadPoint.y} ${DeadPoint.z}`);
        //   }, 30);
        // }
        world.sendMessage(`§c*DIED* §f[${DiedPlayerClasses}§f] §f${DiedPlayerID}`);
        system.runTimeout(() => {
            for (let i = 0; i < AllClassesTag.length; i++) {
                DiedEntity.removeTag(`${AllClassesTag[i]}`);
            }
        }, 20);
        if (EnableDeadCount === 1) {
            DeadCount++;
        }
    }
});
//
//
//----------------------------------------------------------------------------------
//
//
// 玩家重生事件
world.afterEvents.playerSpawn.subscribe((arg) => {
    const RespawnPlayer = arg.player;
    const RespawnPlayerID = arg.player.name;
    if (!RespawnPlayer.hasTag("dev")) {
        overworld.runCommand(`gamemode spectator "${RespawnPlayerID}"`);
    }
    RespawnPlayer.addTag("spectator");
    overworld.runCommand(`title "${RespawnPlayerID}" times 0 200 0`);
    overworld.runCommand(`title "${RespawnPlayerID}" title Spectator`);
    overworld.runCommand(`title "${RespawnPlayerID}" subtitle 你现在是旁观者，请等待复活...`);
});
//
//
//----------------------------------------------------------------------------------
//
//
function RewardDrops() {
    const AllPlayers = world.getAllPlayers();
    const RandomPlayer = AllPlayers[Math.floor(AllPlayers.length * Math.random())];
    Drops(RandomPlayer.name);
}
export function EscapeRewardDrops(RandomPlayer) {
    Drops(RandomPlayer);
}
function Drops(player) {
    // 获取当前现实世界时间
    const CurrentTime = new Date();
    const DropProbability = Math.random();
    let RandomItem;
    function DropsMassage() {
        world.sendMessage(`§d[掉落奖励] §a恭喜 §b${player} §a获得 ${RandomItem} §a--- ${CurrentTime.getFullYear()}-${CurrentTime.getMonth() + 1}-${CurrentTime.getDate()} --- ${CurrentTime.getHours()}${CurrentTime.getMinutes()}`);
    }
    if (DropProbability < 0.03) {
        RandomItem = "§b[FTRF-INFRA-Script x 1]";
        DropsMassage();
        PlaySoundForAllPlayer("Challenge_complete");
    }
    //
    else if (DropProbability > 0.1 && DropProbability < 0.11) {
        RandomItem = "§e[FTRF-Site-217_Ultra Edition x 1]";
        DropsMassage();
        PlaySoundForAllPlayer("Challenge_complete");
    }
    //
    else if (DropProbability > 0.15 && DropProbability < 0.17) {
        RandomItem = "§e[FT-Site-15_Standard Edition x 1]";
        DropsMassage();
        PlaySoundForAllPlayer("Challenge_complete");
    }
    //
    else if (DropProbability > 0.3 && DropProbability < 0.6) {
        RandomItem = "§g[群自定义头衔 x 1]";
        DropsMassage();
    }
    //
    else if (DropProbability > 0.99 && DropProbability < 1) {
        RandomItem = "§c[史诗]HK-MP7 Miku 16th§f x 1";
        SetSkinState(player, SkinList.HK_MP7_Miku16th, SkinStateString.true);
        DropsMassage();
        PlaySoundForAllPlayer("Challenge_complete");
    }
    //
    else if (DropProbability > 0.98 && DropProbability < 0.99) {
        RandomItem = "§c[史诗]M4A1-S PrintStream§g§f x 1";
        SetSkinState(player, SkinList.M4A1_S_PrintStream, SkinStateString.true);
        DropsMassage();
        PlaySoundForAllPlayer("Challenge_complete");
    }
    //
    else if (DropProbability > 0.97 && DropProbability < 0.98) {
        RandomItem = "§c[史诗]M4A1-S Genshin Furina 芙宁娜§f x 1";
        SetSkinState(player, M4A1_S_SkinList[1].id, SkinStateString.true);
        DropsMassage();
        PlaySoundForAllPlayer("Challenge_complete");
    }
    //
    else if (DropProbability > 0.92 && DropProbability < 0.97) {
        RandomItem = "§b[限定]Reverse Vertin 维尔汀§f x 1";
        SetSkinState(player, M4A1_S_SkinList[2].id, SkinStateString.true);
        DropsMassage();
    }
    //
    else if (DropProbability > 0.87 && DropProbability < 0.92) {
        RandomItem = "§b[限定]少女前线 Lunsia 露尼西亚§f x 1";
        SetSkinState(player, M4A1_SkinList[0].id, SkinStateString.true);
        DropsMassage();
    }
    //
    else if (DropProbability > 0.84 && DropProbability < 0.87) {
        RandomItem = "§d[稀有]Clear Water 澄澈之水§f x 1";
        SetSkinState(player, M4A1_S_SkinList[3].id, SkinStateString.true);
        DropsMassage();
    }
    //
    else if (DropProbability > 0.74 && DropProbability < 0.84) {
        RandomItem = "§s[普通]Forest Camo 丛林迷彩§f x 1";
        SetSkinState(player, M4A1_S_SkinList[4].id, SkinStateString.true);
        DropsMassage();
    }
    //
    else if (DropProbability > 0.64 && DropProbability < 0.74) {
        RandomItem = "§s[普通]Urban_Digital 城市数码§f x 1";
        SetSkinState(player, M4A1_S_SkinList[5].id, SkinStateString.true);
        DropsMassage();
    }
    //
    else {
        world.sendMessage(`§6没有奖励物品掉落。`);
    }
}
//# sourceMappingURL=main.js.map