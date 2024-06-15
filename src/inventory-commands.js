const readline = require("readline");

const { nanoid } = require("nanoid");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

function addItem(inventory, item) {
	const itemArray = item.split(" ");
	const newItem = {
		id: nanoid(4),
		name: itemArray[0],
		priceInCents: Number(itemArray[1]),
		inStock: itemArray[2],
	};
	inventory.push(newItem);
	console.log(
		`Item '${newItem.name} ${newItem.priceInCents} ${newItem.inStock}'added to the inventory.`
	);
	return inventory;
}

function seeItem(inventory, id) {
	const item = inventory.find((ele) => ele.id === id);
	if (item) {
		console.log(`Details: ${item.name} 2${item.priceInCents} ${item.inStock}`);
	} else {
		console.log("Item not found.");
	}
}

function updateItem(inventory, item) {
	if (index >= 0 && index < inventory.length) {
		console.log(`Item '${inventory[index]}' updated to '${newItem}'.`);
		inventory[index] = newItem;
	} else {
		console.log("Item not found.");
	}
}

function deleteItem(inventory, id) {
	const itemFound = inventory.find((ele) => ele.id == id);
	console.log(inventory, "k hay");
	if (itemFound) {
		inventory = inventory.filter((ele) => ele.id != id);
		console.log(`Item '${itemFound.name}' deleted from the inventory.`);
		return inventory;
	} else {
		console.log("Item not found.");
	}
}

function seeInventory(inventory) {
	let table = `Name | Price | In Stock \n\n`;
	if (inventory.length > 0) {
		inventory.forEach((item) => {
			table += `${item.name} --- ${item.priceInCents} --- ${item.inStock}\n`;
		});
		console.log(table);
	} else {
		console.log("Inventory is empty.");
	}
}

module.exports = {
	addItem,
	seeItem,
	updateItem,
	deleteItem,
	seeInventory,
};
