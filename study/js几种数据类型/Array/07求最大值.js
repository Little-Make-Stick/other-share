Math.max(...[1, 2, 3, 4]) //4
Math.max
	.apply(this, [1, 2, 3, 4]) //4
	[(1, 2, 3, 4)].reduce((prev, cur, curIndex, arr) => {
		return Math.max(prev, cur)
	}, 0) //4
//对象数组
const arr = [
	{ id: 1, name: 'jack' },
	{ id: 2, name: 'may' },
	{ id: 3, name: 'shawn' },
	{ id: 4, name: 'tony' },
]
const arr1 = Math.max.apply(
	Math,
	arr.map(item => {
		return item.id
	})
)
const arr2 = arr.sort((a, b) => {
	return b.id - a.id
})[0].id
console.log(arr1) // 4
console.log(arr2) // 4
