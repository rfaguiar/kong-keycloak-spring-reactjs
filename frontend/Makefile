# defaul shell
SHELL = /bin/bash

# Rule "help"
.PHONY: help
.SILENT: help
help:
	echo "Use make [rule]"
	echo "Rules:"
	echo ""
	echo "build-app 		- build application and generate docker image"
	echo "run-app			- Run application in a docker image"
	echo "logs-app			- Show tail Logs and follow application in a docker image"

build-app:
	docker build \
    --no-cache \
    -t rfaguiar/stock-frontend:latest \
    -f Dockerfile \
    .
    
run-app:
	docker run --rm --name stock-frontend --network kong-backend -p 8080:81 -d rfaguiar/stock-frontend:latest;

logs-app:
	docker logs -f -t stock-frontend

rm-app:
	docker container rm -f stock-frontend

run-all: build-app rm-app run-app logs-app