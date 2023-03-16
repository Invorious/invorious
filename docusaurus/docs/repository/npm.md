---
sidebar_position: 7
---

# Upload library to NPM

For upload a library should be verify than exist the package.json.

```json title="package.json"
{
  "name": "@invorious/package",
  "version": "0.0.0",
  "scripts": {
    "release": "standard-version",
    "release:major": "standard-version --release-as major",
    "release:minor": "standard-version --release-as minor",
    "release:patch": "standard-version --release-as patch"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/Invorious/invorious.git"
  },
  "homepage": "https://github.com/Invorious/invorious#readme"
}
```

## Execute script

```console title="In terminal or powershell execute this script. Is optional minor major or patch"
npm login
npm run upload-npm name_package (minor|major|patch)
```

## Post installation

The script had generate un changelog de changes between versions of the package.json too uploaded the library to NPM

## Example with video

In progress
