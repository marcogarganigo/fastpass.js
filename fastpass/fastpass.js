var fastpass = (function () {

    // Private variables and methods
    var charsets = {
        lowercase: 'abcdefghijklmnopqrstuvwxyz',
        uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        numbers: '0123456789',
        symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?'
    };

    function getRandomInt(min, max) {
        var array = new Uint32Array(1);
        crypto.getRandomValues(array);
        return array[0] % (max - min + 1) + min;
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
            var charsetsToUse = options.charsets || ['lowercase', 'uppercase', 'numbers'];
            var excludeSimilar = options.excludeSimilar || false;
            var excludeAmbiguous = options.excludeAmbiguous || false;

            // Make sure at least one character set is selected
            if (charsetsToUse.length === 0) {
                throw new Error('At least one character set must be selected.');
            }

            var charset = '';
            for (var i = 0; i < charsetsToUse.length; i++) {
                var setName = charsetsToUse[i];
                if (charsets[setName]) {
                    charset += charsets[setName];
                }
            }

            if (excludeSimilar) {
                charset = charset.replace(/[iloIO01]/g, '');
            }

            if (excludeAmbiguous) {
                charset = charset.replace(/[{}()\[\]\/\\~<>;:.,'"\?]/g, '');
            }

            return generateRandomString(length, charset);
        }
    };
})();
