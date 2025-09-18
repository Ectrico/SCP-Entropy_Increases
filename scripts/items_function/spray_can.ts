import {
  Dimension,
  EntityApplyDamageOptions,
  EntityDamageCause,
  EntityRaycastOptions,
  ItemComponentUseEvent,
  Player,
  system,
  Vector3,
  VectorXZ,
  world,
} from "@minecraft/server";

// 注册自定义组件
export function sprayCanComponentRegistry() {
  system.beforeEvents.startup.subscribe((arg) => {
    arg.itemComponentRegistry.registerCustomComponent("ei:spray_can", SprayOnUse);
  });
}

// 玩家喷雾使用状态
export const SprayPlayerState = new Map<string, number>();

// 喷雾触发函数
const SprayOnUse = {
  onUse: (arg: ItemComponentUseEvent) => {
    const player = arg.source;
    const playerId = player.name;
    const dimension = player.dimension;
    const item = arg.itemStack;
    const itemId = item?.typeId as string;
    const selectSlotIndex = player.selectedSlotIndex as number;
    const sprayId = itemId.replace("ei:spray_", "");

    const oldId = SprayPlayerState.get(playerId);
    if (oldId !== undefined) {
      try {
        system.clearRun(oldId);
      } catch {}
      SprayPlayerState.delete(playerId);
    }

    SprayPlayerState.set(
      playerId,
      system.runInterval(() => {
        spray_shot(sprayId);
      }, 2)
    );

    //"fire_extinguisher" | "lavender" | "poison"
    function spray_shot(type: string) {
      const location = player.location;
      const PlayerViewDirection = player.getViewDirection();
      dimension.playSound("spray_Hiss", location);
      spawnBulletTrail(player.getHeadLocation(), PlayerViewDirection, 4, 0.2, dimension);
      // 定义实体射线参数
      const RaycastOptions: EntityRaycastOptions = {
        maxDistance: 4,
        includeLiquidBlocks: false,
        excludeNames: [player.name],
        excludeTypes: ["minecraft:item"],
        ignoreBlockCollision: false,
      };
      // 定义实体伤害
      const EntityApplyDamageOptions: EntityApplyDamageOptions = {
        cause: EntityDamageCause.selfDestruct,
        damagingEntity: player,
      };
      const entityRaycastHitArray = dimension.getEntitiesFromRay(
        player.getHeadLocation(),
        PlayerViewDirection,
        RaycastOptions
      );
      for (const entityRaycastHit of entityRaycastHitArray) {
        const ViewDirection = entityRaycastHit.entity.getViewDirection();
        const DirectionX = -ViewDirection.x;
        const DirectionZ = -ViewDirection.z;
        const VectorXZ: VectorXZ = {
          x: -DirectionX * 0,
          z: -DirectionZ * 0,
        };
        switch (type) {
          case "fire_extinguisher":
            if (entityRaycastHit.entity.hasTag("scp457")) {
              entityRaycastHit.entity.applyDamage(2, EntityApplyDamageOptions);
              entityRaycastHit.entity.applyKnockback(VectorXZ, 0);
            } else {
              entityRaycastHit.entity.addEffect("slowness", 2, { amplifier: 2 });
              entityRaycastHit.entity.applyKnockback(VectorXZ, 0);
            }
            break;
          case "lavender":
            if (entityRaycastHit.entity.hasTag("scp049")) {
              entityRaycastHit.entity.addEffect("slowness", 100, { amplifier: 3 });
              entityRaycastHit.entity.addEffect("weakness", 100, { amplifier: 3 });
            } //
            break;
          case "poison":
            // entityRaycastHit.entity.applyDamage(1, EntityApplyDamageOptions);
            if (!entityRaycastHit.entity.hasTag("scp173") || !entityRaycastHit.entity.hasTag("scp939"))
              entityRaycastHit.entity.addEffect("fatal_poison", 200, { amplifier: 1 });
        }
      }
    }
  },
};

// 监听事件停止全自动循环
world.afterEvents.itemStopUse.subscribe((arg) => {
  const player = arg.source;
  const item = arg.itemStack;
  if (SprayPlayerState.get(player.name) !== undefined) {
    system.clearRun(SprayPlayerState.get(player.name) as number);
  }
});

world.afterEvents.entityDie.subscribe((arg) => {
  const dead = arg.deadEntity as Player;
  if (dead.typeId === "minecraft:player") {
    const playerName = dead.name;
    if (SprayPlayerState.has(playerName)) {
      system.clearRun(SprayPlayerState.get(playerName)!);
      SprayPlayerState.delete(playerName);
    }
  }
});

world.afterEvents.playerLeave.subscribe((arg) => {
  const playerName = arg.playerName;
  if (SprayPlayerState.has(playerName)) {
    system.clearRun(SprayPlayerState.get(playerName)!);
    SprayPlayerState.delete(playerName);
  }
});

// 步进射线轨迹生成粒子
export function spawnBulletTrail(
  origin: Vector3,
  direction: Vector3,
  range: number,
  step = 0.5, // 更稀疏的步进
  dimension: Dimension
) {
  const steps = Math.floor(range / step);
  const startOffset = 1.5; // 起点前移
  try {
    for (let i = 0; i < steps; i += 5) {
      const offset = startOffset + i * step;

      const x = origin.x + direction.x * offset;
      const y = origin.y + direction.y * offset;
      const z = origin.z + direction.z * offset;
      const particleId =
        i === 0 ? "minecraft:elephant_tooth_paste_vapor_particle" : "minecraft:elephant_tooth_paste_vapor_particle";

      const block = dimension.getBlock({ x: Math.floor(x), y: Math.floor(y), z: Math.floor(z) });
      if (block && !block.isAir) {
        // 方块遮挡，停止生成
        break;
      }
      dimension.spawnParticle(particleId, { x, y, z });
    }
  } catch {}
}
