"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.e9SwaggerDocs = exports.e7SwaggerDocs = exports.setupSwagger = void 0;
const swagger_1 = require("@nestjs/swagger");
const e7_module_1 = require("../app/exercises/e7/e7.module");
const e9_module_1 = require("../app/exercises/e9/e9.module");
function setupSwagger(app) {
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Altscore Challenge - Nave a la Deriva y Datos Corruptos')
        .setDescription('Documentación de API para los ejercicios e7 y e9 del Altscore Challenge')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config, {
        extraModels: [],
        include: [e7_module_1.E7Module, e9_module_1.E9Module],
    });
    swagger_1.SwaggerModule.setup('docs', app, document);
}
exports.setupSwagger = setupSwagger;
exports.e7SwaggerDocs = {
    '/status': {
        get: {
            summary: 'Obtener el estado del sistema dañado',
            description: 'Devuelve el sistema actualmente dañado en la nave.',
            responses: {
                200: {
                    description: 'Sistema dañado obtenido correctamente.',
                    content: {
                        'application/json': {
                            example: { damaged_system: 'navigation' },
                        },
                    },
                },
                500: {
                    description: 'No se encontró un sistema dañado.',
                    content: {
                        'application/json': {
                            example: { message: 'No damaged system found.' },
                        },
                    },
                },
            },
        },
    },
    '/repair-bay': {
        get: {
            summary: 'Generar el HTML para el sistema dañado',
            description: 'Genera el código HTML necesario para reparar un sistema dañado proporcionado.',
            parameters: [
                {
                    name: 'damaged_system',
                    in: 'query',
                    required: true,
                    description: 'El sistema dañado para el cual se generará el HTML.',
                    schema: { type: 'string', example: 'navigation' },
                },
            ],
            responses: {
                200: {
                    description: 'HTML generado correctamente.',
                    content: {
                        'text/html': {
                            example: '<!DOCTYPE html><html><head><title>Repair</title></head><body><div>CODE123</div></body></html>',
                        },
                    },
                },
                400: {
                    description: 'Sistema dañado inválido.',
                    content: {
                        'application/json': {
                            example: { message: 'Invalid damaged system: unknown_system' },
                        },
                    },
                },
            },
        },
    },
    '/teapot': {
        post: {
            summary: 'Responder como un teapot',
            description: 'Devuelve una respuesta con el código de estado 418 (I\'m a teapot).',
            responses: {
                418: {
                    description: 'Soy un teapot.',
                    content: {
                        'application/json': {
                            example: { message: "I'm a teapot" },
                        },
                    },
                },
            },
        },
    },
};
exports.e9SwaggerDocs = {
    '/diagram': {
        get: {
            summary: 'Obtener diagrama de cambio de fase',
            description: 'Calcula y devuelve los volúmenes específicos para una presión dada.',
            parameters: [
                {
                    name: 'pressure',
                    in: 'query',
                    required: true,
                    description: 'Presión en MPa.',
                    schema: { type: 'number', example: 10 },
                },
            ],
            responses: {
                200: {
                    description: 'Volúmenes específicos calculados correctamente.',
                    content: {
                        'application/json': {
                            example: {
                                specific_volume_liquid: 0.0035,
                                specific_volume_vapor: 0.0035,
                            },
                        },
                    },
                },
                400: {
                    description: 'Parámetro de presión inválido o faltante.',
                    content: {
                        'application/json': {
                            example: { message: 'Pressure out of range.' },
                        },
                    },
                },
            },
        },
    },
};
//# sourceMappingURL=swagger-config.js.map