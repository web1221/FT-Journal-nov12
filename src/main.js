
import './styles.css';
import './bootstrap.css';
import { Journal } from './journal.js';

$(document).ready(function() {
  $('form#journalForm').submit(function(event){
    event.preventDefault();
    var titleInput = $('input#title').val();
    var entryInput = $('textarea#entry').val();
    var myJournal = new Journal(titleInput, entryInput);
    var output = myJournal.getLetters();
    var teaserOutput = myJournal.getTeaser();
    console.log(teaserOutput);
  });
});
