// example code
function toggler() {
    let arr = Object.values(arguments);
    // console.log(arr)
    let x = 0;
    return function(){
        console.log(arr[(x++)%arr.length])
    }
}
// toggler(1, 7, 3)
const toggle = toggler(1, 7, 3)

toggle()
// // 1
toggle()
// // 2
toggle()
// // 3