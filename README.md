# kong-keycloak-spring-reactjs
Project Frontend Reactjs and Gateway Kong and OAuth Server SSO Keycloack and backend Spring

# Kong in Docker Compose

This is the official Docker Compose template for [Kong][kong-site-url].

# What is Kong?

You can find the official Docker distribution for Kong at [https://hub.docker.com/_/kong](https://hub.docker.com/_/kong).

# How to use this template

This Docker Compose template provisions a Kong container with a Postgres database, plus a nginx load-balancer. After running the template, the `nginx-lb` load-balancer will be the entrypoint to Kong.

To run this template execute:

```shell
$ docker-compose up
```

To scale Kong (ie, to three instances) execute:

```shell
$ docker-compose scale kong=3
```

Kong will be available through the `nginx-lb` instance on port `8000`, and `8001`. You can customize the template with your own environment variables or datastore configuration.

Kong's documentation can be found at [https://docs.konghq.com/][kong-docs-url].

## Issues

If you have any problems with or questions about this image, please contact us through a [GitHub issue][github-new-issue].

## Contributing

You are invited to contribute new features, fixes, or updates, large or small; we are always thrilled to receive pull requests, and do our best to process them as fast as we can.

Before you start to code, we recommend discussing your plans through a [GitHub issue][github-new-issue], especially for more ambitious contributions. This gives other contributors a chance to point you in the right direction, give you feedback on your design, and help you find out if someone else is working on the same thing.

[kong-site-url]: https://konghq.com/
[kong-docs-url]: https://docs.konghq.com/
[github-new-issue]: https://github.com/Kong/docker-kong/issues/new

### Reference: 
https://www.jerney.io/secure-apis-kong-keycloak-1  
https://www.jerney.io/secure-apis-kong-keycloak-2  
https://cagline.medium.com/authenticate-and-authorize-react-routes-component-with-keycloak-666e85662636  

OIDC plugin:  
name=oidc 
client_id=kong 
client_secret=f1e755b7-d7f9-458c-af51-3767c803b118  
discovery=http://172.21.0.1:8180/auth/realms/kong/.well-known/openid-configuration  
introspection_endpoint=http://172.21.0.1:8180/auth/realms/kong/protocol/openid-connect/token/introspect  

* create config plugin oidc for integrate with keycloack instrospect endpoint  
``` shell
$ curl -s -X POST http://localhost:8001/plugins \
  -d name=oidc \
  -d config.client_id=kong \
  -d config.client_secret=f1e755b7-d7f9-458c-af51-3767c803b118 \
  -d config.discovery=http://172.21.0.1:8180/auth/realms/kong/.well-known/openid-configuration \
  -d config.introspection_endpoint=http://172.21.0.1:8180/auth/realms/kong/protocol/openid-connect/token/introspect \
  | python -mjson.tool  
```
