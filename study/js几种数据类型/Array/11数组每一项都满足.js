[1, 2, 3].every(item => {
	return item > 2
})

//普通数组
const arr = [{ age: 3 }, { age: 4 }, { age: 5 }]
arr.every(item => {
	return item.age > 2
}) // true
