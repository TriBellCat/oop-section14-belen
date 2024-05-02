//Player constructor
function Player (name) {
    this.name = name;
    this.lvl = 1
    this.points = 0;
}

//Player prototype
Player.prototype = {
    constructor: Player,
    
    //Levels up player when they gain 10 points
    gainXP: function (playerPoints) {
        this.points += playerPoints;
        if (this.points >= 10) {
                this.lvl += 1;
                this.points -= 10;
        }
    },

    //Describes the player's name, level, and points
    describe: function () {
        return this.name + " is level " + this.lvl + " with " + this.points + " experience points.";
    }
};

let player1 = new Player('Bob');
let player2 = new Player('Alice');

player1.gainXP(5);
player2.gainXP(7);
player1.gainXP(3);
player2.gainXP(2);
player1.gainXP(8);
player2.gainXP(4);

console.log(player1.describe());
console.log(player2.describe());


