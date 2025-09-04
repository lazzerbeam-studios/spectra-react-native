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
