"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.E7Module = void 0;
const common_1 = require("@nestjs/common");
const system_manager_service_1 = require("./services/system-manager.service");
const html_generator_service_1 = require("./services/html-generator.service");
const status_controller_1 = require("./controllers/status.controller");
const repair_bay_controller_1 = require("./controllers/repair-bay.controller");
const teapot_controller_1 = require("./controllers/teapot.controller");
let E7Module = class E7Module {
};
E7Module = __decorate([
    (0, common_1.Module)({
        controllers: [status_controller_1.StatusController, repair_bay_controller_1.RepairBayController, teapot_controller_1.TeapotController],
        providers: [system_manager_service_1.SystemManagerService, html_generator_service_1.HtmlGeneratorService],
    })
], E7Module);
exports.E7Module = E7Module;
//# sourceMappingURL=e7.module.js.map