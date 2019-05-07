var _ = {};

/**************************************
 *************** ARRAYS ***************
 **************************************/

 // Returns the first element of an array.
_.first = function(array) {
  return array[0] // first element of an array
};

 // Returns the first n number of elements in an array which will
 // create a slice of the array with n elements taken from the beginning.
_.take = function(array, n = 1) {
	return array.slice([0], n)// Place your solution here
};

// Returns the very last element of the array.
_.last = function(array) {
	return array[array.length - 1]// Place your solution here
};

// Returns the last n number of elements in the array which will
// create a slice of array with n elements taken from the end.
_.takeRight = function(array, n = 1) {
	return array.slice([array.length - n])// Place your solution here
};

// Returns a new array with all falsey values removed.
// falsy values: false, null, 0, "", undefined, and NaN.
// Example:
// _.compact([0, 1, false, 2, '', 3]);
// → [1, 2, 3]
_.compact = function(array) {
	//return array.filter(el => el !== falsey ? el : null); // first approach
	return array.filter(el => el);
};

// Returns a new array of elements in the first argument, but
// excludes any element found in the second argument.
// Example:
// _.difference([1, 2, 3], [4, 2]);
// → [1, 3]
_.difference = function(arrayOne, arrayTwo) {
	return arrayOne.filter(el => (!arrayTwo.includes(el)));
};

// Returns element with the minimum
// value from the array.
_.min = function(array) {
	return Math.min(...array)
};

// Returns element with the maximum
// value from array.
_.max = function(array) {
	return Math.max(...array)
};

// Returns the index of the first matched element or
// -1 if there is no match in the array
_.indexOf = function(array, el) {
	return array.indexOf(el)
};

/*************** BONUS ***************/
// Retuns a new array with the elements in shuffled order.
_.shuffle = function(array) {
	// Place your solution here
};

/**************************************
************* COLLECTIONS *************
**************************************/
// Returns the length of a collection.
_.size = function(collection) {
	return Object.values(collection).length;
};

// Iterates on each element of a collection,
// calls the callback on the element and
// then returns the original collection in its
// original state
_.forEach = function(collection, callback) {
	return Object.values(collection).forEach(el => callback(el))
};

// Iterates on each element of a collection and
// then returns a new array with the results of
// invoking the callback function on each element.
_.map = function(collection, callback) {
	return Object.values(collection).map(el => callback(el))
};

// Returns a new collection with only the elements
// where there result of the callback are true.
_.filter = function(collection, callback) {
	return Object.values(collection).filter(el => callback(el))
};

// Returns a new collection with only the elements
// that return false when the callback is invoked
_.reject = function(collection, callback) {
	return Object.values(collection).filter(nums => !callback(nums));
};

/*************** BONUS ***************/
 // Returns n number of random elements from the collection.
_.sample = function(collection, n) {
	// Place your solution here
};

module.exports = _;
