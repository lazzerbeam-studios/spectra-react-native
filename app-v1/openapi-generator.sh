#!/bin/bash

content=$(curl -L http://localhost:8080/openapi.json)
echo $content > openapi-schema.json

# rm -rf openapi

# docker run --rm -v ${PWD}:/local openapitools/openapi-generator-cli generate -g typescript-angular -i /local/openapi-schema.json -o /local/openapi

# rm -rf src/app/openapi
# mkdir -p src/app/openapi

# cp -r openapi/api src/app/openapi/api
# cp -r openapi/model src/app/openapi/model

# cp openapi/param.ts src/app/openapi
# cp openapi/encoder.ts src/app/openapi
# cp openapi/variables.ts src/app/openapi
# cp openapi/configuration.ts src/app/openapi

# rm -rf openapi
