function OrganizeBackupBeer(){
  OrganizeRange(extraBeerRowStart,extraAndEventBeerColStart);
  OrganizeRange(eventBeerRowStart,extraAndEventBeerColStart);
  extraBeerRange.setFontSize(10).setVerticalAlignment("middle").setHorizontalAlignment("center").setFontWeight("bold").setWrap(true).setBorder(true, true, true, true, true, true, 'black', SpreadsheetApp.BorderStyle.SOLID);
  eventBeerRange.setFontSize(10).setVerticalAlignment("middle").setHorizontalAlignment("center").setFontWeight("bold").setWrap(true).setBorder(true, true, true, true, true, true, 'black', SpreadsheetApp.BorderStyle.SOLID);
}