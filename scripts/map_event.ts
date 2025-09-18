import {
  world,
  system,
  Dimension,
  Player,
  SystemBeforeEvents,
  Vector3,
  BlockPermutation,
  BlockVolume,
  BlockType,
} from "@minecraft/server";
import {
  BreachControl,
  Button,
  CPTeleport,
  EleBoxFuse,
  EleBoxWire,
  EmergencyExitDoorSetting,
  EscapeArea,
  FireDoor,
  GateA_Blast_Area,
  GateA_Blast_Position,
  HelicopterLandingZone,
  LeverSwitch,
  LibTeleport,
  LibTPTarget,
  Pocket_Dimension,
  RandomItemsPoint,
  SCP035SpawnPoint,
  SCP914Area,
  Terminal,
} from "./maps/ft_site_15";
import { AllClassesTag, CanEscapeClassesTag, CanEvacuateClassesTag, support_goc } from "./classes";
import { EscapeRewardDrops, RoundTime } from "./main";
import { ClassesName, FormatTime, FormatTimeTick, PlaySoundForAllPlayer } from "./misc";
import { ExpAddExp, ExpChangeMassage } from "./exp_system/exp_system";

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

// Lever重置
export function LeverReset() {
  // world.sendMessage("拉杆已重置");
  // Gate
  for (let i = 0; i < LeverSwitch.Gate.length; i++) {
    const location = LeverSwitch.Gate[i][0] as Vector3;
    const Lever = overworld.getBlock(location);
    const GeoState = LeverSwitch.Gate[i][1] as number;
    const LSState = LeverSwitch.Gate[i][2] as string;
    const Setblock = LeverSwitch.Gate[i][3] as string;
    const LeverID = Lever?.typeId;
    if (LeverID === "bl:scp008_switch") {
      const NewGeoState = Lever?.permutation.withState("ft:geometry", GeoState) as BlockPermutation;
      Lever?.setPermutation(NewGeoState);
    } //
    else {
      const NewGeoState = Lever?.permutation.withState("bl:door_geomrtry_states", GeoState) as BlockPermutation;
      Lever?.setPermutation(NewGeoState);
      const NewLSState = Lever?.permutation.withState("bl:logical_sequence", LSState) as BlockPermutation;
      Lever?.setPermutation(NewLSState);
    }
    overworld.runCommand(`setblock ${location.x} ${location.y - 3} ${location.z} ${Setblock}`);
  }
  // SCP
  for (let i = 0; i < LeverSwitch.SCP.length; i++) {
    const location = LeverSwitch.SCP[i][0] as Vector3;
    const Lever = overworld.getBlock(location);
    const GeoState = LeverSwitch.SCP[i][1] as number;
    const LSState = LeverSwitch.SCP[i][2] as string;
    const Setblock = LeverSwitch.Gate[i][3] as string;
    const NewGeoState = Lever?.permutation.withState("bl:door_geomrtry_states", GeoState) as BlockPermutation;
    Lever?.setPermutation(NewGeoState);
    const NewLSState = Lever?.permutation.withState("bl:logical_sequence", LSState) as BlockPermutation;
    Lever?.setPermutation(NewLSState);
    // world.sendMessage(`${GeoState} ${LSState}`);
    overworld.runCommand(`setblock ${location.x} ${location.y - 3} ${location.z} ${Setblock}`);
  }
}

// 突破收容控制
export function BreachActivat() {
  // Lever SCP
  for (let i = 0; i < LeverSwitch.SCP.length; i++) {
    const location = LeverSwitch.SCP[i][0] as Vector3;
    const Lever = overworld.getBlock(location);
    const GeoState = LeverSwitch.SCP[i][4] as number;
    const LSState = LeverSwitch.SCP[i][5] as string;
    const Setblock = LeverSwitch.SCP[i][6] as string;
    const NewGeoState = Lever?.permutation.withState("bl:door_geomrtry_states", GeoState) as BlockPermutation;
    Lever?.setPermutation(NewGeoState);
    const NewLSState = Lever?.permutation.withState("bl:logical_sequence", LSState) as BlockPermutation;
    Lever?.setPermutation(NewLSState);
    overworld.runCommand(`setblock ${location.x} ${location.y - 3} ${location.z} ${Setblock}`);
    // world.sendMessage(`${GeoState} ${LSState} ${Setblock}`);
  }
  // BreachControl
  for (let i = 0; i < BreachControl.SCP.length; i++) {
    const location = BreachControl.SCP[i];
    overworld.runCommand(`setblock ${location.x} ${location.y} ${location.z} bl:auto_on_off_block`);
  }
}

// EleBoxFuse重置
export function EleBoxFuseReset() {
  // 清除A门配电箱
  for (let i = 0; i < EleBoxFuse.GateA.length; i++) {
    const location = EleBoxFuse.GateA[i][1] as Vector3;
    overworld.runCommand(`setblock ${location.x} ${location.y} ${location.z} air`);
  }
  // 清除B门配电箱
  for (let i = 0; i < EleBoxFuse.GateB.length; i++) {
    const location = EleBoxFuse.GateB[i][1] as Vector3;
    overworld.runCommand(`setblock ${location.x} ${location.y} ${location.z} air`);
  }
  // 清除Containment Room配电箱
  for (let i = 0; i < EleBoxFuse.ContainmentRoom.length; i++) {
    const location = EleBoxFuse.ContainmentRoom[i][1] as Vector3;
    overworld.runCommand(`setblock ${location.x} ${location.y} ${location.z} air`);
  }
  // 清除所有放置方块
  for (let i = 0; i < EleBoxFuse.Setblock.length; i++) {
    const location = EleBoxFuse.Setblock[i];
    overworld.runCommand(`setblock ${location.x} ${location.y} ${location.z} air`);
  }
  system.runTimeout(() => {
    // 随机下一个设定
    const RandomNumA = Math.floor(Math.random() * EleBoxFuse.GateA.length);
    const RandomNumB = Math.floor(Math.random() * EleBoxFuse.GateB.length);
    const RandomEleBoxA = EleBoxFuse.GateA[RandomNumA];
    // world.sendMessage(`A${RandomNumA}`);
    const RandomEleBoxB = EleBoxFuse.GateB[RandomNumB];
    // world.sendMessage(`B${RandomNumB}`);
    const EleBoxLocationA = RandomEleBoxA[1] as Vector3;
    const EleBoxLocationB = RandomEleBoxB[1] as Vector3;
    overworld.runCommand(
      `setblock ${EleBoxLocationA.x} ${EleBoxLocationA.y} ${EleBoxLocationA.z} bl:elecbox_fuse_${RandomEleBoxA[0]} ["minecraft:cardinal_direction"="${RandomEleBoxA[2]}"]`
    );
    overworld.runCommand(
      `setblock ${EleBoxLocationB.x} ${EleBoxLocationB.y} ${EleBoxLocationB.z} bl:elecbox_fuse_${RandomEleBoxB[0]} ["minecraft:cardinal_direction"="${RandomEleBoxB[2]}"]`
    );
    //
    for (let i = 0; i < EleBoxFuse.ContainmentRoom.length; i++) {
      const EleBoxContainmentRoomLocation = EleBoxFuse.ContainmentRoom[i][1] as Vector3;
      overworld.runCommand(
        `setblock ${EleBoxContainmentRoomLocation.x} ${EleBoxContainmentRoomLocation.y} ${EleBoxContainmentRoomLocation.z} bl:elecbox_fuse_${EleBoxFuse.ContainmentRoom[i][0]} ["minecraft:cardinal_direction"="${EleBoxFuse.ContainmentRoom[i][2]}"]`
      );
    }
  }, 60);
}

// EleBoxWire重置
export function EleBoxWireReset() {
  // 清除所有紧急出口线缆箱
  for (let i = 0; i < EleBoxWire.EmergencyExit.length; i++) {
    const location = EleBoxWire.EmergencyExit[i][0] as Vector3;
    overworld.runCommand(`setblock ${location.x} ${location.y} ${location.z} air`);
  }
  // 清除所有紧急出口随机线缆箱
  for (let i = 0; i < EleBoxWire.EmergencyExitRandom.length; i++) {
    const location = EleBoxWire.EmergencyExitRandom[i][0] as Vector3;
    overworld.runCommand(`setblock ${location.x} ${location.y} ${location.z} air`);
  }
  // 清除所有放置方块
  for (let i = 0; i < EleBoxWire.Setblock.length; i++) {
    const location = EleBoxWire.Setblock[i];
    overworld.runCommand(`setblock ${location.x} ${location.y} ${location.z} air`);
  }
  // 放置新的线缆箱
  system.runTimeout(() => {
    // 固定紧急出口线缆箱
    for (let i = 0; i < EleBoxWire.EmergencyExit.length; i++) {
      const location = EleBoxWire.EmergencyExit[i][0] as Vector3;
      overworld.runCommand(
        `setblock ${location.x} ${location.y} ${location.z} bl:elecbox_wire ["minecraft:cardinal_direction"="${EleBoxWire.EmergencyExit[i][1]}"]`
      );
    }
    // 紧急出口随机线缆箱
    const RandomNumEmergencyExit = Math.floor(Math.random() * EleBoxWire.EmergencyExitRandom.length);
    const RandomEleBox = EleBoxWire.EmergencyExitRandom[RandomNumEmergencyExit];
    const EleBoxLocation = RandomEleBox[0] as Vector3;
    overworld.runCommand(
      `setblock ${EleBoxLocation.x} ${EleBoxLocation.y} ${EleBoxLocation.z} bl:elecbox_wire ["minecraft:cardinal_direction"="${RandomEleBox[1]}"]`
    );
    //
  }, 60);
  //
  //
  //
  // 紧急出口大门重置
  const EEDoorRange = new BlockVolume(
    EleBoxWire.EmergencyExitDoor[0],
    EleBoxWire.EmergencyExitDoor[1]
  ).getBlockLocationIterator();
  for (const EEDlocation of EEDoorRange) {
    const EEDoor = overworld.getBlock(EEDlocation);
    EEDoor?.setPermutation(EEDoor.permutation.withState("bl:door_geomrtry_states", 0));
    EEDoor?.setPermutation(EEDoor.permutation.withState("bl:logical_sequence", "forward"));
  }
}

// 紧急出口大门状态设置
export function EmergencyExitDoorSet(type: "enable" | "disable"): void {
  const location = EmergencyExitDoorSetting;
  switch (type) {
    case "enable":
      overworld.runCommand(`setblock ${location.x} ${location.y} ${location.z} bedrock`);
      break;
    case "disable":
      overworld.runCommand(`setblock ${location.x} ${location.y} ${location.z} air`);
      break;
  }
}

// 紧急出口打开时刷新GOC
export function EEOpenSpawnGOC() {
  const DetectBlock = overworld.getBlock(EleBoxWire.EmergencyExitDoor[2]);
  const DetectState = DetectBlock?.permutation.getState("bl:door_geomrtry_states");
  if (DetectState === 1) {
    support_goc();
  }
}

// 逃离区域
export function EscapeFacility() {
  const EscapeRange = new BlockVolume(EscapeArea[0], EscapeArea[1]);
  const EscapeRangeBlock = EscapeRange.getBlockLocationIterator();
  for (const EscapeLocation of EscapeRangeBlock) {
    const entities = overworld.getEntitiesAtBlockLocation(EscapeLocation);
    for (const entity of entities) {
      if (entity.typeId === "minecraft:player") {
        // world.sendMessage(`发现玩家`);
        const player = entity as Player;
        const playerID = player.name;
        const playerTags = player.getTags();
        for (const playertag of playerTags) {
          if (CanEscapeClassesTag.includes(playertag)) {
            overworld.runCommand(`gamemode spectator "${playerID}"`);
            player.addTag("spectator");
            overworld.runCommand(`title "${playerID}" times 0 200 0`);
            overworld.runCommand(`title "${playerID}" title §e你成功逃出了设施！`);
            if (RoundTime !== undefined) {
              const TimeRemaining = FormatTime(1860 - RoundTime);
              overworld.runCommand(
                `title "${playerID}" subtitle §e你在 §l§b${TimeRemaining} §r§e内逃离了设施，干的漂亮！`
              );
            }
            world.sendMessage(`§e玩家 §l§b${playerID} §r§e作为 §l${ClassesName(player)} §r§e成功逃出了设施！`);
            for (let i = 0; i < AllClassesTag.length; i++) {
              player.removeTag(`${AllClassesTag[i]}`);
            }
            world.sendMessage(`§d触发专属奖励掉落！`);
            EscapeRewardDrops(player.name);
            //
            ExpAddExp(player.name, 27);
            ExpChangeMassage(player, 27, "成功逃离设施");
            //
            system.runTimeout(() => {
              overworld.runCommand(`title "${playerID}" times 0 200 0`);
              overworld.runCommand(`title "${playerID}" title Spectator`);
              overworld.runCommand(`title "${playerID}" subtitle 你现在是旁观者，请等待复活...`);
            }, 140);
          }
        }
      }
    }
  }
}

// 停机坪撤离
export function HelipadEvacuate() {
  const OmegaWarheadTerminal = overworld.getBlock(Terminal.OmegaWarhead);
  const OmegaState = OmegaWarheadTerminal?.permutation.getState("ft:warhead_state");
  // world.sendMessage(`检测中 ${OmegaState}`);
  if (OmegaState !== "idle" && OmegaState !== "ready" && OmegaState !== "paused" && OmegaState !== "detonated") {
    // world.sendMessage(`检测中222`);
    const EvacuateRange = new BlockVolume(HelicopterLandingZone[0], HelicopterLandingZone[1]);
    const EvacuateRangeBlock = EvacuateRange.getBlockLocationIterator();

    for (const EvacuateLocation of EvacuateRangeBlock) {
      const entities = overworld.getEntitiesAtBlockLocation(EvacuateLocation);
      for (const entity of entities) {
        if (entity.typeId === "minecraft:player") {
          // world.sendMessage(`发现玩家`);
          const player = entity as Player;
          const playerID = player.name;
          const playerTags = player.getTags();
          for (const playertag of playerTags) {
            if (CanEvacuateClassesTag.includes(playertag)) {
              overworld.runCommand(`gamemode spectator "${playerID}"`);
              player.addTag("spectator");
              player.sendMessage(`§e你成功撤离了设施！`);
              player.sendMessage(`§e你在Omega的核爆中幸免于难，干的漂亮！`);
              world.sendMessage(`§e玩家 §l§b${playerID} §r§e作为 §l${ClassesName(player)} §r§e成功撤离设施！`);
              for (let i = 0; i < AllClassesTag.length; i++) {
                player.removeTag(`${AllClassesTag[i]}`);
              }
              world.sendMessage(`§d触发专属奖励掉落！`);
              EscapeRewardDrops(player.name);
              //
              ExpAddExp(player.name, 50);
              ExpChangeMassage(player, 50, "成功逃离设施");
              //
              system.runTimeout(() => {
                overworld.runCommand(`title "${playerID}" times 0 200 0`);
                overworld.runCommand(`title "${playerID}" title Spectator`);
                overworld.runCommand(`title "${playerID}" subtitle 你现在是旁观者，请等待复活...`);
              }, 140);
            }
          }
        }
      }
    }
  }
}

// SCP-106口袋空间传送
export function PocketDimensionTeleport() {
  for (let i = 0; i < Pocket_Dimension.TelePoint.length; i++) {
    const ExitPoint = Pocket_Dimension.Exit[Math.floor(Math.random() * Pocket_Dimension.Exit.length)];
    const RandomNum = Math.random();
    if (RandomNum <= 0.4) {
      overworld.runCommand(
        `tp @e[x=${Pocket_Dimension.TelePoint[i].x},y=${Pocket_Dimension.TelePoint[i].y},z=${Pocket_Dimension.TelePoint[i].z},dx=+0,dy=+1,dz=+0] ${ExitPoint.x} ${ExitPoint.y} ${ExitPoint.z}`
      );
    }
    //
    else if (RandomNum > 0.4 && RandomNum < 0.7) {
      overworld.runCommand(
        `tp @e[x=${Pocket_Dimension.TelePoint[i].x},y=${Pocket_Dimension.TelePoint[i].y},z=${Pocket_Dimension.TelePoint[i].z},dx=+0,dy=+1,dz=+0] ${Pocket_Dimension.Pocket.x} ${Pocket_Dimension.Pocket.y} ${Pocket_Dimension.Pocket.z}`
      );
    }
    //
    else {
      overworld.runCommand(
        `execute as @a[tag=scp106] at @s run damage @e[x=${Pocket_Dimension.TelePoint[i].x},y=${Pocket_Dimension.TelePoint[i].y},z=${Pocket_Dimension.TelePoint[i].z},dx=+0,dy=+1,dz=+0] 100 entity_attack entity @s`
      );
    }
  }
}

// CheckPoint传送
export function CheckPointTeleport() {
  for (let i = 0; i < CPTeleport.length; i++) {
    const TeleLocation1 = CPTeleport[i][0];
    const TeleLocation2 = CPTeleport[i][1];
    const TeleEntitys1 = overworld.getEntitiesAtBlockLocation(TeleLocation1);
    const TeleEntitys2 = overworld.getEntitiesAtBlockLocation(TeleLocation2);
    const Destination = {
      x: CPTeleport[i][2].x + 0.5,
      y: CPTeleport[i][2].y,
      z: CPTeleport[i][2].z + 0.5,
    };
    for (const TeleEntity1 of TeleEntitys1) {
      if (TeleEntity1.hasTag("scp")) {
        TeleEntity1.teleport(Destination);
      }
    }
    for (const TeleEntity2 of TeleEntitys2) {
      if (TeleEntity2.hasTag("scp")) {
        TeleEntity2.teleport(Destination);
      }
    }
  }
}

// 图书馆传送
export function LibraryTeleport() {
  for (const TPoint of LibTeleport) {
    const Point = LibTPTarget[Math.floor(Math.random() * LibTPTarget.length)];
    overworld.runCommand(
      `tp @a[x=${TPoint.x},y=${TPoint.y},z=${TPoint.z},dx=0,dy=1,dz=0] ${Point.x} ${Point.y} ${Point.z}`
    );
  }
}

// FireDoor重置
export function FireDoorReset() {
  // world.sendMessage(`防火门重置`);
  // SCP-457
  const FireDoors = new BlockVolume(FireDoor.SCP457[0], FireDoor.SCP457[1]);
  for (const DoorLocation of FireDoors.getBlockLocationIterator()) {
    const Door = overworld.getBlock(DoorLocation);
    const NewGeo = Door?.permutation.withState("bl:door_geomrtry_states", 0) as BlockPermutation;
    Door?.setPermutation(NewGeo);
    const NewLS = Door?.permutation.withState("bl:logical_sequence", "forward") as BlockPermutation;
    Door?.setPermutation(NewLS);
    // world.sendMessage(`${Door?.typeId}`);
  }
}

// Alpha核弹重置
export function AlphaWarheadReset() {
  const AlphaWarheadTerminal = overworld.getBlock(Terminal.AlphaWarhead);
  AlphaWarheadTerminal?.setPermutation(AlphaWarheadTerminal?.permutation.withState("ft:warhead_state", "idle"));
}

// Alpha核弹关闭
export function AlphaWarheadDeactivated() {
  const AlphaWarheadTerminal = overworld.getBlock(Terminal.AlphaWarhead);
  AlphaWarheadTerminal?.setPermutation(AlphaWarheadTerminal?.permutation.withState("ft:warhead_state", "detonated"));
}

// Omega核弹重置
export function OmegaWarheadReset() {
  const OmegaWarheadTerminal = overworld.getBlock(Terminal.OmegaWarhead);
  OmegaWarheadTerminal?.setPermutation(
    OmegaWarheadTerminal?.permutation.withState("ft:warhead_state", "idle") as BlockPermutation
  );
}

// Omega核弹关闭
export function OmegaWarheadDeactivated() {
  const OmegaWarheadTerminal = overworld.getBlock(Terminal.OmegaWarhead);
  OmegaWarheadTerminal?.setPermutation(OmegaWarheadTerminal?.permutation.withState("ft:warhead_state", "detonated"));
}

// Omega核弹远程控制重置
export function OmegaWarheadRemoteReset() {
  overworld.runCommand(
    `setblock ${LeverSwitch.OmegaWarheadRemote.x} ${LeverSwitch.OmegaWarheadRemote.y} ${LeverSwitch.OmegaWarheadRemote.z} bl:lever_on_off ["minecraft:cardinal_direction"="north"]`
  );
}

export let GateABlast = 1;
export function GateA_Blast(player: Player) {
  const GateA_Blast_Volume = new BlockVolume(GateA_Blast_Area[0], GateA_Blast_Area[1]);
  for (const position of GateA_Blast_Volume.getBlockLocationIterator()) {
    const BlastPlayer = player.dimension.getEntitiesAtBlockLocation(position);
    if (BlastPlayer.includes(player)) {
      let BlastTime = 600;
      function BlastTimeCut() {
        if (BlastTime > 0) {
          BlastTime--;
          overworld.runCommand(`title @a times 0 3 0`);
          overworld.runCommand(`titleraw @a title {"rawtext":[{"text":" "}]}`);
          overworld.runCommand(
            `title @a subtitle §cGate-A爆破系统已启动\n${FormatTimeTick(BlastTime)}\n\n\n\n\n\n\n\n\n\n\n`
          );
          system.runTimeout(() => {
            BlastTimeCut();
          }, 1);
          if (BlastTime % 40 === 0) {
            PlaySoundForAllPlayer("AL5");
          }
        } //
        else {
          for (const BlockLocation of GateA_Blast_Position) {
            for (let i = 0; i <= 5; i++) {
              overworld.runCommand(
                `particle minecraft:knockback_roar_particle ${BlockLocation.x} ${BlockLocation.y} ${BlockLocation.z}`
              );
              overworld.runCommand(
                `particle minecraft:large_explosion ${BlockLocation.x} ${BlockLocation.y} ${BlockLocation.z}`
              );
            }
            PlaySoundForAllPlayer("NUKE2");
            const DoorBlock = overworld.getBlock(BlockLocation);
            const NewState = DoorBlock?.permutation.withState("bl:door_geomrtry_states", 14) as BlockPermutation;
            DoorBlock?.setPermutation(NewState);
          }
        }
      }
      if (GateABlast === 1) {
        GateABlast = 0;
        BlastTimeCut();
        PlaySoundForAllPlayer("AL3");
        PlaySoundForAllPlayer("EIJNRP");
        world.sendMessage("§d[BGM] §bJoel Nielsen - Residue Processing");
        world.sendMessage("§e[ANNOUNCE] §cGate-A Blast system activated. 30s remaning.");

        // 按钮锁定
        for (const Buttons of Button) {
          const Position = Buttons[0] as Vector3;
          const Button = overworld.getBlock(Position);
          overworld.runCommand(
            `setblock ${Position.x} ${Position.y} ${Position.z} bl:on_off_error ["minecraft:cardinal_direction"="${Buttons[1]}"]`
          );
        }
      }
      break;
    }
  }
}

export function GateA_Reset() {
  GateABlast = 1;
  for (const BlockLocation of GateA_Blast_Position) {
    for (let i = 0; i <= 5; i++) {
      const DoorBlock = overworld.getBlock(BlockLocation);
      const NewState = DoorBlock?.permutation.withState("bl:door_geomrtry_states", 0) as BlockPermutation;
      DoorBlock?.setPermutation(NewState);
    }
  }

  // 按钮重置
  for (const Buttons of Button) {
    const Position = Buttons[0] as Vector3;
    const Button = overworld.getBlock(Position);
    overworld.runCommand(
      `setblock ${Position.x} ${Position.y} ${Position.z} bl:on_off_card5_w_check ["minecraft:cardinal_direction"="${Buttons[1]}"]`
    );
  }
}

// SCP-914清理
export function SCP914Clear() {
  const SCP914IntakeVolume = new BlockVolume(SCP914Area.intake[0], SCP914Area.intake[1]);
  const SCP914OutputVolume = new BlockVolume(SCP914Area.output[0], SCP914Area.output[1]);
  for (const location of SCP914IntakeVolume.getBlockLocationIterator()) {
    overworld.setBlockType(location, "minecraft:air");
  }
  for (const location of SCP914OutputVolume.getBlockLocationIterator()) {
    overworld.setBlockType(location, "minecraft:air");
  }
}

// SCP-035随机生成
export function SCP035Spawn() {
  const SpawnPoint = SCP035SpawnPoint[Math.floor(Math.random() * SCP035SpawnPoint.length)];
  overworld.spawnEntity("ei:scp035_entity" as any, { x: SpawnPoint.x + 0.5, y: SpawnPoint.y, z: SpawnPoint.z + 0.5 });
}

export function SCP035Clear() {
  overworld.runCommand(`kill @e[type=ei:scp035_entity]`);
}
