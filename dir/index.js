"use strict";
/**
 * @packageDocumentation A small library for common math functions
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.sum2 = exports.sum3 = exports.avg = void 0;
/**
 * Calculate the average of three numbers
 *
 * @param a - first number
 * @param b - second number
 * @param c - third number
 *
 * @public
 */
function avg(a, b, c) {
    return sum3(a, b, c) / 3;
}
exports.avg = avg;
/**
 * Calculate the sum of three numbers
 *
 * @param a - first number
 * @param b - second number
 * @param c - third number
 *
 * @beta
 */
function sum3(a, b, c) {
    return sum2(a, sum2(b, c));
}
exports.sum3 = sum3;
/**
 * Calculate the sum of two numbers
 *
 * @param a - first number
 * @param b - second number
 *
 * @internal
 */
function sum2(a, b) {
    const sum = a + b;
    return sum;
}
exports.sum2 = sum2;
