init:
	@make up
	@make composer
	@make fresh
	@make npm
	@make build
up:
	docker-compose up -d
stop:
	docker-compose stop
fresh:
	docker-compose exec web php artisan migrate:fresh --seed
sql:
	docker-compose exec db bash -c 'mysql -u user -ppassword chat'
composer:
	docker-compose exec web composer install
npm:
	docker-compose exec web npm install
build:
	docker-compose exec web npm run build