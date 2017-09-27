/**
 *Unit test cases for javascript OOP
 **/

'use strict';

import chai from 'chai';
import { Profession, Soldier } from '../OOP/oop';
const assert = chai.assert;

describe("OOP Test Cases", () => {

    describe("Create Profession Object Instance", () => {
        let person = new Profession("Mark");

        it("should return 'Mark' ", () => {
            assert.equal((person.name), "Mark");
        });

    });
});