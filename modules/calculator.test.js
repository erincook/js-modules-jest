import { add, subtract } from './calculator.js'


describe("#add", () => {
        describe("Given two numbers are passed", () => {
            describe("When the numbers are 2 and 100", () => {
                it("Then it should return 102", () => {
                    expect(add(2,100)).toBe(102); 
                })
            })
            describe("When the numbers are -1 and 50", () => {
                it("Then it should return 49", () => {
                    expect(add(-1, 50)).toBe(49); 
                })
            })
        })
    }); 
    
    describe("#subtract", () => {
        describe("Given two numbers are passed", () => {
            describe("When the numbers are 100 and 50", () => {
                it("Then it should return 50", () => {
                    expect(subtract(100, 50)).toBe(50); 
                })
            })
            describe("When the numbers are 51 and 10", () => {
                it("Then it should return 41", () => {
                    expect(subtract(51, 10)).toBe(41); 
                })
            })
        })
    });

 