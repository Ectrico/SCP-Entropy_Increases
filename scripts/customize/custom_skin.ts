import { Dimension, EntityInventoryComponent, Player, system, world } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";
import { GetSkinState, SkinStateString } from "./player_skin_data";
import { AK103_SkinList, HK_MP7_SkinList, M4A1_S_SkinList, M4A1_SkinList, SkinList } from "./weapon_skin_data";

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

// 主菜单
let CustomizeMenu!: ActionFormData;
world.afterEvents.worldLoad.subscribe(() => {
  CustomizeMenu = new ActionFormData();
  CustomizeMenu.title(`§d自定义个性化菜单`).button(`§b枪械皮肤`);
});

// 枪械皮肤
let GunSkinMenu!: ActionFormData;
world.afterEvents.worldLoad.subscribe(() => {
  GunSkinMenu = new ActionFormData();
  GunSkinMenu.title(`§d[枪械皮肤]自定义个性化菜单`)
    .button(`§fHK MP7`, "textures/icons/weapons/hkmp7.png")
    .button(`§fM4A1-S`, "textures/icons/weapons/m4a1s.png")
    .button(`§fM4A1`, "textures/icons/weapons/m4a1.png")
    .button(`§fAK-103`, "textures/icons/weapons/ak103.png");
});

// 自定义菜单
export function ShowCustomizeMenu(player: Player) {
  // HKMP7皮肤菜单
  const HKMP7SkinMenu = new ActionFormData();
  HKMP7SkinMenu.title(`§d[HK-MP7枪械皮肤]自定义个性化菜单`);
  for (const ThisSkin of HK_MP7_SkinList) {
    try {
      HKMP7SkinMenu.button(
        `${GetSkinState(player, ThisSkin.id)}${ThisSkin.title}${ThisSkin.level}\n§f许可: ${
          ThisSkin.permission
        }\t§f定制所属: ${ThisSkin.ascription}`,
        `${ThisSkin.icon_path}`
      );
    } catch {}
  }
  // M4A1-S皮肤菜单
  const M4A1_SSkinMenu = new ActionFormData();
  M4A1_SSkinMenu.title(`§d[M4A1-S枪械皮肤]自定义个性化菜单`);
  for (const ThisSkin of M4A1_S_SkinList) {
    try {
      M4A1_SSkinMenu.button(
        `${GetSkinState(player, ThisSkin.id)}${ThisSkin.title}${ThisSkin.level}\n§f许可: ${
          ThisSkin.permission
        }\t§f定制所属: ${ThisSkin.ascription}`,
        `${ThisSkin.icon_path}`
      );
    } catch {}
  }
  // M4A1皮肤菜单
  const M4A1SkinMenu = new ActionFormData();
  M4A1SkinMenu.title(`§d[M4A1枪械皮肤]自定义个性化菜单`);
  for (const ThisSkin of M4A1_SkinList) {
    try {
      M4A1SkinMenu.button(
        `${GetSkinState(player, ThisSkin.id)}${ThisSkin.title}${ThisSkin.level}\n§f许可: ${
          ThisSkin.permission
        }\t§f定制所属: ${ThisSkin.ascription}`,
        `${ThisSkin.icon_path}`
      );
    } catch {}
  }
  // AK103皮肤菜单
  const AK103SkinMenu = new ActionFormData();
  AK103SkinMenu.title(`§d[AK103枪械皮肤]自定义个性化菜单`);
  for (const ThisSkin of AK103_SkinList) {
    try {
      AK103SkinMenu.button(
        `${GetSkinState(player, ThisSkin.id)}${ThisSkin.title}${ThisSkin.level}\n§f许可: ${
          ThisSkin.permission
        }\t§f定制所属: ${ThisSkin.ascription}`,
        `${ThisSkin.icon_path}`
      );
    } catch {}
  }

  // 主菜单
  const playerAny = player as any;
  CustomizeMenu.show(playerAny).then((response) => {
    switch (response.selection) {
      case 0:
        GunSkinMenu.show(playerAny).then((gun_response) => {
          switch (gun_response.selection) {
            // HK-MP7
            case 0:
              HKMP7SkinMenu.show(playerAny).then((hkmp7skin_response) => {
                const SelectedSkin = HK_MP7_SkinList[hkmp7skin_response.selection as number];
                if (GetSkinState(player, SelectedSkin.id) === SkinStateString.true) {
                  ReplaceSkinItem(player, SelectedSkin.id, "bli:hkmp7");
                } //
                else {
                  player.sendMessage(`§6你暂未拥有此物品！`);
                }
              });
              break;
            // M4A1-S
            case 1:
              M4A1_SSkinMenu.show(playerAny).then((m4a1sskin_response) => {
                const SelectedSkin = M4A1_S_SkinList[m4a1sskin_response.selection as number];
                if (GetSkinState(player, SelectedSkin.id) === SkinStateString.true) {
                  ReplaceSkinItem(player, SelectedSkin.id, "bli:m4a1s");
                } //
                else {
                  player.sendMessage(`§6你暂未拥有此物品！`);
                }
              });
              break;
            // M4A1
            case 2:
              M4A1SkinMenu.show(playerAny).then((m4a1skin_response) => {
                const SelectedSkin = M4A1_SkinList[m4a1skin_response.selection as number];
                if (GetSkinState(player, SelectedSkin.id) === SkinStateString.true) {
                  ReplaceSkinItem(player, SelectedSkin.id, "bli:m4a1");
                } //
                else {
                  player.sendMessage(`§6你暂未拥有此物品！`);
                }
              });
              break;
            // AK-103
            case 3:
              AK103SkinMenu.show(playerAny).then((ak103skin_response) => {
                const SelectedSkin = AK103_SkinList[ak103skin_response.selection as number];
                if (GetSkinState(player, SelectedSkin.id) === SkinStateString.true) {
                  ReplaceSkinItem(player, SelectedSkin.id, "bli:ak103");
                } //
                else {
                  player.sendMessage(`§6你暂未拥有此物品！`);
                }
              });
              break;
          }
        });
        break;
    }
  });
}

function ReplaceSkinItem(player: Player, skinID: string, replaceItem: string) {
  for (let i = 0; i < 9; i++) {
    const Item = player.getComponent("inventory")?.container?.getItem(i)?.typeId;
    if (Item === replaceItem) {
      overworld.runCommand(
        `replaceitem entity "${player.name}" slot.hotbar ${i} bli:${skinID} 1 0 {"minecraft:keep_on_death":{}}`
      );
      break;
    }
  }
}
