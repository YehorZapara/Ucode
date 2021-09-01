/*
 * Sprint 07
 * Task name: Files
 */

const File = require('./File.js');
const FileList = require('./FileList.js');

let file = new File('example_file.txt');
file.write('Some text.');
const content = file.read();
console.log(content);

const fileList = new FileList();
console.log(fileList.getList());
console.log(fileList.hasFiles());
console.log(fileList.getHTMLList());

file.delete();
console.log(fileList.getList());
