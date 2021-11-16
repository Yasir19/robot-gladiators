// This creates function named "fight"//
var playerName = window.prompt("What is your robot's name?");
var playerHealth =100;
var playerAttack= 10;
var playerMoney= 10;
console.log(playerName, playerHealth, playerAttack, playerMoney);

var enemyNames =["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth=10;
var enemyAttack=12;

console.log(enemyNames.length);
for(var i=0; i< enemyNames.length; i++)
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index")




var fight =function(enemyName) {
    //repeat and execute as long as the enemy-robot is alive
    while(playerHealth>0 && enemyHealth>0){
    var promptFight = window.prompt ("Would you like to FIGHT or SKIP this battel? Enter 'FIGHT' or 'SKIP' to choose." );
    // if player chose to skip
    if (promptFight=== "skip" || promptFight=== "SKIP" || promptFight=== "Skip") {
        //confirm player wnat to skip
        var confirmSkip=window.confirm ("Are you sure you'd like to quit?");
        //if yes (true), leave fight
        if (confirmSkip){
            window.alert(playerName + " has decided to skip this fight. Goodbye!!");
            //subtract money from playerMoney for skipping 
            playerMoney= playerMoney - 5;
            console.log("playerMoney", playerMoney);
            break;
        }
        }
 //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
  enemyHealth = enemyHealth - playerAttack;
 // Log a resulting message to the console so we know that it worked.
  console.log( playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining ");
  //check enemy helth
  if (enemyHealth <= 0){
      window.alert(enemyName + " has died!");
      playerMoney=playerMoney+10;
      break;
  }
  else{
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
  }
 // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
   playerHealth = playerHealth - enemyAttack;
 // Log a resulting message "to the console so we know that it worked.
    console.log(`${enemyName} attacked ${playerName}. ${playerName} now has ${playerHealth} health remaining `);
 //check playerhealth
 if (playerHealth <=0 ) {
     window.alert (playerName + " has died!");
     break;
 }
 else {
     window.alert(playerName + " still has " + playerHealth + " health left.");
 }
    }
};
for(var i=0; i< enemyNames.length;  i++){
    var pickedEnemyName=enemyNames[i];
    enemyHealth= 50;
    fight(enemyNames[i]);
}


