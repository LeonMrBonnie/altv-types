declare module "alt-client" {
  export const enum Locale {
    Arabic = "ar",
    Belarusian = "by",
    Czech = "cz",
    German = "de",
    English = "en",
    Spanish = "es",
    Farsi = "fa",
    French = "fr",
    Hebrew = "he",
    Hungarian = "hu",
    Indonesian = "id",
    Hindi = "in_hd", // Wrong tag (hi_in)
    Malayalam = "in_ml", // Wrong tag (ml_in)
    Telugu = "in_tl", // Wrong tag (te_in)
    Tamil = "in_tm", // Wrong tag (ta_in)
    Italian = "it",
    Lithuanian = "lt",
    Latvian = "lv",
    NorwegianBokmal = "nb_no",
    NorwegianNynorsk = "nn_no",
    Polish = "pl",
    Portugese = "pt",
    BrazilianPortuguese = "pt_br",
    Romanian = "ro",
    Serbian = "rs", // Wrong tag (sr)
    Russian = "ru",
    Slovak = "sk",
    Thai = "th",
    Turkish = "tr",
    Ukrainian = "ua", // Wrong tag (uk)
    ChineseSimplified = "zh_cn",
    ChineseTraditional = "zh_tw"
  }

  export const enum Permission {
    None,
    ScreenCapture,
    WebRTC,
    All
  }

  export const enum PermissionState {
    Allowed,
    Denied,
    Unspecified,
    Failed
  }

  export const enum StatName {
    Stamina = "stamina",
    Strength = "strength",
    LungCapacity = "lung_capacity",
    Wheelie = "wheelie_ability",
    Flying = "flying_ability",
    Shooting = "shooting_ability",
    Stealth = "stealth_ability"
  }

  export const enum FileEncoding {
    Utf8 = "utf-8",
    Utf16 = "utf-16",
    Binary = "binary"
  }

  export const enum BaseObjectType {
    Player,
    Vehicle,
    Blip,
    WebView,
    VoiceChannel,
    Colshape,
    Checkpoint
  }

  export const enum CheckpointType {
    CylinderSingleArrow,
    CylinderDoubleArrow,
    CylinderTripleArrow,
    CylinderCycleArrow,
    CylinderCheckerboard,
    CylinderWrench,
    CylinderSingleArrow2,
    CylinderDoubleArrow2,
    CylinderTripleArrow2,
    CylinderCycleArrow2,
    CylinderCheckerboard2,
    CylinderWrench2,
    RingSingleArrow,
    RingDoubleArrow,
    RingTripleArrow,
    RingCycleArrow,
    RingCheckerboard,
    SingleArrow,
    DoubleArrow,
    TripleArrow,
    CycleArrow,
    Checkerboard,
    CylinderSingleArrow3,
    CylinderDoubleArrow3,
    CylinderTripleArrow3,
    CylinderCycleArrow3,
    CylinderCheckerboard3,
    CylinderSingleArrow4,
    CylinderDoubleArrow4,
    CylinderTripleArrow4,
    CylinderCycleArrow4,
    CylinderCheckerboard4,
    CylinderSingleArrow5,
    CylinderDoubleArrow5,
    CylinderTripleArrow5,
    CylinderCycleArrow5,
    CylinderCheckerboard5,
    RingPlaneUp,
    RingPlaneLeft,
    RingPlaneRight,
    RingPlaneDown,
    Empty,
    Ring,
    Empty2,
    Cylinder,
    Cylinder1,
    Cylinder2,
    Cylinder3,
    Cylinder4,
    Cylinder5,
    Empty3,
    Empty4,
    Empty5,
    Empty6,
    RingDollar,
    RingWolf,
    RingQuestionMark,
    RingPlane,
    RingChopper,
    RingBoat,
    RingCar,
    RingBike,
    RingBicycle,
    RingTruck,
    RingParachute,
    RingJetpack,
    RingWhirl
  }

  export interface IClientEvent {
    anyResourceError: (resourceName: string) => void;
    anyResourceStart: (resourceName: string) => void;
    anyResourceStop: (resourceName: string) => void;
    /** @beta */
    changedVehicleSeat: (vehicle: Vehicle, oldSeat: number, seat: number) => void;
    connectionComplete: () => void;
    consoleCommand: (name: string, ...args: string[]) => void;
    disconnect: () => void;
    /** @beta */
    enteredVehicle: (vehicle: Vehicle, seat: number) => void;
    gameEntityCreate: (entity: Entity) => void;
    gameEntityDestroy: (entity: Entity) => void;
    keydown: (key: number) => void;
    keyup: (key: number) => void;
    /** @beta */
    leftVehicle: (vehicle: Vehicle, seat: number) => void;
    removeEntity: (object: BaseObject) => void;
    resourceStart: (errored: boolean) => void;
    resourceStop: () => void;
    syncedMetaChange: (entity: Entity, key: string, value: any, oldValue: any) => void;
    streamSyncedMetaChange: (entity: Entity, key: string, value: any, oldValue: any) => void;
    globalMetaChange: (key: string, value: any, oldValue: any) => void;
    globalSyncedMetaChange: (key: string, value: any, oldValue: any) => void;
    /**
     * No particular usage for now, stick to {@link everyTick} instead.
     *
     * @beta
     */
    render: () => void;
  }

  export interface IDiscordOAuth2Token {
    readonly token: string;
    readonly expires: number;
    readonly scopes: string;
  }

  export interface IDiscordUser {
    readonly id: string;
    readonly name: string;
    readonly discriminator: string;
    readonly avatar: string;
  }

  /**
   * Vehicle handling, which affects how vehicle responds and reacts to the inputs of a driver.
   * This handling applies to particular vehicle instance, as opposed to the {@link HandlingData}.
   *
   * @remarks Changes will be reflected only on a particular instance of the vehicle. On creation, model handling will be used as a base and changed properties will be added on top of it.
   *
   * @beta
   */
  export interface IVehicleHandling {
    readonly handlingNameHash: number;
    acceleration: number;
    antiRollBarBiasFront: number;
    antiRollBarBiasRear: number;
    antiRollBarForce: number;
    brakeBiasFront: number;
    brakeBiasRear: number;
    brakeForce: number;
    camberStiffnesss: number;
    centreOfMassOffset: Vector3;
    clutchChangeRateScaleDownShift: number;
    clutchChangeRateScaleUpShift: number;
    collisionDamageMult: number;
    damageFlags: number;
    deformationDamageMult: number;
    downforceModifier: number;
    driveBiasFront: number;
    driveInertia: number;
    driveMaxFlatVel: number;
    engineDamageMult: number;
    handBrakeForce: number;
    handlingFlags: number;
    inertiaMultiplier: Vector3;
    initialDragCoeff: number;
    initialDriveForce: number;
    initialDriveGears: number;
    initialDriveMaxFlatVel: number;
    lowSpeedTractionLossMult: number;
    mass: number;
    modelFlags: number;
    monetaryValue: number;
    oilVolume: number;
    percentSubmerged: number;
    percentSubmergedRatio: number;
    petrolTankVolume: number;
    rollCentreHeightFront: number;
    rollCentreHeightRear: number;
    seatOffsetDistX: number;
    seatOffsetDistY: number;
    seatOffsetDistZ: number;
    steeringLock: number;
    steeringLockRatio: number;
    suspensionBiasFront: number;
    suspensionBiasRear: number;
    suspensionCompDamp: number;
    suspensionForce: number;
    suspensionLowerLimit: number;
    suspensionRaise: number;
    suspensionReboundDamp: number;
    suspensionUpperLimit: number;
    tractionBiasFront: number;
    tractionBiasRear: number;
    tractionCurveLateral: number;
    tractionCurveLateralRatio: number;
    tractionCurveMax: number;
    tractionCurveMaxRatio: number;
    tractionCurveMin: number;
    tractionCurveMinRatio: number;
    tractionLossMult: number;
    tractionSpringDeltaMax: number;
    tractionSpringDeltaMaxRatio: number;
    unkFloat1: number;
    unkFloat2: number;
    unkFloat4: number;
    unkFloat5: number;
    weaponDamageMult: number;

    /**
     * Indicates whether vehicle handling was modified.
     *
     * @returns `true` if vehicle handling was modified; otherwise, `false`.
     */
    isModified(): boolean;

    /**
     * Resets the vehicle handling back to a model handling.
     */
    reset(): void;
  }

  export interface IVehicleNeon {
    left: boolean;
    right: boolean;
    front: boolean;
    back: boolean;
  }

  export interface IVector2 {
    readonly x: number;

    readonly y: number;
  }

  export interface IVector3 {
    readonly x: number;

    readonly y: number;

    readonly z: number;
  }

  /**
   * Resource name of the executing entity.
   *
   * @beta
   */
  export const resourceName: string;

  /**
   * Represents the current client version.
   *
   * @remarks It's a slighty modified semantic versioning specification, which can be matched using this regular expression pattern `^(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))$`.
   *
   * @beta
   */
  export const version: string;

  /**
   * Represents the current client SDK version.
   *
   * @remarks It's the version of the SDK the current runtime was compiled with.
   *
   * @beta
   */
  export const sdkVersion: number;

  /**
   * Represents the current client branch.
   *
   * @beta
   */
  export const branch: string;

  export class Vector3 {
    public readonly x: number;

    public readonly y: number;

    public readonly z: number;

    constructor(x: number, y: number, z: number);

    constructor(arr: number[]);

    constructor(obj: IVector3);

    /** @beta */
    public get length(): number;

    /** @beta */
    public toArray(): [number, number, number];

    /** @beta */
    public add(x: number, y: number, z: number): Vector3;

    /** @beta */
    public add(value: number): Vector3;

    /** @beta */
    public add(array: [number, number, number]): Vector3;

    /** @beta */
    public add(vector: IVector3): Vector3;

    /** @beta */
    public sub(x: number, y: number, z: number): Vector3;

    /** @beta */
    public sub(value: number): Vector3;

    /** @beta */
    public sub(array: [number, number, number]): Vector3;

    /** @beta */
    public sub(vector: IVector3): Vector3;

    /** @beta */
    public div(x: number, y: number, z: number): Vector3;

    /** @beta */
    public div(value: number): Vector3;

    /** @beta */
    public div(array: [number, number, number]): Vector3;

    /** @beta */
    public div(vector: IVector3): Vector3;

    /** @beta */
    public mul(x: number, y: number, z: number): Vector3;

    /** @beta */
    public mul(value: number): Vector3;

    /** @beta */
    public mul(array: [number, number, number]): Vector3;

    /** @beta */
    public mul(vector: IVector3): Vector3;

    /** @beta */
    public negative(): Vector3;

    /** @beta */
    public normalize(): Vector3;

    /** @beta */
    public distanceTo(vector: IVector3): Vector3;

    /** @beta */
    public angleTo(vector: IVector3): Vector3;

    /** @beta */
    public angleToDegrees(vector: IVector3): Vector3;

    /** @beta */
    public toRadians(): Vector3;

    /** @beta */
    public toDegrees(): Vector3;

    /** @beta */
    public isInRange(vector: IVector3, range: number): boolean;
  }

  export class RGBA {
    /** r component of RGBA */
    public r: number;
    /** g component of RGBA */
    public g: number;
    /** b component of RGBA */
    public b: number;
    /** a component of RGBA */
    public a: number;

    /**
     * @param r An r component.
     * @param g An g component.
     * @param b An b component.
     * @param a An a component.
     */
    constructor(r: number, g: number, b: number, a: number);
  }

  export class BaseObject {
    /**
     * Type of the object.
     */
    public readonly type: BaseObjectType;

    /**
     * Object usability.
     * @returns False if object is no longer usable.
     */
    public readonly valid: boolean;

    /**
     * Removes the object from the world.
     */
    public destroy(): void;

    /**
     * Removes the specified key.
     *
     * @param key The key of the value to remove.
     */
    public deleteMeta(key: string): void;

    /**
     * Gets a value using the specified key.
     *
     * @param key The key of the value to get.
     * @returns Dynamic value associated with the specified key.
     */
    public getMeta(key: string): any;

    /**
     * Determines whether contains the specified key.
     *
     * @param key The key of the value to locate.
     * @returns True when element associated with the specified key is stored.
     */
    public hasMeta(key: string): boolean;

    /**
     * Stores the given value with the specified key.
     *
     * @remarks The given value will be shared locally.
     * @param key The key of the value to store.
     */
    public setMeta(key: string, value: any): void;
  }

  export class WorldObject extends BaseObject {
    /**
     * Object position
     */
    public pos: Vector3;
  }

  /**
  * @beta
  */
  export class Checkpoint extends WorldObject {
    public checkpointType: CheckpointType;
    public nextPos: Vector3;
    public radius: number;
    public height: number;
    public color: RGBA;

    constructor(type: CheckpointType, pos: Vector3, nextPos: Vector3, radius: number, height: number, rgbcolor: RGBA);

    public isEntityIn(entity: Entity): boolean;
    public isPointIn(pos: Vector3): boolean;
  }

  export class Entity extends WorldObject {
    /** @beta */
    public static readonly all: Array<Entity>;

    /** Entity unique id */
    public readonly id: number;

    /** Internal game id that can be used in native calls */
    public readonly scriptID: number;

    /** Hash of entity model */
    public readonly model: number;

    /**
     * Object position
     */
    public readonly pos: Vector3;

    /** Entity rotation in radians */
    public readonly rot: Vector3;

    /** @beta */
    public readonly visible: boolean;

    /**
     * Retrieves the entity from the pool.
     *
     * @param id The id of the entity.
     * @returns Entity if it was found, otherwise null.
     * @example
     * ```
     * let entity = alt.Entity.getByID(1);
     * alt.log(entity.model); // Prints the model of the entity with the ID 1
     * ```
     */
    public static getByID(id: number): Entity | null;

    /**
     * Retrieves the entity from the pool.
     *
     * @param scriptID The script id of the entity.
     * @returns Entity if it was found, otherwise null.
     */
    public static getByScriptID(scriptID: number): Entity | null;

    /**
     * Gets a value using the specified key.
     *
     * @param key The key of the value to get.
     * @returns Dynamic value associated with the specified key.
     */
    public getSyncedMeta(key: string): any;

    /**
     * Determines whether contains the specified key.
     *
     * @param key The key of the value to locate.
     * @returns Return is dependent on whether element associated with the specified key is stored.
     */
    public hasSyncedMeta(key: string): boolean;

    /**
     * Gets a value using the specified key.
     *
     * @param key The key of the value to get.
     * @returns Dynamic value associated with the specified key.
     */
    public getStreamSyncedMeta(key: string): any;

    /**
     * Determines whether contains the specified key.
     *
     * @param key The key of the value to locate.
     * @returns Return is dependent on whether element associated with the specified key is stored.
     */
    public hasStreamSyncedMeta(key: string): boolean;
  }

  export class Player extends Entity {
    /** Array with all players */
    public static readonly all: Array<Player>;

    /** Local player */
    public static readonly local: Player;

    /** Player talking state */
    public readonly isTalking: boolean;

    /** Player talking volume */
    public readonly micLevel: number;

    /** Player name */
    public readonly name: string;

    /** Player's vehicle, null if player is not in any vehicle */
    public readonly vehicle: Vehicle | null;

    /**
     * Current weapon components
     *
     * @beta
     */
    public readonly currentWeaponComponents: Array<number>;

    /**
     * Tint index for currently equipeed weapon
     *
     * @beta
     */
    public readonly currentWeaponTintIndex: number;

    /**
     * Currently equipped weapon
     *
     * @beta
     */
    public readonly currentWeapon: number;

    /**
     * Is the player currently jumping
     *
     * @beta
     */
    public readonly isJumping: boolean;

    /**
     * Is the player currently in ragdoll
     *
     * @beta
     */
    public readonly isInRagdoll: boolean;

    /**
     * Is the player currently aiming
     *
     * @beta
     */
    public readonly isAiming: boolean;

    /**
     * Is the player currently shooting with a weapon
     *
     * @beta
     */
    public readonly isShooting: boolean;

    /**
     * Is the player currently reloading their weapon
     *
     * @beta
     */
    public readonly isReloading: boolean;

    /**
     * Current armour
     *
     * @beta
     */
    public readonly armour: number;

    /**
     * Max available armour value
     *
     * @beta
     */
    public readonly maxArmour: number;

    /**
     * Current player movement speed
     *
     * @beta
     */
    public readonly moveSpeed: number;

    /**
     * Position the player is currently aiming at
     *
     * @beta
     */
    public readonly aimPos: Vector3;

    /**
     * Rotation of the head of the player
     *
     * @beta
     */
    public readonly headRot: Vector3;

    /**
     * Curent seat the player is sitting in
     *
     * @beta
     */
    public readonly seat: number;

    /**
     * The entity the player is aiming at
     *
     * @beta
     */
    public readonly entityAimingAt: Entity | null;

    /**
     * The current aim offset of the player
     *
     * @beta
     */
    public readonly entityAimOffset: Vector3 | null;

    /**
     * Is the flashlight of the player activated
     *
     * @beta
     */
    public readonly flashlightActive: boolean;

    /**
     * Current health of the player
     *
     * @beta
     */
    public readonly health: number;

    /**
     * Current max health of the player
     *
     * @beta
     */
    public readonly maxHealth: number;

    /**
     * Retrieves the player from the pool.
     *
     * @param id The id of the player.
     * @returns Entity if it was found, otherwise null.
     */
    public static getByID(id: number): Player | null;

    /**
     * Retrieves the player from the pool.
     *
     * @param scriptID The script id of the player.
     * @returns Entity if it was found, otherwise null.
     */
    public static getByScriptID(scriptID: number): Player | null;
  }

  export class Vehicle extends Entity {
    /** Array with all vehicles */
    public static readonly all: Array<Vehicle>;

    /** Vehicle gear */
    public gear: number;

    /**
     * Vehicle handling, which affects how vehicle responds and reacts to the inputs of a driver.
     *
     * @beta
     */
    public handling: IVehicleHandling;

    /**
      * Vehicle RPM
      *
      * @returns Normalised value on a scale of [0, 1].
      */
    public readonly rpm: number;

    /**
      * Vehicle wheels speed
      */
    public readonly speed: number;

    /**
     * Vehicle speed vector
     */
    public readonly speedVector: Vector3;

    /**
      * Vehicle wheels count
      */
    public readonly wheelsCount: number;

    /**
     * Is the vehicle destroyed.
     *
     * @beta
     */
    public readonly destroyed: boolean;

    /**
     * Available modkits for the vehicle.
     *
     * @beta
     */
    public readonly modKitsCount: number;

    /**
     * Current vehicle modkit.
     *
     * @beta
     */
    public readonly modKit: number;

    /**
     * Vehicle primary color.
     *
     * @beta
     */
    public readonly primaryColor: number;

    /**
     * Custom (RGB) vehicle primary color.
     *
     * @beta
     */
    public readonly customPrimaryColor: RGBA;

    /**
     * Vehicle secondary color.
     *
     * @beta
     */
    public readonly secondaryColor: number;

    /**
     * Custom (RGB) vehicle secondary color.
     *
     * @beta
     */
    public readonly customSecondaryColor: RGBA;

    /**
     * Vehicle pearl color.
     *
     * @beta
     */
    public readonly pearlColor: number;

    /**
     * Vehicle wheel color.
     *
     * @beta
     */
    public readonly wheelColor: number;

    /**
     * Vehicle interior color.
     *
     * @beta
     */
    public readonly interiorColor: number;

    /**
     * Vehicle dashboard color.
     *
     * @beta
     */
    public readonly dashboardColor: number;

    /**
     * Vehicle tire smoke color.
     *
     * @beta
     */
    public readonly tireSmokeColor: number;

    /**
     * Vehicle wheel type.
     *
     * @beta
     */
    public readonly wheelType: number;

    /**
     * Vehicle front wheels variation.
     *
     * @beta
     */
    public readonly frontWheels: number;

    /**
     * Vehicle rear wheels variation.
     *
     * @beta
     */
    public readonly rearWheels: number;

    /**
     * Are custom tires active.
     *
     * @beta
     */
    public readonly customTires: boolean;

    /**
     * Vehicle darkness.
     *
     * @beta
     */
    public readonly darkness: number;

    /**
     * Vehicle number plate type index.
     *
     * @beta
     */
    public readonly numberPlateIndex: number;

    /**
     * Vehicle number plate text.
     *
     * @beta
     */
    public readonly numberPlateText: string;

    /**
     * Vehicle window tint.
     *
     * @beta
     */
    public readonly windowTint: number;

    /**
     * Vehicle dirt level.
     *
     * @beta
     */
    public readonly dirtLevel: number;

    /**
     * Vehicle neon.
     *
     * @beta
     */
    public readonly neon: IVehicleNeon;

    /**
     * Vehicle neon color.
     *
     * @beta
     */
    public readonly neonColor: RGBA;

    /**
     * Vehicle livery.
     *
     * @beta
     */
    public readonly livery: number;

    /**
     * Vehicle roof livery.
     *
     * @beta
     */
    public readonly roofLivery: number;

    /**
     * Vehicle engine state.
     *
     * @beta
     */
    public readonly engineOn: boolean;

    /**
     * Vehicle handbrake state.
     *
     * @beta
     */
    public readonly handbrakeActive: boolean;

    /**
     * Vehicle headlight color.
     *
     * @beta
     */
    public readonly headlightColor: number;

    /**
     * Vehicle active radio station.
     *
     * @beta
     */
    public readonly activeRadioStation: number;

    /**
     * Vehicle siren state.
     *
     * @beta
     */
    public readonly sirenActive: boolean;

    /**
     * Vehicle lock state.
     *
     * @beta
     */
    public readonly lockState: number;

    /**
     * Vehicle daylight state.
     *
     * @beta
     */
    public readonly daylightOn: boolean;

    /**
     * Vehicle nightlight state.
     *
     * @beta
     */
    public readonly nightlightOn: boolean;

    /**
     * Vehicle roof state.
     *
     * @beta
     */
    public readonly roofState: number;

    /**
     * Vehicle flamethrower state.
     *
     * @beta
     */
    public readonly flamethrowerActive: boolean;

    /**
     * Vehicle lights multiplier.
     *
     * @beta
     */
    public readonly lightsMultiplier: number;

    /**
     * The vehicle's engine health.
     *
     * @beta
     */
    public readonly engineHealth: number;

    /**
     * The vehicle's petrol tank health.
     *
     * @beta
     */
    public readonly petrolTankHealth: number;

    /**
     * Vehicle repairs count.
     *
     * @beta
     */
    public readonly repairsCount: number;

    /**
     * The vehicle's body health.
     *
     * @beta
     */
    public readonly bodyHealth: number;

    /**
     * The vehicle's additional body health.
     *
     * @beta
     */
    public readonly bodyAdditionalHealth: number;

    /**
     * Does the vehicle currently have the bulletproof windows?
     *
     * @beta
     */
    public readonly hasArmoredWindows: boolean;

    /**
     * Determines whether the vehicle's engine should be turned on/off automatically.
     *
     * @beta
     */
    public readonly manualEngineControl: boolean;

    /**
     * Retrieves the vehicle from the pool.
     *
     * @param id The id of the vehicle.
     * @returns Entity if it was found, otherwise null.
     * @remarks For an example see {@link Entity.getByID}.
     */
    public static getByID(id: number): Vehicle | null;

    /**
     * Retrieves the vehicle from the pool.
     *
     * @param scriptID The script id of the vehicle.
     * @returns Entity if it was found, otherwise null.
     * @remarks For an example see {@link Entity.getByScriptID}.
     */
    public static getByScriptID(scriptID: number): Vehicle | null;
  }

  export class WebView extends BaseObject {
    /** View visibility state */
    public isVisible: boolean;
    /** View URL */
    public url: string;

    /**
     * Creates a fullscreen WebView.
     *
     * @param url URL.
     * @param isOverlay true to render as overlay, false to render on game's GUI stage
     * @remarks 
     * If isOverlay is true, the view will not be visible in external recordings. 
     * This can display normal websites as well as local clientside html files.
     * @example
     * ```
     * let view = new alt.WebView("http://resource/client/index.html"); // Creates a webview with a local file
     * view.focus(); // Focuses the webview so it can be interacted with
     * ```
     */
    constructor(url: string, isOverlay?: boolean);

    /**
     * Creates a WebView rendered on game object.
     *
     * @param url URL.
     * @param propHash Hash of object to render on.
     * @param targetTexture Name of object's texture to replace.
     */
    constructor(url: string, propHash: number, targetTexture: string);

    /**
     * Emits specified event across particular WebView.
     *
     * @param eventName Name of the event.
     * @param args Rest parameters for emit to send.
     */
    public emit(eventName: string, ...args: any[]): void;

    /**
     * Focuses the view so it can be interacted with.
     */
    public focus(): void;

    /**
     * Unsubscribes from WebView event handler with specified listener.
     *
     * @remarks Listener should be of the same reference as when event was subscribed.
     * @param eventName Name of the event.
     * @param listener Listener that should be removed.
     */
    public off(eventName: string, listener: (...args: any[]) => void): void;

    /**
     * Subscribes to WebView event handler with specified listener.
     *
     * @param eventName Name of the event.
     * @param listener Listener that should be added.
     */
    public on(eventName: string, listener: (...args: any[]) => void): void;

    /**
     * Subscribes to WebView event handler with specified listener.
     *
     * @param eventName Name of the event.
     * @param listener Listener that should be added.
     */
    public on(eventName: "load", listener: () => void): void;

    /**
     * Unfocuses the view so it can no longer be interacted with.
     */
    public unfocus(): void;
  }

  export class Blip extends WorldObject {
    /** @beta */
    public static routeColor: RGBA;

    public alpha: number;

    public asMissionCreator: boolean;

    public bright: boolean;

    public category: number;

    public color: number;

    public crewIndicatorVisible: boolean;

    /** @beta */
    public display: number;

    public flashes: boolean;

    public flashesAlternate: boolean;

    public flashInterval: number;

    public flashTimer: number;

    public friendIndicatorVisible: boolean;

    /**
     * @deprecated This property was removed on the other branches than release.
     */
    public friendly: boolean;

    public gxtName: string;

    public heading: number;

    public headingIndicatorVisible: boolean;

    public highDetail: boolean;

    public name: string;

    public number: number;

    public outlineIndicatorVisible: boolean;

    public priority: number;

    public pulse: boolean;

    public route: boolean;

    /**
     * @deprecated This property was changed from instance member to static.
     */
    public routeColor: number;

    /**
     * @deprecated This property was renamed to {@link size} on the other branches than release.
     */
    public scale: number;

    /**
     * @remarks This property will expect and return RGBA object on the other branches than release.
     */
    public secondaryColor: number | RGBA;

    public shortRange: boolean;

    public showCone: boolean;

    public shrinked: boolean;

    /** @beta */
    public size: number;

    public sprite: number;

    public tickVisible: boolean;

    /**
     * Fades the blip to the specified opacity.
     *
     * @param opacity Opacity value.
     * @param duration Fade duration in milliseconds.
     * @remarks Opacity allows values from 0 to 255.
     * @example
     * ```
     * let blip = new alt.PointBlip(0, 0, 0);
     * blip.fade(0, 1000); // Fades the blip to be invisible after one second
     * ```
     */
    public fade(opacity: number, duration: number): void;
  }

  export class AreaBlip extends Blip {
    /**
     * Creates an area blip.
     * @param x X position of the blip center.
     * @param y Y position of the blip center.
     * @param z Z position of the blip center.
     * @param width Area width.
     * @param height Area height.
     * @remarks Width and height use the same units as X, Y, Z coordinates.
     */
    constructor(x: number, y: number, z: number, width: number, height: number);
  }

  export class RadiusBlip extends Blip {
    /**
     * Creates a radius blip.
     * @param x X position of the blip center.
     * @param y Y position of the blip center.
     * @param z Z position of the blip center.
     * @param radius Blip radius.
     */
    constructor(x: number, y: number, z: number, radius: number);
  }

  export class PointBlip extends Blip {
    /**
     * Creates a point blip.
     * @param x X position of the blip.
     * @param y Y position of the blip.
     * @param z Z position of the blip.
     */
    constructor(x: number, y: number, z: number);
  }

  /**
   * Vehicle handling, which affects how vehicle responds and reacts to the inputs of a driver.
   * This handling applies to all vehicle instances, as opposed to the {@link Vehicle.handling}.
   *
   * @remarks Changes will be reflected on every vehicle using this particular handling, but might require vehicle recreating for changes to apply properly.
   */
  export class HandlingData {
    public readonly handlingNameHash: number;
    public acceleration: number;
    public antiRollBarBiasFront: number;
    public antiRollBarBiasRear: number;
    public antiRollBarForce: number;
    public brakeBiasFront: number;
    public brakeBiasRear: number;
    public brakeForce: number;
    public camberStiffnesss: number;
    public centreOfMassOffset: Vector3;
    public clutchChangeRateScaleDownShift: number;
    public clutchChangeRateScaleUpShift: number;
    public collisionDamageMult: number;
    public damageFlags: number;
    public deformationDamageMult: number;
    public downforceModifier: number;
    public driveBiasFront: number;
    public driveInertia: number;
    public driveMaxFlatVel: number;
    public engineDamageMult: number;
    public handBrakeForce: number;
    public handlingFlags: number;
    public inertiaMultiplier: Vector3;
    public initialDragCoeff: number;
    public initialDriveForce: number;
    public initialDriveGears: number;
    public initialDriveMaxFlatVel: number;
    public lowSpeedTractionLossMult: number;
    public mass: number;
    public modelFlags: number;
    public monetaryValue: number;
    public oilVolume: number;
    public percentSubmerged: number;
    public percentSubmergedRatio: number;
    public petrolTankVolume: number;
    public rollCentreHeightFront: number;
    public rollCentreHeightRear: number;
    public seatOffsetDistX: number;
    public seatOffsetDistY: number;
    public seatOffsetDistZ: number;
    public steeringLock: number;
    public steeringLockRatio: number;
    public suspensionBiasFront: number;
    public suspensionBiasRear: number;
    public suspensionCompDamp: number;
    public suspensionForce: number;
    public suspensionLowerLimit: number;
    public suspensionRaise: number;
    public suspensionReboundDamp: number;
    public suspensionUpperLimit: number;
    public tractionBiasFront: number;
    public tractionBiasRear: number;
    public tractionCurveLateral: number;
    public tractionCurveLateralRatio: number;
    public tractionCurveMax: number;
    public tractionCurveMaxRatio: number;
    public tractionCurveMin: number;
    public tractionCurveMinRatio: number;
    public tractionLossMult: number;
    public tractionSpringDeltaMax: number;
    public tractionSpringDeltaMaxRatio: number;
    public unkFloat1: number;
    public unkFloat2: number;
    public unkFloat4: number;
    public unkFloat5: number;
    public weaponDamageMult: number;

    /**
     * Initializes a new instance of the {@link HandlingData} class that can modify handling properties for the specified handling name.
     *
     * @beta
     */
    public static getForHandlingName(handlingHash: number): HandlingData;

    /**
     * Initializes a new instance of the {@link HandlingData} class that can modify handling properties for the specified handling name.
     *
     * @deprecated See {@link getForHandlingName}.
     */
    public static getForModelName(handlingHash: number): HandlingData;
  }

  export class MapZoomData {
    public fZoomScale: number;
    public fZoomSpeed: number;
    public fScrollSpeed: number;
    public vTilesX: number;
    public vTilesY: number;

    /**
     * Gets the map zoom data with the specified zoom data level.
     *
     * @param zoomData The zoom data level.
     * @returns The map zoom data.
     */
    public static get(zoomData: string): MapZoomData;

    /**
     * Resets all map zoom levels to their default state.
     */
    public static resetAll(): void;

    /**
     * Resets the map zoom data to the default state.
     */
    public reset(): void;
  }

  export class LocalStorage {
    /**
     * Retrieves an instance of the local storage to interact with.
     *
     * @returns An instance of the local storage.
     * @example
     * ```
     * let storage = alt.LocalStorage.get();
     * alt.log(storage.get("test")); // Prints the local storage value stored in 'test'
     * ```
     */
    public static get(): LocalStorage;

    /**
     * Deletes the specified key from the local storage.
     * 
     * @remarks The local storage has to be saved for this to be persistent. (See {@link save})
     * @param key Key in the local storage.
     * @example
     * ```
     * let storage = alt.LocalStorage.get();
     * storage.set("test", 123); // Sets the value '123' to the key 'test'
     * alt.log(storage.get("test")); // Prints '123'
     * storage.delete("test");
     * alt.log(storage.get("test")); // Prints 'undefined'
     * ```
     */
    public delete(key: string): void;

    /**
     * Deletes all data from the local storage.
     * 
     * @remarks The local storage has to be saved for this to be persistent. (See {@link save})
     */
    public deleteAll(): void;

    /**
     * Gets the specified value associated with the key in the local storage.
     *
     * @returns The value stored in the local storage or undefined.
     */
    public get(key: string): any;

    /**
     * Saves the local storage to the disk.
     * @example
     * ```
     * let storage = alt.LocalStorage.get();
     * storage.set("test", 123); // Sets the value '123' to the key 'test'
     * storage.save(); // The storage is now saved to the disk and is persistent
     * ```
     */
    public save(): void;

    /**
     * Sets the specified key to the specified value in the local storage.
     *
     * @remarks The local storage has to be saved for this to be persistent. (See {@link save})
     * @example
     * ```
     * let storage = alt.LocalStorage.get();
     * storage.set("test", 123); // Sets the value '123' to the key 'test'
     * ```
     */
    public set(key: string, value: any): void;
  }

  export class MemoryBuffer {
    /**
     * Creates a memory buffer with the specified size.
     * @param size Memory buffer size in bytes.
     */
    constructor(size: number);

    /**
     * Gets the byte at the specified memory offset.
     *
     * @param offset The memory offset.
     * @returns The byte at the memory offset.
     */
    public byte(offset: number): number;

    /**
     * Gets the double at the specified memory offset.
     *
     * @param offset The memory offset.
     * @returns The double at the memory offset.
     */
    public double(offset: number): number;

    /**
     * Gets the float at the specified memory offset.
     *
     * @param offset The memory offset.
     * @returns The float at the memory offset.
     */
    public float(offset: number): number;

    /**
     * Gets the int at the specified memory offset.
     *
     * @param offset The memory offset.
     * @returns The int at the memory offset.
     */
    public int(offset: number): number;

    /**
     * Gets the long at the specified memory offset.
     *
     * @param offset The memory offset.
     * @returns The long at the memory offset.
     */
    public long(offset: number): bigint;

    /**
     * Gets the short at the specified memory offset.
     *
     * @param offset The memory offset.
     * @returns The short at the memory offset.
     */
    public short(offset: number): number;

    /**
     * Gets the string at the specified memory offset with the specified length.
     *
     * @param offset The memory offset.
     * @param length The string length.
     * @returns The string at the memory offset.
     */
    public string(offset: number, length: number): string;

    /**
     * Gets the unsigned byte at the specified memory offset.
     *
     * @param offset The memory offset.
     * @returns The unsigned byte at the memory offset.
     */
    public ubyte(offset: number): number;

    /**
     * Gets the unisnged int at the specified memory offset.
     *
     * @param offset The memory offset.
     * @returns The unsigned int at the memory offset.
     */
    public uint(offset: number): number;

    /**
     * Gets the unsigned long at the specified memory offset.
     *
     * @param offset The memory offset.
     * @returns The unsigned long at the memory offset.
     */
    public ulong(offset: number): bigint;

    /**
     * Gets the unsigned short at the specified memory offset.
     *
     * @param offset The memory offset.
     * @returns The unsigned short at the memory offset.
     */
    public ushort(offset: number): number;

    /**
     * Frees the memory buffer.
     */
    public free(): boolean;
  }

  export class Discord {
    public static readonly currentUser: IDiscordUser | null;

    /**
     * @deprecated Seriously, don't use it because it might get removed someday in most unexpected moment.
     */
    public static requestOAuth2Token(): Promise<IDiscordOAuth2Token>;
  }

  export class File {
    /**
     * Determines whether file exists with the specified filename.
     *
     * @param filename The name of the file.
     * @returns Return is dependent on whether file with the specified filename exists.
     * @example
     * ```
     * let file = "data.json";
     * if(alt.File.exists(file)) {
     *    let data = alt.File.read(file);
     *    alt.log(data); // Prints the file contents
     * }
     * ```
     */
    public static exists(filename: string): boolean;

    /**
     * Reads content of the file.
     *
     * @param filename The name of the file.
     * @param encoding The encoding of the file. If not specified, it defaults to "utf-8".
     * @example
     * ```
     * let data = alt.File.read("data.json");
     * alt.log(data); // Logs the file contents
     * ```
     */
    public static read(filename: string, encoding?: FileEncoding.Utf8 | FileEncoding.Utf16): string;

    /**
     * Reads content of the file.
     *
     * @param filename The name of the file.
     * @param encoding The encoding of the file.
     * @example
     * ```
     * let data = alt.File.read("data.json");
     * alt.log(data); // Logs the file contents
     * ```
     */
    public static read(filename: string, encoding: FileEncoding.Binary): ArrayBuffer;
  }

  export class Voice {
    /**
     * Determines whether the microphone input is currently disabled.
     */
    static muteInput: boolean;
  }

  /**
   * Removes the specified key.
   *
   * @param key The key of the value to remove.
   */
  export function deleteMeta(key: string): void;

  /**
   * Gets a value using the specified key.
   *
   * @param key The key of the value to get.
   * @returns Dynamic value associated with the specified key.
   */
  export function getMeta(key: string): any;

  /**
   * Determines whether contains the specified key.
   *
   * @param key The key of the value to locate.
   * @returns True when element associated with the specified key is stored.
   */
  export function hasMeta(key: string): boolean;

  /**
   * Stores the given value with the specified key.
   *
   * @remarks The given value will be shared locally to all resources.
   * @param key The key of the value to store.
   */
  export function setMeta(key: string, value: any): void;

  /**
   * Gets a value using the specified key.
   *
   * @param key The key of the value to get.
   * @returns Dynamic value associated with the specified key.
   */
  export function getSyncedMeta(key: string): any;

  /**
   * Determines whether contains the specified key.
   *
   * @param key The key of the value to locate.
   * @returns Return is dependent on whether element associated with the specified key is stored.
   */
  export function hasSyncedMeta(key: string): boolean;

  /**
   * Adds a gxt label text.
   *
   * @remarks Gxt labels are used in some of the natives for displaying text.
   * @param key Label name.
   * @param value Label value.
   * @example
   * ```
   * alt.addGxtText("LABEL_TEST_TEXT", "Test Label value");
   * alt.log(alt.getGxtText("LABEL_TEST_TEXT")); // Prints 'Test label value'
   * ```
   */
  export function addGxtText(key: string, value: string): void;

  /**
   * Executes a scaleform method on the minimap scaleform.
   *
   * @param methodName Name of the method.
   * @returns True if it was successful.
   */
  export function beginScaleformMovieMethodMinimap(methodName: string): boolean;

  /**
   * Clears a timer set with the {@link everyTick} function.
   *
   * @param id The id of a timer.
   * @example
   * ```
   * let ticks = 0;
   * let tick = alt.everyTick(() => {
   *   ticks++;
   *   if(ticks > 1000) alt.clearEveryTick(tick); // Clears the every tick timer after 1000 ticks
   * });
   * ```
   */
  export function clearEveryTick(id: number): void;

  /**
   * Clears a timer set with the {@link setInterval} function.
   *
   * @param id The id of a timer.
   * @example
   * ```
   * let counter = 0;
   * let interval = alt.setInterval(() => {
   *   counter++;
   *   if(counter === 5) alt.clearInterval(interval); // Clears the interval after it has been executed 5 times
   * }, 500);
   * ```
   */
  export function clearInterval(id: number): void;

  /**
   * Clears a timer set with the {@link nextTick} function.
   *
   * @param id The id of a timer.
   */
  export function clearNextTick(id: number): void;

  /**
   * Clears a timer set with the {@link setTimeout} function.
   *
   * @param id The id of a timer.
   * @example
   * ```
   * let timeout = alt.setTimeout(() => {
   *   // Do stuff
   * }, 500);
   * alt.clearTimeout(timeout); // The timeout now never gets called, because it was cleared
   * ```
   */
  export function clearTimeout(id: number): void;

  /**
   * @hidden
   */
  export function clearTimer(id: number): void;

  /**
   * Emits specified event across client resources.
   *
   * @param player Event is sent to specific player.
   * @param eventName Name of the event.
   * @param args Rest parameters for emit to send.
   */
  export function emit(name: string, ...args: any[]): void;

  /**
   * Emits specified event to server.
   *
   * @param player Event is sent to specific player.
   * @param eventName Name of the event.
   * @param args Rest parameters for emit to send.
   */
  export function emitServer(name: string, ...args: any[]): void;

  /**
   * Schedules execution of handler on every frame.
   *
   * @param handler Handler that should be scheduled for execution.
   * @returns A number representing the id value of the timer that is set. Use this value with the {@link clearEveryTick} function to cancel the timer.
   * @remarks Some native functions need to be called in every tick to work. One tick is one frame.
   * @example
   * ```
   * let tick = alt.everyTick(() => {
   *   native.hideHudComponentThisFrame(1); // Hides the wanted stars hud component
   * });
   * ```
   */
  export function everyTick(handler: () => void): number;

  /**
   * Gets if the game controls are enabled.
   *
   * @returns True if the game controls are enabled.
   */
  export function gameControlsEnabled(): boolean;

  export function getCursorPos(): IVector2;

  /**
   * Gets a gxt label text.
   *
   * @remarks Can be set with {@link addGxtText}.
   * @param key Label name.
   * @returns The value of the gxt label.
   * @example
   * ```
   * alt.addGxtText("LABEL_TEST_TEXT", "Test Label value");
   * alt.log(alt.getGxtText("LABEL_TEST_TEXT")); // Prints 'Test label value'
   * ```
   */
  export function getGxtText(key: string): string;

  /**
   * Gets the license hash.
   *
   * @returns Hash of the license.
   */
  export function getLicenseHash(): string;

  /**
   * Gets the current game locale.
   *
   * @returns Current game locale.
   */
  export function getLocale(): string;

  /**
   * Gets the amount of milliseconds that have to pass every game minute.
   */
  export function getMsPerGameMinute(): number;

  export function getPermissionState(permId: Permission): PermissionState;

  /**
   * Gets a value of the specified statistic.
   *
   * @param statName Name of the statistic.
   */
  export function getStat(statName: StatName): number;

  /**
   * Creates a hash using Jenkins one-at-a-time algorithm.
   *
   * @param str A string from which hash will be created.
   * @example
   * ```
   * let hash = alt.hash("weapon_pistol");
   * alt.log(hash); // Prints the hash of the string 'weapon_pistol'
   * ```
   */
  export function hash(str: string): number;

  /**
   * Returns state of console window.
   *
   * @returns True when console window is opened.
   */
  export function isConsoleOpen(): boolean;

  /**
   * Returns state of game window.
   *
   * @returns True when game window is focused.
   */
  export function isGameFocused(): boolean;

  /**
   * Sandbox mode.
   *
   * @returns True when alt:V client is launched in sandbox mode.
   */
  export function isInSandbox(): boolean;

  /**
   * Streamer mode.
   *
   * @returns True when alt:V client is launched in streamer mode.
   *
   * @beta
   */
  export function isInStreamerMode(): boolean;

  /**
   * Returns state of user interface and console window.
   *
   * @returns True when user interface or console window is opened.
   */
  export function isMenuOpen(): boolean;

  /**
   * Checks whether the specified model hash and name are loaded.
   *
   * @returns True if loaded.
   */
  export function isTextureExistInArchetype(modelHash: number, modelName: string): boolean;

  /**
   * @ignore Should not be used until fixed.
   */
  export function loadModel(modelHash: number): void;

  /**
   * @ignore Should not be used until fixed.
   */
  export function loadModelAsync(modelHash: number): void;

  /**
   * Prints the arguments to the ingame console. (F8)
   * @example
   * ```
   * let str = "World";
   * alt.log("Hello", str); // Prints 'Hello World'
   * ```
   */
  export function log(...args: any[]): void;

  /**
   * Prints the arguments to the ingame console as an error. (F8)
   * @remarks For an example see {@link log}
   */
  export function logError(...args: any[]): void;

  /**
   * Prints the arguments to the ingame console as a warning. (F8)
   * @remarks For an example see {@link log}
   */
  export function logWarning(...args: any[]): void;

  /**
   * Schedules execution of handler on next frame.
   *
   * @param handler Handler that should be scheduled for execution.
   * @returns A number representing the id value of the timer that is set. Use this value with the {@link clearNextTick} function to cancel the timer.
   */
  export function nextTick(handler: () => void): number;

  /**
   * Unsubscribes from client event handler with specified listener.
   *
   * @remarks Listener should be of the same reference as when event was subscribed.
   * @param eventName Name of the event.
   * @param listener Listener that should be removed.
   */
  export function off(eventName: string, listener: (...args: any[]) => void): void;

  /**
   * Unsubscribes from server event handler with specified listener.
   *
   * @remarks Listener should be of the same reference as when event was subscribed.
   * @param eventName Name of the event.
   * @param listener Listener that should be removed.
   */
  export function offServer(eventName: string, listener: (...args: any[]) => void): void;

  /**
   * Subscribes to client event handler with specified listener.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be added.
   */
  export function on<K extends keyof IClientEvent>(eventName: K, listener: IClientEvent[K]): void;

  /** @beta */
  export function once<K extends keyof IClientEvent>(eventName: K, listener: IClientEvent[K]): void;

  /**
   * Subscribes to client event handler with specified listener.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be added.
   */
  export function on<S extends string>(event: Exclude<S, keyof IClientEvent>, listener: (...args: any[]) => void | Promise<void>): void;

  /** @beta */
  export function once<S extends string>(event: Exclude<S, keyof IClientEvent>, listener: (...args: any[]) => void | Promise<void>): void;

  /**
   * Subscribes to client event handler with specified listener.
   *
   * @param eventName Name of the event.
   * @param listener Listener that should be added.
   */
  export function onServer(eventName: string, listener: (...args: any[]) => void): void;

  /** @beta */
  export function onceServer(eventName: string, listener: (...args: any[]) => void): void;

  export function removeGxtText(key: string): void;

  export function removeIpl(iplName: string): void;

  export function requestIpl(iplName: string): void;

  /**
   * The output is returned as a string.
   *
   * @return Return is dependent on the success of the operation.
   *
   * @beta
   */
  export function takeScreenshot(): Promise<string>;

  /**
   * The output is returned as a string.
   *
   * @return Return is dependent on the success of the operation.
   * @remarks This only takes a screenshot of the raw GTA:V window. WebViews, game overlays etc. won't be captured.
   *
   * @beta
   */
  export function takeScreenshotGameOnly(): Promise<string>;

  /**
   * Resets a statistic to its default value.
   *
   * @param statName Name of the statistic.
   */
  export function resetStat(statName: StatName): void;

  /**
   * Freezes the gameplay camera rotation and position.
   *
   * @param state Should the cam be frozen.
   */
  export function setCamFrozen(state: boolean): void;

  export function setCursorPos(pos: IVector2): void;

  /**
   * Schedules execution of handler in specified intervals.
   *
   * @param handler Handler that should be scheduled for execution.
   * @param miliseconds The time, in milliseconds, between execution of specified handler.
   * @returns A number representing the id value of the timer that is set. Use this value with the {@link clearInterval} function to cancel the timer.
   * @example
   * ```
   * let timeout = alt.setInterval(() => {
   *   alt.log("Called"); // Prints 'Called' every second
   * }, 1000);
   * ```
   */
  export function setInterval(handler: () => void, miliseconds: number): number;

  /**
   * Sets the model of the local ped.
   *
   * @param modelName Name of the model.
   * @remarks Setting the model on the serverside is preferred for anticheat purposes.
   */
  export function setModel(modelName: string): void;

  /**
   * Sets the milliseconds that pass every game minute.
   *
   * @param miliseconds Amount of milliseconds that pass every game minute.
   * @example
   * ```
   * alt.setMsPerGameMinute(60000); // Every real minute one game minute now passes
   * ```
   */
  export function setMsPerGameMinute(miliseconds: number): void;

  /**
   * Sets the rotation velocity for the specified entity.
   *
   * @param scriptID The script id of the entity.
   * @param x The rotation velocity on the X axis.
   * @param y The rotation velocity on the Y axis.
   * @param z The rotation velocity on the Z axis.
   *
   * @beta
   */
  export function setRotationVelocity(scriptID: number, x: number, y: number, z: number): void;

  /**
   * Sets a statistic to desired value.
   *
   * @param statName Name of the statistic.
   * @param value Value of the statistic you want to set.
   */
  export function setStat(statName: StatName, value: number): void;

  /**
   * Schedules execution of handler once after the expiration of interval.
   *
   * @param handler Handler that should be scheduled for execution.
   * @param miliseconds The time, in milliseconds, before execution of specified handler.
   * @returns A number representing the id value of the timer that is set. Use this value with the {@link clearTimeout} function to cancel the timer.
   * @example
   * ```
   * let timeout = alt.setTimeout(() => {
   *   alt.log("Called"); // Prints 'Called' after one second
   * }, 1000);
   * ```
   */
  export function setTimeout(handler: () => void, miliseconds: number): number;

  /**
   * Sets the current weather cycle.
   *
   * @remarks Length of the weathers array has to be the same as the multipliers array.
   * @param weathers An array containing the available weathers ids.
   * @param multipliers An array containing the multipliers for every weather.
   * @example
   * ```
   * alt.setWeatherCycle([0, 1, 2, 5, 6], [1, 1, 1, 1, 1]); // Sets the weather cycle with an equal chance for every weather
   * alt.setWeatherSyncActive(true); // Activates the weather sync
   * ```
   */
  export function setWeatherCycle(weathers: Array<number>, multipliers: Array<number>): void;

  /**
   * Toggles the state of the weather sync.
   *
   * @remarks Can be set with {@link setWeatherCycle}.
   * @param isActive Should the weather sync be active.
   */
  export function setWeatherSyncActive(isActive: boolean): void;

  /**
   * Changes the visibility of cursor.
   *
   * @remarks This is handled by resource scoped internal integer, which gets increased/decreased by every function call. When you show your cursor 5 times, to hide it you have to do that 5 times accordingly.
   * @param state A boolean indicating whenever cursor should be visible or not.
   */
  export function showCursor(state: boolean): void;

  /**
   * Toggles the game controls.
   *
   * @param state A boolean indicating if the controls should be enabled.
   */
  export function toggleGameControls(state: boolean): void;

  /**
   * Toggles the voice controls.
   *
   * @param state A boolean indicating if the voice controls should be enabled.
   */
  export function toggleVoiceControls(state: boolean): void;
}
