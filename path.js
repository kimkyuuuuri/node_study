const path = require('path');
const filename=__filename;
//파일 경로
const dirname=__dirname;
//폴더 경로
console.log(filename);
console.log(dirname);

console.log(path.sep);
//경로의 구분자

console.log(path.dirname(filename));
//파일이 위치한 폴더 경로를 보여줌

console.log(path.extname(filename));
//파일의 확장자를 보여줌

console.log(path.basename(filename, path.extname(filename)));
//파일의 이름 보여줌

console.log(path.parse(filename));
//파일 경로는 root, dir, base, ext, name으로 분리

console.log(path.format({
    dir: '/Users/kimkyuri/Documents/wedatalap/node.js_study',
    name:'path',
    ext: '.js'
}));
//path.parse()한 객체를 파일 경로로 합침

