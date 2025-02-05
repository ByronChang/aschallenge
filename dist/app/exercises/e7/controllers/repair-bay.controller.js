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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepairBayController = void 0;
const common_1 = require("@nestjs/common");
const system_manager_service_1 = require("../services/system-manager.service");
const html_generator_service_1 = require("../services/html-generator.service");
const swagger_1 = require("@nestjs/swagger");
const e7_swagger_docs_1 = require("../../../../swagger/e7-swagger-docs");
let RepairBayController = class RepairBayController {
    constructor(systemManagerService, htmlGeneratorService) {
        this.systemManagerService = systemManagerService;
        this.htmlGeneratorService = htmlGeneratorService;
    }
    async getRepairBay(damagedSystem) {
        const allSystemsData = this.systemManagerService.getAllSystemsData();
        if (!(damagedSystem in allSystemsData)) {
            throw new common_1.HttpException(`Invalid damaged system: ${damagedSystem}`, common_1.HttpStatus.BAD_REQUEST);
        }
        const systemKey = damagedSystem;
        const systemCode = this.systemManagerService.getSystemCode(systemKey);
        return this.htmlGeneratorService.generateRepairBayHtml(systemCode);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiQuery)({
        name: 'damaged_system',
        description: ((_d = (_c = (_b = (_a = e7_swagger_docs_1.e7SwaggerDocs['/repair-bay']) === null || _a === void 0 ? void 0 : _a.get) === null || _b === void 0 ? void 0 : _b.parameters) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.description) || 'Descripción no disponible',
        required: ((_h = (_g = (_f = (_e = e7_swagger_docs_1.e7SwaggerDocs['/repair-bay']) === null || _e === void 0 ? void 0 : _e.get) === null || _f === void 0 ? void 0 : _f.parameters) === null || _g === void 0 ? void 0 : _g[0]) === null || _h === void 0 ? void 0 : _h.required) || false,
        type: ((_o = (_m = (_l = (_k = (_j = e7_swagger_docs_1.e7SwaggerDocs['/repair-bay']) === null || _j === void 0 ? void 0 : _j.get) === null || _k === void 0 ? void 0 : _k.parameters) === null || _l === void 0 ? void 0 : _l[0]) === null || _m === void 0 ? void 0 : _m.schema) === null || _o === void 0 ? void 0 : _o.type) || 'string',
        example: ((_t = (_s = (_r = (_q = (_p = e7_swagger_docs_1.e7SwaggerDocs['/repair-bay']) === null || _p === void 0 ? void 0 : _p.get) === null || _q === void 0 ? void 0 : _q.parameters) === null || _r === void 0 ? void 0 : _r[0]) === null || _s === void 0 ? void 0 : _s.schema) === null || _t === void 0 ? void 0 : _t.example) || 'example',
    }),
    (0, swagger_1.ApiResponse)(e7_swagger_docs_1.e7SwaggerDocs['/repair-bay'].get.responses[200]),
    (0, swagger_1.ApiResponse)(e7_swagger_docs_1.e7SwaggerDocs['/repair-bay'].get.responses[400]),
    __param(0, (0, common_1.Query)('damaged_system')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RepairBayController.prototype, "getRepairBay", null);
RepairBayController = __decorate([
    (0, swagger_1.ApiTags)('Nave-a-la-deriva'),
    (0, common_1.Controller)('repair-bay'),
    __metadata("design:paramtypes", [system_manager_service_1.SystemManagerService,
        html_generator_service_1.HtmlGeneratorService])
], RepairBayController);
exports.RepairBayController = RepairBayController;
//# sourceMappingURL=repair-bay.controller.js.map