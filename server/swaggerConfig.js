import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

// Swagger definition
const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Online Dictionary API',
        version: '1.0.0',
        description: 'This is the API documentation for the Online Dictionary project',
    },
    servers: [
        {
            url: 'http://localhost:4000', // The base URL of your API
            description: 'Local server',
        },
    ],
};

// Options for the Swagger docs
const options = {
    swaggerDefinition,
    apis: ['./routes/*.js'], // Path to the API docs (your route files)
};

// Initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

export default (app) => {
    // Serve Swagger UI
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
