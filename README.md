# [Touch Speed](https://www.touchspeedtest.com/ "Touch Speed")

A website I've built to test how fast a person may type, it was construced using create-react-app - featuring TailWindCSS, React Hooks, and consumes a custom REST API, that consits of Redux, react-persist, Redux Saga, Express, Node, and Mongodb.

## Lessons Learned

I wanted a better understanding of using some of react hooks this one was focused around the useEffect hook. The biggest challenge I faced, which was sovled, was to getting the timer function to collect the user's speed after a minute of typing and having the cached data persist to the database.

## Purpose of this Web App

* Allow a user to track how fast they type and keep a record of his or her speed overtime so they may see which key strokes they need practice with.

## Deployment

* Front End deployed with Netlify
* Back End is connected via custom configured REST API

## Getting Started

First from your command line terminal, clone this repo:

 1. __Clone this respository :__
```
$ git clone https://github.com/OctaviusBowman/touchspeed.git
```
2. __Change into touchspeed directory__
```
$ cd touchspeed
```
3. __Install Dependencies__
```
$ npm i
```
4. __Start Local Server__
```
$ npm run start
```

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
