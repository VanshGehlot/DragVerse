"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Decimal = void 0;
const tslib_1 = require("tslib");
const ethers_1 = require("ethers");
const tiny_invariant_1 = tslib_1.__importDefault(require("tiny-invariant"));
/**
 * Decimal is a class to make it easy to go from Javascript / Typescript `number` | `string`
 * to ethers `BigDecimal` with the ability to customize precision
 */
class Decimal {
    /**
     * Returns a `DecimalValue` type from the specified value and precision
     * @param value
     * @param precision
     */
    static new(value, precision = 18) {
        tiny_invariant_1.default(precision % 1 == 0 && precision <= 18 && precision > -1, `${precision.toString()} must be a non-negative integer less than or equal to 18`);
        // if type of string, ensure it represents a floating point number or integer
        if (typeof value == 'string') {
            tiny_invariant_1.default(value.match(/^[-+]?[0-9]*\.?[0-9]+$/), 'value must represent a floating point number or integer');
        }
        else {
            value = value.toString();
        }
        const decimalPlaces = Decimal.countDecimals(value);
        // require that the specified precision is at least as large as the number of decimal places of value
        tiny_invariant_1.default(precision >= decimalPlaces, `Precision: ${precision} must be greater than or equal the number of decimal places: ${decimalPlaces} in value: ${value}`);
        const difference = precision - decimalPlaces;
        const zeros = ethers_1.BigNumber.from(10).pow(difference);
        const abs = ethers_1.BigNumber.from(`${value.replace('.', '')}`);
        return { value: abs.mul(zeros) };
    }
    /**
     * Returns the raw `DecimalValue` with no precision
     * @param value
     */
    static raw(value) {
        return { value: ethers_1.BigNumber.from(value) };
    }
    /**
     * Returns the number of decimals for value
     * @param value
     */
    static countDecimals(value) {
        if (value.includes('.'))
            return value.split('.')[1].length || 0;
        return 0;
    }
}
exports.Decimal = Decimal;
//# sourceMappingURL=Decimal.js.map