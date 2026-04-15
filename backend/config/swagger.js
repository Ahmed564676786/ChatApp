// config/swagger.js

const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Chat API",
      version: "1.0.0",
      description: "Chat App API Docs"
    }
  },

  // 🔥 IMPORTANT (path fix)
  apis: ["./routes/*.js"]
};

const swaggerSpec = swaggerJSDoc(options);

