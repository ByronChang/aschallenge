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
exports.TeapotController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const e7_swagger_docs_1 = require("../../../../swagger/e7-swagger-docs");
let TeapotController = class TeapotController {
    handleTeapot() {
        throw new common_1.HttpException("I'm a teapot", common_1.HttpStatus.I_AM_A_TEAPOT);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiResponse)(e7_swagger_docs_1.e7SwaggerDocs['/teapot'].post.responses[418]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TeapotController.prototype, "handleTeapot", null);
TeapotController = __decorate([
    (0, swagger_1.ApiTags)('Nave-a-la-deriva'),
    (0, common_1.Controller)('teapot')
], TeapotController);
exports.TeapotController = TeapotController;
//# sourceMappingURL=teapot.controller.js.map