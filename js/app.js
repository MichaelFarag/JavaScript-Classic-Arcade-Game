
// Enemies our player must avoid
var Enemy = function (x, y, s) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.s = s;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.s * dt;

    //Move enemy again
    if (this.x > 400) {
        this.x = -50;
        this.s = 150 + Math.floor(Math.random() * 400);
    }

    //Check clash between player and enemies then reset game
    //debugger;
    if (player.x < this.x + 50 && player.x + 25 > this.x && player.y < this.y + 15 && 20 + player.y > this.y) {
        player.x = 200;
        player.y = 380;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function (x, y, s) {
    this.x = x;
    this.y = y;
    this.s = s;
    this.sprite = 'images/char-horn-girl.png';
};

Player.prototype.update = function () {
    //check player play in canvas wall boundaries
    if (this.y > 450) {
        this.y = 450;
    }
    if (this.x > 350) {
        this.x = 350;
    }
    if (this.x < 0) {
        this.x = 0;
    }
    //when play win and reach to top then start play agian after 4 sec
    if (this.y < 0) {
        setTimeout(() => {
            this.x = 200;
            this.y = 380;
        }, 4000);
    }
};

Player.prototype.render = function () {
    // debugger;
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function (keyPress) {

    // when press on left arrow key enable player to  move left on the x axis by 100

    if (keyPress == 'left' && this.x > 0) {
        this.x -= 100;
    };

    // when press on right arrow key enable player to  move right on the x axis by 100

    if (keyPress == 'right' && this.x < 400) {
        this.x += 100;
    };


    // when press on up arrow key enable player to  move up on the y axis by 80

    if (keyPress == 'up' && this.y > 0) {
        this.y -= 80;
    };

    // when press on down arrow key enable player to move down on the y axis by 80

    if (keyPress == 'down' && this.y < 400) {
        this.y += 80;
    };
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];

var enemyPosition = [60, 140, 220];
var player = new Player(200, 380, 50);
var oneEnemy;

enemyPosition.forEach(function (enemyPositionStart) {
    oneEnemy = new Enemy(0, enemyPositionStart, 100 + Math.floor(Math.random() * 500));
    allEnemies.push(oneEnemy);
});


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});

// Try to add Bouns Features
var Bouns = function (x, y) {
    this.x = x;
    this.y = y;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    //this.sprite = 'images/star.png';
};
Bouns.prototype.render = function (){
    ctx.drawImage(Resources.get('images/star.png'), this.x, this.y);
}
