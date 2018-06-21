let arr = ["A", "B", "C", "D", "E"];
let del = [1, 2, 3]
let arr2 = [...arr];
for (let i = 0; i < del.length; i++) {
    let a = arr2.join("")
    a.slice(del[i], del[i] + 1)
    // console.log(del[i] + 1
    console.log(a.slice(del[i], del[i] + 1))
}

