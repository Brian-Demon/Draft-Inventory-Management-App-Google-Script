function DNT(){
  let selectedRange = sheet.getSelection().getActiveRange();
  selectedRange.setBackground(DNTColor);
}

function NFS(){
  let selectedRange = sheet.getSelection().getActiveRange();
  selectedRange.setBackground(NFSColor);
}

function PrevOn(){
  let selectedRange = sheet.getSelection().getActiveRange();
  selectedRange.setBackground(prevOnColor);
}

function Special(){
  let selectedRange = sheet.getSelection().getActiveRange();
  selectedRange.setBackground(specialColor);
}

function Reset(){
  let selectedRange = sheet.getSelection().getActiveRange();
  selectedRange.setBackground(resetColor);
}