// Following the guide
const addData = document.querySelector("#addData");
const deleteData = document.querySelector("#deleteData");
const dataSize = document.querySelector("#dataSize");

addData.addEventListener("click", () => {
	const addField = document.querySelector("#addField");
	let num = "";
	if(addField.value != "") {
		num = addField.value;
		addQueue(num);
	}
	addField.value = "";
	console.log(queue);
})

deleteData.addEventListener("click", () => {
	deleteQueue();
	console.log(queue);
})

dataSize.addEventListener("click", () => {
	checkSize();
	console.log(size);
})

let arrLength = 5;
let queue = new Array(arrLength).fill(null);
let head = -1;
let tail = -1;
let size = 0;

const addQueue = (data) => {
	// add Queue if only not full
	if (!isFull()) {
		// if it is the start, only increment the head
		if(head === -1) {
			head++;
		}
		// always increment the tail
		tail = (tail + 1) % arrLength;
		queue[tail] = data;
	} else {
		console.log("Queue is Full");
	}
}

const deleteQueue = () => {
	// delete Queue if only not empty
	if (!isEmpty()) {
		queue[head] = null;
		// if it is the last data on Queue, reset
		if (head === tail) {
			head = -1;
			tail = -1;
		} else {
			head = (head + 1) % arrLength;
		}
	} else {
		console.log("Queue is Empty");
	}
}

const isFull = () => {
	if(head === 0 && tail === arrLength - 1) {
		return true;
	} else if (head - tail === 1) {
		return true;
	} else {
		return false;
	}
}

const isEmpty = () => {
	if (head === -1 && tail === -1) {
		return true;
	} else {
		return false;
	}
}

const checkSize = () => {
	if (tail > head) {
		size = tail - head + 1;
	} else if (head === tail && head !== -1) {
		size = 1;
	} else if (head === -1 & tail === -1) {
		size = 0;
	} else {
		size = arrLength - ((tail - head + 1) * -1);
	}
}