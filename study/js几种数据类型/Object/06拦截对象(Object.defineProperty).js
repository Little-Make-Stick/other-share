//无法拦截数组的值
let obj = { name: '', age: '', sex: '' },
	defaultName = ['这是姓名默认值1', '这是年龄默认值1', '这是性别默认值1']
Object.keys(obj).forEach(key => {
	Object.defineProperty(obj, key, {
		// 拦截整个object 对象，并通过get获取值，set设置值，vue 2.x的核心就是这个来监听
		get() {
			return defaultName
		},
		set(value) {
			defaultName = value
		},
	})
})

console.log(obj.name) // [ '这是姓名默认值1', '这是年龄默认值1', '这是性别默认值1' ]
console.log(obj.age) // [ '这是姓名默认值1', '这是年龄默认值1', '这是性别默认值1' ]
console.log(obj.sex) // [ '这是姓名默认值1', '这是年龄默认值1', '这是性别默认值1' ]
obj.name = '这是改变值1'
console.log(obj.name) // 这是改变值1
console.log(obj.age) // 这是改变值1
console.log(obj.sex) // 这是改变值1

let objOne = {},
	defaultNameOne = '这是默认值2'
Object.defineProperty(obj, 'name', {
	get() {
		return defaultNameOne
	},
	set(value) {
		defaultNameOne = value
	},
})
console.log(objOne.name) // undefined
objOne.name = '这是改变值2'
console.log(objOne.name) // 这是改变值2
