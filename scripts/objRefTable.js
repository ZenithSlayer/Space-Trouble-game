const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Turret,
		C3.Behaviors.Orbit,
		C3.Plugins.Mouse,
		C3.Behaviors.Car,
		C3.Behaviors.Turret.Cnds.IsEnabled,
		C3.Behaviors.Turret.Acts.AcquireTarget,
		C3.Plugins.Mouse.Cnds.OnClick,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.WaitForPreviousActions,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.Mouse.Exps.X,
		C3.Plugins.Mouse.Exps.Y,
		C3.Behaviors.Turret.Cnds.OnShoot,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Sprite.Acts.SetTowardPosition,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Behaviors.Car.Acts.SimulateControl,
		C3.Plugins.Sprite.Acts.SetScale,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Cnds.ForEach,
		C3.Behaviors.Orbit.Acts.Pin,
		C3.Behaviors.Orbit.Acts.SetSpeed,
		C3.Plugins.System.Exps.random
	];
};
self.C3_JsPropNameTable = [
	{Turret: 0},
	{Sprite: 0},
	{Orbit: 0},
	{Sprite2: 0},
	{Sprite3: 0},
	{Mouse: 0},
	{Car: 0},
	{Sprite4: 0},
	{RoundEnemies: 0}
];

self.InstanceType = {
	Sprite: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Mouse: class extends self.IInstance {},
	Sprite4: class extends self.ISpriteInstance {}
}