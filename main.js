var numb = Math.floor(100*Math.random()+1);
function grade()
{
  var x = document.getElementById("myguess").value;
  var diff = numb-x;
  var diffabs = Math.abs(diff);
  if(diffabs>0)
  {
    var part2 = "not high enough";
  }
  else
  {
    part2 = "too high";
  }
  if(diffabs<=5)
  {
    var part1 = "hella close, ";
  }
  else if(diffabs <=10)
  {
    part1 = "kinda close, ";
  }
  else if(diffabs <=25)
  {
    part1 = "somewhat close, ";
  }
  else if(diffabs <=50)
  {
    part1 = "not really close, ";
  }
  else
  {
    part1 = "way off, ";
  }
  if(diffabs == 0)
  {
    var y = "dead on!";
  }
  else
  {
    y = part1.concat(part2);
  }
 document.getElementById("stage").innerHTML = y;
}
function halp()
{
  var x = document.getElementById("myguess").value;
  if(x == "")
  {
    var y = "what the hell bro?? you haven't played yet";
  }
  else
  {
    y = "The number was "+numb;
  }
 document.getElementById("stage").innerHTML = y;
}
