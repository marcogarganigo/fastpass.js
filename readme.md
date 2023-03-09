# FastPass.js

[![](https://data.jsdelivr.com/v1/package/npm/fastpass.js/badge)](https://www.jsdelivr.com/package/npm/fastpass.js)

FastPass.js is a lightweight JavaScript library that allows you to generate strong and secure random passwords quickly and easily. Whether you need to create a new password for your online accounts or generate multiple passwords for your team, FastPass.js has you covered.



## Installation
You can install FastPass.js via <a href="https://www.npmjs.com/package/fastpass.js">npm</a>:

<pre>npm install fastpass.js</pre>

Alternatively, you can include the following script tag in your HTML file to load the library from <a href="https://www.jsdelivr.com/package/npm/fastpass.js">jsDelivr's CDN</a>:

<pre><script src="https://cdn.jsdelivr.net/npm/fastpass.js/fastpass.min.js"></script></pre>

## Usage

To generate a random password with FastPass.js, simply call the <b>fastpass.generate()</b> method with your desired options:

<pre>
var defaultPassword = fastpassword.generate();
</pre>

<pre>
var customPassword = fastpass.generate({
        length: 16,
        charsets: ['lowercase', 'uppercase', 'numbers', 'symbols'],
        excludeSimilar: true,
        excludeAmbiguous: true
    });
</pre>

<b>excludeSimilar</b> exclude characters that can be easily confused, such as <b>i l 1 O 0 etc.</b>

<b>excludeAmbiguous</b> exclude characters that are ambiguous in certain fonts, such as <b>{} () [] \/ ~ <> ; : . , ' " ?</b>

## Contributions

Contributions are welcome and greatly appreciated! If you find a bug, have a feature request, or want to contribute code, please open an issue or submit a pull request on <a href="github.com">Github</a>.

## License

FastPass.js is licensed under the <a href="https://opensource.org/license/mit/">MIT License</a>. Feel free to use, modify, and distribute the library as you see fit.

