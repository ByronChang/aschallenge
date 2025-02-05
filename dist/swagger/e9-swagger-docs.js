"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.e9SwaggerDocs = void 0;
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
                    status: 200,
                    description: 'Volúmenes específicos calculados correctamente.',
                    schema: {
                        type: 'object',
                        properties: {
                            specific_volume_liquid: { type: 'number', example: 0.0035 },
                            specific_volume_vapor: { type: 'number', example: 0.0035 },
                        },
                    },
                },
                400: {
                    status: 400,
                    description: 'Parámetro de presión inválido o faltante.',
                    schema: {
                        type: 'object',
                        properties: {
                            message: { type: 'object', example: {
                                    "statusCode": 400,
                                    "message": "Pressure out of range. Must be between 1 MPa and 10 MPa. Received: X"
                                } },
                        },
                    },
                },
            },
        },
    },
};
//# sourceMappingURL=e9-swagger-docs.js.map