"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.e7SwaggerDocs = void 0;
exports.e7SwaggerDocs = {
    '/status': {
        get: {
            summary: 'Obtener el estado del sistema dañado',
            description: 'Devuelve el sistema actualmente dañado en la nave.',
            responses: {
                200: {
                    status: 200,
                    description: 'Sistema dañado obtenido correctamente.',
                    schema: {
                        type: 'object',
                        properties: {
                            damaged_system: { type: 'string', example: 'navigation' },
                        },
                    },
                },
                500: {
                    status: 500,
                    description: 'No se encontró un sistema dañado.',
                    schema: {
                        type: 'object',
                        properties: {
                            message: { type: 'string', example: 'No damaged system found.' },
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
                    description: 'El sistema dañado para el cual se generará el HTML. (Obtenido del enpoint Status) \n El cual puede ser: "navigation", "engines", etc.'
                },
            ],
            responses: {
                200: {
                    status: 200,
                    description: 'HTML generado correctamente.',
                    schema: {
                        type: 'string',
                        example: '<!DOCTYPE html><html><head><title>Repair</title></head><body><div>CODE123</div></body></html>',
                    },
                },
                400: {
                    status: 400,
                    description: 'Sistema dañado inválido.',
                    schema: {
                        type: 'object',
                        properties: {
                            message: { type: 'string', example: 'Invalid damaged system: invalid_system' },
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
                    status: 418,
                    description: 'Devuelve una respuesta con el código de estado 418 (I\'m a teapot).',
                    schema: {
                        type: 'object',
                        properties: {
                            message: { type: 'string', example: "I'm a teapot" },
                        },
                    },
                },
            },
        },
    },
};
//# sourceMappingURL=e7-swagger-docs.js.map