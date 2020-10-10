const Potion = require('../lib/Potion.js');
const Character = require('./Character.js');

//this is a constructor function
class Player extends Character {
    constructor (name = '') {
        super(name);

        this.inventory = [new Potion('health'), new Potion('agility'), new Potion('strength')];
    };

    //returns an object with various player properties
    getStats() {
        return  {
            potions: this.inventory.length,
            health: this.health,
            strength: this.strength,
            agility: this.agility,
        };
    }

    //returns the inventory array or false if empty
    getInventory() {
        if (this.inventory.length) {
            return this.inventory;
        }
        return false;
    }

    addPotion(potion) {
        this.inventory.push(potion);
    }

    usePotion(index) {
        const potion = this.getInventory().splice(index, 1)[0];

        switch (potion.name) {
            case 'agility':
                this.agility += potion.value;
                break;
            case 'health':
                this.health += potion.value;
                break;
            case 'strength':
                this.strength += potion.value;
                break;
        }
    }
}

module.exports = Player;