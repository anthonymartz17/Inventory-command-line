const { readJSONFile, writeJSONFile } = require("./src/helper");
const {
	addItem,
	seeItem,
	updateItem,
	deleteItem,
	seeInventory,
} = require("./src/inventory-commands");
const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

function showCommands() {
	rl.question(
		`
  Welcome to the Inventory Management System!
  Please select an option:
  1. Add Item
  2. See Item
  3. Update Item
  4. Delete Item
  5. See Inventory
  6. Exit
  `,
		(command) => {
			run(command.trim());
		}
	);
}

function run(command) {
	let inventory = readJSONFile("./data", "inventory.json");

	switch (command) {
		case "1":
			rl.question("Enter the item to add: ", (item) => {
				const updatedInventory = addItem(inventory, item);
				writeJSONFile("./data", "inventory.json", updatedInventory);
				showCommands();
			});
			break;
		case "2":
			rl.question("Enter the ID of the item to see: ", (id) => {
				seeItem(inventory, id);
				showCommands();
			});
			break;
		case "3":
			rl.question("Enter the ID of the item to update: ", (id) => {
				rl.question("Enter the new item: ", (newItem) => {
					updateItem(parseInt(id, 10), newItem);
					showCommands();
				});
			});
			break;
		case "4":
			rl.question("Enter the ID of the item to delete: ", (id) => {
				const updatedInventory = deleteItem(inventory, id);
				writeJSONFile("./data", "inventory.json", updatedInventory);
				showCommands();
			});
			break;
		case "5":
			seeInventory(inventory);
			showCommands();
			break;
		case "6":
			console.log("Exiting the Inventory Management System. Goodbye!");
			rl.close();
			break;
		default:
			console.log("Invalid command. Please try again.");
			showCommands();
			break;
	}
}

showCommands();

rl.on("line", (input) => {
	run(input.trim());
});
