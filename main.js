var numb = Math.floor(100*Math.random()+1);
var b1cnt = 0;
var b3cnt = 0;
var guessmatrix = new Array();
var numbers = new Array();
var n = 0;
var found = false;
function grade()
{
  if((b3cnt == 0)&&(b1cnt <= 9)&&(found==false))
  {
    var alreadytried = false;
    var x1 = document.getElementById("myguess").value;
    for(var j=0;j<numbers.length;j++)
    {
      if(Number(x1) == numbers[j][0])
      {
        alreadytried = true;
      }
    }
    if(x1 != "")
    {
      var x = Number(x1);
    }
    else
    {
      x = NaN;
    }
  if(alreadytried == false)
  {
    if((isNaN(x) == false)&&(x>=1)&&(x<=100))
    {
      b1cnt = b1cnt+1;
      var diff = numb-x;
      var diffabs = Math.abs(diff);
      if(diffabs !=0)
      {
        if(diff>0)
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
       var y = part1.concat(part2);
       var guessesleft = 10-b1cnt;
       document.getElementById("stage").innerHTML = y;
       var guesselem = "Your guess of "+ x +" was "+part2;
       guessmatrix[n] = guesselem;
       numbers[n] = [x,diffabs];
       if(n>0)
       {
         if(numbers[n][1] > numbers[n-1][1])
         {
           var show = "You were even more off this time than last time";
         }
         else if(numbers[n][1] < numbers[n-1][1])
         {
           show = "You're getting closer!";
         }
         else
         {
           show = "Same difference as last time";
         }
       document.getElementById("stage4").innerHTML = show;
       }
       n = n+1;
       var guesstext = "";
       for(var i=0;i<guessmatrix.length;i++)
       {
         guesstext = guesstext+guessmatrix[i]+"    ";
       }
       document.getElementById("stage2").innerHTML = "You have "+guessesleft+" guesses left";
       document.getElementById("stage3").innerHTML = guesstext;
     }
    else
    {
       document.body.style.background = "url('http://hdwallpapers4you.com/wallpaper/broken_screen_kool-aid_beverages_desktop_1600x1200_hd-wallpaper-1117345.jpg')";
       document.body.style.color = "black";
       found = true;
       document.getElementById("stage").innerHTML = "WOO-HOO.. YOU GOT IT!!!!";
       document.getElementById("stage2").innerHTML = "";
       document.getElementById("stage3").innerHTML = "";
       document.getElementById("stage4").innerHTML = "";
    }
   }
   else if(x<1)
   {
     document.getElementById("stage").innerHTML = "bro that was too low.. i said 1 to 100";
   }
   else if(x>100)
   {
     document.getElementById("stage").innerHTML = "bro that was too high.. i said 1 to 100";
   }
   else
   {
     document.getElementById("stage").innerHTML = "bro that was not a number";
   }
  }
  else
  {
    document.getElementById("stage").innerHTML = "bro u already tried that";
  }
 }
 else if(b3cnt==1)
 {
   document.getElementById("stage").innerHTML = "I already told you what the number is.. it was "+numb;
   document.getElementById("stage2").innerHTML = "";
   document.getElementById("stage3").innerHTML = "";
   document.getElementById("stage4").innerHTML = "";


 }
 else if(b1cnt >= 10)
 {
   document.getElementById("stage").innerHTML = "You ran outta guesses sucka.. the number was "+numb;
   document.getElementById("stage2").innerHTML = "";
   document.getElementById("stage3").innerHTML = "";
   document.getElementById("stage4").innerHTML = "";
 }
 else
 {
   $('#body').style('background-image','http://images5.alphacoders.com/307/307180.jpg');
   document.getElementById("stage").innerHTML = "You already got it this time.. click the second button to play again";
   document.getElementById("stage2").innerHTML = "";
   document.getElementById("stage3").innerHTML = "";
   document.getElementById("stage4").innerHTML = "";
 }
}
function halp()
{
  if(b1cnt < 10)
  {
    if(b1cnt == 0)
    {
      var y = "what the hell bro?? you haven't played yet";
    }
    else
    {
      y = "The number was "+numb;
      b3cnt = 1;
      document.getElementById("stage2").innerHTML = "";
    }
    document.getElementById("stage").innerHTML = y;
  }
}
function playsomemore()
{
  location.reload();
}
