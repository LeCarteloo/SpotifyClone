<div id="top"></div>
<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="">
<!--     <img src="https://i.imgur.com/Biemrcm.png" alt="Logo" width="110" height="110"> -->
  </a>

  <h3 align="center">Spotify Clone</h3>

  <p align="center">
    Clone of the popular audio streaming site (Frontend only).
    <br />
    <a href="https://spotifyclone.filippapiernik.pl/">Live Project</a>
    ·
    <a href="https://filippapiernik.pl/projects/SpotifyClone">Page about project</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
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
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

![Product Name Screen Shot][app-screenshot]

The goal of this project was to create Spotify web player, with all the key views, working both on mobile and desktop devices. Although this application does not use any API, it was designed to be able to handle them. All data fetched to the application comes from JSON files, which simulates the API response. 

Before writing the React code, ten reference images were taken, each with diffrent view. All the colors used were taken from official Spotify app. I tried to create this app with Pixel-Perfect precision, based only on reference images. There may be a few diffrences here and there, esspecially on mobile view, mainly due to the font type. Spotify uses a paid font, so this app uses a simillar one. 

One of the biggest diffrence is that official web app does not have seamless transition to mobile view, but instead detects what type of device user is using and renders a diffrent views and components accordingly, so for example if user is on desktop device and changes the browser width to less than 768px, the page will no longer shrink anymore and overflow-x will be shown. My version has this seamless transition, but the drawback is that it looks diffrent on mobile devices than the official app, the only components that my app renders conditionally depending on device type are Playbar and Navbar. A final diffrence is that the mobile version of Spotify's web player does not allow user to visit their library page, my implementation does not have that limitation.


<p align="right">(<a href="#top">back to top</a>)</p>



### Built With


This project contains only frontend side of Spotify's web player, and was build with React.js, Styled Components and TypeScript. It also uses two libraries - Fast-Average-Color and React-Icons.

* [React.js](https://reactjs.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [StyledComponents](https://styled-components.com/)
* [Node.js](https://nodejs.org/)

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

### Prerequisites
Before running this application node and npm is needed.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

To run this application you need to clone the repo, install npm packages and install TypeScript.

1. Clone the repo
   ```sh
   git clone https://github.com/LeCarteloo/SpotifyClone.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. If you do not have TypeScript installed, do it by running
   ```sh
   npm install -g typescript
   ```
<p align="right">(<a href="#top">back to top</a>)</p>


## Usage

1. Application can be run by typing 
    ```sh
     npm start
     ```

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

* LinkedIn - [@filip-papiernik](https://www.linkedin.com/in/filip-papiernik-390444230/)
* Email - filippapiernik1999@gmail.com


<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
[app-screenshot]: https://i.imgur.com/NggD18w.png
