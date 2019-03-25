<div align="center">
    <img src="./img/omykuji_app.png" align="center" width="100%" alt="omykuji">
</div>
<h1 align="center" >OMYKUJI</h1>
<div align="center">
    <br/>
    <h3>Mood Stabilizer</h3>
    <p>Built by <b>Team Omykuji</b></p>
    <br/>
</div>
<div align="center">
    <div >
        ***********************************************************************
        <br/>
        App available at 
        <a href="https://omykuji.herokuapp.com">Heroku</a> 🎉🎉
        <br/>
        ***********************************************************************
    </div>
</div>
<br/>
<div align="center">

[![Size](https://img.shields.io/github/repo-size/yickya/moodygiphy.svg)]()
[![Issue Tracking](https://img.shields.io/github/issues/yickya/moodygiphy.svg)]()
[![Issue Tracking](https://img.shields.io/github/issues-pr-raw/yickya/moodygiphy.svg)]()
[![Social](https://img.shields.io/github/forks/yickya/moodygiphy.svg?label=Fork)]()
[![Version](https://img.shields.io/github/package-json/v/yickya/moodygiphy.svg)]()
[![Activity](https://img.shields.io/github/last-commit/yickya/moodygiphy.svg)]()

**Omykuji** is the SPA that judges user's emotional state from a picture.

[Overview](#1-overview)&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;[Architecture](#2-architecture)&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;[Setup](#3-setup)&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;[Contributions](#4-contributions)

</div>

---

# 1. Overview

Omykuji judges a user's emotional state from an uploaded picture, and stabilizes their mood by providing text and gifs.

Its design and name are inspired by <i>omikuji</i>, traditional Japanese fortune telling slips, that predict positive and negative outcomes.

<img src="./img/omykuji_intro.png" alt="omykuji architecture">


# 2. Architecture

Omykuji is built using VueJS and Vuetify.js, and calls Rakuten Rapid APIs and Microsoft Azure Face API.

<img src="./img/omykuji_system.png" alt="omykuji architecture">
<img src="./img/omykuji_tech.png" alt="omykuji architecture">

Potential future plans are:

- 

# 3. Setup

## Use this app on the server

As of 25 March 2019, this application is available at [Heroku](https://omykuji.herokuapp.com).

## Setup Instructions


This build relies on API keys that are not included. You will need one key from RakutenRapid API to operate Giphy and Slapbot. You will need to obtain another from Microsoft Azure's Cognitive Services to access the facial detection API.

Create a .env file and paste the following in:

`RAKUTEN_KEY=`[your api key]
`FACE_KEY=`[your api key]

Be sure to include your .env in your .gitignore if you plan to push to a local branch.

## Create Build

`yarn install` –– this installs all the dependencies.
`yarn local-test` –– this allows you to build on your local computer

Visit localhost:8080 and try it out!

## Additional Commands

`yarn serve` -- this runs development server (use for working on frontend)

`yarn prod` -- this creates production build and run production server (use for working on backend)

`yarn build` -- this creates production build of static files

# 4. Contributions

To contribute to this app, make sure you create a branch and **ALWAYS** make a pull request. **DO NOT EDIT THE MASTER!**

`git checkout -b <branch_name>`

If you want to push your edited files to your remote file, run the following:

`git push <remote_name> <branch_name>`

---


<div align="center">
<b>LICENSE</b>: CC7 TEAM OMYKUJI
</div>
<br/>
<img src="./img/omykuji_team.png" alt="omykuji team">
<div align="center">
<b>Linkedin</b>: <br/>

[Ian McClerin](https://www.linkedin.com/in/ian-mcclerin-a0827737/)&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;[Keisuke Mori](https://www.linkedin.com/in/keisuke-mori-b64683176/)&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;[Chaz Wilson](https://www.linkedin.com/in/chaz-wilson/)&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;[Yuma Sumi](#)
