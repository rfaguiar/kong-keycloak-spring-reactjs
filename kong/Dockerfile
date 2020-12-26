FROM kong:2.2-alpine

LABEL description="Alpine + Kong 2.2 + kong-oidc plugin"
LABEL doc="https://github.com/d4rkstar/kong-konga-keycloak"

USER root
RUN apk update && apk add git unzip luarocks
RUN luarocks install kong-oidc

USER kong