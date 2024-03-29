var express = require('express');
var router = express.Router();
var Worker = require('webworker-threads').Worker;

router.get('/', function(req, res, next) {
  // the following represent searches on large search spaces with look-ahead
  /* this commented code was the original used to ensure I was getting good results.
   * below is quick output for consistency in results with PHP
  var result = {};
  result["first"] = /\w*(?=\sbetray\sthe\sfore)/.exec(bigString);
  result["second"] = /\w*(?=\sspongy\slungs\sbestowed)/.exec(bigString);
  result["third"] = /\w*(?=\sjson\sobject\snotation)/.exec(bigString);
  result["fourth"] = /\w*(?=\sshould\sdo\sagain\sfor\ssuch\sa\ssake)/.exec(bigString);
  result["fifth"] = /\w*(?=\sthat\sfalse\sfire)/.exec(bigString);
  result["sixth"] = /\w*(?=\sforced\sthunder\sfrom\shis\sheart)/.exec(bigString);
  result["firstCollection"] = bigString.match(/\w*(?=\sthy)/g);
  result["secondCollection"] = bigString.match(/\w*(?=\sthee)/g);
  result["thirdCollection"] = bigString.match(/\w*(?=\sthine)/g);
  var thyLength = result["firstCollection"].length;
  var thyString = "<br>found " + thyLength + " instances of 'thy'";
  var theeLength = result["secondCollection"].length;
  var theeString = "<br>found " + theeLength + " instances of 'thee'";
  var thineLength = result["thirdCollection"].length;
  var thineString = "<br>found " + thineLength + " instances of 'thine'";
  res.send(JSON.stringify(result) + thyString + theeString + thineString);
  */
  var output = "";
  output += /\w*(?=\sbetray\sthe\sfore)/.exec(bigString) + "<br>";
  output += /\w*(?=\sspongy\slungs\sbestowed)/.exec(bigString) + "<br>";
  output += /\w*(?=\sjson\sobject\snotation)/.exec(bigString) + "<br>";
  output += /\w*(?=\sshould\sdo\sagain\sfor\ssuch\sa\ssake)/.exec(bigString) + "<br>";
  output += /\w*(?=\sthat\sfalse\sfire)/.exec(bigString) + "<br>";
  output += /\w*(?=\sforced\sthunder\sfrom\shis\sheart)/.exec(bigString) + "<br>";
  output += "found " + bigString.match(/\w*(?=\sthy)/g).length + " words preceding 'thy'<br>";
  output += "found " + bigString.match(/\w*(?=\sthee)/g).length + " words preceding 'thee'<br>";
  output += "found " + bigString.match(/\w*(?=\sthine)/g).length + " words preceding 'thine'<br>";
  res.send(output);
});

module.exports = router;
   