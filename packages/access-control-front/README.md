[Comment: Environments by Logo]: #
[Logo_Npm]: https://img.shields.io/badge/NPM-v0.0.0-blue
[Logo_PRs]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg
[Logo_Chat]: https://img.shields.io/badge/Chat-Slack-7289da.svg
[Logo_License]: https://img.shields.io/badge/License-MIT-green.svg
[Logo_Stars]: https://img.shields.io/github/stars/Invorious?style=social
[Comment: Environments by Url]: #
[Url_Git_PRs]: https://github.com/Invorious/invorious/pulls
[Url_Npm]: https://www.npmjs.com/org/invorious
[Url_Chat]: https://invorious.slack.com

<br>
<div align="center" id="readme-top">
  <a href="https://github.com/Invorious/invorious#readme">
    <img src="https://raw.githubusercontent.com/Invorious/invorious/HEAD/images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <br>
  <h3>Access Control Front</h3>
  <br>

[![Logo_Npm]][Url_Npm]
[![Logo_PRs]][Url_Git_PRs]
[![Logo_Chat]][Url_Chat]
[![Logo_License]]()

![Logo_Stars]

</div>

<br>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#changelog">Changelog</a></li>
  </ol>
</details>

<br>

<h2 id="installation">Installation</h2>

```console
npm install @invorious/access-control-front
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<h2 id="usage">Usage</h2>

```tsx
import { useLocalStrategy } from '@invorious/access-control-front';
export function ComponentReact() {
  const { login } = useLocalStrategy({
    baseURL: '/api/auth/local',
  });

  const handleSubmit = async () => {
    const username = 'invorious';
    const password = '12345678';
    const response = await login(username, password);
  };

  return 'Component of react';
}
```

_For more examples, please refer to the [Documentation](https://invorious.github.io/invorious/)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<h2 id="changelog">Changelog</h2>

Learn about the latest [improvements](https://github.com/Invorious/invorious/blob/main/packages/access-control-front/CHANGELOG.md).

<p align="right">(<a href="#readme-top">back to top</a>)</p>
