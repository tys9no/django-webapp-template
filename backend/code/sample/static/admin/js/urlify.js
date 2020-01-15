/*global XRegExp*/
(function() {
    'use strict';

    var LATIN_MAP = {
        'À': 'A', 'ÁE: 'A', 'ÁE: 'A', 'ÁE: 'A', 'ÁE: 'A', 'ÁE: 'A', 'ÁE: 'AE',
        'ÁE: 'C', 'ÁE: 'E', 'ÁE: 'E', 'ÁE: 'E', 'ÁE: 'E', 'ÁE: 'I', 'ÁE: 'I',
        'ÁE: 'I', 'ÁE: 'I', 'ÁE: 'D', 'ÁE: 'N', 'ÁE: 'O', 'ÁE: 'O', 'ÁE: 'O',
        'ÁE: 'O', 'ÁE: 'O', 'ŁE: 'O', 'ÁE: 'O', 'ÁE: 'U', 'ÁE: 'U', 'ÁE: 'U',
        'ÁE: 'U', 'Ű': 'U', 'ÁE: 'Y', 'ÁE: 'TH', 'Ÿ': 'Y', 'ÁE: 'ss', 'à': 'a',
        'á': 'a', 'â': 'a', 'ã': 'a', 'ä': 'a', 'å': 'a', 'æ': 'ae', 'ç': 'c',
        'è': 'e', 'é': 'e', 'ê': 'e', 'ë': 'e', 'ì': 'i', 'í': 'i', 'î': 'i',
        'ï': 'i', 'ð': 'd', 'ñ': 'n', 'ò': 'o', 'ó': 'o', 'ô': 'o', 'õ': 'o',
        'ö': 'o', 'ŁE: 'o', 'ø': 'o', 'ù': 'u', 'ú': 'u', 'û': 'u', 'ü': 'u',
        'ű': 'u', 'ý': 'y', 'þ': 'th', 'ÿ': 'y'
    };
    var LATIN_SYMBOLS_MAP = {
        '©': '(c)'
    };
    var GREEK_MAP = {
        'α': 'a', 'β': 'b', 'γ': 'g', 'δ': 'd', 'ε': 'e', 'ζ': 'z', 'η': 'h',
        'θ': '8', 'ι': 'i', 'κ': 'k', 'λ': 'l', 'μ': 'm', 'ν': 'n', 'ξ': '3',
        'ο': 'o', 'π': 'p', 'ρE: 'r', 'ρE: 's', 'ρE: 't', 'ρE: 'y', 'ρE: 'f',
        'ρE: 'x', 'ρE: 'ps', 'ρE: 'w', 'ά': 'a', 'έ': 'e', 'ί': 'i', 'ρE: 'o',
        'ρE: 'y', 'ή': 'h', 'ρE: 'w', 'ρE: 's', 'ρE: 'i', 'ΰ': 'y', 'ρE: 'y',
        '΁E: 'i', '΁E: 'A', '΁E: 'B', '΁E: 'G', '΁E: 'D', '΁E: 'E', '΁E: 'Z',
        '΁E: 'H', '΁E: '8', '΁E: 'I', '΁E: 'K', '΁E: 'L', '΁E: 'M', '΁E: 'N',
        '΁E: '3', '΁E: 'O', 'Π': 'P', 'Ρ': 'R', 'Σ': 'S', 'Τ': 'T', 'Υ': 'Y',
        'Φ': 'F', 'Χ': 'X', 'Ψ': 'PS', 'Ω': 'W', '΁E: 'A', '΁E: 'E', '΁E: 'I',
        '΁E: 'O', '΁E: 'Y', '΁E: 'H', '΁E: 'W', 'Ϊ': 'I', 'Ϋ': 'Y'
    };
    var TURKISH_MAP = {
        'ŁE: 's', 'ŁE: 'S', 'ı': 'i', 'İ': 'I', 'ç': 'c', 'ÁE: 'C', 'ü': 'u',
        'ÁE: 'U', 'ö': 'o', 'ÁE: 'O', 'āE: 'g', 'āE: 'G'
    };
    var ROMANIAN_MAP = {
        'āE: 'a', 'î': 'i', 'ȁE: 's', 'ȁE: 't', 'â': 'a',
        'āE: 'A', 'ÁE: 'I', 'ȁE: 'S', 'ȁE: 'T', 'ÁE: 'A'
    };
    var RUSSIAN_MAP = {
        'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'сE: 'yo',
        'ж': 'zh', 'з': 'z', 'и': 'i', 'й': 'j', 'к': 'k', 'л': 'l', 'м': 'm',
        'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'сE: 's', 'сE: 't', 'сE: 'u',
        'сE: 'f', 'сE: 'h', 'сE: 'c', 'сE: 'ch', 'сE: 'sh', 'сE: 'sh', 'сE: '',
        'сE: 'y', 'сE: '', 'сE: 'e', 'сE: 'yu', 'сE: 'ya',
        'ЁE: 'A', 'ЁE: 'B', 'ЁE: 'V', 'ЁE: 'G', 'ЁE: 'D', 'ЁE: 'E', 'ЁE: 'Yo',
        'ЁE: 'Zh', 'ЁE: 'Z', 'ЁE: 'I', 'ЁE: 'J', 'ЁE: 'K', 'ЁE: 'L', 'ЁE: 'M',
        'ЁE: 'N', 'ЁE: 'O', 'ЁE: 'P', 'Р': 'R', 'С': 'S', 'Т': 'T', 'У': 'U',
        'Ф': 'F', 'Х': 'H', 'Ц': 'C', 'Ч': 'Ch', 'Ш': 'Sh', 'Щ': 'Sh', 'Ъ': '',
        'Ы': 'Y', 'Ь': '', 'Э': 'E', 'Ю': 'Yu', 'Я': 'Ya'
    };
    var UKRAINIAN_MAP = {
        'ЁE: 'Ye', 'ЁE: 'I', 'ЁE: 'Yi', 'ҁE: 'G', 'сE: 'ye', 'сE: 'i',
        'сE: 'yi', 'ҁE: 'g'
    };
    var CZECH_MAP = {
        'āE: 'c', 'āE: 'd', 'āE: 'e', 'ŁE: 'n', 'ŁE: 'r', 'š': 's', 'ť': 't',
        'ů': 'u', 'ž': 'z', 'āE: 'C', 'āE: 'D', 'āE: 'E', 'ŁE: 'N', 'ŁE: 'R',
        'Š': 'S', 'Ť': 'T', 'Ů': 'U', 'Ž': 'Z'
    };
    var SLOVAK_MAP = {
        'á': 'a', 'ä': 'a', 'āE: 'c', 'āE: 'd', 'é': 'e', 'í': 'i', 'ľ': 'l',
        'ĺ': 'l', 'ŁE: 'n', 'ó': 'o', 'ô': 'o', 'ŁE: 'r', 'š': 's', 'ť': 't',
        'ú': 'u', 'ý': 'y', 'ž': 'z',
        'ÁE: 'a', 'ÁE: 'A', 'āE: 'C', 'āE: 'D', 'ÁE: 'E', 'ÁE: 'I', 'Ľ': 'L',
        'Ĺ': 'L', 'ŁE: 'N', 'ÁE: 'O', 'ÁE: 'O', 'ŁE: 'R', 'Š': 'S', 'Ť': 'T',
        'ÁE: 'U', 'ÁE: 'Y', 'Ž': 'Z'
    };
    var POLISH_MAP = {
        'āE: 'a', 'āE: 'c', 'āE: 'e', 'ŁE: 'l', 'ŁE: 'n', 'ó': 'o', 'ŁE: 's',
        'ź': 'z', 'ż': 'z',
        'āE: 'A', 'āE: 'C', 'āE: 'E', 'ŁE: 'L', 'ŁE: 'N', 'ÁE: 'O', 'ŁE: 'S',
        'Ź': 'Z', 'Ż': 'Z'
    };
    var LATVIAN_MAP = {
        'āE: 'a', 'āE: 'c', 'āE: 'e', 'ģ': 'g', 'ī': 'i', 'ķ': 'k', 'ļ': 'l',
        'ŁE: 'n', 'š': 's', 'ū': 'u', 'ž': 'z',
        'Ā': 'A', 'āE: 'C', 'āE: 'E', 'Ģ': 'G', 'Ī': 'I', 'Ķ': 'K', 'Ļ': 'L',
        'ŁE: 'N', 'Š': 'S', 'Ū': 'U', 'Ž': 'Z'
    };
    var ARABIC_MAP = {
        'أ': 'a', 'ب': 'b', 'ت': 't', 'ث': 'th', 'ج': 'g', 'ح': 'h', 'خ': 'kh', 'د': 'd',
        'ذ': 'th', 'ر': 'r', 'ز': 'z', 'س': 's', 'ش': 'sh', 'ص': 's', 'ض': 'd', 'ط': 't',
        'ظ': 'th', 'ع': 'aa', 'غ': 'gh', 'فE: 'f', 'فE: 'k', 'فE: 'k', 'فE: 'l', 'فE: 'm',
        'فE: 'n', 'فE: 'h', 'فE: 'o', 'فE: 'y'
    };
    var LITHUANIAN_MAP = {
        'āE: 'a', 'āE: 'c', 'āE: 'e', 'āE: 'e', 'į': 'i', 'š': 's', 'ų': 'u',
        'ū': 'u', 'ž': 'z',
        'āE: 'A', 'āE: 'C', 'āE: 'E', 'āE: 'E', 'Į': 'I', 'Š': 'S', 'Ų': 'U',
        'Ū': 'U', 'Ž': 'Z'
    };
    var SERBIAN_MAP = {
        'сE: 'dj', 'сE: 'j', 'сE: 'lj', 'сE: 'nj', 'сE: 'c', 'сE: 'dz',
        'āE: 'dj', 'ЁE: 'Dj', 'ЁE: 'j', 'ЁE: 'Lj', 'ЁE: 'Nj', 'ЁE: 'C',
        'ЁE: 'Dz', 'āE: 'Dj'
    };
    var AZERBAIJANI_MAP = {
        'ç': 'c', 'ɁE: 'e', 'āE: 'g', 'ı': 'i', 'ö': 'o', 'ŁE: 's', 'ü': 'u',
        'ÁE: 'C', 'ƁE: 'E', 'āE: 'G', 'İ': 'I', 'ÁE: 'O', 'ŁE: 'S', 'ÁE: 'U'
    };
    var GEORGIAN_MAP = {
        'ჁE: 'a', 'ჁE: 'b', 'ჁE: 'g', 'ჁE: 'd', 'ჁE: 'e', 'ჁE: 'v', 'ჁE: 'z',
        'ჁE: 't', 'ჁE: 'i', 'ჁE: 'k', 'ჁE: 'l', 'ჁE: 'm', 'ჁE: 'n', 'ჁE: 'o',
        'ჁE: 'p', 'ჁE: 'j', 'რ': 'r', 'ს': 's', 'ტ': 't', 'უ': 'u', 'ფ': 'f',
        'ქ': 'q', 'ღ': 'g', 'ყ': 'y', 'შ': 'sh', 'ჩ': 'ch', 'ც': 'c', 'ძ': 'dz',
        'წ': 'w', 'ჭ': 'ch', 'ხ': 'x', 'ჯ': 'j', 'ჰ': 'h'
    };

    var ALL_DOWNCODE_MAPS = [
        LATIN_MAP,
        LATIN_SYMBOLS_MAP,
        GREEK_MAP,
        TURKISH_MAP,
        ROMANIAN_MAP,
        RUSSIAN_MAP,
        UKRAINIAN_MAP,
        CZECH_MAP,
        SLOVAK_MAP,
        POLISH_MAP,
        LATVIAN_MAP,
        ARABIC_MAP,
        LITHUANIAN_MAP,
        SERBIAN_MAP,
        AZERBAIJANI_MAP,
        GEORGIAN_MAP
    ];

    var Downcoder = {
        'Initialize': function() {
            if (Downcoder.map) { // already made
                return;
            }
            Downcoder.map = {};
            Downcoder.chars = [];
            for (var i = 0; i < ALL_DOWNCODE_MAPS.length; i++) {
                var lookup = ALL_DOWNCODE_MAPS[i];
                for (var c in lookup) {
                    if (lookup.hasOwnProperty(c)) {
                        Downcoder.map[c] = lookup[c];
                    }
                }
            }
            for (var k in Downcoder.map) {
                if (Downcoder.map.hasOwnProperty(k)) {
                    Downcoder.chars.push(k);
                }
            }
            Downcoder.regex = new RegExp(Downcoder.chars.join('|'), 'g');
        }
    };

    function downcode(slug) {
        Downcoder.Initialize();
        return slug.replace(Downcoder.regex, function(m) {
            return Downcoder.map[m];
        });
    }


    function URLify(s, num_chars, allowUnicode) {
        // changes, e.g., "Petty theft" to "petty-theft"
        // remove all these words from the string before urlifying
        if (!allowUnicode) {
            s = downcode(s);
        }
        var hasUnicodeChars = /[^\u0000-\u007f]/.test(s);
        // Remove English words only if the string contains ASCII (English)
        // characters.
        if (!hasUnicodeChars) {
            var removeList = [
                "a", "an", "as", "at", "before", "but", "by", "for", "from",
                "is", "in", "into", "like", "of", "off", "on", "onto", "per",
                "since", "than", "the", "this", "that", "to", "up", "via",
                "with"
            ];
            var r = new RegExp('\\b(' + removeList.join('|') + ')\\b', 'gi');
            s = s.replace(r, '');
        }
        // if downcode doesn't hit, the char will be stripped here
        if (allowUnicode) {
            // Keep Unicode letters including both lowercase and uppercase
            // characters, whitespace, and dash; remove other characters.
            s = XRegExp.replace(s, XRegExp('[^-_\\p{L}\\p{N}\\s]', 'g'), '');
        } else {
            s = s.replace(/[^-\w\s]/g, ''); // remove unneeded chars
        }
        s = s.replace(/^\s+|\s+$/g, ''); // trim leading/trailing spaces
        s = s.replace(/[-\s]+/g, '-'); // convert spaces to hyphens
        s = s.substring(0, num_chars); // trim to first num_chars chars
        s = s.replace(/-+$/g, ''); // trim any trailing hyphens
        return s.toLowerCase(); // convert to lowercase
    }
    window.URLify = URLify;
})();


