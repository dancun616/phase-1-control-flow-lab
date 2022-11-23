function scuberGreetingForFeet(){
  if (scuberGreetingForFeet > 200){
    result = scuberGreetingForFeet + "Hi am here"
  }else if (scuberGreetingForFeet == 200){
     result = "error try again"
  }
}


function ternaryCheckCity(city) {
  // Write your code here!
  const cityReply= city==='NYC'? "Ok, sounds good." : "No go.";
  return cityReply;
 }
 console.log(ternaryCheckCity('NYC'));
 console.log(ternaryCheckCity('Pittsburgh'));

function switchOnCharmFromTip(tip){
  // Write your code here!
  let tipReply;
  switch(tip) {
    case 'generous':
      return (tipReply=('Thank you so much.'));
    case 'not as generous':
      return(tipReply=('Thank you.'));
    default:
      return(tipReply=('Bye.'));
  }
}
console.log(switchOnCharmFromTip('generous'));
console.log(switchOnCharmFromTip('not as generous'));
console.log(switchOnCharmFromTip('Thank you for everything'));