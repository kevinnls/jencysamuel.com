PODNAME = js-com
up: wordpress

down:
	podman pod stop $(PODNAME)
	podman pod rm $(PODNAME)

pod:
	podman pod create \
		--publish=8769:80 \
		--replace=true \
		$(PODNAME)

wordpress: database
	podman run -d --rm \
		--pod $(PODNAME) \
		--volume $(PODNAME)-wordpress:/var/www/html \
		--volume ./src/:/var/www/html/wp-content/themes/js-com:ro,U,Z \
		--env-file wordpress.env \
		docker.io/library/wordpress:latest

database: pod
	podman run -d --rm \
		--pod $(PODNAME) \
		--volume $(PODNAME)-database:/var/lib/mysql \
		--env-file database.env \
		docker.io/library/mysql:latest

