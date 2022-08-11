//通过字符串+Object 的方式来转化对象为字符串(实际上是调用 .toString() 方法)
'the Math object:' + Math.ceil(3.4) // "the Math object:4"
'the JSON object:' + { name: '曹操' } // "the JSON object:[object Object]"

// 覆盖对象的toString和valueOf方法来自定义对象的类型转换
2 * { valueOf: () => '4' } // 8
'J' + { toString: () => 'ava' } // "Java"

// 当+用在连接字符串时，当一个对象既有toString方法又有valueOf方法时候，JS通过盲目使用valueOf方法来解决这种含糊;
// 对象通过valueOf方法强制转换为数字，通过toString方法强制转换为字符串
'' + { toString: () => 'S', valueOf: () => 'J' } //J
