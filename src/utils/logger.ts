import winston from "winston";

const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp({ format: "YYYY-MM-DD hh:mm:ss" }),
    winston.format.align(),
    winston.format.simple(),
    winston.format.printf(info => {
      const { timestamp, level, message, ...rest } = info;
      return `{"timestamp": "[${timestamp}]", "level": "${level}", "message": "${message}", ${JSON.stringify(
        rest
      )}}`;
    })
  ),
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error-logs.json`
    // - Write all logs with importance level of `info` `info-logs.json`
    //
    new winston.transports.File({
      filename: "error-logs.json",
      level: "error"
    }),
    new winston.transports.File({ filename: "info-logs.json", level: "info" })
  ]
});

//
// If we're not in production then log to the `console` with the format:
//
if (process.env.NODE_ENV !== "production") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize({ all: true }),
        winston.format.simple()
      )
    })
  );
}
export default logger;
