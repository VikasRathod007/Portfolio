#!/bin/bash

# Docker Management Scripts for Portfolio

case "$1" in
    "build")
        echo "🏗️  Building Docker image..."
        ./docker-setup.sh && docker-compose build
        ;;
    "start")
        echo "🚀 Starting portfolio in production mode..."
        docker-compose up -d
        echo "✅ Portfolio is running at http://localhost:8080"
        ;;
    "dev")
        echo "🛠️  Starting portfolio in development mode..."
        docker-compose --profile dev up
        ;;
    "stop")
        echo "🛑 Stopping all portfolio containers..."
        docker-compose down
        ;;
    "logs")
        echo "📋 Showing container logs..."
        docker-compose logs -f
        ;;
    "status")
        echo "📊 Container status:"
        docker ps | grep -E "(CONTAINER|portfolio)"
        ;;
    "clean")
        echo "🧹 Cleaning up Docker resources..."
        docker-compose down
        docker system prune -f
        ;;
    "shell")
        echo "🐚 Opening shell in container..."
        docker exec -it portfolio-container sh
        ;;
    *)
        echo "📖 Docker Portfolio Manager"
        echo ""
        echo "Usage: $0 {build|start|dev|stop|logs|status|clean|shell}"
        echo ""
        echo "Commands:"
        echo "  build   - Build the Docker image"
        echo "  start   - Start portfolio in production mode"
        echo "  dev     - Start portfolio in development mode"
        echo "  stop    - Stop all containers"
        echo "  logs    - View container logs"
        echo "  status  - Check container status"
        echo "  clean   - Clean up Docker resources"
        echo "  shell   - Open shell in container"
        echo ""
        ;;
esac
