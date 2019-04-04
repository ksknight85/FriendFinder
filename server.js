var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
