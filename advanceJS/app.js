// let a = [1, 2, 3, 4]
// let [val1, val2, , val3] = a
// console.log(val1)
// console.log(val2)
// console.log(val3)


// let obj = {
//     id: 1,
//     name: "ABC"
// }


// let { name, id } = obj
// console.log("name", name)
// console.log("id", id)


// let a = [1, 2, 3]
// let b = a

// b.push("abc")
// console.log(a)



let a = [1, 2, 3]
let b = ["a", "b", "c"]

let c = [...a]
c.push("wert")
console.log(c)
console.log(a)