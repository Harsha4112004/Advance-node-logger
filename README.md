# Advance-node-logger
A extensible logging solution for Node.js applications, combining the power of Winston for custom, multi-transport logging and Morgan for HTTP request logging. Ideal for production-ready apps that need clean, structured, and customizable logs.

## Introduction
Node Logger is a powerful tool that allows you to log messages to the console, file, or other destinations. It provides a simple and flexible API for logging messages, making it easy to debug and monitor your Node.js applications.
Console logs are great for quick debugging, but they can be difficult to manage and analyze. In this tutorial, we will explore how to use the advanced Node Logger such as Winston and logger.
This is my personal configuration for Winston logger. You can use it as a reference.

## Installation
To install Winston, you can use the following command:
```bash
npm install winston morgan
```
This will install the winston and sorgan packages, which are used to configure and use the winston logger.

## Configuration
To configure Winston, you can clone or copy the logger.js file from this repository and customize it for your project.
## Usage
To use the Winston logger, you can import it in your code and use it as follows:

First, open your index.js file and copy the contents of the usage.js file from this repository into it.

This will log the messages to the console and the file app.log. The morgan package is used to format the log messages.
- Note:
  The morgan format must be declared after initializing the Express app with express().

✅ Correct:
```javascript
import express from "express"
const app=express()
const morganFormat = ':method :url:status : response-time ms';
app.use(morgan (morganFormat, {....})
```
❌ Incorrect:
```javascript
import express from "express"
const morganFormat = ':method :url:status : response-time ms';
app.use(morgan (morganFormat, {....})
const app=express() // Error: 'app' is not defined yet
```
## Easy log messages
To use the Winston logger, you can import it in your code and use it as follows:
```javascript
import logger from './logger.js'

logger.info('This is an info message');
logger.error('This is an error message');
logger.warn('This is a warning message');
logger.debug('This is a debug message');
```



