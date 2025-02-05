"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusController = void 0;
const common_1 = require("@nestjs/common");
const system_manager_service_1 = require("../services/system-manager.service");
const swagger_1 = require("@nestjs/swagger");
const e7_swagger_docs_1 = require("../../../../swagger/e7-swagger-docs");
let StatusController = class StatusController {
    constructor(systemManagerService) {
        this.systemManagerService = systemManagerService;
    }
    getStatus() {
        const damagedSystem = this.systemManagerService.getDamagedSystem();
        if (!damagedSystem) {
            throw new common_1.HttpException('No damaged system found.', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return { damaged_system: damagedSystem };
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)(e7_swagger_docs_1.e7SwaggerDocs['/status'].get.responses[200]),
    (0, swagger_1.ApiResponse)(e7_swagger_docs_1.e7SwaggerDocs['/status'].get.responses[500]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StatusController.prototype, "getStatus", null);
StatusController = __decorate([
    (0, swagger_1.ApiTags)('Nave-a-la-deriva'),
    (0, common_1.Controller)('status'),
    __metadata("design:paramtypes", [system_manager_service_1.SystemManagerService])
], StatusController);
exports.StatusController = StatusController;
//# sourceMappingURL=status.controller.js.map