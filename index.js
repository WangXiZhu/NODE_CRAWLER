
var cheerio = require('cheerio');
var fetch = require('node-fetch')
var express = require('express');
var app = express();

module.exports = function(url, cb){
  if(typeof url !== 'string'){
    throw new TypeError('url is null');
  }

  const ret = fetch(url).then(data => {
    if (data.status !== 200) {
      return Promise.reject(new Error(data.statusText))
    }
    return data.text()
  });

  return ret.then(data => {
    var $ = cheerio.load(data);
    cb($);
    // console.log($('.rb .fb').length);
  })
}