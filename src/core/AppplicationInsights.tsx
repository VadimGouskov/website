import {ApplicationInsights} from "@microsoft/applicationinsights-web";
import {ReactPlugin} from "@microsoft/applicationinsights-react-js";
import {createBrowserHistory} from "history";
import config from "../../config/config";

const browserHistory = createBrowserHistory({basename: ""});
const reactPlugin = new ReactPlugin();
const appInsights = new ApplicationInsights({
    config: {
        instrumentationKey: config.AIInstrumentationKey,
        extensions: [reactPlugin],
        extensionConfig: {
            [reactPlugin.identifier]: {history: browserHistory},
        },
    },
});
appInsights.loadAppInsights();
export {reactPlugin, appInsights};
