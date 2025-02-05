export interface SwaggerResponse {
    status: number;
    description: string;
    schema?: {
        type: string;
        properties?: Record<string, any>;
        example?: any;
    };
}
export interface SwaggerParameter {
    name: string;
    in: string;
    required: boolean;
    description: string;
    schema?: {
        type: string;
        example?: any;
    };
}
export interface SwaggerEndpoint {
    summary: string;
    description: string;
    parameters?: SwaggerParameter[];
    responses: Record<number, SwaggerResponse>;
}
export type SwaggerDocs = Record<string, Record<string, SwaggerEndpoint>>;
