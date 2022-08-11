
	//普通数组
	const arr1 = [1, 2, 3, 4, 5, 8, 9]
	const arr2 = [5, 6, 7, 8, 9]
	//includes() 方法用来判断一个数组是否包含一个指定的值，如果是返回 true，否则false。
	const result1 = arr1.concat(arr2.filter(v => !arr1.includes(v)))
	console.log(result1)
	//对象数组
	const arr11 = [
		{ name: 'name1', id: 1 },
		{ name: 'name2', id: 2 },
		{ name: 'name3', id: 3 },
	]
	const arr22 = [
		{ name: 'name1', id: 1 },
		{ name: 'name4', id: 4 },
		{ name: 'name5', id: 5 },
	]
	let arr3 = arr11.concat(arr22)
	let result = []
	let obj = []
	//对数组中的每个元素执行一个由您提供的 reducer 函数(升序执行)，将其结果汇总为单个返回值。
	result = arr3.reduce(function (prev, cur, index, arr) {
		obj[cur.id] ? '' : (obj[cur.id] = true && prev.push(cur))
		return prev
	}, [])
	console.log(result)
