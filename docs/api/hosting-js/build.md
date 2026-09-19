```yaml
title: Iconify API Deployment
```

# Iconify API deployment: building API

This tutorial is a part of [Iconify API deployment instructions](./deployment.md).

This part of the tutorial explains how to build API before deploying it to a VPS instance.

## Requirements

- Node.js 24 or newer installed on your machine.
- Terminal.

If you are using Windows, you can use [Windows Subsystem for Linux](https://learn.microsoft.com/en-us/windows/wsl/install).

## Cloning API repository

Clone [Iconify API repository](https://github.com/iconify/api).

If you are not familiar with git, you can just download repository. Click "Code" button and select "Download ZIP". Then unpack it.

Open terminal in the root of the repository.

## Installing dependencies and building API

Run the following commands in the root of the repository:

```bash
npm install
npm run build
```

This will install all dependencies and build API.

## Test

Make sure it works by running

```bash
npm run start
```

Wait for API to start. You can see output in terminal, when you see "API startup process complete", API is running.

Stop API process by pressing `[str]Ctrl+C`.

## Configure

If you need to change configuration, create `[file].env` file in the root of the repository and add configuration variables.

See `[file].env-sample` for example as well as [config documentation](./config.md).

## Next steps

Next step is to run a deployment script to set up server and deploy API.

See [Iconify API deployment instructions](./deployment.md).
