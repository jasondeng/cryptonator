'use strict'
/* global fetch */

const baseUrl = 'https://api.cryptonator.com/api/'

function fetchJSON (url) {
  return fetch(url)
    .then(res => res.json())
    .then(body => {
      if (body.Response === 'Error') throw body.Message
      return body
    })
}

function simpleTicker (cc) {
  let url = `${baseUrl}ticker/${cc}`
  return fetchJSON(url)
}

function completeTicker (cc) {
  let url = `${baseUrl}full/${cc}`
  return fetchJSON(url)
}

module.exports = {
  simpleTicker,
  completeTicker
}
