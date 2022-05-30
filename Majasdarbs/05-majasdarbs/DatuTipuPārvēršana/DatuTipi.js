// Kads rezultats bus pec datu tipu pārvēršānas
// Rezultatu uzrakstit blakus komentāros



String(123)            //"123"
String(-12.3)       //'-12.3'
String(null)        //'null '
String(undefined)       //'undefined '
String(true)          //'true'
String(false)        //'false'
String(function () {})  //'function () {}'
String({})             //'[object object]'
String({ key: 42 })     //'[object object]'
String([])              //'[]'
String([1, 2])          //'[1,2]'


Number("123")           //123
Number("123.4")        //123.4
Number("123,4")         //nan
Number("")              //0
Number(null)            //0
Number(undefined)       //nan
Number(true)            //1
Number(false)           //0
Number(function () {})  //nan
Number({})              //nan
Number([])              //0
Number([1])             //1
Number([1, 2])          //nan


Boolean("")             //false
Boolean("string")       //true
Boolean("false")        //true
Boolean(0)              //false
Boolean(42)             //true
Boolean(-42)            //true
Boolean(NaN)            //false
Boolean(null)           //false
Boolean(undefined)      //false
Boolean(function () {}) //true
Boolean({})             //true
Boolean({ key: 42 })    //true
Boolean([])             //true
Boolean([1, 2])         //true