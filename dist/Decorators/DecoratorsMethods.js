"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandName = exports.commandRegistry = void 0;
exports.commandRegistry = {};
function CommandName(type) {
    return function (target, propertyKey, descriptor) {
        exports.commandRegistry[type] = target[propertyKey];
        return descriptor;
    };
}
exports.CommandName = CommandName;
