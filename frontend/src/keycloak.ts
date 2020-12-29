import Keycloak from 'keycloak-js';

export const keycloakConfig = Keycloak({
    url: process.env.REACT_APP_KEYCLOAK_URL,
    realm: String(process.env.REACT_APP_KEYCLOAK_REALM),
    clientId: String(process.env.REACT_APP_KEYCLOAK_CLIENT_ID)
});

export const keycloakProviderInitConfig: Keycloak.KeycloakInitOptions = {
    onLoad: 'check-sso'
}