export interface Config {
    AIInstrumentationKey: string;
}

const buildConfig = (): Config => {
    if(process.env.NODE_ENV === "development") {
        return require("./config.dev").default;
    } else {
        return require("./config.prod").default;
    }
}
const config = buildConfig();

export default config;

