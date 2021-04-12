var DNTColor = "#f4cccc";
var NFSColor = "#d9ead3";
var prevOnColor = "#cfe2f3";
var specialColor = "#d9d2e9";
var resetColor = "White";
var newInvCheckRow = 72;
var tapListStartingRow = 4;
var tapListEndingRow = 54;
var newInvCountColumn = 2;
var nowInvCountColumn = 9;
var LWInvCountColumn = 10;

var extraAndEventBeerColStart = 3;
var extraBeerRowStart = 57;
var extraBeerRowEnd = extraBeerRowStart + 4;
var eventBeerRowStart = 65;
var eventBeerRowEnd = eventBeerRowStart + 4;


const ss = SpreadsheetApp.getActiveSpreadsheet()
const sheet = ss.getActiveSheet();

var extraBeerRange = sheet.getRange(extraBeerRowStart, extraAndEventBeerColStart, 5, 5);
var eventBeerRange = sheet.getRange(eventBeerRowStart, extraAndEventBeerColStart, 5, 5);