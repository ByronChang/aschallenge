import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';
import { E7Module } from '../app/exercises/e7/e7.module';
import { E9Module } from '../app/exercises/e9/e9.module';

export function setupSwagger(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('Altscore Challenge - Nave a la Deriva y Datos Corruptos')
    .setDescription('Documentación de API para los ejercicios e7 y e9 del Altscore Challenge')
    .setVersion('1.0')
    .build();

   const document = SwaggerModule.createDocument(app, config, {
     extraModels: [],
     include: [E7Module, E9Module],
   });
  SwaggerModule.setup('docs', app, document);
}

export const e7SwaggerDocs = {
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

export const e9SwaggerDocs = {
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











// import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
// import { INestApplication } from '@nestjs/common';
// import { E7Module } from './app/exercises/e7/e7.module';
// import { E9Module } from './app/exercises/e9/e9.module';

// export function setupSwagger(app: INestApplication) {
//   const config = new DocumentBuilder()
//     .setTitle('Altscore Challenge - Nave a la Deriva y Datos Corruptos')
//     .setDescription('Documentación de API para los endpoints de E7 y E9.')
//     .setVersion('1.0')
//     .build();

//   const document = SwaggerModule.createDocument(app, config, {
//     extraModels: [], // Modelos adicionales si son necesarios
//     include: [E7Module, E9Module], // Limitar la documentación a estos módulos
//   });

//   SwaggerModule.setup('api', app, document);
// }

// // E7 Endpoints Documentation
// export const e7SwaggerDocs = {
//   '/status': {
//     get: {
//       summary: 'Obtener el estado del sistema dañado',
//       description: 'Devuelve el sistema dañado actual.',
//       responses: {
//         200: {
//           description: 'Sistema dañado recuperado con éxito.',
//           content: {
//             'application/json': {
//               example: { damaged_system: 'navigation' },
//             },
//           },
//         },
//         500: {
//           description: 'No se encontró un sistema dañado.',
//         },
//       },
//     },
//   },
//   '/repair-bay': {
//     get: {
//       summary: 'Generar HTML de la bahía de reparación',
//       description:
//         'Genera un HTML basado en el sistema dañado proporcionado como parámetro.',
//       requestBody: {
//         required: true,
//         content: {
//           'application/json': {
//             schema: {
//               type: 'object',
//               properties: {
//                 damaged_system: {
//                   type: 'string',
//                   example: 'navigation',
//                   description: 'El sistema dañado que necesita reparación.',
//                 },
//               },
//             },
//           },
//         },
//       },
//       responses: {
//         200: {
//           description: 'HTML generado con éxito.',
//           content: {
//             'text/html': {
//               example: `
//                 <!DOCTYPE html>
//                 <html>
//                   <head><title>Repair</title></head>
//                   <body>
//                     <div>CODE123</div>
//                   </body>
//                 </html>
//               `,
//             },
//           },
//         },
//         400: {
//           description: 'Sistema dañado inválido o faltante.',
//         },
//       },
//     },
//   },
//   '/teapot': {
//     post: {
//       summary: 'Respuesta de Teapot',
//       description: 'Responde como un teapot según RFC 2324.',
//       responses: {
//         418: {
//           description: "I'm a teapot.",
//         },
//       },
//     },
//   },
// };

// // E9 Endpoints Documentation
// export const e9SwaggerDocs = {
//   '/diagram': {
//     get: {
//       summary: 'Obtener diagrama de cambio de fase',
//       description:
//         'Devuelve los volúmenes específicos líquido y vapor para una presión dada.',
//       parameters: [
//         {
//           name: 'pressure',
//           in: 'query',
//           required: true,
//           description: 'Presión en MPa.',
//           schema: { type: 'number', example: 10 },
//         },
//       ],
//       responses: {
//         200: {
//           description: 'Volúmenes específicos calculados con éxito.',
//           content: {
//             'application/json': {
//               example: {
//                 specific_volume_liquid: 0.0035,
//                 specific_volume_vapor: 0.0035,
//               },
//             },
//           },
//         },
//         400: {
//           description: 'Parámetro de presión inválido o faltante.',
//         },
//       },
//     },
//   },
// };