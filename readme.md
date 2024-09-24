# FastPass.js

![NPM Downloads](https://img.shields.io/npm/dm/fastpass.js)


[![](https://data.jsdelivr.com/v1/package/npm/fastpass.js/badge)](https://www.jsdelivr.com/package/npm/fastpass.js)


FastPass.js is a lightweight JavaScript library that allows you to generate strong and secure random passwords quickly and easily. Whether you need to create a new password for your online accounts or generate multiple passwords for your team, FastPass.js has you covered.

## Installation
You can install FastPass.js via <a href="https://www.npmjs.com/package/fastpass.js">npm</a>:

```bash
npm install fastpass.js
```

Alternatively, you can include the following script tag in your HTML file to load the library from <a href="https://www.jsdelivr.com/package/npm/fastpass.js">jsDelivr's CDN</a>:

```html
<script src="https://cdn.jsdelivr.net/npm/fastpass.js/fastpass.min.js"></script>
```


## Usage

To generate a random password with FastPass.js, simply call the fastpass.generate() method with your desired options:

```javascript
var defaultPassword = fastpass.generate();
```

```javascript
var customPassword = fastpass.generate({
    length: 16,
    charsets: ['lowercase', 'uppercase', 'numbers', 'symbols'],
    excludeSimilar: true,
    excludeAmbiguous: true
});
```


<h3>Options</h3>

* <b>length</b>: (optional) The length of the generated password. Default is 12.
* <b>charsets</b>: (optional) An array of character set names to include. Default is ['lowercase', 'uppercase', 'numbers'].
* <b>excludeSimilar</b>: (optional) Exclude characters that can be easily confused, such as i, l, 1, O, 0, etc. Default is false.
* <b>excludeAmbiguous</b>: (optional) Exclude characters that are ambiguous in certain fonts, such as {}, (), [], /, ~, <, >, ;, :, ., ', ", ?. Default is false.
* <b>customCharset</b>: (optional) A custom string representing a character set to use. This allows you to define exactly which characters to include in the generated password.


<h3>Example with Custom Charset</h3>

You can also generate a password using a custom character set:

```javascript
var customCharsetPassword = fastpass.generate({
    customCharset: 'abcXYZ123!@#'
});
```


## Contributions

Contributions are welcome and greatly appreciated! If you find a bug, have a feature request, or want to contribute code, please open an issue or submit a pull request on <a href="github.com">Github</a>.

## License

FastPass.js is licensed under the <a href="https://opensource.org/license/mit/">MIT License</a>. Feel free to use, modify, and distribute the library as you see fit.
