'use strict';

export default class Profession {
    constructor(name) {
            this._name = name;
        }
        // setter for name
    set name(newName) {
            this._name = newName;
        }
        // getter for name
    get name() {
        return this._name;
    }

}

export default class Soldier extends Profession {
    // if this class is initialised without parameters, the default parameters are used
    constructor(placeOfWork = 'Abuja', rank = 'Soldier', strength = "weak") {
        super(name);
        this._placeOfWork = placeOfWork;
        this._rank = rank;
        this._strengthLevel = strength;
    }

    getDetails() {
        console.log(`Hello ${this._rank} ${this._name}. Your strength level is ${this._strengthLevel} and therefore, ${this.canFightBattle()}`);
    }

    canFightBattle() {
        if (this._strengthLevel === "Very Strong") {
            return "you are still fit for battle";
        } else {
            return "you are not fit for battle";
        }
    }
}