// Aaron Burke
// SDI 1208
// Project 4

// String Library
var StringLibrary = function () {
	var isPhoneNumUS = function (str) {		// Checks for a valid phone number
		var re = /\d{3}-\d{3}-\d{4}/;
		return re.test(str);		// boolean
	};
	var isEmailAddr = function (str) {		// Checks for a valid email address
		var re = /^\w+@[\w.\-]+\.[A-Za-z]{2,3}$/;
		return re.test(str);		// boolean
	};
	var isUrl = function (str) {		// Checks for a valid URL
		var re = /^(?:http|https):/;
		return re.test(str);		// boolean
	};
	var splitStrUpper = function (str) {		// Capitalize the first character of each word in a string
		var split = str.split(" ");
		var result = "";
		for (var i = 0, j = split.length - 1; i != j; i++){
			var spNew = split[i].replace(split[i].charAt(0),(split[i].charAt(0)).toUpperCase());
			result = result.concat(spNew + " ");
		};
		return result;		// returns the modified string back
	};
	var swapSeparator = function (str,newSep) {		// Changes the separator to a new given separator ex. a,b,c -> a/b/c
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
	var formatDecimal = function (num,afterDecimal) {		// Change a number to use a specific amount of decimal places
        return num.toFixed(afterDecimal);
    };
	var fuzzyNum = function (num1,num2,percent) {		// Checks to see if two numbers are above or below a given percent
		var percentage;
		if(num1 > num2) {
			percentage = (num2/num1)*100;
		} else {
			percentage = (num1/num2)*100;
		};
		return (percentage >= percent) ? true : false;		// True is greater than or equal to : False is less than the given percentage
	};
    var timeBtDates = function (date1,date2) {  // Input two dates using (date(yyyy,mm,dd)).getTime()
		var results = []; 
		var difference = (date1 > date2) ? date1 - date2 : date2 - date1;
		results[3] = difference / 1000;
		results[2] = results[3] / 60;
		results[1] = results[2] / 60;
		results[0] = results[1] / 24;
		return results;  // format [Days,Hours,Minutes,Seconds] conversion for each at specific index shown
		
    };
    var strToNum = function (num){		// Changes a string "42" to an integer value 42
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
	var smValGNumInArray = function (array,num) { // Smallest value in array greater than a given number
		array.sort(function(a,b){return a-b});
		return array[array.indexOf(num) + 1];
	};
	var lrgValLNumInArray = function (array,num) { // Largest value in array less than a given number *My own addition to the list
		array.sort(function(a,b){return a-b});
		return array[array.indexOf(num) - 1];
	};
	var totalValNumInArray = function (array) { // Add up and total only numbers in an array
		array.sort();
		var total = 0;
		for (var i = 0, j = array.length - 1; i != j; i++) {
			if (!isNaN(array[i])) {
				total += array[i];
			} else {
				break;
			};
		};
		return total;
	};
	var sortKeyByValInArray = function (array,key) {  // Sort objects in an array by a specific keys value that each object contains
		var holder = [];
		for(var i =0, j = array.length - 1; i != j; i++){
			for(key in array[i]){
				holder.push(array[i][key]);
			};
		};
		holder.sort(function(a,b){return a-b});
		for(var i =0, j = array.length - 1; i != j; i++){
			for(key in array[i]){
				array[i][key] = holder[i];
			};
		};
		return array;
	};
	var dupInArray = function (findItem,array) { // Finds index of duplicate items in an array *My own addition to the list
		var holdIndex = [], index;
		for (var i = 0, j = array.length - 1; i != j; i++){
			if (array[i] === findItem){
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

// Found test data stating for (var i = 0, j = array.length - 1; i != j; i++) was faster than 
//	for (var i = 0, j = array.length; i < j; i++)
// using jsperf.com to test speed
// http://jsperf.com/fors-vs-while/10

// String Tests
var stringLib = StringLibrary();
console.log(stringLib.isPhoneNumUS("256-655-0016"));
console.log(stringLib.isEmailAddr("test@test.com"));
console.log(stringLib.isUrl("http://test.com"));
console.log(stringLib.splitStrUpper("aaron burke testing test"));
console.log(stringLib.swapSeparator("a,b,c","/"));
console.log(" ");
// Number Tests
var numberLib = NumberLibrary();
console.log(numberLib.formatDecimal(2.112,2));
console.log(numberLib.fuzzyNum(10,9,50));
var date1 = new Date(2012,9,22);
var date2 = new Date(2012,5,19);
var timeConversion = numberLib.timeBtDates(date1.getTime(),date2.getTime());
console.log("Difference in days: " + timeConversion[0] + ", in hours: " + timeConversion[1]);
console.log(numberLib.strToNum("5678"));


console.log(" ");
// Array Tests
var arrayLib = ArrayLibrary();
var numList = [1,5,9,10,12,2,4,8];
console.log(arrayLib.smValGNumInArray(numList,2));
console.log(arrayLib.lrgValLNumInArray(numList,10));
var randomList = [10,"apple","orange",10,20,"n","x",8,"t","r",50,10,10,"apple","orange",10,20];
console.log(arrayLib.totalValNumInArray(randomList));
var arrayObjects = [{a:6},{a:1},{a:3},{a:5},{a:4},{a:7}];
console.log(arrayLib.sortKeyByValInArray(arrayObjects,"a"));
var arrayList = ["Aaron","Angela", 1050, 1050, 1050, "Sarah",1050,30,10];
console.log(arrayLib.dupInArray(1050,arrayList))


