// Set构造函数接收一个数组内部去重 使用Array的from方法把Set转换为数组返回
console.log(Array.from(new Set([1, 2, 3, 3, 4, 4]))) //[1,2,3,4]
// Set构造函数接收一个数组内部去重 三点运算符将set转换为数组返回（es6语法）
console.log([...new Set([1, 2, 3, 3, 4, 4])]) //[1,2,3,4]

// forEach()和indexOf() 说明: 本质是双重遍历, 效率差些
/*
    接收一个数组为参数,返回一个去重的数组
  */
function unique(array) {
	// 定义一个空数组
	const resultArr = []
	// 循环遍历未去重的数组
	array.forEach(item => {
		// 判断resultArr中是否有该元素,没有才添加
		if (arr.indexOf(item) === -1) {
			resultArr.push(item)
		}
	})
	// 返回
	return resultArr
}

// 利用forEach() + 对象容器 说明: 只需一重遍历, 效率高些
/*
    接收一个数组为参数,返回一个去重的数组
  */
function unique(array) {
	// 定义要返回的数组
	const resultArr = []
	// 定义一个对象
	const obj = {}
	// 循环遍历未去重的数组
	array.forEach(item => {
		// 如果obj中没有改元素属性
		if (!obj.hasOwnProperty(item)) {
			// 没有就为obj添加这个属性
			obj[item] = true
			resultArr.push(item)
		}
	})
	return resultArr
}

//对象数组
const arr = [
	{ name: 'name1', id: 1 },
	{ name: 'name2', id: 2 },
	{ name: 'name3', id: 3 },
	{ name: 'name1', id: 1 },
	{ name: 'name4', id: 4 },
	{ name: 'name5', id: 5 },
]
const result = []
arr.forEach(item => {
	!result.some(v => JSON.stringify(v) === JSON.stringify(item)) &&
		result.push(item)
})
console.log(result)
