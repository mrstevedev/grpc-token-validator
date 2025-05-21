"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppLogger = void 0;
const pino_1 = require("pino");
const transport = pino_1.pino.transport({
    target: "pino-pretty",
    options: { destination: 1 },
});
(0, pino_1.pino)(transport);
exports.AppLogger = (0, pino_1.pino)(transport);
