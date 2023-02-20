<a name="readme-top"></a>
<br />

<div align="center">
  <a href="https://github.com/Invorious/invorious">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Access control library</h3>

  <p align="center">
    This library is created to handle login, authorization and authenticacion from multiple sites 
    <br />
    <a href="https://github.com/Invorious/invorious"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/Invorious/invorious">View Demo</a>
    ·
    <a href="https://github.com/Invorious/invorious/issues">Report Bug</a>
    ·
    <a href="https://github.com/Invorious/invorious/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="https://nx.dev/">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<div align="center">
  <img src="images/logo.png" alt="Logo" width="120" height="120">
  <p> Invorious besto team </p>
</div>
<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![React][React.js]][React-url]
- [![Nx][Nx-url]][Nx-dev]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

```
import {
  AccessControlModule,
  MetamaskStrategyModule,
  GoogleStrategyModule,
  DiscordStrategyModule,
} from '@invorious/access-control';

@Module({
  imports: [
    AccessControlModule.forRoot({
      strategies: [MetamaskStrategyModule, GoogleStrategyModule, DiscordStrategyModule],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
```

### Prerequisites

Install Nx plugin

- npm

  ```
  npm install nx -g
  ```

### Installation

```
  npm install @invorious/access-control
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

1.  Import our `AccessControlModule` into your app module and the strategies you want to use into you app module.

```
import { AccessControlModule, MetamaskStrategyModule } from '@invorious/access-control';

@Module({
  imports: [
    AccessControlModule.forRoot({
      strategies: [MetamaskStrategyModule]
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
```

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [ ] Authentication
  - [ ] username
  - [ ] discord
  - [ ] metamask
  - [ ] google
- [ ] Authorization
  - [ ] jwt generation
  - [ ] role based

See the [open issues](https://github.com/Invorious/invorious/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

<!-- Your Name - [@twitter_handle](https://twitter.com/twitter_handle) - email@email_client.com -->

Project Link: [https://github.com/Invorious/invorious](https://github.com/Invorious/invorious)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[product-screenshot]: images/logo.png
[Nx-dev]: https://nx.dev/
[Nx-url]: https://img.shields.io/badge/nx-35495E?style=for-the-badge&logo=nx&logoColor=4FC08D
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
