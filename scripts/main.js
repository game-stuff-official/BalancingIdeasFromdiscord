//require('balancing-mindustry/units/vela');
//require('balancing-mindustry/blocks/parallax');
//require('balancing-mindustry/blocks/atrax');

// Parallax
Blocks.parallax.requiremets = ItemStack.with(Items.copper, 1, Items.silicon, 60);

// Vela
UnitTypes.vela.rotateSpeed *= 1.15;
UnitTypes.vela.boostMultiplier *= 3;
UnitTypes.vela.speed *= 4;

// Atrax
UnitTypes.atrax.legLength *= 2;
UnitTypes.atrax.legCount *= 2;
