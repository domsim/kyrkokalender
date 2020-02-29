// Array.sortBy
// Sort by date, then score (reversed), then name
//array.sortBy(function(o){ return [ o.date, -o.score, o.name ] };
(function () {
  if (typeof Object.defineProperty === 'function') {
    try {
      Object.defineProperty(Array.prototype, 'sortBy', {
        value: sb
      });
    } catch (e) {}
  }
  if (!Array.prototype.sortBy) Array.prototype.sortBy = sb;

  function sb(f) {
    for (var i = this.length; i;) {
      var o = this[--i];
      this[i] = [].concat(f.call(o, o, i), o);
    }
    this.sort(function (a, b) {
      for (var i = 0, len = a.length; i < len; ++i) {
        if (a[i] != b[i]) return a[i] < b[i] ? -1 : 1;
      }
      return 0;
    });
    for (var i = this.length; i;) {
      this[--i] = this[i][this[i].length - 1];
    }
    return this;
  }
})();

function isBlank(str) {
  return (!str || /^\s*$/.test(str));
}

var OT = [["1 Mosebok"],[ "2 Mosebok"],[ "3 Mosebok"],[ "4 Mosebok"],[ "5 Mosebok"],[ "Josua"],[ "Domarboken"],[ "Rut"],[ "1 Samuelsboken"],[ "2 Samuelsboken"],[ "1 Kungaboken"],[ "2 Kungaboken"],[ "1 Krönikeboken"],[ "2 Krönikeboken"],[ "Esra"],[ "Nehemja"],[ "Ester"],[ "Job"],[ "Psaltaren"],[ "Ordspråksboken"],[ "Predikaren"],[ "Höga Visan"],[ "Jesaja"],[ "Jeremia"],[ "Klagovisorna"],[ "Hesekiel"],[ "Daniel"],[ "Hosea"],[ "Joel"],[ "Amos"],[ "Obadja"],[ "Jona"],[ "Mika"],[ "Nahum"],[ "Habackuk"],[ "Sefanja"],[ "Haggai"],[ "Sakaria"],[ "Malaki"]];

var NT = [["Matteus"],[ "Markus"],["Lukas"],["Johannes"],["Apostlagärningarna"],["Romarbrevet"],["1 Korinthierbrevet"],["2 Korinthierbrevet"],["Galaterbrevet"],["Efesierbrevet"],["Filipperbrevet"],["Kolosserbrevet"],["1 Thessalonikerbrevet"],["2 Thessalonikerbrevet"],["1 Timotheosbrevet"],["2 Timotheosbrevet"],["Titusbrevet"],["Filemonbrevet"],["Hebreerbrevet"],["Jakobsbrevet"],["1 Petrusbrevet"],["2 Petrusbrevet"],["1 Johannesbrevet"],["2 Johannesbrevet"],["3 Johannesbrevet"],["Judasbrevet"],["Uppenbarelseboken"]];

var replaceBooks = [["1 Mos","1 Mosebok"],[ "2 Mos","2 Mosebok"], ["3 Mos","3 Mosebok"], ["4 Mos","4 Mosebok"], ["5 Mos","5 Mosebok"], ["Jos","Josua"], ["Dom","Domarboken"], ["Rut","Rut"], ["1 Sam","1 Samuelsboken"], ["2 Sam","2 Samuelsboken"], ["1 kon","1 Kungaboken"], ["2 kon","2 Kungaboken"], ["1 Kron","1 Krönikeboken"], ["2 Kron","2 Krönikeboken"], ["Esra","Esra"], ["Neh","Nehemja"], ["Est","Ester"], ["Job","Job"], ["Psalt","Psaltaren"],["Psa","Psaltaren"], ["Ords","Ordspråksboken"], ["Ord","Ordspråksboken"], ["Pred","Predikaren"], ["HV","Höga Visan"], ["Jes","Jesaja"], ["Jer","Jeremia"], ["klag","Klagovisorna"], ["kla","Klagovisorna"],["Hes", "Hesekiel"], ["Dan","Daniel"], ["Hos","Hosea"], ["Joel","Joel"], ["Amos","Amos"], ["Obad","Obadja"], ["Jona","Jona"], ["Mika","Mika"], ["Nah","Nahum"], ["Hab","Habackuk"], ["Sef","Sefanja"], ["Hag","Haggai"], ["Sak","Sakaria"], ["Mal","Malaki"],["Matt","Matteus"],["Mark","Markus"],["Luk","Lukas"],["Joh","Johannes"],["Apg","Apostlagärningarna"],["Rom","Romarbrevet"],["1 Kor","1 Korinthierbrevet"],["2 Kor","2 Korinthierbrevet"],["Gal","Galaterbrevet"],["Efes","Efesierbrevet"],["Fil","Filipperbrevet"],["Kol","Kolosserbrevet"],["1 Tess","1 Thessalonikerbrevet"],["2 Tess","2 Thessalonikerbrevet"],["1 Tim","1 Timotheosbrevet"],["2 Tim","2 Timotheosbrevet"],["Tit","Titusbrevet"],["Filem","Filemonbrevet"],["Hebr","Hebreerbrevet"],["Jak","Jakobsbrevet"],["1 Petr","1 Petrusbrevet"],["2 Petr","2 Petrusbrevet"],["1 Joh","1 Johannesbrevet"],["2 Joh","2 Johannesbrevet"],["3 Joh","3 Johannesbrevet"],["Jud","Judasbrevet"],["Upp","Uppenbarelseboken"]];
/*
var tn = '<i>Apg 1:5</i><b>Psalt 132</b> Ords 2';
 for (var i =0; i < replaceTags.length; i++) {
    console.log(replaceTags[i][0]);
 tn = tn.replace(new RegExp(replaceTags[i][0], 'g'),replaceTags[i][1]);
} 
*/

var replaceBooks = [
  ["1 Mos", "1 Mosebok"],
  ["2 Mos", "2 Mosebok"],
  ["3 Mos", "3 Mosebok"],
  ["4 Mos", "4 Mosebok"],
  ["5 Mos", "5 Mosebok"],
  ["Jos", "Josua"],
  ["Dom", "Domarboken"],
  ["Rut", "Rut"],
  ["1 Sam", "1 Samuelsboken"],
  ["2 Sam", "2 Samuelsboken"],
  ["1 kon", "1 Kungaboken"],
  ["2 kon", "2 Kungaboken"],
  ["1 Kron", "1 Krönikeboken"],
  ["2 Kron", "2 Krönikeboken"],
  ["Esra", "Esra"],
  ["Neh", "Nehemja"],
  ["Est", "Ester"],
  ["Job", "Job"],
  ["Psalt", "Psaltaren"],
  ["Psa", "Psaltaren"],
  ["Ords", "Ordspråksboken"],
  ["Ord", "Ordspråksboken"],
  ["Pred", "Predikaren"],
  ["HV", "Höga Visan"],
  ["Jes", "Jesaja"],
  ["Jer", "Jeremia"],
  ["klag", "Klagovisorna"],
  ["kla", "Klagovisorna"],
  ["Hes", "Hesekiel"],
  ["Dan", "Daniel"],
  ["Hos", "Hosea"],
  ["Joel", "Joel"],
  ["Amos", "Amos"],
  ["Obad", "Obadja"],
  ["Jona", "Jona"],
  ["Mika", "Mika"],
  ["Nah", "Nahum"],
  ["Hab", "Habackuk"],
  ["Sef", "Sefanja"],
  ["Hag", "Haggai"],
  ["Sak", "Sakaria"],
  ["Mal", "Malaki"],
  ["Matt", "Matteus"],
  ["Mark", "Markus"],
  ["Luk", "Lukas"],
  ["Joh", "Johannes"],
  ["Apg", "Apostlagärningarna"],
  ["Rom", "Romarbrevet"],
  ["1 Kor", "1 Korinthierbrevet"],
  ["2 Kor", "2 Korinthierbrevet"],
  ["Gal", "Galaterbrevet"],
  ["Efes", "Efesierbrevet"],
  ["Fil", "Filipperbrevet"],
  ["Kol", "Kolosserbrevet"],
  ["1 Tess", "1 Thessalonikerbrevet"],
  ["2 Tess", "2 Thessalonikerbrevet"],
  ["1 Tim", "1 Timotheosbrevet"],
  ["2 Tim", "2 Timotheosbrevet"],
  ["Tit", "Titusbrevet"],
  ["Filem", "Filemonbrevet"],
  ["Hebr", "Hebreerbrevet"],
  ["Jak", "Jakobsbrevet"],
  ["1 Petr", "1 Petrusbrevet"],
  ["2 Petr", "2 Petrusbrevet"],
  ["1 Joh", "1 Johannesbrevet"],
  ["2 Joh", "2 Johannesbrevet"],
  ["3 Joh", "3 Johannesbrevet"],
  ["Jud", "Judasbrevet"],
  ["Upp", "Uppenbarelseboken"]
];
var replaceBooks2yv = [
  ["1 Mos", "GEN"],
  ["2 Mos", "EXO"],
  ["3 Mos", "LEV"],
  ["4 Mos", "NUM"],
  ["5 Mos", "DEU"],
  ["Jos", "JOS"],
  ["Dom", "JDG"],
  ["Rut", "RUT"],
  ["1 Sam", "1SA"],
  ["2 Sam", "2SA"],
  ["1 kon", "1KI"],
  ["2 kon", "2KI"],
  ["1 Kron", "1CH"],
  ["2 Kron", "2CH"],
  ["Esra", "EZR"],
  ["Neh", "NEH"],
  ["Est", "EST"],
  ["Job", "JOB"],
  ["Psalt", "PSA"],
  ["Psa", "PSA"],
  ["Ords", "PRO"],
  ["Ord", "PRO"],
  ["Pred", "ECC"],
  ["HV", "SNG"],
  ["Jes", "ISA"],
  ["Jer", "JER"],
  ["klag", "LAM"],
  ["kla", "LAM"],
  ["Hes", "EZK"],
  ["Dan", "DAN"],
  ["Hos", "HOS"],
  ["Joel", "JOL"],
  ["Amos", "AMO"],
  ["Obad", "OBA"],
  ["Jona", "JON"],
  ["Mika", "MIC"],
  ["Nah", "NAM"],
  ["Hab", "HAB"],
  ["Sef", "ZEP"],
  ["Hag", "HAG"],
  ["Sak", "ZEC"],
  ["Mal", "MAL"],
  ["Matt", "MAT"],
  ["Mark", "MRK"],
  ["Luk", "LUK"],
  ["Joh", "JHN"],
  ["Apg", "ACT"],
  ["Rom", "ROM"],
  ["1 Kor", "1CO"],
  ["2 Kor", "2CO"],
  ["Gal", "GAL"],
  ["Efes", "EPH"],
  ["Fil", "PHP"],
  ["Kol", "COL"],
  ["1 Tess", "1TH"],
  ["2 Tess", "2TH"],
  ["1 Tim", "1TI"],
  ["2 Tim", "2TI"],
  ["Tit", "TIT"],
  ["Filem", "PHM"],
  ["Hebr", "HEB"],
  ["Jak", "JAS"],
  ["1 Petr", "1PE"],
  ["2 Petr", "2PE"],
  ["1 Joh", "1JN"],
  ["2 Joh", "2JN"],
  ["3 Joh", "3JN"],
  ["Jud", "JUD"],
  ["Upp", "REV"]
];



let bgbase = "https://www.biblegateway.com/passage/?version=SFB&src=tools&search=";
let yvbase = "https://www.bible.com/sv/bible/160/";
let ybasever = ".SFB98";

//create hyperlinks to youversion
function mkyv(str) {
  v = str;
  for (let i = 0; i < replaceBooks2yv.length; i++) {
    v = v.replace(new RegExp(replaceBooks2yv[i][0], 'g'), replaceBooks2yv[i][1]);
  }

  var strf = "";
  for (let i = 0; i < replaceBooks.length; i++) {
    strf = v.replace(new RegExp(replaceBooks2yv[i][1], 'g'), replaceBooks2yv[i][0]);
  }
  v = v.replace(new RegExp(' ', 'g'), '.');
  v = v.replace(new RegExp(':', 'g'), '.');
  v = "<a target='_blank' href='" + yvbase + v + ybasever + "' >" + str + "</a>";


  return v;


}
// addDays & subtractDays new mehods to Date
Date.prototype.addDays = function (days) {
  this.setDate(this.getDate() + parseInt(days));
  return this;
};

Date.prototype.subtractDays = function (days) {
  this.setDate(this.getDate() - parseInt(days));
  return this;
};

Date.prototype.getWeek = function() {
 // week starts on sunday
 // var onejan = new Date(this.getFullYear(), 0, 1);
 // return Math.ceil((((this - onejan) / 86400000) + onejan.getDay() + 1) / 7);
 // week starts on monday!
 var d = new Date(Date.UTC(this.getFullYear(), this.getMonth(), this.getDate()));
 var dayNum = d.getUTCDay() || 7;
 d.setUTCDate(d.getUTCDate() + 4 - dayNum);
 var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
 return Math.ceil((((d - yearStart) / 86400000) + 1)/7);
};

/*
* Next sunday starting from February 26th 2020
* new Date(2020,1,26).getNextDay(0)
* Sun Mar 01 2020 00:00:00 GMT+0100 (centraleuropeisk normaltid)
*/
Date.prototype.getNextDay = function(day) {
  return new Date(this.getFullYear(), this.getMonth(), this.getDate() + (day - new Date(this.getFullYear(), this.getMonth(), this.getDate()).getDay() + 7) % 7);
};



/*
 * First sunday in January 2020
 * firstDayInMonth(0,0,2020);
 * Sun Jan 05 2020 00:00:00 GMT+0100 (centraleuropeisk normaltid)
 */
function firstDayInMonth(day, m, y) {
  // day is in range 0 Sunday to 6 Saturday
  y = y*1 ||
    new Date().getFullYear();
  m = m*1 ||
    new Date().getMonth();
  return new Date(y, m, 1 +
    (day - new Date(y, m, 1).getDay() + 7) % 7);
}
/*
 * Third sunday in January 2020
 * nthDayInMonth(3,0,0,2020);
 * Sun Jan 05 2020 00:00:00 GMT+0100 (centraleuropeisk normaltid)
 * 
 * alla sundays in a year (52 weeks)
 * for (let i = 1; i <53; ++i) { console.log(nthDayInMonth(i,0,0,2020).toLocaleDateString()); }
 */
function nthDayInMonth(n, day, m, y) {
  // day is in range 0 Sunday to 6 Saturday
  y = y-1 ||
    new Date().getFullYear();
  m = m+12 ||
    new Date().getMonth();
  var d = new Date(y, m, 1 +
    (day - new Date(y, m, 1).getDay() + 7) % 7);
  return new Date(d.getFullYear(),
    d.getMonth(), d.getDate() + (n - 1) * 7);
}

/*
 * First sunday after 6 January 2020
 * firstDayAfterGivenDate(0,2020,0,6);
 * Sun Jan 12 2020 00:00:00 GMT+0100 (centraleuropeisk normaltid)
 */
function firstDayAfterGivenDate(day, y, m, d) {
  // day is in range 0 Sunday to 6 Saturday
    return new Date(y*1, m*1, d +(day - new Date(y, m, d).getDay() + 7) % 7);
}


/*
 * Get week nr of given date
 * getWeekNumber(new Date(2020,4,5));
 * [2020, 19]
 */
function getWeekNumber(d) {
  // Copy date so don't modify original
  d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  // Set to nearest Monday: current date + 1 - current day number
  // Make Sunday's day number 7
  d.setUTCDate(d.getUTCDate() + 1 - (d.getUTCDay() || 7));
  // Get first day of year
  var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  // Calculate full weeks to nearest Thursday
  var weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
  // Return array of year and week number
  return [d.getUTCFullYear(), weekNo];
}

function removeDuplicates(originalArray, prop) {
  var newArray = [];
  var lookupObject = {};

  for (var i in originalArray) {
    lookupObject[originalArray[i][prop]] = originalArray[i];
  }

  for (i in lookupObject) {
    newArray.push(lookupObject[i]);
  }
  return newArray;
}


let choosenYear = prompt('Vill du byta år?', new Date().getFullYear());
let thisYear = new Date().getFullYear() !== choosenYear ? choosenYear : new Date().getFullYear();
// fix year as number!
thisYear = parseInt(thisYear);

function argng(year) {
  return year % 3 == 2 ? 1 : year % 3 == 0 ? 2 : year % 3 == 1 ? 3 : null;
}
let argang = argng(thisYear);


// Skapar högtider med fast datum
let events = [];
//rätt
function nyarsdagen(year) {
  return {
    'Date': new Date(year, 0, 1),
    'Title': 'Nyårsdagen',
    'Color': 'Vit',
    'Theme': 'Kristi omskärelse – Namnet Jesus',
    'Psalms': 'Psalt 40:2-9',
    'OldT': '1 Mos 17:1-14',
    'Letters': 'Tit 3:4-7',
    'Gospel': 'Luk 2:21',
    'Description': '1 januari',
    'Link': '',
    'Prio': 1,
    'Argang': argng(year),
    'HHM': argng(year) == 2 ? 'Joh 14:13-14' : argng(year) == 3 ? 'Luk 13:6-9' : null,
    'AFT': argng(year) == 2 ? 'Rom 4:9-14' : argng(year) == 3 ? 'Hebr 13:7-16' : null
  };
}
//rätt
function epifania(year) {
  return {
    'Date': new Date(year, 0, 6),
    'Title': 'Epifania',
    'Color': 'Vit',
    'Theme': 'Kristi uppenbarelse',
    'Psalms': 'Psalt 72',
    'OldT': 'Jes 60:1-7',
    'Letters': '',
    'Gospel': 'Matt 2:1-12',
    'Description': '6 januari',
    'Link': '',
    'Prio': 1,
    'Argang': argng(year),
    'HHM': argng(year) == 2 ? 'Joh 8:12' : argng(year) == 3 ? 'Luk 11:29-36' : null,
    'AFT': argng(year) == 2 ? '2 Kor 4:3-6' : argng(year) == 3 ? '1 Tim 3:16' : null
  };
}

function pauliomvandelse(year) {
  return {
    'Date': new Date(year, 0, 25),
    'Title': 'Pauli omvändelse',
    'Color': '',
    'Theme': 'Pauli omvändelse',
    'Psalms': '',
    'OldT': '',
    'Letters': 'Apg 9:1-22',
    'Gospel': 'Matt 19:27-30',
    'Description': '25 januari',
    'Link': '',
    'Prio': 2,
    'Argang': argng(year),
    'HHM': null,
    'AFT': null
  }
}

function juldagen(year) {
  return {
    'Date': new Date(year, 11, 25),
    'Title': 'Juldagen',
    'Color': 'Vit',
    'Theme': 'Kristi födelse',
    'Psalms': 'Psalt 45:2-8',
    'OldT': 'Jes 9:2-7',
    'Letters': 'Hebr 1',
    'Gospel': 'Luk 2:1-20 (ottesång), Joh 1:1-14',
    'Description': '25 december',
    'Link': '',
    'Prio': 1,
    'Argang': argng(year + 1),
    'HHM': argng(year + 1) == 2 ? 'Joh 1:1-14' : argng(year + 1) == 3 ? 'Hebr 1' : null,
    'AFT': argng(year + 1) == 2 ? 'Matt 1:18-25' : argng(year + 1) == 3 ? 'Tit 2:11-15' : null
  };
}

function annandagjul(year) {
  return {
    'Date': new Date(year, 11, 26),
    'Title': 'Annandag Jul',
    'Color': 'Röd',
    'Theme': 'Trons martyrium',
    'Psalms': 'Psalt 2',
    'OldT': 'Jes 11:1-9',
    'Letters': 'Apg 6:8-15, 7:54-60',
    'Gospel': 'Matt 23:34-39',
    'Description': '26 december',
    'Link': '',
    'Prio': 1,
    'Argang': argng(year + 1),
    'HHM': argng(year + 1) == 2 ? 'Matt 10:32-39' : argng(year + 1) == 3 ? '1 Petr 4:12-19' : null,
    'AFT': argng(year + 1) == 2 ? 'Matt 2:13-18' : argng(year + 1) == 3 ? 'Upp 14:1-5' : null

  };
}

function johannes(year) {
  return {
    'Date': new Date(year, 11, 27),
    'Title': 'Johannes',
    'Color': '',
    'Theme': 'Sankt Johannes dag',
    'Psalms': '',
    'OldT': '',
    'Letters': '1 Joh 1:9-2:6',
    'Gospel': 'Joh 21:19-14',
    'Description': '27 december',
    'Link': '',
    'Prio': 1,
    'Argang': argng(year),
    'HHM': null,
    'AFT': null
  }
}

function menlosabarn(year) {
  return {
    'Date': new Date(year, 11, 28),
    'Title': 'Värnlösa barns dag',
    'Color': '',
    'Theme': 'Menlösa barns dag',
    'Psalms': '',
    'OldT': '1 Mos 48:7',
    'Letters': '',
    'Gospel': 'Matt 2:13-18',
    'Description': '28 december',
    'Link': '',
    'Prio': 1,
    'Argang': argng(year),
    'HHM': null,
    'AFT': null
  };
}
// beräkna Påsk vid angivet år
function getEaster(year) {
  var f = Math.floor,
    // Golden Number - 1
    G = year % 19,
    C = f(year / 100),
    // related to Epact
    H = (C - f(C / 4) - f((8 * C + 13) / 25) + 19 * G + 15) % 30,
    // number of days from 21 March to the Paschal full moon
    I = H - f(H / 28) * (1 - f(29 / (H + 1)) * f((21 - G) / 11)),
    // weekday for the Paschal full moon
    J = (year + f(year / 4) + I + 2 - C + f(C / 4)) % 7,
    // number of days from 21 March to the Sunday on or before the Paschal full moon
    L = I - J,
    month = 3 + f((L + 40) / 44),
    day = L + 28 - 31 * f(month / 4);

  return {
    'Date': new Date(year, month - 1, day),
    'Title': 'Påskdagen',
    'Color': 'Vit',
    'Theme': 'Kristus är uppstånden',
    'Psalms': 'Psalt 118:15-29',
    'OldT': 'Hos 6:1-3',
    'Letters': '1 Kor 5:7-8',
    'Gospel': 'Mark 16:1-8',
    'Description': 'Söndag efter första fullmåne efter vårdagjämningen (22 mar - 25 april)',
    'Link': '',
    'Prio': 1,
    'Argang': argng(year),
    'HHM': argng(year) == 2 ? 'Joh 20:1-10' : argng(year) == 3 ? 'Matt 28:1-8' : null,
    'AFT': argng(year) == 2 ? '1 Kor 15:12-21' : argng(year) == 3 ? 'Ef 1:15-23' : null
  };
}

// beräkna resterande högtider med Påskdagen som referens och ändrar prio om *

function septuagesima(year) {
  return {
    'Date': getEaster(year).Date.subtractDays(63),
    'Title': 'Septuagesima',
    'Color': 'Violett',
    'Theme': 'Guds oförskyllda nåd.',
    'Psalms': 'Psalt 80',
    'OldT': 'Jes 5:1-7',
    'Letters': '1 Kor 9:24-10:5',
    'Gospel': 'Matt 20:1-16',
    'Description': 'Söndag* 63 dagar före påsk',
    'Link': '',
    'Prio': 2,
    'Argang': argng(year),
    'HHM': argng(year) == 2 ? 'Matt 19:27-30' : argng(year) == 3 ? 'Luk 17:7-10' : null,
    'AFT': argng(year) == 2 ? '1 Kor 3' : argng(year) == 3 ? 'Fil 3:7-16' : null
  };
}
//rätt
function sexagesima(year) {
  return {
    'Date': septuagesima(year).Date.addDays(7),
    'Title': 'Sexagesima',
    'Color': 'Violett',
    'Theme': 'Guds ord',
    'Psalms': 'Psalt 119:89-112',
    'OldT': 'Amos 8:11-12',
    'Letters': '2 Kor 11:19-31',
    'Gospel': 'Luk 8:4-15',
    'Description': 'Söndag* 56 dagar före påsk',
    'Link': '',
    'Prio': 2,
    'Argang': argng(year),
    'HHM': argng(year) == 2 ? 'Joh 12:34-43' : argng(year) == 3 ? 'Matt 9:36-10:16' : null,
    'AFT': argng(year) == 2 ? 'Apg 17:10-15' : argng(year) == 3 ? '2 Tim 3:10-4:8' : null
  };

}
//rätt
function quinquagesima(year) {
  return {
    'Date': sexagesima(year).Date.addDays(7),
    'Title': 'Fastlagssöndagen (Esto mihi)',
    'Color': 'Violett',
    'Theme': 'Guds kärleks väg',
    'Psalms': 'Psalt 14',
    'OldT': 'Jer 8:4-12',
    'Letters': '1 Kor 13',
    'Gospel': 'Luk 18:31-43',
    'Description': 'Söndag 49 dagar före påsk - Quinquagesima',
    'Link': '',
    'Prio': 1,
    'Argang': argng(year),
    'HHM': argng(year) == 2 ? 'Joh 12:20-33' : argng(year) == 3 ? 'Mark10:32-45' : null,
    'AFT': argng(year) == 2 ? '1 Tim 2:4-7' : argng(year) == 3 ? '1 Kor 1:20-25' : null
  };
}

function askonsdagen(year) {
  return {
    'Date': sexagesima(year).Date.addDays(10),
    'Title': 'Askonsdagen',
    'Color': '',
    'Theme': 'Fastan börjar',
    'Psalms': '',
    'OldT': '',
    'Letters': 'Joel 2:12-17',
    'Gospel': 'Matt 6:16-21',
    'Description': 'Onsdag efter Fastlagssöndag',
    'Link': '',
    'Prio': 1,
    'Argang': argng(year),
    'HHM': null,
    'AFT': null
  };
}
//rätt
function invocavit(year) {
  return {
    'Date': getEaster(year).Date.subtractDays(42),
    'Title': '1 i Fastan (Invocavit)',
    'Color': 'Violett',
    'Theme': 'Frestelsen',
    'Psalms': 'Psalt 35:1-18',
    'OldT': '1 Mos 22:1-14',
    'Letters': '2 Kor 6:1-10',
    'Gospel': 'Matt 4:1–11',
    'Description': 'Söndag* 42 dagar före påsk',
    'Link': '',
    'Prio': 2,
    'Argang': argng(year),
    'HHM': argng(year) == 2 ? 'Matt 16:21-23' : argng(year) == 3 ? 'Luk 10:17-20' : null,
    'AFT': argng(year) == 2 ? 'Jak 1:12-15' : argng(year) == 3 ? 'Hebr 4:14-16' : null
  };
}
//rätt
function reminiscere(year) {
  return {
    'Date': invocavit(year).Date.addDays(7),
    'Title': '2 i Fastan (Reminiscere)',
    'Color': 'Violett',
    'Theme': 'Den kämpande tron',
    'Psalms': 'Psalt 35:19-28',
    'OldT': '2 Mos 33:12-23',
    'Letters': '1 Tess 4:1-8',
    'Gospel': 'Matt 15:21-28',
    'Description': 'Söndag*',
    'Link': '',
    'Prio': 2,
    'Argang': argng(year),
    'HHM': argng(year) == 2 ? 'Luk 7:36-50' : argng(year) == 3 ? 'Mark 9:14-32' : null,
    'AFT': argng(year) == 2 ? '1 Petr 4:1-6' : argng(year) == 3 ? 'Hebr 2:17,18' : null
  };
}
//rätt
function oculi(year) {
  return {
    'Date': reminiscere(year).Date.addDays(7),
    'Title': '3 i Fastan (Oculi)',
    'Color': 'Violett',
    'Theme': 'Kampen mot ondskan',
    'Psalms': 'Psalt 40:10-18',
    'OldT': 'Jer 26:1-16',
    'Letters': 'Efes 5:1-14',
    'Gospel': 'Luk 11:14-28',
    'Description': 'Söndag*',
    'Link': '',
    'Prio': 2,
    'Argang': argng(year),
    'HHM': argng(year) == 2 ? 'Joh 7:19-36' : argng(year) == 3 ? 'Luk 4:31-37' : null,
    'AFT': argng(year) == 2 ? 'Jak 11-11' : argng(year) == 3 ? 'Kol 1:24-29' : null
  };
}
//rätt
function mariabeb(year) {
  let mb = firstDayAfterGivenDate(0, year, 2, 22);
  if (mb.getTime() === getEaster(year).Date.subtractDays(7).getTime()){
    mb = mb.subtractDays(7); 
  }
  return {
    'Date': mb,
    'Title': 'Jungfru Marie bebådelsedag',
    'Color': 'Vit',
    'Theme': 'Bebådelsen',
    'Psalms': 'Psalt 132',
    'OldT': '5 Mos 14',
    'Letters': 'Jes 7:10-15',
    'Gospel': 'Luk 1:26-38',
    'Description': 'Söndag 22-28 mars eller söndag före Palmsöndag och då tidigast 8 mars',
    'Link': '',
    'Prio': 1,
    'Argang': argng(year),
    'HHM': argng(year) == 2 ? 'Luk 1: 39-45' : argng(year) == 3 ? 'Luk 1:46-56' : null,
    'AFT': argng(year) == 2 ? 'Upp 12:1-6' : argng(year) == 3 ? 'Upp 21:1-8' : null
  };
}

function laetare(year) {
  return {
    'Date': getEaster(year).Date.subtractDays(21),
    'Title': 'Midfastosöndagen (Laetare)',
    'Color': 'Violett',
    'Theme': 'Livets bröd',
    'Psalms': 'Psalt 78:12-25',
    'OldT': '4 Mos 20:1-13',
    'Letters': 'Gal 4:21-31',
    'Gospel': 'Joh 6:1-15',
    'Description': 'Söndag* 21 dagar före påsk',
    'Link': '',
    'Prio': 2,
    'Argang': argng(year),
    'HHM': argng(year) == 2 ? 'Joh 6:22-36' : argng(year) == 3 ? 'Upp 5 ' : null,
    'AFT': argng(year) == 2 ? 'Joh 6:52-71' : argng(year) == 3 ? '2 Kor 7:10' : null
  };
}

function judica(year) {
  return {
    'Date': getEaster(year).Date.subtractDays(14),
    'Title': 'Passionssöndagen (Judica)',
    'Color': 'Violett',
    'Theme': 'Fiendskapen mot Kristus',
    'Psalms': 'Psalt 43',
    'OldT': '4 Mos 21:4-9',
    'Letters': 'Hebr 9:11-15',
    'Gospel': 'Joh 8:46-59',
    'Description': 'Söndag* 14 dagar före påsk',
    'Link': '',
    'Prio': 2,
    'Argang': argng(year),
    'HHM': argng(year) == 2 ? 'Joh 11. 46-57' : argng(year) == 3 ? 'Joh 8:30-45' : null,
    'AFT': argng(year) == 2 ? 'Hebr 7:1-17' : argng(year) == 3 ? 'Kol 2:1-8' : null
  };
}

function palmsndg(year) {
  return {
    'Date': getEaster(year).Date.subtractDays(7),
    'Title': 'Palmsöndagen',
    'Color': 'Violett',
    'Theme': 'Kristus rider in i Jerusalem',
    'Psalms': 'Psalt 118:1-14',
    'OldT': 'Sak 9:8-12',
    'Letters': 'Fil 2:5-11',
    'Gospel': 'Joh 12:1-19',
    'Description': 'Söndag en vecka före Påsk',
    'Link': '',
    'Prio': 1,
    'Argang': argng(year),
    'HHM': argng(year) == 2 ? 'Matt 26:17-30' : argng(year) == 3 ? 'Luk 22:7-23' : null,
    'AFT': argng(year) == 2 ? '1 Kor 11:23-29' : argng(year) == 3 ? '1 Kor 10:14-22' : null
  };
}

function skrtorsd(year) {
  return {
    'Date': palmsndg(year).Date.addDays(4),
    'Title': 'Skärtorsdagen',
    'Color': 'Vit',
    'Theme': 'Altarets sakrament, det nya förbundet',
    'Psalms': 'Psalt 111',
    'OldT': '2 Mos 12:1-20',
    'Letters': '1 Kor 11:23-29',
    'Gospel': 'Joh 13:1-20',
    'Description': 'Torsdag före Påsk',
    'Link': '',
    'Prio': 1,
    'Argang': argng(year),
    'HHM': argng(year) == 2 ? 'Matt 26:17-30' : argng(year) == 3 ? 'Luk 22:7-23' : null,
    'AFT': argng(year) == 2 ? '1 Kor 11:23-29' : argng(year) == 3 ? '1 Kor 10:14-22' : null
  };
}

function annandagpask(year) {
  return {
    'Date': getEaster(year).Date.addDays(1),
    'Title': 'Annandag Påsk',
    'Color': 'Vit',
    'Theme': 'Vandringen med den Uppståndne',
    'Psalms': 'Psalt 16',
    'OldT': 'Job 19:23-27',
    'Letters': 'Apg 10:34-43',
    'Gospel': 'Luk 24:13-35',
    'Description': 'Måndag efter Påsk',
    'Link': '',
    'Prio': 1,
    'Argang': argng(year),
    'HHM': argng(year) == 2 ? 'Joh 20:11-18' : argng(year) == 3 ? 'Matt 28:9-15' : null,
    'AFT': argng(year) == 2 ? '2 Kor 5:11-21' : argng(year) == 3 ? '1 Joh 4:7-15' : null
  };
}

function fepask(year) {
  return {
    'Date': getEaster(year).Date.addDays(7),
    'Title': '1 e Påsk 2 i påsktiden (Quasimodogeniti)',
    'Color': 'Vit',
    'Theme': 'Genom stängda dörrar',
    'Psalms': 'Psalt 114',
    'OldT': '1 Mos 32:22-32',
    'Letters': '1 Joh 5:1-12',
    'Gospel': 'Joh 20:19-31',
    'Description': 'Söndag 7 dagar efter Påsk',
    'Link': '',
    'Prio': 1,
    'Argang': argng(year),
    'HHM': argng(year) == 2 ? 'Joh 21:1-14' : argng(year) == 3 ? 'Luk 24:36-48' : null,
    'AFT': argng(year) == 2 ? 'Apg 3:12-26' : argng(year) == 3 ? 'Apg 13:26-41' : null
  };
}

function aepask(year) {
  return {
    'Date': getEaster(year).Date.addDays(14),
    'Title': '2 e Påsk 3 i påsktiden (Misericordia Domini)',
    'Color': 'Vit',
    'Theme': 'Den gode herden',
    'Psalms': 'Psalt 23',
    'OldT': 'Hes 34:11-16',
    'Letters': '1 Petr 2:21-25',
    'Gospel': 'Joh 10:11-16',
    'Description': 'Söndag 14 dagar efter Påsk',
    'Link': '',
    'Prio': 1,
    'Argang': argng(year),
    'HHM': argng(year) == 2 ? 'Joh 21:15-25' : argng(year) == 3 ? 'Joh 10:1-10' : null,
    'AFT': argng(year) == 2 ? '1 Petr 5:1-5' : argng(year) == 3 ? 'Hebr 13:17-21' : null

  };
}

/*	  
// tepask getEaster(year).Date.addDays(21)
 3 e Påsk 4 i påsktiden (Jubilate)	38	3 e Påsk 4 i påsktiden (Jubilate)	Vit	Bedrövelse vänd i glädje	Psalt 100	Jes 40:25-31	1 Petr 2:11-20	Joh 16:16-22	Joh 17:1-8	Hebr  4:1-13	Joh 14:1-12	1 Petr 1:1-7	Söndag
 
 */
function tepask(year) {
  return {
    'Date': getEaster(year).Date.addDays(21),
    'Title': '3 e Påsk eller 4 i påsktiden (Jubilate)',
    'Color': 'Vit',
    'Theme': 'Bedrövelse vänd i glädje',
    'Psalms': 'Psalt 100',
    'OldT': 'Jes 40:25-31',
    'Letters': '1 Petr 2:11-20',
    'Gospel': 'Joh 16:16-22',
    'Description': 'Söndag 21 dagar efter Påsk',
    'Link': '',
    'Prio': 1,
    'Argang': argng(year),
    'HHM': argng(year) == 2 ? 'Joh 17:1-8' : argng(year) == 3 ? 'Joh 14:1-12' : null,
    'AFT': argng(year) == 2 ? 'Hebr  4:1-13' : argng(year) == 3 ? '1 Petr 1:1-7' : null
  };
}

/*
// fjepask getEaster(year).Date.addDays(28)
 4 e Påsk 5 i påsktiden (Cantate)	39	4 e Påsk 5 i påsktiden (Cantate)	Vit	Sanningens Ande	Psalt 98	Jes 49:1-13	Jak 1:16-21	Joh 16:5-15	Joh 17:9-17	Hebr 5:1-10	Joh 7:37-39	1 Joh 3:19-24	Söndag
*/
function fjepask(year) {
  return {
    'Date': getEaster(year).Date.addDays(28),
    'Title': '4 e Påsk 5 i påsktiden (Cantate)',
    'Color': 'Vit',
    'Theme': 'Sanningens Ande',
    'Psalms': 'Psalt 98',
    'OldT': 'Jes 49:1-13',
    'Letters': 'Jak 1:16-21',
    'Gospel': 'Joh 16:5-15',
    'Description': 'Söndag 28 dagar efter Påsk',
    'Link': '',
    'Prio': 1,
    'Argang': argng(year),
    'HHM': argng(year) == 2 ? 'Joh 17:9-17' : argng(year) == 3 ? 'Joh 7:37-39' : null,
    'AFT': argng(year) == 2 ? 'Hebr 5:1-10' : argng(year) == 3 ? '1 Joh 3:19-24' : null

  };
}
/*
// rogate getEaster(year).Date.addDays(35)
 Bönsöndagen (Rogate)	40	Bönsöndagen (Rogate)	Vit	Bönen	Psalt 102:2-15	1 Mos 18:16-33	Jak 1:22-27	Joh 16:23-33	Joh 17:18-23	Hebr 7:18-28	Luk 11:1-13	Jak 5:13-20	Söndag
 */
function rogate(year) {
  return {
    'Date': getEaster(year).Date.addDays(35),
    'Title': 'Bönsöndagen (Rogate)',
    'Color': 'Vit',
    'Theme': 'Bönen',
    'Psalms': 'Psalt 102:2-15',
    'OldT': '1 Mos 18:16-33',
    'Letters': 'Jak 1:22-27',
    'Gospel': 'Joh 16:23-33',
    'Description': 'söndag 35 dagar efter Påsk',
    'Link': '',
    'Prio': 1,
    'Argang': argng(year),
    'HHM': argng(year) == 2 ? 'Joh 17:18-23' : argng(year) == 3 ? 'Luk 11:1-13' : null,
    'AFT': argng(year) == 2 ? 'Hebr 7:18-28' : argng(year) == 3 ? 'Jak 5:13-20' : null

  };
}
/*
/* ascensione getEaster(year).Date.addDays(39)
 Kristi himmelsfärds dag	41	Kristi himmelsfärds dag	Vit	Himmelsfärden	Psalt 47:2-10	1 Mos 5:21-24	Apg 1:1-11	Mark 16:14-20 	Joh 17:24-26	Hebr 10:11-18	Luk 24:49-53	Efes 4:7-16	Torsdag 39 dagar efter Påsk
*/
function ascensione(year) {
  return {
    'Date': getEaster(year).Date.addDays(39),
    'Title': 'Kristi himmelsfärds dag',
    'Color': 'Vit',
    'Theme': 'Himmelsfärden',
    'Psalms': 'Psalt 47:2-10',
    'OldT': '1 Mos 5:21-24',
    'Letters': 'Apg 1:1-11',
    'Gospel': 'Mark 16:14-20',
    'Description': 'Torsdag 39 dagar efter Påsk',
    'Link': '',
    'Prio': 1,
    'Argang': argng(year),
    'HHM': argng(year) == 2 ? 'Joh 17:24-26' : argng(year) == 3 ? 'Luk 24:49-53' : null,
    'AFT': argng(year) == 2 ? 'Hebr 10:11-18' : argng(year) == 3 ? 'Efes 4:7-16' : null

  };
}
/* sjepask 
 6 e Påsk. (Exaudi)	42	6 e Påsk. (Exaudi)	Vit	Hjälparen, den Helige Ande.	Psalt 19	Jes 32:9-20	1 Petr 4:7-11	Joh 15:26–16:4	Joh 15:18-27	Kol 3:1-11	Luk 12:4-12	1 Petr 3:15-22	Söndag  42 dagar efter Påsk
*/
function sjepask(year) {
  return {
    'Date': getEaster(year).Date.addDays(42),
    'Title': '6 e Påsk (Exaudi)',
    'Color': 'Vit',
    'Theme': 'Hjälparen, den Helige Ande',
    'Psalms': 'Psalt 19',
    'OldT': 'Jes 32:9-20',
    'Letters': '1 Petr 4:7-11',
    'Gospel': 'Joh 15:26–16:4',
    'Description': 'Söndag  42 dagar efter Påsk',
    'Link': '',
    'Prio': 1,
    'Argang': argng(year),
    'HHM': argng(year) == 2 ? 'Joh 15:18-27' : argng(year) == 3 ? 'Luk 12:4-12' : null,
    'AFT': argng(year) == 2 ? 'Kol 3:1-11' : argng(year) == 3 ? '1 Petr 3:15-22' : null

  };
}
// pentecoste 	  
function pentecoste(year) {
  return {
    'Date': getEaster(year).Date.addDays(49),
    'Title': 'Pingstdagen',
    'Color': 'Röd',
    'Theme': 'Den Helige Andes utgjutande',
    'Psalms': 'Psalt 104:27-35',
    'OldT': 'Hes 36:22-32',
    'Letters': 'Apg 2:1-13',
    'Gospel': 'Joh 14:22-31',
    'Description': 'Söndag  49 dagar efter Påsk',
    'Link': '',
    'Prio': 1,
    'Argang': argng(year),
    'HHM': argng(year) == 2 ? 'Joh 15:10-17 ' : argng(year) == 3 ? 'Joh 14:15-21' : null,
    'AFT': argng(year) == 2 ? 'Efes 2:17-22' : argng(year) == 3 ? 'Apg 2:14-41' : null

  };
}
// annnandagpingst getEaster(year).Date.addDays(50)
function annnandagpingst(year) {
  return {
    'Date': getEaster(year).Date.addDays(50),
    'Title': 'Annandag pingst',
    'Color': 'Röd',
    'Theme': 'Guds nådiga vilja om människans salighet',
    'Psalms': 'Psalt 110',
    'OldT': 'Jes 52:7-12',
    'Letters': 'Apg 10:42-48',
    'Gospel': 'Joh 3:16-21',
    'Description': 'Måndag ',
    'Link': '',
    'Prio': 1,
    'Argang': argng(year),
    'HHM': argng(year) == 2 ? 'Joh 6:44-51' : argng(year) == 3 ? 'Joh 12:44-50' : null,
    'AFT': argng(year) == 2 ? '1 Kor 12:12-31' : argng(year) == 3 ? '1 Joh 4:7-15' : null

  };
}
function michaeli(year) {
  return {
    'Date': firstDayAfterGivenDate(0, year, 8, 29),
    'Title': 'Den helige Mikaels dag',
    'Color': 'Vit',
    'Theme': 'Änglarna',
    'Psalms': 'Psalt 103:19-22',
    'OldT': '2 Kon 6:14-17',
    'Letters': 'Upp 12:7-12',
    'Gospel': 'Matt 18:1-11',
    'Description': 'Söndag 29 september-5 oktober',
    'Link': '',
    'Prio': 1,
    'Argang': argng(year),
    'HHM': argng(year) == 2 ? 'Mark 10:13-16' : argng(year) == 3 ? 'Mark 9:33-50' : null,
    'AFT': argng(year) == 2 ? 'Hebr 2:1-10' : argng(year) == 3 ? 'Apg 12:1-19' : null
  };
}
function allahelgon(year) {
  return {
    'Date': firstDayAfterGivenDate(6, year, 9, 31),
    'Title': 'Alla helgons dag',
    'Color': 'Vit',
    'Theme': 'Saligprisningarna',
    'Psalms': 'Psalt 1',
    'OldT': '5 Mos 33:1-3',
    'Letters': 'Upp 7:2–17',
    'Gospel': 'Matt 5:1–12',
    'Description': 'Lördag 31 oktober-6 november',
    'Link': '',
    'Prio': 1,
    'Argang': argng(year),
    'HHM': argng(year) == 2 ? 'Matt 5:13-16' : argng(year) == 3 ? 'Luk 6:20-26' : null,
    'AFT': argng(year) == 2 ? 'Hebr 12:1-3' : argng(year) == 3 ? 'Upp 22:6-9' : null
  };
}
function augsburska(year) {
  return {
    'Date': firstDayAfterGivenDate(0, year, 5, 21),
    'Title': 'Augsburgska Bekännelsens dag',
    'Color': 'Röd',
    'Theme': 'Evangelium, Guds kraft till frälsning',
    'Psalms': 'Psalt 46',
    'OldT': '1 Sam 3:19-4:1',
    'Letters': 'Rom 1:16-17',
    'Gospel': 'Matt 11:25-30',
    'Description': 'Söndag 21-27 juni',
    'Link': '',
    'Prio': 1,
    'Argang': argng(year),
    'HHM': null,
    'AFT': null
  };
}
function trinitatis(year) {
  return {
    'Date': getEaster(year).Date.addDays(56),
    'Title': 'Heliga Trefaldighets dag',
    'Color': 'Vit',
    'Theme': 'Fadern, Sonen och den Helige Ande',
    'Psalms': 'Psalt 99',
    'OldT': 'Jes 6:1-7',
    'Letters': 'Rom 11:33-36',
    'Gospel': 'Joh 3:1-15',
    'Description': 'Söndag 56 dagar efter Påsk',
    'Link': '',
    'Prio': 1,
    'Argang': argng(year),
    'HHM': argng(year) == 2 ? 'Joh 15:1-9' : argng(year) == 3 ? 'Matt 28:16-20' : null,
    'AFT': argng(year) == 2 ? '1 Joh 3:1-12' : argng(year) == 3 ? 'Kol 1:12-23' : null
  };
}
/* 
 
// prio 2:
// trinitatis1 
*/
function trinitatis1(year) {
  return {
  'Date': trinitatis(year).Date.addDays(7*1),
  'Title': '1 e Trefaldighet',
  'Color': 'Grön',
  'Theme':'Rik inför Gud',
  'Psalms': 'Psalt 13',
  'OldT': '5 Mos 6:4-15',
  'Letters': '1 Joh 4:16-21',
  'Gospel': 'Luk 16:19-31',
  'Description' : 'första söndag* efter trinitatis',
  'Link': '',
  'Prio': 2,
  'Argang' : argng(year),
  'HHM': argng(year) == 2 ? 'Luk 12:13-21' : argng(year) == 3 ? 'Matt 16:24-28': null,
  'AFT': argng(year) == 2 ? 'Rom 1:1-15' : argng(year) == 3 ? '1 Tim 6:6-19': null

  };
}

// trinitatis2 2 e Trefaldighet	49

function trinitatis2(year) {
  return {
  'Date': trinitatis(year).Date.addDays(7*2),
  'Title': '2 e Trefaldighet',
  'Color': 'Grön',
  'Theme':'Den stora måltiden',
  'Psalms': 'Psalt 66',
  'OldT': 'Ords 9:1-12',
  'Letters': '1 Joh 3:13-18',
  'Gospel': 'Luk 14:15-24',
  'Description' : '2:a Söndag* efter Trefaldighet',
  'Link': '',
  'Prio': 2,
  'Argang' : argng(year),
  'HHM': argng(year) == 2 ? 'Luk 14:25-35' : argng(year) == 3 ? 'Luk 9:51-62': null,
  'AFT': argng(year) == 2 ? 'Rom 1:18-25' : argng(year) == 3 ? '2 Petr 1:1-11': null

  };
}


// trinitatis3 3 e Trefaldighet	50
												
function trinitatis3(year) {
  return {
  'Date': trinitatis(year).Date.addDays(7*3),
  'Title': '3 e Trefaldighet',
  'Color': 'Grön',
  'Theme':'Förlorad och återfunnen',
  'Psalms': 'Psalt 25',
  'OldT': 'Jes 12',
  'Letters': '1 Petr 5:6-14',
  'Gospel': 'Luk 15:1-10',
  'Description' : '3:e Söndag* efter Trefaldighet',
  'Link': '',
  'Prio': 2,
  'Argang' : argng(year),
  'HHM': argng(year) == 2 ? 'Luk 15:11-32' : argng(year) == 3 ? 'Matt 9:9-13': null,
  'AFT': argng(year) == 2 ? 'Rom 2:1-16' : argng(year) == 3 ? 'Ef 2:1-9': null

  };
}


// trinitatis4 4 e Trefaldighet	51

function trinitatis4(year) {
  return {
  'Date': trinitatis(year).Date.addDays(7*4),
  'Title': '4 e Trefaldighet',
  'Color': 'Grön',
  'Theme':'Grandet och bjälken',
  'Psalms': 'Psalt 27',
  'OldT': 'Jes 65:17-25',
  'Letters': 'Rom 8:18-25',
  'Gospel': 'Luk 6:36-42',
  'Description' : '4:e Söndag* efter Trinitatis',
  'Link': '',
  'Prio': 2,
  'Argang' : argng(year),
  'HHM': argng(year) == 2 ? 'Joh 8:1-11' : argng(year) == 3 ? 'Matt 7:1-6': null,
  'AFT': argng(year) == 2 ? 'Rom 2:17-29' : argng(year) == 3 ? 'Rom 14': null

  };
}


// trinitatis5  5 e Trefaldighet	52

function trinitatis5(year) {
  return {
  'Date': trinitatis(year).Date.addDays(7*5),
  'Title': '5 e Trefaldighet',
  'Color': 'Röd',
  'Theme':'Apostlarnas kallelse',
  'Psalms': 'Psalt 112',
  'OldT': 'Klag 3:22-33',
  'Letters': '1 Petr 3:8-15',
  'Gospel': 'Luk 5:1-11',
  'Description' : '5:e Söndag* efter Trinitatis eller apostlarnadagen',
  'Link': '',
  'Prio': 2,
  'Argang' : argng(year),
  'HHM': argng(year) == 2 ? 'Joh 1:35-51' : argng(year) == 3 ? 'Matt 16:13-20': null,
  'AFT': argng(year) == 2 ? 'Rom 3:1-20' : argng(year) == 3 ? 'Apg 26:1-29': null

  };
}


// trinitatis6 6 e Trefaldighet	53

function trinitatis6(year) {
  return {
  'Date': trinitatis(year).Date.addDays(7*6),
  'Title': '6 e Trefaldighet',
  'Color': 'Grön',
  'Theme':'Rättfärdighetens fordran',
  'Psalms': 'Psalt 28',
  'OldT': 'Rut 1:1-18',
  'Letters': 'Rom 6:1-11',
  'Gospel': 'Matt 5:20-26',
  'Description' : '6:e Söndag* efter Trinitatis',
  'Link': '',
  'Prio': 2,
  'Argang' : argng(year),
  'HHM': argng(year) == 2 ? 'Matt 5:17-19' : argng(year) == 3 ? 'Matt 5:27-42': null,
  'AFT': argng(year) == 2 ? 'Rom 3:21-31' : argng(year) == 3 ? 'Jak 2': null

  };
}


// trinitatis7  Kristi förklarings dag	54	

 function trinitatis7(year) {
  return {
  'Date': trinitatis(year).Date.addDays(7*7),
  'Title': 'Kristi förklarings dag',
  'Color': 'Vit',
  'Theme':'Kristus förklarad',
  'Psalms': 'Psalt 21',
  'OldT': '2 Mos 3:1-10',
  'Letters': '2 Petr 1:16-18',
  'Gospel': 'Matt 17:1-8',
  'Description' : '7:e Söndag* efter Trefaldighet',
  'Link': '',
  'Prio': 2,
  'Argang' : argng(year),
  'HHM': argng(year) == 2 ? 'Joh 13:31-32' : argng(year) == 3 ? 'Matt 17:9-13': null,
  'AFT': argng(year) == 2 ? '2 Kor 12:1-13' : argng(year) == 3 ? 'Upp 1:9-20': null

  };
}


//  trinitatis8 8 e Trefaldighet	55

function trinitatis8(year) {
  return {
  'Date': trinitatis(year).Date.addDays(7*8),
  'Title': '8 e Trefaldighet',
  'Color': 'Grön',
  'Theme':'Sanning och sken',
  'Psalms': 'Psalt 94',
  'OldT': 'Jer 23:16-32',
  'Letters': 'Rom 8:12-17',
  'Gospel': 'Matt 7:15-21',
  'Description' : '8:e Söndag* efter Trinitatis',
  'Link': '',
  'Prio': 2,
  'Argang' : argng(year),
  'HHM': argng(year) == 2 ? 'Matt 7:12-14' : argng(year) == 3 ? 'Matt 7:22-29': null,
  'AFT': argng(year) == 2 ? 'Rom 4:1-8' : argng(year) == 3 ? '1 Joh 4:1-6': null

  };
}


// trinitatis9 9 e Trefaldighet	56

function trinitatis9(year) {
  return {
  'Date': trinitatis(year).Date.addDays(7*9),
  'Title': '9 e Trefaldighet',
  'Color': 'Grön',
  'Theme':'Trohet',
  'Psalms': 'Psalt 54',
  'OldT': 'Ords 16:1-9',
  'Letters': '1 Kor 10:6-13',
  'Gospel': 'Luk 16:1-9',
  'Description' : '9:e Söndag* efter Trefaldighet',
  'Link': '',
  'Prio': 2,
  'Argang' : argng(year),
  'HHM': argng(year) == 2 ? 'Luk 12:42-48' : argng(year) == 3 ? 'Luk 16:10-17': null,
  'AFT': argng(year) == 2 ? 'Rom 4:9-25' : argng(year) == 3 ? '2 Tess 3:6-18': null

  };
}


// trinitatis10  10 e Trefaldighet	57
												
function trinitatis10(year) {
  return {
  'Date': trinitatis(year).Date.addDays(7*10),
  'Title': '10 e Trefaldighet',
  'Color': 'Grön',
  'Theme':'Förspillda tillfällen',
  'Psalms': 'Psalt 55',
  'OldT': 'Jer 7:1-15',
  'Letters': '1 Kor 12:1-11',
  'Gospel': 'Luk 19:41-48',
  'Description' : '10:e Söndag* efter Trinitatis',
  'Link': '',
  'Prio': 2,
  'Argang' : argng(year),
  'HHM': argng(year) == 2 ? 'Joh 8:21-29' : argng(year) == 3 ? 'Matt 11:20-24': null,
  'AFT': argng(year) == 2 ? 'Rom 5:1-11' : argng(year) == 3 ? 'Hebr 3:12-19': null

  };
}


// trinitatis11 11 e Trefaldighet	58										 	

function trinitatis11(year) {
  return {
  'Date': trinitatis(year).Date.addDays(7*11),
  'Title': '11 e Trefaldighet',
  'Color': 'Grön',
  'Theme':'Sann och falsk rättfärdighet',
  'Psalms': 'Psalt 51:1-15',
  'OldT': 'Dan 9:15-19	1',
  'Letters': ' Kor 15:1-11',
  'Gospel': 'Luk 18:9-14',
  'Description' : '11:e Söndag* efter Trinitatis',
  'Link': '',
  'Prio': 2,
  'Argang' : argng(year),
  'HHM': argng(year) == 2 ? 'Matt 21:28-32' : argng(year) == 3 ? 'Matt 23:1-12': null,
  'AFT': argng(year) == 2 ? 'Rom 5:12-21' : argng(year) == 3 ? '1 Joh 1:8-2:2': null

  };
}


// trinitatis12 12 e Trefaldighet	59												

function trinitatis12(year) {
  return {
  'Date': trinitatis(year).Date.addDays(7*12),
  'Title': '12 e Trefaldighet',
  'Color': 'Grön',
  'Theme':'Tungans bruk',
  'Psalms': 'Psalt 51:16-21',
  'OldT': 'Jes 29:17-24',
  'Letters': '2 Kor 3:4-18',
  'Gospel': 'Mark 7:31-37',
  'Description' : '12:3 Söndag* efter Trinitatis',
  'Link': '',
  'Prio': 2,
  'Argang' : argng(year),
  'HHM': argng(year) == 2 ? 'Matt 12:33-37' : argng(year) == 3 ? 'Matt 15:29-39': null,
  'AFT': argng(year) == 2 ? 'Rom 6:12-23' : argng(year) == 3 ? '1 Kor 2:6-16': null

  };
}


// trinitatis13 13 e Trefaldighet	60												
function trinitatis13(year) {
  return {
  'Date': trinitatis(year).Date.addDays(7*13),
  'Title': '13 e Trefaldighet',
  'Color': 'Grön',
  'Theme':'Den barmhärtige samariten',
  'Psalms': 'Psalt 74',
  'OldT': 'Sak 7:4-14',
  'Letters': 'Gal 3:15-22',
  'Gospel': 'Luk 10:23-37',
  'Description' : '13:e Söndag* efter Trinitatis',
  'Link': '',
  'Prio': 2,
  'Argang' : argng(year),
  'HHM': argng(year) == 2 ? 'Matt 5:43-6:4' : argng(year) == 3 ? 'Matt 11:25-30': null,
  'AFT': argng(year) == 2 ? 'Rom 7:1-6' : argng(year) == 3 ? '1 Tim 1:1-17': null

  };
}


// trinitatis14  14 e Trefaldighet	61											 21	

function trinitatis14(year) {
  return {
  'Date': trinitatis(year).Date.addDays(7*14),
  'Title': '14 e Trefaldighet',
  'Color': 'Grön',
  'Theme':'Trons tacksamhet',
  'Psalms': 'Psalt 34',
  'OldT': 'Ords 4:10-27',
  'Letters': 'Gal 5:16-24',
  'Gospel': 'Luk 17:11-19',
  'Description' : '14:e Söndag* efter Trinitatis',
  'Link': '',
  'Prio': 2,
  'Argang' : argng(year),
  'HHM': argng(year) == 2 ? 'Joh 5:1-18' : argng(year) == 3 ? 'Luk 4:23-30': null,
  'AFT': argng(year) == 2 ? 'Rom 7:7-25' : argng(year) == 3 ? '2 Tim 2:14-26': null

  };
}


// trinitatis15  15 e Trefaldighet	62												

function trinitatis15(year) {
  return {
  'Date': trinitatis(year).Date.addDays(7*15),
  'Title': '15 e Trefaldighet',
  'Color': 'Grön',
  'Theme':'Den angelägnaste omsorgen',
  'Psalms': 'Psalt 86',
  'OldT': '1 Kon 17:1-16',
  'Letters': 'Gal 6:1-10',
  'Gospel': 'Matt 6:24-34',
  'Description' : '15:e Söndag* efter Trinitatis',
  'Link': '',
  'Prio': 2,
  'Argang' : argng(year),
  'HHM': argng(year) == 2 ? 'Luk 10:38-42' : argng(year) == 3 ? 'Matt 6:19-23': null,
  'AFT': argng(year) == 2 ? 'Rom 8:1-17' : argng(year) == 3 ? '2 Kor 9:1-15': null

  };
}

// trinitatis16 16 e Trefaldighet	64												

function trinitatis16(year) {
  return {
  'Date': trinitatis(year).Date.addDays(7*16),
  'Title': '16 e Trefaldighet',
  'Color': 'Grön',
  'Theme':'Uppståndelsen och livet',
  'Psalms': 'Psalt 91',
  'OldT': 'Job 5:17-27',
  'Letters': 'Efes 3:13-21',
  'Gospel': 'Luk 7:11-17',
  'Description' : '16:e Söndag* efter Trinitatis',
  'Link': '',
  'Prio': 2,
  'Argang' : argng(year),
  'HHM': argng(year) == 2 ? 'Joh 11:1-45' : argng(year) == 3 ? 'Joh 5:19-21': null,
  'AFT': argng(year) == 2 ? 'Rom 8:18-39' : argng(year) == 3 ? 'Fil 1:12-26': null

  };
}


// trinitatis17  17 e Trefaldighet	65												

function trinitatis17(year) {
  return {
  'Date': trinitatis(year).Date.addDays(7*17),
  'Title': '17 e Trefaldighet',
  'Color': 'Grön',
  'Theme':'En kristen människas frihet',
  'Psalms': 'Psalt 119:137-144',
  'OldT': 'Ords 25:6-13',
  'Letters': 'Efes 4:1-6',
  'Gospel': 'Luk 14:1-11',
  'Description' : '17:e Söndag* efter Trinitatis',
  'Link': '',
  'Prio': 2,
  'Argang' : argng(year),
  'HHM': argng(year) == 2 ? 'Mark 2:18-3:6' : argng(year) == 3 ? 'Mark 7:1-23': null,
  'AFT': argng(year) == 2 ? 'Rom 9:1-13' : argng(year) == 3 ? 'Gal 5:1-15': null

  };
}


// trinitatis18 18 e Trefaldighet	67
												
function trinitatis18(year) {
  return {
  'Date': trinitatis(year).Date.addDays(7*18),
  'Title': '18 e Trefaldighet',
  'Color': 'Grön',
  'Theme':'Trons lydnad',
  'Psalms': 'Psalt 96',
  'OldT': '2 Krön 1:7-12',
  'Letters': '1 Kor 1:1-9',
  'Gospel': 'Matt 22:34-46',
  'Description' : '18:e Söndag* efter Trinitatis',
  'Link': '',
  'Prio': 2,
  'Argang' : argng(year),
  'HHM': argng(year) == 2 ? 'Joh 10:22-39' : argng(year) == 3 ? 'Mark 10:17-27': null,
  'AFT': argng(year) == 2 ? 'Rom 9:14-33' : argng(year) == 3 ? '1 Joh 2:7-17': null

  };
}


// trinitatis19  19 e Trefaldighet	68												

function trinitatis19(year) {
  return {
  'Date': trinitatis(year).Date.addDays(7*19),
  'Title': '19 e Trefaldighet',
  'Color': 'Grön',
  'Theme':'Människosonens makt',
  'Psalms': 'Psalt 48',
  'OldT': '1 Mos 28:10-22',
  'Letters': 'Efes 4:17-32',
  'Gospel': 'Matt 9:1-8',
  'Description' : '19:e Söndag* efter Trefaldighet',
  'Link': '',
  'Prio': 2,
  'Argang' : argng(year),
  'HHM': argng(year) == 2 ? 'Joh 9-1-41' : argng(year) == 3 ? 'Luk 13:10-17': null,
  'AFT': argng(year) == 2 ? 'Rom 10:1-13' : argng(year) == 3 ? '1 Kor 2:1-5': null

  };
}


// trinitatis20  20 e Trefaldighet	70
											 	
function trinitatis20(year) {
  return {
  'Date': trinitatis(year).Date.addDays(7*20),
  'Title': '20 e Trefaldighet',
  'Color': 'Grön',
  'Theme':'Bröllopskläder',
  'Psalms': 'Psalt 145',
  'OldT': 'Ords 2:1-11',
  'Letters': 'Efes 5:15-21',
  'Gospel': 'Matt 22:1-14',
  'Description' : '20:e Söndag* efter Trefaldighet (1 –7 november)?',
  'Link': '',
  'Prio': 2,
  'Argang' : argng(year),
  'HHM': argng(year) == 2 ? 'Matt 13:44-46' : argng(year) == 3 ? 'Matt 21:33-46': null,
  'AFT': argng(year) == 2 ? 'Rom 10:14-21' : argng(year) == 3 ? 'Hebr 10:19-31': null

  };
}


// trinitatis21 21 e Trefaldighet	71											 	

function trinitatis21(year) {
  return {
  'Date': trinitatis(year).Date.addDays(7*21),
  'Title': '21 e Trefaldighet',
  'Color': 'Grön',
  'Theme':'Den frälsande tron',
  'Psalms': 'Psalt 119:1-9',
  'OldT': '2 Sam 7:17-29',
  'Letters': 'Efes 6:10-20',
  'Gospel': 'Joh 4:43-54',
  'Description' : '21:e Söndag* efter Trinitatis',
  'Link': '',
  'Prio': 2,
  'Argang' : argng(year),
  'HHM': argng(year) == 2 ? 'Matt 16:1-4' : argng(year) == 3 ? 'Matt 9:27-31': null,
  'AFT': argng(year) == 2 ? 'Rom 11:1-12' : argng(year) == 3 ? '1 Joh 2:18-29': null

  };
}


// trinitatis22 trinitatis(year).Date.addDays(7*22) 22 e Trefaldighet	72				Psalt 130								

function trinitatis22(year) {
  return {
  'Date': trinitatis(year).Date.addDays(7*22),
  'Title': '22 e Trefaldighet',
  'Color': 'Grön',
  'Theme':'Konungens räkenskap',
  'Psalms': 'Psalt 130',
  'OldT': 'Ords 24:13-20',
  'Letters': 'Fil 1:1-11',
  'Gospel': 'Matt 18:23-35',
  'Description' : '22:e Söndag* efter Trinitatis',
  'Link': '',
  'Prio': 2,
  'Argang' : argng(year),
  'HHM': argng(year) == 2 ? 'Matt 18:15-22' : argng(year) == 3 ? 'Mark 4:21-25': null,
  'AFT': argng(year) == 2 ? 'Rom 11:13-24' : argng(year) == 3 ? '1 Tess 5:14-28': null

  };
}


// trinitatis23  23 e Trefaldighet	73	23 e Trefaldighet	Grön	Det dubbla medborgarskapet	Psalt 85	2 Kon 23:1-3	Fil 3:17-4:3	Matt 22:15-22	Mark 12:41-44	Rom 11:25-36	Matt 17:24-27	Rom 13:1-7	
 
function trinitatis23(year) {
  return {
  'Date': trinitatis(year).Date.addDays(7*23),
  'Title': '23 e Trefaldighet',
  'Color': 'Grön',
  'Theme':'Det dubbla medborgarskapet',
  'Psalms': 'Psalt 85',
  'OldT': '2 Kon 23:1-3',
  'Letters': 'Fil 3:17-4:3',
  'Gospel': 'Matt 22:15-22',
  'Description' : '23:e Söndag* efter Trinitatis',
  'Link': '',
  'Prio': 2,
  'Argang' : argng(year),
  'HHM': argng(year) == 2 ? 'Mark 12:41-44' : argng(year) == 3 ? 'Matt 17:24-27': null,
  'AFT': argng(year) == 2 ? 'Rom 11:25-36' : argng(year) == 3 ? 'Rom 13:1-7': null

  };
}

// trinitatis24 
/*24 e Trefaldighet	74	24 e Trefaldighet	Grön	Jesus ger liv	Psalt 116	1 Kon 17:17-24	Kol 1:1-14	Matt 9:18-26	Joh 6:37-40	1 Kor 15:35-58	Luk 20:27-40	2 Kor 5:1-10	Söndag*
 */
function trinitatis24(year) {
  return {
  'Date': trinitatis(year).Date.addDays(7*24),
  'Title': '24 e Trefaldighet',
  'Color': 'Grön',
  'Theme':'Jesus ger liv',
  'Psalms': 'Psalt 116',
  'OldT': '1 Kon 17:17-24',
  'Letters': 'Kol 1:1-14',
  'Gospel': 'Matt 9:18-26',
  'Description' : '24:e Söndag* efter Trinitatis',
  'Link': '',
  'Prio': 2,
  'Argang' : argng(year),
  'HHM': argng(year) == 2 ? 'Joh 6:37-40' : argng(year) == 3 ? 'Luk 20:27-40': null,
  'AFT': argng(year) == 2 ? '1 Kor 15:35-58' : argng(year) == 3 ? '2 Kor 5:1-10': null

  };
}

// trinitatis25 
//25 e Trefaldighet	75	24 e Trefaldighet	Grön										
function trinitatis25(year) {
  return {
  'Date': trinitatis(year).Date.addDays(7*25),
  'Title': '25 e Trefaldighet',
  'Color': 'Grön',
  'Theme':'Jesus ger liv',
  'Psalms': '',
  'OldT': '',
  'Letters': '1 Tess 4:13-18',
  'Gospel': 'Matt 24:15-18',
  'Description' : '25:e Söndag* efter Trinitatis',
  'Link': '',
  'Prio': 2,
  'Argang' : argng(year),
  'HHM': argng(year) == 2 ? ' ' : argng(year) == 3 ? '': null,
  'AFT': argng(year) == 2 ? ' ' : argng(year) == 3 ? '': null

  };
}
/*
	Söndagen f domssöndagen	76	Söndagen f domssöndagen	Grön	Visa och fåvitska jungfrur	Psalt 73	Jes 35:1-10	2 Petr 3:1–13	Matt 25:1-13	Luk 13:22-30	Upp 21:9-22:5	Matt 25:14-30	 Upp 22:10-21	Söndag 13-19 november
*/

function sfdomsndg(year) {
  return {
    'Date': firstDayAfterGivenDate(0,year,10,13),
    'Title': 'Söndagen f domssöndagen',
    'Color': 'Grön',
    'Theme': 'Visa och fåvitska jungfrur',
    'Psalms': 'Psalt 73',
    'OldT': 'Jes 35:1-10',
    'Letters': '2 Petr 3:1–13',
    'Gospel': 'Matt 25:1-13',
    'Description': 'Söndag 13-19 november',
    'Link': '',
    'Prio': 1,
    'Argang': argng(year),
    'HHM': argng(year) == 2 ? 'Luk 13:22-30' : argng(year) == 3 ? 'Matt 25:14-30' : null,
    'AFT': argng(year) == 2 ? 'Upp 21:9-22:5' : argng(year) == 3 ? 'Upp 22:10-21' : null
  };
}
function domsndg(year) {
  return {
    'Date': firstDayAfterGivenDate(0,year,10,20),
    'Title': 'Domssöndagen',
    'Color': 'Violett',
    'Theme': 'Den Yttersta Domen',
    'Psalms': 'Psalt 50',
    'OldT': 'Dan 7:9-14',
    'Letters': '2 Tess 1:1-10',
    'Gospel': 'Matt 25:31-46',
    'Description': 'Söndag 20-26 November',
    'Link': '',
    'Prio': 1,
    'Argang': argng(year),
    'HHM': argng(year) == 2 ? 'Joh 5:22-29' : argng(year) == 3 ? 'Matt 1:18-25' : null,
    'AFT': argng(year) == 2 ? '1 Kor 15:22-34' : argng(year) == 3 ? 'Tit 2:11-15' : null
  };
}
// från 1 advent ändras årgång varför 'year + 1'
function fadvent(year) {
  return {
    'Date': firstDayAfterGivenDate(0,year,10,27),
    'Title': '1 advent',
    'Color': 'Vit (Violett)',
    'Theme': 'Se din konung kommer',
    'Psalms': 'Psalt 24',
    'OldT': 'Jer 31:31-34',
    'Letters': 'Rom 13:11-14',
    'Gospel': 'Matt 21:1-11',
    'Description': 'Söndag 27 November - 3 December',
    'Link': bgbase+encodeURI('Matt 21:1-11'),
    'Prio': 1,
    'Argang': argng(year + 1),
    'HHM': argng(year + 1) == 2 ? 'Joh 18:36-37' : argng(year + 1) == 3 ? 'Luk 4:16-22' : null,
    'AFT': argng(year + 1) == 2 ? 'Ef 1:1-14' : argng(year + 1) == 3 ? 'Hebr 8:7-13' : null
  };
}
function aadvent(year) {
  return {
    'Date': fadvent(year).Date.addDays(7),
    'Title': '2 advent',
    'Color': 'Violett',
    'Theme': 'Guds rike är nära',
    'Psalms': 'Psalt 8',
    'OldT': 'Mal 4',
    'Letters': 'Rom 15:1-13',
    'Gospel': 'Luk 21:25-36',
    'Description': 'Söndag 4 - 10 December',
    'Link': '',
    'Prio': 1,
    'Argang': argng(year + 1),
    'HHM': argng(year + 1) == 2 ? 'Luk 12:35-40' : argng(year + 1) == 3 ? 'Luk 17 20-30' : null,
    'AFT': argng(year + 1) == 2 ? 'Hebr 10:32-39' : argng(year + 1) == 3 ? 'Jak 5:7-11' : null
  };
}
function tadvent(year) {
  return {
    'Date': aadvent(year).Date.addDays(7),
    'Title': '3 advent',
    'Color': 'Violett',
    'Theme': 'Herrens vägröjare',
    'Psalms': 'Psalt 22:20-32',
    'OldT': 'Jes 40:1-8',
    'Letters': '1 Kor 4:1-5',
    'Gospel': 'Matt 11:1-10',
    'Description': 'Söndag 11 - 17 December',
    'Link': '',
    'Prio': 1,
    'Argang': argng(year + 1),
    'HHM': argng(year + 1) == 2 ? 'Matt 11:11-19' : argng(year + 1) == 3 ? 'Luk 3:1-14' : null,
    'AFT': argng(year + 1) == 2 ? '2 Petr 1:19-21' : argng(year + 1) == 3 ? 'Gal 3:23-29' : null
  };
}
function fjadvent(year) {
  return {
    'Date': tadvent(year).Date.addDays(7),
    'Title': '4 advent',
    'Color': 'Violett',
    'Theme': 'Johannes visar till Kristus',
    'Psalms': 'Psalt 149',
    'OldT': '5 Mos 18:15-22',
    'Letters': 'Fil 4:4-9',
    'Gospel': 'Joh 1:19-28',
    'Description': 'Söndag 18 - 24 December',
    'Link': '',
    'Prio': 1,
    'Argang': argng(year + 1),
    'HHM': argng(year + 1) == 2 ? 'Joh 3:22-36' : argng(year + 1) == 3 ? 'Joh 5:30-47' : null,
    'AFT': argng(year + 1) == 2 ? 'Upp 3:14-22' : argng(year + 1) == 3 ? '1 Petr 1:18-12' : null
  };
}

function sondagejul(year) {
  let sej = firstDayAfterGivenDate(0,year,11,27);
  if (sej.getDate() > 26 || sej.getDate() <= 31 ) {
    return {
      'Date': sej,
      'Title': 'Söndagen e jul',
      'Color': 'Vit',
      'Theme': 'Simeon och Hanna',
      'Psalms': 'Psalt 71:17-24',
      'OldT': 'Jes 73:7-16',
      'Letters': 'Gal 4:1-7',
      'Gospel': 'Luk 2:33-40',
      'Description': '	Söndag 27 - 31 december',
      'Link': '',
      'Prio': 1,
      'Argang': argng(year+1),
      'HHM': argng(year+1) == 2 ? 'Luk 12:32' : argng(year+1) == 3 ? 'Matt 2:19-23' : null,
      'AFT': argng(year+1) == 2 ? '1 Joh 5:19-21' : argng(year+1) == 3 ? '1 Petr 2:1-10' : null
    };
  }
  
}

function ioannesbaptista(year) {

  let fs = firstDayAfterGivenDate(6, year, 5, 20);
  if (fs.getDate() > 19 && fs.getDate() < 27) {

    return {
      'Date': fs,
      'Title': 'Den heliga Johannes döparens dag eller Midssommardagen',
      'Color': 'Vit',
      'Theme': 'Johannes Döparens födelse',
      'Psalms': 'Psalt 92',
      'OldT': 'Jes 40:1-8',
      'Letters': '',
      'Gospel': 'Luk 1:57-80',
      'Description': 'Lördag 20-26 juni',
      'Link': '',
      'Prio': 1,
      'Argang': argng(year),
      'HHM': argng(year) == 2 ? 'Luk 1:5-25' : argng(year) == 3 ? 'Mark 6:14-29' : null,
      'AFT': argng(year) == 2 ? 'Apg 19:1-7' : argng(year) == 3 ? 'Apg 13 16-25' : null
    };
  }
}
function sndgenyar(year) {
  let nyar = new Date(year, 0, 1);
  let fs = firstDayAfterGivenDate(0, year-1, 12, 2);
  if (fs.getDate() > 1 && fs.getDate() < 6) {

    return {
      'Date': fs,
      'Title': 'Söndag efter Nyårsdagen',
      'Color': 'Vit',
      'Theme': 'Kristi dop',
      'Psalms': 'Psalt 124',
      'OldT': '1 Sam 2:1-10',
      'Letters': 'Rom 6:3-11',
      'Gospel': 'Matt 3:13-17',
      'Description': 'Söndag 2 januari - 5 januari',
      'Link': '',
      'Prio': 2,
      'Argang': argng(year),
      'HHM': argng(year) == 2 ? 'Joh 1:29-34' : argng(year) == 3 ? 'Matt 3:11-12' : null,
      'AFT': argng(year) == 2 ? 'Kol 2:9-15' : argng(year) == 3 ? 'Ef 5:25-27' : null
    };
  }
}
function feepifania(year) {
  return {
    'Date': firstDayAfterGivenDate(0, year-1, 12, 7),
    'Title': '1 e Epifania',
    'Color': 'Vit',
    'Theme': 'Kristus lär i templet',
    'Psalms': 'Psalt 26',
    'OldT': 'Pred 12:1-7',
    'Letters': 'Rom 12:1-5',
    'Gospel': 'Luk 2:41-52',
    'Description': 'Söndag* 7 januari - 13 januari',
    'Link': '',
    'Prio': 2,
    'Argang': argng(year),
    'HHM': argng(year) == 2 ? 'Joh 7:14-18' : argng(year) == 3 ? 'Matt 12:46-50' : null,
    'AFT': argng(year) == 2 ? 'Hebr 3:1-11' : argng(year) == 3 ? 'Hebr 2:11-16' : null
  };

}
function aeepifania(year) {
  return {
    'Date': feepifania(year).Date.addDays(7),
    'Title': '2 e Epifania',
    'Color': 'Grön',
    'Theme': 'Bröllopet i Kana',
    'Psalms': 'Psalt 128',
    'OldT': '1 Mos 2:15-25',
    'Letters': 'Rom 12:6-16',
    'Gospel': 'Joh 2:1-12',
    'Description': 'Söndag*',
    'Link': '',
    'Prio': 2,
    'Argang': argng(year),
    'HHM': argng(year) == 2 ? 'Joh 4:5-26' : argng(year) == 3 ? 'Luk 19:1-10' : null,
    'AFT': argng(year) == 2 ? 'Efes 2:11-16' : argng(year) == 3 ? '1 Kor 1:26-31' : null
  };

}
function teepifania(year) {
  return {
    'Date': aeepifania(year).Date.addDays(7),
    'Title': '3 e Epifania',
    'Color': 'Grön',
    'Theme': 'Kristus botar sjuka',
    'Psalms': 'Psalt 53',
    'OldT': '2 Kon 5:1-14',
    'Letters': 'Rom 12:16-21',
    'Gospel': 'Matt 8:1-13',
    'Description': 'Söndag*',
    'Link': '',
    'Prio': 2,
    'Argang': argng(year),
    'HHM': argng(year) == 2 ? 'Joh 4:27-42' : argng(year) == 3 ? 'Matt 8:14-17' : null,
    'AFT': argng(year) == 2 ? 'Hebr 11:1-22' : argng(year) == 3 ? '2 Tim 1:1-14' : null
  };

}
function fjeepifania(year) {
  return {
    'Date': teepifania(year).Date.addDays(7),
    'Title': '4 e Epifania',
    'Color': 'Grön',
    'Theme': 'Kristus stillar stormen',
    'Psalms': 'Psalt 93',
    'OldT': '2 Mos 14:21-31',
    'Letters': 'Rom 13:8-10',
    'Gospel': 'Matt 8:23-27',
    'Description': 'Söndag*',
    'Link': '',
    'Prio': 2,
    'Argang': argng(year),
    'HHM': argng(year) == 2 ? 'Matt 21:18-22' : argng(year) == 3 ? 'Matt 14:22-36' : null,
    'AFT': argng(year) == 2 ? 'Hebr 11:23-40' : argng(year) == 3 ? '2 Tim 1:3-14' : null
  };

}

function mariakyrkogang(year) {
  let fs = firstDayAfterGivenDate(0, year, 1, 2);
  if (fs.getDate() > 1 && fs.getDate() < 9){

    return {
      'Date': fs,
      'Title': 'Jungfru Marie Kyrkogångs dag eller Kyndelsmässodagen',
      'Color': 'Vit',
      'Theme': 'Jesus frambäres i templet',
      'Psalms': 'Psalt 84',
      'OldT': 'Mal 3:1-4',
      'Letters': '',
      'Gospel': 'Luk 2:22-32',
      'Description': 'Söndag 2-8 februari eller söndag före Fastlagssöndag och då tidigast 26 januar',
      'Link': '',
      'Prio': 1,
      'Argang': argng(year),
      'HHM': argng(year) == 2 ? 'Joh 1:15-18' : argng(year) == 3 ? 'Matt 13:31-33' : null,
      'AFT': argng(year) == 2 ? 'Upp 21:9-22:5' : argng(year) == 3 ? 'Upp 22:10-21' : null
    };
  } else {
    return {
      'Date': quinquagesima(year).subtractDays(7),
      'Title': 'Jungfru Marie Kyrkogångs dag eller Kyndelsmässodagen',
      'Color': 'Vit',
      'Theme': 'Jesus frambäres i templet',
      'Psalms': 'Psalt 84',
      'OldT': 'Mal 3:1-4',
      'Letters': '',
      'Gospel': 'Luk 2:22-32',
      'Description': 'Söndag 2-8 februari eller söndag före Fastlagssöndag och då tidigast 26 januar',
      'Link': '',
      'Prio': 1,
      'Argang': argng(year),
      'HHM': argng(year) == 2 ? 'Joh 1:15-18' : argng(year) == 3 ? 'Matt 13:31-33' : null,
      'AFT': argng(year) == 2 ? 'Upp 21:9-22:5' : argng(year) == 3 ? 'Upp 22:10-21' : null
    };
  }

}

function femeepifania(year) {
  return {
    'Date': fjeepifania(year).Date.addDays(7),
    'Title': '5 e Epifania',
    'Color': 'Grön',
    'Theme': 'Ogräset i veteåkern',
    'Psalms': 'Psalt 42',
    'OldT': 'Joel 2:21-24',
    'Letters': 'Kol 3:12-17',
    'Gospel': 'Matt 13:24-30',
    'Description': 'Söndag*',
    'Link': '',
    'Prio': 3,
    'Argang': argng(year),
    'HHM': argng(year) == 2 ? '' : argng(year) == 3 ? '' : null,
    'AFT': argng(year) == 2 ? '' : argng(year) == 3 ? '' : null
  };

}
 
function sjeepifania(year) {
  return {
    'Date': femeepifania(year).Date.addDays(7),
    'Title': '6 e Epifania',
    'Color': 'Grön',
    'Theme': '',
    'Psalms': '',
    'OldT': '',
    'Letters': 'Fil 1:3-11',
    'Gospel': 'Joh 5:17',
    'Description': 'Söndag* 11 - 17 februari',
    'Link': '',
    'Prio': 3,
    'Argang': argng(year),
    'HHM': argng(year) == 2 ? '' : argng(year) == 3 ? '' : null,
    'AFT': argng(year) == 2 ? ' ' : argng(year) == 3 ? '' : null
  };
}


// lägger till de beräknade högtiderna i events vid angivet år

function makeKK(newYear) {
  thisYear = parseInt(newYear);
  events.push(nyarsdagen(thisYear));
  events.push(epifania(thisYear));
  events.push(feepifania(thisYear));
  events.push(aeepifania(thisYear));
  events.push(mariakyrkogang(thisYear));
  events.push(teepifania(thisYear));
  if (mariakyrkogang(thisYear).Date.getTime() !== fjeepifania(thisYear).Date.getTime()){
      events.push(fjeepifania(thisYear));
  }
  if (mariakyrkogang(thisYear).Date.getTime() !== femeepifania(thisYear).Date.getTime()){
      events.push(femeepifania(thisYear));
  }
  events.push(pauliomvandelse(thisYear));
  
  if (mariakyrkogang(thisYear).Date.getTime() !== septuagesima(thisYear).Date.getTime()){
      events.push(septuagesima(thisYear));
  }
  if (mariakyrkogang(thisYear).Date.getTime() !== sexagesima(thisYear).Date.getTime()){
      events.push(sexagesima(thisYear));
  }
  if (mariakyrkogang(thisYear).Date.getTime() !== quinquagesima(thisYear).Date.getTime()){
      events.push(quinquagesima(thisYear));
  }
  if (septuagesima(thisYear).Date.getTime() !== sjeepifania(thisYear).Date.getTime() && sexagesima(thisYear).Date.getTime() !== sjeepifania(thisYear).Date.getTime() && quinquagesima(thisYear).Date.getTime() !== sjeepifania(thisYear).Date.getTime()){
    events.push(sjeepifania(thisYear));
  }
  events.push(getEaster(thisYear));
  events.push(askonsdagen(thisYear));
  events.push(mariabeb(thisYear));
  if(mariabeb(thisYear).Date.getTime() !== invocavit(thisYear).Date.getTime()){
      events.push(invocavit(thisYear));
  }
  if(mariabeb(thisYear).Date.getTime() !== laetare(thisYear).Date.getTime()){
      events.push(laetare(thisYear));
  }
  if(mariabeb(thisYear).Date.getTime() !== judica(thisYear).Date.getTime()){
      events.push(judica(thisYear));
  }
  events.push(palmsndg(thisYear));
  events.push(skrtorsd(thisYear));
  if(mariabeb(thisYear).Date.getTime() !== reminiscere(thisYear).Date.getTime()){
      events.push(reminiscere(thisYear));
  }
  if(mariabeb(thisYear).Date.getTime() !== oculi(thisYear).Date.getTime()){
      events.push(oculi(thisYear));
  }
  events.push(annandagpask(thisYear));
  events.push(fepask(thisYear));
  events.push(aepask(thisYear));
  events.push(tepask(thisYear));
  events.push(fjepask(thisYear));
  events.push(rogate(thisYear));
  events.push(ascensione(thisYear));
  events.push(sjepask(thisYear));
  events.push(pentecoste(thisYear));
  events.push(annnandagpingst(thisYear));
  events.push(michaeli(thisYear));
  events.push(allahelgon(thisYear));
  events.push(augsburska(thisYear));
  events.push(trinitatis(thisYear));
  if (augsburska(thisYear).Date.getTime() !== trinitatis1(thisYear).Date.getTime()){
      events.push(trinitatis1(thisYear));
  }
  if (augsburska(thisYear).Date.getTime() !== trinitatis2(thisYear).Date.getTime()){
      events.push(trinitatis2(thisYear));
  }
  if (augsburska(thisYear).Date.getTime() !== trinitatis3(thisYear).Date.getTime()){
      events.push(trinitatis3(thisYear));
  }
  if (augsburska(thisYear).Date.getTime() !== trinitatis4(thisYear).Date.getTime()){
      events.push(trinitatis4(thisYear));
  }
  if (augsburska(thisYear).Date.getTime() !== trinitatis5(thisYear).Date.getTime()){
      events.push(trinitatis5(thisYear));
  }
  if (augsburska(thisYear).Date.getTime() !== trinitatis6(thisYear).Date.getTime()){
      events.push(trinitatis6(thisYear));
  }
  events.push(trinitatis7(thisYear));
  events.push(trinitatis8(thisYear));
  events.push(trinitatis9(thisYear));
  events.push(trinitatis10(thisYear));
  events.push(trinitatis11(thisYear));
  events.push(trinitatis12(thisYear));
  events.push(trinitatis13(thisYear));
  events.push(trinitatis14(thisYear));
  events.push(trinitatis15(thisYear));
  events.push(trinitatis16(thisYear));
  events.push(trinitatis17(thisYear));
  events.push(trinitatis18(thisYear));
  events.push(trinitatis19(thisYear));
  events.push(trinitatis20(thisYear));
  events.push(trinitatis21(thisYear));
  events.push(trinitatis22(thisYear));
  events.push(trinitatis23(thisYear));
  events.push(trinitatis24(thisYear));
  events.push(trinitatis25(thisYear));
  events.push(sfdomsndg(thisYear));
  events.push(domsndg(thisYear));
  events.push(fadvent(thisYear));
  events.push(aadvent(thisYear));
  events.push(tadvent(thisYear));
  events.push(fjadvent(thisYear));
  events.push(juldagen(thisYear));
  events.push(annandagjul(thisYear));
  events.push(johannes(thisYear));
  events.push(sondagejul(thisYear));
  events.push(menlosabarn(thisYear));
  if (typeof sndgenyar(thisYear) == "undefined") {} else {
    events.push(sndgenyar(thisYear));
  }
  if (typeof ioannesbaptista(thisYear) == "undefined") {} else {
    events.push(ioannesbaptista(thisYear));
  }

  // lägg till time egensapen till alla högtiderna
  events = events.map(function (obj) {
    if (typeof obj.Date !== "undefined") {
      obj.time = obj.Date.getTime();
      return obj;
    }
    
  // lägg till Weel egensapen till alla högtiderna
  });
  events = events.map(function (obj) {
    if (typeof obj.Date !== "undefined") {
      obj.Week = obj.Date.getWeek();
      return obj;
    }
  });

  uniqueEvents = removeDuplicates(events, 'time');
  let container = document.getElementById('container');
  let oldCal = document.getElementById('bibelcalender');
  oldCal.remove();
  let newCal = document.createElement('div');
  newCal.setAttribute('id', 'bibelcalender');
  container.appendChild(newCal);
  caleandar(newCal, uniqueEvents, settings);
  for (i=0; i< 12;++i){showMonthYear(uniqueEvents.sortBy(o=>[o.time]),i,thisYear)}
}
events.push(nyarsdagen(thisYear));
events.push(epifania(thisYear));
events.push(feepifania(thisYear));
events.push(aeepifania(thisYear));
events.push(mariakyrkogang(thisYear));
events.push(teepifania(thisYear));
if (mariakyrkogang(thisYear).Date.getTime() !== fjeepifania(thisYear).Date.getTime()){
  events.push(fjeepifania(thisYear));
  }
if (mariakyrkogang(thisYear).Date.getTime() !== femeepifania(thisYear).Date.getTime()){
  events.push(femeepifania(thisYear));
}
events.push(pauliomvandelse(thisYear));
if (mariakyrkogang(thisYear).Date.getTime() !== septuagesima(thisYear).Date.getTime()){
  events.push(septuagesima(thisYear));
}
if (mariakyrkogang(thisYear).Date.getTime() !== sexagesima(thisYear).Date.getTime()){
  events.push(sexagesima(thisYear));
}
if (mariakyrkogang(thisYear).Date.getTime() !== quinquagesima(thisYear).Date.getTime()){
  events.push(quinquagesima(thisYear));
}
if (septuagesima(thisYear).Date.getTime() !== sjeepifania(thisYear).Date.getTime() && sexagesima(thisYear).Date.getTime() !== sjeepifania(thisYear).Date.getTime() && quinquagesima(thisYear).Date.getTime() !== sjeepifania(thisYear).Date.getTime()){
  events.push(sjeepifania(thisYear));
}
events.push(askonsdagen(thisYear));
events.push(getEaster(thisYear));
events.push(mariabeb(thisYear));
if(mariabeb(thisYear).Date.getTime() !== invocavit(thisYear).Date.getTime()){
  events.push(invocavit(thisYear));
}
if(mariabeb(thisYear).Date.getTime() !== laetare(thisYear).Date.getTime()){
  events.push(laetare(thisYear));
}
if(mariabeb(thisYear).Date.getTime() !== judica(thisYear).Date.getTime()){
  events.push(judica(thisYear));
}
events.push(palmsndg(thisYear));
events.push(skrtorsd(thisYear));
if(mariabeb(thisYear).Date.getTime() !== reminiscere(thisYear).Date.getTime()){
  events.push(reminiscere(thisYear));
}
if(mariabeb(thisYear).Date.getTime() !== oculi(thisYear).Date.getTime()){
  events.push(oculi(thisYear));
}
events.push(annandagpask(thisYear));
events.push(fepask(thisYear));
events.push(aepask(thisYear));
events.push(tepask(thisYear));
events.push(fjepask(thisYear));
events.push(rogate(thisYear));
events.push(ascensione(thisYear));
events.push(sjepask(thisYear));
events.push(pentecoste(thisYear));
events.push(annnandagpingst(thisYear));
events.push(michaeli(thisYear));
events.push(allahelgon(thisYear));
events.push(augsburska(thisYear));
events.push(trinitatis(thisYear));
if (augsburska(thisYear).Date.getTime() !== trinitatis1(thisYear).Date.getTime()){
  events.push(trinitatis1(thisYear));
  }
  if (augsburska(thisYear).Date.getTime() !== trinitatis2(thisYear).Date.getTime()){
    events.push(trinitatis2(thisYear));
  }
  if (augsburska(thisYear).Date.getTime() !== trinitatis3(thisYear).Date.getTime()){
    events.push(trinitatis3(thisYear));
  }
  if (augsburska(thisYear).Date.getTime() !== trinitatis4(thisYear).Date.getTime()){
  events.push(trinitatis4(thisYear));
  }
  if (augsburska(thisYear).Date.getTime() !== trinitatis5(thisYear).Date.getTime()){
  events.push(trinitatis5(thisYear));
  }
  if (augsburska(thisYear).Date.getTime() !== trinitatis6(thisYear).Date.getTime()){
  events.push(trinitatis6(thisYear));
  }
events.push(trinitatis7(thisYear));
events.push(trinitatis8(thisYear));
events.push(trinitatis9(thisYear));
events.push(trinitatis10(thisYear));
events.push(trinitatis11(thisYear));
events.push(trinitatis12(thisYear));
events.push(trinitatis13(thisYear));
events.push(trinitatis14(thisYear));
events.push(trinitatis15(thisYear));
events.push(trinitatis16(thisYear));
events.push(trinitatis17(thisYear));
events.push(trinitatis18(thisYear));
events.push(trinitatis19(thisYear));
events.push(trinitatis20(thisYear));
events.push(trinitatis21(thisYear));
events.push(trinitatis22(thisYear));
events.push(trinitatis23(thisYear)); 
events.push(trinitatis24(thisYear));
events.push(trinitatis25(thisYear));
events.push(sfdomsndg(thisYear));
events.push(domsndg(thisYear));
events.push(fadvent(thisYear));
events.push(aadvent(thisYear));
events.push(tadvent(thisYear));
events.push(fjadvent(thisYear));
events.push(juldagen(thisYear));
events.push(annandagjul(thisYear));
events.push(sondagejul(thisYear));
events.push(johannes(thisYear));
events.push(menlosabarn(thisYear));
if (typeof sndgenyar(thisYear) == "undefined") {} else {
  events.push(sndgenyar(thisYear));
}
if (typeof ioannesbaptista(thisYear) == "undefined") {} else {
  events.push(ioannesbaptista(thisYear));
}

// lägger till en ny fält i varje högtidsobjekt med unixtime baserad på den bäreknade på dess Date fält
console.log(events);

events = events.map(function (obj) {
  if (typeof obj.Date !== "undefined") {
    obj.Week = obj.Date.getWeek();
    return obj;
  }
});

events = events.map(function (obj) {
  if (typeof obj.Date !== "undefined") {
    obj.time = obj.Date.getTime();
    return obj;
  }

});
sortedEvents = events.sortBy(function (o) {
  return [o.Date];
});


// funktion som ta bort objekt som har samma egenskap (property)



// skapar ett ny array med unika objekt efter unixtime-egenskap (fält time)

let uniqueEvents = removeDuplicates(sortedEvents, 'time');

// kollar hur många objekts som har tagits bort
console.log(events.length - uniqueEvents.length);
var months = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"];
var days = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag", "Söndag"];
let settings = {};
let element = document.getElementById('bibelcalender');
caleandar(element, uniqueEvents, settings);
// visar Påskdagen och årgång
console.log(getEaster(thisYear).Date.toLocaleString() + " Årgang " + argng(thisYear));
console.log("Aktuell år: " + thisYear + " Årgang: " + argng(thisYear));
/*console.log(uniqueEvents.sortBy(function (o) {
  return [o.Week, o.Prio, o.Date]
}));

console.log(new Date(thisYear, 0, 1).getFullYear());
*/
showWeek = (arr, week, anno) => {
  for (i of arr) {
    if (i.Week === week && new Date(i.time).getFullYear() === anno) {
      console.log(`Vecka ${i.Week}`);
      if (i.Argang == 1) {
        console.log(days[new Date(i.time).getDay()]);
        console.log(new Date(i.time).getDate());
        console.log(months[new Date(i.time).getMonth()]);
        console.log("\n" + `${i.Title}\n ${i.Color}\n ${i.Theme}\n ${i.Psalms}\n ${i.OldT}\n ${i.Letters}\t ${i.Gospel}` + "\n");
      } else if (i.Argang == 2 && i.HHM !== null) {
        console.log(days[new Date(i.time).getDay()]);
        console.log(new Date(i.time).getDate());
        console.log(months[new Date(i.time).getMonth()]);
        console.log("\n" + `${i.Title}\n ${i.Color}\n ${i.Theme}\n ${i.Psalms}\n ${i.OldT}\n ${i.Letters}\t ${i.Gospel}\n II: ${i.HHM}, ${i.AFT}` + "\n");
      } else if (i.HHM !== null) {
        console.log(days[new Date(i.time).getDay()]);
        console.log(new Date(i.time).getDate());
        console.log(months[new Date(i.time).getMonth()]);
        console.log("\n " + `${i.Title}\n ${i.Color}\n ${i.Theme}\n ${i.Psalms}\n ${i.OldT}\n ${i.Letters}\t ${i.Gospel}\n III: ${i.HHM}, ${i.AFT}` + "\n");
      } else {
        console.log(days[new Date(i.time).getDay()]);
        console.log(new Date(i.time).getDate());
        console.log(months[new Date(i.time).getMonth()]);
        console.log("\n" + `${i.Title}\n ${i.Color}\n ${i.Theme}\n ${i.Psalms}\n ${i.OldT}\n ${i.Letters}\t ${i.Gospel}` + "\n");
      }
    }
  }
}

showMonthYear = (arr, mese, anno) => {
  this.mese = parseInt(mese);
  this.anno = parseInt(anno);
  console.log(months[this.mese] + " " + this.anno);
  let lk = "";
  lk += `<hr><H3>${months[this.mese]} ${this.anno}</H3>`;
  for (let i of arr) {
    var Gt = typeof i.OldT == 'undefined' ? "" : "<b>Gt</b> " + i.OldT;
    var Ep = typeof i.Letters == 'undefined' ? "" : "<b>Ep</b> " + i.Letters;
    var Ev = typeof i.Gospel === 'undefined' ? "" : "<b>Ev</b> " + i.Gospel;
    if (new Date(i.time).getMonth() === this.mese && new Date(i.time).getFullYear() === this.anno) {
      lk += `<b>v </b>${i.Week}<br>`;

      if (i.Argang == 1) {

        lk += `${new Date(i.time).getDate()} ${days[new Date(i.time).getDay()]} <b>${i.Title} </b> ${i.Color} <i>${i.Theme}</i> ${mkyv(i.Psalms)} ${isBlank(i.OldT) ? "" : "<b>Gt</b> " + mkyv(i.OldT)} ${isBlank(i.Letters) ? "" : "<b>Ep</b> " + mkyv(i.Letters)} ${isBlank(i.Gospel) ? "" : "<b>Ev</b> " + mkyv(i.Gospel)}` + "<br>";
      } else if (i.Argang == 2 && i.HHM !== null) {

        lk += `${new Date(i.time).getDate()} ${days[new Date(i.time).getDay()]} <b>${i.Title} </b> ${i.Color} <i>${i.Theme}</i> ${mkyv(i.Psalms)} ${isBlank(i.OldT) ? "" : "<b>Gt</b> " + mkyv(i.OldT)} ${isBlank(i.Letters) ? "" : "<b>Ep</b> " + mkyv(i.Letters)} ${isBlank(i.Gospel) ? "" : "<b>Ev</b> " + mkyv(i.Gospel)} <b>II</b> ${mkyv(i.HHM)}, ${mkyv(i.AFT)}` + "<br>";

      } else if (i.Argang == 3 && i.HHM !== null) {

        lk += `${new Date(i.time).getDate()} ${days[new Date(i.time).getDay()]} <b>${i.Title} </b> ${i.Color}  <i>${i.Theme}</i> ${mkyv(i.Psalms)} ${isBlank(i.OldT) ? "" : "<b>Gt</b> " + mkyv(i.OldT)} ${isBlank(i.Letters) ? "" : "<b>Ep</b> " + mkyv(i.Letters)} ${isBlank(i.Gospel) ? "" : "<b>Ev</b> " + mkyv(i.Gospel)} <b>III</b> ${mkyv(i.HHM)}, ${mkyv(i.AFT)}` + "<br>";

      } else {

        lk += `${new Date(i.time).getDate()} ${days[new Date(i.time).getDay()]} <b>${i.Title} </b> ${i.Color}  <i>${i.Theme}</i> ${mkyv(i.Psalms)}\n ${isBlank(i.OldT) ? "" : "<b>Gt</b> " + mkyv(i.OldT)} ${isBlank(i.Letters) ? "" : "<b>Ep</b> " + mkyv(i.Letters)} ${isBlank(i.Gospel) ? "" : "<b>Ev</b> " + mkyv(i.Gospel)}` + "<br>";
      }
    }
  }

  return lk;
};
showMonth = (arr, mese) => {
  console.log(months[mese] + " " + thisYear);
  for (i of arr) {
    if (new Date(i.time).getMonth() === mese) {

      if (i.Argang == 1) {
        console.log(`${days[new Date(i.time).getDay()]}  ${new Date(i.time).getDate()}`);
        console.log("\n" + `${i.Title}\n ${i.Color}\n ${i.Theme}\n ${i.Psalms}\n ${i.OldT}\n ${i.Letters}\t ${i.Gospel}` + "\n");
      } else if (i.Argang == 2 && i.HHM !== null) {
        console.log(`${days[new Date(i.time).getDay()]}  ${new Date(i.time).getDate()}`);
        console.log("\n" + `${i.Title}\n ${i.Color}\n ${i.Theme}\n ${i.Psalms}\n ${i.OldT}\n ${i.Letters}\t ${i.Gospel}\n II: ${i.HHM}, ${i.AFT}` + "\n");
      } else if (i.HHM !== null) {
        console.log(`${days[new Date(i.time).getDay()]}  ${new Date(i.time).getDate()}`);
        console.log("\n " + `${i.Title}\n ${i.Color}\n ${i.Theme}\n ${i.Psalms}\n ${i.OldT}\n ${i.Letters}\t ${i.Gospel}\n III: ${i.HHM}, ${i.AFT}` + "\n");
      } else {
        console.log(`${days[new Date(i.time).getDay()]}  ${new Date(i.time).getDate()}`);
        console.log("\n" + `${i.Title}\n ${i.Color}\n ${i.Theme}\n ${i.Psalms}\n ${i.OldT}\n ${i.Letters}\t ${i.Gospel}` + "\n");
      }
    }
  }
};
for (i=0; i< 12;++i){
  showMonthYear(uniqueEvents.sortBy(o=>[o.time]),i,thisYear)
}

    
let nyar = document.getElementById('nyar');
nyar.value = new Date().getFullYear();
let nyweek = document.getElementById('week');
let nymanad = document.getElementById('nymanad');
let btn = document.getElementById('btn')
btn.addEventListener('click', function () {
  if (nyar.value.indexOf('-') !== -1) {
    let start = 1 * nyar.value.split('-')[0];
    console.log('start: ' + start);
    let end = 1 * nyar.value.split('-')[1];
    console.log('end: ' + end);
    let n = end - start;
    console.log('antal år: ' + n);
    for (let a = 0; a <= n; ++a) {
      console.log(parseInt(start + a));
      makeKK(start + a);
    }
  } else if (nyar.value.indexOf(',') !== -1) {
    let aren = nyar.value.split(',');
    for (let b = 0; b < aren.length; ++b) {
      console.log(1 * aren[b]);
      makeKK(1 * aren[b]);
    }
  } else {
    /* makeKK(nyar.value);
    $('p#test').html('');
    if (typeof nymanad != 'undefined' && nymanad.vaue != '12'){
      $('p#test').append(showMonthYear(uniqueEvents.sortBy(o => [o.time]), 1*nymanad.value, nyar.value));
    }else if (nymanad.value === '12'){   
        $('p#test').append(showYear(uniqueEvents.sortBy(o => [o.time]), 0, nyar.value));
      
    } */
    makeKK(nyar.value);

    $('p#test').html('');
    if (nymanad.value == '12') {
      for (i = 0; i < 12; ++i) {
        $('p#test').append(showMonthYear(uniqueEvents.sortBy(o => [o.time]), i, nyar.value));
      }

    }
    //else if (nyweek.value !== '2020-W01') {
    //  $('p#test').append(showWeek(uniqueEvents.filter(o=>o.Week === Math.abs(nyweek.value.split('-')[1].replace("W","").//replace("0",""))),nyweek.value.split('-')[1].replace("W","").replace("0",""),nyweek.value.split('-')[0]));
    //} 
    else {
      $('p#test').append(showMonthYear(uniqueEvents.sortBy(o => [o.time]), nymanad.value, nyar.value));
    }
  }
  BGLinks.version = "SFB";
  BGLinks.linkVerses();

});

$('#togglecal').on('click', function () {
  $('#bibelcalender').toggle();
});
$('#BibleGateway').on('click', function () {
  $('#biblegateway').toggle();
});
/*
for (i of uniqueEvents) {
  if (i.Argang == 1) {
    console.log(months[new Date(i.time).getMonth()]);
    console.log(new Date(i.time).toLocaleDateString() + "\n" + `${i.Title}\n ${i.Color}\n ${i.Theme}\n ${i.Psalms}\n ${i.OldT}\n ${i.Letters}\t ${i.Gospel}` + "\n");
  } else if (i.Argang == 2 && i.HHM !== null) {

    console.log(months[new Date(i.time).getMonth()]);
    console.log(new Date(i.time).toLocaleDateString() + "\n" + `${i.Title}\n ${i.Color}\n ${i.Theme}\n ${i.Psalms}\n ${i.OldT}\n ${i.Letters}\t ${i.Gospel}\n II: ${i.HHM}, ${i.AFT}` + "\n");
  } else if (i.HHM !== null) {
    console.log(months[new Date(i.time).getMonth()]);
    console.log(new Date(i.time).toLocaleDateString() + "\n " + `${i.Title}\n ${i.Color}\n ${i.Theme}\n ${i.Psalms}\n ${i.OldT}\n ${i.Letters}\t ${i.Gospel}\n III: ${i.HHM}, ${i.AFT}` + "\n");
  } else {
    console.log(months[new Date(i.time).getMonth()]);
    console.log(new Date(i.time).toLocaleDateString() + "\n" + `${i.Title}\n ${i.Color}\n ${i.Theme}\n ${i.Psalms}\n ${i.OldT}\n ${i.Letters}\t ${i.Gospel}` + "\n");
  }
}
*/
/*console.log(events.sort(function (a, b) {
  return a.Title.localeCompare(b.Title);
}));
*/
//https://stackoverflow.com/questions/50538060/javascript-in-an-array-of-objects-returns-objects-where-any-value-matches-a-s

const deepFindAll = function* (f, o = {}) {
  if (Object(o) === o) {
    if (f(o) === true)
      yield o
    for (const [_, v] of Object.entries(o))
      yield* deepFindAll(f, v)
  }
}
const searchAll = (query = "", data = {}) =>
  Array.from(deepFindAll(o =>
    Object.values(o).some(v =>
      String(v) === v && v.includes(query)), data
  ))