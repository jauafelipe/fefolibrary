"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModuleClass = exports.SetEventArg = exports.CommandName = void 0;
var DecoratorsMethods_1 = require("./Decorators/DecoratorsMethods");
Object.defineProperty(exports, "CommandName", { enumerable: true, get: function () { return DecoratorsMethods_1.CommandName; } });
var Event_nums_1 = require("./Enums/Event.nums");
Object.defineProperty(exports, "SetEventArg", { enumerable: true, get: function () { return Event_nums_1.SetEventArg; } });
var index_1 = require("./Module/index");
Object.defineProperty(exports, "ModuleClass", { enumerable: true, get: function () { return index_1.ModuleClass; } });
