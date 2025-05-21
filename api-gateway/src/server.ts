import { AppLogger } from "@/package/logger/AppLogger";
import { application } from "@/app";
import { PORT } from "./constants";

function main() {
    const server = application.listen(PORT, () => {
        AppLogger.info(`Server running on port ${PORT}`);
    });

    return server;
}

main();
