// config/swagger.js
import swaggerJSDoc from "swagger-jsdoc";
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Chat API",
      version: "1.0.0",
      description: "Chat App API Docs"
    }
  },
  apis: ["./routes/*.js"]
};

const swaggerSpec = swaggerJSDoc(options);
export default swaggerSpec;