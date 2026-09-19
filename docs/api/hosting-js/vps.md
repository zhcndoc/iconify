```yaml
title: Iconify API Deployment
```

# Iconify API deployment: setting up VPS instance

This tutorial is a part of [Iconify API deployment instructions](./deployment.md).

This part of the tutorial explains how to set up a VPS instance for the API.

## SSH key

First, you need to create SSH key pair on your local machine.

This is used to log in to server without password.

[GitHub has an excellent guide](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

This will create two files:

- `[file]~/.ssh/id_rsa` - private key, keep it secret.
- `[file]~/.ssh/id_rsa.pub` - public key.

File names might be different, depending on your configuration. Account for that in the next steps.

This documentation assumes you are using MacOS or Linux. If you are using Windows, you can use [Windows Subsystem for Linux](https://learn.microsoft.com/en-us/windows/wsl/install) to run Linux commands.

## Vultr account

This tutorial assumes you are using [Vultr](https://www.vultr.com/?ref=7155996) hosting provider.

## Adding SSH key to Vultr

Click "Orchestration" in menu on the left, then "SSH Keys".

Click "Add SSH Key", give it a name and copy contents of `[file]~/.ssh/id_rsa.pub` to "SSH Key" field.

Make sure you copy public key, not private key!

![Adding SSH key to Vultr](/assets/images/vultr-key.png)

## Creating a VPS instance

Click "Compute", then "Instances" in menu on the left.

![Navigating to instances](/assets/images/vultr-nav-instances.png)

Click "Create Instance" to create a new instance.

Select "Shared CPU" to see cheapest options. This is more than enough to run API.

Instance size is all about memory usage.

Memory usage depends on:

- How many icon sets you want to host.
- If you want to enable search engine.
- If you want to use memory management to reduce memory usage.

If you want to host all icon sets, disable memory management for best performance, you will need at least 2GB RAM.

Select "High Frequency" on left side, those servers are optimal for API, then select instance based on required memory.

Number of CPU cores is not important, API is single-threaded, so it will use only one core.

![Selecting VPS instance](/assets/images/vultr-vps-selection.png)

Disable automatic backups, as they are not needed for this project.

In the unlikely event of failure, you can always create a new instance and deploy API again.

![Disable backups](/assets/images/vultr-disable-backups.png)

Select region where you want API to be deployed, click "Configure".

Make sure Ubuntu is selected.

![Select Ubuntu](/assets/images/vultr-ubuntu.png)

In "Server Settings" in "SSH Keys" section, select SSH key you created and uploaded earlier.

![Select Ubuntu](/assets/images/vultr-key-select.png)

For server hostname and label, you can use anything you want, for example, "iconify" or "api".

Click "Deploy" to create instance.

Wait for instance to be created. It might take a few minutes.

## Next steps

Next step is to build API, then run a deployment script to set up server and deploy API.

See [Iconify API deployment instructions](./deployment.md).
