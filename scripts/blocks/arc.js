function rN(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
};

Blocks.arc.shootType.lightningLength = rN(10, 30);
