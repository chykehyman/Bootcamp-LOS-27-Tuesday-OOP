/**
 *Unit test cases for aritGeo function
 **/

'use strict';

import chai from 'chai';
import { Profession, Soldier } from '../OOP/oop';
const assert = chai.assert;
git
describe("OOP Test Cases", () => {

    describe("Create Profession Object Instance", () => {
        let person = new Profession("Mark");

        it("should return 'Mark' ", () => {
            assert.equal((person.name), "Mark");
        });

    });
});