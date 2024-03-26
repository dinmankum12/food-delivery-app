const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const pricingController = require('./controllers/pricingController');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/pricing', pricingController);

// Swagger Documentation
const swaggerDocument = YAML.load('./swagger.yaml');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
