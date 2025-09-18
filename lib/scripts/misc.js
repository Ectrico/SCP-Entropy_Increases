import { ItemStack, world } from "@minecraft/server";
import { AllClassesTag } from "./classes";
import { ExpGetLevel } from "./exp_system/exp_system";
export function FormatTime(seconds) {
    // 计算分钟和秒数
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    // 将分钟和秒数格式化为两位数
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(remainingSeconds).padStart(2, "0");
    // 返回格式化后的 "MM:SS" 字符串
    return `${formattedMinutes}:${formattedSeconds}`;
}
export function FormatTimeTick(ticks) {
    const minutes = Math.floor(ticks / 20 / 60);
    const seconds = Math.floor((ticks / 20) % 60);
    const remainingTicks = ticks % 20;
    return (`${minutes.toString().padStart(2, "0")}:` +
        `${seconds.toString().padStart(2, "0")}:` +
        `${remainingTicks.toString().padStart(2, "0")}`);
}
export function parseVector3(input) {
    if (!input)
        return undefined;
    const s = String(input).trim();
    // 允许以空格/逗号分隔：如 "10 64 10" 或 "10,64,10"
    const parts = s.split(/[,\s]+/).filter(Boolean);
    if (parts.length !== 3)
        return undefined;
    const nums = parts.map(Number);
    if (nums.some((n) => Number.isNaN(n)))
        return undefined;
    const [x, y, z] = nums;
    return { x, y, z };
}
export function vector3ToString(vec) {
    return `${vec.x} ${vec.y} ${vec.z}`;
}
export function ClassesName(player) {
    const PlayerAllTags = player.getTags();
    if (PlayerAllTags.includes("dev")) {
        return "§l§a开发状态§r§f";
    } //
    else if (PlayerAllTags.includes("res_asst")) {
        return "§l§b研究助理§r§f";
    } //
    else if (PlayerAllTags.includes("res_doctor")) {
        return "§l§b医生§r§f";
    } //
    else if (PlayerAllTags.includes("res")) {
        return "§l§b研究人员§r§f";
    } //
    else if (PlayerAllTags.includes("res_senior")) {
        return "§l§b高级研究员§r§f";
    } //
    else if (PlayerAllTags.includes("res_chief")) {
        return "§l§b研究主管§r§f";
    } //
    else if (PlayerAllTags.includes("res_cog_haz")) {
        return "§l§b认知危害专家§r§f";
    } //
    else if (PlayerAllTags.includes("guard")) {
        return "§l§1安全官员§r§f";
    } //
    else if (PlayerAllTags.includes("guard_med")) {
        return "§l§a医疗安全官员§r§f";
    } //
    else if (PlayerAllTags.includes("guard_tech")) {
        return "§l§1安全官员-技术工程师§r§f";
    } //
    else if (PlayerAllTags.includes("guard_rru")) {
        return "§l§bMTF-快速反应单位§r§f";
    } //
    else if (PlayerAllTags.includes("guard_chief")) {
        return "§l§1安全主管§r§f";
    } //
    else if (PlayerAllTags.includes("guard_hs")) {
        return "§l§1防护安全员§r§f";
    } //
    else if (PlayerAllTags.includes("guard_sd")) {
        return "§l§1站点主管§r§f";
    } //
    else if (PlayerAllTags.includes("ntf")) {
        return "§l§bMTF-九尾狐-士兵§r§f";
    } //
    else if (PlayerAllTags.includes("ntf_breaker")) {
        return "§l§bMTF-九尾狐-突破手§r§f";
    } //
    else if (PlayerAllTags.includes("ntf_sniper")) {
        return "§l§bMTF-九尾狐-狙击手§r§f";
    } //
    else if (PlayerAllTags.includes("ntf_med")) {
        return "§l§bMTF-九尾狐-医疗兵§r§f";
    } //
    else if (PlayerAllTags.includes("ntf_com")) {
        return "§l§bMTF-九尾狐-指挥官§r§f";
    } //
    else if (PlayerAllTags.includes("sne")) {
        return "§l§sMTF-非礼勿视-突击队员§r§f";
    } //
    else if (PlayerAllTags.includes("sne_breaker")) {
        return "§l§sMTF-非礼勿视-突破手§r§f";
    } //
    else if (PlayerAllTags.includes("sne_com")) {
        return "§l§sMTF-非礼勿视-指挥官§r§f";
    } //
    else if (PlayerAllTags.includes("rrh")) {
        return "§l§sMTF-红右手§r§f";
    } //
    else if (PlayerAllTags.includes("classd")) {
        return "§l§6D级人员§r§f";
    } //
    else if (PlayerAllTags.includes("classd_thief")) {
        return "§l§6D级人员-小偷§r§f";
    } //
    else if (PlayerAllTags.includes("classd_rioters")) {
        return "§l§6D级人员-暴动分子§r§f";
    } //
    else if (PlayerAllTags.includes("classd_madman")) {
        return "§l§vD级人员-疯子§r§f";
    } //
    else if (PlayerAllTags.includes("classd_engineer")) {
        return "§l§6D级人员-技工§r§f";
    } //
    else if (PlayerAllTags.includes("classd_fugitive")) {
        return "§l§6D级人员-潜逃者§r§f";
    } //
    else if (PlayerAllTags.includes("ci_agent")) {
        return "§l§2混沌分裂者-特工§r§f";
    } //
    else if (PlayerAllTags.includes("ci")) {
        return "§l§2混沌分裂者-士兵§r§f";
    } //
    else if (PlayerAllTags.includes("ci_breaker")) {
        return "§l§2混沌分裂者-突破手§r§f";
    } //
    else if (PlayerAllTags.includes("ci_sniper")) {
        return "§l§2混沌分裂者-狙击手§r§f";
    } //
    else if (PlayerAllTags.includes("ci_med")) {
        return "§l§2混沌分裂者-医疗兵§r§f";
    } //
    else if (PlayerAllTags.includes("ci_com")) {
        return "§l§2混沌分裂者-指挥官§r§f";
    } //
    else if (PlayerAllTags.includes("goc")) {
        return "§l§b全球超自然联盟-突击队员§r§f";
    } //
    else if (PlayerAllTags.includes("goc_des")) {
        return "§l§b全球超自然联盟-'毁灭者'§r§f";
    } //
    else if (PlayerAllTags.includes("goc_com")) {
        return "§l§b全球超自然联盟-指挥官§r§f";
    } //
    else if (PlayerAllTags.includes("scp")) {
        return "§l§c异常项目§r§f";
    } //
    else {
        return "§7Unknow§r§f";
    }
}
// 头顶显示阵营
export function ShowNameTagClasses() {
    var _a, _b, _c;
    for (const player of world.getAllPlayers()) {
        const PlayerID = player.name;
        //将玩家主手设定为变量并假设结果为number类型
        let ItemDetectNum = player === null || player === void 0 ? void 0 : player.selectedSlotIndex;
        //通过槽位变量去获取玩家主手物品ID
        const ItemDetecter = (_c = (_b = (_a = player === null || player === void 0 ? void 0 : player.getComponent("minecraft:inventory")) === null || _a === void 0 ? void 0 : _a.container) === null || _b === void 0 ? void 0 : _b.getItem(ItemDetectNum)) === null || _c === void 0 ? void 0 : _c.typeId;
        const ItemDetect = ItemDetecter;
        if (ItemDetect === "ei:id_card") {
            player.nameTag = `§e[Lv.${ExpGetLevel(player.name)}]\n§f${PlayerID}\n[${ClassesName(player)}]`;
        } //
        else {
            player.nameTag = `§e[Lv.${ExpGetLevel(player.name)}]\n§f${PlayerID}\n[§7Unknow§r§f]`;
        }
    }
}
export function PlaySoundForAllPlayer(SoundID) {
    const overworld = world.getDimension("overworld");
    // for (const player of world.getAllPlayers()) {
    //   player.runCommand(`playsound "${SoundID}" "${player.name}" ~ ~ ~ 100`);
    // }
    overworld.runCommand(`playsound "${SoundID}" @a 0 0 0 100000000`);
}
// 移除所有标签
export function RemoveAllTags(player) {
    for (const tag of AllClassesTag) {
        player.removeTag(tag);
    }
}
// 玩家死后生成尸体
export function SpawnCorpseOnPlayerDeath() {
    world.afterEvents.entityDie.subscribe((arg) => {
        var _a, _b, _c, _d;
        // world.sendMessage(`111`);
        let deadEntity = arg.deadEntity;
        // 更精确地检查 location 是一个有效对象
        if (!deadEntity || typeof deadEntity.location !== "object")
            return;
        const location = deadEntity.location;
        const playerTags = deadEntity.getTags();
        const dimension = (_a = arg.damageSource.damagingEntity) === null || _a === void 0 ? void 0 : _a.dimension;
        if (deadEntity.typeId === "minecraft:player") {
            const deadPlayer = deadEntity;
            if (!playerTags.includes("scp") || (playerTags.includes("scp035") && playerTags.includes("scp"))) {
                const cropse = dimension === null || dimension === void 0 ? void 0 : dimension.spawnEntity("ei:corpse", location);
                if (cropse) {
                    for (const tag of playerTags) {
                        switch (tag) {
                            case "allclassd":
                                cropse.setProperty("ei:cropse_int_property", 0);
                                break;
                            case "sci":
                                cropse.setProperty("ei:cropse_int_property", 1);
                                break;
                            case "allguard":
                                cropse.setProperty("ei:cropse_int_property", 2);
                                break;
                            case "allntf":
                            case "allsne":
                            case "allrrh":
                                cropse.setProperty("ei:cropse_int_property", 3);
                                break;
                            case "allci":
                                cropse.setProperty("ei:cropse_int_property", 4);
                                break;
                            case "scp035":
                                cropse.setProperty("ei:cropse_int_property", 5);
                                break;
                            default:
                                cropse.setProperty("ei:cropse_int_property", 6);
                                break;
                        }
                    }
                    cropse.nameTag = `${deadPlayer.name}的尸体\n[${ClassesName(deadPlayer)}]`;
                    for (let i = 0; i < 27; i++) {
                        const deadPlayerItem = (_b = deadPlayer.getComponent("minecraft:inventory")) === null || _b === void 0 ? void 0 : _b.container.getItem(i);
                        (_c = cropse.getComponent("minecraft:inventory")) === null || _c === void 0 ? void 0 : _c.container.setItem(i, deadPlayerItem);
                        (_d = deadPlayer.getComponent("minecraft:inventory")) === null || _d === void 0 ? void 0 : _d.container.setItem(i, new ItemStack("minecraft:air"));
                    }
                }
            }
        }
    });
}
// 玩家尸体清理
export function ClearAllCorpse() {
    const overworld = world.getDimension("overworld");
    overworld.runCommand(`kill @e[type=ei:corpse]`);
}
//# sourceMappingURL=misc.js.map