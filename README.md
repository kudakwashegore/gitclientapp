### GitHub Client

Angularjs client-side app that lists github repositories for a given user

### How to run the app

Download and run files inside App directory using a webserver. It's recommended to have a live internet connection when running the app since some of the libraries such as angularjs an bootstrap load from CDN.

### Ruuning Unit Tests using Karma

Unit test is implimented using Karma and Jasmine. To run unit test install Nodejs and use npm to install Karma cli as shown below

`npm install -g karma-cli`

After karma installation, go to the root directory of the project and run the following command to install angularjs libraries for testing

`npm install angular angular-router angular-resource angular-mocks --save-dev`

Testing is now ready. Run the following command and see test results

`karma start`