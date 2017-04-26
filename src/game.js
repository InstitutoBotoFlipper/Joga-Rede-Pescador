var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
	game.load.image('sky', 'assets/sky.png');
	game.load.image('ground', '../assets/platform.png');
	game.load.image('star', '../assets/star.png');
	game.load.spritesheet('dude', '../assets/dude.png', 32, 48);
}

var pic;
function create() {
	game.add.sprite(0, 0, 'sky');
  pic = game.add.sprite(200, 300, 'dude');
  pic.alpha = 0.5;
  pic.anchor.set(0.5);
  pic.scale.set(0.6);

  game.add.text(16, 16, "tap or double-tap the image", { font: "32px Arial", fill: "#ffffff" });

  game.input.onTap.add(onTap, this);
}

function onTap(pointer, doubleTap) {
    if (doubleTap)
    {
        //  They double-tapped, so swap the image
        if (pic.key === 'dude')
        {
            pic.loadTexture('star');
        }
        else
        {
            pic.loadTexture('dude');
        }
    }
    else
    {
        //  A single tap (tap duration was < game.input.tapRate) so change alpha
        pic.alpha = (pic.alpha === 0.5) ? 1 : 0.5;
    }
}

function update() {
}
