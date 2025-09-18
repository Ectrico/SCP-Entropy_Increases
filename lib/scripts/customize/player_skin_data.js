import { world } from "@minecraft/server";
import { SkinList } from "./weapon_skin_data";
// 储存格式，键: skin|name 值: 状态
const SkinMap = new Map();
export const SkinStateString = {
    true: "§a[已拥有]§f",
    false: "§6[未拥有]§f",
};
// 设置皮肤状态
export function SetSkinState(player, SkinID, State) {
    const Skin_Name = `${SkinID}|${player}`;
    SkinMap.set(Skin_Name, State);
    SaveSkinInfo();
}
// 获取皮肤状态
export function GetSkinState(player, SkinID) {
    const Skin_Name = `${SkinID}|${player.name}`;
    const SkinState = SkinMap.get(Skin_Name);
    if (SkinMap) {
        return SkinState;
    } //
    else {
        return SkinStateString.false;
    }
}
// 将Map内参数保存入地图动态属性
function SaveSkinInfo() {
    for (const [skin_info, state] of SkinMap.entries()) {
        world.setDynamicProperty(skin_info, state);
    }
}
// 遍历所有玩家与所有皮肤读取动态属性
export function LoadSkinInfo() {
    for (const player of world.getAllPlayers()) {
        for (const SkinID in SkinList) {
            const Skin_Name = `${SkinList[SkinID]}|${player.name}`;
            const getstate = world.getDynamicProperty(Skin_Name);
            let state;
            if (getstate) {
                state = getstate;
            } //
            else {
                state = SkinStateString.false;
            }
            SkinMap.set(Skin_Name, state);
            // world.sendMessage(`${Skin_Name} ${state}`);
        }
    }
    world.sendMessage(`§a从地图读取玩家自定义皮肤信息完成！`);
}
// 默认玩家皮肤数据加载
export function DefaultPlayerSkinDataLoad() {
    SetSkinState("Ectrico", "hkmp7_miku16th", SkinStateString.true);
    SetSkinState("Ectrico", "m4a1s_printstream", SkinStateString.true);
    SetSkinState("Ectrico", "m4a1s_clear_water", SkinStateString.true);
    SetSkinState("Ectrico", "m4a1s_forest_camo", SkinStateString.true);
    SetSkinState("Ectrico", "m4a1s_urban_digital", SkinStateString.true);
    SetSkinState("erersuan142", "ak103_gf_spas12", SkinStateString.true);
    SetSkinState("QAQ6454", "m4a1_gf_lunsia", SkinStateString.true);
    SetSkinState("DongRe2010", "m4a1s_reverse_vertin", SkinStateString.true);
    SetSkinState("RadEvening60474", "m4a1s_genshin_furina", SkinStateString.true);
}
//# sourceMappingURL=player_skin_data.js.map