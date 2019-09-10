const winston = require('winston');

const winstonOptions = {
  debugFile: {
    level: 'debug',
    filename: `./debug.log`,
    handleExceptions: true,
    json: false,
    maxsize: 52428800, // 5MB
    maxFiles: 5,
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.printf(log => {
        return `${log.timestamp} [${log.level}] ${log.message}`;
      })
    ),
  },
  errorFile: {
    level: 'error',
    filename: `./error.log`,
    handleExceptions: true,
    json: false,
    maxsize: 52428800, // 5MB
    maxFiles: 5,
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.printf(log => {
        return `${log.timestamp} [${log.level}] ${log.message}`;
      })
    ),
  },
  infoFile: {
    level: 'info',
    filename: `./info.log`,
    handleExceptions: true,
    json: false,
    maxsize: 52428800, // 5MB
    maxFiles: 5,
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.printf(log => {
        return `${log.timestamp} [${log.level}] ${log.message}`;
      })
    ),
  },
  console: {
    level: 'info',
    handleExceptions: true,
    json: false,
    colorize: true,
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.timestamp(),
      winston.format.printf(log => {
        return `${log.timestamp} [${log.level}] ${log.message}`;
      })
    ),
  },
};

module.exports.logger = winston.createLogger({
    transports: [
        new winston.transports.File(winstonOptions.debugFile),
        new winston.transports.File(winstonOptions.infoFile),
        new winston.transports.File(winstonOptions.errorFile),
        new winston.transports.Console(winstonOptions.console),
    ]
});