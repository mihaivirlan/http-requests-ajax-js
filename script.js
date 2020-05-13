    //Setup and Sending a GET Request
// var http = new XMLHttpRequest();
// var url = 'http://jsonplaceholder.typicode.com/posts';
// var method = 'GET';
// http.open(method, url);
// http.onreadystatechange = function() {
//     if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
//         console.log(http.responseText);
//     } else if (http.readyState === XMLHttpRequest.DONE && http.status !== 200) {
//         console.log('Error!'); 
//     }
// };
// http.send();

// var http = new XMLHttpRequest();
// var url = 'http://jsonplaceholder.typicode.com/posts';
// var method = 'GET';
// http.open(method, url);
// http.onreadystatechange = function() {
//     if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
//         console.log(JSON.parse(http.responseText));
//     } else if (http.readyState === XMLHttpRequest.DONE && http.status !== 200) {
//         console.log('Error!'); 
//     }
// };
// http.send();

// var http = new XMLHttpRequest();
// var url = 'http://jsonplaceholder.typicode.com/posts';
// var method = 'GET';
// http.open(method, url);
// http.onreadystatechange = function() {
//     if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
//         console.log(JSON.parse(http.responseText)[0].id);
//     } else if (http.readyState === XMLHttpRequest.DONE && http.status !== 200) {
//         console.log('Error!'); 
//     }
// };
// http.send();

// var http = new XMLHttpRequest();
// var url = 'http://jsonplaceholder.typicode.com/posts';
// var method = 'GET';
// http.open(method, url);
// http.onreadystatechange = function() {
//     if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
//         console.log(JSON.parse(http.responseText)[1].title);
//     } else if (http.readyState === XMLHttpRequest.DONE && http.status !== 200) {
//         console.log('Error!'); 
//     }
// };
// http.send();



    //POST Request
// var http = new XMLHttpRequest();
// var url = 'http://jsonplaceholder.typicode.com/posts';
// var method = 'POST';
// var data = 'title=Post%20Title&body=Body'; //%20 - represent a white space
// http.open(method, url);
// http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
// http.onreadystatechange = function() {
//     if (http.readyState === XMLHttpRequest.DONE && http.status === 201) {
//         console.log(JSON.parse(http.responseText));
//     } else if (http.readyState === XMLHttpRequest.DONE && http.status !== 201) {
//         console.log('Error!'); 
//     }
// };
// http.send(data);