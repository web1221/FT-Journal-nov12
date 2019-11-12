
import './styles.css';
import './bootstrap.css';
import { Journal } from './journal.js'

$(document).ready(function() {
  console.log('ready');
  $('form#journalForm').submit(function(event){
    console.log('submitted');
    event.preventDefault();
    var titleInput = $('input#title').val();
    var entryInput = $('textarea#entry').val();
    console.log(titleInput);
    var myJournal = new Journal(titleInput, entryInput);
    var output = myJournal.getLetters();
    console.log(output);

  });
});
