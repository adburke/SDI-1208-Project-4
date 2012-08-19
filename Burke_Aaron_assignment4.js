// Aaron Burke
// SDI 1208
// Project 4

// Phone number
// regex /\d{3}-\d{3}-\d{4}

// String Library
var stringLibrary = function () {
	return {

	};
};

// Number Library
var numberLibrary = function () {
	return {

	};
};

// Array Library
var arrayLibrary = function () {
	var dupInArray = function (findItem,array) {
		var holdIndex = [], index;
		for (var i = 0; i < array.length; i++){
			if (array[i] === findItem){
				index = array.indexOf(array[i],i);
				holdIndex.push(index);
			};
		};
		return holdIndex;
	};

	return {
		"dupInArray" : dupInArray

	};
};

// Test Area

// String Tests

// Number Tests

// Array Tests
var arrayList = ["Aaron","Angela", 1050, 1050, 1050, "Sarah",1050];
var arrayLib = arrayLibrary();
console.log(arrayLib.dupInArray(1050,arrayList));

