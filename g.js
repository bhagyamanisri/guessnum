var rn=Math.floor(Math.random()*100)+1;
var attempts=0;

document.getElementById('btn').addEventListener('click',function()
{
  var guess=parseInt(document.getElementById('guessInput').value);  
  attempts++;
  if(guess==rn)
  {
   displayMessage("Congratulations!! you gussed the right number in "+attempts+" attempt");
   document.getElementById('btn').disabled=true;
  }
  else if(guess<rn)
  {
    displayMessage("To Low!! try a higher number");
  }
  else{
    displayMessage("To High!! try a lower number");
  }
});
function displayMessage(Message)
{
 document.getElementById('msg').textContent=Message;
}











