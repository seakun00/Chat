init:
	docker-compose up -d
	docker-compose exec web composer install
up:
	docker-compose up -d
stop:
	docker-compose stop
sql:
	docker-compose exec db bash -c 'mysql -u user -ppassword chat'