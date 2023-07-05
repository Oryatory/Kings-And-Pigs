window.addEventListener("keydown", (event) => {
  if (player.preventInput) return;
  switch (event.code) {
    case "KeyW":
    case "Space":
      for (let i = 0; i < doors.length; i++) {
        const door = doors[i];

        if (
          player.hitbox.position.x + player.hitbox.width / 2 <=
            door.position.x + door.width &&
          player.hitbox.position.x >= door.position.x &&
          player.hitbox.position.y <= door.position.y + door.height &&
          player.hitbox.position.y + player.hitbox.height >= door.position.y
        ) {
          player.velocity = { x: 0, y: 0 };
          player.preventInput = true;
          player.switchSprite("enterDoor");
          door.play();
          return;
        }
      }
      if (player.velocity.y === 0) {
        player.velocity.y = -14;
      }
      break;
    case "KeyD":
      keys.d.pressed = true;
      break;
    case "KeyA":
      keys.a.pressed = true;
      break;
    case "KeyS":
      break;
  }
});

window.addEventListener("keyup", (event) => {
  switch (event.code) {
    case "KeyD":
      keys.d.pressed = false;
      break;
    case "KeyA":
      keys.a.pressed = false;
      break;
    case "KeyS":
      break;
  }
});
