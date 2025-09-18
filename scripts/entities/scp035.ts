import { world, system, EquipmentSlot, ItemStack, ItemLockMode, Player } from "@minecraft/server";
import { SCP_035 } from "../classes";
import { RemoveAllTags } from "../misc";

export function equipSCP035OnInteract() {
  world.afterEvents.playerInteractWithEntity.subscribe((arg) => {
    const player = arg.player;
    const dimension = player.dimension;
    const entity = arg.target;
    const itemStack = arg.itemStack;
    if (entity.typeId === "ei:scp035_entity" && !player.hasTag("scp")) {
      entity.kill();
      RemoveAllTags(player);
      player.addTag("scp");
      player.addTag("scp035");
      player.runCommand(`clear "${player.name}"`);
      player.runCommand(`effect "${player.name}" instant_health 1 255 true`);
      player.runCommand(`effect "${player.name}" resistance 5 255 true`);

      const scp035 = new ItemStack("ei:scp035", 1);
      scp035.lockMode = ItemLockMode.slot;
      scp035.keepOnDeath = true;
      const headSlot = player.getComponent("minecraft:equippable")?.getEquipmentSlot(EquipmentSlot.Head);
      headSlot?.setItem(scp035);

      player.onScreenDisplay.setTitle(SCP_035.title);
      player.onScreenDisplay.updateSubtitle(`${SCP_035.subtitle}\n${SCP_035.target_tip}`);

      for (let slot = SCP_035.inventory[0]; slot < SCP_035.inventory[1]; slot++) {
        dimension.runCommand(
          `replaceitem entity "${player.name}" slot.inventory ${slot} ei:disable 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
        );
      }
      for (let slot = SCP_035.hotbar[0]; slot < SCP_035.hotbar[1]; slot++) {
        dimension.runCommand(
          `replaceitem entity "${player.name}" slot.hotbar ${slot} ei:disable 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
        );
      }
      for (let i = 0; i < SCP_035.items.length; i++) {
        dimension.runCommand(
          `give "${player.name}" ${SCP_035.items[i][0]} ${SCP_035.items[i][1]} 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
        );
      }
      for (let i = 0; i < SCP_035.armor.length; i++) {
        dimension.runCommand(
          `replaceitem entity "${player.name}" ${SCP_035.armor[i][0]} 0 ${SCP_035.armor[i][1]} 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
        );
      }
    }
  });

  world.afterEvents.entityDie.subscribe((arg) => {
    const deadEntity = arg.deadEntity;
    const location = deadEntity.location;
    const dimension = deadEntity.dimension;
    if (deadEntity.hasTag("scp035")) {
      const scp035Entity = deadEntity as Player;
      dimension.spawnEntity("ei:scp035_entity" as any, { x: location.x, y: location.y + 1, z: location.z });
    }
  });
}
