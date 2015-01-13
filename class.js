// Created by madara all rights reserved.

export default class MathStuff {
    /**
     * Do math and shit!
     * @param {Number} a
     * @param {Number} b
     */
    constructor(a, b) {
        Object.assign(this, {a: a, b: b});
    }
    add() {
        return this.a + this.b;
    }
    multiply() {
        return this.a * this.b;
    }
}