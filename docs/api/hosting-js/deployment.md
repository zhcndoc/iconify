```yaml
title: Iconify API Deployment
```

# Iconify API deployment

This tutorial explains how to deploy an API instance on your VPS.

Using a simple VPS is an easy and cheap way to host your own API instance.
Depending on hosting provider and memory requirements, it costs from $5 to $25 per month.

## How it works

- Create SSH key for authentication to VPS instance (if you have not done this before).
- Create a blank VPS instance running Ubuntu Linux.
- Run deployment script with instance IP address to deploy the API.
- Configure your domain to point to the server IP and configure Cloudflare to handle TSL and caching.

Deployment script will handle everything: configuring server, uploading files and starting API server.

## Domain requirements

For simplicity, you need a domain hosted at Cloudflare or similar service.

API is hosted on port 80. It does not handle TSL (HTTPS) or caching, so Cloudflare takes care of that.

## Hosting requirements

Deployment script is designed to work only on Ubuntu Linux, so make sure your VPS instance is running Ubuntu.

Deployment script was fully tested only with [Vultr hosting](https://www.vultr.com/?ref=7155996).

Vultr is a reasonably priced and reliable hosting provider, used to host Iconify websites for many years without issues.

It may work with other hosting services, but currently tested only on Vultr.

## Process

Short version of the process:

1. Create a new VPS instance on [Vultr](https://www.vultr.com/?ref=7155996) with Ubuntu Linux.
2. Clone [Iconify API repository](https://github.com/iconify/api) to your local machine, install dependencies, configure API if needed, run build script.
3. Run deployment script with instance IP address to deploy the API.
4. Configure your (sub)domain at Cloudflare to point to the server IP.

Each step is explained below.

### VPS instance

First, you need to create a VPS (virtual private server) instance.

See [VPS setup instructions](./vps.md) for details.

Make sure authentication for root user is done with SSH key, not a password.

### Building API

To run API, you first need to build it.

Clone API repository, install dependencies, build it and configure it if needed.

See [build instructions](./build.md) for details.

### SSH key

Configure API by editing `[file].env` file.

Make sure you add your SSH key file location and passphrase to `[file].env` file, it will be used to deploy API to VPS instance.

When files are uploaded, those keys are removed from `[file].env` file, so they are not stored on server.

### Run deployment script

When ready, run deployment script with instance IP address to deploy the API:

```bash
node lib/setup-server.js --ip <instance-ip>
```

Script will:

- Update software on server.
- Install Node.js and PM2.
- Upload API files.
- Start API server.

After script is finished, wait 2-3 minutes for server to start.
It will download all icon sets and cache them, which may take a while.

Test that API is working by opening `[url]http://<instance-ip>/version` in your browser or any other valid API endpoint.

#### Updating files

Additionally, there is a script to update files on server without reinstalling Node.js and PM2:

```bash
node lib/upload.js --ip <instance-ip>
```

This script will upload files and restart API server.

### Configure domain

When done, configure your domain to point to the server IP and configure Cloudflare to handle TSL and caching.

To do that, go to Cloudflare dashboard, select your domain, go to DNS settings and add an A record with your server IP.

## Conclusion

This is it!

API is now running on your VPS instance and ready to use.

To make sure API is always working, deployment script sets up PM2 to automatically restart API server if it crashes or server is restarted.

If you need to change configuration or update files, you can do that by editing files and running upload script.
