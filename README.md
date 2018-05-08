# React Test Project

This project was built using the boilerplate recommended by Facebook `create-react-app` (https://github.com/facebook/create-react-app) and the Jest library for testing (https://facebook.github.io/jest).

## Dependencies
- Yarn (Package Mananger)
- react-router-dom (Router)
- Babel (to be able to use ES6/ES7)
- Jest (Testing library)


## Recommended Project Structure
```
+- public (all the assets, images and fonts)
+- src (Contains all the components and source code)
|  +-- actions (folder needed to organize all the actions)
|  +-- components (contain all the main app's components)
|  +-- config (config folder, where we can put all the configuration files, rounting, DB connections, redux store setup, etc)
|  +--- reducer (folder needed to organize all the reducers)
|  +-- containers (NOT HERE, but a useful directory where we can create parent components for different sections)
|  +-- helpers (NOT HERE, recommended directory to put all the utils functions and common elements to be used accross the app such as validators, etc)
(ONLY if we use atomic CSS classes)
+- atomic.css (file to define all the atomic classes)
```

## Commands
- `yarn` (install all the dependencies)
- `yarn start` (run the project)
- `yarn test` (run unit tests)
