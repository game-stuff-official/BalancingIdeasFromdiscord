//require('balancing-mindustry/units/vela');
//require('balancing-mindustry/blocks/parallax');
//require('balancing-mindustry/blocks/atrax');

//Vars.content.units().filter(unit => !true)

// Vela
UnitTypes.vela.rotateSpeed *= -1.15;
UnitTypes.vela.boostMultiplier *= 3;
UnitTypes.vela.speed *= 4;

// Atrax
UnitTypes.atrax.legLength *= 4;
UnitTypes.atrax.legCount *= 2;

// Gamma
UnitTypes.gamma.speed *= .5;
UnitTypes.gamma.rotateSpeed *= .25;


// foreshaodow
Blocks.foreshadow.reloadTime *= .5;

// overdrive dome
Blocks.overdriveDome.speedBoost *= 2;

// power sorce
Blocks.powerSource.laserRange *= 10;
Blocks.powerSource.maxNodes *= 10;

// mass driver
Blocks.massDriver.reloadTime *= 2;
Blocks.massDriver.itemCapaticy *= .5;
