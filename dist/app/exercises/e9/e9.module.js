"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.E9Module = void 0;
const common_1 = require("@nestjs/common");
const phase_change_service_1 = require("./services/phase-change.service");
const phase_change_diagram_controller_1 = require("./controllers/phase-change-diagram.controller");
let E9Module = class E9Module {
};
E9Module = __decorate([
    (0, common_1.Module)({
        controllers: [phase_change_diagram_controller_1.DiagramController],
        providers: [phase_change_service_1.PhaseChangeService],
    })
], E9Module);
exports.E9Module = E9Module;
//# sourceMappingURL=e9.module.js.map