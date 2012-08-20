// Aaron Burke
// SDI 1208
// Project 4

// String Library
var stringLibrary = function () {
	var isPhoneNumUS = function (str) {
		var re = /\d{3}-\d{3}-\d{4}/;
		var result = re.test(str);
		return result;
	};
	var isEmailAddr = function (str) {
		var re = /^\w+@[\w.\-]+\.[A-Za-z]{2,3}$/;
		var result = re.test(str);
		return result;
	};
	var isUrl = function (str) {
		var re = /^(?:http|https):\/\/[\w\-_]+(?:\.[\w\-_]+)+[\w\-.,@?\^=%&:\/~\\+#]*$/;
		var result = re.test(str);
		return result;
	};
	var splitStrUpper = function (str) {
		var split = str.split(" ");
		var result = "";
		for (var i = 0, j = split.length; i < j; i++){
			var spNew = split[i].replace(split[i].charAt(0),(split[i].charAt(0)).toUpperCase());
			result = result.concat(spNew + " ");
		};
		return result;
	};
	var swapSeparator = function (str,newSep) {
		var result = str.replace(/\W/g,newSep);
		return result;
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
var numberLibrary = function () {
	var formatDecimal = function () {};
	var fuzzyNum = function () {};
	var strToNum = function () {};
	return {
		"formatDecimal" : formatDecimal,
		"fuzzyNum" : fuzzyNum,
		"timeBtDates" : timeBtDates,
		"strToNum" : strToNum

	};
};

// Array Library
var arrayLibrary = function () {
	var dupInArray = function (findItem,array) {
		var holdIndex = [], index;
		for (var i = 0, j = array.length; i < j; i++){
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
var stringLib = stringLibrary();
console.log(stringLib.isPhoneNumUS("256-655-0016"));
console.log(stringLib.isEmailAddr("test@test.com"));
console.log(stringLib.isUrl("http://test.com"));
console.log(stringLib.splitStrUpper("aaron burke testing test"));
console.log(stringLib.swapSeparator("a,b,c","/"));
// Number Tests

// Array Tests
var arrayList = ["Aaron","Angela", 1050, 1050, 1050, "Sarah",1050];
var arrayLib = arrayLibrary();
console.log(arrayLib.dupInArray(1050,arrayList));


