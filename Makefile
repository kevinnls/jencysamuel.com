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
		--name $(PODNAME)_wp \
		--volume $(PODNAME)-wordpress:/var/www/html \
		--volume ./src/:/var/www/html/wp-content/themes/twentytwenty-two-child:ro,U,Z \
		--env-file wordpress.env \
		docker.io/library/wordpress:latest

database: pod
	podman run -d --rm \
		--pod $(PODNAME) \
		--name $(PODNAME)_db \
		--volume $(PODNAME)-database:/var/lib/mysql \
		--env-file database.env \
		docker.io/library/mysql:latest

