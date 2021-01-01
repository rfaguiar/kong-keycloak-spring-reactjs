# defaul shell
SHELL = /bin/bash

# Rule "help"
.PHONY: help
.SILENT: help
help:
	echo "Use make [rule]"
	echo "Rules:"
	echo "k-start		         - start minikube machine"
	echo "k-stop		         - stop minikube machine"

product-build:
	cd ./product-backend/ && ./mvnw package;

compose-build: product-build
	docker-compose build;

compose-up: compose-down compose-build
	docker-compose up;

compose-down:
	docker-compose down;

compose-logs:
	docker-compose logs -f -t;

k-setup:
	minikube -p minikube start --cpus 2 --memory=8192 --kubernetes-version=v1.20.0; \
	minikube -p minikube addons enable ingress; \
	minikube -p minikube addons enable metrics-server; \
	kubectl create namespace stock; \
	kubectl config set-context $$(kubectl config current-context) --namespace=stock;

k-create-namespace:
	kubectl create namespace stock;

k-delete-namespace:
	kubectl delete namespace stock;

k-dashboard:
	minikube -p minikube dashboard;

k-start:
	minikube -p minikube start; \
	kubectl config set-context $$(kubectl config current-context) --namespace=stock;

k-ip:
	minikube -p minikube ip

k-stop:
	minikube -p minikube stop;

k-getall:
	kubectl -n stock get deploy,rc,rs,pod,svc,ing;

k-product-build:
	eval $$(minikube docker-env); \
	docker build --force-rm -t product-backend:1.0 ./product-backend/;

k-kong-build:
	eval $$(minikube docker-env); \
	docker build --force-rm -t kong-oidc:1.0 ./kong/;

k-product-deploy:
	kubectl apply -f kubernetes/product-backend.yml

k-kong-deploy:
	kubectl apply -f kubernetes/kong-database.yml; \
	kubectl apply -f kubernetes/kong.yml
