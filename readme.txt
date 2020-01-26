- create-react-app
    To fix the error gyp: No Xcode or CLT version detected! In Mac OS Catalina
        https://medium.com/@allanphilipbarku/gyp-no-xcode-or-clt-version-detected-macos-catalina-anansewaa-38b536389e8d
        - Reinstall command line tools by removing the previously installed version
        - xcode-select --print-path
            the result of the above command /Library/Developer/CommandLineTools
        - sudo rm -r -f /Library/Developer/CommandLineTools
        - xcode-select --install

    - To fix the error A template was not provided. This is likely because you're using an outdated version of create-react-app. Which causes you don’t see any template src files in the project
        - Uninstall create-react-app if you have installed it globally
                npm uninstall -g create-react-app
    - Then one of these ways:
            npx create-react-app my-app
            npm init react-app my-app
            yarn create react-app my-app

- To run the application
    - npm start

- Install Material-UI
    npm install @material-ui/core @material-ui/icons @material-ui/lab @material-ui/pickers @date-io/date-fns
    npm install @date-io/date-fns@1.x date-fns

- Install echarts-for-react
    npm install echarts-for-react echarts rc-queue-anim

- Install axios
    npm install axios

 Establish Redux
    - Install dependencies
        mehmetak@MEHMETs-MacBook-Pro it-logger % npm install redux redux-devtools-extension redux-thunk react-redux react-router-dom
    - Create a directory called "redux" under the folder "src"
        - Create a file called "store.js" in the "redux" folder.
        - Create a directory called "actions" in the "redux" folder
            - Create a file called "logActions.js" in the "actions" folder
            - Create a file called "actionTypes.js" in the "actions" folder
        - Create a directory called "reducers" in the "redux" folder
            - Create a file called "rootReducer.js" in "reducers" folder
            - Create other reducers as they are required
    - The Folder Structure Will Be
        src
            redux
                actions
                    logActions.js
                    techActions.js
                    actionTypes.js
                reducers
                    logReducer.js
                    rootReducer.js
                    techReducer.js
                store.js