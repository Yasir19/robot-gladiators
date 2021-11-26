// function to generate a random numeric value 
var randomNumber = function(min, max){
    var value = Math.floor(Math.random() *(max - min + 1 ) + min);
    return value;
};
var fightOrSkip = function(){

    //ask player if they'd like to fight or skip using fightOrSkip function
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

     // Enter the conditional recursive function call here!
     if (promptFight === "" || promptFight === null){
         window.alert("You need to provide a valid answer! Please try again.");
         return fightOrSkip();
     }

      // convert promptFight to all lowercase so we can check with less options
      promptFight =promptFight.toLowerCase();
      if (promptFight === 'skip'){

          // confirm player wants to skip
          var confirmSkip =window.confirm("Are you sure you'd like to quit?");

          //if yes (true), Leave fight
          if (confirmSkip) {
              window.alert(playerInfo.name + 'has decided to skip this fight. Goodbye!');

              //subtract money from plaerMoney for skipping  and make sure it will not go into the negative
              playerInfo.money =Math.max(0, playerInfo.money - 10);
              
              //return of the player want to leave
              return true;
          }
        }
        return false
  };
// This creates function named "fight"//
var fight = function(enemy) {
    // keep track of who goes first
    var isPlayerTurn = true;
    //randomly change turn order
    if (Math.random() > 0.5){
        isPlayerTurn = false;
    }

    //repeat and execute as long as the enemy-robot is alive
    while(playerInfo.health>0 && enemy.health>0){
        if (isPlayerTurn){
        //if the player like to fight or skip using fightOrShip function
        if (fightOrSkip()){
        // if true, leave the fight ny braking the lopo 
        break;
    }
 //generate random damage value based on player's attack power
 var damage =randomNumber(playerInfo.attack - 3, playerInfo.attack)
 // remove enemy's health by subtracting the amount we set in the damage variable
  enemy.health = Math.max(0, enemy.health - damage);
 // Log a resulting message to the console so we know that it worked.
  console.log( playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining ");
  //check enemy helth
  if (enemy.health <= 0){
      window.alert(enemy.name + " has died!");
      // award the player 10 dollar
      playerInfo.money=playerInfo.money+10;
      break;
  }else{
      window.alert(enemy.name + " still has " + enemy.health + " health left.");
  }
  //player get attack first 
}else{
 // generate random damage value based on player's attack power
   var damage = randomNumber (enemy.attack -3 , enemy.attack);
   // remove enemy's health by subtracting the amount we set in the damage variable
 playerInfo.health = Math.max(0, playerInfo.health - damage);
 // Log a resulting message "to the console so we know that it worked.
    console.log(`${enemy.name} attacked ${playerInfo.name}. ${playerInfo.name} now has ${playerInfo.health} health remaining `);
 //check playerInfo.health
 if (playerInfo.health <=0 ) {
     window.alert (playerInfo.name + " has died!");
     break;
 }else {
     window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
 }
}
//switch turn order for next round
isPlayerTurn = !isPlayerTurn;
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

  // check localStorage for high score, if it's not there, use 0
    var highScore = localStorage.getItem("highscore")
    if (highScore === null){
        highScore = 0;
    }
  
    //if the player is still alive, player wins!
    if (playerInfo.money > highScore){
        localStorage.setItem("highscore", playerInfo.money);
        localStorage.setItem("name", playerInfo.name);
        alert(playerInfo.name + " now has the high score of " + playerInfo.money + "!");
    }
    else {
        alert(playerInfo.name + " did not beat the high score of " + highScore + ". Maybe next time!");
    }
    //ask the player if they want to play agin
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
   var shopOptionPrompt =window.prompt('Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one 1 for REFILL, 2 for UPGRADE, or 3 for LEAVE.');
   //convert answer from prompt to an actual number
   shopOptionPrompt= parseInt(shopOptionPrompt);
   //use switch option to carry out action
   switch (shopOptionPrompt){
       case 1:
            playerInfo.refillHealth();
           break;
           case 2:
                playerInfo.upgradeAttack();
           break;
           case 3:
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

