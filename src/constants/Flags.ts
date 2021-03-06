interface Flags {
    [key: string]: string;
}

const flags: Flags = {
    // 'Ascension Island': 'flag-ac',
    Andorra: 'flag-ad',
    'United Arab Emirates': 'flag-ae',
    Afghanistan: 'flag-af',
    'Antigua and Barbuda': 'flag-ag',
    Anguilla: 'flag-ai',
    Albania: 'flag-al',
    Armenia: 'flag-am',
    Angola: 'flag-ao',
    // Antarctica: 'flag-aq',
    Argentina: 'flag-ar',
    'American Samoa': 'flag-as',
    Austria: 'flag-at',
    Australia: 'flag-au',
    Aruba: 'flag-aw',
    // 'Åland Islands': 'flag-ax',
    Azerbaijan: 'flag-az',
    'Bosnia-Herzegovina': 'flag-ba',
    Barbados: 'flag-bb',
    Bangladesh: 'flag-bd',
    Belgium: 'flag-be',
    'Burkina Faso': 'flag-bf',
    Bulgaria: 'flag-bg',
    Bahrain: 'flag-bh',
    Burundi: 'flag-bi',
    Benin: 'flag-bj',
    // 'St. Barthélemy': 'flag-bl',
    Bermuda: 'flag-bm',
    'Brunei Darussalam': 'flag-bn',
    Bolivia: 'flag-bo',
    // 'Caribbean Netherlands': 'flag-bq',
    Brazil: 'flag-br',
    Bahamas: 'flag-bs',
    Bhutan: 'flag-bt',
    // 'Bouvet Island': 'flag-bv',
    Botsuana: 'flag-bw',
    Belarus: 'flag-by',
    Belize: 'flag-bz',
    Canada: 'flag-ca',
    // 'Cocos (Keeling) Islands': 'flag-cc',
    'DR Congo': 'flag-cd',
    'Central African Republic': 'flag-cf',
    Congo: 'flag-cg',
    Switzerland: 'flag-ch',
    "Cote d'Ivoire": 'flag-ci',
    Cookinseln: 'flag-ck',
    Chile: 'flag-cl',
    Cameroon: 'flag-cm',
    China: 'flag-cn',
    Colombia: 'flag-co',
    // 'Clipperton Island': 'flag-cp',
    'Costa Rica': 'flag-cr',
    Cuba: 'flag-cu',
    'Cape Verde': 'flag-cv',
    Curacao: 'flag-cw',
    'Christmas Island': 'flag-cx',
    Cyprus: 'flag-cy',
    'Czech Republic': 'flag-cz',
    Germany: 'flag-de',
    // 'Diego Garcia': 'flag-dg', // the same as 'flag-io'
    Djibouti: 'flag-dj',
    Denmark: 'flag-dk',
    Dominica: 'flag-dm',
    'Dominican Republic': 'flag-do',
    Algeria: 'flag-dz',
    // 'Ceuta & Melilla': 'flag-ea', // the same as 'flag-es'
    Ecuador: 'flag-ec',
    Estonia: 'flag-ee',
    Egypt: 'flag-eg',
    // 'Western Sahara': 'flag-eh',
    Eritrea: 'flag-er',
    Spain: 'flag-es',
    Ethiopia: 'flag-et',
    // 'European Union': 'flag-eu',
    Finland: 'flag-fi',
    Fiji: 'flag-fj',
    'Falkland Islands': 'flag-fk',
    'Federated States of Micronesia': 'flag-fm',
    'Faroe Island': 'flag-fo',
    France: 'flag-fr',
    Gabon: 'flag-ga',
    'United Kingdom': 'flag-gb',
    Grenada: 'flag-gd',
    Georgia: 'flag-ge',
    'French Guiana': 'flag-gf',
    Guernsey: 'flag-gg',
    Ghana: 'flag-gh',
    Gibraltar: 'flag-gi',
    Greenland: 'flag-gl',
    'The Gambia': 'flag-gm',
    Guinea: 'flag-gn',
    Guadeloupe: 'flag-gp',
    'Equatorial Guinea': 'flag-gq',
    Greece: 'flag-gr',
    // 'South Georgia & South Sandwich Islands': 'flag-gs',
    Guatemala: 'flag-gt',
    Guam: 'flag-gu',
    'Guinea-Bissau': 'flag-gw',
    Guyana: 'flag-gy',
    Hongkong: 'flag-hk',
    // 'Heard & McDonald Islands': 'flag-hm', // the same as 'flag-au'
    Honduras: 'flag-hn',
    Croatia: 'flag-hr',
    Haiti: 'flag-ht',
    Hungary: 'flag-hu',
    // 'Canary Islands': 'flag-ic',
    Indonesia: 'flag-id',
    Ireland: 'flag-ie',
    Israel: 'flag-il',
    'Isle of Man': 'flag-im',
    India: 'flag-in',
    // 'British Indian Ocean Territory': 'flag-io',
    Iraq: 'flag-iq',
    Iran: 'flag-ir',
    Iceland: 'flag-is',
    Italy: 'flag-it',
    Jersey: 'flag-je',
    Jamaica: 'flag-jm',
    Jordan: 'flag-jo',
    Japan: 'flag-jp',
    Kenya: 'flag-ke',
    Kyrgyzstan: 'flag-kg',
    Cambodia: 'flag-kh',
    Kiribati: 'flag-ki',
    Comoros: 'flag-km',
    'St. Kitts & Nevis': 'flag-kn',
    'Korea, North': 'flag-kp',
    'Korea, South': 'flag-kr',
    Kuwait: 'flag-kw',
    'Cayman-Inseln': 'flag-ky',
    Kazakhstan: 'flag-kz',
    Laos: 'flag-la',
    Lebanon: 'flag-lb',
    'St. Lucia': 'flag-lc',
    Liechtenstein: 'flag-li',
    'Sri Lanka': 'flag-lk',
    Liberia: 'flag-lr',
    Lesotho: 'flag-ls',
    Lithuania: 'flag-lt',
    Luxembourg: 'flag-lu',
    Latvia: 'flag-lv',
    Libya: 'flag-ly',
    Morocco: 'flag-ma',
    Monaco: 'flag-mc',
    Moldova: 'flag-md',
    Montenegro: 'flag-me',
    // 'St. Martin': 'flag-mf', // the same as 'flag-fr'
    Madagascar: 'flag-mg',
    'Marshall Islands': 'flag-mh',
    Macedonia: 'flag-mk',
    'North Macedonia': 'flag-mk',
    Mali: 'flag-ml',
    Myanmar: 'flag-mm',
    Mongolia: 'flag-mn',
    // 'Macau Sar China': 'flag-mo',
    'Mariana Islands': 'flag-mp',
    Martinique: 'flag-mq',
    Mauritania: 'flag-mr',
    Montserrat: 'flag-ms',
    Malta: 'flag-mt',
    Mauritius: 'flag-mu',
    Maldives: 'flag-mv',
    Malawi: 'flag-mw',
    Mexico: 'flag-mx',
    Malaysia: 'flag-my',
    Mozambique: 'flag-mz',
    Namibia: 'flag-na',
    // 'New Caledonia': 'flag-nc',
    Niger: 'flag-ne',
    // 'Norfolk Island': 'flag-nf',
    Nigeria: 'flag-ng',
    Nicaragua: 'flag-ni',
    Netherlands: 'flag-nl',
    Norway: 'flag-no',
    Nepal: 'flag-np',
    Nauru: 'flag-nr',
    Niue: 'flag-nu',
    'New Zealand': 'flag-nz',
    Oman: 'flag-om',
    Panama: 'flag-pa',
    Peru: 'flag-pe',
    // 'French Polynesia': 'flag-pf',
    'Papua New Guinea': 'flag-pg',
    Philippines: 'flag-ph',
    Pakistan: 'flag-pk',
    Poland: 'flag-pl',
    // 'St. Pierre & Miquelon': 'flag-pm',
    // 'Pitcairn Islands': 'flag-pn',
    'Puerto Rico': 'flag-pr',
    // 'Palestinian Territories': 'flag-ps',
    Portugal: 'flag-pt',
    Palau: 'flag-pw',
    Paraguay: 'flag-py',
    Qatar: 'flag-qa',
    Réunion: 'flag-re',
    Romania: 'flag-ro',
    Serbia: 'flag-rs',
    Russia: 'flag-ru',
    Rwanda: 'flag-rw',
    'Saudi Arabia': 'flag-sa',
    'Solomon Islands': 'flag-sb',
    Seychelles: 'flag-sc',
    Sudan: 'flag-sd',
    Sweden: 'flag-se',
    Singapore: 'flag-sg',
    // 'St. Helena': 'flag-sh',
    Slovenia: 'flag-si',
    // 'Svalbard & Jan Mayen': 'flag-sj', // the same as 'flag-no'
    Slovakia: 'flag-sk',
    'Sierra Leone': 'flag-sl',
    'San Marino': 'flag-sm',
    Senegal: 'flag-sn',
    Somalia: 'flag-so',
    Suriname: 'flag-sr',
    'Southern Sudan': 'flag-ss',
    'Sao Tome and Principe': 'flag-st',
    'El Salvador': 'flag-sv',
    'Sint Maarten': 'flag-sx',
    Syria: 'flag-sy',
    Swaziland: 'flag-sz',
    // 'Tristan Da Cunha': 'flag-ta', // the same as 'flag-sh'
    'Turks- and Caicosinseln': 'flag-tc',
    Chad: 'flag-td',
    // 'French Southern Territories': 'flag-tf',
    Togo: 'flag-tg',
    Thailand: 'flag-th',
    Tajikistan: 'flag-tj',
    // Tokelau: 'flag-tk',
    // 'Timor-Leste': 'flag-tl',
    Turkmenistan: 'flag-tm',
    Tunisia: 'flag-tn',
    Tonga: 'flag-to',
    Turkey: 'flag-tr',
    'Trinidad and Tobago': 'flag-tt',
    Tuvalu: 'flag-tv',
    'Chinese Taipei (Taiwan)': 'flag-tw',
    Tanzania: 'flag-tz',
    Ukraine: 'flag-ua',
    Uganda: 'flag-ug',
    // 'U.S. Outlying Islands': 'flag-um', // the same as 'flag-us'
    // 'United Nations': 'flag-un',
    'United States': 'flag-us',
    Uruguay: 'flag-uy',
    Uzbekistan: 'flag-uz',
    Vatican: 'flag-va',
    'St. Vincent & Grenadinen': 'flag-vc',
    Venezuela: 'flag-ve',
    'British Virgin Islands': 'flag-vg',
    'American Virgin Islands': 'flag-vi',
    Vietnam: 'flag-vn',
    Vanuatu: 'flag-vu',
    // 'Wallis & Futuna': 'flag-wf',
    Samoa: 'flag-ws',
    Kosovo: 'flag-xk',
    Yemen: 'flag-ye',
    // Mayotte: 'flag-yt',
    'South Africa': 'flag-za',
    Zambia: 'flag-zm',
    Zimbabwe: 'flag-zw',
    England: 'england',
    Scotland: 'scotland',
    Wales: 'wales'
};

export default flags;
