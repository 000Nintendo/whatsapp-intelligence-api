const dotenv = require("dotenv");
dotenv.config();

const morgan = require('morgan')
const mongo = require("./mongo");
const express = require("express");
const { apiRoutes } = require("./routes/routes");
const { inputsValidator } = require("./middlewares/validator");
const cors = require("cors");
// const { loggingPlugin } = require("./graphql/plugins/loggingPlugin");

const app = express();

/**
 * Setup helmet middleware for disabling
 * security vulnerabilities of express framework
 */

const isDevelopment = process.env.NODE_ENV === 'development'

// app.use(
//   helmet({
//     contentSecurityPolicy: !isDevelopment,
//     crossOriginEmbedderPolicy: !isDevelopment,
//   })
// );

// const whitelist = ["http://localhost:3000"];

// const corsOptions: CorsOptions = {
//   origin: (origin: string | undefined, callback: CallableFunction) => {
//     if (whitelist.indexOf(origin as string) !== -1) {
//       callback(null, true);
//     } else {
//       callback(
//         new Error(
//           "Using strict cors policy, requst to resources is failed due to cors error!"
//         )
//       );
//     }
//   },
// };

app.use(cors());


app.use(morgan('common'))

app.use(
  express.json({
    limit: "1mb",
  })
);

app.use(
  express.urlencoded({
    extended: true,
    limit: "5mb",
  })
);

app.use("/api", apiRoutes);

app.use(inputsValidator);

module.exports.mongo = mongo;
module.exports.app = app;
