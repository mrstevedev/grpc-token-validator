import { pino } from "pino";

const transport = pino.transport({
  target: "pino-pretty",
  options: { destination: 1 },
});

pino(transport);

export const AppLogger = pino(transport);
