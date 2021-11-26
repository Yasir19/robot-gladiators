// function to generate a random numeric value 
var randomNumber = function(min, max){
    var value = Math.floor(Math.random() *(max - min + 1 ) + min);
    return value;
};

// This creates function named "fight"//
var fight =function(enemy) {
    //repeat and execute as long as the enemy-robot is alive
    while(playerInfo.health>0 && enemy.health>0){
    var promptFight = window.prompt ("Would you like to FIGHT or SKIP this battel? Enter 'FIGHT' or 'SKIP' to choose." );
    // if player chose to skip
    if (promptFight=== "skip" || promptFight=== "SKIP" || promptFight=== "Skip") {
        //confirm player wnat to skip
        var confirmSkip=window.confirm ("Are you sure you'd like to quit?");
        //if yes (true), leave fight
        if (confirmSkip){
            window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!!");
            //subtract money from playerInfo.attack for skipping 
            playerInfo.attack= Math.max(0, playerInfo.attack -5);
            console.log("playerInfo.attack", playerInfo.attack);
            break;
        }
    }
 //generate random damage value based on player's attack power
 var damage =randomNumber(playerInfo.attack - 3, playerInfo.attack)
  enemy.health = Math.max(0, enemy.health - damage);
 // Log a resulting message to the console so we know that it worked.
  console.log( playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining ");
  //check enemy helth
  if (enemy.health <= 0){
      window.alert(enemy.name + " has died!");
      playerInfo.attack=playerInfo.attack+10;
      break;
  }
  else{
      window.alert(enemy.name + " still has " + enemy.health + " health left.");
  }
 // generate random damage value based on player's attack power
   var damage = randomNumber (enemy.attack -3 , enemy.attack);
 playerInfo.health = Math.max(0, playerInfo.health - damage);
 // Log a resulting message "to the console so we know that it worked.
    console.log(`${enemy.name} attacked ${playerInfo.name}. ${playerInfo.name} now has ${playerInfo.health} health remaining `);
 //check playerInfo.health
 if (playerInfo.health <=0 ) {
     window.alert (playerInfo.name + " has died!");
     break;
 }
 else {
     window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
 }
}
};


//function to start a new game
var startGame = function(){
    // rest player status
    playerInfo.reset()
for(var i=0; i< enemyInfo.length;  i++){
    //if the palyer is still alive and keep fighting 
    if (playerInfo.health > 0){
          // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
    window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));
    // pick new enemy to fight based on the index of the enemy.Names array
    var pickedEnemyObj = enemyInfo[i];
    // reset enemy.health before starting new fight
    pickedEnemyObj.health = randomNumber(40, 60);
    // pass the pickedenemy.Name variable's value into the fight function, where it will assume the value of the enemy.Name parameter
    fight(pickedEnemyObj);
    // if we're not at the last enemy in the array 
    if (playerInfo.health>0 && i < enemyInfo.length -1){
          // ask if player wants to use the store before next round
          var storeConfirm =window.confirm("The fight is over, Visit the store before the next round?");
          //if yes, take them to the store () function
          if (storeConfirm) {
              shop();
          }
    }
    }
else {
    window.alert('You have lost your robot in battle! Game Over');
    break;
}
}
 // after the loop ends, player is either out of health or enemies to fight, so run the endGame function
endGame();
};

var endGame = function(){
    window.alert("the game now has ended. let's see how you did!");
    //if the player is still alive, player wins!
    if (playerInfo.health > 0){
        window.alert("Great job, you've survived the game! You mow have a score of" + playerInfo.attack + ".");
    }
    else {
        window.alert("You've Lost your robot in battle.");
    }
    var playAgainConfirm =window.confirm("Would you like to play again?");
    if (playAgainConfirm){
        //restart the game
        startGame();
    }
    else {
        window.alert("thank you for playing Robot Gladiators! Come back soon!");
    }
};
var shop =function(){
   // ask the player what they'd like to do 
   var shopOptionPrompt =window.prompt("would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? please enter one 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice");
   //use switch option to carry out action
   switch (shopOptionPrompt){
       case "refill":
        case "REFILL":
            playerInfo.refillHealth();
           break;
           case "upgrade":
            case "UPGRADE":
                playerInfo.upgradeAttack();
           break;
           case "leave":
            case "LEAVE":
               window.alert("Leaving the store");
               //do nothing, so function will end 
               break;
               default:
                window.alert("You did not pick a valid option. Try again.");
                //call shop() again to force player to pick a valid option
                shop();
                break;
        
        }
        // Start enemies at a random health value between 40 and 60

        // Start enemies with a random attack value between 10 and 14
        
        // Make attack damage random, using the robot's attack value as an upper limit (for example, if the player's attack is 10, their damage range is 7–10)

};
        // function to set name 
        var getPlayerName = function(){
            var name = "";
            while (name === "" || name === null ) {
                name = prompt ("What is your robot's name?");
            }
            console.log ("Your robot's name is" + name);
            return name;
        };
// player info
var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function(){
        this.health=100;
        this.attack=10;
        this.money=10;
    },
    refillHealth: function(){
        if (this.money>=7){
            window.alert("Refilling player's health by 20 for 7 dollars");
        this.health+=20;
        this.money-=7;
        }else{
            window.alert("You don't have enough money!");
        }
    },
    upgradeAttack: function(){
        if (this.money>=10){
            window.alert("Upgrading player's attack power by 6 for 10 dollors ")
        this.attack +=6;
        this.money -=10;
        }else{
            window.alert("You don't have enough money!");  
        }
    }

};

console.log(playerInfo.name, playerInfo.health, playerInfo.attack, playerInfo.attack);
// enemy information
var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber (10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
];

    console.log(enemyInfo);
    console.log(enemyInfo[0]);
    console.log(enemyInfo[0].name);
    console.log(enemyInfo[0]['attack']);

//start the game when the page is loads
startGame();

