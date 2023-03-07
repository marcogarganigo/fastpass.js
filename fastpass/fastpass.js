// Password Generator Library
var PasswordGenerator = (function () {

    // Private variables and methods
    var charsets = {
        lowercase: 'abcdefghijklmnopqrstuvwxyz',
        uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        numbers: '0123456789',
        symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?'
    };

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function generateRandomString(length, charset) {
        var result = '';
        for (var i = 0; i < length; i++) {
            var randomIndex = getRandomInt(0, charset.length - 1);
            result += charset.charAt(randomIndex);
        }
        return result;
    }

    // Public API
    return {
        generate: function (options) {
            options = options || {};
            var length = options.length || 12;
            var useLowercase = options.useLowercase !== undefined ? options.useLowercase : true;
            var useUppercase = options.useUppercase !== undefined ? options.useUppercase : true;
            var useNumbers = options.useNumbers !== undefined ? options.useNumbers : true;
            var useSymbols = options.useSymbols !== undefined ? options.useSymbols : false;

            var charset = '';
            if (useLowercase) {
                charset += charsets.lowercase;
            }
            if (useUppercase) {
                charset += charsets.uppercase;
            }
            if (useNumbers) {
                charset += charsets.numbers;
            }
            if (useSymbols) {
                charset += charsets.symbols;
            }

            return generateRandomString(length, charset);
        }
    };
})();
