# submelon.dev

## Deploying Using Docker

The Dockerfile works via a fresh clone, no pre-build or npm install is needed. It can be tagged as follows:

```
docker build -t registry.digitalocean.com/submelon-tech/submelon.tech:1.0.0 .
```

Or if using M1/ARM,

```
docker buildx build --platform linux/amd64 --push -t registry.digitalocean.com/submelon-tech/submelon.tech:1.0.0 .
```

(Reference authenticating to use DigitalOcean's Container Registry below.)

If the build fails in error as a result of the image, the base gatsby images can be rebuilt. (The gatsby images as exist on Dockerhub do not work.) To rebuild those images, run the following commands:

```
cd ..
git clone https://github.com/gatsbyjs/gatsby-docker
cd gatsby-docker
docker build -t gatsbyjs/gatsby:onbuild -f Dockerfile.onbuild .
docker build -t gatsbyjs/gatsby:latest -f Dockerfile .
```

Or if using M1/ARM,

```
cd ..
git clone https://github.com/gatsbyjs/gatsby-docker
cd gatsby-docker
docker buildx build --platform linux/amd64 -t gatsbyjs/gatsby:onbuild -f Dockerfile.onbuild .
docker buildx build --platform linux/amd64 -t gatsbyjs/gatsby:latest -f Dockerfile .
```

And then attempt rebuild of the submelon.tech image.

### Authenticating with DO

Install `doctl`. Create an access token via DO's web interface to authenticate with the registry, and connect docker:

```
doctl auth init
doctl registry login
```

### DO K8s Deployment

To access the DO k8s cluster, save the config. It will automatically switch to use this context:

```
doctl k8s cluster cfg save k8s-1-13-1-do-2-nyc1-1547908941746
```

Then to switch to use this context in the future:

```
kubectl config use-context do-nyc1-k8s-1-13-1-do-2-nyc1-1547908941746
```

Make version/environment changes to deployment config file, and apply:

```
kubectl apply -f kubernetes/deployment.yaml
```