// This creates function named "fight"//
var playerName = window.prompt("What is your robot's name?");
var playerHealth =100;
var playerAttack= 60;
var playerMoney= 10;
console.log(playerName, playerHealth, playerAttack, playerMoney);

var enemyName ="Roborto";
var enemyHealth=10;
var enemyAttack=12;



var fight =function() {
    window.alert("Welcome to Robot Gladiators");
    var promptFight = window.prompt ("Would you like to FIGHT or SKIP this battel? Enter 'FIGHT' or 'SKIP' to choose." );
 //if the player chose to fight then fight 
   if (promptFight ==="fight" || promptFight ==="FIGHT" || promptFight ==="Fight"){
 //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
  enemyHealth = enemyHealth - playerAttack;
 // Log a resulting message to the console so we know that it worked.
  console.log( playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining ");
  //check enemy helth
  if (enemyHealth <= 0){
      window.alert(enemyName + " has died!");
  }
  else{
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
  }
 // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
   playerHealth = playerHealth - enemyAttack;
 // Log a resulting message "to the console so we know that it worked.
    console.log(`${enemyName} attacked ${playerName}. ${playerName} now has ${playerHealth} health remaining `);
 //check playerhealth
 if (playerName <=0 ) {
     window.alert (playerName + " has died!");
 }
 else {
     window.alert(playerName + " still has " + playerHealth + " health left.");
 }
  // if player chose to skip
}else if (promptFight=== "skip" || promptFight=== "SKIP" || promptFight=== "Skip") {
    //confirm player wnat to skip
    var confirmSkip=window.confirm ("Are you sure you'd like to quit?");
    //if yes (true), leave fight
    if (confirmSkip){
        window.alert(playerName + " has decided to skip this fight. Goodbye!!");
        //subtract money from playerMoney for skipping 
        playerMoney= playerMoney - 5;
    }
      // if no (false), ask question again by running fight() again
      else {
          fight();
      }
    window.alert(playerName + " Has chosen to skip the fight!");
} else{
    window.alert("You need to choose a valid Option. Try again!")
}
};
fight();


console.log("the logs a string");
//this will do math and log 20
console.log(10+10);
// what is this?
console.log("our robot's name is " + playerName );
