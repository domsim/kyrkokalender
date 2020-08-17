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

function download(data, filename, type) {
        var file = new Blob([data],{
            type: type
        });
        if (window.navigator.msSaveOrOpenBlob)
            window.navigator.msSaveOrOpenBlob(file, filename);
        else {
            var a = document.createElement('a');
            url = URL.createObjectURL(file);
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            setTimeout(function() {
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
            }, 0);
        }
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
  ["Ef", "EPH"],
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
  ["Upp", "REV"],
  ["Första Moseboken", "GEN"],
  ["Andra Moseboken", "EXO"],
  ["Tredje Moseboken", "LEV"],
  ["Fjärde Moseboken", "NUM"],
  ["Femte Moseboken", "DEU"],
  ["Josus", "JOS"],
  ["Domarboken", "JDG"],
  ["Rut", "RUT"],
  ["Första Samuelsboken", "1SA"],
  ["Andra Samuelsboken", "2SA"],
  ["Första Kungaboken", "1KI"],
  ["Andra Kungaboken", "2KI"],
  ["1 Krönikeboken", "1CH"],
  ["2 Krönikeboken", "2CH"],
  ["Esra", "EZR"],
  ["Nehemja", "NEH"],
  ["Ester", "EST"],
  ["Job", "JOB"],
  ["Psaltaren", "PSA"],
  ["Psa", "PSA"],
  ["Ordspråksboken", "PRO"],
  ["Ord", "PRO"],
  ["Predikaren", "ECC"],
  ["Höga Visan", "SNG"],
  ["Jesaja", "ISA"],
  ["Jeremia", "JER"],
  ["Klagovisorna", "LAM"],
  ["kla", "LAM"],
  ["Hesekiel", "EZK"],
  ["Daniel", "DAN"],
  ["Hosea", "HOS"],
  ["Joel", "JOL"],
  ["Amos", "AMO"],
  ["Obadja", "OBA"],
  ["Jona", "JON"],
  ["Mika", "MIC"],
  ["Nahum", "NAM"],
  ["Habackuk", "HAB"],
  ["Sefanja", "ZEP"],
  ["Haggai", "HAG"],
  ["Sakarja", "ZEC"],
  ["Malaki", "MAL"],
  ["Matteusevangeliet", "MAT"],
  ["Markusevangeliet", "MRK"],
  ["Lukasevangeliet", "LUK"],
  ["Johannesevangeliet", "JHN"],
  ["Apostlagärningarna", "ACT"],
  ["Romarbrevet", "ROM"],
  ["Första Korintierbrevet", "1CO"],
  ["Andra Korintierbrevet", "2CO"],
  ["Galaterbrevet", "GAL"],
  ["Efesierbrevet", "EPH"],
  ["Ef", "EPH"],
  ["Filipperbrevet", "PHP"],
  ["Kolosserbrevet", "COL"],
  ["Första Tessalonikerbrevet", "1TH"],
  ["Andra Thessalonikerbrevet", "2TH"],
  ["Första Timoteusbrevet", "1TI"],
  ["Andra Timoteusbrevet", "2TI"],
  ["Titusbrevet", "TIT"],
  ["Filemonbrevet", "PHM"],
  ["Hebreerbrevet", "HEB"],
  ["Jakobsbrevet", "JAS"],
  ["Första Petrusbrevet", "1PE"],
  ["Andra Petrusbrevet", "2PE"],
  ["Första Johannesbrevet", "1JN"],
  ["Andra Johannesbrevet", "2JN"],
  ["TRredje Johannesbrevet", "3JN"],
  ["Judasbrev", "JUD"],
  ["Uppenbarelseboken", "REV"]
];


var readingplan = [
  ["Första Moseboken 1-2","Filipperbrevet 1:1-18","Psaltaren 1"],
  ["Första Moseboken 3-4","Filipperbrevet 1:19-2:11"],
  ["Första Moseboken 5-6","Filipperbrevet 2:12-30","Psaltaren 2"],
  ["Första Moseboken 7-8","Filipperbrevet 3"],
  ["Första Moseboken 9-10","Filipperbrevet 4","Psaltaren 3"],["Första Moseboken 11-12","Markusevangeliet 1:1-20"],["Första Moseboken 13-14","Markusevangeliet 1:21-45","Psaltaren 4"],["Första Moseboken 15-16","Markusevangeliet 2"],["Första Moseboken 17-18","Markusevangeliet 3:1-21","Psaltaren 5"],["Första Moseboken 19-20","Markusevangeliet 3:22-4:9"],["Första Moseboken 21-22","Markusevangeliet 4:10-41","Ordspråksboken 1"],["Första Moseboken 23-24","Markusevangeliet 5:1-20"],["Första Moseboken 25-26","Markusevangeliet 5:21-43","Psaltaren 6"],["Första Moseboken 27-28","Markusevangeliet 6:1-13"],["Första Moseboken 29-30","Markusevangeliet 6:14-44","Psaltaren 7"],["Första Moseboken 31-32","Markusevangeliet 7:1-13"],["Första Moseboken 33-34","Markusevangeliet7:14-30","Psaltaren 8"],["Första Moseboken 35-36","Markusevangeliet 7:31-8:10"],["Första Moseboken 37-38","Markusevangeliet 8:11-30","Psaltaren 9"],["Första Moseboken 39-40","Markusevangeliet 8:31-9:13"],["Första Moseboken 41-42","Markusevangeliet 9:14-32","Psaltaren 10"],["Första Moseboken 43-44","Markusevangeliet9:33-50"],["Första Moseboken 45-46","Markusevangeliet 10:1-31","Ordspråksboken 2"],["Första Moseboken 47-48","Markusevangeliet 10:32-52"],["Första Moseboken 49-50","Markusevangeliet 11:1-25","Psaltaren 11"],["Andra Moseboken 1-2","Markusevangeliet11:26-12:12"],["Andra Moseboken 3-4","Markusevangeliet 12:13-44","Psaltaren 12"],["Andra Moseboken 5-6","Markusevangeliet 13:1-23"],["Andra Moseboken 7-8","Markusevangeliet 13:24-37","Psaltaren 13"],["Andra Moseboken 9-10","Markusevangeliet 14:12-42"],["Andra Moseboken 11-12","Markusevangeliet 14:43-65","Psaltaren 14"],["Andra Moseboken 13-14","Markusevangeliet 14:66-15:15"],["Andra Moseboken 15-16","Markusevangeliet15:16-47","Psaltaren 15"],["Andra Moseboken 17-18","Markusevangeliet 16"],["Andra Moseboken 19-20","Romarbrevet 1:1-15","Ordspråksboken 3"],["Andra Moseboken 21-22","Romarbrevet 1:16-32"],["Andra Moseboken 23-24","Romarbrevet 2","Psaltaren 16"],["Andra Moseboken 25-26","Romarbrevet 3:1-20"],["Andra Moseboken 27-28","Romarbrevet 3:21-31","Psaltaren 17"],["Andra Moseboken 29-30","Romarbrevet 4"],["Andra Moseboken 31-32","Romarbrevet 5","Psaltaren 18"],["Andra Moseboken 33-34","Romarbrevet 6"],["Andra Moseboken 35-36","Romarbrevet 7","Psaltaren 19"],["Andra Moseboken 37-38","Romarbrevet 8:1-17"],["Andra Moseboken 39-40","Romarbrevet 8:18-39","Psaltaren 20"],["Tredje Moseboken 1-3","Romarbrevet 9:1-29"],["Tredje Moseboken 4-5","Romarbrevet 9:30-10:21","Ordspråksboken 4-5"],["Tredje Moseboken 6-7","Romarbrevet 11:1-24"],["Tredje Moseboken 8-9","Romarbrevet 11:25-12:8","Psaltaren 21"],["Tredje Moseboken 10-11","Romarbrevet 12:9-13:7"],["Tredje Moseboken 12-13","Romarbrevet 13:8-14:12","Psaltaren 22"],["Tredje Moseboken 14-15","Romarbrevet 14:13-15:13"],["Tredje Moseboken 16-17","Romarbrevet 15:14-33","Psaltaren 23"],["Tredje Moseboken 18-19","Romarbrevet 16"],["Tredje Moseboken 20-21","Johannesevangeliet 1:1-18","Psaltaren 24"],["Tredje Moseboken 22-23","Johannesevangeliet 1:19-34"],["Tredje Moseboken 24-25","Johannesevangeliet 1:35-51","Psaltaren 25"],["Tredje Moseboken 26-27","Johannesevangeliet 2"],["Fjärde Moseboken 1-2","Johannesevangeliet 3:1-21","Ordspråksboken 5"],["Fjärde Moseboken 3-4","Johannesevangeliet 3:22-36"],["Fjärde Moseboken 5-6","Johannesevangeliet 4:1-30","Psaltaren 26"],["Fjärde Moseboken 7-8","Johannesevangeliet 4:31-54"],["Fjärde Moseboken 9-10","Johannesevangeliet 5:1-18","Psaltaren 27"],["Fjärde Moseboken 11-12","Johannesevangeliet 5:19-47"],["Fjärde Moseboken 13-14","Johannesevangeliet 6:1-21","Psaltaren 28"],["Fjärde Moseboken 15-16","Johannesevangeliet 6:22-59"],["Fjärde Moseboken 17-18","Johannesevangeliet 6:60-71","Psaltaren 29"],["Fjärde Moseboken 19-20","Johannesevangeliet 7:1-24"],["Fjärde Moseboken 21-22","Johannesevangeliet7:25-53","Psaltaren 30"],["Fjärde Moseboken 23-24","Johannesevangeliet 8:1-11"],["Fjärde Moseboken 25-26","Johannesevangeliet 8:12-38","Ordspråksboken 6"],["Fjärde Moseboken 27-28","Johannesevangeliet 8:39-59"],["Fjärde Moseboken 29-30","Johannesevangeliet 9:1-17","Psaltaren 31"],["Fjärde Moseboken 31-32","Johannesevangeliet 9:18-41"],["Fjärde Moseboken 33-34","Johannesevangeliet 10:1-21","Psaltaren 32"],["Fjärde Moseboken 35-36","Johannesevangeliet 10:22-42"],["Femte Moseboken 1-2","Johannesevangeliet 11:1-16","Psaltaren 33"],["Femte Moseboken 3-4","Johannesevangeliet 11:17-37"],["Femte Moseboken 5-6","Johannesevangeliet 11:38-57","Psaltaren 34"],["Femte Moseboken 7-8","Johannesevangeliet 12:1-26"],["Femte Moseboken 9-10","Johannesevangeliet 12:27-50","Psaltaren 35"],["Femte Moseboken 11-12","Johannesevangeliet 13:1-20"],["Femte Moseboken 13-14","Johannesevangeliet 13:21-38","Ordspråksboken 7"],["Femte Moseboken 15-16","Johannesevangeliet 14:1-14"],["Femte Moseboken 17-18","Johannesevangeliet 14:15-31","Psaltaren 36"],["Femte Moseboken 19-20","Johannesevangeliet 15:1-17"],["Femte Moseboken 21-22","Johannesevangeliet 15:18-16:15","Psaltaren 37"],["Femte Moseboken 23-24","Johannesevangeliet 16:16-33"],["Femte Moseboken 25","Johannesevangeliet 17","Psaltaren 38"],["Femte Moseboken 26-27","Johannesevangeliet 18:1-18"],["Femte Moseboken 28","Johannesevangeliet 18:19-40","Psaltaren 39"],["Femte Moseboken 29-30","Johannesevangeliet 19:1-16"],["Femte Moseboken 31-32","Johannesevangeliet 19:17-37","Psaltaren 40"],["Femte Moseboken 33-34","Johannesevangeliet 19:38-20:10"],["Josua 1-2","Johannesevangeliet 20:11-31","Ordspråksboken 8"],["Josua 3-4","Johannesevangeliet 21"],["Josua 5-6","Apostlagärningarna 1","Psaltaren 41"],["Josua 7-8","Apostlagärningarna 2:1-13"],["Josua 9-10","Apostlagärningarna 2:14-41","Psaltaren 42"],["Josua 11-12","Apostlagärningarna 2:42-3:10"],["Josua 13-14","Apostlagärningarna 3:11-26","Psaltaren 43"],["Josua 15-16","Apostlagärningarna 4:1-31"],["Josua 17-18","Apostlagärningarna 4:32-5:16","Psaltaren 44"],["Josua 19-20","Apostlagärningarna 5:17-42"],["Josua 21-22","Apostlagärningarna 6","Psaltaren 45"],["Josua 23-24","Apostlagärningarna 7:1-32"],["Domarboken 1-2","Apostlagärningarna 7:33-60","Ordspråksboken 9"],["Domarboken 3-4","Apostlagärningarna 8:1-25"],["Domarboken 5-6","Apostlagärningarna8:26-40","Psaltaren 46"],["Domarboken 7-8","Apostlagärningarna 9:1-20"],["Domarboken 9-10","Apostlagärningarna 9:21-43","Psaltaren 47"],["Domarboken 11-12","Apostlagärningarna 10:1-33"],["Domarboken 13-14","Apostlagärningarna 10:34-48","Psaltaren 48"],["Domarboken 15-17","Apostlagärningarna 11"],["Domarboken 18-19","Apostlagärningarna 12","Psaltaren 49"],["Domarboken 20-21","Apostlagärningarna 13:1-12"],["Rut 1-2","Apostlagärningarna 13:13-52","Psaltaren 50"],["Rut 3-4","Apostlagärningarna 14:1-18"],["Första Samuelsboken 1-2","Apostlagärningarna 14:19-28","Ordspråksboken 10"],["Första Samuelsboken 3-4","Apostlagärningarna 15:1-21"],["Första Samuelsboken 5-7","Apostlagärningarna15:22-41","Psaltaren 51"],["Första Samuelsboken 8-9","Apostlagärningarna 16:1-15"],["Första Samuelsboken 10-11","Apostlagärningarna 16:16-40","Psaltaren 52"],["Första Samuelsboken 12-13","Apostlagärningarna 17"],["Första Samuelsboken 14-15","Apostlagärningarna 18","Psaltaren 53"],["Första Samuelsboken 16-17","Apostlagärningarna 19:1-20"],["Första Samuelsboken 18-19","Apostlagärningarna 19:21-40","Psaltaren 54"],["Första Samuelsboken 20-21","Apostlagärningarna 20:1-16"],["Första Samuelsboken 22-23","Apostlagärningarna 20:17-38","Psaltaren 55"],["Första Samuelsboken 24-25","Apostlagärningarna 21:1-26"],["Första Samuelsboken 26-27","Apostlagärningarna 21:27-40","Ordspråksboken 11"],["Första Samuelsboken 28-29","Apostlagärningarna 22:1-21"],["Första Samuelsboken 30-31","Apostlagärningarna 22:22-23:22","Psaltaren 56"],["Första Krönikeboken 1-2","Apostlagärningarna 23:23-35"],["Första Krönikeboken 3-4","Apostlagärningarna 24","Psaltaren 57"],["Första Krönikeboken 5-7","Apostlagärningarna 25"],["Första Krönikeboken 8-10","Apostlagärningarna 26","Psaltaren 58"],["Andra Samuelsboken 1-2","Apostlagärningarna 27:1-26"],["Andra Samuelsboken 3-4","Apostlagärningarna 27:27-44","Psaltaren 59"],["Andra Samuelsboken 5-6","Apostlagärningarna 28:1-31"],["Andra Samuelsboken 7-8","Första Korintierbrevet 1:1-17","Psaltaren 60"],["Andra Samuelsboken 9-10","Första Korintierbrevet 1:18-31"],["Andra Samuelsboken 11-12","Första Korintierbrevet 2","Ordspråksboken 12"],["Andra Samuelsboken 13-14","Första Korintierbrevet 3"],["Andra Samuelsboken 15-16","Första Korintierbrevet 4","Psaltaren 61"],["Andra Samuelsboken 17-18","Första Korintierbrevet 5"],["Andra Samuelsboken 19-20","Första Korintierbrevet 6","Psaltaren 62"],["Andra Samuelsboken 21-22","Första Korintierbrevet 7:1-16"],["Andra Samuelsboken 23-24","Första Korintierbrevet 7:17-40","Psaltaren 63"],["Första Kungaboken 1-2","Första Korintierbrevet 8"],["Första Krönikeboken 11-12","Första Korintierbrevet 9","Psaltaren 64"],["Första Krönikeboken 13-15","Första Korintierbrevet 10:1-22"],["Första Krönikeboken 16-17","Första Korintierbrevet 10:23-11:16","Psaltaren 65"],["Första Krönikeboken 18-19","Första Korintierbrevet 11:17-34"],["Första Krönikeboken 20-22","Första Korintierbrevet 12","Ordspråksboken 13"],["Första Krönikeboken 23-24","Första Korintierbrevet 13"],["Första Krönikeboken 25-26","Första Korintierbrevet 14:1-25","Psaltaren 66"],["Första Krönikeboken 27-29","Första Korintierbrevet 14:26-40"],["Första Kungaboken 3-4","Första Korintierbrevet 15:1-34","Psaltaren 67"],["Höga Visan 1-3","Första Korintierbrevet 15:35-58"],["Höga Visan 4-6","Första Korintierbrevet 16","Psaltaren 68"],["Höga Visan 7-8","Andra Korintierbrevet 1:1-11"],["Första Kungaboken 5-6","Andra Korintierbrevet 1:12-24","Psaltaren 69"],["Första Kungaboken 7-8","Andra Korintierbrevet 2"],["Första Kungaboken 9-10","Andra Korintierbrevet 3","Psaltaren 70"],["Andra Krönikeboken 1-3","Andra Korintierbrevet 4:1-5:10"],["Andra Krönikeboken 4-5","Andra Korintierbrevet 5:11-6:13","Ordspråksboken 14"],["Andra Krönikeboken 6-7","Andra Korintierbrevet 6:14-7:16"],["Predikaren 1-2","Andra Korintierbrevet 8","Psaltaren 71"],["Predikaren 3-5","Andra Korintierbrevet 9"],["Predikaren 6-7","Andra Korintierbrevet 10","Psaltaren 72"],["Predikaren 8-9","Andra Korintierbrevet 11"],["Predikaren 10-12","Andra Korintierbrevet 12-13","Psaltaren 73"],["Andra Krönikeboken 8-9","Matteusevangeliet 1"],["Första Kungaboken 11-12","Matteusevangeliet 2","Psaltaren 74"],["Första Kungaboken 13-14","Matteusevangeliet 3"],["Andra Krönikeboken 10-11","Matteusevangeliet 4","Psaltaren 75"],["Andra Krönikeboken 12-13","Matteusevangeliet 5:1-16"],["Andra Krönikeboken 14-15","Matteusevangeliet 5:17-37","Ordspråksboken 15"],["Andra Krönikeboken 16-17","Matteusevangeliet 5:38-6:15"],["Andra Krönikeboken 18-19","Matteusevangeliet 6:16-34","Psaltaren 76"],["Första Kungaboken 15-16","Matteusevangeliet 7"],["Första Kungaboken 17-18","Matteusevangeliet 8:1-17","Psaltaren 77"],["Första Kungaboken 19-20","Matteusevangeliet 8:18-34"],["Första Kungaboken 21-22","Matteusevangeliet 9:1-17","Psaltaren 78"],["Andra Krönikeboken 20-21","Matteusevangeliet 9:18-38"],["Andra Kungaboken 1-2","Matteusevangeliet 10:1-25","Psaltaren 79"],["Andra Kungaboken 3-4","Matteusevangeliet 10:26-42"],["Andra Kungaboken 5-6","Matteusevangeliet 11","Psaltaren 80"],["Andra Kungaboken 7-8","Matteusevangeliet 12:1-21"],["Obadja 1","Matteusevangeliet 12:22-42","Ordspråksboken 16"],["Andra Krönikeboken 22","Matteusevangeliet 12:43-13:17"],["Joel 1-3","Matteusevangeliet 13:18-35","Psaltaren 81"],["Andra Kungaboken 9-10","Matteusevangeliet 13:36-58"],["Andra Kungaboken 11-12","Matteusevangeliet 14:1-21","Psaltaren 82"],["Andra Kungaboken 13-14","Matteusevangeliet 14:22-15:9"],["Jona 1-4","Matteusevangeliet 15:10-28","Psaltaren 83"],["Amos 1-2","Matteusevangeliet 15:29-16:12"],["Amos 3-5","Matteusevangeliet 16:13-28","Psaltaren 84"],["Amos 6-7","Matteusevangeliet 17"],["Amos 8-9","Matteusevangeliet 18:1-20","Psaltaren 85"],["Andra Krönikeboken 23-24","Matteusevangeliet 18:21-35"],["Andra Krönikeboken 25-26","Matteusevangeliet 19","Ordspråksboken 17"],["Jesaja 1-2","Matteusevangeliet 20:1-19"],["Jesaja 3-4","Matteusevangeliet 20:20-21:11","Psaltaren 86"],["Jesaja 6","Matteusevangeliet 21:12-32"],["Andra Krönikeboken 27-28","Matteusevangeliet 21:33-46","Psaltaren 87"],["Andra Kungaboken 15-16","Matteusevangeliet 22:1-22"],["Jesaja 7-8","Matteusevangeliet 22:23-46","Psaltaren 88"],["Jesaja 9-10","Matteusevangeliet 23"],["Jesaja 11-12","Matteusevangeliet 24:1-14","Psaltaren 89"],["Jesaja 13-14","Matteusevangeliet 24:15-31"],["Jesaja 15-16","Matteusevangeliet 24:32-51","Psaltaren 90"],["Jesaja 17-18","Matteusevangeliet 25:1-30"],["Jesaja 19-20","Matteusevangeliet 25:31-46","Ordspråksboken 18"],["Jesaja 21-22","Matteusevangeliet 26:1-25"],["Jesaja 23-24","Matteusevangeliet 26:26-46","Psaltaren 91"],["Jesaja 25-26","Matteusevangeliet 26:47-68"],["Jesaja 27-28","Matteusevangeliet 26:69-27:10","Psaltaren 92"],["Jesaja 29-30","Matteusevangeliet 27:11-31"],["Jesaja 31-32","Matteusevangeliet 27:32-44","Psaltaren 93"],["Jesaja 33-34","Matteusevangeliet 27:45-66"],["Jesaja 35-36","Matteusevangeliet 28","Psaltaren 94"],["Jesaja 37-38","Hebreerbrevet 1:1-2:4"],["Jesaja 39-40","Hebreerbrevet 2:5-3:6","Psaltaren 95"],["Jesaja 41-42","Hebreerbrevet 3:7-4:16"],["Jesaja 43-44","Hebreerbrevet 5:1-6:12","Ordspråksboken 19"],["Jesaja 45-46","Hebreerbrevet 6:13-7:10"],["Jesaja 47-48","Hebreerbrevet 7:11-8:13","Psaltaren 96"],["Jesaja 49-50","Hebreerbrevet 9"],["Jesaja 51-52","Hebreerbrevet 10:1-18","Psaltaren 97"],["Jesaja 53-54","Hebreerbrevet 10:19-39"],["Jesaja 55-56","Hebreerbrevet 11:1-17","Psaltaren 98"],["Jesaja 57-58","Hebreerbrevet 11:18-40"],["Jesaja 59-60","Hebreerbrevet 12:1-17","Psaltaren 99"],["Jesaja 61-62","Hebreerbrevet 12:18-29"],["Jesaja 63-64","Hebreerbrevet 13","Psaltaren 100"],["Jesaja 65-66","Galaterbrevet 1"],["Andra Kungaboken 17","Galaterbrevet 2:1-14","Ordspråksboken 20"],["Andra Kungaboken 18-19","Galaterbrevet 2:15-3:14"],["Andra Krönikeboken 29-30","Galaterbrevet 3:15-4:7","Psaltaren 101"],["Andra Krönikeboken 31-32","Galaterbrevet 4:8-31"],["Hosea 1-3","Galaterbrevet 5","Psaltaren 102"],["Hosea 4-5","Galaterbrevet 6"],["Hosea 6-7","Efesierbrevet 1","Psaltaren 103"],["Hosea 8-10","Efesierbrevet 2"],["Hosea 11-12","Efesierbrevet 3","Psaltaren 104"],["Hosea 13-14","Efesierbrevet 4:1-16"],["Mika 1-2","Efesierbrevet 4:17-32","Psaltaren 105"],["Mika 3-5","Efesierbrevet 5"],["Mika 6-7","Efesierbrevet 6","Ordspråksboken 21"],["Andra Kungaboken 20-21","Kolosserbrevet 1:1-23"],["Andra Krönikeboken 33-34","Kolosserbrevet 1:24-2:15","Psaltaren 106"],["Sefanja 1-3","Kolosserbrevet 2:16-3:17"],["Nahum 1-3","Kolosserbrevet 3:18-4:18","Psaltaren 107"],["Andra Krönikeboken 35","Judasbrev 1"],["Habackuk 1-3","Brevet till Filemon 1","Psaltaren 108"],["Jeremia 1-2","Första Timoteusbrevet 1"],["Jeremia 3-4","Första Timoteusbrevet 2:1-3:7","Psaltaren 109"],["Jeremia 5-6","Första Timoteusbrevet 3:8-4:16"],["Jeremia 11-12","Första Timoteusbrevet 5","Psaltaren 110"],["Jeremia 26","Första Timoteusbrevet 6"],["Jeremia 7-8","Andra Timoteusbrevet 1","Ordspråksboken 22"],["Jeremia 9-10","Andra Timoteusbrevet 2"],["Jeremia 14-15","Andra Timoteusbrevet 3","Psaltaren 111"],["Jeremia 16-17","Andra Timoteusbrevet 4"],["Jeremia 18-20","Brevet till Titus 1","Psaltaren 112"],["Jeremia 35-36","Brevet till Titus 2-3"],["Jeremia 13, Jeremia 22","Lukasevangeliet 1:1-25","Psaltaren 113"],["Jeremia 23-24","Lukasevangeliet 1:26-38"],["Andra Kungaboken 22-23","Lukasevangeliet 1:39-56","Psaltaren 114"],["Andra Krönikeboken 36:1-8","Lukasevangeliet 1:57-80"],["Daniel 1-2","Lukasevangeliet 2:1-21","Psaltaren 115"],["Daniel 3-4","Lukasevangeliet 2:22-40"],["Daniel 5-6","Lukasevangeliet 2:41-52","Ordspråksboken 23"],["Daniel 7-8","Lukasevangeliet 3"],["Daniel 9-10","Lukasevangeliet 4:1-15","Psaltaren 116"],["Daniel 11-12","Lukasevangeliet 4:16-44"],["Andra Kungaboken 24-25","Lukasevangeliet 5:1-16","Psaltaren 117"],["Andra Krönikeboken 36:9-10, Hesekiel 1","Lukasevangeliet 5:17-39"],["Hesekiel 2-3","Lukasevangeliet 6:1-16","Psaltaren 118"],["Hesekiel 4-6","Lukasevangeliet 6:17-36"],["Hesekiel 7-8","Lukasevangeliet 6:37-7:10","Psaltaren 119:1-40"],["Hesekiel 9-10","Lukasevangeliet 7:11-35"],["Hesekiel 11-12","Lukasevangeliet 7:36-8:8","Psaltaren 119:41-88"],["Hesekiel 13-14","Lukasevangeliet 8:9-25"],["Hesekiel 15-16","Lukasevangeliet 8:26-56","Psaltaren 119:89-136"],["Hesekiel 17-18","Lukasevangeliet 9:1-17"],["Hesekiel 19-20","Lukasevangeliet 9:18-36","Psaltaren 119:137-176"],["Hesekiel 21-22","Lukasevangeliet 9:37-62"],["Hesekiel 23-24","Lukasevangeliet 10:1-20","Psaltaren 120"],["Hesekiel 25-26","Lukasevangeliet 10:21-42"],["Hesekiel 27-28","Lukasevangeliet 11:1-23","Ordspråksboken 24"],["Hesekiel 29-30","Lukasevangeliet 11:24-36"],["Hesekiel 31-32","Lukasevangeliet 11:37-12:7","Psaltaren 121"],["Hesekiel 33-34","Lukasevangeliet 12:8-34"],["Hesekiel 35-36","Lukasevangeliet 12:35-59","Psaltaren 122"],["Hesekiel 37-38","Lukasevangeliet 13:1-17"],["Hesekiel 39-40","Lukasevangeliet 13:18-35","Psaltaren 123"],["Hesekiel 41-42","Lukasevangeliet 14:1-24"],["Hesekiel 43-44","Lukasevangeliet 14:25-15:10","Psaltaren 124"],["Hesekiel 45-46","Lukasevangeliet 15:11-32"],["Hesekiel 47-48","Lukasevangeliet 16:1-17","Psaltaren 125"],["Jesaja 45, Jesaja 25","Lukasevangeliet 16:18-17:6"],["Jeremia 46-47","Lukasevangeliet 17:7-37","Ordspråksboken 25"],["Jeremia 48-49","Lukasevangeliet 18:1-17"],["Andra Krönikeboken 36:11-21, Jeremia 27","Lukasevangeliet 18:18-43","Psaltaren 126"],["Jeremia 28-29","Lukasevangeliet 19:1-27"],["Jeremia 50-51","Lukasevangeliet 19:28-48","Psaltaren 127"],["Jeremia 30-31","Lukasevangeliet 20:1-18"],["Jeremia 32-33","Lukasevangeliet 20:19-47","Psaltaren 128"],["Jeremia 21, Jeremia 34","Lukasevangeliet 21:1-19"],["Jeremia 37-38","Lukasevangeliet 21:20-38","Psaltaren 129"],["Jeremia 39, Jeremia 52","Lukasevangeliet 22:1-23"],["Jeremia 40-42","Lukasevangeliet 22:24-46","Psaltaren 130"],["Jeremia 43-44","Lukasevangeliet 22:47-71"],["Klagovisorna 1-2","Lukasevangeliet 23:1-17","Ordspråksboken 26"],["Klagovisorna 3","Lukasevangeliet 23:18-43"],["Klagovisorna 4-5","Lukasevangeliet 23:44-24:12","Psaltaren 131"],["Andra Krönikeboken 36:22-23","Lukasevangeliet 24:13-35"],["Esra 1-2","Lukasevangeliet 24:36-53","Psaltaren 132"],["Esra 3-4","Jakobs brev 1"],["Haggai 1-2","Jakobs brev 2","Psaltaren 133"],["Sakarja 1-3","Jakobs brev 3-4"],["Sakarja 4-6","Jakobs brev 5","Psaltaren 134"],["Sakarja 7-8","Första Petrusbrevet 1"],["Sakarja 9-10","Första Petrusbrevet 2:1-12","Psaltaren 135"],["Sakarja 11-12","Första Petrusbrevet 2:13-3:7"],["Sakarja 13-14","Första Petrusbrevet 3:8-4:11","Ordspråksboken 27"],["Esra 5-6","Första Petrusbrevet 4:12-5:14"],["Ester 1-2","Andra Petrusbrevet 1","Psaltaren 136"],["Ester 3-4","Andra Petrusbrevet 2"],["Ester 5-6","Andra Petrusbrevet 3","Psaltaren 137"],["Ester 7-8","Första Johannesbrevet 1:1-2:14"],["Ester 9-10","Första Johannesbrevet 2:15-29","Psaltaren 138"],["Esra 7-8","Första Johannesbrevet 3"],["Esra 9-10","Första Johannesbrevet 4","Psaltaren 139"],["Nehemja 1-3","Första Johannesbrevet 5"],["Nehemja 4-5","Andra Johannesbrevet 1","Psaltaren 140"],["Nehemja 6-7","Tredje Johannesbrevet 1"],["Nehemja 8-9","Första Tessalonikerbrevet 1:1-2:16","Ordspråksboken 28"],["Nehemja 10-11","Första Tessalonikerbrevet 2:17-3:13"],["Nehemja 12-13","Första Tessalonikerbrevet 4","Psaltaren 141"],["Malaki 1-2","Första Tessalonikerbrevet 5"],["Malaki 3-4","Andra Tessalonikerbrevet 1","Psaltaren 142"],["Job 1-2","Andra Tessalonikerbrevet 2"],["Job 3-5","Andra Tessalonikerbrevet 3","Psaltaren 143"],["Job 6-7","Uppenbarelseboken 1"],["Job 8-9","Uppenbarelseboken 2","Psaltaren 144"],["Job 10-11","Uppenbarelseboken 3-4"],["Job 12-13","Uppenbarelseboken 5","Psaltaren 145"],["Job 14-15","Uppenbarelseboken 6:1-7:8"],["Job 16-17","Uppenbarelseboken 7:9-8:13","Ordspråksboken 29"],["Job 18-19","Uppenbarelseboken 9"],["Job 20-21","Uppenbarelseboken 10:1-11:14","Psaltaren 146"],["Job 22-24","Uppenbarelseboken 11:15-12:18"],["Job 25-26","Uppenbarelseboken 13","Psaltaren 147"],["Job 27-28","Uppenbarelseboken 14-15"],["Job 29-31","Uppenbarelseboken 16","Psaltaren 148"],["Job 32-33","Uppenbarelseboken 17"],["Job 34-35","Uppenbarelseboken 18","Psaltaren 149"],["Job 36-37","Uppenbarelseboken 19"],["Job 38-39","Uppenbarelseboken 20:1-21:8","Ordspråksboken 30"],["Job 40-41","Uppenbarelseboken 21:9-27","Ordspråksboken 31"],["Job 42","Uppenbarelseboken 22","Psaltaren 150"]];


var chrono = {"data2":[
  ["Genesis 1:1-3:24"],
  ["Genesis 4:1-5:32","1Chronicles 1:1-4","Genesis 6:1-22"],
  ["Genesis 7:1-10:5","1Chronicles 1:5-7","Genesis 10:6-20","1Chronicles 1:8-16","Genesis 10:21-30","1Chronicles 1:17-23","Genesis 10:31-32"],
  ["Genesis 11:1-26","1Chronicles 1:24-27","Genesis 11:27-31","Genesis 12:1-14:24"],
  ["Genesis 15:1-17:27"],
  ["Genesis 18:1-21:7"],
  ["Genesis 21:8-23:20","Genesis 11:32","Genesis 24:1-67"],
  ["Genesis 25:1-4","1Chronicles 1:32-33","Genesis 25:5-6","Genesis 25:12-18","1Chronicles 1:28-31","1Chronicles 1:34","Genesis 25:19-26","Genesis 25:7-11"],
  ["Genesis 25:27-28:5"],
  ["Genesis 28:6-30:24"],
  ["Genesis 30:25-31:55"],["Genesis 32:1-35:27"],["Genesis 36:1-19","1Chronicles 1:35-37","Genesis 36:20-30","1Chronicles 1:38-42","Genesis 36:31-43","1Chronicles 1:43-2:2"],["Genesis 37:1-38:30","1Chronicles 2:3-6","1Chronicles 2:8","Genesis 39:1-23"],["Genesis 40:1-23","Genesis 35:28-29","Genesis 41:1-57"],["Genesis 42:1-45:15"],["Genesis 45:16-47:27"],["Genesis 47:28-50:26"],["Job 1:1-4:21"],["Job 5:1-7:21"],["Job 8:1-11:20"],["Job 12:1-14:22"],["Job 15:1-18:21"],["Job 19:1-21:34"],["Job 22:1-25:6"],["Job 26:1-29:25"],["Job 30:1-31:40"],["Job 32:1-34:37"],["Job 35:1-37:24"],["Job 38:1-40:5"],["Job 40:6-42:17"],["Exodus 1:1-2:25","1Chronicles 6:1-3","Exodus 3:1-4:17"],["Exodus 4:18-7:13"],["Exodus 7:14-9:35"],["Exodus 10:1-12:51"],["Exodus 13:1-15:27"],["Exodus 16:1-19:25"],["Exodus 20:1-22:15"],["Exodus 22:16-24:18"],["Exodus 25:1-28:43"],["Exodus 29:1-31:18"],["Exodus 32:1-34:35"],["Exodus 35:1-36:38"],["Exodus 37:1-39:31"],["Exodus 39:32-40:38","Numbers 9:15-23"],["Numbers 7:1-89"],["Numbers 8:1-9:14","Leviticus 1:1-3:17"],["Leviticus 4:1-6:30"],["Leviticus 7:1-8:36"],["Leviticus 9:1-11:47"],["Leviticus 12:1-14:32"],["Leviticus 14:33-16:34"],["Leviticus 17:1-19:37"],["Leviticus 20:1-22:33"],["Leviticus 23:1-25:23"],["Leviticus 25:24-26:46"],["Leviticus 27:1-34","Numbers 1:1-54"],["Numbers 2:1-3:51"],["Numbers 4:1-5:31"],["Numbers 6:1-27","Numbers 10:1-36"],["Numbers 11:1-13:33"],["Numbers 14:1-15:41"],["Numbers 16:1-18:32"],["Numbers 19:1-21:35"],["Numbers 22:1-24:25"],["Numbers 25:1-26:65"],["Numbers 27:1-29:40"],["Numbers 30:1-31:54"],["Numbers 32:1-33:56"],["Numbers 34:1-36:13"],["Deuteronomy 1:1-3:20"],["Deuteronomy 3:21-5:33"],["Deuteronomy 6:1-9:29"],["Deuteronomy 10:1-12:32"],["Deuteronomy 13:1-16:17"],["Deuteronomy 16:18-21:9"],["Deuteronomy 21:10-25:19"],["Deuteronomy 26:1-29:1"],["Deuteronomy 29:2-31:29"],["Deuteronomy 31:30-32:52","Psalm 90"],["Deuteronomy 33:1-34:12","Joshua 1:1-2:24"],["Joshua 3:1-6:27"],["Joshua 7:1","1Chronicles 2:7","Joshua 7:2-9:27"],["Joshua 10:1-12:6"],["Joshua 12:7-15:19"],["Joshua 15:20-17:18"],["Joshua 18:1-19:48"],["Joshua 19:49-21:45","1Chronicles 6:54-81"],["Joshua 22:1-24:33"],["Judges 1:1-3:30"],["Judges 3:31-6:40"],["Judges 7:1-9:21"],["Judges 9:22-11:28"],["Judges 11:29-15:20"],["Judges 16:1-18:31"],["Judges 19:1-21:25"],["Ruth 1:1-4:12"],["Ruth 4:13-22","1Chronicles 2:9-55","1Chronicles 4:1-23","1Samuel 1:1-8"],["1Samuel 1:9-4:11"],["1Samuel 4:12-8:22"],["1Samuel 9:1-12:25"],["1Chronicles 9:35-39","1Samuel 13:1-5","1Samuel 13:19-23","1Samuel 13:6-18","1Samuel 14:1-52"],["1Samuel 15:1-17:31"],["1Samuel 17:32-19:17","Psalm 59","1Samuel 19:18-24"],["1Samuel 20:1-21:15","Psalm 34"],["1Samuel 22:1-2","Psalm 57","Psalm 142","1Chronicles 12:8-18","1Samuel 22:3-23","Psalm 52","1Samuel 23:1-12"],["1Samuel 23:13-29","Psalm 54","1Samuel 24:1-25:44"],["1Samuel 26:1-27:7","1Chronicles 12:1-7","1Samuel 27:8-29:11","1Chronicles 12:19","Psalm 56"],["1Samuel 30:1-31","1Chronicles 12:20-22","1Samuel 31:1-13","1Chronicles 10:1-14","1Chronicles 9:40-44","2Samuel 4:4","2Samuel 1:1-27"],["2Samuel 2:1-3:5","1Chronicles 3:1-4","2Samuel 23:8-17","1Chronicles 11:10-19","2Samuel 23:18-39","1Chronicles 11:20-47"],["2Samuel 3:6-4:3","2Samuel 4:5-4:12"],["2Samuel 5:1-3","1Chronicles 11:1-3","1Chronicles 12:23-40","2Samuel 5:17-25","1Chronicles 14:8-17","2Samuel 5:6-10","1Chronicles 11:4-9","1Chronicles 3:4","2Samuel 5:13","2Samuel 5:4-5","2Samuel 5:11-12","1Chronicles 14:1-2","1Chronicles 13:1-5","2Samuel 6:1-11","1Chronicles 13:6-14"],["2Samuel 6:12","1Chronicles 15:1-28","2Samuel 6:12-16","1Chronicles 15:29","2Samuel 6:17-19","1Chronicles 16:1-43","2Samuel 6:19-23"],["2Samuel 7:1-17","1Chronicles 17:1-15","2Samuel 7:18-29","1Chronicles 17:16-27","2Samuel 8:1-14","1Chronicles 18:1-13","Psalm 60"],["2Samuel 8:15-18","1Chronicles 18:14-17","1Chronicles 6:16-30","1Chronicles 6:50-53","1Chronicles 6:31-48","2Samuel 9:1-10:19","1Chronicles 19:1-19"],["1Chronicles 20:1","2Samuel 11:1-12:14","Psalm 51","2Samuel 12:15-25","2Samuel 5:14-16","1Chronicles 14:3-7","1Chronicles 3:5-9"],["2Samuel 12:26-31","1Chronicles 20:2-3","2Samuel 13:1-14:33"],["2Samuel 15:1-17:14"],["2Samuel 17:15-29","Psalm 3","Psalm 63","2Samuel 18:1-19:30"],["2Samuel 19:31-20:26","Psalm 7","2Samuel 21:1-22","1Chronicles 20:4-8"],["2Samuel 22:1-51","Psalm 18"],["2Samuel 24:1-9","1Chronicles 21:1-6","2Samuel 24:10-17","1Chronicles 21:7-17","2Samuel 24:18-25","1Chronicles 21:18-22:19"],["1Chronicles 23:1-25:31"],["1Chronicles 26:1-28:21"],["1Chronicles 29:1-22","1Kings 1:1-53"],["1Kings 2:1-9","2Samuel 23:1-7","1Kings 2:10-12","1Chronicles 29:26-30","Psalm 4-6","Psalm 8-9","Psalm 11"],["Psalm 12-17","Psalm 19-21"],["Psalm 22-26"],["Psalm 27-32"],["Psalm 35-38"],["Psalm 39-41","Psalm 53","Psalm 55","Psalm 58"],["Psalm 61-62","Psalm 64-67"],["Psalm 68-70","Psalm 86","Psalm 101"],["Psalm 103","Psalm 108-110","Psalm 122","Psalm 124"],["Psalm 131","Psalm 133","Psalm 138-141","Psalm 143"],["Psalm 144-145","Psalm 88-89"],["Psalm 50","Psalm 73-74"],["Psalm 75-78"],["Psalm 79-82"],["Psalm 83","1Chronicles 29:23-25","2Chronicles 1:1","1Kings 2:13-3:4","2Chronicles 1:2-6","1Kings 3:5-15","2Chronicles 1:7-13"],["1Kings 3:16-28","1Kings 5:1-18","2Chronicles 2:1-18","1Kings 6:1-13","2Chronicles 3:1-14","1Kings 6:14-38"],["1Kings 7:1-51","2Chronicles 3:15-4:22"],["1Kings 8:1-11","2Chronicles 5:1-14","1Kings 8:12-21","2Chronicles 6:1-11","1Kings 8:22-53","2Chronicles 6:12-42"],["1Kings 8:54-66","2Chronicles 7:1-10","1Kings 9:1-9","2Chronicles 7:11-22","1Kings 9:10-14"],["2Chronicles 8:1-18","1Kings 9:15-10:13","2Chronicles 9:1-12","1Kings 10:14-29","2Chronicles 9:13-28","2Chronicles 1:14-17"],["1Kings 4:1-34","Psalm 72","Psalm 127"],["Proverbs 1:1-4:27"],["Proverbs 5:1-7:27"],["Proverbs 8:1-10:32"],["Proverbs 11:1-13:25"],["Proverbs 14:1-16:33"],["Proverbs 17:1-19:29"],["Proverbs 20:1-22:16"],["Proverbs 22:17-24:34"],["SongOfSongs 1:1-8:14"],["1Kings 11:1-43","2Chronicles 9:29-31","Ecclesiastes 1:1-11"],["Ecclesiastes 1:12-6:12"],["Ecclesiastes 7:1-11:6"],["Ecclesiastes 11:7-12:14","1Kings 12:1-20","2Chronicles 10:1-19","1Kings 12:21-24","2Chronicles 11:1-4","1Kings 12:25-33","2Chronicles 11:5-17"],["1Kings 13:1-14:18","1Kings 14:21-14:24","2Chronicles 12:13-14","2Chronicles 11:18-23","2Chronicles 12:1-12","1Kings 14:25-28","2Chronicles 12:13-16","1Kings 14:29-15:5","2Chronicles 13:1-22","1Kings 15:6-8","2Chronicles 14:1-8","1Kings 15:9-15","1Kings 14:19-20","1Kings 15:25-34","2Chronicles 14:9-15"],["1Kings 15:16-22","2Chronicles 16:1-10","1Kings 16:1-34","1Kings 15:23-24","2Chronicles 16:11-17:19","1Kings 17:1-7"],["1Kings 17:8-20:22"],["1Kings 20:23-22:9","2Chronicles 18:1-8"],["1Kings 22:10-28","2Chronicles 18:9-27","1Kings 22:29-35","2Chronicles 18:28-34","1Kings 22:36-40","1Kings 22:51-53","2Chronicles 19:1-20:30"],["2Kings 1:1-18","2Kings 3:1-27","1Kings 22:41-49","2Chronicles 20:31-37","1Kings 22:50","2Chronicles 21:1-4","2Kings 8:16-22","2Chronicles 21:5-7"],["2Kings 2:1-25","2Kings 4:1-44"],["2Kings 5:1-8:15"],["2Chronicles 21:8-20","2Kings 8:23-29","2Chronicles 22:1-7","2Kings 9:1-10:17","2Chronicles 22:8-9","2Kings 10:18-31"],["2Kings 11:1-3","2Chronicles 22:10-12","2Kings 11:4-12","2Chronicles 23:1-11","2Kings 11:13-16","2Chronicles 23:12-15","2Kings 11:17-21","2Chronicles 23:16-21","2Kings 12:1-16","2Chronicles 24:1-22","2Kings 10:32-36"],["2Kings 13:1-11","2Kings 12:17-21","2Chronicles 24:23-27","2Kings 13:14-25"],["2Kings 14:1-14","2Chronicles 25:1-24","2Kings 13:12-13","2Kings 14:15-16","2Kings 14:23-27","2Chronicles 25:25-28","2Kings 14:17-22","2Kings 15:1-5","2Chronicles 26:1-21","JONAH 1:1-4:11"],["Amos 1:1-6:14"],["Amos 7:1-9:15","2Kings 14:28-29","2Kings 15:8-29","2Kings 15:6-7","2Chronicles 26:22-23","Isaiah 6:1-13"],["2Kings 15:32-38","2Chronicles 27:1-9","Micah 1:1-16","2Kings 16:1-9","2Chronicles 28:1-15","Isaiah 7:1-25"],["Isaiah 8:1-11:16"],["Isaiah 12:1-6","Isaiah 17:1-14","2Chronicles 28:16-21","2Kings 16:10-18","2Chronicles 28:22-25","2Kings 18:1-8","2Chronicles 29:1-2","2Kings 15:30-31","2Kings 17:1-4","Hosea 1:1-2:13"],["Hosea 2:14-8:14"],["Hosea 9:1-14:9"],["Isaiah 28:1-29","2Kings 17:5","2Kings 18:9-12","2Kings 17:6-41","Isaiah 1:1-20"],["Isaiah 1:21-5:30"],["2Kings 16:19-20","2Chronicles 28:26-27","Isaiah 13:1-16:14"],["2Chronicles 29:3-31:21"],["Proverbs 25:1-29:27"],["Proverbs 30:1-31:31"],["Psalm 42","Psalm 43","Psalm 44","Psalm 45","Psalm 46"],["Psalm 47","Psalm 48","Psalm 49","Psalm 84","Psalm 85","Psalm 87"],["Psalm 1-2","Psalm 10","Psalm 33","Psalm 71","Psalm 91"],["Psalm 92","Psalm 93","Psalm 94","Psalm 95","Psalm 96","Psalm 97"],["Psalm 98","Psalm 99","Psalm 100","Psalm 102","Psalm 104"],["Psalm 105","Psalm 106"],["Psalm 107","Psalm 111","Psalm 112","Psalm 113","Psalm 114"],["Psalm 115","Psalm 116","Psalm 117","Psalm 118"],["Psalm 119"],["Psalm 120","Psalm 121","Psalm 123","Psalm 125","Psalm 126"],["Psalm 128","Psalm 129","Psalm 130","Psalm 132","Psalm 134","Psalm 135"],["Psalm 136","Psalm 146","Psalm 147","Psalm 148","Psalm 149","Psalm 150"],["Isaiah 18:1-23:18"],["Isaiah 24:1-27:13","Isaiah 29:1-24"],["Isaiah 30:1-33:24"],["Isaiah 34:1-35:10","Micah 2:1-5:15"],["Micah 6:1-7:20","2Chronicles 32:1-8","2Kings 18:13-18","Isaiah 36:1-3","2Kings 18:19-37","Isaiah 36:4-22"],["2Kings 19:1-19","Isaiah 37:1-20","2Chronicles 32:9-19","2Kings 19:20-37","Isaiah 37:21-38","2Chronicles 32:20-23"],["2Kings 20:1-11","Isaiah 38:1-8","2Chronicles 32:24-31","Isaiah 38:9-22","2Kings 20:12-19","Isaiah 39:1-8"],["Isaiah 40:1-44:5"],["Isaiah 44:6-48:11"],["Isaiah 48:12-52:12"],["Isaiah 52:13-57:21"],["Isaiah 58:1-63:14"],["Isaiah 63:15-66:24","2Kings 20:20-21","2Chronicles 32:32-33"],["2Kings 21:1-9","2Chronicles 33:1-9","2Kings 21:10-17","2Chronicles 33:10-19","2Kings 21:18","2Chronicles 33:20","2Kings 21:19-26","2Chronicles 33:21-25","2Kings 22:1-2","2Chronicles 34:1-7","Jeremiah 1:1-2:22"],["Jeremiah 2:23-5:19"],["Jeremiah 5:20-6:30","2Kings 22:3-20","2Chronicles 34:8-28"],["2Kings 23:1-20","2Chronicles 34:29-33","2Kings 23:21-28","2Chronicles 35:1-19","Nahum 1:1-3:19"],["Habakkuk 1:1-3:19","Zephaniah 1:1-2:7"],["Zephaniah 2:8-3:20","2Chronicles 35:20-27","2Kings 23:29-30","Jeremiah 47:1-48:47"],["2Chronicles 36:1-4","2Kings 23:31-37","2Chronicles 36:5","Jeremiah 22:1-23","Jeremiah 26:1-24","2Kings 24:1-4","Jeremiah 25:1-14"],["Jeremiah 25:15-38","Jeremiah 36:1-32","Jeremiah 45:1-46:28"],["Jeremiah 19:1-20:18","Daniel 1:1-21"],["Daniel 2:1-3:30","Jeremiah 7:1-8:3"],["Jeremiah 8:4-11:23"],["Jeremiah 12:1-15:21"],["Jeremiah 16:1-18:23","Jeremiah 35:1-19"],["Jeremiah 49:1-33","2Kings 24:5-7","2Chronicles 36:6-8","2Kings 24:8-9","2Chronicles 36:9","Jeremiah 22:24-23:32"],["Jeremiah 23:33-24:10","Jeremiah 29:1-31:14"],["Jeremiah 31:15-40","Jeremiah 49:34-51:14"],["Jeremiah 51:15-58","2Chronicles 36:10","2Kings 24:10-17","1Chronicles 3:10-16","2Chronicles 36:11-14","Jeremiah 52:1-3","2Kings 24:18-20","Jeremiah 37:1-10"],["Jeremiah 37:11-38:28","Ezekiel 1:1-3:15"],["Ezekiel 3:16-4:17","Jeremiah 27:1-28:17","Jeremiah 51:59-64"],["Ezekiel 5:1-9:11"],["Ezekiel 10:1-13:23"],["Ezekiel 14:1-16:63"],["Ezekiel 17:1-19:14"],["Ezekiel 20:1-22:16"],["Ezekiel 22:17-23:49","2Kings 24:20-25:2","Jeremiah 52:3-5","Jeremiah 39:1","Ezekiel 24:1-14"],["Ezekiel 24:15-25:17","Jeremiah 34:1-22","Jeremiah 21:1-14","Ezekiel 29:1-16","Ezekiel 30:20-31:18"],["Jeremiah 32:1-33:26","Ezekiel 26:1-14"],["Ezekiel 26:15-28:26","2Kings 25:3-7","Jeremiah 52:6-11","Jeremiah 39:2-10"],["Jeremiah 39:11-18","Jeremiah 40:1-6","2Kings 25:8-21","Jeremiah 52:12-27","2Chronicles 36:15-21","Lamentations 1:1-22"],["Lamentations 2:1-4:22"],["Lamentations 5:1-22","OBADIAH 1:1-21","2Kings 25:22-26","Jeremiah 40:7-41:18"],["Jeremiah 42:1-44:30","Ezekiel 33:21-33"],["Ezekiel 34:1-36:38"],["Ezekiel 37:1-39:29","Ezekiel 32:1-16"],["Ezekiel 32:17-33:20","Jeremiah 52:28-30","Psalm 137:1-9","1Chronicles 4:24-5:17"],["1Chronicles 5:18-26","1Chronicles 6:3","1Chronicles 6:49","1Chronicles 6:4-15","1Chronicles 7:1-8:28"],["1Chronicles 8:29-9:1","Daniel 4:1-37","Ezekiel 40:1-37"],["Ezekiel 40:38-43:27"],["Ezekiel 44:1-46:24"],["Ezekiel 47:1-48:35","Ezekiel 29:17-30:19","2Kings 25:27-30","Jeremiah 52:31-34"],["Daniel 7:1-8:27","Daniel 5:1-31"],["Daniel 6:1-28","Daniel 9:1-27","2Chronicles 36:22-23","Ezra 1:1-11","1Chronicles 3:17-19"],["Ezra 2:1-4:5","1Chronicles 3:19-24"],["Daniel 10:1-12:13","Ezra 4:24-5:1","Haggai 1:1-15"],["Haggai 2:1-9","Zechariah 1:1-6","Haggai 2:10-19","Ezra 5:2","Haggai 2:20-23","Zechariah 1:7-5:11"],["Zechariah 6:1-15","Ezra 5:3-6:14","Zechariah 7:1-8:23"],["Zechariah 9:1-14:21"],["Ezra 6:14-22","Ezra 4:6","Esther 1:1-4:17"],["Esther 5:1-10:3"],["Ezra 4:7-23","Ezra 7:1-8:36"],["Ezra 9:1-10:44","Nehemiah 1:1-2:20"],["Nehemiah 3:1-7:3"],["Nehemiah 7:4-8:12"],["Nehemiah 8:13-10:39"],["Nehemiah 11:1-12:26","1Chronicles 9:1-34"],["Nehemiah 12:27-13:6","Nehemiah 5:14-19","Nehemiah 13:7-31","Malachi 1:1-2:9"],["Malachi 2:10-4:6","JOEL 1:1-3:21"],["Mark 1:1","Luke 1:1-4","John 1:1-18","Matthew 1:1-17","Luke 3:23-38","Luke 1:5-38"],["Luke 1:39-80","Matthew 1:18-25","Luke 2:1-40"],["Matthew 2:1-23","Luke 2:41-52","Mark 1:2-8","Matthew 3:1-12","Luke 3:1-18","Mark 1:9-11","Matthew 3:13-17","Luke 3:21-22"],["Mark 1:12-13","Matthew 4:1-11","Luke 4:1-15","John 1:19-2:25"],["John 3:1-4:45","Luke 3:19-20"],["Mark 1:14-15","Matthew 4:12-17","Luke 3:23","John 4:46-54","Luke 4:16-30","Mark 1:16-20","Matthew 4:18-22","Mark 1:21-28","Luke 4:31-37","Mark 1:29-34","Matthew 8:14-17","Luke 4:38-41","Mark 1:35-39","Luke 4:42-44","Matthew 4:23-25"],["Luke 5:1-11","Mark 1:40-45","Matthew 8:1-4","Luke 5:12-16","Mark 2:1-12","Matthew 9:1-8","Luke 5:17-26","Mark 2:13-17","Matthew 9:9-13","Luke 5:27-32","Mark 2:18-22","Matthew 9:14-17","Luke 5:33-39"],["John 5:1-47","Mark 2:23-28","Matthew 12:1-8","Luke 6:1-5","Mark 3:1-6","Matthew 12:9-14","Luke 6:6-11","Matthew 12:15-21"],["Mark 3:7-19","Luke 6:12-16","Matthew 5:1-12","Luke 6:17-26","Matthew 5:13-48","Luke 6:27-36","Matthew 6:1-4"],["Matthew 6:5-7:6","Luke 6:37-42","Matthew 7:7-20","Luke 6:43-45","Matthew 7:21-29","Luke 6:46-49"],["Matthew 8:5-13","Luke 7:1-17","Matthew 11:1-19","Luke 7:18-35","Matthew 11:20-30","Luke 7:36-50"],["Luke 8:1-3","Mark 3:20-30","Matthew 12:22-45","Mark 3:31-35","Matthew 12:46-50","Luke 8:19-21","Mark 4:1-9","Matthew 13:1-9","Luke 8:4-8","Mark 4:10-20"],["Matthew 13:10-23","Luke 8:9-18","Mark 4:21-29","Matthew 13:24-30","Mark 4:30-34","Matthew 13:31-52","Mark 4:35-41","Matthew 8:23-27","Luke 8:22-25"],["Mark 5:1-20","Matthew 8:28-34","Luke 8:26-39","Mark 5:21-43","Matthew 9:18-26","Luke 8:40-56"],["Matthew 9:27-34","Mark 6:1-6","Matthew 13:53-58","Matthew 9:35-38","Mark 6:7-13","Matthew 10:1-42","Luke 9:1-6"],["Luke 9:7-9","Mark 6:14-29","Matthew 14:1-21","Mark 6:30-44","Luke 9:10-17","John 6:1-15","Mark 6:45-52","Matthew 14:22-33","John 6:16-21","Mark 6:53-56","Matthew 14:34-36"],["John 6:22-71","Mark 7:1-23","Matthew 15:1-20"],["Mark 7:24-30","Matthew 15:21-28","Mark 7:31-37","Matthew 15:29-31","Mark 8:1-10","Matthew 15:32-16:4","Mark 8:11-21","Matthew 16:5-12"],["Mark 8:22-30","Matthew 16:13-20","Luke 9:18-20","Mark 8:31-9:1","Matthew 16:21-28","Luke 9:21-27","Mark 9:2-13","Matthew 17:1-13","Luke 9:28-36"],["Mark 9:14-29","Matthew 17:14-21","Luke 9:37-43","Mark 9:30-32","Matthew 17:22-23","Luke 9:43-45","Matthew 17:24-27","Mark 9:33-37","Matthew 18:1-6","Luke 9:46-48","Mark 9:38-41","Luke 9:49-50","Mark 9:42-50","Matthew 18:7-35"],["John 7:1-9","Luke 9:51-56","Matthew 8:18-22","Luke 9:57-62","John 7:10-8:20"],["John 8:21-59","Luke 10:1-11:13"],["Luke 11:14-12:34"],["Luke 12:35-13:21","John 9:1-41"],["John 10:1-42","Luke 13:22-14:24"],["Luke 14:25-17:10","John 11:1-37"],["John 11:38-57","Luke 17:11-18:8"],["Luke 18:9-14","Mark 10:1-12","Matthew 19:1-12","Mark 10:13-16","Matthew 19:13-15","Luke 18:15-17","Mark 10:17-31","Matthew 19:16-30","Luke 18:18-30"],["Matthew 20:1-16","Mark 10:32-34","Matthew 20:17-19","Luke 18:31-34","Mark 10:35-45","Matthew 20:20-34","Mark 10:46-52","Luke 18:35-19:27"],["Mark 14:3-9","Matthew 26:6-13","John 12:1-11","Mark 11:1-11","Matthew 21:1-11","Luke 19:28-40","John 12:12-19","Luke 19:41-44","John 12:20-36"],["John 12:37-50","Mark 11:12-14","Matthew 21:18-22","Mark 11:15-19","Matthew 21:12-17","Luke 19:45-48","Mark 11:20-33","Matthew 21:23-27","Luke 20:1-8"],["Matthew 21:28-32","Mark 12:1-12","Matthew 21:33-46","Luke 20:9-19","Matthew 22:1-14","Mark 12:13-17","Matthew 22:15-22","Luke 20:20-26","Mark 12:18-27","Matthew 22:23-33","Luke 20:27-40"],["Mark 12:28-34","Matthew 22:34-40","Mark 12:35-37","Matthew 22:41-46","Luke 20:41-44","Mark 12:38-40","Matthew 23:1-12","Luke 20:45-47","Matthew 23:13-39","Mark 12:41-44","Luke 21:1-4"],["Mark 13:1-23","Matthew 24:1-25","Luke 21:5-24","Mark 13:24-31","Matthew 24:26-35","Luke 21:25-33"],["Mark 13:32-37","Matthew 24:36-51","Luke 21:34-38","Matthew 25:1-46"],["Mark 14:1-2","Matthew 26:1-5","Luke 22:1-2","Mark 14:10-11","Matthew 26:14-16","Luke 22:3-6","Mark 14:12-16","Matthew 26:17-19","Luke 22:7-13","John 13:1-17","Mark 14:17-26","Matthew 26:20-30","Luke 22:14-30","John 13:18-30"],["John 13:31-38","Mark 14:27-31","Matthew 26:31-35","Luke 22:31-38","John 14:1-15:17"],["John 15:18-17:26"],["John 18:1-2","Mark 14:32-42","Matthew 26:36-46","Luke 22:39-46","Mark 14:43-52","Matthew 26:47-56","Luke 22:47-53","John 18:3-24"],["Mark 14:53-65","Matthew 26:57-68","Mark 14:66-72","Matthew 26:69-75","Luke 22:54-65","John 18:25-27","Mark 15:1","Matthew 27:1-2","Luke 22:66-71","Matthew 27:3-10"],["Mark 15:2-5","Matthew 27:11-14","Luke 23:1-12","John 18:28-40","Mark 15:6-15","Matthew 27:15-26","Luke 23:13-25","John 19:1-16","Mark 15:16-20","Matthew 27:27-31"],["Mark 15:21-24","Matthew 27:32-34","Luke 23:26-31","John 19:17","Mark 15:25-32","Matthew 27:35-44","Luke 23:32-43","John 19:18-27","Mark 15:33-41","Matthew 27:45-56","Luke 23:44-49","John 19:28-37"],["Mark 15:42-47","Matthew 27:57-61","Luke 23:50-56","John 19:38-42","Matthew 27:62-66","Mark 16:1-8","Matthew 28:1-7","Luke 24:1-12","Mark 16:9-13","John 20:1-18","Matthew 28:8-15"],["Luke 24:13-43","Mark 16:12-13","John 20:19-23","Mark 16:14","John 20:24-21:25","Matthew 28:16-20","Mark 16:15-18","Luke 24:44-49"],["Mark 16:19-20","Luke 24:50-53","Acts 1:1-2:47"],["Acts 3:1-5:42"],["Acts 6:1-8:1"],["Acts 8:1-9:43"],["Acts 10:1-12:5"],["Acts 12:6-14:20"],["Acts 14:21-28","Galatians 1:1-3:23"],["Galatians 3:24-6:18","Acts 15:1-21"],["Acts 15:22-17:15"],["Acts 17:16-18:3","1Thessalonians 1:1-5:11"],["1Thessalonians 5:12-28","2Thessalonians 1:1-3:18","Acts 18:4-23"],["Acts 18:24-19:20","1Corinthians 1:1-3:23"],["1Corinthians 4:1-7:40"],["1Corinthians 8:1-11:1"],["1Corinthians 11:2-13:13"],["1Corinthians 14:1-15:58"],["1Corinthians 16:1-24","Acts 19:21-20:6","Romans 1:1-32"],["Romans 2:1-4:25"],["Romans 5:1-8:17"],["Romans 8:18-10:21"],["Romans 11:1-14:23"],["Romans 15:1-16:27","2Corinthians 1:1-2:4"],["2Corinthians 2:5-6:13"],["2Corinthians 6:14-10:18"],["2Corinthians 11:1-13:13","Acts 20:7-12"],["Acts 20:13-21:36"],["Acts 21:37-23:35"],["Acts 24:1-26:32"],["Acts 27:1-44"],["Acts 28:1-31","Ephesians 1:1-2:22"],["Ephesians 3:1-5:14"],["Ephesians 5:15-6:24","Colossians 1:1-23"],["Colossians 1:24-4:18"],["Philemon 1:1-25","Philippians 1:1-2:11"],["Philippians 2:12-4:23"],["James 1:1-3:18"],["James 4:1-5:20","1Timothy 1:1-2:15"],["1Timothy 3:1-6:10"],["1Timothy 6:11-21","Titus 1:1-3:15","2Timothy 1:1-18"],["2Timothy 2:1-4:18"],["2Timothy 4:19-22","Hebrews 1:1-4:13"],["Hebrews 4:14-7:28"],["Hebrews 8:1-10:39"],["Hebrews 11:1-12:29"],["Hebrews 13:1-25","1Peter 1:1-2:3"],["1Peter 2:4-5:11"],["1Peter 5:12-14","2Peter 1:1-3:18"],["1John 1:1-4:6"],["1John 4:7-5:21","2John 1:1-13","3John 1:1-15"],["Jude 1:1-25","Revelation 1:1-2:29"],["Revelation 3:1-6:17"],["Revelation 7:1-10:11"],["Revelation 11:1-14:20"],["Revelation 15:1-18:24"],["Revelation 19:1-22:21"]],"data":["Genesis 1:1-3:24","Genesis 4:1-5:32","1Chronicles 1:1-4","Genesis 6:1-22","Genesis 7:1-10:5","1Chronicles 1:5-7","Genesis 10:6-20","1Chronicles 1:8-16","Genesis 10:21-30","1Chronicles 1:17-23","Genesis 10:31-32","Genesis 11:1-26","1Chronicles 1:24-27","Genesis 11:27-31","Genesis 12:1-14:24","Genesis 15:1-17:27","Genesis 18:1-21:7","Genesis 21:8-23:20","Genesis 11:32","Genesis 24:1-67","Genesis 25:1-4","1Chronicles 1:32-33","Genesis 25:5-6","Genesis 25:12-18","1Chronicles 1:28-31","1Chronicles 1:34","Genesis 25:19-26","Genesis 25:7-11","Genesis 25:27-28:5","Genesis 28:6-30:24","Genesis 30:25-31:55","Genesis 32:1-35:27","Genesis 36:1-19","1Chronicles 1:35-37","Genesis 36:20-30","1Chronicles 1:38-42","Genesis 36:31-43","1Chronicles 1:43-2:2","Genesis 37:1-38:30","1Chronicles 2:3-6","1Chronicles 2:8","Genesis 39:1-23","Genesis 40:1-23","Genesis 35:28-29","Genesis 41:1-57","Genesis 42:1-45:15","Genesis 45:16-47:27","Genesis 47:28-50:26","Job 1:1-4:21","Job 5:1-7:21","Job 8:1-11:20","Job 12:1-14:22","Job 15:1-18:21","Job 19:1-21:34","Job 22:1-25:6","Job 26:1-29:25","Job 30:1-31:40","Job 32:1-34:37","Job 35:1-37:24","Job 38:1-40:5","Job 40:6-42:17","Exodus 1:1-2:25","1Chronicles 6:1-3","Exodus 3:1-4:17","Exodus 4:18-7:13","Exodus 7:14-9:35","Exodus 10:1-12:51","Exodus 13:1-15:27","Exodus 16:1-19:25","Exodus 20:1-22:15","Exodus 22:16-24:18","Exodus 25:1-28:43","Exodus 29:1-31:18","Exodus 32:1-34:35","Exodus 35:1-36:38","Exodus 37:1-39:31","Exodus 39:32-40:38","Numbers 9:15-23","Numbers 7:1-89","Numbers 8:1-9:14","Leviticus 1:1-3:17","Leviticus 4:1-6:30","Leviticus 7:1-8:36","Leviticus 9:1-11:47","Leviticus 12:1-14:32","Leviticus 14:33-16:34","Leviticus 17:1-19:37","Leviticus 20:1-22:33","Leviticus 23:1-25:23","Leviticus 25:24-26:46","Leviticus 27:1-34","Numbers 1:1-54","Numbers 2:1-3:51","Numbers 4:1-5:31","Numbers 6:1-27","Numbers 10:1-36","Numbers 11:1-13:33","Numbers 14:1-15:41","Numbers 16:1-18:32","Numbers 19:1-21:35","Numbers 22:1-24:25","Numbers 25:1-26:65","Numbers 27:1-29:40","Numbers 30:1-31:54","Numbers 32:1-33:56","Numbers 34:1-36:13","Deuteronomy 1:1-3:20","Deuteronomy 3:21-5:33","Deuteronomy 6:1-9:29","Deuteronomy 10:1-12:32","Deuteronomy 13:1-16:17","Deuteronomy 16:18-21:9","Deuteronomy 21:10-25:19","Deuteronomy 26:1-29:1","Deuteronomy 29:2-31:29","Deuteronomy 31:30-32:52","Psalm 90","Deuteronomy 33:1-34:12","Joshua 1:1-2:24","Joshua 3:1-6:27","Joshua 7:1","1Chronicles 2:7","Joshua 7:2-9:27","Joshua 10:1-12:6","Joshua 12:7-15:19","Joshua 15:20-17:18","Joshua 18:1-19:48","Joshua 19:49-21:45","1Chronicles 6:54-81","Joshua 22:1-24:33","Judges 1:1-3:30","Judges 3:31-6:40","Judges 7:1-9:21","Judges 9:22-11:28","Judges 11:29-15:20","Judges 16:1-18:31","Judges 19:1-21:25","Ruth 1:1-4:12","Ruth 4:13-22","1Chronicles 2:9-55","1Chronicles 4:1-23","1Samuel 1:1-8","1Samuel 1:9-4:11","1Samuel 4:12-8:22","1Samuel 9:1-12:25","1Chronicles 9:35-39","1Samuel 13:1-5","1Samuel 13:19-23","1Samuel 13:6-18","1Samuel 14:1-52","1Samuel 15:1-17:31","1Samuel 17:32-19:17","Psalm 59","1Samuel 19:18-24","1Samuel 20:1-21:15","Psalm 34","1Samuel 22:1-2","Psalm 57","Psalm 142","1Chronicles 12:8-18","1Samuel 22:3-23","Psalm 52","1Samuel 23:1-12","1Samuel 23:13-29","Psalm 54","1Samuel 24:1-25:44","1Samuel 26:1-27:7","1Chronicles 12:1-7","1Samuel 27:8-29:11","1Chronicles 12:19","Psalm 56","1Samuel 30:1-31","1Chronicles 12:20-22","1Samuel 31:1-13","1Chronicles 10:1-14","1Chronicles 9:40-44","2Samuel 4:4","2Samuel 1:1-27","2Samuel 2:1-3:5","1Chronicles 3:1-4","2Samuel 23:8-17","1Chronicles 11:10-19","2Samuel 23:18-39","1Chronicles 11:20-47","2Samuel 3:6-4:3","2Samuel 4:5-4:12","2Samuel 5:1-3","1Chronicles 11:1-3","1Chronicles 12:23-40","2Samuel 5:17-25","1Chronicles 14:8-17","2Samuel 5:6-10","1Chronicles 11:4-9","1Chronicles 3:4","2Samuel 5:13","2Samuel 5:4-5","2Samuel 5:11-12","1Chronicles 14:1-2","1Chronicles 13:1-5","2Samuel 6:1-11","1Chronicles 13:6-14","2Samuel 6:12","1Chronicles 15:1-28","2Samuel 6:12-16","1Chronicles 15:29","2Samuel 6:17-19","1Chronicles 16:1-43","2Samuel 6:19-23","2Samuel 7:1-17","1Chronicles 17:1-15","2Samuel 7:18-29","1Chronicles 17:16-27","2Samuel 8:1-14","1Chronicles 18:1-13","Psalm 60","2Samuel 8:15-18","1Chronicles 18:14-17","1Chronicles 6:16-30","1Chronicles 6:50-53","1Chronicles 6:31-48","2Samuel 9:1-10:19","1Chronicles 19:1-19","1Chronicles 20:1","2Samuel 11:1-12:14","Psalm 51","2Samuel 12:15-25","2Samuel 5:14-16","1Chronicles 14:3-7","1Chronicles 3:5-9","2Samuel 12:26-31","1Chronicles 20:2-3","2Samuel 13:1-14:33","2Samuel 15:1-17:14","2Samuel 17:15-29","Psalm 3","Psalm 63","2Samuel 18:1-19:30","2Samuel 19:31-20:26","Psalm 7","2Samuel 21:1-22","1Chronicles 20:4-8","2Samuel 22:1-51","Psalm 18","2Samuel 24:1-9","1Chronicles 21:1-6","2Samuel 24:10-17","1Chronicles 21:7-17","2Samuel 24:18-25","1Chronicles 21:18-22:19","1Chronicles 23:1-25:31","1Chronicles 26:1-28:21","1Chronicles 29:1-22","1Kings 1:1-53","1Kings 2:1-9","2Samuel 23:1-7","1Kings 2:10-12","1Chronicles 29:26-30","Psalm 4-6","Psalm 8-9","Psalm 11","Psalm 12-17","Psalm 19-21","Psalm 22-26","Psalm 27-32","Psalm 35-38","Psalm 39-41","Psalm 53","Psalm 55","Psalm 58","Psalm 61-62","Psalm 64-67","Psalm 68-70","Psalm 86","Psalm 101","Psalm 103","Psalm 108-110","Psalm 122","Psalm 124","Psalm 131","Psalm 133","Psalm 138-141","Psalm 143","Psalm 144-145","Psalm 88-89","Psalm 50","Psalm 73-74","Psalm 75-78","Psalm 79-82","Psalm 83","1Chronicles 29:23-25","2Chronicles 1:1","1Kings 2:13-3:4","2Chronicles 1:2-6","1Kings 3:5-15","2Chronicles 1:7-13","1Kings 3:16-28","1Kings 5:1-18","2Chronicles 2:1-18","1Kings 6:1-13","2Chronicles 3:1-14","1Kings 6:14-38","1Kings 7:1-51","2Chronicles 3:15-4:22","1Kings 8:1-11","2Chronicles 5:1-14","1Kings 8:12-21","2Chronicles 6:1-11","1Kings 8:22-53","2Chronicles 6:12-42","1Kings 8:54-66","2Chronicles 7:1-10","1Kings 9:1-9","2Chronicles 7:11-22","1Kings 9:10-14","2Chronicles 8:1-18","1Kings 9:15-10:13","2Chronicles 9:1-12","1Kings 10:14-29","2Chronicles 9:13-28","2Chronicles 1:14-17","1Kings 4:1-34","Psalm 72","Psalm 127","Proverbs 1:1-4:27","Proverbs 5:1-7:27","Proverbs 8:1-10:32","Proverbs 11:1-13:25","Proverbs 14:1-16:33","Proverbs 17:1-19:29","Proverbs 20:1-22:16","Proverbs 22:17-24:34","SongOfSongs 1:1-8:14","1Kings 11:1-43","2Chronicles 9:29-31","Ecclesiastes 1:1-11","Ecclesiastes 1:12-6:12","Ecclesiastes 7:1-11:6","Ecclesiastes 11:7-12:14","1Kings 12:1-20","2Chronicles 10:1-19","1Kings 12:21-24","2Chronicles 11:1-4","1Kings 12:25-33","2Chronicles 11:5-17","1Kings 13:1-14:18","1Kings 14:21-14:24","2Chronicles 12:13-14","2Chronicles 11:18-23","2Chronicles 12:1-12","1Kings 14:25-28","2Chronicles 12:13-16","1Kings 14:29-15:5","2Chronicles 13:1-22","1Kings 15:6-8","2Chronicles 14:1-8","1Kings 15:9-15","1Kings 14:19-20","1Kings 15:25-34","2Chronicles 14:9-15","1Kings 15:16-22","2Chronicles 16:1-10","1Kings 16:1-34","1Kings 15:23-24","2Chronicles 16:11-17:19","1Kings 17:1-7","1Kings 17:8-20:22","1Kings 20:23-22:9","2Chronicles 18:1-8","1Kings 22:10-28","2Chronicles 18:9-27","1Kings 22:29-35","2Chronicles 18:28-34","1Kings 22:36-40","1Kings 22:51-53","2Chronicles 19:1-20:30","2Kings 1:1-18","2Kings 3:1-27","1Kings 22:41-49","2Chronicles 20:31-37","1Kings 22:50","2Chronicles 21:1-4","2Kings 8:16-22","2Chronicles 21:5-7","2Kings 2:1-25","2Kings 4:1-44","2Kings 5:1-8:15","2Chronicles 21:8-20","2Kings 8:23-29","2Chronicles 22:1-7","2Kings 9:1-10:17","2Chronicles 22:8-9","2Kings 10:18-31","2Kings 11:1-3","2Chronicles 22:10-12","2Kings 11:4-12","2Chronicles 23:1-11","2Kings 11:13-16","2Chronicles 23:12-15","2Kings 11:17-21","2Chronicles 23:16-21","2Kings 12:1-16","2Chronicles 24:1-22","2Kings 10:32-36","2Kings 13:1-11","2Kings 12:17-21","2Chronicles 24:23-27","2Kings 13:14-25","2Kings 14:1-14","2Chronicles 25:1-24","2Kings 13:12-13","2Kings 14:15-16","2Kings 14:23-27","2Chronicles 25:25-28","2Kings 14:17-22","2Kings 15:1-5","2Chronicles 26:1-21","JONAH 1:1-4:11","Amos 1:1-6:14","Amos 7:1-9:15","2Kings 14:28-29","2Kings 15:8-29","2Kings 15:6-7","2Chronicles 26:22-23","Isaiah 6:1-13","2Kings 15:32-38","2Chronicles 27:1-9","Micah 1:1-16","2Kings 16:1-9","2Chronicles 28:1-15","Isaiah 7:1-25","Isaiah 8:1-11:16","Isaiah 12:1-6","Isaiah 17:1-14","2Chronicles 28:16-21","2Kings 16:10-18","2Chronicles 28:22-25","2Kings 18:1-8","2Chronicles 29:1-2","2Kings 15:30-31","2Kings 17:1-4","Hosea 1:1-2:13","Hosea 2:14-8:14","Hosea 9:1-14:9","Isaiah 28:1-29","2Kings 17:5","2Kings 18:9-12","2Kings 17:6-41","Isaiah 1:1-20","Isaiah 1:21-5:30","2Kings 16:19-20","2Chronicles 28:26-27","Isaiah 13:1-16:14","2Chronicles 29:3-31:21","Proverbs 25:1-29:27","Proverbs 30:1-31:31","Psalm 42","Psalm 43","Psalm 44","Psalm 45","Psalm 46","Psalm 47","Psalm 48","Psalm 49","Psalm 84","Psalm 85","Psalm 87","Psalm 1-2","Psalm 10","Psalm 33","Psalm 71","Psalm 91","Psalm 92","Psalm 93","Psalm 94","Psalm 95","Psalm 96","Psalm 97","Psalm 98","Psalm 99","Psalm 100","Psalm 102","Psalm 104","Psalm 105","Psalm 106","Psalm 107","Psalm 111","Psalm 112","Psalm 113","Psalm 114","Psalm 115","Psalm 116","Psalm 117","Psalm 118","Psalm 119","Psalm 120","Psalm 121","Psalm 123","Psalm 125","Psalm 126","Psalm 128","Psalm 129","Psalm 130","Psalm 132","Psalm 134","Psalm 135","Psalm 136","Psalm 146","Psalm 147","Psalm 148","Psalm 149","Psalm 150","Isaiah 18:1-23:18","Isaiah 24:1-27:13","Isaiah 29:1-24","Isaiah 30:1-33:24","Isaiah 34:1-35:10","Micah 2:1-5:15","Micah 6:1-7:20","2Chronicles 32:1-8","2Kings 18:13-18","Isaiah 36:1-3","2Kings 18:19-37","Isaiah 36:4-22","2Kings 19:1-19","Isaiah 37:1-20","2Chronicles 32:9-19","2Kings 19:20-37","Isaiah 37:21-38","2Chronicles 32:20-23","2Kings 20:1-11","Isaiah 38:1-8","2Chronicles 32:24-31","Isaiah 38:9-22","2Kings 20:12-19","Isaiah 39:1-8","Isaiah 40:1-44:5","Isaiah 44:6-48:11","Isaiah 48:12-52:12","Isaiah 52:13-57:21","Isaiah 58:1-63:14","Isaiah 63:15-66:24","2Kings 20:20-21","2Chronicles 32:32-33","2Kings 21:1-9","2Chronicles 33:1-9","2Kings 21:10-17","2Chronicles 33:10-19","2Kings 21:18","2Chronicles 33:20","2Kings 21:19-26","2Chronicles 33:21-25","2Kings 22:1-2","2Chronicles 34:1-7","Jeremiah 1:1-2:22","Jeremiah 2:23-5:19","Jeremiah 5:20-6:30","2Kings 22:3-20","2Chronicles 34:8-28","2Kings 23:1-20","2Chronicles 34:29-33","2Kings 23:21-28","2Chronicles 35:1-19","Nahum 1:1-3:19","Habakkuk 1:1-3:19","Zephaniah 1:1-2:7","Zephaniah 2:8-3:20","2Chronicles 35:20-27","2Kings 23:29-30","Jeremiah 47:1-48:47","2Chronicles 36:1-4","2Kings 23:31-37","2Chronicles 36:5","Jeremiah 22:1-23","Jeremiah 26:1-24","2Kings 24:1-4","Jeremiah 25:1-14","Jeremiah 25:15-38","Jeremiah 36:1-32","Jeremiah 45:1-46:28","Jeremiah 19:1-20:18","Daniel 1:1-21","Daniel 2:1-3:30","Jeremiah 7:1-8:3","Jeremiah 8:4-11:23","Jeremiah 12:1-15:21","Jeremiah 16:1-18:23","Jeremiah 35:1-19","Jeremiah 49:1-33","2Kings 24:5-7","2Chronicles 36:6-8","2Kings 24:8-9","2Chronicles 36:9","Jeremiah 22:24-23:32","Jeremiah 23:33-24:10","Jeremiah 29:1-31:14","Jeremiah 31:15-40","Jeremiah 49:34-51:14","Jeremiah 51:15-58","2Chronicles 36:10","2Kings 24:10-17","1Chronicles 3:10-16","2Chronicles 36:11-14","Jeremiah 52:1-3","2Kings 24:18-20","Jeremiah 37:1-10","Jeremiah 37:11-38:28","Ezekiel 1:1-3:15","Ezekiel 3:16-4:17","Jeremiah 27:1-28:17","Jeremiah 51:59-64","Ezekiel 5:1-9:11","Ezekiel 10:1-13:23","Ezekiel 14:1-16:63","Ezekiel 17:1-19:14","Ezekiel 20:1-22:16","Ezekiel 22:17-23:49","2Kings 24:20-25:2","Jeremiah 52:3-5","Jeremiah 39:1","Ezekiel 24:1-14","Ezekiel 24:15-25:17","Jeremiah 34:1-22","Jeremiah 21:1-14","Ezekiel 29:1-16","Ezekiel 30:20-31:18","Jeremiah 32:1-33:26","Ezekiel 26:1-14","Ezekiel 26:15-28:26","2Kings 25:3-7","Jeremiah 52:6-11","Jeremiah 39:2-10","Jeremiah 39:11-18","Jeremiah 40:1-6","2Kings 25:8-21","Jeremiah 52:12-27","2Chronicles 36:15-21","Lamentations 1:1-22","Lamentations 2:1-4:22","Lamentations 5:1-22","OBADIAH 1:1-21","2Kings 25:22-26","Jeremiah 40:7-41:18","Jeremiah 42:1-44:30","Ezekiel 33:21-33","Ezekiel 34:1-36:38","Ezekiel 37:1-39:29","Ezekiel 32:1-16","Ezekiel 32:17-33:20","Jeremiah 52:28-30","Psalm 137:1-9","1Chronicles 4:24-5:17","1Chronicles 5:18-26","1Chronicles 6:3","1Chronicles 6:49","1Chronicles 6:4-15","1Chronicles 7:1-8:28","1Chronicles 8:29-9:1","Daniel 4:1-37","Ezekiel 40:1-37","Ezekiel 40:38-43:27","Ezekiel 44:1-46:24","Ezekiel 47:1-48:35","Ezekiel 29:17-30:19","2Kings 25:27-30","Jeremiah 52:31-34","Daniel 7:1-8:27","Daniel 5:1-31","Daniel 6:1-28","Daniel 9:1-27","2Chronicles 36:22-23","Ezra 1:1-11","1Chronicles 3:17-19","Ezra 2:1-4:5","1Chronicles 3:19-24","Daniel 10:1-12:13","Ezra 4:24-5:1","Haggai 1:1-15","Haggai 2:1-9","Zechariah 1:1-6","Haggai 2:10-19","Ezra 5:2","Haggai 2:20-23","Zechariah 1:7-5:11","Zechariah 6:1-15","Ezra 5:3-6:14","Zechariah 7:1-8:23","Zechariah 9:1-14:21","Ezra 6:14-22","Ezra 4:6","Esther 1:1-4:17","Esther 5:1-10:3","Ezra 4:7-23","Ezra 7:1-8:36","Ezra 9:1-10:44","Nehemiah 1:1-2:20","Nehemiah 3:1-7:3","Nehemiah 7:4-8:12","Nehemiah 8:13-10:39","Nehemiah 11:1-12:26","1Chronicles 9:1-34","Nehemiah 12:27-13:6","Nehemiah 5:14-19","Nehemiah 13:7-31","Malachi 1:1-2:9","Malachi 2:10-4:6","JOEL 1:1-3:21","Mark 1:1","Luke 1:1-4","John 1:1-18","Matthew 1:1-17","Luke 3:23-38","Luke 1:5-38","Luke 1:39-80","Matthew 1:18-25","Luke 2:1-40","Matthew 2:1-23","Luke 2:41-52","Mark 1:2-8","Matthew 3:1-12","Luke 3:1-18","Mark 1:9-11","Matthew 3:13-17","Luke 3:21-22","Mark 1:12-13","Matthew 4:1-11","Luke 4:1-15","John 1:19-2:25","John 3:1-4:45","Luke 3:19-20","Mark 1:14-15","Matthew 4:12-17","Luke 3:23","John 4:46-54","Luke 4:16-30","Mark 1:16-20","Matthew 4:18-22","Mark 1:21-28","Luke 4:31-37","Mark 1:29-34","Matthew 8:14-17","Luke 4:38-41","Mark 1:35-39","Luke 4:42-44","Matthew 4:23-25","Luke 5:1-11","Mark 1:40-45","Matthew 8:1-4","Luke 5:12-16","Mark 2:1-12","Matthew 9:1-8","Luke 5:17-26","Mark 2:13-17","Matthew 9:9-13","Luke 5:27-32","Mark 2:18-22","Matthew 9:14-17","Luke 5:33-39","John 5:1-47","Mark 2:23-28","Matthew 12:1-8","Luke 6:1-5","Mark 3:1-6","Matthew 12:9-14","Luke 6:6-11","Matthew 12:15-21","Mark 3:7-19","Luke 6:12-16","Matthew 5:1-12","Luke 6:17-26","Matthew 5:13-48","Luke 6:27-36","Matthew 6:1-4","Matthew 6:5-7:6","Luke 6:37-42","Matthew 7:7-20","Luke 6:43-45","Matthew 7:21-29","Luke 6:46-49","Matthew 8:5-13","Luke 7:1-17","Matthew 11:1-19","Luke 7:18-35","Matthew 11:20-30","Luke 7:36-50","Luke 8:1-3","Mark 3:20-30","Matthew 12:22-45","Mark 3:31-35","Matthew 12:46-50","Luke 8:19-21","Mark 4:1-9","Matthew 13:1-9","Luke 8:4-8","Mark 4:10-20","Matthew 13:10-23","Luke 8:9-18","Mark 4:21-29","Matthew 13:24-30","Mark 4:30-34","Matthew 13:31-52","Mark 4:35-41","Matthew 8:23-27","Luke 8:22-25","Mark 5:1-20","Matthew 8:28-34","Luke 8:26-39","Mark 5:21-43","Matthew 9:18-26","Luke 8:40-56","Matthew 9:27-34","Mark 6:1-6","Matthew 13:53-58","Matthew 9:35-38","Mark 6:7-13","Matthew 10:1-42","Luke 9:1-6","Luke 9:7-9","Mark 6:14-29","Matthew 14:1-21","Mark 6:30-44","Luke 9:10-17","John 6:1-15","Mark 6:45-52","Matthew 14:22-33","John 6:16-21","Mark 6:53-56","Matthew 14:34-36","John 6:22-71","Mark 7:1-23","Matthew 15:1-20","Mark 7:24-30","Matthew 15:21-28","Mark 7:31-37","Matthew 15:29-31","Mark 8:1-10","Matthew 15:32-16:4","Mark 8:11-21","Matthew 16:5-12","Mark 8:22-30","Matthew 16:13-20","Luke 9:18-20","Mark 8:31-9:1","Matthew 16:21-28","Luke 9:21-27","Mark 9:2-13","Matthew 17:1-13","Luke 9:28-36","Mark 9:14-29","Matthew 17:14-21","Luke 9:37-43","Mark 9:30-32","Matthew 17:22-23","Luke 9:43-45","Matthew 17:24-27","Mark 9:33-37","Matthew 18:1-6","Luke 9:46-48","Mark 9:38-41","Luke 9:49-50","Mark 9:42-50","Matthew 18:7-35","John 7:1-9","Luke 9:51-56","Matthew 8:18-22","Luke 9:57-62","John 7:10-8:20","John 8:21-59","Luke 10:1-11:13","Luke 11:14-12:34","Luke 12:35-13:21","John 9:1-41","John 10:1-42","Luke 13:22-14:24","Luke 14:25-17:10","John 11:1-37","John 11:38-57","Luke 17:11-18:8","Luke 18:9-14","Mark 10:1-12","Matthew 19:1-12","Mark 10:13-16","Matthew 19:13-15","Luke 18:15-17","Mark 10:17-31","Matthew 19:16-30","Luke 18:18-30","Matthew 20:1-16","Mark 10:32-34","Matthew 20:17-19","Luke 18:31-34","Mark 10:35-45","Matthew 20:20-34","Mark 10:46-52","Luke 18:35-19:27","Mark 14:3-9","Matthew 26:6-13","John 12:1-11","Mark 11:1-11","Matthew 21:1-11","Luke 19:28-40","John 12:12-19","Luke 19:41-44","John 12:20-36","John 12:37-50","Mark 11:12-14","Matthew 21:18-22","Mark 11:15-19","Matthew 21:12-17","Luke 19:45-48","Mark 11:20-33","Matthew 21:23-27","Luke 20:1-8","Matthew 21:28-32","Mark 12:1-12","Matthew 21:33-46","Luke 20:9-19","Matthew 22:1-14","Mark 12:13-17","Matthew 22:15-22","Luke 20:20-26","Mark 12:18-27","Matthew 22:23-33","Luke 20:27-40","Mark 12:28-34","Matthew 22:34-40","Mark 12:35-37","Matthew 22:41-46","Luke 20:41-44","Mark 12:38-40","Matthew 23:1-12","Luke 20:45-47","Matthew 23:13-39","Mark 12:41-44","Luke 21:1-4","Mark 13:1-23","Matthew 24:1-25","Luke 21:5-24","Mark 13:24-31","Matthew 24:26-35","Luke 21:25-33","Mark 13:32-37","Matthew 24:36-51","Luke 21:34-38","Matthew 25:1-46","Mark 14:1-2","Matthew 26:1-5","Luke 22:1-2","Mark 14:10-11","Matthew 26:14-16","Luke 22:3-6","Mark 14:12-16","Matthew 26:17-19","Luke 22:7-13","John 13:1-17","Mark 14:17-26","Matthew 26:20-30","Luke 22:14-30","John 13:18-30","John 13:31-38","Mark 14:27-31","Matthew 26:31-35","Luke 22:31-38","John 14:1-15:17","John 15:18-17:26","John 18:1-2","Mark 14:32-42","Matthew 26:36-46","Luke 22:39-46","Mark 14:43-52","Matthew 26:47-56","Luke 22:47-53","John 18:3-24","Mark 14:53-65","Matthew 26:57-68","Mark 14:66-72","Matthew 26:69-75","Luke 22:54-65","John 18:25-27","Mark 15:1","Matthew 27:1-2","Luke 22:66-71","Matthew 27:3-10","Mark 15:2-5","Matthew 27:11-14","Luke 23:1-12","John 18:28-40","Mark 15:6-15","Matthew 27:15-26","Luke 23:13-25","John 19:1-16","Mark 15:16-20","Matthew 27:27-31","Mark 15:21-24","Matthew 27:32-34","Luke 23:26-31","John 19:17","Mark 15:25-32","Matthew 27:35-44","Luke 23:32-43","John 19:18-27","Mark 15:33-41","Matthew 27:45-56","Luke 23:44-49","John 19:28-37","Mark 15:42-47","Matthew 27:57-61","Luke 23:50-56","John 19:38-42","Matthew 27:62-66","Mark 16:1-8","Matthew 28:1-7","Luke 24:1-12","Mark 16:9-13","John 20:1-18","Matthew 28:8-15","Luke 24:13-43","Mark 16:12-13","John 20:19-23","Mark 16:14","John 20:24-21:25","Matthew 28:16-20","Mark 16:15-18","Luke 24:44-49","Mark 16:19-20","Luke 24:50-53","Acts 1:1-2:47","Acts 3:1-5:42","Acts 6:1-8:1","Acts 8:1-9:43","Acts 10:1-12:5","Acts 12:6-14:20","Acts 14:21-28","Galatians 1:1-3:23","Galatians 3:24-6:18","Acts 15:1-21","Acts 15:22-17:15","Acts 17:16-18:3","1Thessalonians 1:1-5:11","1Thessalonians 5:12-28","2Thessalonians 1:1-3:18","Acts 18:4-23","Acts 18:24-19:20","1Corinthians 1:1-3:23","1Corinthians 4:1-7:40","1Corinthians 8:1-11:1","1Corinthians 11:2-13:13","1Corinthians 14:1-15:58","1Corinthians 16:1-24","Acts 19:21-20:6","Romans 1:1-32","Romans 2:1-4:25","Romans 5:1-8:17","Romans 8:18-10:21","Romans 11:1-14:23","Romans 15:1-16:27","2Corinthians 1:1-2:4","2Corinthians 2:5-6:13","2Corinthians 6:14-10:18","2Corinthians 11:1-13:13","Acts 20:7-12","Acts 20:13-21:36","Acts 21:37-23:35","Acts 24:1-26:32","Acts 27:1-44","Acts 28:1-31","Ephesians 1:1-2:22","Ephesians 3:1-5:14","Ephesians 5:15-6:24","Colossians 1:1-23","Colossians 1:24-4:18","Philemon 1:1-25","Philippians 1:1-2:11","Philippians 2:12-4:23","James 1:1-3:18","James 4:1-5:20","1Timothy 1:1-2:15","1Timothy 3:1-6:10","1Timothy 6:11-21","Titus 1:1-3:15","2Timothy 1:1-18","2Timothy 2:1-4:18","2Timothy 4:19-22","Hebrews 1:1-4:13","Hebrews 4:14-7:28","Hebrews 8:1-10:39","Hebrews 11:1-12:29","Hebrews 13:1-25","1Peter 1:1-2:3","1Peter 2:4-5:11","1Peter 5:12-14","2Peter 1:1-3:18","1John 1:1-4:6","1John 4:7-5:21","2John 1:1-13","3John 1:1-15","Jude 1:1-25","Revelation 1:1-2:29","Revelation 3:1-6:17","Revelation 7:1-10:11","Revelation 11:1-14:20","Revelation 15:1-18:24","Revelation 19:1-22:21"],"id":"oneyearchronological","abbv":"oyc","name":"One Year Chronological","info":"One Year Chronological<br \/><a target='_new' href='http:\/\/www.oneyearbibleonline.com'>www.oneyearbibleonline.com<\/a>"};

var esv = {"data2":[
  ["Genesis 1:1-2:25","Matthew 1:1-2:12","Psalm 1:1-6","Proverbs 1:1-6"],["Genesis 3:1-4:26","Matthew 2:13-3:6","Psalm 2:1-12","Proverbs 1:7-9"],["Genesis 5:1-7:24","Matthew 3:7-4:11","Psalm 3:1-8","Proverbs 1:10-19"],["Genesis 8:1-10:32","Matthew 4:12-25","Psalm 4:1-8","Proverbs 1:20-23"],["Genesis 11:1-13:4","Matthew 5:1-26","Psalm 5:1-12","Proverbs 1:24-28"],["Genesis 13:5-15:21","Matthew 5:27-48","Psalm 6:1-10","Proverbs 1:29-33"],["Genesis 16:1-18:19","Matthew 6:1-24","Psalm 7:1-17","Proverbs 2:1-5"],["Genesis 18:20-19:38","Matthew 6:25-7:14","Psalm 8:1-9","Proverbs 2:6-15"],["Genesis 20:1-22:24","Matthew 7:15-29","Psalm 9:1-12","Proverbs 2:16-22"],["Genesis 23:1-24:51","Matthew 8:1-17","Psalm 9:13-20","Proverbs 3:1-6"],["Genesis 24:52-26:16","Matthew 8:18-34","Psalm 10:1-15","Proverbs 3:7-8"],["Genesis 26:17-27:46","Matthew 9:1-17","Psalm 10:16-18","Proverbs 3:9-10"],["Genesis 28:1-29:35","Matthew 9:18-38","Psalm 11:1-7","Proverbs 3:11-12"],["Genesis 30:1-31:16","Matthew 10:1-25","Psalm 12:1-8","Proverbs 3:13-15"],["Genesis 31:17-32:12","Matthew 10:26-11:6","Psalm 13:1-6","Proverbs 3:16-18"],["Genesis 32:13-34:31","Matthew 11:7-30","Psalm 14:1-7","Proverbs 3:19-20"],["Genesis 35:1-36:43","Matthew 12:1-21","Psalm 15:1-5","Proverbs 3:21-26"],["Genesis 37:1-38:30","Matthew 12:22-45","Psalm 16:1-11","Proverbs 3:27-32"],["Genesis 39:1-41:16","Matthew 12:46-13:23","Psalm 17:1-15","Proverbs 3:33-35"],["Genesis 41:17-42:17","Matthew 13:24-46","Psalm 18:1-15","Proverbs 4:1-6"],["Genesis 42:18-43:34","Matthew 13:47-14:12","Psalm 18:16-36","Proverbs 4:7-10"],["Genesis 44:1-45:28","Matthew 14:13-36","Psalm 18:37-50","Proverbs 4:11-13"],["Genesis 46:1-47:31","Matthew 15:1-28","Psalm 19:1-14","Proverbs 4:14-19"],["Genesis 48:1-49:33","Matthew 15:29-16:12","Psalm 20:1-9","Proverbs 4:20-27"],["Genesis 50:1-26","Exodus 1:1-2:10","Matthew 16:13-17:9","Psalm 21:1-13","Proverbs 5:1-6"],["Exodus 2:11-3:22","Matthew 17:10-27","Psalm 22:1-18","Proverbs 5:7-14"],["Exodus 4:1-5:21","Matthew 18:1-22","Psalm 22:19-31","Proverbs 5:15-21"],["Exodus 5:22-7:24","Matthew 18:23-19:12","Psalm 23:1-6","Proverbs 5:22-23"],["Exodus 7:25-9:35","Matthew 19:13-30","Psalm 24:1-10","Proverbs 6:1-5"],["Exodus 10:1-12:13","Matthew 20:1-28","Psalm 25:1-15","Proverbs 6:6-11"],["Exodus 12:14-13:16","Matthew 20:29-21:22","Psalm 25:16-22","Proverbs 6:12-15"],["Exodus 13:17-15:18","Matthew 21:23-46","Psalm 26:1-12","Proverbs 6:16-19"],["Exodus 15:19-17:7","Matthew 22:1-33","Psalm 27:1-6","Proverbs 6:20-26"],["Exodus 17:8-19:15","Matthew 22:34-23:12","Psalm 27:7-14","Proverbs 6:27-35"],["Exodus 19:16-21:21","Matthew 23:13-39","Psalm 28:1-9","Proverbs 7:1-5"],["Exodus 21:22-23:13","Matthew 24:1-28","Psalm 29:1-11","Proverbs 7:6-23"],["Exodus 23:14-25:40","Matthew 24:29-51","Psalm 30:1-12","Proverbs 7:24-27"],["Exodus 26:1-27:21","Matthew 25:1-30","Psalm 31:1-8","Proverbs 8:1-11"],["Exodus 28:1-43","Matthew 25:31-26:13","Psalm 31:9-18","Proverbs 8:12-13"],["Exodus 29:1-30:10","Matthew 26:14-46","Psalm 31:19-24","Proverbs 8:14-26"],["Exodus 30:11-31:18","Matthew 26:47-68","Psalm 32:1-11","Proverbs 8:27-32"],["Exodus 32:1-33:23","Matthew 26:69-27:14","Psalm 33:1-11","Proverbs 8:33-36"],["Exodus 34:1-35:9","Matthew 27:15-31","Psalm 33:12-22","Proverbs 9:1-6"],["Exodus 35:10-36:38","Matthew 27:32-66","Psalm 34:1-10","Proverbs 9:7-8"],["Exodus 37:1-38:31","Matthew 28:1-20","Psalm 34:11-22","Proverbs 9:9-10"],["Exodus 39:1-40:38","Mark 1:1-28","Psalm 35:1-16","Proverbs 9:11-12"],["Leviticus 1:1-3:17","Mark 1:29-2:12","Psalm 35:17-28","Proverbs 9:13-18"],["Leviticus 4:1-5:19","Mark 2:13-3:6","Psalm 36:1-12","Proverbs 10:1-2"],["Leviticus 6:1-7:27","Mark 3:7-30","Psalm 37:1-11","Proverbs 10:3-4"],["Leviticus 7:28-9:6","Mark 3:31-4:25","Psalm 37:12-29","Proverbs 10:5"],["Leviticus 9:7-10:20","Mark 4:26-5:20","Psalm 37:30-40","Proverbs 10:6-7"],["Leviticus 11:1-12:8","Mark 5:21-43","Psalm 38:1-22","Proverbs 10:8-9"],["Leviticus 13:1-59","Mark 6:1-29","Psalm 39:1-13","Proverbs 10:10"],["Leviticus 14:1-57","Mark 6:30-56","Psalm 40:1-10","Proverbs 10:11-12"],["Leviticus 15:1-16:28","Mark 7:1-23","Psalm 40:11-17","Proverbs 10:13-14"],["Leviticus 16:29-18:30","Mark 7:24-8:10","Psalm 41:1-13","Proverbs 10:15-16"],["Leviticus 19:1-20:21","Mark 8:11-38","Psalm 42:1-11","Proverbs 10:17"],["Leviticus 20:22-22:16","Mark 9:1-29","Psalm 43:1-5","Proverbs 10:18"],["Leviticus 22:17-23:44","Mark 9:30-10:12","Psalm 44:1-8","Proverbs 10:19"],["Leviticus 24:1-25:46","Mark 10:13-31","Psalm 44:9-26","Proverbs 10:20-21"],["Leviticus 25:47-27:13","Mark 10:32-52","Psalm 45:1-17","Proverbs 10:22"],["Leviticus 27:14-34","Numbers 1:1-54","Mark 11:1-25","Psalm 46:1-11","Proverbs 10:23"],["Numbers 2:1-3:51","Mark 11:27-12:17","Psalm 47:1-9","Proverbs 10:24-25"],["Numbers 4:1-5:31","Mark 12:18-37","Psalm 48:1-14","Proverbs 10:26"],["Numbers 6:1-7:89","Mark 12:38-13:13","Psalm 49:1-20","Proverbs 10:27-28"],["Numbers 8:1-9:23","Mark 13:14-37","Psalm 50:1-23","Proverbs 10:29-30"],["Numbers 10:1-11:23","Mark 14:1-21","Psalm 51:1-19","Proverbs 10:31-32"],["Numbers 11:24-13:33","Mark 14:22-52","Psalm 52:1-9","Proverbs 11:1-3"],["Numbers 14:1-15:16","Mark 14:53-72","Psalm 53:1-6","Proverbs 11:4"],["Numbers 15:17-16:40","Mark 15:1-47","Psalm 54:1-7","Proverbs 11:5-6"],["Numbers 16:41-18:32","Mark 16:1-20","Psalm 55:1-23","Proverbs 11:7"],["Numbers 19:1-20:29","Luke 1:1-25","Psalm 56:1-13","Proverbs 11:8"],["Numbers 21:1-22:20","Luke 1:26-56","Psalm 57:1-11","Proverbs 11:9-11"],["Numbers 22:21-23:30","Luke 1:57-80","Psalm 58:1-11","Proverbs 11:12-13"],["Numbers 24:1-25:18","Luke 2:1-35","Psalm 59:1-17","Proverbs 11:14"],["Numbers 26:1-51","Luke 2:36-52","Psalm 60:1-12","Proverbs 11:15"],["Numbers 26:52-28:15","Luke 3:1-22","Psalm 61:1-8","Proverbs 11:16-17"],["Numbers 28:16-29:40","Luke 3:23-38","Psalm 62:1-12","Proverbs 11:18-19"],["Numbers 30:1-31:54","Luke 4:1-30","Psalm 63:1-11","Proverbs 11:20-21"],["Numbers 32:1-33:39","Luke 4:31-5:11","Psalm 64:1-10","Proverbs 11:22"],["Numbers 33:40-35:34","Luke 5:12-28","Psalm 65:1-13","Proverbs 11:23"],["Numbers 36:1-13","Deuteronomy 1:1-46","Luke 5:29-6:11","Psalm 66:1-20","Proverbs 11:24-26"],["Deuteronomy 2:1-3:29","Luke 6:12-38","Psalm 67:1-7","Proverbs 11:27"],["Deuteronomy 4:1-49","Luke 6:39-7:10","Psalm 68:1-18","Proverbs 11:28"],["Deuteronomy 5:1-6:25","Luke 7:11-35","Psalm 68:19-35","Proverbs 11:29-31"],["Deuteronomy 7:1-8:20","Luke 7:36-8:3","Psalm 69:1-18","Proverbs 12:1"],["Deuteronomy 9:1-10:22","Luke 8:4-21","Psalm 69:19-36","Proverbs 12:2-3"],["Deuteronomy 11:1-12:32","Luke 8:22-39","Psalm 70:1-5","Proverbs 12:4"],["Deuteronomy 13:1-15:23","Luke 8:40-9:6","Psalm 71:1-24","Proverbs 12:5-7"],["Deuteronomy 16:1-17:20","Luke 9:7-27","Psalm 72:1-20","Proverbs 12:8-9"],["Deuteronomy 18:1-20:20","Luke 9:28-50","Psalm 73:1-28","Proverbs 12:10"],["Deuteronomy 21:1-22:30","Luke 9:51-10:12","Psalm 74:1-23","Proverbs 12:11"],["Deuteronomy 23:1-25:19","Luke 10:13-37","Psalm 75:1-10","Proverbs 12:12-14"],["Deuteronomy 26:1-27:26","Luke 10:38-11:13","Psalm 76:1-12","Proverbs 12:15-17"],["Deuteronomy 28:1-68","Luke 11:14-36","Psalm 77:1-20","Proverbs 12:18"],["Deuteronomy 29:1-30:20","Luke 11:37-12:7","Psalm 78:1-31","Proverbs 12:19-20"],["Deuteronomy 31:1-32:27","Luke 12:8-34","Psalm 78:32-55","Proverbs 12:21-23"],["Deuteronomy 32:28-52","Luke 12:35-59","Psalm 78:56-64","Proverbs 12:24"],["Deuteronomy 33:1-29","Luke 13:1-21","Psalm 78:65-72","Proverbs 12:25"],["Deuteronomy 34:1-12","Joshua 1:1-2:24","Luke 13:22-14:6","Psalm 79:1-13","Proverbs 12:26"],["Joshua 3:1-4:24","Luke 14:7-35","Psalm 80:1-19","Proverbs 12:27-28"],["Joshua 5:1-7:15","Luke 15:1-32","Psalm 81:1-16","Proverbs 13:1"],["Joshua 7:16-9:2","Luke 16:1-18","Psalm 82:1-8","Proverbs 13:2-3"],["Joshua 9:3-10:43","Luke 16:19-17:10","Psalm 83:1-18","Proverbs 13:4"],["Joshua 11:1-12:24","Luke 17:11-37","Psalm 84:1-12","Proverbs 13:5-6"],["Joshua 13:1-14:15","Luke 18:1-17","Psalm 85:1-13","Proverbs 13:7-8"],["Joshua 15:1-63","Luke 18:18-43","Psalm 86:1-17","Proverbs 13:9-10"],["Joshua 16:1-18:28","Luke 19:1-27","Psalm 87:1-7","Proverbs 13:11"],["Joshua 19:1-20:9","Luke 19:28-48","Psalm 88:1-18","Proverbs 13:12-14"],["Joshua 21:1-22:20","Luke 20:1-26","Psalm 89:1-13","Proverbs 13:15-16"],["Joshua 22:21-23:16","Luke 20:27-47","Psalm 89:14-37","Proverbs 13:17-19"],["Joshua 24:1-33","Luke 21:1-28","Psalm 89:38-52","Proverbs 13:20-23"],["Judges 1:1-2:9","Luke 21:29-22:13","Psalm 90:1-91:16","Proverbs 13:24-25"],["Judges 2:10-3:31","Luke 22:14-34","Psalm 92:1-93:5","Proverbs 14:1-2"],["Judges 4:1-5:31","Luke 22:35-53","Psalm 94:1-23","Proverbs 14:3-4"],["Judges 6:1-40","Luke 22:54-23:12","Psalm 95:1-96:13","Proverbs 14:5-6"],["Judges 7:1-8:17","Luke 23:13-43","Psalm 97:1-98:9","Proverbs 14:7-8"],["Judges 8:18-9:21","Luke 23:44-24:12","Psalm 99:1-9","Proverbs 14:9-10"],["Judges 9:22-10:18","Luke 24:13-53","Psalm 100:1-5","Proverbs 14:11-12"],["Judges 11:1-12:15","John 1:1-28","Psalm 101:1-8","Proverbs 14:13-14"],["Judges 13:1-14:20","John 1:29-51","Psalm 102:1-28","Proverbs 14:15-16"],["Judges 15:1-16:31","John 2:1-25","Psalm 103:1-22","Proverbs 14:17-19"],["Judges 17:1-18:31","John 3:1-21","Psalm 104:1-23","Proverbs 14:20-21"],["Judges 19:1-20:48","John 3:22-4:3","Psalm 104:24-35","Proverbs 14:22-24"],["Judges 21:1-25","Ruth 1:1-22","John 4:4-42","Psalm 105:1-15","Proverbs 14:25"],["Ruth 2:1-4:22","John 4:43-54","Psalm 105:16-36","Proverbs 14:26-27"],["1Samuel 1:1-2:21","John 5:1-23","Psalm 105:37-45","Proverbs 14:28-29"],["1Samuel 2:22-4:22","John 5:24-47","Psalm 106:1-12","Proverbs 14:30-31"],["1Samuel 5:1-7:17","John 6:1-21","Psalm 106:13-31","Proverbs 14:32-33"],["1Samuel 8:1-9:27","John 6:22-42","Psalm 106:32-48","Proverbs 14:34-35"],["1Samuel 10:1-11:15","John 6:43-71","Psalm 107:1-43","Proverbs 15:1-3"],["1Samuel 12:1-13:22","John 7:1-29","Psalm 108:1-13","Proverbs 15:4"],["1Samuel 13:23-14:52","John 7:30-52","Psalm 109:1-31","Proverbs 15:5-7"],["1Samuel 15:1-16:23","John 7:53-8:20","Psalm 110:1-7","Proverbs 15:8-10"],["1Samuel 17:1-18:4","John 8:21-30","Psalm 111:1-10","Proverbs 15:11"],["1Samuel 18:5-19:24","John 8:31-59","Psalm 112:1-10","Proverbs 15:12-14"],["1Samuel 20:1-21:15","John 9:1-41","Psalm 113:1-114:8","Proverbs 15:15-17"],["1Samuel 22:1-23:29","John 10:1-21","Psalm 115:1-18","Proverbs 15:18-19"],["1Samuel 24:1-25:44","John 10:22-42","Psalm 116:1-19","Proverbs 15:20-21"],["1Samuel 26:1-28:25","John 11:1-53","Psalm 117:1-2","Proverbs 15:22-23"],["1Samuel 29:1-31:13","John 11:54-12:19","Psalm 118:1-18","Proverbs 15:24-26"],["2Samuel 1:1-2:11","John 12:20-50","Psalm 118:19-29","Proverbs 15:27-28"],["2Samuel 2:12-3:39","John 13:1-30","Psalm 119:1-16","Proverbs 15:29-30"],["2Samuel 4:1-6:23","John 13:31-14:14","Psalm 119:17-32","Proverbs 15:32"],["2Samuel 7:1-8:18","John 14:15-31","Psalm 119:33-48","Proverbs 15:33"],["2Samuel 9:1-11:27","John 15:1-27","Psalm 119:49-64","Proverbs 16:1-3"],["2Samuel 12:1-31","John 16:1-33","Psalm 119:65-80","Proverbs 16:4-5"],["2Samuel 13:1-39","John 17:1-26","Psalm 119:81-96","Proverbs 16:6-7"],["2Samuel 14:1-15:22","John 18:1-24","Psalm 119:97-112","Proverbs 16:8-9"],["2Samuel 15:23-16:23","John 18:25-19:22","Psalm 119:113-128","Proverbs 16:10-11"],["2Samuel 17:1-29","John 19:23-42","Psalm 119:129-152","Proverbs 16:12-13"],["2Samuel 18:1-19:10","John 20:1-31","Psalm 119:153-176","Proverbs 16:14-15"],["2Samuel 19:11-20:13","John 21:1-25","Psalm 120:1-7","Proverbs 16:16-17"],["2Samuel 20:14-22:20","Acts 1:1-26","Psalm 121:1-8","Proverbs 16:18"],["2Samuel 22:21-23:23","Acts 2:1-47","Psalm 122:1-9","Proverbs 16:19-20"],["2Samuel 23:24-24:25","Acts 3:1-26","Psalm 123:1-4","Proverbs 16:21-23"],["1Kings 1:1-53","Acts 4:1-37","Psalm 124:1-8","Proverbs 16:24"],["1Kings 2:1-3:3","Acts 5:1-42","Psalm 125:1-5","Proverbs 16:25"],["1Kings 3:4-4:34","Acts 6:1-15","Psalm 126:1-6","Proverbs 16:26-27"],["1Kings 5:1-6:38","Acts 7:1-29","Psalm 127:1-5","Proverbs 16:28-30"],["1Kings 7:1-51","Acts 7:30-50","Psalm 128:1-6","Proverbs 16:31-33"],["1Kings 8:1-66","Acts 7:51-8:13","Psalm 129:1-8","Proverbs 17:1"],["1Kings 9:1-10:29","Acts 8:14-40","Psalm 130:1-8","Proverbs 17:2-3"],["1Kings 11:1-12:19","Acts 9:1-25","Psalm 131:1-3","Proverbs 17:4-5"],["1Kings 12:20-13:34","Acts 9:26-43","Psalm 132:1-18","Proverbs 17:6"],["1Kings 14:1-15:24","Acts 10:1-23","Psalm 133:1-3","Proverbs 17:7-8"],["1Kings 15:25-17:24","Acts 10:23-48","Psalm 134:1-3","Proverbs 17:9-11"],["1Kings 18:1-46","Acts 11:1-30","Psalm 135:1-21","Proverbs 17:12-13"],["1Kings 19:1-21","Acts 12:1-23","Psalm 136:1-26","Proverbs 17:14-15"],["1Kings 20:1-21:29","Acts 12:24-13:15","Psalm 137:1-9","Proverbs 17:16"],["1Kings 22:1-53","Acts 13:16-41","Psalm 138:1-8","Proverbs 17:17-18"],["2Kings 1:1-2:25","Acts 13:42-14:7","Psalm 139:1-24","Proverbs 17:19-21"],["2Kings 3:1-4:17","Acts 14:8-28","Psalm 140:1-13","Proverbs 17:22"],["2Kings 4:18-5:27","Acts 15:1-35","Psalm 141:1-10","Proverbs 17:23"],["2Kings 6:1-7:20","Acts 15:36-16:15","Psalm 142:1-7","Proverbs 17:24-25"],["2Kings 8:1-9:13","Acts 16:16-40","Psalm 143:1-12","Proverbs 17:26"],["2Kings 9:14-10:31","Acts 17:1-34","Psalm 144:1-15","Proverbs 17:27-28"],["2Kings 10:32-12:21","Acts 18:1-22","Psalm 145:1-21","Proverbs 18:1"],["2Kings 13:1-14:29","Acts 18:23-19:12","Psalm 146:1-10","Proverbs 18:2-3"],["2Kings 15:1-16:20","Acts 19:13-41","Psalm 147:1-20","Proverbs 18:4-5"],["2Kings 17:1-18:12","Acts 20:1-38","Psalm 148:1-14","Proverbs 18:6-7"],["2Kings 18:13-19:37","Acts 21:1-16","Psalm 149:1-9","Proverbs 18:8"],["2Kings 20:1-22:2","Acts 21:17-36","Psalm 150:1-6","Proverbs 18:9-10"],["2Kings 22:3-23:30","Acts 21:37-22:16","Psalm 1:1-6","Proverbs 18:11-12"],["2Kings 23:31-25:30","Acts 22:17-23:10","Psalm 2:1-12","Proverbs 18:13"],["1Chronicles 1:1-2:17","Acts 23:11-35","Psalm 3:1-8","Proverbs 18:14-15"],["1Chronicles 2:18-4:4","Acts 24:1-27","Psalm 4:1-8","Proverbs 18:16-18"],["1Chronicles 4:5-5:17","Acts 25:1-27","Psalm 5:1-12","Proverbs 18:19"],["1Chronicles 5:18-6:81","Acts 26:1-32","Psalm 6:1-10","Proverbs 18:20-21"],["1Chronicles 7:1-8:40","Acts 27:1-20","Psalm 7:1-17","Proverbs 18:22"],["1Chronicles 9:1-10:14","Acts 27:21-44","Psalm 8:1-9","Proverbs 18:23-24"],["1Chronicles 11:1-12:18","Acts 28:1-31","Psalm 9:1-12","Proverbs 19:1-3"],["1Chronicles 12:19-14:17","Romans 1:1-17","Psalm 9:13-20","Proverbs 19:4-5"],["1Chronicles 15:1-16:36","Romans 1:18-32","Psalm 10:1-15","Proverbs 19:6-7"],["1Chronicles 16:37-18:17","Romans 2:1-24","Psalm 10:16-18","Proverbs 19:8-9"],["1Chronicles 19:1-21:30","Romans 2:25-3:8","Psalm 11:1-7","Proverbs 19:10-12"],["1Chronicles 22:1-23:32","Romans 3:9-31","Psalm 12:1-8","Proverbs 19:13-14"],["1Chronicles 24:1-26:11","Romans 4:1-12","Psalm 13:1-6","Proverbs 19:15-16"],["1Chronicles 26:12-27:34","Romans 4:13-5:5","Psalm 14:1-7","Proverbs 19:17"],["1Chronicles 28:1-29:30","Romans 5:6-21","Psalm 15:1-5","Proverbs 19:18-19"],["2Chronicles 1:1-3:17","Romans 6:1-23","Psalm 16:1-11","Proverbs 19:20-21"],["2Chronicles 4:1-6:11","Romans 7:1-13","Psalm 17:1-15","Proverbs 19:22-23"],["2Chronicles 6:12-8:10","Romans 7:14-8:8","Psalm 18:1-15","Proverbs 19:24-25"],["2Chronicles 8:11-10:19","Romans 8:9-21","Psalm 18:16-36","Proverbs 19:26"],["2Chronicles 11:1-13:22","Romans 8:22-39","Psalm 18:37-50","Proverbs 19:27-29"],["2Chronicles 14:1-16:14","Romans 9:1-21","Psalm 19:1-14","Proverbs 20:1"],["2Chronicles 17:1-18:34","Romans 9:22-10:13","Psalm 20:1-9","Proverbs 20:2-3"],["2Chronicles 19:1-20:37","Romans 10:14-11:12","Psalm 21:1-13","Proverbs 20:4-6"],["2Chronicles 21:1-23:21","Romans 11:13-36","Psalm 22:1-18","Proverbs 20:7"],["2Chronicles 24:1-25:28","Romans 12:1-21","Psalm 22:19-31","Proverbs 20:8-10"],["2Chronicles 26:1-28:27","Romans 13:1-14","Psalm 23:1-6","Proverbs 20:11"],["2Chronicles 29:1-36","Romans 14:1-23","Psalm 24:1-10","Proverbs 20:12"],["2Chronicles 30:1-31:21","Romans 15:1-22","Psalm 25:1-15","Proverbs 20:13-15"],["2Chronicles 32:1-33:13","Romans 15:23-16:7","Psalm 25:16-22","Proverbs 20:16-18"],["2Chronicles 33:14-34:33","Romans 16:8-27","Psalm 26:1-12","Proverbs 20:19"],["2Chronicles 35:1-36:23","1Corinthians 1:1-17","Psalm 27:1-6","Proverbs 20:20-21"],["Ezra 1:1-2:70","1Corinthians 1:18-2:5","Psalm 27:7-14","Proverbs 20:22-23"],["Ezra 3:1-4:24","1Corinthians 2:6-3:4","Psalm 28:1-9","Proverbs 20:24-25"],["Ezra 5:1-6:22","1Corinthians 3:5-23","Psalm 29:1-11","Proverbs 20:26-27"],["Ezra 7:1-8:20","1Corinthians 4:1-21","Psalm 30:1-12","Proverbs 20:28-30"],["Ezra 8:21-9:15","1Corinthians 5:1-13","Psalm 31:1-8","Proverbs 21:1-2"],["Ezra 10:1-44","1Corinthians 6:1-20","Psalm 31:9-18","Proverbs 21:3"],["Nehemiah 1:1-3:14","1Corinthians 7:1-24","Psalm 31:19-24","Proverbs 21:4"],["Nehemiah 3:15-5:13","1Corinthians 7:25-40","Psalm 32:1-11","Proverbs 21:5-7"],["Nehemiah 5:14-7:60","1Corinthians 8:1-13","Psalm 33:1-11","Proverbs 21:8-10"],["Nehemiah 7:61-9:21","1Corinthians 9:1-18","Psalm 33:12-22","Proverbs 21:11-12"],["Nehemiah 9:22-10:39","1Corinthians 9:19-10:13","Psalm 34:1-10","Proverbs 21:13"],["Nehemiah 11:1-12:26","1Corinthians 10:14-11:2","Psalm 34:11-22","Proverbs 21:14-16"],["Nehemiah 12:27-13:31","1Corinthians 11:3-16","Psalm 35:1-16","Proverbs 21:17-18"],["Ester 1:1-3:15","1Corinthians 11:17-34","Psalm 35:17-28","Proverbs 21:19-20"],["Ester 4:1-7:10","1Corinthians 12:1-26","Psalm 36:1-12","Proverbs 21:21-22"],["Ester 8:1-10:3","1Corinthians 12:27-13:13","Psalm 37:1-11","Proverbs 21:23-24"],["Job 1:1-3:26","1Corinthians 14:1-17","Psalm 37:12-29","Proverbs 21:25-26"],["Job 4:1-7:21","1Corinthians 14:18-40","Psalm 37:30-40","Proverbs 21:27"],["Job 8:1-11:20","1Corinthians 15:1-28","Psalm 38:1-22","Proverbs 21:28-29"],["Job 12:1-15:35","1Corinthians 15:29-58","Psalm 39:1-13","Proverbs 21:30-31"],["Job 16:1-19:29","1Corinthians 16:1-24","Psalm 40:1-10","Proverbs 22:1"],["Job 20:1-22:30","2Corinthians 1:1-11","Psalm 40:11-17","Proverbs 22:2-4"],["Job 23:1-27:23","2Corinthians 1:12-2:11","Psalm 41:1-13","Proverbs 22:5-6"],["Job 28:1-30:31","2Corinthians 2:12-17","Psalm 42:1-11","Proverbs 22:7"],["Job 31:1-33:33","2Corinthians 3:1-18","Psalm 43:1-5","Proverbs 22:8-9"],["Job 34:1-36:33","2Corinthians 4:1-12","Psalm 44:1-8","Proverbs 22:10-12"],["Job 37:1-39:30","2Corinthians 4:13-5:10","Psalm 44:9-26","Proverbs 22:13"],["Job 40:1-42:17","2Corinthians 5:11-21","Psalm 45:1-17","Proverbs 22:14"],["Ecclesiastes 1:1-3:22","2Corinthians 6:1-13","Psalm 46:1-11","Proverbs 22:15"],["Ecclesiastes 4:1-6:12","2Corinthians 6:14-7:7","Psalm 47:1-9","Proverbs 22:16"],["Ecclesiastes 7:1-9:18","2Corinthians 7:8-16","Psalm 48:1-14","Proverbs 22:17-19"],["Ecclesiastes 10:1-12:14","2Corinthians 8:1-15","Psalm 49:1-20","Proverbs 22:20-21"],["SongOfSongs 1:1-4:15","2Corinthians 8:16-24","Psalm 50:1-23","Proverbs 22:22-23"],["SongOfSongs 5:1-8:14","2Corinthians 9:1-15","Psalm 51:1-19","Proverbs 22:24-25"],["Isaiah 1:1-2:22","2Corinthians 10:1-18","Psalm 52:1-9","Proverbs 22:26-27"],["Isaiah 3:1-5:30","2Corinthians 11:1-15","Psalm 53:1-6","Proverbs 22:28-29"],["Isaiah 6:1-7:25","2Corinthians 11:16-33","Psalm 54:1-7","Proverbs 23:1-3"],["Isaiah 8:1-9:21","2Corinthians 12:1-10","Psalm 55:1-23","Proverbs 23:4-5"],["Isaiah 10:1-11:16","2Corinthians 12:11-21","Psalm 56:1-13","Proverbs 23:6-8"],["Isaiah 12:1-14:32","2Corinthians 13:1-14","Psalm 57:1-11","Proverbs 23:9-11"],["Isaiah 15:1-18:7","Galatians 1:1-24","Psalm 58:1-11","Proverbs 23:12"],["Isaiah 19:1-21:17","Galatians 2:1-16","Psalm 59:1-17","Proverbs 23:13-14"],["Isaiah 22:1-24:23","Galatians 2:17-3:9","Psalm 60:1-12","Proverbs 23:15-16"],["Isaiah 25:1-28:13","Galatians 3:10-22","Psalm 61:1-8","Proverbs 23:17-18"],["Isaiah 28:14-30:11","Galatians 3:23-4:31","Psalm 62:1-12","Proverbs 23:19-21"],["Isaiah 30:12-33:12","Galatians 5:1-12","Psalm 63:1-11","Proverbs 23:22"],["Isaiah 33:13-36:22","Galatians 5:13-26","Psalm 64:1-10","Proverbs 23:23"],["Isaiah 37:1-38:22","Galatians 6:1-18","Psalm 65:1-13","Proverbs 23:24"],["Isaiah 39:1-41:16","Ephesians 1:1-23","Psalm 66:1-20","Proverbs 23:25-28"],["Isaiah 41:17-43:13","Ephesians 2:1-22","Psalm 67:1-7","Proverbs 23:29-35"],["Isaiah 43:14-45:10","Ephesians 3:1-21","Psalm 68:1-18","Proverbs 24:1-2"],["Isaiah 45:11-48:11","Ephesians 4:1-16","Psalm 68:19-35","Proverbs 24:3-4"],["Isaiah 48:12-50:11","Ephesians 4:17-32","Psalm 69:1-18","Proverbs 24:5-6"],["Isaiah 51:1-53:12","Ephesians 5:1-33","Psalm 69:19-36","Proverbs 24:7"],["Isaiah 54:1-57:13","Ephesians 6:1-24","Psalm 70:1-5","Proverbs 24:8"],["Isaiah 57:14-59:21","Philippians 1:1-26","Psalm 71:1-24","Proverbs 24:9-10"],["Isaiah 60:1-62:5","Philippians 1:27-2:18","Psalm 72:1-20","Proverbs 24:11-12"],["Isaiah 62:6-65:25","Philippians 2:19-3:4","Psalm 73:1-28","Proverbs 24:13-14"],["Isaiah 66:1-24","Philippians 3:4-21","Psalm 74:1-23","Proverbs 24:15-16"],["Jeremiah 1:1-2:30","Philippians 4:1-23","Psalm 75:1-10","Proverbs 24:17-20"],["Jeremiah 2:31-4:18","Colossians 1:1-20","Psalm 76:1-12","Proverbs 24:21-22"],["Jeremiah 4:19-6:14","Colossians 1:21-2:7","Psalm 77:1-20","Proverbs 24:23-25"],["Jeremiah 6:15-8:7","Colossians 2:8-23","Psalm 78:1-31","Proverbs 24:26"],["Jeremiah 8:8-9:26","Colossians 3:1-17","Psalm 78:32-55","Proverbs 24:27"],["Jeremiah 10:1-11:23","Colossians 3:18-4:18","Psalm 78:56-72","Proverbs 24:28-29"],["Jeremiah 12:1-14:10","1Thessalonians 1:1-2:9","Psalm 79:1-13","Proverbs 24:30-34"],["Jeremiah 14:11-16:15","1Thessalonians 2:10-3:13","Psalm 80:1-19","Proverbs 25:1-5"],["Jeremiah 16:16-18:23","1Thessalonians 4:1-5:3","Psalm 81:1-16","Proverbs 25:6-7"],["Jeremiah 19:1-21:14","1Thessalonians 5:4-28","Psalm 82:1-8","Proverbs 25:7-10"],["Jeremiah 22:1-23:20","2Thessalonians 1:1-12","Psalm 83:1-18","Proverbs 25:11-14"],["Jeremiah 23:21-25:38","2Thessalonians 2:1-17","Psalm 84:1-12","Proverbs 25:15"],["Jeremiah 26:1-27:22","2Thessalonians 3:1-18","Psalm 85:1-13","Proverbs 25:16"],["Jeremiah 28:1-29:32","1Timothy 1:1-20","Psalm 86:1-17","Proverbs 25:17"],["Jeremiah 30:1-31:26","1Timothy 2:1-15","Psalm 87:1-7","Proverbs 25:18-19"],["Jeremiah 31:27-32:44","1Timothy 3:1-16","Psalm 88:1-18","Proverbs 25:20-22"],["Jeremiah 33:1-34:22","1Timothy 4:1-16","Psalm 89:1-13","Proverbs 25:23-24"],["Jeremiah 35:1-36:32","1Timothy 5:1-25","Psalm 89:14-37","Proverbs 25:25-27"],["Jeremiah 37:1-38:28","1Timothy 6:1-21","Psalm 89:38-52","Proverbs 25:28"],["Jeremiah 39:1-41:18","2Timothy 1:1-18","Psalm 90:1-91:16","Proverbs 26:1-2"],["Jeremiah 42:1-44:23","2Timothy 2:1-21","Psalm 92:1-93:5","Proverbs 26:3-5"],["Jeremiah 44:24-47:7","2Timothy 2:22-3:17","Psalm 94:1-23","Proverbs 26:6-8"],["Jeremiah 48:1-49:22","2Timothy 4:1-22","Psalm 95:1-96:13","Proverbs 26:9-12"],["Jeremiah 49:23-50:46","Titus 1:1-16","Psalm 97:1-98:9","Proverbs 26:13-16"],["Jeremiah 51:1-53","Titus 2:1-15","Psalm 99:1-9","Proverbs 26:17"],["Jeremiah 51:54-52:34","Titus 3:1-15","Psalm 100:1-5","Proverbs 26:18-19"],["Lamentations 1:1-2:19","Philemon 1-25","Psalm 101:1-8","Proverbs 26:20"],["Lamentations 2:20-3:66","Hebrews 1:1-14","Psalm 102:1-28","Proverbs 26:21-22"],["Lamentations 4:1-5:22","Hebrews 2:1-18","Psalm 103:1-22","Proverbs 26:23"],["Ezekiel 1:1-3:15","Hebrews 3:1-19","Psalm 104:1-23","Proverbs 26:24-26"],["Ezekiel 3:16-6:14","Hebrews 4:1-16","Psalm 104:24-35","Proverbs 26:27"],["Ezekiel 7:1-9:11","Hebrews 5:1-14","Psalm 105:1-15","Proverbs 26:28"],["Ezekiel 10:1-11:25","Hebrews 6:1-20","Psalm 105:16-36","Proverbs 27:1-2"],["Ezekiel 12:1-14:11","Hebrews 7:1-17","Psalm 105:37-45","Proverbs 27:3"],["Ezekiel 14:12-16:42","Hebrews 7:18-28","Psalm 106:1-12","Proverbs 27:4-6"],["Ezekiel 16:43-17:24","Hebrews 8:1-13","Psalm 106:13-31","Proverbs 27:7-9"],["Ezekiel 18:1-19:14","Hebrews 9:1-10","Psalm 106:32-48","Proverbs 27:10"],["Ezekiel 20:1-49","Hebrews 9:11-28","Psalm 107:1-43","Proverbs 27:11"],["Ezekiel 21:1-22:31","Hebrews 10:1-17","Psalm 108:1-13","Proverbs 27:12"],["Ezekiel 23:1-49","Hebrews 10:18-39","Psalm 109:1-31","Proverbs 27:13"],["Ezekiel 24:1-26:21","Hebrews 11:1-16","Psalm 110:1-7","Proverbs 27:14"],["Ezekiel 27:1-28:26","Hebrews 11:17-31","Psalm 111:1-10","Proverbs 27:15-16"],["Ezekiel 29:1-30:26","Hebrews 11:32-12:13","Psalm 112:1-10","Proverbs 27:17"],["Ezekiel 31:1-32:32","Hebrews 12:14-29","Psalm 113:1-114:8","Proverbs 27:18-20"],["Ezekiel 33:1-34:31","Hebrews 13:1-25","Psalm 115:1-18","Proverbs 27:21-22"],["Ezekiel 35:1-36:38","James 1:1-18","Psalm 116:1-19","Proverbs 27:23-27"],["Ezekiel 37:1-38:23","James 1:19-2:17","Psalm 117:1-2","Proverbs 28:1"],["Ezekiel 39:1-40:27","James 2:18-3:18","Psalm 118:1-18","Proverbs 28:2"],["Ezekiel 40:28-41:26","James 4:1-17","Psalm 118:19-29","Proverbs 28:3-5"],["Ezekiel 42:1-43:27","James 5:1-20","Psalm 119:1-16","Proverbs 28:6-7"],["Ezekiel 44:1-45:12","1Peter 1:1-12","Psalm 119:17-32","Proverbs 28:8-10"],["Ezekiel 45:13-46:24","1Peter 1:13-2:10","Psalm 119:33-48","Proverbs 28:11"],["Ezekiel 47:1-48:35","1Peter 2:11-3:7","Psalm 119:49-64","Proverbs 28:12-13"],["Daniel 1:1-2:23","1Peter 3:8-4:6","Psalm 119:65-80","Proverbs 28:14"],["Daniel 2:24-3:30","1Peter 4:7-5:14","Psalm 119:81-96","Proverbs 28:15-16"],["Daniel 4:1-37","2Peter 1:1-21","Psalm 119:97-112","Proverbs 28:17-18"],["Daniel 5:1-31","2Peter 2:1-22","Psalm 119:113-128","Proverbs 28:19-20"],["Daniel 6:1-28","2Peter 3:1-18","Psalm 119:129-152","Proverbs 28:21-22"],["Daniel 7:1-28","1John 1:1-10","Psalm 119:153-176","Proverbs 28:23-24"],["Daniel 8:1-27","1John 2:1-17","Psalm 120:1-7","Proverbs 28:25-26"],["Daniel 9:1-11:1","1John 2:18-3:6","Psalm 121:1-8","Proverbs 28:27-28"],["Daniel 11:2-35","1John 3:7-24","Psalm 122:1-9","Proverbs 29:1"],["Daniel 11:36-12:13","1John 4:1-21","Psalm 123:1-4","Proverbs 29:2-4"],["Hosea 1:1-3:5","1John 5:1-21","Psalm 124:1-8","Proverbs 29:5-8"],["Hosea 4:1-5:15","2John 1-13","Psalm 125:1-5","Proverbs 29:9-11"],["Hosea 6:1-9:17","3John 1-15","Psalm 126:1-6","Proverbs 29:12-14"],["Hosea 10:1-14:9","Jude 1-25","Psalm 127:1-5","Proverbs 29:15-17"],["Joel 1:1-3:21","Revelation 1:1-20","Psalm 128:1-6","Proverbs 29:18"],["Amos 1:1-3:15","Revelation 2:1-17","Psalm 129:1-8","Proverbs 29:19-20"],["Amos 4:1-6:14","Revelation 2:18-3:6","Psalm 130:1-8","Proverbs 29:21-22"],["Amos 7:1-9:15","Revelation 3:7-22","Psalm 131:1-3","Proverbs 29:23"],["Obadiah 1-21","Revelation 4:1-11","Psalm 132:1-18","Proverbs 29:24-25"],["Jonah 1:1-4:11","Revelation 5:1-14","Psalm 133:1-3","Proverbs 29:26-27"],["Micah 1:1-4:13","Revelation 6:1-17","Psalm 134:1-3","Proverbs 30:1-4"],["Micah 5:1-7:20","Revelation 7:1-17","Psalm 135:1-21","Proverbs 30:5-6"],["Nahum 1:1-3:19","Revelation 8:1-13","Psalm 136:1-26","Proverbs 30:7-9"],["Habakkuk 1:1-3:19","Revelation 9:1-21","Psalm 137:1-9","Proverbs 30:10"],["Zephaniah 1:1-3:20","Revelation 10:1-11","Psalm 138:1-8","Proverbs 30:11-14"],["Haggai 1:1-2:23","Revelation 11:1-19","Psalm 139:1-24","Proverbs 30:15-16"],["Zechariah 1:1-21","Revelation 12:1-17","Psalm 140:1-13","Proverbs 30:17"],["Zechariah 2:1-3:10","Revelation 13:1-18","Psalm 141:1-10","Proverbs 30:18-20"],["Zechariah 4:1-5:11","Revelation 14:1-20","Psalm 142:1-7","Proverbs 30:21-23"],["Zechariah 6:1-7:14","Revelation 15:1-8","Psalm 143:1-12","Proverbs 30:24-28"],["Zechariah 8:1-23","Revelation 16:1-21","Psalm 144:1-15","Proverbs 30:29-31"],["Zechariah 9:1-17","Revelation 17:1-18","Psalm 145:1-21","Proverbs 30:32"],["Zechariah 10:1-11:17","Revelation 18:1-24","Psalm 146:1-10","Proverbs 30:33"],["Zechariah 12:1-13:9","Revelation 19:1-21","Psalm 147:1-20","Proverbs 31:1-7"],["Zechariah 14:1-21","Revelation 20:1-15","Psalm 148:1-14","Proverbs 31:8-9"],["Malachi 1:1-2:17","Revelation 21:1-27","Psalm 149:1-9","Proverbs 31:10-24"],["Malachi 3:1-4:6","Revelation 22:1-21","Psalm 150:1-6","Proverbs 31:25-31"]],"data":["Genesis 1:1-2:25","Matthew 1:1-2:12","Psalm 1:1-6","Proverbs 1:1-6","Genesis 3:1-4:26","Matthew 2:13-3:6","Psalm 2:1-12","Proverbs 1:7-9","Genesis 5:1-7:24","Matthew 3:7-4:11","Psalm 3:1-8","Proverbs 1:10-19","Genesis 8:1-10:32","Matthew 4:12-25","Psalm 4:1-8","Proverbs 1:20-23","Genesis 11:1-13:4","Matthew 5:1-26","Psalm 5:1-12","Proverbs 1:24-28","Genesis 13:5-15:21","Matthew 5:27-48","Psalm 6:1-10","Proverbs 1:29-33","Genesis 16:1-18:19","Matthew 6:1-24","Psalm 7:1-17","Proverbs 2:1-5","Genesis 18:20-19:38","Matthew 6:25-7:14","Psalm 8:1-9","Proverbs 2:6-15","Genesis 20:1-22:24","Matthew 7:15-29","Psalm 9:1-12","Proverbs 2:16-22","Genesis 23:1-24:51","Matthew 8:1-17","Psalm 9:13-20","Proverbs 3:1-6","Genesis 24:52-26:16","Matthew 8:18-34","Psalm 10:1-15","Proverbs 3:7-8","Genesis 26:17-27:46","Matthew 9:1-17","Psalm 10:16-18","Proverbs 3:9-10","Genesis 28:1-29:35","Matthew 9:18-38","Psalm 11:1-7","Proverbs 3:11-12","Genesis 30:1-31:16","Matthew 10:1-25","Psalm 12:1-8","Proverbs 3:13-15","Genesis 31:17-32:12","Matthew 10:26-11:6","Psalm 13:1-6","Proverbs 3:16-18","Genesis 32:13-34:31","Matthew 11:7-30","Psalm 14:1-7","Proverbs 3:19-20","Genesis 35:1-36:43","Matthew 12:1-21","Psalm 15:1-5","Proverbs 3:21-26","Genesis 37:1-38:30","Matthew 12:22-45","Psalm 16:1-11","Proverbs 3:27-32","Genesis 39:1-41:16","Matthew 12:46-13:23","Psalm 17:1-15","Proverbs 3:33-35","Genesis 41:17-42:17","Matthew 13:24-46","Psalm 18:1-15","Proverbs 4:1-6","Genesis 42:18-43:34","Matthew 13:47-14:12","Psalm 18:16-36","Proverbs 4:7-10","Genesis 44:1-45:28","Matthew 14:13-36","Psalm 18:37-50","Proverbs 4:11-13","Genesis 46:1-47:31","Matthew 15:1-28","Psalm 19:1-14","Proverbs 4:14-19","Genesis 48:1-49:33","Matthew 15:29-16:12","Psalm 20:1-9","Proverbs 4:20-27","Genesis 50:1-26","Exodus 1:1-2:10","Matthew 16:13-17:9","Psalm 21:1-13","Proverbs 5:1-6","Exodus 2:11-3:22","Matthew 17:10-27","Psalm 22:1-18","Proverbs 5:7-14","Exodus 4:1-5:21","Matthew 18:1-22","Psalm 22:19-31","Proverbs 5:15-21","Exodus 5:22-7:24","Matthew 18:23-19:12","Psalm 23:1-6","Proverbs 5:22-23","Exodus 7:25-9:35","Matthew 19:13-30","Psalm 24:1-10","Proverbs 6:1-5","Exodus 10:1-12:13","Matthew 20:1-28","Psalm 25:1-15","Proverbs 6:6-11","Exodus 12:14-13:16","Matthew 20:29-21:22","Psalm 25:16-22","Proverbs 6:12-15","Exodus 13:17-15:18","Matthew 21:23-46","Psalm 26:1-12","Proverbs 6:16-19","Exodus 15:19-17:7","Matthew 22:1-33","Psalm 27:1-6","Proverbs 6:20-26","Exodus 17:8-19:15","Matthew 22:34-23:12","Psalm 27:7-14","Proverbs 6:27-35","Exodus 19:16-21:21","Matthew 23:13-39","Psalm 28:1-9","Proverbs 7:1-5","Exodus 21:22-23:13","Matthew 24:1-28","Psalm 29:1-11","Proverbs 7:6-23","Exodus 23:14-25:40","Matthew 24:29-51","Psalm 30:1-12","Proverbs 7:24-27","Exodus 26:1-27:21","Matthew 25:1-30","Psalm 31:1-8","Proverbs 8:1-11","Exodus 28:1-43","Matthew 25:31-26:13","Psalm 31:9-18","Proverbs 8:12-13","Exodus 29:1-30:10","Matthew 26:14-46","Psalm 31:19-24","Proverbs 8:14-26","Exodus 30:11-31:18","Matthew 26:47-68","Psalm 32:1-11","Proverbs 8:27-32","Exodus 32:1-33:23","Matthew 26:69-27:14","Psalm 33:1-11","Proverbs 8:33-36","Exodus 34:1-35:9","Matthew 27:15-31","Psalm 33:12-22","Proverbs 9:1-6","Exodus 35:10-36:38","Matthew 27:32-66","Psalm 34:1-10","Proverbs 9:7-8","Exodus 37:1-38:31","Matthew 28:1-20","Psalm 34:11-22","Proverbs 9:9-10","Exodus 39:1-40:38","Mark 1:1-28","Psalm 35:1-16","Proverbs 9:11-12","Leviticus 1:1-3:17","Mark 1:29-2:12","Psalm 35:17-28","Proverbs 9:13-18","Leviticus 4:1-5:19","Mark 2:13-3:6","Psalm 36:1-12","Proverbs 10:1-2","Leviticus 6:1-7:27","Mark 3:7-30","Psalm 37:1-11","Proverbs 10:3-4","Leviticus 7:28-9:6","Mark 3:31-4:25","Psalm 37:12-29","Proverbs 10:5","Leviticus 9:7-10:20","Mark 4:26-5:20","Psalm 37:30-40","Proverbs 10:6-7","Leviticus 11:1-12:8","Mark 5:21-43","Psalm 38:1-22","Proverbs 10:8-9","Leviticus 13:1-59","Mark 6:1-29","Psalm 39:1-13","Proverbs 10:10","Leviticus 14:1-57","Mark 6:30-56","Psalm 40:1-10","Proverbs 10:11-12","Leviticus 15:1-16:28","Mark 7:1-23","Psalm 40:11-17","Proverbs 10:13-14","Leviticus 16:29-18:30","Mark 7:24-8:10","Psalm 41:1-13","Proverbs 10:15-16","Leviticus 19:1-20:21","Mark 8:11-38","Psalm 42:1-11","Proverbs 10:17","Leviticus 20:22-22:16","Mark 9:1-29","Psalm 43:1-5","Proverbs 10:18","Leviticus 22:17-23:44","Mark 9:30-10:12","Psalm 44:1-8","Proverbs 10:19","Leviticus 24:1-25:46","Mark 10:13-31","Psalm 44:9-26","Proverbs 10:20-21","Leviticus 25:47-27:13","Mark 10:32-52","Psalm 45:1-17","Proverbs 10:22","Leviticus 27:14-34","Numbers 1:1-54","Mark 11:1-25","Psalm 46:1-11","Proverbs 10:23","Numbers 2:1-3:51","Mark 11:27-12:17","Psalm 47:1-9","Proverbs 10:24-25","Numbers 4:1-5:31","Mark 12:18-37","Psalm 48:1-14","Proverbs 10:26","Numbers 6:1-7:89","Mark 12:38-13:13","Psalm 49:1-20","Proverbs 10:27-28","Numbers 8:1-9:23","Mark 13:14-37","Psalm 50:1-23","Proverbs 10:29-30","Numbers 10:1-11:23","Mark 14:1-21","Psalm 51:1-19","Proverbs 10:31-32","Numbers 11:24-13:33","Mark 14:22-52","Psalm 52:1-9","Proverbs 11:1-3","Numbers 14:1-15:16","Mark 14:53-72","Psalm 53:1-6","Proverbs 11:4","Numbers 15:17-16:40","Mark 15:1-47","Psalm 54:1-7","Proverbs 11:5-6","Numbers 16:41-18:32","Mark 16:1-20","Psalm 55:1-23","Proverbs 11:7","Numbers 19:1-20:29","Luke 1:1-25","Psalm 56:1-13","Proverbs 11:8","Numbers 21:1-22:20","Luke 1:26-56","Psalm 57:1-11","Proverbs 11:9-11","Numbers 22:21-23:30","Luke 1:57-80","Psalm 58:1-11","Proverbs 11:12-13","Numbers 24:1-25:18","Luke 2:1-35","Psalm 59:1-17","Proverbs 11:14","Numbers 26:1-51","Luke 2:36-52","Psalm 60:1-12","Proverbs 11:15","Numbers 26:52-28:15","Luke 3:1-22","Psalm 61:1-8","Proverbs 11:16-17","Numbers 28:16-29:40","Luke 3:23-38","Psalm 62:1-12","Proverbs 11:18-19","Numbers 30:1-31:54","Luke 4:1-30","Psalm 63:1-11","Proverbs 11:20-21","Numbers 32:1-33:39","Luke 4:31-5:11","Psalm 64:1-10","Proverbs 11:22","Numbers 33:40-35:34","Luke 5:12-28","Psalm 65:1-13","Proverbs 11:23","Numbers 36:1-13","Deuteronomy 1:1-46","Luke 5:29-6:11","Psalm 66:1-20","Proverbs 11:24-26","Deuteronomy 2:1-3:29","Luke 6:12-38","Psalm 67:1-7","Proverbs 11:27","Deuteronomy 4:1-49","Luke 6:39-7:10","Psalm 68:1-18","Proverbs 11:28","Deuteronomy 5:1-6:25","Luke 7:11-35","Psalm 68:19-35","Proverbs 11:29-31","Deuteronomy 7:1-8:20","Luke 7:36-8:3","Psalm 69:1-18","Proverbs 12:1","Deuteronomy 9:1-10:22","Luke 8:4-21","Psalm 69:19-36","Proverbs 12:2-3","Deuteronomy 11:1-12:32","Luke 8:22-39","Psalm 70:1-5","Proverbs 12:4","Deuteronomy 13:1-15:23","Luke 8:40-9:6","Psalm 71:1-24","Proverbs 12:5-7","Deuteronomy 16:1-17:20","Luke 9:7-27","Psalm 72:1-20","Proverbs 12:8-9","Deuteronomy 18:1-20:20","Luke 9:28-50","Psalm 73:1-28","Proverbs 12:10","Deuteronomy 21:1-22:30","Luke 9:51-10:12","Psalm 74:1-23","Proverbs 12:11","Deuteronomy 23:1-25:19","Luke 10:13-37","Psalm 75:1-10","Proverbs 12:12-14","Deuteronomy 26:1-27:26","Luke 10:38-11:13","Psalm 76:1-12","Proverbs 12:15-17","Deuteronomy 28:1-68","Luke 11:14-36","Psalm 77:1-20","Proverbs 12:18","Deuteronomy 29:1-30:20","Luke 11:37-12:7","Psalm 78:1-31","Proverbs 12:19-20","Deuteronomy 31:1-32:27","Luke 12:8-34","Psalm 78:32-55","Proverbs 12:21-23","Deuteronomy 32:28-52","Luke 12:35-59","Psalm 78:56-64","Proverbs 12:24","Deuteronomy 33:1-29","Luke 13:1-21","Psalm 78:65-72","Proverbs 12:25","Deuteronomy 34:1-12","Joshua 1:1-2:24","Luke 13:22-14:6","Psalm 79:1-13","Proverbs 12:26","Joshua 3:1-4:24","Luke 14:7-35","Psalm 80:1-19","Proverbs 12:27-28","Joshua 5:1-7:15","Luke 15:1-32","Psalm 81:1-16","Proverbs 13:1","Joshua 7:16-9:2","Luke 16:1-18","Psalm 82:1-8","Proverbs 13:2-3","Joshua 9:3-10:43","Luke 16:19-17:10","Psalm 83:1-18","Proverbs 13:4","Joshua 11:1-12:24","Luke 17:11-37","Psalm 84:1-12","Proverbs 13:5-6","Joshua 13:1-14:15","Luke 18:1-17","Psalm 85:1-13","Proverbs 13:7-8","Joshua 15:1-63","Luke 18:18-43","Psalm 86:1-17","Proverbs 13:9-10","Joshua 16:1-18:28","Luke 19:1-27","Psalm 87:1-7","Proverbs 13:11","Joshua 19:1-20:9","Luke 19:28-48","Psalm 88:1-18","Proverbs 13:12-14","Joshua 21:1-22:20","Luke 20:1-26","Psalm 89:1-13","Proverbs 13:15-16","Joshua 22:21-23:16","Luke 20:27-47","Psalm 89:14-37","Proverbs 13:17-19","Joshua 24:1-33","Luke 21:1-28","Psalm 89:38-52","Proverbs 13:20-23","Judges 1:1-2:9","Luke 21:29-22:13","Psalm 90:1-91:16","Proverbs 13:24-25","Judges 2:10-3:31","Luke 22:14-34","Psalm 92:1-93:5","Proverbs 14:1-2","Judges 4:1-5:31","Luke 22:35-53","Psalm 94:1-23","Proverbs 14:3-4","Judges 6:1-40","Luke 22:54-23:12","Psalm 95:1-96:13","Proverbs 14:5-6","Judges 7:1-8:17","Luke 23:13-43","Psalm 97:1-98:9","Proverbs 14:7-8","Judges 8:18-9:21","Luke 23:44-24:12","Psalm 99:1-9","Proverbs 14:9-10","Judges 9:22-10:18","Luke 24:13-53","Psalm 100:1-5","Proverbs 14:11-12","Judges 11:1-12:15","John 1:1-28","Psalm 101:1-8","Proverbs 14:13-14","Judges 13:1-14:20","John 1:29-51","Psalm 102:1-28","Proverbs 14:15-16","Judges 15:1-16:31","John 2:1-25","Psalm 103:1-22","Proverbs 14:17-19","Judges 17:1-18:31","John 3:1-21","Psalm 104:1-23","Proverbs 14:20-21","Judges 19:1-20:48","John 3:22-4:3","Psalm 104:24-35","Proverbs 14:22-24","Judges 21:1-25","Ruth 1:1-22","John 4:4-42","Psalm 105:1-15","Proverbs 14:25","Ruth 2:1-4:22","John 4:43-54","Psalm 105:16-36","Proverbs 14:26-27","1Samuel 1:1-2:21","John 5:1-23","Psalm 105:37-45","Proverbs 14:28-29","1Samuel 2:22-4:22","John 5:24-47","Psalm 106:1-12","Proverbs 14:30-31","1Samuel 5:1-7:17","John 6:1-21","Psalm 106:13-31","Proverbs 14:32-33","1Samuel 8:1-9:27","John 6:22-42","Psalm 106:32-48","Proverbs 14:34-35","1Samuel 10:1-11:15","John 6:43-71","Psalm 107:1-43","Proverbs 15:1-3","1Samuel 12:1-13:22","John 7:1-29","Psalm 108:1-13","Proverbs 15:4","1Samuel 13:23-14:52","John 7:30-52","Psalm 109:1-31","Proverbs 15:5-7","1Samuel 15:1-16:23","John 7:53-8:20","Psalm 110:1-7","Proverbs 15:8-10","1Samuel 17:1-18:4","John 8:21-30","Psalm 111:1-10","Proverbs 15:11","1Samuel 18:5-19:24","John 8:31-59","Psalm 112:1-10","Proverbs 15:12-14","1Samuel 20:1-21:15","John 9:1-41","Psalm 113:1-114:8","Proverbs 15:15-17","1Samuel 22:1-23:29","John 10:1-21","Psalm 115:1-18","Proverbs 15:18-19","1Samuel 24:1-25:44","John 10:22-42","Psalm 116:1-19","Proverbs 15:20-21","1Samuel 26:1-28:25","John 11:1-53","Psalm 117:1-2","Proverbs 15:22-23","1Samuel 29:1-31:13","John 11:54-12:19","Psalm 118:1-18","Proverbs 15:24-26","2Samuel 1:1-2:11","John 12:20-50","Psalm 118:19-29","Proverbs 15:27-28","2Samuel 2:12-3:39","John 13:1-30","Psalm 119:1-16","Proverbs 15:29-30","2Samuel 4:1-6:23","John 13:31-14:14","Psalm 119:17-32","Proverbs 15:32","2Samuel 7:1-8:18","John 14:15-31","Psalm 119:33-48","Proverbs 15:33","2Samuel 9:1-11:27","John 15:1-27","Psalm 119:49-64","Proverbs 16:1-3","2Samuel 12:1-31","John 16:1-33","Psalm 119:65-80","Proverbs 16:4-5","2Samuel 13:1-39","John 17:1-26","Psalm 119:81-96","Proverbs 16:6-7","2Samuel 14:1-15:22","John 18:1-24","Psalm 119:97-112","Proverbs 16:8-9","2Samuel 15:23-16:23","John 18:25-19:22","Psalm 119:113-128","Proverbs 16:10-11","2Samuel 17:1-29","John 19:23-42","Psalm 119:129-152","Proverbs 16:12-13","2Samuel 18:1-19:10","John 20:1-31","Psalm 119:153-176","Proverbs 16:14-15","2Samuel 19:11-20:13","John 21:1-25","Psalm 120:1-7","Proverbs 16:16-17","2Samuel 20:14-22:20","Acts 1:1-26","Psalm 121:1-8","Proverbs 16:18","2Samuel 22:21-23:23","Acts 2:1-47","Psalm 122:1-9","Proverbs 16:19-20","2Samuel 23:24-24:25","Acts 3:1-26","Psalm 123:1-4","Proverbs 16:21-23","1Kings 1:1-53","Acts 4:1-37","Psalm 124:1-8","Proverbs 16:24","1Kings 2:1-3:3","Acts 5:1-42","Psalm 125:1-5","Proverbs 16:25","1Kings 3:4-4:34","Acts 6:1-15","Psalm 126:1-6","Proverbs 16:26-27","1Kings 5:1-6:38","Acts 7:1-29","Psalm 127:1-5","Proverbs 16:28-30","1Kings 7:1-51","Acts 7:30-50","Psalm 128:1-6","Proverbs 16:31-33","1Kings 8:1-66","Acts 7:51-8:13","Psalm 129:1-8","Proverbs 17:1","1Kings 9:1-10:29","Acts 8:14-40","Psalm 130:1-8","Proverbs 17:2-3","1Kings 11:1-12:19","Acts 9:1-25","Psalm 131:1-3","Proverbs 17:4-5","1Kings 12:20-13:34","Acts 9:26-43","Psalm 132:1-18","Proverbs 17:6","1Kings 14:1-15:24","Acts 10:1-23","Psalm 133:1-3","Proverbs 17:7-8","1Kings 15:25-17:24","Acts 10:23-48","Psalm 134:1-3","Proverbs 17:9-11","1Kings 18:1-46","Acts 11:1-30","Psalm 135:1-21","Proverbs 17:12-13","1Kings 19:1-21","Acts 12:1-23","Psalm 136:1-26","Proverbs 17:14-15","1Kings 20:1-21:29","Acts 12:24-13:15","Psalm 137:1-9","Proverbs 17:16","1Kings 22:1-53","Acts 13:16-41","Psalm 138:1-8","Proverbs 17:17-18","2Kings 1:1-2:25","Acts 13:42-14:7","Psalm 139:1-24","Proverbs 17:19-21","2Kings 3:1-4:17","Acts 14:8-28","Psalm 140:1-13","Proverbs 17:22","2Kings 4:18-5:27","Acts 15:1-35","Psalm 141:1-10","Proverbs 17:23","2Kings 6:1-7:20","Acts 15:36-16:15","Psalm 142:1-7","Proverbs 17:24-25","2Kings 8:1-9:13","Acts 16:16-40","Psalm 143:1-12","Proverbs 17:26","2Kings 9:14-10:31","Acts 17:1-34","Psalm 144:1-15","Proverbs 17:27-28","2Kings 10:32-12:21","Acts 18:1-22","Psalm 145:1-21","Proverbs 18:1","2Kings 13:1-14:29","Acts 18:23-19:12","Psalm 146:1-10","Proverbs 18:2-3","2Kings 15:1-16:20","Acts 19:13-41","Psalm 147:1-20","Proverbs 18:4-5","2Kings 17:1-18:12","Acts 20:1-38","Psalm 148:1-14","Proverbs 18:6-7","2Kings 18:13-19:37","Acts 21:1-16","Psalm 149:1-9","Proverbs 18:8","2Kings 20:1-22:2","Acts 21:17-36","Psalm 150:1-6","Proverbs 18:9-10","2Kings 22:3-23:30","Acts 21:37-22:16","Psalm 1:1-6","Proverbs 18:11-12","2Kings 23:31-25:30","Acts 22:17-23:10","Psalm 2:1-12","Proverbs 18:13","1Chronicles 1:1-2:17","Acts 23:11-35","Psalm 3:1-8","Proverbs 18:14-15","1Chronicles 2:18-4:4","Acts 24:1-27","Psalm 4:1-8","Proverbs 18:16-18","1Chronicles 4:5-5:17","Acts 25:1-27","Psalm 5:1-12","Proverbs 18:19","1Chronicles 5:18-6:81","Acts 26:1-32","Psalm 6:1-10","Proverbs 18:20-21","1Chronicles 7:1-8:40","Acts 27:1-20","Psalm 7:1-17","Proverbs 18:22","1Chronicles 9:1-10:14","Acts 27:21-44","Psalm 8:1-9","Proverbs 18:23-24","1Chronicles 11:1-12:18","Acts 28:1-31","Psalm 9:1-12","Proverbs 19:1-3","1Chronicles 12:19-14:17","Romans 1:1-17","Psalm 9:13-20","Proverbs 19:4-5","1Chronicles 15:1-16:36","Romans 1:18-32","Psalm 10:1-15","Proverbs 19:6-7","1Chronicles 16:37-18:17","Romans 2:1-24","Psalm 10:16-18","Proverbs 19:8-9","1Chronicles 19:1-21:30","Romans 2:25-3:8","Psalm 11:1-7","Proverbs 19:10-12","1Chronicles 22:1-23:32","Romans 3:9-31","Psalm 12:1-8","Proverbs 19:13-14","1Chronicles 24:1-26:11","Romans 4:1-12","Psalm 13:1-6","Proverbs 19:15-16","1Chronicles 26:12-27:34","Romans 4:13-5:5","Psalm 14:1-7","Proverbs 19:17","1Chronicles 28:1-29:30","Romans 5:6-21","Psalm 15:1-5","Proverbs 19:18-19","2Chronicles 1:1-3:17","Romans 6:1-23","Psalm 16:1-11","Proverbs 19:20-21","2Chronicles 4:1-6:11","Romans 7:1-13","Psalm 17:1-15","Proverbs 19:22-23","2Chronicles 6:12-8:10","Romans 7:14-8:8","Psalm 18:1-15","Proverbs 19:24-25","2Chronicles 8:11-10:19","Romans 8:9-21","Psalm 18:16-36","Proverbs 19:26","2Chronicles 11:1-13:22","Romans 8:22-39","Psalm 18:37-50","Proverbs 19:27-29","2Chronicles 14:1-16:14","Romans 9:1-21","Psalm 19:1-14","Proverbs 20:1","2Chronicles 17:1-18:34","Romans 9:22-10:13","Psalm 20:1-9","Proverbs 20:2-3","2Chronicles 19:1-20:37","Romans 10:14-11:12","Psalm 21:1-13","Proverbs 20:4-6","2Chronicles 21:1-23:21","Romans 11:13-36","Psalm 22:1-18","Proverbs 20:7","2Chronicles 24:1-25:28","Romans 12:1-21","Psalm 22:19-31","Proverbs 20:8-10","2Chronicles 26:1-28:27","Romans 13:1-14","Psalm 23:1-6","Proverbs 20:11","2Chronicles 29:1-36","Romans 14:1-23","Psalm 24:1-10","Proverbs 20:12","2Chronicles 30:1-31:21","Romans 15:1-22","Psalm 25:1-15","Proverbs 20:13-15","2Chronicles 32:1-33:13","Romans 15:23-16:7","Psalm 25:16-22","Proverbs 20:16-18","2Chronicles 33:14-34:33","Romans 16:8-27","Psalm 26:1-12","Proverbs 20:19","2Chronicles 35:1-36:23","1Corinthians 1:1-17","Psalm 27:1-6","Proverbs 20:20-21","Ezra 1:1-2:70","1Corinthians 1:18-2:5","Psalm 27:7-14","Proverbs 20:22-23","Ezra 3:1-4:24","1Corinthians 2:6-3:4","Psalm 28:1-9","Proverbs 20:24-25","Ezra 5:1-6:22","1Corinthians 3:5-23","Psalm 29:1-11","Proverbs 20:26-27","Ezra 7:1-8:20","1Corinthians 4:1-21","Psalm 30:1-12","Proverbs 20:28-30","Ezra 8:21-9:15","1Corinthians 5:1-13","Psalm 31:1-8","Proverbs 21:1-2","Ezra 10:1-44","1Corinthians 6:1-20","Psalm 31:9-18","Proverbs 21:3","Nehemiah 1:1-3:14","1Corinthians 7:1-24","Psalm 31:19-24","Proverbs 21:4","Nehemiah 3:15-5:13","1Corinthians 7:25-40","Psalm 32:1-11","Proverbs 21:5-7","Nehemiah 5:14-7:60","1Corinthians 8:1-13","Psalm 33:1-11","Proverbs 21:8-10","Nehemiah 7:61-9:21","1Corinthians 9:1-18","Psalm 33:12-22","Proverbs 21:11-12","Nehemiah 9:22-10:39","1Corinthians 9:19-10:13","Psalm 34:1-10","Proverbs 21:13","Nehemiah 11:1-12:26","1Corinthians 10:14-11:2","Psalm 34:11-22","Proverbs 21:14-16","Nehemiah 12:27-13:31","1Corinthians 11:3-16","Psalm 35:1-16","Proverbs 21:17-18","Ester 1:1-3:15","1Corinthians 11:17-34","Psalm 35:17-28","Proverbs 21:19-20","Ester 4:1-7:10","1Corinthians 12:1-26","Psalm 36:1-12","Proverbs 21:21-22","Ester 8:1-10:3","1Corinthians 12:27-13:13","Psalm 37:1-11","Proverbs 21:23-24","Job 1:1-3:26","1Corinthians 14:1-17","Psalm 37:12-29","Proverbs 21:25-26","Job 4:1-7:21","1Corinthians 14:18-40","Psalm 37:30-40","Proverbs 21:27","Job 8:1-11:20","1Corinthians 15:1-28","Psalm 38:1-22","Proverbs 21:28-29","Job 12:1-15:35","1Corinthians 15:29-58","Psalm 39:1-13","Proverbs 21:30-31","Job 16:1-19:29","1Corinthians 16:1-24","Psalm 40:1-10","Proverbs 22:1","Job 20:1-22:30","2Corinthians 1:1-11","Psalm 40:11-17","Proverbs 22:2-4","Job 23:1-27:23","2Corinthians 1:12-2:11","Psalm 41:1-13","Proverbs 22:5-6","Job 28:1-30:31","2Corinthians 2:12-17","Psalm 42:1-11","Proverbs 22:7","Job 31:1-33:33","2Corinthians 3:1-18","Psalm 43:1-5","Proverbs 22:8-9","Job 34:1-36:33","2Corinthians 4:1-12","Psalm 44:1-8","Proverbs 22:10-12","Job 37:1-39:30","2Corinthians 4:13-5:10","Psalm 44:9-26","Proverbs 22:13","Job 40:1-42:17","2Corinthians 5:11-21","Psalm 45:1-17","Proverbs 22:14","Ecclesiastes 1:1-3:22","2Corinthians 6:1-13","Psalm 46:1-11","Proverbs 22:15","Ecclesiastes 4:1-6:12","2Corinthians 6:14-7:7","Psalm 47:1-9","Proverbs 22:16","Ecclesiastes 7:1-9:18","2Corinthians 7:8-16","Psalm 48:1-14","Proverbs 22:17-19","Ecclesiastes 10:1-12:14","2Corinthians 8:1-15","Psalm 49:1-20","Proverbs 22:20-21","SongOfSongs 1:1-4:15","2Corinthians 8:16-24","Psalm 50:1-23","Proverbs 22:22-23","SongOfSongs 5:1-8:14","2Corinthians 9:1-15","Psalm 51:1-19","Proverbs 22:24-25","Isaiah 1:1-2:22","2Corinthians 10:1-18","Psalm 52:1-9","Proverbs 22:26-27","Isaiah 3:1-5:30","2Corinthians 11:1-15","Psalm 53:1-6","Proverbs 22:28-29","Isaiah 6:1-7:25","2Corinthians 11:16-33","Psalm 54:1-7","Proverbs 23:1-3","Isaiah 8:1-9:21","2Corinthians 12:1-10","Psalm 55:1-23","Proverbs 23:4-5","Isaiah 10:1-11:16","2Corinthians 12:11-21","Psalm 56:1-13","Proverbs 23:6-8","Isaiah 12:1-14:32","2Corinthians 13:1-14","Psalm 57:1-11","Proverbs 23:9-11","Isaiah 15:1-18:7","Galatians 1:1-24","Psalm 58:1-11","Proverbs 23:12","Isaiah 19:1-21:17","Galatians 2:1-16","Psalm 59:1-17","Proverbs 23:13-14","Isaiah 22:1-24:23","Galatians 2:17-3:9","Psalm 60:1-12","Proverbs 23:15-16","Isaiah 25:1-28:13","Galatians 3:10-22","Psalm 61:1-8","Proverbs 23:17-18","Isaiah 28:14-30:11","Galatians 3:23-4:31","Psalm 62:1-12","Proverbs 23:19-21","Isaiah 30:12-33:12","Galatians 5:1-12","Psalm 63:1-11","Proverbs 23:22","Isaiah 33:13-36:22","Galatians 5:13-26","Psalm 64:1-10","Proverbs 23:23","Isaiah 37:1-38:22","Galatians 6:1-18","Psalm 65:1-13","Proverbs 23:24","Isaiah 39:1-41:16","Ephesians 1:1-23","Psalm 66:1-20","Proverbs 23:25-28","Isaiah 41:17-43:13","Ephesians 2:1-22","Psalm 67:1-7","Proverbs 23:29-35","Isaiah 43:14-45:10","Ephesians 3:1-21","Psalm 68:1-18","Proverbs 24:1-2","Isaiah 45:11-48:11","Ephesians 4:1-16","Psalm 68:19-35","Proverbs 24:3-4","Isaiah 48:12-50:11","Ephesians 4:17-32","Psalm 69:1-18","Proverbs 24:5-6","Isaiah 51:1-53:12","Ephesians 5:1-33","Psalm 69:19-36","Proverbs 24:7","Isaiah 54:1-57:13","Ephesians 6:1-24","Psalm 70:1-5","Proverbs 24:8","Isaiah 57:14-59:21","Philippians 1:1-26","Psalm 71:1-24","Proverbs 24:9-10","Isaiah 60:1-62:5","Philippians 1:27-2:18","Psalm 72:1-20","Proverbs 24:11-12","Isaiah 62:6-65:25","Philippians 2:19-3:4","Psalm 73:1-28","Proverbs 24:13-14","Isaiah 66:1-24","Philippians 3:4-21","Psalm 74:1-23","Proverbs 24:15-16","Jeremiah 1:1-2:30","Philippians 4:1-23","Psalm 75:1-10","Proverbs 24:17-20","Jeremiah 2:31-4:18","Colossians 1:1-20","Psalm 76:1-12","Proverbs 24:21-22","Jeremiah 4:19-6:14","Colossians 1:21-2:7","Psalm 77:1-20","Proverbs 24:23-25","Jeremiah 6:15-8:7","Colossians 2:8-23","Psalm 78:1-31","Proverbs 24:26","Jeremiah 8:8-9:26","Colossians 3:1-17","Psalm 78:32-55","Proverbs 24:27","Jeremiah 10:1-11:23","Colossians 3:18-4:18","Psalm 78:56-72","Proverbs 24:28-29","Jeremiah 12:1-14:10","1Thessalonians 1:1-2:9","Psalm 79:1-13","Proverbs 24:30-34","Jeremiah 14:11-16:15","1Thessalonians 2:10-3:13","Psalm 80:1-19","Proverbs 25:1-5","Jeremiah 16:16-18:23","1Thessalonians 4:1-5:3","Psalm 81:1-16","Proverbs 25:6-7","Jeremiah 19:1-21:14","1Thessalonians 5:4-28","Psalm 82:1-8","Proverbs 25:7-10","Jeremiah 22:1-23:20","2Thessalonians 1:1-12","Psalm 83:1-18","Proverbs 25:11-14","Jeremiah 23:21-25:38","2Thessalonians 2:1-17","Psalm 84:1-12","Proverbs 25:15","Jeremiah 26:1-27:22","2Thessalonians 3:1-18","Psalm 85:1-13","Proverbs 25:16","Jeremiah 28:1-29:32","1Timothy 1:1-20","Psalm 86:1-17","Proverbs 25:17","Jeremiah 30:1-31:26","1Timothy 2:1-15","Psalm 87:1-7","Proverbs 25:18-19","Jeremiah 31:27-32:44","1Timothy 3:1-16","Psalm 88:1-18","Proverbs 25:20-22","Jeremiah 33:1-34:22","1Timothy 4:1-16","Psalm 89:1-13","Proverbs 25:23-24","Jeremiah 35:1-36:32","1Timothy 5:1-25","Psalm 89:14-37","Proverbs 25:25-27","Jeremiah 37:1-38:28","1Timothy 6:1-21","Psalm 89:38-52","Proverbs 25:28","Jeremiah 39:1-41:18","2Timothy 1:1-18","Psalm 90:1-91:16","Proverbs 26:1-2","Jeremiah 42:1-44:23","2Timothy 2:1-21","Psalm 92:1-93:5","Proverbs 26:3-5","Jeremiah 44:24-47:7","2Timothy 2:22-3:17","Psalm 94:1-23","Proverbs 26:6-8","Jeremiah 48:1-49:22","2Timothy 4:1-22","Psalm 95:1-96:13","Proverbs 26:9-12","Jeremiah 49:23-50:46","Titus 1:1-16","Psalm 97:1-98:9","Proverbs 26:13-16","Jeremiah 51:1-53","Titus 2:1-15","Psalm 99:1-9","Proverbs 26:17","Jeremiah 51:54-52:34","Titus 3:1-15","Psalm 100:1-5","Proverbs 26:18-19","Lamentations 1:1-2:19","Philemon 1-25","Psalm 101:1-8","Proverbs 26:20","Lamentations 2:20-3:66","Hebrews 1:1-14","Psalm 102:1-28","Proverbs 26:21-22","Lamentations 4:1-5:22","Hebrews 2:1-18","Psalm 103:1-22","Proverbs 26:23","Ezekiel 1:1-3:15","Hebrews 3:1-19","Psalm 104:1-23","Proverbs 26:24-26","Ezekiel 3:16-6:14","Hebrews 4:1-16","Psalm 104:24-35","Proverbs 26:27","Ezekiel 7:1-9:11","Hebrews 5:1-14","Psalm 105:1-15","Proverbs 26:28","Ezekiel 10:1-11:25","Hebrews 6:1-20","Psalm 105:16-36","Proverbs 27:1-2","Ezekiel 12:1-14:11","Hebrews 7:1-17","Psalm 105:37-45","Proverbs 27:3","Ezekiel 14:12-16:42","Hebrews 7:18-28","Psalm 106:1-12","Proverbs 27:4-6","Ezekiel 16:43-17:24","Hebrews 8:1-13","Psalm 106:13-31","Proverbs 27:7-9","Ezekiel 18:1-19:14","Hebrews 9:1-10","Psalm 106:32-48","Proverbs 27:10","Ezekiel 20:1-49","Hebrews 9:11-28","Psalm 107:1-43","Proverbs 27:11","Ezekiel 21:1-22:31","Hebrews 10:1-17","Psalm 108:1-13","Proverbs 27:12","Ezekiel 23:1-49","Hebrews 10:18-39","Psalm 109:1-31","Proverbs 27:13","Ezekiel 24:1-26:21","Hebrews 11:1-16","Psalm 110:1-7","Proverbs 27:14","Ezekiel 27:1-28:26","Hebrews 11:17-31","Psalm 111:1-10","Proverbs 27:15-16","Ezekiel 29:1-30:26","Hebrews 11:32-12:13","Psalm 112:1-10","Proverbs 27:17","Ezekiel 31:1-32:32","Hebrews 12:14-29","Psalm 113:1-114:8","Proverbs 27:18-20","Ezekiel 33:1-34:31","Hebrews 13:1-25","Psalm 115:1-18","Proverbs 27:21-22","Ezekiel 35:1-36:38","James 1:1-18","Psalm 116:1-19","Proverbs 27:23-27","Ezekiel 37:1-38:23","James 1:19-2:17","Psalm 117:1-2","Proverbs 28:1","Ezekiel 39:1-40:27","James 2:18-3:18","Psalm 118:1-18","Proverbs 28:2","Ezekiel 40:28-41:26","James 4:1-17","Psalm 118:19-29","Proverbs 28:3-5","Ezekiel 42:1-43:27","James 5:1-20","Psalm 119:1-16","Proverbs 28:6-7","Ezekiel 44:1-45:12","1Peter 1:1-12","Psalm 119:17-32","Proverbs 28:8-10","Ezekiel 45:13-46:24","1Peter 1:13-2:10","Psalm 119:33-48","Proverbs 28:11","Ezekiel 47:1-48:35","1Peter 2:11-3:7","Psalm 119:49-64","Proverbs 28:12-13","Daniel 1:1-2:23","1Peter 3:8-4:6","Psalm 119:65-80","Proverbs 28:14","Daniel 2:24-3:30","1Peter 4:7-5:14","Psalm 119:81-96","Proverbs 28:15-16","Daniel 4:1-37","2Peter 1:1-21","Psalm 119:97-112","Proverbs 28:17-18","Daniel 5:1-31","2Peter 2:1-22","Psalm 119:113-128","Proverbs 28:19-20","Daniel 6:1-28","2Peter 3:1-18","Psalm 119:129-152","Proverbs 28:21-22","Daniel 7:1-28","1John 1:1-10","Psalm 119:153-176","Proverbs 28:23-24","Daniel 8:1-27","1John 2:1-17","Psalm 120:1-7","Proverbs 28:25-26","Daniel 9:1-11:1","1John 2:18-3:6","Psalm 121:1-8","Proverbs 28:27-28","Daniel 11:2-35","1John 3:7-24","Psalm 122:1-9","Proverbs 29:1","Daniel 11:36-12:13","1John 4:1-21","Psalm 123:1-4","Proverbs 29:2-4","Hosea 1:1-3:5","1John 5:1-21","Psalm 124:1-8","Proverbs 29:5-8","Hosea 4:1-5:15","2John 1-13","Psalm 125:1-5","Proverbs 29:9-11","Hosea 6:1-9:17","3John 1-15","Psalm 126:1-6","Proverbs 29:12-14","Hosea 10:1-14:9","Jude 1-25","Psalm 127:1-5","Proverbs 29:15-17","Joel 1:1-3:21","Revelation 1:1-20","Psalm 128:1-6","Proverbs 29:18","Amos 1:1-3:15","Revelation 2:1-17","Psalm 129:1-8","Proverbs 29:19-20","Amos 4:1-6:14","Revelation 2:18-3:6","Psalm 130:1-8","Proverbs 29:21-22","Amos 7:1-9:15","Revelation 3:7-22","Psalm 131:1-3","Proverbs 29:23","Obadiah 1-21","Revelation 4:1-11","Psalm 132:1-18","Proverbs 29:24-25","Jonah 1:1-4:11","Revelation 5:1-14","Psalm 133:1-3","Proverbs 29:26-27","Micah 1:1-4:13","Revelation 6:1-17","Psalm 134:1-3","Proverbs 30:1-4","Micah 5:1-7:20","Revelation 7:1-17","Psalm 135:1-21","Proverbs 30:5-6","Nahum 1:1-3:19","Revelation 8:1-13","Psalm 136:1-26","Proverbs 30:7-9","Habakkuk 1:1-3:19","Revelation 9:1-21","Psalm 137:1-9","Proverbs 30:10","Zephaniah 1:1-3:20","Revelation 10:1-11","Psalm 138:1-8","Proverbs 30:11-14","Haggai 1:1-2:23","Revelation 11:1-19","Psalm 139:1-24","Proverbs 30:15-16","Zechariah 1:1-21","Revelation 12:1-17","Psalm 140:1-13","Proverbs 30:17","Zechariah 2:1-3:10","Revelation 13:1-18","Psalm 141:1-10","Proverbs 30:18-20","Zechariah 4:1-5:11","Revelation 14:1-20","Psalm 142:1-7","Proverbs 30:21-23","Zechariah 6:1-7:14","Revelation 15:1-8","Psalm 143:1-12","Proverbs 30:24-28","Zechariah 8:1-23","Revelation 16:1-21","Psalm 144:1-15","Proverbs 30:29-31","Zechariah 9:1-17","Revelation 17:1-18","Psalm 145:1-21","Proverbs 30:32","Zechariah 10:1-11:17","Revelation 18:1-24","Psalm 146:1-10","Proverbs 30:33","Zechariah 12:1-13:9","Revelation 19:1-21","Psalm 147:1-20","Proverbs 31:1-7","Zechariah 14:1-21","Revelation 20:1-15","Psalm 148:1-14","Proverbs 31:8-9","Malachi 1:1-2:17","Revelation 21:1-27","Psalm 149:1-9","Proverbs 31:10-24","Malachi 3:1-4:6","Revelation 22:1-21","Psalm 150:1-6","Proverbs 31:25-31"],"id":"esveverydayinword","abbv":"eedw","name":"Every Day In the Word","info":"Every Day in the Word<br \/><a target='_new' href='http:\/\/www.esv.org\/biblereadingplans'>www.esv.org<\/a>"};

let lang = "se";
let ver = document.getElementById('ver');

let bgbase = "https://www.biblegateway.com/passage/?version=SFB&src=tools&search=";
let yvbase = "https://www.bible.com/sv/bible/160/" ;
let yvbasever = ".SFB98";
let yvbano = "https://www.bible.com/no/bible/29/";
let yvbanover = ".N11BM";
let yvbait = "https://www.bible.com/sv/bible/122/";
let yvbaitver = ".NR06";
ver.addEventListener("change", function(){
  lang = this.value;
  console.log(lang);
  let yvbase = lang === "se" ? "https://www.bible.com/sv/bible/160/" : "https://www.bible.com/no/bible/29/";
  let yvbasever = lang === "se"?".SFB98":".N11BM";
});
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
  switch(lang){
    case "no":
      yvbase = "https://www.bible.com/no/bible/29/";
      yvbasever = ".N11BM";
      v = "<a target='_blank' href='" + yvbase + v + yvbasever + "' >" + str + "</a>";
     break;
    case "it":
      yvbase = "https://www.bible.com/sv/bible/122/";
      yvbasever = ".NR06";
      v = "<a target='_blank' href='" + yvbase + v + yvbasever + "' >" + str + "</a>";
      break;
    case "se":
      yvbase = "https://www.bible.com/sv/bible/160/";
      yvbasever = ".SFB98";
      v = "<a target='_blank' href='" + yvbase + v + yvbasever + "' >" + str + "</a>";
      break;
    case "se15":
      yvbase = "https://www.bible.com/sv/bible/1223/";
      yvbasever = ".SFB15";
      v = "<a target='_blank' href='" + yvbase + v + yvbasever + "' >" + str + "</a>";
      break;
    case "el":
      yvbase = "https://www.bible.com/sv/bible/183/";
      yvbasever = ".TR1894";
      v = "<a target='_blank' href='" + yvbase + v + yvbasever + "' >" + str + "</a>";
      break;
    case "he":
      yvbase = "https://www.bible.com/bible/904/";
      yvbasever = ".WLC";
      v = "<a target='_blank' href='" + yvbase + v + yvbasever + "' >" + str + "</a>";
      break;
    case "en":
      yvbase = "https://www.bible.com/sv/bible/59/";
      yvbasever = ".ESV";
      v = "<a target='_blank' href='" + yvbase + v + yvbasever + "' >" + str + "</a>";
      break;
          case "eni":
      yvbase = "https://www.bible.com/sv/bible/111/";
      yvbasever = ".NIV";
      v = "<a target='_blank' href='" + yvbase + v + yvbasever + "' >" + str + "</a>";
      break;
   
  }
  

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

function getDayOfYear(d) {
  // Copy date so don't modify original
  d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  dayNo = Math.round((d.setHours(23) - new Date(new Date().getYear()+1900, 0, 1, 0, 0, 0))/1000/60/60/24);
  return [d.toLocaleDateString(), dayNo];
}

function daysInFebruary(year) {
    if(year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        // Leap year
        return 29;
    } else {
        // Not a leap year
        return 28;
    }
}

function daysInYear(year) {
    if(year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        // Leap year
        return 366;
    } else {
        // Not a leap year
        return 365;
    }
}

function printRP(year,m=12,arr){
  var txt = '';
  var date = new Date();
  if(year){
      date.setFullYear(year);
  }
  var anno = date.getFullYear();  
  var mese = 12;
  if(m !== 12){
    mese = m;
    date.setMonth(mese)
  }
  var rp = readingplan;
  if(arr){
    rp = arr;
  }
  
  var dd = anno % 4 === 0 && (anno % 100 !== 0 || anno % 400 === 0) ? 366 : 365;
  var bis = dd === 366 ? true : false;
  
    if ( mese === date.getMonth() ) {
      
      txt += months[mese] +'\n';
      
      var mm = new Date(anno, mese+1, 0).getDate();
          for (let j=0; j < mm; j++){
            let g = new Date(anno, mese, j+1);
            let d = new Date(Date.UTC(g.getFullYear(), g.getMonth(), g.getDate()));
            let i  = Math.round((d.setHours(23) - new Date(new Date().getYear()+1900, 0, 1, 0, 0, 0))/1000/60/60/24);
            console.log( '['+i+']'+g.toLocaleDateString() + '\n' );
            
            let e = events.find(ev=> ev.daynr == i);
            txt += g.getDate() + ' ' + days[g.getDay()]+ ' ';
              
              if (bis) {
                  if( i === 60 ) {

                    console.log('...\n');

                    txt += '...\n';

                  } else if ( i > 60 ) {

                    rp[i-2].forEach(r => console.log( r + '\n')); 
                    txt += 'morgon: ' + rp[i-2][0] + ' kväll: ' + rp[i-1][1] + ( typeof rp[i-2][2] != 'undefined' ? ' ps: ' + rp[i-2][2] : '') + '\n';
                    if(typeof e != 'undefined') {

                        txt += e.Title + ' ' + e.Color + ' ' + e.Theme + ' ' + e.Psalms + ' Gt ' + e.OldT + ' Ep ' + e.Letters + ' Ev ' + e.Gospel + ' årgång ' + e.Argang + ': ' + e.HHM + ', ' + e.AFT + '\n';
                    }

                  } else {

                    rp[i-1].forEach(r => console.log( r + '\n')); 
                    txt += 'morgon: ' + rp[i-1][0] + ' kväll: ' + rp[i][1] + ( typeof rp[i-1][2] != 'undefined' ? ' ps: ' + rp[i-1][2] : '') + '\n';
                    if(typeof e != 'undefined') {
                      
                        txt += e.Title + ' ' + e.Color + ' ' + e.Theme + ' ' + e.Psalms + ' Gt ' + e.OldT + ' Ep ' + e.Letters + ' Ev ' + e.Gospel + ' årgång ' + e.Argang + ': ' + e.HHM + ', ' + e.AFT + '\n';
                    }
                  }
              } else {
              
                  rp[i-1].forEach(r => console.log( r + '\n')); 
                    txt += 'morgon: ' + rp[i-1][0] + ' kväll: ' + rp[i-1][1] + ( typeof rp[i-1][2] != 'undefined' ? ' ps: ' + rp[i-1][2] : '') + '\n';
                    if(typeof e != 'undefined') {
                      
                        txt += e.Title + ' ' + e.Color + ' ' + e.Theme + ' ' + e.Psalms + ' Gt ' + e.OldT + ' Ep ' + e.Letters + ' Ev ' + e.Gospel + ' årgång ' + e.Argang + ': ' + e.HHM + ', ' + e.AFT + '\n';
                    }
              }
          }
      
        }
    else {

        for (let x=0; x<12; x++){

          mese = x;
          txt += months[mese] +'\n';
            var mm = new Date(anno, x+1, 0).getDate();
              for (let j=0; j < mm; j++){
                    let g = new Date(anno, mese, j+1);
                    let d = new Date(Date.UTC(g.getFullYear(), g.getMonth(), g.getDate()));
                    let i  = Math.round((d.setHours(23) - new Date(new Date().getYear()+1900, 0, 1, 0, 0, 0))/1000/60/60/24);
                    console.log( '['+i+']'+g.toLocaleDateString() + '\n' );
                    
                    let e = events.find(ev=> ev.daynr == i);
                    txt += g.getDate() + ' ' + days[g.getDay()]+ ' ';
                      
                      if (bis) {
                          if( i === 60 ) {

                            console.log('...\n');

                            txt += '...\n';

                          } else if ( i > 60 ) {

                            rp[i-2].forEach(r => console.log( r + '\n')); 
                            txt += 'morgon: ' + rp[i-2][0] + ' kväll: ' + rp[i-2][1] + ( typeof rp[i-2][2] != 'undefined' ? ' ps: ' + rp[i-2][2] : '') + '\n';
                            if(typeof e != 'undefined') {

                                txt += e.Title + ' ' + e.Color + ' ' + e.Theme + ' ' + e.Psalms + ' Gt ' + e.OldT + ' Ep ' + e.Letters + ' Ev ' + e.Gospel + ' årgång ' + e.Argang + ': ' + e.HHM + ', ' + e.AFT + '\n';
                            }

                          } else {

                            rp[i-1].forEach(r => console.log( r + '\n')); 
                            txt += 'morgon: ' + rp[i-1][0] + ' kväll: ' + rp[i-1][1] + ( typeof rp[i-1][2] != 'undefined' ? ' ps: ' + rp[i-1][2] : '') + '\n';
                            if(typeof e != 'undefined') {
                              
                                txt += e.Title + ' ' + e.Color + ' ' + e.Theme + ' ' + e.Psalms + ' Gt  ' + e.OldT + ' Ep ' + e.Letters + ' Ev ' + e.Gospel + ' årgång ' + e.Argang + ': ' + e.HHM + ', ' + e.AFT + '\n';
                            }
                          }
                      } else {
                      
                          rp[i-1].forEach(r => console.log( r + '\n')); 
                            txt += 'morgon: ' + rp[i-1][0] + ' kväll: ' + rp[i-1][1] + ( typeof rp[i-1][2] != 'undefined' ? ' ps: ' + rp[i-1][2] : '') + '\n';
                            if(typeof e != 'undefined') {
                              
                                txt += e.Title + ' ' + e.Color + ' ' + e.Theme + ' ' + e.Psalms + ' Gt ' + e.OldT + ' Ep ' + e.Letters + ' Ev ' + e.Gospel + ' årgång ' + e.Argang + ': ' + e.HHM + ', ' + e.AFT + '\n';
                            }
                      }
                }
        }
        //       for (let i=0; i<dd; i++){
        //         let g = new Date(anno, 0, i+1);
        //         console.log( '['+(i+1)+']'+g.toLocaleDateString() + '\n' );
        //         txt += g.getDate() + ' ' + months[g.getMonth()]+ ' ';
        //           if (bis) {
                    
        //               if( i === 59 ) {
        //                 console.log('...\n');

        //                 txt += '...\n';

        //               } else if ( i > 59 ) {
        //                 rp[i-1].forEach(r => console.log( r + '\n')); 

        //                 txt += 'morgon: ' + rp[i-1][0] + ' kväll: ' + rp[i-1][1] + ( typeof rp[i-1][2] != 'undefined' ? ' ps: ' + rp[i-1][2] : '') + '\n';

        //               } else {
        //                 rp[i].forEach(r => console.log( r + '\n')); 

        //                 txt += 'morgon: ' + rp[i][0] + ' kväll: ' + rp[i][1] + ( typeof rp[i][2] != 'undefined' ? ' ps: ' + rp[i][2] : '') + '\n';

        //               }
        //           } else {
        //               rp[i].forEach(r => console.log( r + '\n')); 

        //               txt += 'morgon: ' + rp[i][0] + ' kväll: ' + rp[i][1] + ( typeof rp[i][2] != 'undefined' ? ' ps: ' + rp[i][2] : '') + '\n';

        //           }
        //         }
        // }
}
    console.log(bis +' '+ arr + ' '+ mese + ' ' + anno);
    download(txt,'kalender.txt','text');

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


//let choosenYear = prompt('Vill du byta år?', new Date().getFullYear());
let thisYear = new Date().getFullYear();// !== choosenYear ? choosenYear : new Date().getFullYear();
// fix year as number!
thisYear = parseInt(thisYear);

function argng(year) {
  return year % 3 == 2 ? 1 : year % 3 == 0 ? 2 : year % 3 == 1 ? 3 : null;
}
let argang = argng(thisYear);


// Skapar högtider med fast datum
let events = [];
let RP = "";
function createRP(year){
  var RP = [];
  readingplan.forEach((d, index) => {
    let obj = {};
    obj.Dayno = (index + 1);
   // obj.Readings = d.toString();
    d.forEach((r,index) =>{
      
      obj["reading_"+(index*1+1)] = r;
    });
  RP.push(obj);
});
  return RP;
}
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
    'Title': 'S:t Stefanus dag, Annandag Jul',
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
function lngfredag(year) {
  return {
    'Date': palmsndg(year).Date.addDays(5),
    'Title': 'Långfredagen',
    'Color': 'Svart',
    'Theme': 'Korsfäst, död och begraven.',
    'Psalms': 'Psalt 22:2–19',
    'OldT': '',
    'Letters': 'Jes 52:13–53:12',
    'Gospel': 'Joh 18–19',
    'Description': 'fredag före Påsk',
    'Link': '',
    'Prio': 1,
    'Argang': argng(year),
    'HHM': null,
    'AFT': null
  };
}
function paskafton(year) {
  return {
    'Date': lngfredag(year).Date.addDays(1),
    'Title': 'Påskafton',
    'Color': 'Svart',
    'Theme': '',
    'Psalms': 'Klag 3',
    'OldT': '',
    'Letters': '1 Kor 15:1–11',
    'Gospel': '',
    'Description': 'dagen före Påsk',
    'Link': '',
    'Prio': 1,
    'Argang': argng(year),
    'HHM': null,
    'AFT': null
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
  'OldT': 'Dan 9:15-19',
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
    'Theme': 'Guds fortgående verk',
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
  events.push(lngfredag(thisYear));
  events.push(paskafton(thisYear));
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
   if (michaeli(thisYear).Date.getTime() !== trinitatis15(thisYear).Date.getTime()) {
    events.push(trinitatis15(thisYear));
  }
  
  if (michaeli(thisYear).Date.getTime() !== trinitatis16(thisYear).Date.getTime()) {
    events.push(trinitatis16(thisYear));
  }
if (michaeli(thisYear).Date.getTime() !== trinitatis17(thisYear).Date.getTime()) {
    events.push(trinitatis17(thisYear));
  }
  if (michaeli(thisYear).Date.getTime() !== trinitatis18(thisYear).Date.getTime()) {
    events.push(trinitatis18(thisYear));
  }

   if (michaeli(thisYear).Date.getTime() !== trinitatis19(thisYear).Date.getTime()) {
    events.push(trinitatis19(thisYear));
  }
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
  for (let i = 0; i < 12; ++i) {

    $('p#test').append(showMonthYear(uniqueEvents.sortBy(o => [o.time]), i, thisYear));

  }
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
events.push(lngfredag(thisYear));
events.push(paskafton(thisYear));
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
 if (michaeli(thisYear).Date.getTime() !== trinitatis15(thisYear).Date.getTime()) {
    events.push(trinitatis15(thisYear));
  }
 
  if (michaeli(thisYear).Date.getTime() !== trinitatis16(thisYear).Date.getTime()) {
    events.push(trinitatis16(thisYear));
  }
if (michaeli(thisYear).Date.getTime() !== trinitatis17(thisYear).Date.getTime()) {
    events.push(trinitatis17(thisYear));
  }
  if (michaeli(thisYear).Date.getTime() !== trinitatis18(thisYear).Date.getTime()) {
    events.push(trinitatis18(thisYear));
  }
 if (michaeli(thisYear).Date.getTime() !== trinitatis19(thisYear).Date.getTime()) {
    events.push(trinitatis19(thisYear));
  }
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

events = events.map(function (obj) {
  if (typeof obj.Date !== "undefined") {
    obj.daynr = getDayOfYear(obj.Date)[1]
    return obj;
  }

});

sortedEvents = events.sortBy(function (o) {
  return [o.Date];
});

//obj rad1 = events.find(ev => ev.daynr == 1)
//    new Date(Date.UTC(2020,0,363))
//    => 2020-12-28T00:00:00.000Z

// events.filter(o => { return o.OldT.indexOf('2 Mos ') != -1 }).sortBy( o => o.OldT ).forEach(o => console.log( o.OldT + ' ' + o.Title +'\n'));

//events.filter(o => { return o.OldT.includes(' Mos ')}).sortBy( o => o.OldT ).forEach(o => console.log( o.OldT + ' ' + o.Title +'\n')); 

// eller 
//for (b in OT) { events.filter(o => { return o.OldT.indexOf(b) != -1 }).sortBy( o => o.OldT ).forEach(o => console.log( o.OldT + ' ' + o.Title +'\n'));}

// lpp = [];

//for( let i =0; i< 365; i++) { let d = new Date(Date.UTC(2020,0,(i+1))); let kk = events.find(ev => ev.daynr == i+1); let dag = {day:d.toLocaleDateString(), morgon: readingplan[i][0], kväll: readingplan[i][1], ps:readingplan[i][2], kk};  lpp.push(dag);}

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
let btn = document.getElementById('btn');

btn.addEventListener('click', function () {
  
  $('p#test').html('');
  $('#bibelcalender').hide();
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

        if (nymanad.value == '12') {
          for (i = 0; i < 12; ++i) {
            $('p#test').append(showMonthYear(uniqueEvents.sortBy(o => [o.time]), i, start + a));
          }

      }  else {
        $('p#test').append(showMonthYear(uniqueEvents.sortBy(o => [o.time]), nymanad.value, start + a));
      }

    }
  } else if (nyar.value.indexOf(',') !== -1) {
    let aren = nyar.value.split(',');
    for (let b = 0; b < aren.length; ++b) {
      console.log(1 * aren[b]);
      makeKK(1 * aren[b]);
    }
  } else {
    
    makeKK(nyar.value);

    $('p#test').html('');
    if (nymanad.value == '12') {
      for (i = 0; i < 12; ++i) {
        $('p#test').append(showMonthYear(uniqueEvents.sortBy(o => [o.time]), i, nyar.value));
      }

    } else {
      $('p#test').append(showMonthYear(uniqueEvents.sortBy(o => [o.time]), nymanad.value, nyar.value));
    }
  }
  BGLinks.version = "SFB";
  BGLinks.linkVerses();

});

$('#togglecal').on('click', function () {
  $('#bibelcalender').toggle();
});
$('#btn').on('click', function () {
  $('#bibelcalender').hide();
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