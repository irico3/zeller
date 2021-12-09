"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
describe("zerror test", () => {
    test.each([
        [1995, 6, 1, "Thu"],
        [4, 3, 1, "Sat"],
        [1, 1, 1, "Sun"],
    ])("year:%o, month:%o, day:%o", (year, month, day, expected) => {
        expect((0, index_1.default)(year, month, day)).toBe(expected);
    });
});
describe("zerror throw test", () => {
    expect(() => (0, index_1.default)(1582, 10, 11)).toThrow("invalid date. please check calendar revision rules.");
    expect(() => (0, index_1.default)(0, 1, 1)).toThrow("A date before the Western calendar is specified.");
    expect(() => (0, index_1.default)(1555, 0, 1)).toThrow(`Invalid date. date:1555/0/1`);
});
