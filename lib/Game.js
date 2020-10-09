const inquirer = require('inquirer');
const Enemy = require('./Enemy.js');
const Player = require('./Player');

function Game () {
    this.roundNumber = 0;
    this.isPlayerTurn = false;
    this.enemies = [];
    this.currentenemy;
    this.player;
};

Game.prototype.initializeGame = function () {
    this.enemies.push(new Enemy('Witch', 'fire magic')); //unsure if this goes here o in enemy array
    this.enemies.push(new Enemy('Mouse', 'swiss army cheese'));
    this.enemies.push(new Enemy('Birb', 'claws'));

    this.currentEnemy = this.enemies[0];

    inquirer.prompt({
        type: 'text',
        name: 'name',
        message: 'What is your name?',
    }).then(({ name }) => { //destructure name from the prompt object
        this.player = new Player(name);
        this.startNewBattle();
    });
};

module.exports = Game;