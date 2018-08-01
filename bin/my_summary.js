#! /usr/bin/env node

var _ = require("lodash");
var color = require('bash-color');

var pkg = require("../package.json");
var summary = require("../lib/summary").summary;
var convert = require("../lib/convert");
var html2md = require("../lib/html2md");


summary({})