# MyReads Project

This project is a example React/Redux App for add books on categorized shelfs.

## Technical Features:
* Redux architecture
* Testing with Jest and Enzyma (for components)
* LocalStorage usage to sync Redux State
* Validation with prop-types

## Get Started

Install dependencies
```bash
npm install or yarn install
```
Start Project
```bash
npm start or yarn start
```
Run test
```bash
npm test or ... ok you got it already
```

## Project Organization

```bash
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. 
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── actions # All the redux actions
    ├── api # 
    │    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. 
    ├── components # simple stateless components
    ├── containers # more complex containers
    ├── constants # more complex containers
    │    ├── Actions.js # All the existing actions type constants. 
    ├── icons # Helpful images for your app. Use at your discretion.
    ├── reducers # Redux reducers
    ├── utils # Utils files
    │    ├── testMocks.js # Js object to use on tests
    ├── index.css # Global styles. 
    └── index.js #
```
## Next Steps
* Add immutableJs
* Add new features

## Backend Server

The Backend Server em BooksApi.js file was provided by Udacity

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
