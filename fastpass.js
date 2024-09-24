var fastpass = (function () {
    const charsets = {
        lowercase: 'abcdefghijklmnopqrstuvwxyz',
        uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        numbers: '0123456789',
        symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?'
    };

    const getRandomInt = (min, max) => {
        const array = new Uint32Array(1);
        crypto.getRandomValues(array);
        return array[0] % (max - min + 1) + min;
    };

    const generateRandomString = (length, charset) => {
        let result = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = getRandomInt(0, charset.length - 1);
            result += charset.charAt(randomIndex);
        }
        return result;
    };

    // Public API
    return {
        /**
         * Generate a random string based on provided options.
         * @param {Object} options - Options for string generation.
         * @param {number} [options.length=12] - Length of the generated string.
         * @param {string[]} [options.charsets=['lowercase', 'uppercase', 'numbers']] - Character sets to include.
         * @param {boolean} [options.excludeSimilar=false] - Exclude similar looking characters.
         * @param {boolean} [options.excludeAmbiguous=false] - Exclude ambiguous characters.
         * @param {string} [options.customCharset] - A custom character set to use.
         * @returns {string} The generated random string.
         */
        generate: function (options = {}) {
            const {
                length = 12,
                charsets: charsetsToUse = ['lowercase', 'uppercase', 'numbers'],
                excludeSimilar = false,
                excludeAmbiguous = false,
                customCharset
            } = options;

            // Validate character sets
            if (charsetsToUse.length === 0 && !customCharset) {
                throw new Error('At least one character set must be selected or a custom charset must be provided.');
            }

            // Build the charset
            let charset = customCharset || '';
            if (!customCharset) {
                for (const setName of charsetsToUse) {
                    if (charsets[setName]) {
                        charset += charsets[setName];
                    } else {
                        throw new Error(`Invalid character set: ${setName}`);
                    }
                }
            }

            // Apply exclusions
            if (excludeSimilar) {
                charset = charset.replace(/[iloIO01]/g, '');
            }

            if (excludeAmbiguous) {
                charset = charset.replace(/[{}()\[\]\/\\~<>;:.,'"\?]/g, '');
            }

            if (charset.length === 0) {
                throw new Error('No valid characters available to generate a string.');
            }

            return generateRandomString(length, charset);
        }
    };
})();
