[1, 2, 3].some(item => {
	return item > 2
})

//普通数组
const arr = [{ age: 3 }, { age: 4 }, { age: 5 }]
arr.some(item => {
	return item.age < 4
}) // true
