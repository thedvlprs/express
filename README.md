# Express.js tutorial


Express.js tutorial shows how to create simple web applications in JavaScript using Express framework.

 
## Express.js
Express.js is a free and open-source web application framework for Node.js. Express is a minimal and flexible web application framework that provides a robust set of features for web and mobile applications.

It is a fast, unopinionated, and minimalist web framework.

**Note**: The term unopiniated means that Express maintainers do not show developers what is the optimal way of building web applications.

## Express installation
We install the Express framework. Later, we install additional packages including `Lodash`, `sqlite3`, and `Axios`.

```bash
$ node --version
v14.5.0
```
We use `Node version 14.5.0`.

```bash
$ npm init -y
$ npm i express
```
We use the npm tool to install `Express`.

## URL
A Uniform Resource Locator (URL), is a reference to a web resource that specifies its location on a computer network and a mechanism for retrieving it. A web resource is any data that can be obtained via web, such as HTML documents, PDF files, PNG images, JSON data, or plain text.

A generic URL has the following form:

`scheme:[//[user:password@]host[:port]][/]path[?query][#fragment]`

The parts between the `[]` brackets are optional.

## Express routes

A route associates an HTTP verb (such as GET, POST, PUT, DELETE) and a URL path to a handler function. To create routes, we use functions of the Express application object.

```javascript
app.get('/', (req, res) => {

});
```

Here we map the `/` path sent in a GET request to the handler function. The function receives request and response objects as parameters.

To group routes and separate them in modules, we can use the Router middleware.

## Express middleware

Express middleware is a the core of the framework. It sits in the middle of the request-response cycle. Middleware is a series of functions that are called between the request object and the response object in a pipeline. Express is a minimal framework. Most of the functionality is available as middleware functions.

Middleware functions are used to implement functionalities such as authentication, CSRF protection, logging, or cookie processing. They are not used to implement the business logic of the application.

The use function mounts the specified middleware function or functions at the specified path.