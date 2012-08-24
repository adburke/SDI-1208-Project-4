// Aaron Burke
// SDI 1208
// Project 4

// String Library
var StringLibrary = function () {
	// Checks for a valid phone number
	// Returns boolean
	var isPhoneNumUS = function (str) {
		var re = /\d{3}-\d{3}-\d{4}/;
		return re.test(str);
	};
	// Checks for a valid email address
	// Returns boolean
	var isEmailAddr = function (str) {
		var re = /^\w+@[\w.\-]+\.[A-Za-z]{2,3}$/;
		return re.test(str);
	};
	// Checks for a valid URL
	// Returns boolean
	var isUrl = function (str) {
		var re = /^(?:http|https):/;
		return re.test(str);
	};
	// Capitalize the first character of each word in a string
	// Returns modified string with the first letter capitalized in each word
	var splitStrUpper = function (str) {
		var split = str.split(" ");
		var result = "";
		for (var i = 0, j = split.length; i < j; i++) {
			var spNew = split[i].replace(split[i].charAt(0),(split[i].charAt(0)).toUpperCase());
			result = result.concat(spNew + " ");
		};
		return result;
	};
	// Changes the separator to a new given separator ex. a,b,c -> a/b/c
	var swapSeparator = function (str,newSep) {
		var re = /\W/g;
		return str.replace(re,newSep);
	};
	
	return {
		"isPhoneNumUS" : isPhoneNumUS,
		"isEmailAddr" : isEmailAddr,
		"isUrl" : isUrl,
		"splitStrUpper" : splitStrUpper,
		"swapSeparator" : swapSeparator

	};
};

// // Number Library
var NumberLibrary = function () {
	// Change a number to use a specific amount of decimal places
	var formatDecimal = function (num,afterDecimal) {
        return Number(num.toFixed(afterDecimal));
    };
    // Checks to see is the number above or below a number is within a certain percent
	var fuzzyNum = function (num,compareNum,percent) {
		var percentage = (num/compareNum) * 100;
		if ((num >= compareNum && percentage >= percent) || (num < compareNum && percentage < percent)) {
			return false;
		} else {
			return true;
		};
	};
	// Input two dates using new Date(yyyy,mm,dd)
	// Output format [Days,Hours,Minutes,Seconds] conversion for each at specific index shown
    var timeBtDates = function (date1,date2) {
		var results = [];
		var difference = (date1 > date2) ? date1.getTime() - date2.getTime() : date2.getTime() - date1.getTime();
		results[3] = difference / 1000;
		results[2] = results[3] / 60;
		results[1] = results[2] / 60;
		results[0] = results[1] / 24;
		return results;
		
    };
    // Changes a string "x" to an integer value x
    var strToNum = function (num) {
		return Number(num);
    };

	return {
		"formatDecimal" : formatDecimal,
		"fuzzyNum" : fuzzyNum,
		"timeBtDates" : timeBtDates,
		"strToNum" : strToNum

	};
};

// Array Library
var ArrayLibrary = function () {
	// Smallest value in array greater than a given number
	// null is returned if the number is not within the range of numbers in the array
	var smValGNumInArray = function (array,num) {
		array.sort(function(a,b){return a-b;});
		if (num >= array[0] && num < array[array.length-1]) {
			array.push(num);
			array.sort(function(a,b){return a-b;});
			var result = array[array.lastIndexOf(num) + 1];
			return result;
		} else {
			return null;
		};
	};
	// Largest value in array less than a given number *My own addition to the list
	// null is returned if the number is not within the range of numbers in the array
	var lrgValLNumInArray = function (array,num) {
		array.sort(function(a,b){return a-b;});
		if (num > array[0] && num <= array[array.length-1]) {
			array.push(num);
			array.sort(function(a,b){return a-b;});
			var result = array[array.indexOf(num) - 1];
			return result;
		} else {
			return null;
		};
	};
	// Add up and total only numbers in an array
	// edited to not use !isNaN because a string number ex. "10" would return as a number not a string
	var totalValNumInArray = function (array) {
		var total = 0;
		for (var i = 0, j = array.length; i < j; i++) {
			if (array[i]/1 === array[i]) {
				total += array[i];
			};
		};
		return total;
	};
	// Sort objects in an array by a specific keys value that each object contains.
	var sortKeyByValInArray = function (array,givenKey) {
		return (array.sort(function(a,b){return a[givenKey] - b[givenKey];}));
	};
	// Finds index of duplicate items in an array *My own addition to the list
	var dupInArray = function (findItem,array) {
		var holdIndex = [], index;
		for (var i = 0, j = array.length; i < j; i++) {
			if (array[i] === findItem) {
				index = array.indexOf(array[i],i);
				holdIndex.push(index);
			};
		};
		return holdIndex;
	};

	return {
		"smValGNumInArray" : smValGNumInArray,
		"lrgValLNumInArray" : lrgValLNumInArray,
		"totalValNumInArray" : totalValNumInArray,
		"sortKeyByValInArray" : sortKeyByValInArray,
		"dupInArray" : dupInArray
	};
};

// Test Area

// Loop speed testing
// using jsperf.com to test speed
// http://jsperf.com/fors-vs-while/10

// String Tests
console.log("String Tests");
var stringLib = StringLibrary();
console.log(stringLib.isPhoneNumUS("256-655-0016"));
console.log(stringLib.isEmailAddr("test@test.com"));
console.log(stringLib.isUrl("http://test.com"));
console.log(stringLib.splitStrUpper("aaron burke testing test"));
console.log(stringLib.swapSeparator("a,b,c","/"));
console.log(" ");

// Number Tests
console.log("Number Tests");
var numberLib = NumberLibrary();
console.log(numberLib.formatDecimal(2.116,2));
console.log(numberLib.fuzzyNum(10,5,50));
console.log(numberLib.fuzzyNum(5,10,50));
var date1 = new Date(2012,9,22);
var date2 = new Date(2012,5,19);
var timeConversion = numberLib.timeBtDates(date1,date2);
console.log("Difference in days: " + timeConversion[0] + ", in hours: " + timeConversion[1]);
console.log(numberLib.strToNum("5678"));
console.log(" ");

// Array Tests
console.log("Array Tests");
var arrayLib = ArrayLibrary();
var numList = [1,5,9,10,12,2,4,8];
console.log(arrayLib.smValGNumInArray(numList,1));
console.log(arrayLib.lrgValLNumInArray(numList,6));
var randomList = [10,"apple","orange",10,20,"10"];
console.log(arrayLib.totalValNumInArray(randomList));
var arrayObjects = [{a:6},{a:1},{a:8},{a:2},{a:3},{a:5},{a:4},{a:7},{b:3},{b:5},{b:1},{b:4},{b:2},{b:6},{c:3},{c:5},{c:1},{c:4},{c:2},{c:6}];
console.log(arrayLib.sortKeyByValInArray(arrayObjects,"a"));
var arrayList = ["Aaron","Angela", 1050, 1050, 1050, "Sarah",1050,30,10];
console.log(arrayLib.dupInArray(1050,arrayList));



