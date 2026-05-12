---
title: "Self Hosted Private Cloud"
description: "A complete self-hosted private cloud stack — Nextcloud, Vaultwarden, Jellyfin, and Uptime Kuma running in Docker containers. One command deploys your own Google Drive, password manager, media server, and monitoring dashboard."
tags: ["docker docker-compose self-hosted nextcloud vaultwarden jellyfin uptime-kuma devops homelab infrastructure privacy"]
featured: false
date: 2026-05-12
github: "https://github.com/tejansree21/self-hosted-cloud"
---

Built a complete self-hosted private cloud replacing four commercial services with open-source alternatives — Nextcloud (Google Drive), Vaultwarden (Bitwarden/LastPass), Jellyfin (Netflix/Plex), and Uptime Kuma (UptimeRobot). The entire stack is defined in a single Docker Compose file and deploys with one command, demonstrating infrastructure-as-code principles.


The project covers Docker containerization, volume management for persistent data, port mapping, container networking, service monitoring, and security configuration. All services auto-restart on failure with data persisting across restarts. Designed as a learning exercise in DevOps and self-hosted infrastructure, with a clear roadmap for production hardening including Caddy reverse proxy for HTTPS, Tailscale for remote access, and automated backups.