
// Array.sortBy
// Sort by date, then score (reversed), then name
//array.sortBy(function(o){ return [ o.date, -o.score, o.name ] };
(function(){
  if (typeof Object.defineProperty === 'function'){
    try{Object.defineProperty(Array.prototype,'sortBy',{value:sb}); }catch(e){}
  }
  if (!Array.prototype.sortBy) Array.prototype.sortBy = sb;

  function sb(f){
    for (var i=this.length;i;){
      var o = this[--i];
      this[i] = [].concat(f.call(o,o,i),o);
    }
    this.sort(function(a,b){
      for (var i=0,len=a.length;i<len;++i){
        if (a[i]!=b[i]) return a[i]<b[i]?-1:1;
      }
      return 0;
    });
    for (var i=this.length;i;){
      this[--i]=this[i][this[i].length-1];
    }
    return this;
  }
})();

// addDays & subtractDays new mehods to Date
Date.prototype.addDays = function(days) {
  this.setDate(this.getDate() + parseInt(days));
  return this;
};

Date.prototype.subtractDays = function(days) {
  this.setDate(this.getDate() - parseInt(days));
  return this;
};
  /*
  * First sunday in January 2020
  * firstDayInMonth(0,0,2020);
  * Sun Jan 05 2020 00:00:00 GMT+0100 (centraleuropeisk normaltid)
  */
function firstDayInMonth(day, m, y) {
  // day is in range 0 Sunday to 6 Saturday
  var y = y ||
  new Date(Date.now()).getFullYear();
  var m = m ||
  new Date(Date.now()).getMonth();
  return new Date(y, m, 1 +
      (day - new Date(y, m, 1).getDay() + 7) % 7);
  }
  /*
  * First sunday after 6 January 2020
  * firstDayAfterGivenDate(0,2020,0,6);
  * Sun Jan 12 2020 00:00:00 GMT+0100 (centraleuropeisk normaltid)
  */
function firstDayAfterGivenDate(day, y, m, d) {
  // day is in range 0 Sunday to 6 Saturday
  var y = y ||
  new Date(Date.now()).getFullYear();
  var m = m ||
  new Date(Date.now()).getMonth();
  return new Date(y, m, d +
      (day - new Date(y, m, d).getDay() + 7) % 7);
  }
  /*
  * Third sunday in January 2020
  * nthDayInMonth(3,0,0,2020);
  * Sun Jan 05 2020 00:00:00 GMT+0100 (centraleuropeisk normaltid)
  */
 function nthDayInMonth(n, day, m, y) {
     // day is in range 0 Sunday to 6 Saturday
     var y = y ||
     new Date(Date.now()).getFullYear();
     var m = m ||
     new Date(Date.now()).getMonth();
     var d = firstDayInMonth(day, m, y);
     return new Date(d.getFullYear(),
     d.getMonth(), d.getDate() + (n - 1) * 7);
  }
  /*
  * Get week nr of given date
  * getWeekNumber(new Date(2020,4,5));
  * [2020, 19]
  */
 function getWeekNumber(d) {
     // Copy date so don't modify original
     d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
     // Set to nearest Thursday: current date + 4 - current day number
     // Make Sunday's day number 7
     d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
     // Get first day of year
     var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
     // Calculate full weeks to nearest Thursday
     var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
     // Return array of year and week number
     return [d.getUTCFullYear(), weekNo];
  }
let choosenYear = prompt('Vill du byta år?', new Date().getFullYear());
let thisYear = new Date().getFullYear() !== choosenYear ? choosenYear: new Date().getFullYear();
// fix year as number!
thisYear = parseInt(thisYear);
function argng(year) {
  return year % 3 == 2 ? 1 : year % 3 == 0 ? 2 : year % 3 == 1 ? 3 : null;
}
let argang = argng(thisYear);


// Skapar högtider med fast datum
let events = [{
    'Date': new Date(thisYear, 0, 1),
    'Title': 'Nyårsdagen',
    'Color': 'Vit',
    'Theme':'Kristi omskärelse – Namnet Jesus',
    'Psalms': 'Psalt 40:2-9',
    'OldT': '1 Mos 17:1-14',
    'Letters': 'Tit 3:4-7',
    'Gospel': 'Luk 2:21',
    'Description':'1 januari',
    'Link': '',
    'Prio': 1,
    'Argang' : argang,
    'HHM': argang == 2 ? 'Joh 14:13-14' : argang == 3 ? 'Rom 4:9-14': null,
    'AFT': argang == 2 ? 'Luk 13:6-9' : argang == 3 ? 'Hebr 13:7-16': null
  },
  {
    'Date': new Date(thisYear, 0, 6),
    'Title': 'Epifania',
    'Color': 'Vit',
    'Theme':'Kristi uppenbarelse',
    'Psalms': 'Psalt 72',
    'OldT': 'Jes 60:1-7',
    'Letters': '',
    'Gospel': 'Matt 2:1-12',
    'Description':'6 januari',
    'Link': '',
    'Prio': 1,
    'Argang' : argang,
    'HHM': argang == 2 ? 'Joh 8:12' : argang == 3 ? '2 Kor 4:3-6': null,
    'AFT': argang == 2 ? 'Luk 11:29-36' : argang == 3 ? '1 Tim 3:16': null
  },
  {
    'Date': new Date(thisYear, 0, 25),
    'Title': 'Pauli omvändelse',
    'Color': '',
    'Theme':'Pauli omvändelse',
    'Psalms': '',
    'OldT': '',
    'Letters': 'Apg 9:1-22',
    'Gospel': 'Matt 19:27-30',
    'Description':'25 januari',
    'Link': '',
    'Prio': 2,
    'Argang' : argang,
    'HHM':  null,
    'AFT':  null
  },
  {
    'Date': new Date(thisYear, 11, 25),
    'Title': 'Juldagen',
    'Color': 'Vit',
    'Theme': 'Kristi födelse',
    'Psalms': 'Psalt 45:2-8',
    'OldT': 'Jes 9:2-7',
    'Letters': 'Hebr 1',
    'Gospel': 'Luk 2:1-20 (ottesång), Joh 1:1-14',
    'Description':'25 december',
    'Link': '',
    'Prio': 1,
    'Argang': argng(thisYear+1),
    'HHM': argng(thisYear+1) == 2 ? 'Joh 1:1-14' : argng(thisYear+1) == 3 ? 'Hebr 1': null,
    'AFT': argng(thisYear+1) == 2 ? 'Matt 1:18-25' : argng(thisYear+1) == 3 ? 'Tit 2:11-15': null
  },
  {
    'Date': new Date(thisYear, 11, 26),
    'Title': 'Annandag Jul',
    'Color': 'Röd',
    'Theme': 'Trons martyrium',
    'Psalms': 'Psalt 2',
    'OldT': 'Jes 11:1-9',
    'Letters': 'Apg 6:8-15, 7:54-60',
    'Gospel': 'Matt 23:34-39',
    'Description':'26 december',
    'Link': '',
    'Prio': 1,
    'Argang': argng(thisYear+1),
    'HHM': argng(thisYear+1) == 2 ? 'Matt 10:32-39' : argng(thisYear+1) == 3 ? '1 Petr 4:12-19': null,
    'AFT': argng(thisYear+1) == 2 ? 'Matt 2:13-18' : argng(thisYear+1) == 3 ? 'Upp 14:1-5': null
  },
  {
    'Date': new Date(thisYear, 11, 27),
    'Title': 'Johannes',
    'Color': '',
    'Theme':'Sankt Johannes dag',
    'Psalms': '',
    'OldT': '',
    'Letters': '1 Joh 1:9-2:6',
    'Gospel': 'Joh 21:19-14',
    'Description': '27 december',
    'Link': '',
    'Prio': 1,
    'Argang': argng(thisYear),
    'HHM': null,
    'AFT': null
  },
  {
    'Date': new Date(thisYear, 11, 28),
    'Title': 'Värnlösa barns dag',
    'Color': '',
    'Theme': 'Menlösa barns dag',
    'Psalms': '',
    'OldT': '1 Mos 48:7',
    'Letters': '',
    'Gospel': 'Matt 2:13-18',
    'Description':'28 december',
    'Link': '',
    'Prio': 1,
    'Argang': argng(thisYear),
    'HHM':  null,
    'AFT':  null
  },
];

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
    'Theme':'Kristus är uppstånden',
    'Psalms': 'Psalt 118:15-29',
    'OldT': 'Hos 6:1-3',
    'Letters': '1 Kor 5:7-8',
    'Gospel': 'Mark 16:1-8',
    'Description' : 'Söndag efter första fullmåne efter vårdagjämningen (22 mar - 25 april)',
    'Link': '',
    'Prio': 1,
    'Argang' : argang,
    'HHM': argang == 2 ? 'Joh 20:1-10' : argang == 3 ? 'Matt 28:1-8': null,
    'AFT': argang == 2 ? '1 Kor 15:12-21' : argang == 3 ? 'Ef 1:15-23': null
  };
}

// beräkna resterande högtider med Påskdagen som referens och ändrar prio om *

function septuagesima(year) {
  return {
    'Date': getEaster(year).Date.subtractDays(63),
    'Title': 'Septuagesima',
    'Color': 'Violett',
    'Theme':'Guds oförskyllda nåd.',
    'Psalms': 'Psalt 80',
    'OldT': 'Jes 5:1-7',
    'Letters': '1 Kor 9:24-10:5',
    'Gospel': 'Matt 20:1-16',
    'Description' : 'Söndag* 63 dagar före påsk',
    'Link': '',
    'Prio': 2,
    'Argang' : argang,
    'HHM': argang == 2 ? 'Matt 19:27-30' : argang == 3 ? '1 Kor 3': null,
    'AFT': argang == 2 ? 'Luk 17:7-10' : argang == 3 ? 'Fil 3:7-16': null
  };
}

function sexagesima(year) {
  return {
    'Date': septuagesima(year).Date.addDays(7),
    'Title': 'Sexagesima',
    'Color': 'Violett',
    'Theme':'Guds ord',
    'Psalms': 'Psalt 119:89-112',
    'OldT': 'Amos 8:11-12',
    'Letters': '2 Kor 11:19-31',
    'Gospel': 'Luk 8:4-15',
    'Description' : 'Söndag* 56 dagar före påsk',
    'Link': '',
    'Prio': 2,
    'Argang' : argang,
    'HHM': argang == 2 ? 'Joh 12:34-43' : argang == 3 ? 'Apg 17:10-15': null,
    'AFT': argang == 2 ? 'Matt 9:36-10:16' : argang == 3 ? '2 Tim 3:10-4:8': null
  };
  
}

function quinquagesima(year) {
  return {
    'Date': sexagesima(year).Date.addDays(7),
    'Title': 'Fastlagssöndagen (Esto mihi)',
    'Color': 'Violett',
    'Theme':'Guds kärleks väg',
    'Psalms': 'Psalt 14',
    'OldT': 'Jer 8:4-12',
    'Letters': '1 Kor 13',
    'Gospel': 'Luk 18:31-43',
    'Description' : 'Söndag 49 dagar före påsk - Quinquagesima',
    'Link': '',
    'Prio': 1,
    'Argang' : argang,
    'HHM': argang == 2 ? 'Joh 12:20-33' : argang == 3 ? '1 Tim 2:4-7': null,
    'AFT': argang == 2 ? 'Mark10:32-45' : argang == 3 ? '1 Kor 1:20-25': null
  };
}

function askonsdagen(year) {
  return {
    'Date': sexagesima(year).Date.addDays(10),
    'Title': 'Askonsdagen',
    'Color': '',
    'Theme':'Fastan börjar',
    'Psalms': '',
    'OldT': '',
    'Letters': 'Joel 2:12-17',
    'Gospel': 'Matt 6:16-21',
    'Description' : 'Onsdag efter Fastlagssöndag',
    'Link': '',
    'Prio': 1,
    'Argang' : argang,
    'HHM': null,
    'AFT': null
  };
}

function invocavit(year) {
  return {
    'Date': getEaster(year).Date.subtractDays(42),
    'Title': '1 i Fastan (Invocavit)',
    'Color': 'Violett',
    'Theme':'Frestelsen',
    'Psalms': 'Psalt 35:1-18',
    'OldT': '1 Mos 22:1-14',
    'Letters': '2 Kor 6:1-10',
    'Gospel': 'Matt 4:1–11',
    'Description' : 'Söndag* 42 dagar före påsk',
    'Link': '',
    'Prio': 2,
    'Argang' : argang,
    'HHM': argang == 2 ? 'Matt 16:21-23' : argang == 3 ? 'Jak 1:12-15': null,
    'AFT': argang == 2 ? 'Luk 10:17-20' : argang == 3 ? 'Hebr 4:14-16': null
  };
}
function reminiscere(year) {
  return {
    'Date': invocavit(year).Date.addDays(7),
    'Title': '2 i Fastan (Reminiscere)',
    'Color': 'Violett',
    'Theme':'Den kämpande tron',
    'Psalms': 'Psalt 35:19-28',
    'OldT': '2 Mos 33:12-23',
    'Letters': '1 Tess 4:1-8',
    'Gospel': 'Matt 15:21-28',
    'Description' : 'Söndag*',
    'Link': '',
    'Prio': 2,
    'Argang' : argang,
    'HHM': argang == 2 ? 'Luk 7:36-50' : argang == 3 ? '1 Petr 4:1-6': null,
    'AFT': argang == 2 ? 'Mark 9:14-32' : argang == 3 ? 'Hebr 2:17,18': null
  };
}
function oculi(year) {
  return {
    'Date': reminiscere(year).Date.addDays(7),
    'Title': '3 i Fastan (Oculi)',
    'Color': 'Violett',
    'Theme':'Kampen mot ondskan',
    'Psalms': 'Psalt 40:10-18',
    'OldT': 'Jer 26:1-16',
    'Letters': 'Efes 5:1-14',
    'Gospel': 'Luk 11:14-28',
    'Description' : 'Söndag*',
    'Link': '',
    'Prio': 2,
    'Argang' : argang,
    'HHM': argang == 2 ? 'Joh 7:19-36' : argang == 3 ? 'Jak 11-11': null,
    'AFT': argang == 2 ? 'Luk 4:31-37' : argang == 3 ? 'Kol 1:24-29': null
  };
}
function mariabeb(year){
  return {
    'Date': firstDayInMonth(0,3,year).subtractDays(14),
    'Title': 'Jungfru Marie bebådelsedag',
    'Color': 'Vit',
    'Theme':'Bebådelsen',
    'Psalms': 'Psalt 132',
    'OldT': '5 Mos 14',
    'Letters': 'Jes 7:10-15',
    'Gospel': 'Luk 1:26-38',
    'Description' : 'Söndag 22-28 mars eller söndag före Palmsöndag och då tidigast 8 mars',
    'Link': '',
    'Prio': 1,
    'Argang' : argang,
    'HHM': argang == 2 ? 'Luk 1: 39-45' : argang == 3 ? 'Upp 12:1-6': null,
    'AFT': argang == 2 ? 'Luk 1:46-56' : argang == 3 ? 'Upp 21:1-8': null
  };
}
function laetare(year){
  return {
    'Date': getEaster(year).Date.subtractDays(21),
    'Title': 'Midfastosöndagen (Laetare)',
    'Color': 'Violett',
    'Theme':'Livets bröd',
    'Psalms': 'Psalt 78:12-25',
    'OldT': '4 Mos 20:1-13',
    'Letters': 'Gal 4:21-31',
    'Gospel': 'Joh 6:1-15',
    'Description' : 'Söndag* 21 dagar före påsk',
    'Link': '',
    'Prio': 2,
    'Argang' : argang,
    'HHM': argang == 2 ? 'Joh 6:22-36' : argang == 3 ? 'Upp 5 ': null,
    'AFT': argang == 2 ? 'Joh 6:52-71' : argang == 3 ? '2 Kor 7:10': null
  };
}
function judica(year){
  return {
    'Date': getEaster(year).Date.subtractDays(14),
    'Title': 'Passionssöndagen (Judica)',
    'Color': 'Violett',
    'Theme':'Fiendskapen mot Kristus',
    'Psalms': 'Psalt 43',
    'OldT': '4 Mos 21:4-9',
    'Letters': 'Hebr 9:11-15',
    'Gospel': 'Joh 8:46-59',
    'Description' : 'Söndag* 14 dagar före påsk',
    'Link': '',
    'Prio': 2,
    'Argang' : argang,
    'HHM': argang == 2 ? 'Joh 11. 46-57' : argang == 3 ? 'Joh 8:30-45': null,
    'AFT': argang == 2 ? 'Hebr 7:1-17' : argang == 3 ? 'Kol 2:1-8': null
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
    'Description' : 'Söndag en vecka före Påsk',
    'Link': '',
    'Prio': 1,
    'Argang' : argang,
    'HHM': argang == 2 ? 'Matt 26:17-30' : argang == 3 ? 'Luk 22:7-23': null,
    'AFT': argang == 2 ? '1 Kor 11:23-29' : argang == 3 ? '1 Kor 10:14-22': null
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
    'Description' : 'Torsdag före Påsk',
    'Link': '',
    'Prio': 1,
    'Argang' : argang,
    'HHM': argang == 2 ? 'Matt 26:17-30' : argang == 3 ? 'Luk 22:7-23': null,
    'AFT': argang == 2 ? '1 Kor 11:23-29' : argang == 3 ? '1 Kor 10:14-22': null
  };
}
function annandagpask(year) {
   return {
    'Date': getEaster(year).Date.addDays(1),
    'Title': 'Annandag Påsk',
    'Color': 'Vit',
    'Theme':'Vandringen med den Uppståndne',
    'Psalms': 'Psalt 16',
    'OldT': 'Job 19:23-27',
    'Letters': 'Apg 10:34-43',
    'Gospel': 'Luk 24:13-35',
    'Description' : 'Måndag efter Påsk',
    'Link': '',
    'Prio': 1,
    'Argang' : argang,
    'HHM': argang == 2 ? 'Joh 20:11-18' : argang == 3 ? 'Matt 28:9-15': null,
    'AFT': argang == 2 ? '2 Kor 5:11-21' : argang == 3 ? '1 Joh 4:7-15': null
  };
} 

events.push(annandagpask(thisYear));	

 
function fepask(year) {
  return {
    'Date': getEaster(year).Date.addDays(7),
    'Title': '1 e Påsk 2 i påsktiden (Quasimodogeniti)',
    'Color': 'Vit',
    'Theme':'Genom stängda dörrar',
    'Psalms': 'Psalt 114',
    'OldT': '1 Mos 32:22-32',
    'Letters': '1 Joh 5:1-12',
    'Gospel': 'Joh 20:19-31',
    'Description' : 'Söndag 7 dagar efter Påsk',
    'Link': '',
    'Prio': 1,
    'Argang' : argang,
    'HHM': argang == 2 ? 'Joh 21:1-14' : argang == 3 ? 'Luk 24:36-48': null,
    'AFT': argang == 2 ? 'Apg 3:12-26' : argang == 3 ? 'Apg 13:26-41': null
  };
}
events.push(fepask(thisYear));
						
// aepask 
										

function aepask(year) {
    return {
    'Date': getEaster(year).Date.addDays(14),
    'Title': '2 e Påsk 3 i påsktiden (Misericordia Domini)',
    'Color': 'Vit',
    'Theme':'Den gode herden',
    'Psalms': 'Psalt 23',
    'OldT': 'Hes 34:11-16',
    'Letters': '1 Petr 2:21-25',
    'Gospel': 'Joh 10:11-16',
    'Description' : 'Söndag 14 dagar efter Påsk',
    'Link': '',
    'Prio': 1,
    'Argang' : argang,
    'HHM': argang == 2 ? 'Joh 21:15-25' : argang == 3 ? 'Joh 10:1-10': null,
    'AFT': argang == 2 ? '1 Petr 5:1-5' : argang == 3 ? 'Hebr 13:17-21': null

    };
  }
  events.push(aepask(thisYear));
/*	  
// tepask getEaster(year).Date.addDays(21)
	3 e Påsk 4 i påsktiden (Jubilate)	38	3 e Påsk 4 i påsktiden (Jubilate)	Vit	Bedrövelse vänd i glädje	Psalt 100	Jes 40:25-31	1 Petr 2:11-20	Joh 16:16-22	Joh 17:1-8	Hebr  4:1-13	Joh 14:1-12	1 Petr 1:1-7	Söndag
  function tepask(year) {
    return {
    'Date': ,
    'Title': '',
    'Color': '',
    'Theme':'',
    'Psalms': '',
    'OldT': '',
    'Letters': '',
    'Gospel': '',
    'Description' : '',
    'Link': '',
    'Prio': 1,
    'Argang' : argang,
    'HHM': argang == 2 ? ' ' : argang == 3 ? '': null,
    'AFT': argang == 2 ? ' ' : argang == 3 ? '': null

    };
  }
  events.push(tepask(thisYear));

// fjepask getEaster(year).Date.addDays(28)
	4 e Påsk 5 i påsktiden (Cantate)	39	4 e Påsk 5 i påsktiden (Cantate)	Vit	Sanningens Ande	Psalt 98	Jes 49:1-13	Jak 1:16-21	Joh 16:5-15	Joh 17:9-17	Hebr 5:1-10	Joh 7:37-39	1 Joh 3:19-24	Söndag

    function fjepask(year) {
    return {
    'Date': ,
    'Title': '',
    'Color': '',
    'Theme':'',
    'Psalms': '',
    'OldT': '',
    'Letters': '',
    'Gospel': '',
    'Description' : '',
    'Link': '',
    'Prio': 1,
    'Argang' : argang,
    'HHM': argang == 2 ? ' ' : argang == 3 ? '': null,
    'AFT': argang == 2 ? ' ' : argang == 3 ? '': null

    };
  }
  events.push(fjepask(thisYear));

// rogate getEaster(year).Date.addDays(35)
	Bönsöndagen (Rogate)	40	Bönsöndagen (Rogate)	Vit	Bönen	Psalt 102:2-15	1 Mos 18:16-33	Jak 1:22-27	Joh 16:23-33	Joh 17:18-23	Hebr 7:18-28	Luk 11:1-13	Jak 5:13-20	Söndag
    function rogate(year) {
    return {
    'Date': ,
    'Title': '',
    'Color': '',
    'Theme':'',
    'Psalms': '',
    'OldT': '',
    'Letters': '',
    'Gospel': '',
    'Description' : '',
    'Link': '',
    'Prio': 1,
    'Argang' : argang,
    'HHM': argang == 2 ? ' ' : argang == 3 ? '': null,
    'AFT': argang == 2 ? ' ' : argang == 3 ? '': null

    };
  }
  events.push(rogate(thisYear));

// ascensione getEaster(year).Date.addDays(39)
	Kristi himmelsfärds dag	41	Kristi himmelsfärds dag	Vit	Himmelsfärden	Psalt 47:2-10	1 Mos 5:21-24	Apg 1:1-11	Mark 16:14-20 	Joh 17:24-26	Hebr 10:11-18	Luk 24:49-53	Efes 4:7-16	Torsdag 39 dagar efter Påsk
    function ascensione(year) {
    return {
    'Date': ,
    'Title': '',
    'Color': '',
    'Theme':'',
    'Psalms': '',
    'OldT': '',
    'Letters': '',
    'Gospel': '',
    'Description' : '',
    'Link': '',
    'Prio': 1,
    'Argang' : argang,
    'HHM': argang == 2 ? ' ' : argang == 3 ? '': null,
    'AFT': argang == 2 ? ' ' : argang == 3 ? '': null

    };
  }
  events.push(ascensione(thisYear));
// sjepask getEaster(year).Date.addDays(42)
	6 e Påsk. (Exaudi)	42	6 e Påsk. (Exaudi)	Vit	Hjälparen, den Helige Ande.	Psalt 19	Jes 32:9-20	1 Petr 4:7-11	Joh 15:26–16:4	Joh 15:18-27	Kol 3:1-11	Luk 12:4-12	1 Petr 3:15-22	Söndag  42 dagar efter Påsk
    function sjepask(year) {
    return {
    'Date': ,
    'Title': '',
    'Color': '',
    'Theme':'',
    'Psalms': '',
    'OldT': '',
    'Letters': '',
    'Gospel': '',
    'Description' : '',
    'Link': '',
    'Prio': 1,
    'Argang' : argang,
    'HHM': argang == 2 ? ' ' : argang == 3 ? '': null,
    'AFT': argang == 2 ? ' ' : argang == 3 ? '': null

    };
  }
  events.push(sjepask(thisYear));

// pentecoste 	  
*/											
function pentecoste(year) {
    return {
    'Date': getEaster(year).Date.addDays(49),
    'Title': 'Pingstdagen',
    'Color': 'Röd',
    'Theme':'Den Helige Andes utgjutande',
    'Psalms': 'Psalt 104:27-35',
    'OldT': 'Hes 36:22-32',
    'Letters': 'Apg 2:1-13',
    'Gospel': 'Joh 14:22-31',
    'Description' : 'Söndag  49 dagar efter Påsk',
    'Link': '',
    'Prio': 1,
    'Argang' : argang,
    'HHM': argang == 2 ? 'Joh 15:10-17 ' : argang == 3 ? 'Joh 14:15-21': null,
    'AFT': argang == 2 ? 'Efes 2:17-22' : argang == 3 ? 'Apg 2:14-41': null

    };
  }
  events.push(pentecoste(thisYear));

// annnandagpingst getEaster(year).Date.addDays(50)
function annnandagpingst(year) {
    return {
    'Date': getEaster(year).Date.addDays(50),
    'Title': 'Annandag pingst',
    'Color': 'Röd',
    'Theme':'Guds nådiga vilja om människans salighet',
    'Psalms': 'Psalt 110',
    'OldT': 'Jes 52:7-12',
    'Letters': 'Apg 10:42-48',
    'Gospel': 'Joh 3:16-21',
    'Description' : 'Måndag ',
    'Link': '',
    'Prio': 1,
    'Argang' : argang,
    'HHM': argang == 2 ? 'Joh 6:44-51' : argang == 3 ? 'Joh 12:44-50': null,
    'AFT': argang == 2 ? '1 Kor 12:12-31' : argang == 3 ? '1 Joh 4:7-15': null

    };
  }
  events.push(annnandagpingst(thisYear));

		
function michaeli(year) {
  return {
    'Date': firstDayAfterGivenDate(0,year,8,29),
    'Title': 'Den helige Mikaels dag',
    'Color': 'Vit',
    'Theme':'Änglarna',
    'Psalms': 'Psalt 103:19-22',
    'OldT': '2 Kon 6:14-17',
    'Letters': 'Upp 12:7-12',
    'Gospel': 'Matt 18:1-11',
    'Description' : 'Söndag 29 september-5 oktober',
    'Link': '',
    'Prio': 1,
    'Argang' : argang,
    'HHM': argang == 2 ? 'Mark 10:13-16' : argang == 3 ? 'Mark 9:33-50': null,
    'AFT': argang == 2 ? 'Hebr 2:1-10' : argang == 3 ? 'Apg 12:1-19': null
  };
}

events.push(michaeli(thisYear));

function allahelgon (year) {
  return {
    'Date': firstDayAfterGivenDate(6,year,9,31),
    'Title': 'Alla helgons dag',
    'Color': 'Vit',
    'Theme':'Saligprisningarna',
    'Psalms': 'Psalt 1',
    'OldT': '5 Mos 33:1-3',
    'Letters': 'Upp 7:2–17',
    'Gospel': 'Matt 5:1–12',
    'Description' : 'Lördag 31 oktober-6 november',
    'Link': '',
    'Prio': 1,
    'Argang' : argang,
    'HHM': argang == 2 ? 'Matt 5:13-16' : argang == 3 ? 'Luk 6:20-26': null,
    'AFT': argang == 2 ? 'Hebr 12:1-3' : argang == 3 ? 'Upp 22:6-9': null
  };
}

events.push(allahelgon(thisYear));			

function augsburska(year){
  return {
    'Date': firstDayAfterGivenDate(0,year,5,21),
    'Title': 'Augsburgska Bekännelsens dag',
    'Color': 'Röd',
    'Theme':'Evangelium, Guds kraft till frälsning',
    'Psalms': 'Psalt 46',
    'OldT': '1 Sam 3:19-4:1',
    'Letters': 'Rom 1:16-17',
    'Gospel': 'Matt 11:25-30',
    'Description' : 'Söndag 21-27 juni',
    'Link': '',
    'Prio': 1,
    'Argang' : argang,
    'HHM': null,
    'AFT': null
  };
} 

events.push(augsburska(thisYear));

function trinitatis(year){
  return {
    'Date': getEaster(year).Date.addDays(56),
    'Title': 'Heliga Trefaldighets dag',
    'Color': 'Vit',
    'Theme':'Fadern, Sonen och den Helige Ande',
    'Psalms': 'Psalt 99',
    'OldT': 'Jes 6:1-7',
    'Letters': 'Rom 11:33-36',
    'Gospel': 'Joh 3:1-15',
    'Description' : 'Söndag 56 dagar efter Påsk',
    'Link': '',
    'Prio': 1,
    'Argang' : argang,
    'HHM': argang == 2 ? 'Joh 15:1-9' : argang == 3 ? 'Matt 28:16-20': null,
    'AFT': argang == 2 ? '1 Joh 3:1-12' : argang == 3 ? 'Kol 1:12-23': null
  };
} 

events.push(trinitatis(thisYear));
/*
// prio 2:
// trinitatis1 
  function trinitatis1(year) {
    return {
    'Date': trinitatis(year).Date.addDays(7*1),
    'Title': '',
    'Color': '',
    'Theme':'',
    'Psalms': '',
    'OldT': '',
    'Letters': '',
    'Gospel': '',
    'Description' : '',
    'Link': '',
    'Prio': 2,
    'Argang' : argang,
    'HHM': argang == 2 ? ' ' : argang == 3 ? '': null,
    'AFT': argang == 2 ? ' ' : argang == 3 ? '': null

    };
  }
  events.push(trinitatis1(thisYear));

// trinitatis2 
  function trinitatis2(year) {
    return {
    'Date': trinitatis(year).Date.addDays(7*2),
    'Title': '',
    'Color': '',
    'Theme':'',
    'Psalms': '',
    'OldT': '',
    'Letters': '',
    'Gospel': '',
    'Description' : '',
    'Link': '',
    'Prio': 2,
    'Argang' : argang,
    'HHM': argang == 2 ? ' ' : argang == 3 ? '': null,
    'AFT': argang == 2 ? ' ' : argang == 3 ? '': null

    };
  }
  events.push(trinitatis2(thisYear));

// trinitatis3 
  function trinitatis3(year) {
    return {
    'Date': trinitatis(year).Date.addDays(7*3),
    'Title': '',
    'Color': '',
    'Theme':'',
    'Psalms': '',
    'OldT': '',
    'Letters': '',
    'Gospel': '',
    'Description' : '',
    'Link': '',
    'Prio': 2,
    'Argang' : argang,
    'HHM': argang == 2 ? ' ' : argang == 3 ? '': null,
    'AFT': argang == 2 ? ' ' : argang == 3 ? '': null

    };
  }
  events.push(trinitatis3(thisYear));

// trinitatis4 
  function trinitatis4(year) {
    return {
    'Date': trinitatis(year).Date.addDays(7*4),
    'Title': '',
    'Color': '',
    'Theme':'',
    'Psalms': '',
    'OldT': '',
    'Letters': '',
    'Gospel': '',
    'Description' : '',
    'Link': '',
    'Prio': 2,
    'Argang' : argang,
    'HHM': argang == 2 ? ' ' : argang == 3 ? '': null,
    'AFT': argang == 2 ? ' ' : argang == 3 ? '': null

    };
  }
  events.push(trinitatis4(thisYear));

// trinitatis5 
  function trinitatis5(year) {
    return {
    'Date': trinitatis(year).Date.addDays(7*5),
    'Title': '',
    'Color': '',
    'Theme':'',
    'Psalms': '',
    'OldT': '',
    'Letters': '',
    'Gospel': '',
    'Description' : '',
    'Link': '',
    'Prio': 2,
    'Argang' : argang,
    'HHM': argang == 2 ? ' ' : argang == 3 ? '': null,
    'AFT': argang == 2 ? ' ' : argang == 3 ? '': null

    };
  }
  events.push(trinitatis5(thisYear));

// trinitatis6 
  function trinitatis6(year) {
    return {
    'Date': trinitatis(year).Date.addDays(7*6),
    'Title': '',
    'Color': '',
    'Theme':'',
    'Psalms': '',
    'OldT': '',
    'Letters': '',
    'Gospel': '',
    'Description' : '',
    'Link': '',
    'Prio': 2,
    'Argang' : argang,
    'HHM': argang == 2 ? ' ' : argang == 3 ? '': null,
    'AFT': argang == 2 ? ' ' : argang == 3 ? '': null

    };
  }
  events.push(trinitatis6(thisYear));

// trinitatis7 
  function trinitatis7(year) {
    return {
    'Date': trinitatis(year).Date.addDays(7*7),
    'Title': '',
    'Color': '',
    'Theme':'',
    'Psalms': '',
    'OldT': '',
    'Letters': '',
    'Gospel': '',
    'Description' : '',
    'Link': '',
    'Prio': 2,
    'Argang' : argang,
    'HHM': argang == 2 ? ' ' : argang == 3 ? '': null,
    'AFT': argang == 2 ? ' ' : argang == 3 ? '': null

    };
  }
  events.push(trinitatis7(thisYear));

//  trinitatis8
  function trinitatis8(year) {
    return {
    'Date': trinitatis(year).Date.addDays(7*8),
    'Title': '',
    'Color': '',
    'Theme':'',
    'Psalms': '',
    'OldT': '',
    'Letters': '',
    'Gospel': '',
    'Description' : '',
    'Link': '',
    'Prio': 2,
    'Argang' : argang,
    'HHM': argang == 2 ? ' ' : argang == 3 ? '': null,
    'AFT': argang == 2 ? ' ' : argang == 3 ? '': null

    };
  }
  events.push(trinitatis8(thisYear));

// trinitatis9 
  function trinitatis9(year) {
    return {
    'Date': trinitatis(year).Date.addDays(7*9),
    'Title': '',
    'Color': '',
    'Theme':'',
    'Psalms': '',
    'OldT': '',
    'Letters': '',
    'Gospel': '',
    'Description' : '',
    'Link': '',
    'Prio': 2,
    'Argang' : argang,
    'HHM': argang == 2 ? ' ' : argang == 3 ? '': null,
    'AFT': argang == 2 ? ' ' : argang == 3 ? '': null

    };
  }
  events.push(trinitatis9(thisYear));

// trinitatis10 
  function trinitatis10(year) {
    return {
    'Date': trinitatis(year).Date.addDays(7*10),
    'Title': '',
    'Color': '',
    'Theme':'',
    'Psalms': '',
    'OldT': '',
    'Letters': '',
    'Gospel': '',
    'Description' : '',
    'Link': '',
    'Prio': 2,
    'Argang' : argang,
    'HHM': argang == 2 ? ' ' : argang == 3 ? '': null,
    'AFT': argang == 2 ? ' ' : argang == 3 ? '': null

    };
  }
  events.push(trinitatis10(thisYear));

// trinitatis11
  function trinitatis11(year) {
    return {
    'Date': trinitatis(year).Date.addDays(7*11),
    'Title': '',
    'Color': '',
    'Theme':'',
    'Psalms': '',
    'OldT': '',
    'Letters': '',
    'Gospel': '',
    'Description' : '',
    'Link': '',
    'Prio': 2,
    'Argang' : argang,
    'HHM': argang == 2 ? ' ' : argang == 3 ? '': null,
    'AFT': argang == 2 ? ' ' : argang == 3 ? '': null

    };
  }
  events.push(trinitatis11(thisYear));

// trinitatis12 
  function trinitatis12(year) {
    return {
    'Date': trinitatis(year).Date.addDays(7*12),
    'Title': '',
    'Color': '',
    'Theme':'',
    'Psalms': '',
    'OldT': '',
    'Letters': '',
    'Gospel': '',
    'Description' : '',
    'Link': '',
    'Prio': 2,
    'Argang' : argang,
    'HHM': argang == 2 ? ' ' : argang == 3 ? '': null,
    'AFT': argang == 2 ? ' ' : argang == 3 ? '': null

    };
  }
  events.push(trinitatis12(thisYear));

// trinitatis13
  function trinitatis13(year) {
    return {
    'Date': trinitatis(year).Date.addDays(7*13),
    'Title': '',
    'Color': '',
    'Theme':'',
    'Psalms': '',
    'OldT': '',
    'Letters': '',
    'Gospel': '',
    'Description' : '',
    'Link': '',
    'Prio': 2,
    'Argang' : argang,
    'HHM': argang == 2 ? ' ' : argang == 3 ? '': null,
    'AFT': argang == 2 ? ' ' : argang == 3 ? '': null

    };
  }
  events.push(trinitatis13(thisYear));

// trinitatis14 
  function trinitatis14(year) {
    return {
    'Date': trinitatis(year).Date.addDays(7*14),
    'Title': '',
    'Color': '',
    'Theme':'',
    'Psalms': '',
    'OldT': '',
    'Letters': '',
    'Gospel': '',
    'Description' : '',
    'Link': '',
    'Prio': 2,
    'Argang' : argang,
    'HHM': argang == 2 ? ' ' : argang == 3 ? '': null,
    'AFT': argang == 2 ? ' ' : argang == 3 ? '': null

    };
  }
  events.push(trinitatis14(thisYear));

// trinitatis15 
  function trinitatis15(year) {
    return {
    'Date': trinitatis(year).Date.addDays(7*15),
    'Title': '',
    'Color': '',
    'Theme':'',
    'Psalms': '',
    'OldT': '',
    'Letters': '',
    'Gospel': '',
    'Description' : '',
    'Link': '',
    'Prio': 2,
    'Argang' : argang,
    'HHM': argang == 2 ? ' ' : argang == 3 ? '': null,
    'AFT': argang == 2 ? ' ' : argang == 3 ? '': null

    };
  }
  events.push(trinitatis15(thisYear));

// trinitatis16
  function trinitatis16(year) {
    return {
    'Date': trinitatis(year).Date.addDays(7*16),
    'Title': '',
    'Color': '',
    'Theme':'',
    'Psalms': '',
    'OldT': '',
    'Letters': '',
    'Gospel': '',
    'Description' : '',
    'Link': '',
    'Prio': 2,
    'Argang' : argang,
    'HHM': argang == 2 ? ' ' : argang == 3 ? '': null,
    'AFT': argang == 2 ? ' ' : argang == 3 ? '': null

    };
  }
  events.push(trinitatis16(thisYear));

// trinitatis17 
  function trinitatis17(year) {
    return {
    'Date': trinitatis(year).Date.addDays(7*17),
    'Title': '',
    'Color': '',
    'Theme':'',
    'Psalms': '',
    'OldT': '',
    'Letters': '',
    'Gospel': '',
    'Description' : '',
    'Link': '',
    'Prio': 2,
    'Argang' : argang,
    'HHM': argang == 2 ? ' ' : argang == 3 ? '': null,
    'AFT': argang == 2 ? ' ' : argang == 3 ? '': null

    };
  }
  events.push(trinitatis17(thisYear));

// trinitatis18 
  function trinitatis18(year) {
    return {
    'Date': trinitatis(year).Date.addDays(7*18),
    'Title': '',
    'Color': '',
    'Theme':'',
    'Psalms': '',
    'OldT': '',
    'Letters': '',
    'Gospel': '',
    'Description' : '',
    'Link': '',
    'Prio': 2,
    'Argang' : argang,
    'HHM': argang == 2 ? ' ' : argang == 3 ? '': null,
    'AFT': argang == 2 ? ' ' : argang == 3 ? '': null

    };
  }
  events.push(trinitatis18(thisYear));

// trinitatis19 
  function trinitatis19(year) {
    return {
    'Date': trinitatis(year).Date.addDays(7*19),
    'Title': '',
    'Color': '',
    'Theme':'',
    'Psalms': '',
    'OldT': '',
    'Letters': '',
    'Gospel': '',
    'Description' : '',
    'Link': '',
    'Prio': 2,
    'Argang' : argang,
    'HHM': argang == 2 ? ' ' : argang == 3 ? '': null,
    'AFT': argang == 2 ? ' ' : argang == 3 ? '': null

    };
  }
  events.push(trinitatis19(thisYear));

// trinitatis20 
  function trinitatis20(year) {
    return {
    'Date': trinitatis(year).Date.addDays(7*20),
    'Title': '',
    'Color': '',
    'Theme':'',
    'Psalms': '',
    'OldT': '',
    'Letters': '',
    'Gospel': '',
    'Description' : '',
    'Link': '',
    'Prio': 2,
    'Argang' : argang,
    'HHM': argang == 2 ? ' ' : argang == 3 ? '': null,
    'AFT': argang == 2 ? ' ' : argang == 3 ? '': null

    };
  }
  events.push(trinitatis20(thisYear));

// trinitatis21 
  function trinitatis21(year) {
    return {
    'Date': trinitatis(year).Date.addDays(7*21),
    'Title': '',
    'Color': '',
    'Theme':''
    'Psalms': '',
    'OldT': '',
    'Letters': '',
    'Gospel': '',
    'Description' : '',
    'Link': '',
    'Prio': 2,
    'Argang' : argang,
    'HHM': argang == 2 ? ' ' : argang == 3 ? '': null,
    'AFT': argang == 2 ? ' ' : argang == 3 ? '': null

    };
  }
  events.push(trinitatis21(thisYear));

// trinitatis22 trinitatis(year).Date.addDays(7*22)
  function trinitatis22(year) {
    return {
    'Date': trinitatis(year).Date.addDays(7*22),
    'Title': '',
    'Color': '',
    'Theme':'',
    'Psalms': '',
    'OldT': '',
    'Letters': '',
    'Gospel': '',
    'Description' : '',
    'Link': '',
    'Prio': 2,
    'Argang' : argang,
    'HHM': argang == 2 ? ' ' : argang == 3 ? '': null,
    'AFT': argang == 2 ? ' ' : argang == 3 ? '': null

    };
  }
  events.push(trinitatis22(thisYear));

// trinitatis23 
  function trinitatis23(year) {
    return {
    'Date': trinitatis(year).Date.addDays(7*23),
    'Title': '',
    'Color': '',
    'Theme':'',
    'Psalms': '',
    'OldT': '',
    'Letters': '',
    'Gospel': '',
    'Description' : '',
    'Link': '',
    'Prio': 2,
    'Argang' : argang,
    'HHM': argang == 2 ? ' ' : argang == 3 ? '': null,
    'AFT': argang == 2 ? ' ' : argang == 3 ? '': null

    };
  }
  events.push(trinitatis23(thisYear));

// trinitatis24 
  function trinitatis24(year) {
    return {
    'Date': trinitatis(year).Date.addDays(7*24),
    'Title': '',
    'Color': '',
    'Theme':'',
    'Psalms': '',
    'OldT': '',
    'Letters': '',
    'Gospel': '',
    'Description' : '',
    'Link': '',
    'Prio': 2,
    'Argang' : argang,
    'HHM': argang == 2 ? ' ' : argang == 3 ? '': null,
    'AFT': argang == 2 ? ' ' : argang == 3 ? '': null

    };
  }
  events.push(trinitatis24(thisYear));

// trinitatis25 
  function trinitatis25(year) {
    return {
    'Date': trinitatis(year).Date.addDays(7*25),
    'Title': '',
    'Color': '',
    'Theme':'',
    'Psalms': '',
    'OldT': '',
    'Letters': '',
    'Gospel': '',
    'Description' : '',
    'Link': '',
    'Prio': 2,
    'Argang' : argang,
    'HHM': argang == 2 ? ' ' : argang == 3 ? '': null,
    'AFT': argang == 2 ? ' ' : argang == 3 ? '': null

    };
  }
  events.push(trinitatis25(thisYear));
*/
function domsndg(year) {
  return {
    'Date': firstDayInMonth(0,11,year).subtractDays(14),
    'Title': 'Domssöndagen',
    'Color': 'Violett',
    'Theme': 'Den Yttersta Domen',
    'Psalms': 'Psalt 50',
    'OldT': 'Dan 7:9-14',
    'Letters': '2 Tess 1:1-10',
    'Gospel': 'Matt 25:31-46',
    'Description' : 'Söndag 20-26 November',
    'Link': '',
    'Prio': 1,
    'Argang': argang,
    'HHM': argang == 2 ? 'Joh 5:22-29' : argang == 3 ? 'Matt 1:18-25': null,
    'AFT': argang == 2 ? '1 Kor 15:22-34' : argang == 3 ? 'Tit 2:11-15': null
  };
}
// från 1 advent ändras årgång varför 'year + 1'
function fadvent(year) {
  return {
    'Date': firstDayInMonth(0,11,year).subtractDays(7),
    'Title': '1 advent',
    'Color': 'Vit (Violett)',
    'Theme': 'Se din konung kommer',
    'Psalms': 'Psalt 24',
    'OldT': 'Jer 31:31-34',
    'Letters': 'Rom 13:11-14',
    'Gospel': 'Matt 21:1-11',
    'Description' : 'Söndag 27 November - 3 December',
    'Link': '',
    'Prio': 1,
    'Argang': argng(year+1),
    'HHM': argng(year+1) == 2 ? 'Joh 18:36-37' : argng(year+1) == 3 ? 'Lik 4:16-22': null,
    'AFT': argng(year+1) == 2 ? 'Ef 1:1-14' : argng(year+1) == 3 ? 'Hebr 8:7-13': null
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
    'Description' : 'Söndag 4 - 10 December',
    'Link': '',
    'Prio': 1,
    'Argang': argng(year+1),
    'HHM': argng(year+1) == 2 ? 'Luk 12:35-40' : argng(year+1) == 3 ? 'Luk 17 20-30': null,
    'AFT': argng(year+1) == 2 ? 'Hebr 10:32-39' : argng(year+1) == 3 ? 'Jak 5:7-11': null
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
    'Description' : 'Söndag 11 - 17 December',
    'Link': '',
    'Prio': 1,
    'Argang': argng(year+1),
    'HHM': argng(year+1) == 2 ? 'Matt 11:11-19' : argng(year+1) == 3 ? 'Luk 3:1-14': null,
    'AFT': argng(year+1) == 2 ? '2 Petr 1:19-21' : argng(year+1) == 3 ? 'Gal 3:23-29': null
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
    'Description' : 'Söndag 18 - 24 December',
    'Link': '',
    'Prio': 1,
    'Argang': argng(year+1),
    'HHM': argng(year+1) == 2 ? 'Joh 3:22-36' : argng(year+1) == 3 ? 'Joh 5:30-47': null,
    'AFT': argng(year+1) == 2 ? 'Upp 3:14-22' : argng(year+1) == 3 ? '1 Petr 1:18-12': null
  };
}

function ioannesbaptista(year) {
 
  let fs = firstDayAfterGivenDate(6,year,5,20);
    if (fs.getDate() > 19 && fs.getDate() < 27){

    return {
      'Date': fs,
      'Title': 'Den heliga Johannes döparens dag eller Midssommardagen',
      'Color': 'Vit',
      'Theme':'Johannes Döparens födelse',
      'Psalms': 'Psalt 92',
      'OldT': 'Jes 40:1-8',
      'Letters': '',
      'Gospel': 'Luk 1:57-80',
      'Description' : 'Lördag 20-26 juni',
      'Link': '',
      'Prio': 1,
      'Argang' : argang,
      'HHM': argang == 2 ? 'Luk 1:5-25' : argang == 3 ? 'Mark 6:14-29': null,
      'AFT': argang == 2 ? 'Apg 19:1-7' : argang == 3 ? 'Apg 13 16-25': null
    };
   } 
} 

function sndgenyar(year) {
  let nyar = new Date (year, 0, 1);
  let fs = firstDayAfterGivenDate(0,year,0,2);
  if (fs.getDate() > 1 && fs.getDate() < 6){

    return {
      'Date': fs,
      'Title': 'Söndag efter Nyårsdagen',
      'Color': 'Vit',
      'Theme':'Kristi dop',
      'Psalms': 'Psalt 124',
      'OldT': '1 Sam 2:1-10',
      'Letters': 'Rom 6:3-11',
      'Gospel': 'Matt 3:13-17',
      'Description' : 'Söndag 2 januari - 5 januari',
      'Link': '',
      'Prio': 2,
      'Argang' : argang,
      'HHM': argang == 2 ? 'Joh 1:29-34' : argang == 3 ? 'Matt 3:11-12': null,
      'AFT': argang == 2 ? 'Kol 2:9-15' : argang == 3 ? 'Ef 5:25-27': null
    };
  } 
} 
function feepifania(year) {
  return {
      'Date': firstDayAfterGivenDate(0,year,0,7),
      'Title': '1 e Epifania',
      'Color': 'Vit',
      'Theme':'Kristus lär i templet',
      'Psalms': 'Psalt 26',
      'OldT': 'Pred 12:1-7',
      'Letters': 'Rom 12:1-5',
      'Gospel': 'Luk 2:41-52',
      'Description' : 'Söndag* 7 januari - 13 januari',
      'Link': '',
      'Prio': 2,
      'Argang' : argang,
      'HHM': argang == 2 ? 'Joh 7:14-18' : argang == 3 ? 'Matt 12:46-50': null,
      'AFT': argang == 2 ? 'Hebr 3:1-11' : argang == 3 ? 'Hebr 2:11-16': null
    };
  
} 
function aeepifania(year) {
  return {
      'Date': feepifania(year).Date.addDays(7),
      'Title': '2 e Epifania',
      'Color': 'Grön',
      'Theme':'Bröllopet i Kana',
      'Psalms': 'Psalt 128',
      'OldT': '1 Mos 2:15-25',
      'Letters': 'Rom 12:6-16',
      'Gospel': 'Joh 2:1-12',
      'Description' : 'Söndag*',
      'Link': '',
      'Prio': 2,
      'Argang' : argang,
      'HHM': argang == 2 ? 'Joh 4:5-26' : argang == 3 ? 'Luk 19:1-10': null,
      'AFT': argang == 2 ? 'Efes 2:11-16' : argang == 3 ? '1 Kor 1:26-31': null
    };
  
} 
function teepifania(year) {
  return {
      'Date': aeepifania(year).Date.addDays(7),
      'Title': '3 e Epifania',
      'Color': 'Grön',
      'Theme':'Kristus botar sjuka',
      'Psalms': 'Psalt 53',
      'OldT': '2 Kon 5:1-14',
      'Letters': 'Rom 12:16-21',
      'Gospel': 'Matt 8:1-13',
      'Description' : 'Söndag*',
      'Link': '',
      'Prio': 2,
      'Argang' : argang,
      'HHM': argang == 2 ? 'Joh 4:27-42' : argang == 3 ? 'Matt 8:14-17': null,
      'AFT': argang == 2 ? 'Hebr 11:1-22' : argang == 3 ? '2 Tim 1:1-14': null
    };
  
} 
function fjeepifania(year) {
  return {
      'Date': teepifania(year).Date.addDays(7),
      'Title': '4 e Epifania',
      'Color': 'Grön',
      'Theme':'Kristus stillar stormen',
      'Psalms': 'Psalt 93',
      'OldT': '2 Mos 14:21-31',
      'Letters': 'Rom 13:8-10',
      'Gospel': 'Matt 8:23-27',
      'Description' : 'Söndag*',
      'Link': '',
      'Prio': 2,
      'Argang' : argang,
      'HHM': argang == 2 ? 'Matt 21:18-22' : argang == 3 ? 'Matt 14:22-36': null,
      'AFT': argang == 2 ? 'Hebr 11:23-40' : argang == 3 ? '2 Tim 1:3-14': null
    };
  
} 

// lägger till de beräknade högtiderna i events

events.push(getEaster(thisYear));
events.push(septuagesima(thisYear));
events.push(sexagesima(thisYear));
events.push(quinquagesima(thisYear));
events.push(askonsdagen(thisYear));
events.push(invocavit(thisYear));
events.push(mariabeb(thisYear));
events.push(laetare(thisYear));
events.push(judica(thisYear));
events.push(palmsndg(thisYear));
events.push(skrtorsd(thisYear));
events.push(reminiscere(thisYear));
events.push(oculi(thisYear));
events.push(domsndg(thisYear));
events.push(fadvent(thisYear));
events.push(aadvent(thisYear));
events.push(tadvent(thisYear));
events.push(fjadvent(thisYear));
if (typeof sndgenyar(thisYear) == "undefined" ) { } else{
  events.push(sndgenyar(thisYear));
}
if (typeof ioannesbaptista(thisYear) == "undefined" ) { } else{
  events.push(ioannesbaptista(thisYear));
}
events.push(feepifania(thisYear));
events.push(aeepifania(thisYear));
events.push(teepifania(thisYear));
events.push(fjeepifania(thisYear));
// lägger till en ny fält i varje högtidsobjekt med unixtime baserad på den bäreknade på dess Date fält
//console.log(events);
events = events.map(function(obj){
  if (typeof obj.Date !== "undefined" ){
    obj.time = obj.Date.getTime();
    return obj;
  }
 
});

events = events.map(function(obj){
  if (typeof obj.Date !== "undefined" ){
    obj.Week = getWeekNumber(obj.Date)[1];
    return obj;
  }
});

// funktion som ta bort objekt som har samma egenskap (property)

function removeDuplicates(originalArray, prop) {
  var newArray = [];
  var lookupObject  = {};

  for(var i in originalArray) {
     lookupObject[originalArray[i][prop]] = originalArray[i];
  }

  for(i in lookupObject) {
      newArray.push(lookupObject[i]);
  }
   return newArray;
}

// skapar ett ny array med unika objekt efter unixtime-egenskap (fält time)

let uniqueEvents = removeDuplicates(events, 'time');

// kollar hur många objekts som har tagits bort
console.log(events.length - uniqueEvents.length);

var months = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"];
var days = ["Måndag","Tisdag","Onsdag","Torsdag","Fredag","Lördag","Söndag"];


let settings = {};
let element = document.getElementById('bibelcalender');
caleandar(element, uniqueEvents, settings);
// visar Påskdagen och årgång
console.log(getEaster(thisYear).Date.toLocaleString() + " Årgang " + argang);
console.log("Aktuell år: "+ thisYear+" Årgang: "+ argang );
//console.log(uniqueEvents.sortBy(function(o){return [o.Date, o.Prio]}));
uniqueEvents = uniqueEvents.sortBy(function(o){return [o.Date, o.Prio]});

console.log(uniqueEvents.length);

function showWeek(arr, week) {
  for(i of arr) {
    if(i.Week === week) {
      console.log(`Vecka ${i.Week}`);
      if (i.Argang == 1) {
        console.log(days[new Date(i.time).getDay()]);
        console.log(new Date(i.time).getDate());
        console.log(months[new Date(i.time).getMonth()]);
        console.log( "\n" + `${i.Title}\n ${i.Color}\n ${i.Theme}\n ${i.Psalms}\n ${i.OldT}\n ${i.Letters}\t ${i.Gospel}` +"\n");
      } else if (i.Argang == 2 && i.HHM !== null) {
        console.log(days[new Date(i.time).getDay()]);
        console.log(new Date(i.time).getDate());
        console.log(months[new Date(i.time).getMonth()]);
        console.log( "\n" + `${i.Title}\n ${i.Color}\n ${i.Theme}\n ${i.Psalms}\n ${i.OldT}\n ${i.Letters}\t ${i.Gospel}\n II: ${i.HHM}, ${i.AFT}` +"\n");
      } else if ( i.HHM !== null) {
        console.log(days[new Date(i.time).getDay()]);
        console.log(new Date(i.time).getDate());
        console.log(months[new Date(i.time).getMonth()]);
        console.log("\n " + `${i.Title}\n ${i.Color}\n ${i.Theme}\n ${i.Psalms}\n ${i.OldT}\n ${i.Letters}\t ${i.Gospel}\n III: ${i.HHM}, ${i.AFT}` +"\n");
      } else {
        console.log(days[new Date(i.time).getDay()]);
        console.log(new Date(i.time).getDate());
        console.log(months[new Date(i.time).getMonth()]);
        console.log( "\n" + `${i.Title}\n ${i.Color}\n ${i.Theme}\n ${i.Psalms}\n ${i.OldT}\n ${i.Letters}\t ${i.Gospel}` +"\n");
      }
    }
  }
}

showMonth = (arr, mese) =>{
  console.log( months[mese] + " " + thisYear);
    for(i of arr) {
      if(new Date(i.time).getMonth() === mese) {
      
      if (i.Argang == 1) {
        console.log(`${days[new Date(i.time).getDay()]}  ${new Date(i.time).getDate()}`);
        console.log( "\n" + `${i.Title}\n ${i.Color}\n ${i.Theme}\n ${i.Psalms}\n ${i.OldT}\n ${i.Letters}\t ${i.Gospel}` +"\n");
      } else if (i.Argang == 2 && i.HHM !== null) {
        console.log(`${days[new Date(i.time).getDay()]}  ${new Date(i.time).getDate()}`);
        console.log( "\n" + `${i.Title}\n ${i.Color}\n ${i.Theme}\n ${i.Psalms}\n ${i.OldT}\n ${i.Letters}\t ${i.Gospel}\n II: ${i.HHM}, ${i.AFT}` +"\n");
      } else if ( i.HHM !== null) {
        console.log(`${days[new Date(i.time).getDay()]}  ${new Date(i.time).getDate()}`);
        console.log("\n " + `${i.Title}\n ${i.Color}\n ${i.Theme}\n ${i.Psalms}\n ${i.OldT}\n ${i.Letters}\t ${i.Gospel}\n III: ${i.HHM}, ${i.AFT}` +"\n");
      } else {
        console.log(`${days[new Date(i.time).getDay()]}  ${new Date(i.time).getDate()}`);
        console.log( "\n" + `${i.Title}\n ${i.Color}\n ${i.Theme}\n ${i.Psalms}\n ${i.OldT}\n ${i.Letters}\t ${i.Gospel}` +"\n");
      }
    }
  }
};

for (i of uniqueEvents) { 
  if (i.Argang == 1) {
      console.log(months[new Date(i.time).getMonth()]);
      console.log(new Date(i.time).toLocaleDateString() + "\n" + `${i.Title}\n ${i.Color}\n ${i.Theme}\n ${i.Psalms}\n ${i.OldT}\n ${i.Letters}\t ${i.Gospel}` +"\n");
    } else if (i.Argang == 2 && i.HHM !== null) {
      
      console.log(months[new Date(i.time).getMonth()]);
      console.log(new Date(i.time).toLocaleDateString() + "\n" + `${i.Title}\n ${i.Color}\n ${i.Theme}\n ${i.Psalms}\n ${i.OldT}\n ${i.Letters}\t ${i.Gospel}\n II: ${i.HHM}, ${i.AFT}` +"\n");
    } else if ( i.HHM !== null) {
      console.log(months[new Date(i.time).getMonth()]);
      console.log(new Date(i.time).toLocaleDateString() + "\n " + `${i.Title}\n ${i.Color}\n ${i.Theme}\n ${i.Psalms}\n ${i.OldT}\n ${i.Letters}\t ${i.Gospel}\n III: ${i.HHM}, ${i.AFT}` +"\n");
    } else {
      console.log(months[new Date(i.time).getMonth()]);
      console.log(new Date(i.time).toLocaleDateString() + "\n" + `${i.Title}\n ${i.Color}\n ${i.Theme}\n ${i.Psalms}\n ${i.OldT}\n ${i.Letters}\t ${i.Gospel}` +"\n");
    }
  }
/*console.log(events.sort(function (a, b) {
  return a.Title.localeCompare(b.Title);
}));
*/
//https://stackoverflow.com/questions/50538060/javascript-in-an-array-of-objects-returns-objects-where-any-value-matches-a-s
alert("hej detta är fortfarande under utveckling!");
const deepFindAll = function* (f, o = {})
{ if (Object (o) === o)
  { if (f (o) === true)
      yield o
    for (const [ _, v ] of Object.entries (o))
      yield* deepFindAll (f, v)
  }
}
const searchAll = (query = "", data = {}) =>
  Array.from
    ( deepFindAll
        ( o =>
            Object.values (o) .some (v =>
              String (v) === v && v .includes (query))
        , data
        )
    )
