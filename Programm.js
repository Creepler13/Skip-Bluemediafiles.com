// ==UserScript==
// @name     Skip Bluemedia Files
// @version  1
// @grant    none
// @include  bluemediafiles.com/*
// @include http://bluemediafiles.com/*
// @include https://bluemediafiles.com/*

// ==/UserScript==

var a = window.location.href.split("url=s://");
location.href = "http://"+a[1];
