function OrganizeRange(row, column){
  var range = sheet.getRange(row, column, 5, 5);
  var values = range.getValues();
  
  var flatValues = values.flat();
  var flatBackgrounds = range.getBackgrounds().flat();
  var mappedValues = flatValues.map(function (value, index) {
    sheet.getRange(extraBeerRowEnd, extraAndEventBeerColStart, 5, 5).setFontSize(10).setFontWeight("bold").setHorizontalAlignment("center").setWrap(true).setVerticalAlignment("middle");;
    sheet.getRange(eventBeerRowEnd, extraAndEventBeerColStart, 5, 5).setFontSize(10).setFontWeight("bold").setHorizontalAlignment("center").setWrap(true).setVerticalAlignment("middle");;
    return [value, flatBackgrounds[index]];
  });
  
  var sortedArray = mappedValues.sort(function(a, b) {
    if (a[0] === "") return 1;
    if (b[0] === "") return -1;
    if (a[0] === b[0]) return 0;
    return a[0] < b[0] ? -1 : 1;
  });
  
  var sortedMatrix = [];
  var sortedBackgrounds = [];
  
  for(i = 0; i < 5; i++) {
    var start = i*5;
    var newRow = sortedArray.slice(start, start+5);
//    Logger.log(newRow);
  
    sortedMatrix.push(newRow.map(x => x[0]));
    sortedBackgrounds.push(newRow.map(x => x[1]));
  }
  range.setValues(sortedMatrix);
  range.setBackgrounds(sortedBackgrounds);
}