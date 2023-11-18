"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModuleClass = void 0;
var discord_js_1 = require("discord.js");
var DecoratorsMethods_1 = require("../Decorators/DecoratorsMethods");
function ModuleClass(_a) {
    var props = __rest(_a, []);
    return function (target) {
        var client = new discord_js_1.Client({
            intents: props.intents || [],
        });
        client.on(props.events, function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var msg = args[0];
            if (msg.content.startsWith(props.prefix)) {
                var commandType = msg.content
                    .split(" ")[0]
                    .substring(1)
                    .toLowerCase();
                var handler = DecoratorsMethods_1.commandRegistry[commandType];
                if (handler) {
                    handler(msg);
                }
            }
        });
        client.login(props.TOKEN).then(function () {
            var _a;
            console.log("Logged in ".concat((_a = client.user) === null || _a === void 0 ? void 0 : _a.username));
        });
        return target;
    };
}
exports.ModuleClass = ModuleClass;
