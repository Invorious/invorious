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
[Url_Docusaurus]: https://docusaurus.io

<br>
<div align="center" id="readme-top">
  <a href="https://github.com/Invorious/invorious">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <br>
  <h3>Invorious Libraries</h3>
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
    <li><a href="#documentation">Documentation</a></li>
    <li><a href="#ecosystem">Ecosystem</a></li>
    <li><a href="#build-library-invorious">Build library invorious</a></li>
    <li><a href="#builded-with">Builded with</a></li>
    <li><a href="#changelog">Changelog</a></li>
  </ol>
</details>

<br>

<h2 id="documentation">Documentation</h2>

Get started with Invorious Libraries, learn the fundamentals and explore advanced topics on our documentation [website][Url_Docusaurus].

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<h2 id="ecosystem">Ecosystem</h2>

| Library              | Status                        | Description                                            |
| -------------------- | ----------------------------- | ------------------------------------------------------ |
| Access Control       | :construction: :construction: | [Read more](./packages/access-control/README.md)       |
| Access Control Front | :construction: :construction: | [Read more](./packages/access-control-front/README.md) |
| Collection Manager   | :construction: :construction: | In progress                                            |
| Forms Manager        | :construction: :construction: | In progress                                            |
| Repository           | :construction: :construction: | In progress                                            |
| HttpClient           | :construction: :construction: | In progress                                            |
| Email                | :construction: :construction: | In progress                                            |
| Errors               | :construction: :construction: | In progress                                            |

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<h2 id="build-library-invorious">Build library invorious</h2>

Your scripts and the package.json are required for each library

```json
"scripts": {
  "release": "standard-version",
  "release:major": "standard-version --release-as major",
  "release:minor": "standard-version --release-as minor",
  "release:patch": "standard-version --release-as patch"
}
```

**Important**: Before running this script, you must log in to npm with a valid user from the Invorious organization.

```console
npm run upload-npm access-control
npm run upload-npm access-control patch
npm run upload-npm access-control minor
npm run upload-npm access-control major
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<h2 id="builded-with">Builded with</h2>

<a href="https://nx.dev"><img align="center" src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>
<a href="https://nestjs.com"><img align="center" src="https://www.vectorlogo.zone/logos/nestjs/nestjs-icon.svg" width="40"></a>
<a href="https://reactjs.org/"><img align="center" src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" width="40"></a>
<a href="https://developers.google.com/"><img align="center" src="https://www.vectorlogo.zone/logos/google/google-icon.svg" width="40"></a>
<a href="https://metamask.io/"><img align="center" src="https://vectorwiki.com/images/JCpNh__metamask-icon.svg" width="40"></a>
<a href="https://github.com/typicode/husky">HUSKY</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<h2 id="changelog">Changelog</h2>

Learn about the latest [improvements](./CHANGELOG.md).

<p align="right">(<a href="#readme-top">back to top</a>)</p>
