function EmptyKegWeights(){
  var ui = SpreadsheetApp.getUi();
  var response = ui.alert('Empty Keg Weights:'
                          + '\r\n\r\n1/2 BBL = 32 lbs'
                          + '\r\n1/4 BBL = 20 lbs'
                          + '\r\n1/6 BBL = 15 lbs'
                          + '\r\n50L     = 28 lbs'
                          + '\r\n30L     = 24 lbs'
                          + '\r\n25L     = 20 lbs'
                          + '\r\n20L     = 15 lbs'
                          + '\r\nPlastic Top 1/2 = 25 lbs'
                          + '\r\nPlastic 30L & 1/6 = 3.5 lbs'
                          + '\r\nPub Keg = 4.6 lbs',
  ui.ButtonSet.OK);
}

function MenuHelp(){
  var ui = SpreadsheetApp.getUi();
  var response = ui.alert('Bar / Brewery'
                          + '\r\n\r\Menu Help'
                          + '\r\n\r\n\r\nStart New Inventory - Moves all Current inventory amounts (column G)'
                          + ' to Last Week Inventory (column H) and resets New Inventory (column A) to prepare for new inventory.'
                          + ' *Be sure to read the promt before clicking YES to begin a new inventory or data may be lost.'
                          + '\r\n\r\nDraft Status - When a beer is selected (highlighted), this option will change the status of that beer'
                          + ' on the draft line up to whatever you select it to be. Selecting RESET will make it default (white).'
                          + '\r\n\r\nEmpty Keg Weights - Shows a list of kegs and their corresponding weight when empty.'
                          + '\r\n\r\nOrganize Backup Beer - Organized all beer in the "Extra Beer" and "Event Beer" section alphabetically'
                          + '\r\n\r\n\r\nCreated by: Brian Matejka (Schaumburg, IL)',
  ui.ButtonSet.OK);
}

function NewInventoryHelp(){
  var ui = SpreadsheetApp.getUi();
  var response = ui.alert('Bar / Brewery'
                          + '\r\n\r\n\r\nHow to start a new inventory:'
                          + '\r\n\r\n1) Ensure you have a paper copy of last weeks Draft Line Up. *DO NOT START NEW INVENTORY OTHERWISE!*'
                          + '\r\n2) Go to the menu bar: Menu->Start New Inventory->Yes'
                          + '\r\n3) Remove kicked beer and move any new beer to replace'
                          + '\r\n4) Update beer draft status in the menu bar after selecting beer on the list: Beerhead Menu->Draft Status'
                          + '\r\n5) Print new copy and start weighing kegs'
                          + '\r\n6) Enter new keg weights in column A (E = Empty Keg / N = New Keg'
                          + '\r\n7) Print new copy of the Draft Line Up for this week after finishing inventory'
                          + '\r\n8) Pour yourself a beer, you earned it   ;)\r\n\r\nCHEERS!'
                          + '\r\n\r\n\r\nCreated by: Brian Matejka (Schaumburg, IL)',
  ui.ButtonSet.OK);
}
