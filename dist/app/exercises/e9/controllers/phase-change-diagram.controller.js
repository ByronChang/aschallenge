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
exports.DiagramController = void 0;
const common_1 = require("@nestjs/common");
const phase_change_service_1 = require("../services/phase-change.service");
const swagger_1 = require("@nestjs/swagger");
const e9_swagger_docs_1 = require("../../../../swagger/e9-swagger-docs");
let DiagramController = class DiagramController {
    constructor(phaseChangeService) {
        this.phaseChangeService = phaseChangeService;
    }
    async getDiagram(pressure) {
        if (!pressure) {
            throw new common_1.HttpException('The "pressure" parameter is required.', common_1.HttpStatus.BAD_REQUEST);
        }
        const pressureValue = parseFloat(pressure);
        if (isNaN(pressureValue)) {
            throw new common_1.HttpException('The "pressure" parameter must be a valid number.', common_1.HttpStatus.BAD_REQUEST);
        }
        try {
            return this.phaseChangeService.calculateSpecificVolumes(pressureValue);
        }
        catch (error) {
            const err = error;
            throw new common_1.HttpException(err.message || 'An error occurred while calculating.', common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiQuery)({
        name: 'pressure',
        description: ((_d = (_c = (_b = (_a = e9_swagger_docs_1.e9SwaggerDocs['/diagram']) === null || _a === void 0 ? void 0 : _a.get) === null || _b === void 0 ? void 0 : _b.parameters) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.description) || 'Descripción no disponible',
        required: ((_h = (_g = (_f = (_e = e9_swagger_docs_1.e9SwaggerDocs['/diagram']) === null || _e === void 0 ? void 0 : _e.get) === null || _f === void 0 ? void 0 : _f.parameters) === null || _g === void 0 ? void 0 : _g[0]) === null || _h === void 0 ? void 0 : _h.required) || false,
        type: ((_o = (_m = (_l = (_k = (_j = e9_swagger_docs_1.e9SwaggerDocs['/diagram']) === null || _j === void 0 ? void 0 : _j.get) === null || _k === void 0 ? void 0 : _k.parameters) === null || _l === void 0 ? void 0 : _l[0]) === null || _m === void 0 ? void 0 : _m.schema) === null || _o === void 0 ? void 0 : _o.type) || 'string',
        example: ((_t = (_s = (_r = (_q = (_p = e9_swagger_docs_1.e9SwaggerDocs['/diagram']) === null || _p === void 0 ? void 0 : _p.get) === null || _q === void 0 ? void 0 : _q.parameters) === null || _r === void 0 ? void 0 : _r[0]) === null || _s === void 0 ? void 0 : _s.schema) === null || _t === void 0 ? void 0 : _t.example) || 'example',
    }),
    (0, swagger_1.ApiResponse)(e9_swagger_docs_1.e9SwaggerDocs['/diagram'].get.responses[200]),
    (0, swagger_1.ApiResponse)(e9_swagger_docs_1.e9SwaggerDocs['/diagram'].get.responses[400]),
    __param(0, (0, common_1.Query)('pressure')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DiagramController.prototype, "getDiagram", null);
DiagramController = __decorate([
    (0, swagger_1.ApiTags)('Cambio-de-fase'),
    (0, common_1.Controller)('diagram'),
    __metadata("design:paramtypes", [phase_change_service_1.PhaseChangeService])
], DiagramController);
exports.DiagramController = DiagramController;
//# sourceMappingURL=phase-change-diagram.controller.js.map