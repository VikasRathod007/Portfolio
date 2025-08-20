# 🐳 Docker Setup for Gatsby Portfolio

This portfolio application has been successfully dockerized! Here's everything you need to know.

## 📋 Prerequisites

- Docker and Docker Compose installed
- Node.js 18+ (for local development)

## 🚀 Quick Start

### Production Mode (Recommended)

```bash
# Build and start the application
./docker.sh build
./docker.sh start

# Your portfolio will be available at http://localhost:8080
```

### Development Mode

```bash
# Start development server with hot reload
./docker.sh dev
# Available at http://localhost:8000
```

## 🛠️ Available Commands

```bash
./docker.sh build   # Build the Docker image
./docker.sh start   # Start production server
./docker.sh dev     # Start development server
./docker.sh stop    # Stop all containers
./docker.sh logs    # View logs
./docker.sh status  # Check status
./docker.sh clean   # Clean up resources
./docker.sh shell   # Open container shell
```

## 📁 Docker Files Explained

### 1. `Dockerfile` (Multi-stage)

- **Development stage**: Node.js environment for development
- **Builder stage**: Builds the Gatsby application
- **Production stage**: Nginx serving optimized static files

### 2. `Dockerfile.simple` (Current)

- Simple nginx-based setup serving pre-built files
- Faster builds, production-ready

### 3. `docker-compose.yml`

- Manages both production and development setups
- Easy port configuration and volume mounting

### 4. `.dockerignore`

- Excludes unnecessary files from Docker context
- Keeps image size small and build fast

## 🏗️ Docker Architecture

```
Host Machine (Your Computer)
├── Portfolio Code
├── Docker Engine
└── Containers
    ├── portfolio-app (Production) → :8080
    └── portfolio-dev (Development) → :8000
```

## 🔧 Advanced Usage

### Manual Docker Commands

```bash
# Build image manually
docker build -f Dockerfile.simple -t portfolio .

# Run container manually
docker run -d -p 8080:80 --name portfolio portfolio

# View container logs
docker logs portfolio

# Stop and remove container
docker stop portfolio && docker rm portfolio
```

### Using Docker Compose

```bash
# Production
docker-compose up -d

# Development
docker-compose --profile dev up

# Stop all
docker-compose down
```

## 🐛 Troubleshooting

### Port Already in Use

If port 8080 is busy, modify `docker-compose.yml`:

```yaml
ports:
  - '9090:80' # Change to any available port
```

### Build Failures

1. Ensure `public/` folder exists: `npm run build`
2. Check Docker logs: `./docker.sh logs`
3. Clean Docker cache: `docker system prune -f`

### Memory Issues

If builds fail due to memory:

```bash
# Increase Node.js memory limit
export NODE_OPTIONS="--max-old-space-size=4096"
npm run build
```

## 📊 Container Management

### Check Running Containers

```bash
docker ps
```

### View Resource Usage

```bash
docker stats
```

### Access Container Shell

```bash
./docker.sh shell
# or
docker exec -it portfolio-container sh
```

## 🚢 Deployment Options

### 1. Local Development

- Use development mode for coding
- Hot reload enabled

### 2. Production Testing

- Use production mode locally
- Tests production build

### 3. Server Deployment

```bash
# On your server
git clone <your-repo>
cd portfolio
./docker.sh build
./docker.sh start
```

### 4. Cloud Deployment

- Upload to Docker Hub: `docker push`
- Deploy on AWS, DigitalOcean, etc.
- Use container orchestration (Kubernetes, Docker Swarm)

## 🔐 Security Best Practices

1. **Regular Updates**: Keep base images updated
2. **Non-root User**: Container runs as non-root
3. **Minimal Images**: Using Alpine Linux for small footprint
4. **Security Headers**: Nginx configured with security headers

## 📈 Performance Optimizations

1. **Multi-stage Build**: Smaller production images
2. **Static Asset Caching**: 1-year cache for static files
3. **Gzip Compression**: Enabled in nginx
4. **CDN Ready**: Optimized for CDN deployment

## 🎯 What We Learned

### Docker Concepts

- **Images**: Templates for containers
- **Containers**: Running instances of images
- **Volumes**: Persistent data storage
- **Networks**: Container communication
- **Compose**: Multi-container applications

### Best Practices

- Use multi-stage builds for optimization
- Keep images small with `.dockerignore`
- Use specific base image versions
- Implement health checks
- Follow security guidelines

## 🔄 CI/CD Integration

Add to `.github/workflows/docker.yml`:

```yaml
name: Docker Build
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Build Docker image
        run: docker build -t portfolio .
```

## 📚 Additional Resources

- [Docker Documentation](https://docs.docker.com/)
- [Docker Compose Guide](https://docs.docker.com/compose/)
- [Nginx Configuration](https://nginx.org/en/docs/)
- [Gatsby Deployment](https://www.gatsbyjs.com/docs/deploying-and-hosting/)

Happy Dockerizing! 🐳✨
