const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Turret,
		C3.Behaviors.MoveTo,
		C3.Plugins.Mouse,
		C3.Behaviors.Car,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Cnds.ForEach,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Behaviors.Car.Acts.SetMaxSpeed,
		C3.Behaviors.Car.Acts.SetAcceleration,
		C3.Plugins.System.Acts.Wait,
		C3.Behaviors.Car.Acts.SimulateControl,
		C3.Plugins.Mouse.Cnds.OnClick,
		C3.Plugins.System.Acts.WaitForPreviousActions,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.Mouse.Exps.X,
		C3.Plugins.Mouse.Exps.Y,
		C3.Behaviors.Turret.Cnds.IsEnabled,
		C3.Behaviors.Turret.Acts.AcquireTarget,
		C3.Behaviors.Turret.Cnds.OnShoot,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Sprite.Acts.SetTowardPosition,
		C3.Behaviors.Turret.Acts.SetEnabled,
		C3.Plugins.System.Cnds.While,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.System.Acts.SubVar,
		C3.Behaviors.MoveTo.Acts.MoveToObject,
		C3.Plugins.Sprite.Cnds.OnAnimFinished,
		C3.Plugins.Sprite.Acts.SetAnim
	];
};
self.C3_JsPropNameTable = [
	{Turret: 0},
	{MC_Ship: 0},
	{MoveTo: 0},
	{Enemy: 0},
	{Mouse: 0},
	{Aim: 0},
	{Car: 0},
	{Sprite: 0},
	{EnemiesThisRound: 0}
];

self.InstanceType = {
	MC_Ship: class extends self.ISpriteInstance {},
	Enemy: class extends self.ISpriteInstance {},
	Mouse: class extends self.IInstance {},
	Aim: class extends self.ISpriteInstance {},
	Sprite: class extends self.ISpriteInstance {}
}