function newInventory(){
  var ui = SpreadsheetApp.getUi();
                                  var response = ui.alert('Be sure to print this page for your records before you start a new inventory'
                                  + '\r\n\r\nBy clicking Yes you will lose all the data here'
                                  + '\r\n\r\nAre you sure you want to start a new inventory?', 
                                  ui.ButtonSet.YES_NO);
  
  if (response == ui.Button.YES) {
    if(sheet.getRange(newInvCheckRow, newInvCountColumn).getValue() == 0){
      var ui = SpreadsheetApp.getUi();
      var response = ui.alert('ERROR!\r\n\r\nLooks like you have already ran a new inventory',
                              ui.ButtonSet.OK);
    } else {
      var ui = SpreadsheetApp.getUi();
      /*
      var response = ui.alert('Please wait as we wipe down the bar...',
                              ui.ButtonSet.OK);
      for(var i = tapListStartingRow; i < tapListEndingRow; i++)
      {
        sheet.getRange(i, LWInvCountColumn).setValue(sheet.getRange(i, nowInvCountColumn).getValue());
        sheet.getRange(i,newInvCountColumn).setValue('');
      }
      */
      // Fill array for transfer
      let tapList = [];
      for( i = 0; i < 50; i++ ){
        let value = sheet.getRange(i + 4, nowInvCountColumn).getValue();
        tapList.push(value);
      }
      // Set new values for Last Week Inventory Column and clear current weights column
      for(var i = 0; i < 50; i++){
        sheet.getRange(i + tapListStartingRow, LWInvCountColumn).setValue(tapList[i]);
      }
      sheet.getRange(tapListStartingRow, newInvCountColumn, tapListEndingRow, 1).setValue('');
    }
  } else {
    return;
  }
}