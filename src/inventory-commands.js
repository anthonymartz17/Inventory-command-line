const chalk = require("chalk");
const { nanoid } = require('nanoid');

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
	console.table(inventory)
	return inventory;
}

function seeItem(inventory, id) {
	const item = inventory.find((ele) => ele.id === id);
	if (item) {
		console.log(`Details of item : ${item.id}`);
		console.table(item)
	} else {
		console.log("Item not found.");
	}
}

function updateItem(inventory, item) {
	const id = item.find((ele) => ele.split("=")[0] === "id").split("=")[1];
	const idx = inventory.findIndex((ele) => ele.id === id);

	if (idx >= 0) {
		item.forEach((ele) => {
			const [key, value] = ele.split("=");
			inventory[idx][key] = value;
			console.log(`Item '${id}' updated.`);
			console.table(inventory[idx])
		});
		return inventory;
	} else {
		console.log("Item not found.");
	}
}

function deleteItem(inventory, id) {
	const itemFound = inventory.find((ele) => ele.id == id);
	if (itemFound) {
		inventory = inventory.filter((ele) => ele.id != id);
		console.log(`Item successfully deleted.`);
		console.table(itemFound);
		return inventory;
	} else {
		console.log("Item not found.");
	}
}

function seeInventory(inventory) {
	if (inventory.length > 0) {
		console.table(inventory);
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
