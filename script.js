
let buttons = document.querySelectorAll('.btn');
let screen = document.getElementById("working");
let clear = document.getElementById("clear");
let remove = document.getElementById("backspace")
let add = document.getElementById("plus")
let equals = document.getElementById("data-equals")

buttons.forEach(el => {
    el.addEventListener("click", (e) => {
       
        // console.log('button', e.target.id)
        screen.innerHTML += e.target.id;
        // console.log(buttons.length)
        if (e.target.id.includes('.')) {
        //    return = true
         }
    });
}) 
clear.addEventListener("click", (e) => {
    screen.innerHTML = '';
})
// remove.addEventListener("click", (e) => {
//     // screen.innerHTML.slice(0, -1)
//     // console.log(screen.value)
//     //  screen.innerHTML = id.value.slice(0, -1);
//     // remove = documeent.buttons.value.slice(0, length-1);
//     // screen.innerHTML = remove;
//     screen.innerHTML = e.target.id.slice(0, -1)
// })
remove.addEventListener("click", (e) => {
    screen.innerHTML = e.target.id.slice(0, -1)
})
