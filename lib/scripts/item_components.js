import { system, world, } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";
import { GateA_Blast } from "./map_event";
import { FacilityDetect } from "./classes";
import { ShowCustomizeMenu } from "./customize/custom_skin";
import { PlaySoundForAllPlayer } from "./misc";
// 定义主世界维度
let overworld;
// 定义下界维度
let nether;
// 定义末地维度
let theEnd;
world.afterEvents.worldLoad.subscribe((arg) => {
    // 获取主世界维度
    overworld = world.getDimension("overworld");
    // 获取下界维度
    nether = world.getDimension("nether");
    // 获取末地维度
    theEnd = world.getDimension("the_end");
});
export function RegisterCustomComponent() {
    system.beforeEvents.startup.subscribe((initevent) => {
        // world.sendMessage(`自定义组件注册成功`);
        initevent.itemComponentRegistry.registerCustomComponent("ei:scp106_setpoint", SCP106SetPoint);
        initevent.itemComponentRegistry.registerCustomComponent("ei:scp106_gotopoint", SCP106GoToPoint);
        initevent.itemComponentRegistry.registerCustomComponent("ei:scp066_music_attack_eric", SCP066MusicAttackEric);
        initevent.itemComponentRegistry.registerCustomComponent("ei:scp066_music_attack_note", SCP066MusicAttackNote);
        initevent.itemComponentRegistry.registerCustomComponent("ei:scp066_music_attack", SCP066MusicAttack);
        initevent.itemComponentRegistry.registerCustomComponent("ei:scp066_rush_stick", SCP066RushStick);
        initevent.itemComponentRegistry.registerCustomComponent("ei:mtf_terminal", MTF_Terminal);
        initevent.itemComponentRegistry.registerCustomComponent("ei:change_models", ChangeModels);
        initevent.itemComponentRegistry.registerCustomComponent("ei:open_customize_menu", OpenCustomizeMenu);
    });
}
export const SCP106SetPoint = {
    onUse: (arg) => {
        var _a, _b;
        const player = arg.source;
        const location = {
            x: player.location.x,
            y: player.location.y,
            z: player.location.z,
        };
        const x = location.x;
        const y = location.y;
        const z = location.z;
        const dimension = player.dimension;
        (_b = (_a = arg.itemStack) === null || _a === void 0 ? void 0 : _a.getComponent(`cooldown`)) === null || _b === void 0 ? void 0 : _b.startCooldown(player);
        const result = dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} bl:decals1_512x replace air`);
        if (result.successCount > 0) {
            dimension.runCommand(`playsound "106Corrosion1" @a ${x} ${y} ${z}`);
            const LastPoint = world.getDynamicProperty("scp106telepoint");
            if (LastPoint !== undefined) {
                dimension.runCommand(`fill ${LastPoint.x} ${LastPoint.y} ${LastPoint.z} ${LastPoint.x} ${LastPoint.y} ${LastPoint.z} air replace bl:decals1_512x`);
            }
            world.setDynamicProperty("scp106telepoint", location);
            player.sendMessage(`传送点生成成功！`);
        } //
        else {
            player.sendMessage(`传送点生成失败！`);
        }
    },
};
export const SCP106GoToPoint = {
    onUse: (arg) => {
        var _a, _b;
        // world.sendMessage(`执行成功`);
        const player = arg.source;
        const location = {
            x: player.location.x,
            y: player.location.y,
            z: player.location.z,
        };
        const x = location.x;
        const y = location.y;
        const z = location.z;
        const dimension = player.dimension;
        (_b = (_a = arg.itemStack) === null || _a === void 0 ? void 0 : _a.getComponent(`cooldown`)) === null || _b === void 0 ? void 0 : _b.startCooldown(player);
        const Point = world.getDynamicProperty("scp106telepoint");
        // world.sendMessage(`${Point.x} ${Point.y} ${Point.z}`);
        if (Point !== undefined) {
            let i = 0;
            let j = 0;
            dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} bl:decals1_512x replace air`);
            function Reduce() {
                if (i < 2) {
                    if (i === 0.02) {
                        dimension.runCommand(`playsound "106Corrosion2" @a ${x} ${y} ${z}`);
                        system.runTimeout(() => {
                            dimension.runCommand(`playsound "106Corrosion2" @a ${x} ${y} ${z}`);
                        }, 40);
                    }
                    dimension.runCommand(`tp "${player.name}" ${x} ${y - i} ${z}`);
                    system.runTimeout(() => {
                        Reduce();
                        i += 0.02;
                    }, 1);
                } //
                else {
                    dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} air replace bl:decals1_512x`);
                    Add();
                }
            }
            Reduce();
            function Add() {
                if (j < 2.1) {
                    if (j === 0.02) {
                        dimension.runCommand(`playsound "106Breathing" @a ${x} ${y} ${z}`);
                        system.runTimeout(() => {
                            dimension.runCommand(`playsound "106Breathing" @a ${x} ${y} ${z}`);
                        }, 50);
                    }
                    dimension.runCommand(`tp "${player.name}" ${Math.floor(Point.x)} ${Math.floor(Point.y) - 2 + j} ${Math.floor(Point.z)}`);
                    system.runTimeout(() => {
                        Add();
                        j += 0.02;
                    }, 1);
                }
            }
        }
    },
};
let DetectCoolDown = 1;
let DetectCoolDownTime = 0;
export const MTF_Terminal = {
    onUse: (arg) => {
        // world.sendMessage(`test`);
        const player = arg.source;
        const Terminal = new ActionFormData()
            .title("§bMTF机动特遣队 - 控制终端")
            .body("§e选择可执行操作：")
            .button("§c爆破Gate-A", "textures/icons/detonators.png")
            .button(`§b设施扫描§6(冷却剩余：${DetectCoolDownTime}s)`, "textures/icons/scan.png");
        Terminal.show(player).then((response) => {
            const selectNum = response.selection;
            switch (selectNum) {
                case 0:
                    GateA_Blast(player);
                    break;
                case 1:
                    TerminalFacilityDetect();
                    break;
            }
        });
        //
        //
        //
        function TerminalFacilityDetect() {
            if (DetectCoolDown === 1) {
                FacilityDetect();
                DetectCoolDown = 0;
                DetectCoolDownTime = 60;
                function CoolDownReduce() {
                    if (DetectCoolDownTime > 0) {
                        DetectCoolDownTime--;
                        system.runTimeout(() => {
                            CoolDownReduce();
                        }, 20);
                    }
                    if (DetectCoolDownTime === 0) {
                        DetectCoolDown = 1;
                    }
                }
                CoolDownReduce();
            } //
            else {
                player.sendMessage(`§6设施扫描冷却中！`);
            }
        }
    },
};
export const SCP066MusicAttackEric = {
    onUse: (arg) => {
        var _a, _b;
        const SCP066 = arg.source;
        const dimension = arg.source.dimension;
        (_b = (_a = arg.itemStack) === null || _a === void 0 ? void 0 : _a.getComponent(`cooldown`)) === null || _b === void 0 ? void 0 : _b.startCooldown(SCP066);
        const location = { x: SCP066.location.x, y: SCP066.location.y, z: SCP066.location.z };
        // dimension.runCommand(
        //   `execute as @a[tag=scp066] at @s run playsound "066E1" @a[r=10] ${location.x} ${location.y} ${location.z} 100`
        // );
        const SoundOptions = {
            location: location,
            volume: 1,
        };
        // SCP066.playSound("066E1", SoundOptions);
        PlaySoundForAllPlayer("066E1");
    },
};
export const SCP066MusicAttackNote = {
    onUse: (arg) => {
        var _a, _b;
        const SCP066 = arg.source;
        const dimension = arg.source.dimension;
        (_b = (_a = arg.itemStack) === null || _a === void 0 ? void 0 : _a.getComponent(`cooldown`)) === null || _b === void 0 ? void 0 : _b.startCooldown(SCP066);
        const location = { x: SCP066.location.x, y: SCP066.location.y, z: SCP066.location.z };
        const SoundOptions = {
            location: location,
            volume: 1,
        };
        const RandomNum = Math.random();
        let NoteAllID = ["066N1", "066N1", "066N2", "066N6"];
        let NoteID = NoteAllID[Math.floor(NoteAllID.length * RandomNum)];
        // SCP066.playSound(`${NoteID}`, SoundOptions);
        PlaySoundForAllPlayer(`${NoteID}`);
    },
};
export const SCP066MusicAttack = {
    onUse: (arg) => {
        var _a, _b;
        const SCP066 = arg.source;
        const dimension = arg.source.dimension;
        (_b = (_a = arg.itemStack) === null || _a === void 0 ? void 0 : _a.getComponent(`cooldown`)) === null || _b === void 0 ? void 0 : _b.startCooldown(SCP066);
        const location = { x: SCP066.location.x, y: SCP066.location.y, z: SCP066.location.z };
        const SoundOptions = {
            location: location,
            volume: 1,
        };
        const ViewDirection = SCP066.getViewDirection();
        const DirectionX = -ViewDirection.x;
        const DirectionZ = -ViewDirection.z;
        const VectorXZ = {
            x: -DirectionX * 0,
            z: -DirectionZ * 0,
        };
        // SCP066.playSound("066B", SoundOptions);
        PlaySoundForAllPlayer("066B");
        let AttackNum = 20;
        function SCP066Attack() {
            if (AttackNum > 0) {
                dimension.runCommand(`execute as @a[tag=scp066] at @s run damage @e[r=10,tag=!scp] 2 magic entity @s`);
                AttackNum--;
                system.runTimeout(() => {
                    SCP066Attack();
                }, 20);
            }
        }
        SCP066Attack();
    },
};
export const SCP066RushStick = {
    onUse: (arg) => {
        var _a, _b;
        const SCP066 = arg.source;
        const dimension = arg.source.dimension;
        (_b = (_a = arg.itemStack) === null || _a === void 0 ? void 0 : _a.getComponent(`cooldown`)) === null || _b === void 0 ? void 0 : _b.startCooldown(SCP066);
        const location = { x: SCP066.location.x, y: SCP066.location.y, z: SCP066.location.z };
        const ViewDirection = SCP066.getViewDirection();
        if (SCP066.isOnGround) {
            const VectorXZ = {
                x: ViewDirection.x * 7,
                z: ViewDirection.z * 7,
            };
            SCP066.applyKnockback(VectorXZ, 0);
        }
        let Target = undefined;
        let CatchTarget;
        CatchTarget = system.runInterval(() => {
            const SCP066CurrentLocation = SCP066.location;
            const EntityQueryOptions = {
                excludeNames: [`${SCP066.name}`],
                excludeTags: ["scp"],
                location: SCP066CurrentLocation,
                maxDistance: 1,
                minDistance: 0,
            };
            let Targets;
            Targets = Array.from(overworld.getEntities(EntityQueryOptions));
            if (Targets.length > 0) {
                system.clearRun(CatchTarget);
                Target = Targets[0];
                Targets = undefined;
                // world.sendMessage(`调试：目标捕捉完成，已停止循环：${CatchTarget} ${Target?.typeId}`);
                SCP066Stick();
            }
        }, 1);
        // 1秒后无论如何停止循环
        system.runTimeout(() => {
            system.clearRun(CatchTarget);
            // world.sendMessage(`已停止循环`);
        }, 7);
        let StickNum = 10 * 20; //秒 x tick
        function SCP066Stick() {
            var _a;
            const TargetHealth = (_a = Target === null || Target === void 0 ? void 0 : Target.getComponent("minecraft:health")) === null || _a === void 0 ? void 0 : _a.currentValue;
            if (StickNum > 0 && TargetHealth > 0) {
                // dimension.runCommand(`execute as @a[tag=scp066] at @s run damage @e[r=10,tag=!scp] 2 entity_attack entity @s`);
                const TargetViewDirection = Target === null || Target === void 0 ? void 0 : Target.getViewDirection();
                // 获取目标的当前位置
                const TargetPosition = Target === null || Target === void 0 ? void 0 : Target.location; // Vector3 对象
                // 计算朝向相反方向的向量
                const OppositeDirection = {
                    x: -TargetViewDirection.x,
                    y: -TargetViewDirection.y,
                    z: -TargetViewDirection.z,
                };
                // 归一化向量（确保长度为 1）
                const length = Math.sqrt(Math.pow(OppositeDirection.x, 2) + Math.pow(OppositeDirection.y, 2) + Math.pow(OppositeDirection.z, 2));
                const NormalizedDirection = {
                    x: OppositeDirection.x / length,
                    y: OppositeDirection.y / length,
                    z: OppositeDirection.z / length,
                };
                // 计算朝向相反方向 0.5 格的偏移量
                const Offset = {
                    x: NormalizedDirection.x * 0.5,
                    y: NormalizedDirection.y * 0.5,
                    z: NormalizedDirection.z * 0.5,
                };
                // 计算最终的坐标
                const TeleportLocation = {
                    x: TargetPosition.x + Offset.x,
                    y: TargetPosition.y + Offset.y + 0.5,
                    z: TargetPosition.z + Offset.z,
                };
                SCP066.teleport(TeleportLocation);
                StickNum--;
                dimension.runCommand(`title @a[tag=scp066] actionbar 粘性剩余时间：${Math.floor(StickNum / 20)}s`);
                system.runTimeout(() => {
                    SCP066Stick();
                }, 1);
            }
            else {
                Target = undefined;
            }
        }
    },
};
export const ChangeModels = {
    onUse: (arg) => {
        const player = arg.source;
        const playerAny = arg.source;
        let ModalForm;
        if (player.hasTag("scp066")) {
            ModalForm = new ActionFormData()
                .title("SCP-066模型更换器")
                .body("选择要更换的模型")
                .button("旧版模型", "textures/icons/scp066_old.png")
                .button("新版模型", "textures/icons/scp066.png");
        }
        ModalForm === null || ModalForm === void 0 ? void 0 : ModalForm.show(playerAny).then((response) => {
            if (player.hasTag("scp066")) {
                switch (response.selection) {
                    case 0:
                        player.runCommand(`replaceitem entity "${player.name}" slot.armor.head 0 icon:scp_066_old 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`);
                        break;
                    case 1:
                        player.runCommand(`replaceitem entity "${player.name}" slot.armor.head 0 icon:scp_066 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`);
                }
            }
        });
    },
};
export const OpenCustomizeMenu = {
    onUse: (arg) => {
        const player = arg.source;
        ShowCustomizeMenu(player);
    },
};
//# sourceMappingURL=item_components.js.map