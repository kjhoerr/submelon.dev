# submelon.dev

## Deploying

### Using Docker

The Dockerfile works via a fresh clone, no pre-build is needed. It can be tagged as follows:

```
docker build -t registry.digitalocean.com/submelon-tech/submelon.tech:latest .
```

Or if using M1/ARM,

```
docker buildx build --platform linux/amd64 -t registry.digitalocean.com/submelon-tech/submelon.tech:latest .
```

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
