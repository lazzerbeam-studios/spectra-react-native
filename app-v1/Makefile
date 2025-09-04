# openapi
openapi:
	sh openapi-generator/openapi-generator.sh

# expo start
expo-start-dev:
	cp .env.dev .env
	npx expo start -c

expo-start-stag:
	cp .env.stag .env
	npx expo start -c

# expo export
expo-export-stag:
	cp .env.stag .env
	npx expo export --platform web

# deploy
deploy-delete-stag:
	node deploy-gcp/deploy-delete.js --env=stag

deploy-upload-stag:
	node deploy-gcp/deploy-upload.js --env=stag

deploy-stag:
	$(MAKE) expo-export-stag
	$(MAKE) deploy-delete-stag
	$(MAKE) deploy-upload-stag
