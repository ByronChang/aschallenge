"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystemManagerService = void 0;
const common_1 = require("@nestjs/common");
const systems_1 = require("../data/systems");
let SystemManagerService = class SystemManagerService {
    constructor() {
        this.damagedSystem = null;
    }
    getDamagedSystem() {
        const systems = Object.keys(systems_1.systemsData);
        this.damagedSystem =
            systems[Math.floor(Math.random() * systems.length)] || null;
        return this.damagedSystem;
    }
    isValidSystem(system) {
        return system in systems_1.systemsData;
    }
    getSystemCode(system) {
        return systems_1.systemsData[system] || 'UNKNOWN';
    }
    resetDamagedSystem() {
        this.damagedSystem = null;
    }
    getAllSystemsData() {
        return systems_1.systemsData;
    }
};
SystemManagerService = __decorate([
    (0, common_1.Injectable)()
], SystemManagerService);
exports.SystemManagerService = SystemManagerService;
//# sourceMappingURL=system-manager.service.js.map