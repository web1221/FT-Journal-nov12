export function Journal(title, entry) {
  this.title = title,
  this.entry = entry,
  this.numberOfWords = "";
}

Journal.prototype.getLetters = function() {
  var count = [0,0];
  var text = this.entry.split("");
  for (var i = 0; i < text.length; i++) {
    if (text[i].match(/[^aeiouAEIOU\s]/g)) {
      count[0]++;
    } else if (text[i].match(/[aeiouAEIOU]/g)) {
      count[1]++;
    }
  }
  return count;
};
 
Journal.prototype.getTeaser = function(){
  //return the first sentence of the entry. If the sentence is over 8 words, only display those first 8 words.
  var text = this.entry.split(".");
  var output = [];
  text = text[0];
  text = text.split(" ");
  for (var i = 0; i < 8; i++) {
    if(text[i]) {
      output.push(text[i]);
      console.log(output);
    }
  }
  return output.join(" ")
};
