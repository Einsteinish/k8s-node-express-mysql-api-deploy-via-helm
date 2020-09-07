## Building the Docker Image

```
docker build -t node-express-api .
docker tag node-express-api:latest dockerbogo/node-express-api:<VERSION>
docker login -u dockerbogo
docker push dockerbogo/node-express-api:<VERSION> 
```

Where `<VERSION>` matches the version in package.json.
