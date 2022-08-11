	//普通数组
	const arr1 = [1, 2, 3, 4, 5, 8, 9]
	const arr2 = [5, 6, 7, 8, 9]
	//filter()过滤
	const intersection = arr1.filter(function (val) {
		//indexOf()返回某个指定的字符串值在字符串中首次出现的位置
		return arr2.indexOf(val) > -1
	})
	console.log(intersection)

	//对象数组
	const arr11 = [
		{ name: 'name1', id: 1 },
		{ name: 'name2', id: 2 },
		{ name: 'name3', id: 3 },
		{ name: 'name5', id: 5 },
	]
	const arr22 = [
		{ name: 'name1', id: 1 },
		{ name: 'name2', id: 2 },
		{ name: 'name3', id: 3 },
		{ name: 'name4', id: 4 },
		{ name: 'name5', id: 5 },
	]
	const result = arr22.filter(function (v) {
    //some() 是否至少有1个满足特定条件的结果 返回一个布尔值
		//JSON.stringify()  JavaScript 对象转换为字符串。
		return arr11.some(n => JSON.stringify(n) === JSON.stringify(v))
	})
	console.log(result)
