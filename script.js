//Setup and Sending a GET Request
var http = new XMLHttpRequest();
var url = 'http://jsonplaceholder.typicode.com/posts';
var method = 'GET';
http.open(method, url);