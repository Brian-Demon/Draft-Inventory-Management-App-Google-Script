function setupMenus(){
  SpreadsheetApp.getUi()
  .createMenu('Beerhead Menu')
  .addItem('Start New Inventory', 'newInventory')
  .addSeparator()
  .addSubMenu(SpreadsheetApp.getUi()
              .createMenu('Draft Status')
              .addItem('Do Not Tap! (DNT)', 'DNT')
              .addItem('Next for Style (#)', 'NFS')
              .addItem('Previously On', 'PrevOn')
              .addItem('Special', 'Special')
              .addItem('RESET', 'Reset'))
  .addSeparator()
  .addItem('Empty Keg Weights', 'EmptyKegWeights')
  .addItem('Organize Backup Beer', 'OrganizeBackupBeer')
  .addSeparator()
  .addSubMenu(SpreadsheetApp.getUi()
              .createMenu('Help')
              .addItem('Beerhead Menu Help', 'BHBMenuHelp')
              //.addItem('TEST', 'testFunction')
              .addItem('New Inventory Help', 'NewInventoryHelp')
              .addItem('Test', 'test'))
  .addToUi();
}