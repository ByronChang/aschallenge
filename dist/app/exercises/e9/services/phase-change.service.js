"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhaseChangeService = void 0;
const common_1 = require("@nestjs/common");
let PhaseChangeService = class PhaseChangeService {
    constructor() {
        this.criticalPressure = 10;
        this.criticalVolume = 0.0035;
    }
    calculateSpecificVolumes(pressure) {
        if (pressure < 1 || pressure > this.criticalPressure) {
            throw new Error(`Pressure out of range. Must be between 1 MPa and ${this.criticalPressure} MPa. Received: ${pressure}`);
        }
        const specific_volume_liquid = this.criticalVolume - (0.0035 / this.criticalPressure) * (this.criticalPressure - pressure);
        const specific_volume_vapor = this.criticalVolume + (0.0035 / this.criticalPressure) * (this.criticalPressure - pressure);
        return {
            specific_volume_liquid: Number(specific_volume_liquid.toFixed(4)),
            specific_volume_vapor: Number(specific_volume_vapor.toFixed(4)),
        };
    }
};
PhaseChangeService = __decorate([
    (0, common_1.Injectable)()
], PhaseChangeService);
exports.PhaseChangeService = PhaseChangeService;
//# sourceMappingURL=phase-change.service.js.map