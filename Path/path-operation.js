const path = require('path'); // 'path' module helps in working with file directory paths

// Note: Below operations might give different result depending on the OS you are using. See: https://nodejs.org/dist/latest-v18.x/docs/api/path.html for more details

//--------------------Few path related operations-------------------
var res = path.parse('/Documents/Express/path.js');
console.log(res);

//'basenamepath)' returns the name of the file, removes the suffix if provided.
var basename = path.basename('/foo/bar/baz/asdf/index.html', '.html')
console.log(basename);

//'dirname(path)' gives the directory path.
var dirname = path.dirname('/Downloads/Cat/meowe.txt');
console.log(dirname);

//'extname(path)' returns the file extension if present in the path or else it will return empty string.
var extension = path.extname('Downloads/Cat/meowe.txt');
console.log(extension);

extension = path.extname('Downloads/Cat/meowe'); // returns empty string
console.log(extension);

extension = path.extname('Downloads/Cat/.readme.md'); // returns .md => it checks for extension after '.' char at the end of the path
console.log(extension);

//'path.format(obj)' formats the given object details into a file path.
//use-case-1
var formatPath = path.format({
    root: '/ignored',    // root is ignored if dir is present.
    dir: '/home/user/dir',
    base: 'file.txt',
  });
console.log(formatPath);

//use-case-2
formatPath = path.format({
    root: '/',       // root will be used when 'dir' is not given.
    base: 'file.txt',
    ext: 'ignored',
  });
console.log(formatPath);

//use-case-3
formatPath = path.format({
    root: '/',
    name: 'file',  // `name` + `ext` will be used if `base` is not specified.
    ext: '.txt',
  });
console.log(formatPath);