const arr1 = [1, 2, 3, 4, 5, 8, 9]
const arr2 = [5, 6, 7, 8, 9]
const difference = Array.from(
	new Set(
		arr1
			.concat(arr2)
			.filter(v => !new Set(arr1).has(v) || !new Set(arr2).has(v))
	)
)
console.log(difference)
//对象数组
let arr11 = [
	{ name: 'name1', id: 1 },
	{ name: 'name2', id: 2 },
	{ name: 'name3', id: 3 },
]
let arr22 = [
	{ name: 'name1', id: 1 },
	{ name: 'name4', id: 4 },
	{ name: 'name5', id: 5 },
]
let arr3 = arr11.concat(arr22)
let result = arr3.filter(function (v) {
	// 测试一个数组内的所有元素是否都能通过某个指定函数的测试，它返回的是一个 Boolean 类型的值
	return (
		arr11.every(n => JSON.stringify(n) !== JSON.stringify(v)) ||
		arr22.every(n => JSON.stringify(n) !== JSON.stringify(v))
	)
})
console.log(result)
