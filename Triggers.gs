function onOpen(e){
  // Set up the custom Draft Menus
  setupMenus();
}


function onEdit(e){
  sheet.getRange(4, 4, 50, 4).setBorder(true, true, true, true, true, true, 'black', SpreadsheetApp.BorderStyle.SOLID);
  sheet.getRange(4, 2, 50, 2).setBorder(true, true, true, true, true, true, 'black', SpreadsheetApp.BorderStyle.SOLID_MEDIUM);
  sheet.getRange(4, 2, 50, 1).setBorder(null, null, null, null, null, true, 'black', SpreadsheetApp.BorderStyle.SOLID);
  if (typeof e.value != 'object') {
    e.range.setValue(e.value.toUpperCase());
    e.range.setFontSize(10).setFontWeight("bold").setHorizontalAlignment("center").setWrap(true).setVerticalAlignment("middle");
  }
}
