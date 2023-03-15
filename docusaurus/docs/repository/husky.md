---
sidebar_position: 5
---

# Husky

Husky permit execute scripts during some actions of git

## Git Hooks

| Hook               | Actions                                                                               |
| ------------------ | ------------------------------------------------------------------------------------- |
| pre-commit         | - Commit <br/> - Amend <br/> - Merge Resolve                                          |
| prepare-commit-msg | – Commit <br/> – Amend <br/> – Cherrypick <br/> – Merge <br/> – Squash <br/> – Revert |
| commit-msg         | – Commit <br/> – Amend <br/> – Merge Resolve                                          |
| post-commit        | – Commit <br/> – Amend <br/> – Cherrypick <br/> – Merge Resolve <br/> – Revert        |
| pre-rebase         | – Rebase <br/> – Squash                                                               |
| post-checkout      | – Checkout <br/> – Discard Changes (selectively)                                      |
| post-merge         | – Merge (Without Conflicts) <br/> – Fast-Forward                                      |
| post-rewrite       | – Amend <br/> – Squash <br/> – Rebase                                                 |
| pre-push           | – Push Branch <br/> – Push Tag <br/> – Delete Remote Branch <br/> – Delete Remote Tag |

​

## Installation

```console
npm i husky -D
```

```bash title="In file commit-msg inside of folder husky"
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx commitlint --edit $1
```

```bash title="In file pre-commit inside of folder husky"
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx nx lint --project=example-api
```
