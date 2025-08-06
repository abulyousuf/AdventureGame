// ===========================================
// The Dragon's Quest - Text Adventure Game
// A progression-based learning project
// ===========================================

// Include readline for player input
const readline = require("readline-sync");

// Game state variables
let playerName = "";
let playerHealth = 100; // Starting health
let playerGold = 20; // Starting gold
let currentLocation = "village"; // Starting location
let gameRunning = true; // Game loop control
let inventory = []; // Player's inventory

console.log("=================================");
console.log("       The Dragon's Quest        ");
console.log("=================================");
console.log("\nYour quest: Defeat the dragon in the mountains!");

// Get player's name
playerName = readline.question("\nWhat is your name, brave adventurer? ");
console.log("\nWelcome, " + playerName + "! Your adventure begins now.");
console.log(
  "You start with " + playerHealth + " health and " + playerGold + " gold."
);
