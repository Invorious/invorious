---
sidebar_position: 6
---

# Semver

This help with versioning of each library of invorious, to the end we get a ".md" with all the changes

## How to install

```console
npm i standard-version -D
```

```json title="Add scripts in the package.json"
"scripts": {
  "release": "standard-version",
  "release:major": "standard-version --release-as major",
  "release:minor": "standard-version --release-as minor",
  "release:patch": "standard-version --release-as patch"
}
```

```json title="Create .versionrc.json file"
{
  "header": "Changelog",
  "types": [
    { "type": "feat", "section": "Features" },
    { "type": "fix", "section": "Bug Fixes" },
    { "type": "chore", "hidden": true },
    { "type": "docs", "hidden": true },
    { "type": "style", "hidden": true },
    { "type": "refactor", "hidden": true },
    { "type": "perf", "hidden": true },
    { "type": "test", "hidden": true }
  ],
  "commitUrlFormat": "https://github.com/Invorious/invorious.git/commit/{{hash}}",
  "compareUrlFormat": "https://github.com/Invorious/invorious.git/compare/{{previousTag}}...{{currentTag}}",
  "issuePrefixes": ["#"],
  "issueUrlFormat": "https://github.com/Invorious/invorious.git/issues/{{id}}"
}
```

```console title="Create first release to build the changelog.md, push the changes and send the tags"
npm run release
git push origin main --tags
```

To use it send conventional commits based on semantic version (major, minor or patch), for example:

```console title="Major - Breaking Release (Note that the BREAKING CHANGE: token must be in the footer of the commit)"
perf(auth): remove authUser option

BREAKING CHANGE: The authUser option has been removed.
The default authUser is always used for performance reasons.
```

```console title="Minor - Feature"
feat(auth): add 'authUser' option
```

```console title="Patch (revision) - Fix"
fix(auth): stop auth breaking when there isn't enough data
```
