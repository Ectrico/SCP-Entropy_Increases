import {
  world,
  system,
  Dimension,
  EntityRaycastOptions,
  Vector3,
  EquipmentSlot,
  Entity,
  Player,
  BlockVolume,
  BlockPermutation,
  GameMode,
  PlatformType,
  EntityHitEntityAfterEvent,
  EntityQueryOptions,
  GameRule,
  EntityApplyDamageOptions,
  EntityDamageCause,
  InputPermissionCategory,
} from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";
import { SCP_049_2, SCP_049_2_Fast, SCP_049_2_Slow, spawn008_1, spawn049_2 } from "./classes";
import { SecondUnit } from "./main";
import { PlaySoundForAllPlayer, RemoveAllTags } from "./misc";

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

// 人类角色视线
export function HumanRaycast() {
  // world.sendMessage(`173函数执行`);
  const AllPlayers = world.getAllPlayers();
  for (const player of AllPlayers) {
    // 定义扇区的角度和数量
    const SectorAngle = 120; // 扇区的总角度
    const RaysCount = 30; // 定义射线投射数量
    const angleOffset = SectorAngle / RaysCount;

    // 射线方向向量
    const ViewDirection = player.getViewDirection();
    // 根据规则遍历射线
    for (let i = 0; i < RaysCount; i++) {
      const angle = -SectorAngle / 2 + i * angleOffset; // 计算当前射线的角度
      // 定义射线投射
      const RaycastOptions: EntityRaycastOptions = {
        maxDistance: 72,
        includeLiquidBlocks: false,
        excludeNames: [player.name],
        tags: ["scp"],
        // type: "ft:scp173",
        ignoreBlockCollision: false,
      };
      const PlayerHitEntity = overworld.getEntitiesFromRay(
        player.getHeadLocation(),
        RotationDirection(ViewDirection, angle),
        RaycastOptions
      );

      // 遍历射线击中的实体
      if (player.getGameMode() !== GameMode.Spectator) {
        if (!player.hasTag("scp")) {
          for (const RaycastHit of PlayerHitEntity) {
            // world.sendMessage(`符合规则`);
            if (RaycastHit.entity.hasTag("scp173")) {
              RaycastHit.entity.teleport(RaycastHit.entity.location);
            } //
            if (RaycastHit.entity.hasTag("scp966")) {
              const HeadItemID = player.getComponent("minecraft:equippable")?.getEquipment(EquipmentSlot.Head)?.typeId;
              // world.sendMessage(`${HeadItemID}`);
              if (HeadItemID === "bli:yeshiyi") {
                overworld.runCommand(`title "${player.name}" actionbar §l§c检测到SCP-966`);
              }
            }
            if (RaycastHit.entity.hasTag("scp096")) {
              Watch096 = true;
            } //
            else {
              Watch096 = false;
            }
          }
        }
      }
      // world.sendMessage(`射线生成 ${player.name} 检测到的`);
    }
  }
  // world.sendMessage(`Function!`);
}

// 视线夹角计算函数
function RotationDirection(direction: Vector3, angle: number) {
  const radians = (angle * Math.PI) / 180;
  const NewDirection = {
    x: direction.x * Math.cos(radians) - direction.z * Math.sin(radians),
    y: direction.y,
    z: direction.x * Math.sin(radians) + direction.z * Math.cos(radians),
  };
  return NewDirection;
}

// SCP966视线
export function SCP966Raycast() {
  const AllPlayers = world.getAllPlayers();
  for (const player of AllPlayers) {
    // 射线方向向量
    const ViewDirection = player.getViewDirection();
    // 根据规则遍历射线
    // 定义射线投射
    const RaycastOptions: EntityRaycastOptions = {
      maxDistance: 30,
      includeLiquidBlocks: false,
      excludeNames: [player.name],
      excludeTags: ["scp"],
      // tags: [],
      // type: "ft:scp173",
      ignoreBlockCollision: false,
    };
    const PlayerHitEntity = overworld.getEntitiesFromRay(player.getHeadLocation(), ViewDirection, RaycastOptions);
    // 遍历射线击中的实体
    if (player.hasTag("scp966")) {
      for (const RaycastHit of PlayerHitEntity) {
        const HitPlayer = RaycastHit.entity as Player;
        RaycastHit.entity.runCommand(`effect "${HitPlayer.name}" slowness 1 0`);
      }
    }
  }
  // world.sendMessage(`Function!`);
}

// SCP106穿门
export function SCP106Noclip() {
  // world.sendMessage(`函数运行`);
  const AllPlayers = world.getAllPlayers();
  for (const player of AllPlayers) {
    if (player.hasTag("scp106")) {
      const Begin = {
        x: player.location.x + 2,
        y: player.location.y + 2,
        z: player.location.z + 2,
      };
      const End = {
        x: player.location.x - 2,
        y: player.location.y - 2,
        z: player.location.z - 2,
      };
      // 计算 x 和 z 的中点位置
      const CenterX = Math.floor((Begin.x + End.x) / 2);
      const CenterZ = Math.floor((Begin.z + End.z) / 2);
      const DoorReset = new BlockVolume(Begin, End);
      const DoorResetRange = DoorReset.getBlockLocationIterator();
      for (const Doorlocation of DoorResetRange) {
        const Door = overworld.getBlock(Doorlocation);
        const DoorState = Door?.permutation.getState("bl:door_geomrtry_states");
        if (DoorState === 0 && DoorState !== undefined) {
          // 中心列
          if (Doorlocation.x === CenterX && Doorlocation.z === CenterZ) {
            try {
              Door?.setPermutation(Door.permutation.withState("bl:door_geomrtry_states", 0));
              Door?.setPermutation(Door.permutation.withState("bl:logical_sequence", "forward"));
              Door?.setPermutation(Door.permutation.withState("bl:collision", false));
            } catch {}
          }
          // 非中心列
          else {
            try {
              Door?.setPermutation(Door?.permutation.withState("bl:door_geomrtry_states", 0));
              Door?.setPermutation(Door?.permutation.withState("bl:logical_sequence", "forward"));
              Door?.setPermutation(Door?.permutation.withState("bl:collision", true));
            } catch {}
          }
        }
      }
    }
  }
}

// SCP457燃烧
export function SCP457Burning() {
  for (const player of world.getAllPlayers()) {
    if (player.hasTag("scp457")) {
      const location457 = player.location;
      const BrunStart = { x: location457.x - 2, y: location457.y - 2, z: location457.z - 2 };
      const BrunEnd = { x: location457.x + 2, y: location457.y + 2, z: location457.z + 2 };
      const BurnRange = new BlockVolume(BrunStart, BrunEnd).getBlockLocationIterator();
      for (const burnlocation of BurnRange) {
        for (const entity of overworld.getEntitiesAtBlockLocation(burnlocation)) {
          if (!entity.hasTag("scp")) {
            entity.setOnFire(3);
          }
        }
      }
    }
  }
}

// 特殊攻击事件监听
export let SpawnPointSCP049_2: Vector3[];
export let SCP049ChooseType: any;
export let SCP049_Infection: Player;
export let SCP008_Infection: Player;
//定义冷却循环体
let SCP049CoolDown: number;
world.afterEvents.entityHitEntity.subscribe((arg: EntityHitEntityAfterEvent) => {
  const DamagingEntity = arg.damagingEntity as Player;
  const HitEntity = arg.hitEntity as Player;
  const DamagingEntityLocation = DamagingEntity.location;
  // world.sendMessage(`调试0`);
  // SCP049
  if (DamagingEntity.hasTag("scp049")) {
    const SCP049 = DamagingEntity as any;
    const EntityQueryOptions: EntityQueryOptions = {
      excludeTags: ["scp"],
      location: DamagingEntityLocation,
      maxDistance: 2,
      minDistance: 0,
      name: HitEntity.name,
    };
    const Touched = overworld.getEntities(EntityQueryOptions);
    if (Touched !== undefined) {
      const Toucheds = Touched as Player[];
      SCP049_Infection = Toucheds[0];
      SpawnPointSCP049_2 = [HitEntity.location];
      const TargetOffHandItem = SCP049_Infection.getComponent("equippable")?.getEquipment(EquipmentSlot.Offhand);
      // world.sendMessage(`${TargetOffHandItem?.typeId}`);
      if (TargetOffHandItem?.typeId === "bli:scp714") {
        DamagingEntity.runCommand(`title "${DamagingEntity.name}" times 0 3 0`);
        DamagingEntity.runCommand(`title" ${DamagingEntity.name}" title §6SCP-714防御`);
      } //
      else {
        Toucheds[0].kill();
        const Menu049 = new ActionFormData()
          .title(`§cSCP-049“治愈”选择器`)
          .button(`§aSCP-049-2 标准型（血量：标准）`)
          .button(`§bSCP-049-2 快速型（血量：少）`)
          .button(`§6SCP-049-2 慢速型（血量：多）`);
        let CoolTime: number;
        function Infections() {
          CoolTime = 10 * SecondUnit;
          overworld.runCommand(`gamerule sendcommandfeedback false`);
          SCP049CoolDown = system.runInterval(() => {
            CoolTime--;
            overworld.runCommand(`title "${DamagingEntity.name}" times 0 5 0`);
            overworld.runCommand(
              `title "${DamagingEntity.name}" title §e"正在进行尸体手术...(${Math.floor(
                CoolTime / 20
              )}s)"\n§f正在将玩家§f转化为：§c${SCP049ChooseType.subtitle}`
            );
            DamagingEntity.teleport(DamagingEntityLocation);
          }, 1);
          system.runTimeout(() => {
            system.clearRun(SCP049CoolDown);
            // RemoveAllTags(Toucheds[0]); Failed to call function 'removeTag' at RemoveAllTags
            overworld.runCommand(`gamerule sendcommandfeedback true`);
            spawn049_2(SCP049_Infection);
          }, 10 * SecondUnit);
        }
        Menu049.show(SCP049).then((response) => {
          switch (response.selection) {
            case 0:
              SCP049ChooseType = SCP_049_2;
              Infections();
              break;
            case 1:
              SCP049ChooseType = SCP_049_2_Fast;
              Infections();
              break;
            case 2:
              SCP049ChooseType = SCP_049_2_Slow;
              Infections();
              break;
          }
        });
      }
    }
  }
  // SCP096
  if (DamagingEntity.hasTag("scp096")) {
    // const SCP096 = DamagingEntity as any;
    const EntityQueryOptions: EntityQueryOptions = {
      excludeTags: ["scp"],
      location: DamagingEntityLocation,
      maxDistance: 2,
      minDistance: 0,
      name: HitEntity.name,
    };
    const Touched = overworld.getEntities(EntityQueryOptions);
    // world.sendMessage(`调试1`);
    if (Touched !== undefined && Attack096 === true) {
      const Toucheds = Touched as Entity[];
      const Target = Toucheds[0];
      // const EntityApplyDamageOptions: EntityApplyDamageOptions = {
      //   cause: EntityDamageCause.entityAttack,
      //   damagingEntity: Target,
      // };
      // DamagingEntity.applyDamage(15, EntityApplyDamageOptions);
      // world.sendMessage(`调试2 ${Target.typeId}`);
      Target.kill();
      PlaySoundForAllPlayer("D5");
    }
  }
  // SCP008-1
  if (DamagingEntity.hasTag("scp008_1")) {
    const SCP008_1 = DamagingEntity as any;
    const EntityQueryOptions: EntityQueryOptions = {
      excludeTags: ["scp"],
      location: DamagingEntityLocation,
      maxDistance: 2,
      minDistance: 0,
      name: HitEntity.name,
    };
    const Touched = overworld.getEntities(EntityQueryOptions);
    if (Touched !== undefined) {
      const Toucheds = Touched as Player[];
      SCP008_Infection = Toucheds[0];
      spawn008_1(SCP008_Infection, SCP008_Infection.location);
    }
  }
});

// SCP096
let Watch096 = false;
let WatchOther = false;
let Trigger = true;

let Attack096: boolean = false;
let BreakDoorInterval: number;
let TriggerInterval: number;
export function SCP096ScreamAttack(player: Player) {
  let ScreamTime = 10;
  let AttackTime = 20;
  PlaySoundForAllPlayer("Tir");
  overworld.runCommand(
    `replaceitem entity "${player.name}" slot.armor.head 0 icon:scp_096_crying 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
  );
  function Scream() {
    if (ScreamTime > 0) {
      ScreamTime--;
      system.runTimeout(() => {
        Scream();
      }, 20);
    } //
    else {
      system.clearRun(TriggerInterval);
      Attack096 = true;
      Attack();
      overworld.runCommand(`gamerule sendcommandfeedback true`);
      BreakDoorInterval = system.runInterval(() => {
        if (player.hasTag("scp096")) {
          BreakDoor();
        }
      }, 1);
      PlaySoundForAllPlayer("Scr");
      overworld.runCommand(`effect "${player.name}" speed 20 6 true`);
      overworld.runCommand(
        `replaceitem entity "${player.name}" slot.armor.head 0 icon:scp_096_attacking 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
      );
    }
  }
  Scream();
  overworld.runCommand(`gamerule sendcommandfeedback false`);
  TriggerInterval = system.runInterval(() => {
    player.teleport(player.location);
  }, 0);

  function Attack() {
    if (AttackTime > 0) {
      AttackTime--;
      system.runTimeout(() => {
        Attack();
        if (AttackTime === 9) {
          PlaySoundForAllPlayer("Scr");
          // world.sendMessage(`调试`);
        } //
      }, 20);
    } //
    else {
      overworld.runCommand(
        `replaceitem entity "${player.name}" slot.armor.head 0 icon:scp_096_normal 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
      );
      system.clearRun(BreakDoorInterval);
      Attack096 = false;
      system.runTimeout(() => {
        WatchOther = false;
        Watch096 = false;
        Trigger = true;
      }, SecondUnit * 15);
    }
  }

  //

  function BreakDoor() {
    const Begin = { x: player.location.x - 1, y: player.location.y - 1, z: player.location.z - 1 };
    const End = { x: player.location.x + 1, y: player.location.y + 1, z: player.location.z + 1 };
    const GetDoorRange = new BlockVolume(Begin, End).getBlockLocationIterator();
    for (const GetLocation of GetDoorRange) {
      const GetBlock = overworld.getBlock(GetLocation);
      const GetBlockPermutation = GetBlock?.permutation.getState("bl:door_geomrtry_states");
      const AgreeDoor = [
        "bl:light_door",
        "bl:light_door_upper",
        "bl:light_door_2",
        "bl:light_door_2_upper",
        "bl:light_door_3",
        "bl:light_door_3_upper",
        "bl:light_door_3_break",
        "bl:light_door_3_break_upper",
        "bl:light_door_4",
        "bl:light_door_4_upper",
        "bl:bms_security_door",
        "bl:bms_security_door_upper",
        "bl:hcz_door",
        "bl:hcz_door_upper",
        "bl:bms_lab_door",
        "bl:bms_lab_door_upper",
        "bl:bms_lab_door_left",
        "bl:bms_lab_door_left_upper",
        "bl:bms_lab_door_right",
        "bl:bms_lab_door_right_upper",
      ];
      if (AgreeDoor.includes(GetBlock?.typeId as string)) {
        if (GetBlockPermutation === 0 && GetBlockPermutation !== undefined) {
          const GeoState = GetBlock?.permutation.withState("bl:door_geomrtry_states", 14) as BlockPermutation;
          GetBlock?.setPermutation(GeoState);
          const LSState = GetBlock?.permutation.withState("bl:logical_sequence", "reverse") as BlockPermutation;
          GetBlock?.setPermutation(LSState);
          PlaySoundForAllPlayer("DoorOpenFast");
        }
      }
    }
  }
}

// SCP096视线
export function SCP096Raycast() {
  const AllPlayers = world.getAllPlayers();
  for (const player of AllPlayers) {
    // 定义扇区的角度和数量
    const SectorAngle = 120; // 扇区的总角度
    const RaysCount = 15; // 定义射线投射数量
    const angleOffset = SectorAngle / RaysCount;

    // 射线方向向量
    const ViewDirection = player.getViewDirection();
    // 根据规则遍历射线
    for (let i = 0; i < RaysCount; i++) {
      const angle = -SectorAngle / 2 + i * angleOffset; // 计算当前射线的角度
      // 定义射线投射
      const RaycastOptions: EntityRaycastOptions = {
        maxDistance: 72,
        includeLiquidBlocks: false,
        excludeNames: [player.name],
        excludeTags: ["scp"],
        // type: "ft:scp173",
        ignoreBlockCollision: false,
      };
      const PlayerHitEntity = overworld.getEntitiesFromRay(
        player.getHeadLocation(),
        RotationDirection(ViewDirection, angle),
        RaycastOptions
      );

      // 遍历射线击中的实体
      if (player.hasTag("scp096")) {
        if (PlayerHitEntity.length > 0) {
          WatchOther = true;
          if (Watch096 === true && Trigger === true) {
            Trigger = false;
            SCP096ScreamAttack(player);
          }
        }
      }
      // world.sendMessage(`射线生成 ${player.name} 检测到的`);
    }
  }
  // world.sendMessage(`Function!`);
}
