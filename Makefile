dockerBuild:
	docker build -t angular-app .

dockerRun:
	make dockerBuild && docker run --name CSQ -p 4200:80 -v $PWD:/app -v /app/node_modules angular-app

dockerBuildLocal:
	docker build -f Dockerfile.dev -t angular-app-local .

dockerRunLocal:
	docker run --name CSQLocal -p 4200:4200 -v $PWD:/app -v /app/node_modules angular-app-local

dockerTestRun:
	make dockerBuildLocal && make dockerRunLocal

# Phony avoids conflicts for the file named as the main command
.PHONY: dockerBuild dockerRun dockerBuildLocal dockerRunLocal dockerTestRun
