# Roshambo

This starter kit was made to help to develop a react project 

It helps:

* to transpile with Babel ES6 code
* to bundle with Wbepack JS files and hot reload client's code
* to write tests and check code coverage. 

### Install

Install [node](https://nodejs.org/en/) first. After that:

```
$ npm install
```


### Development Mode


```
$ npm run dev
> roshambo@0.0.1 dev /home/eric/JS/roshambo
> webpack-dev-server --colors --hot --inline --host 0.0.0.0 --port 8080

http://0.0.0.0:8080/
webpack result is served from /
content is served from /home/eric/JS/roshambo
…
webpack: bundle is now VALID.
```


Point your browser to `http://0.0.0.0:8080/` it will load client side
application. You should see `Hello World! ...`, open your console and check you have :

```
[HMR] Waiting for update signal from WDS...
[WDS] Hot Module Replacement enabled.
```


As you can guess we are using webpack `hot reload` module, try to update any file under `src` and your browser should reload your code.

```
[WDS] App updated. Recompiling...
```


#### Test

Test, test and re-test …

```
$ npm run test
```

Tests are installed under `test` folder.

#### fake.js

A simple template to implement simple unit tests. You have to test every
functions or classes client code. Just import your files and check (http://shouldjs.github.io/)[should] documentation to extend the test.


#### Coverage

```
npm run coverage

> roshambo@0.0.1 coverage /home/eric/JS/roshambo
> NODE_ENV=test nyc -r lcov -r text mocha --require babel-core/register

```

Check results …. of this command, and launch your browser to `./coverage/lcov-report/index.html`


That’s all folks ... 
