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
	docker-compose exec -T web php artisan migrate:fresh --seed
sql:
	docker-compose exec db bash -c 'mysql -u user -ppassword chat'
composer:
	docker-compose exec -T web composer install
npm:
	docker-compose exec -T web npm install
build:
	docker-compose exec -T web npm run build
watch:
	docker-compose exec web npm run watch
eslint:
	docker-compose exec -T web npx eslint './resources/ts/**/*.{ts,tsx}'
prettier:
	docker-compose exec web npx prettier --write './resources/**/*.{ts,tsx}'
phpcs:
	docker-compose exec -T web vendor/bin/phpcs --standard=phpcs.xml .
phpcbf:
	docker-compose exec web vendor/bin/phpcbf --standard=phpcs.xml .