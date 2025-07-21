import logger from './logger.js';
import morgan from 'morgan';

// Custom logging using morgan's 'stream' and 'tokens'
app.use(morgan((tokens, req, res) => {
  const log = {
    method: tokens.method(req, res),
    url: tokens.url(req, res),
    status: parseInt(tokens.status(req, res)),
    responseTime: tokens['response-time'](req, res)
  };
  logger.info(JSON.stringify(log));
  return null; // prevent default logging
}));