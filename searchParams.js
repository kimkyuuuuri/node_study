const {URL} = require("./url");
const myURL = new URL('https://search.naver.com/search.naver?page=3 & limit=10 & category=nodejs&category=avascript');

console.log('searchParams:',myURL.searchParams);
console.log('searchParams.getAll():', myURL.searchParams.getAll('category'));
console.log('searchParams.gets():',myURL.searchParams.get('limit'));