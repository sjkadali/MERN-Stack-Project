const express = require('express');
const momgoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());