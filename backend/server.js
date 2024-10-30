// Import necessary modules and dependencies
const app = require('./src/app');
const logger = require('./src/middleware/winston.logger');
// const cors = require('cors');
const authRouter = require('./src/routes/auth.routes')
require('dotenv').config();


app.use('/api/v1', authRouter);

const jwtSecretKey = process.env.JWT_SECRET_KEY;


// Start the application server on the port specified in .env
const port = process.env.APP_PORT || 4000; // Default to port 3000 if APP_PORT is not defined
app.listen(port, () => {
  logger.info(`App server running on: ${process.env.APP_BASE_URL || `http://localhost:${port}`}`);
});
