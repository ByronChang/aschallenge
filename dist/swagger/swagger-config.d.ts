import { INestApplication } from '@nestjs/common';
export declare function setupSwagger(app: INestApplication): void;
export declare const e7SwaggerDocs: {
    '/status': {
        get: {
            summary: string;
            description: string;
            responses: {
                200: {
                    description: string;
                    content: {
                        'application/json': {
                            example: {
                                damaged_system: string;
                            };
                        };
                    };
                };
                500: {
                    description: string;
                    content: {
                        'application/json': {
                            example: {
                                message: string;
                            };
                        };
                    };
                };
            };
        };
    };
    '/repair-bay': {
        get: {
            summary: string;
            description: string;
            parameters: {
                name: string;
                in: string;
                required: boolean;
                description: string;
                schema: {
                    type: string;
                    example: string;
                };
            }[];
            responses: {
                200: {
                    description: string;
                    content: {
                        'text/html': {
                            example: string;
                        };
                    };
                };
                400: {
                    description: string;
                    content: {
                        'application/json': {
                            example: {
                                message: string;
                            };
                        };
                    };
                };
            };
        };
    };
    '/teapot': {
        post: {
            summary: string;
            description: string;
            responses: {
                418: {
                    description: string;
                    content: {
                        'application/json': {
                            example: {
                                message: string;
                            };
                        };
                    };
                };
            };
        };
    };
};
export declare const e9SwaggerDocs: {
    '/diagram': {
        get: {
            summary: string;
            description: string;
            parameters: {
                name: string;
                in: string;
                required: boolean;
                description: string;
                schema: {
                    type: string;
                    example: number;
                };
            }[];
            responses: {
                200: {
                    description: string;
                    content: {
                        'application/json': {
                            example: {
                                specific_volume_liquid: number;
                                specific_volume_vapor: number;
                            };
                        };
                    };
                };
                400: {
                    description: string;
                    content: {
                        'application/json': {
                            example: {
                                message: string;
                            };
                        };
                    };
                };
            };
        };
    };
};
