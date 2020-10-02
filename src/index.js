import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";

import App from "./App";
import {Domain, ClientId, RedirectUri} from "./auth_config.json";

ReactDOM.render(

    <Auth0Provider
        domain={Domain}
        clientId={ClientId}
        redirectUri={RedirectUri}>
        <App />
    </Auth0Provider>,
    document.getElementById('root')
  );