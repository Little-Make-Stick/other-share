let obj = { name: '', age: '', sex: '' }
let handler = {
	get(target, key, receiver) {
		console.log('get', key)
		return Reflect.get(target, key, receiver)
	},
	set(target, key, value, receiver) {
		console.log('set', key, value) // set name 李四  // set age 24
		return Reflect.set(target, key, value, receiver)
	},
}
let proxy = new Proxy(obj, handler)
proxy.name = '李四'
proxy.age = 24
// defineProterty和proxy的对比：
// 1.defineProterty是es5的标准,proxy是es6的标准;
// 2.proxy可以监听到数组索引赋值,改变数组长度的变化;
// 3.proxy是监听对象,不用深层遍历,defineProterty是监听属性;
// 4.利用defineProterty实现双向数据绑定(vue2.x采用的核心)
