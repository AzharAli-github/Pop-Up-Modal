var Button = document.querySelector('#Button');
var all = document.querySelector('#all');
var x=true;

Button.addEventListener('click', () => {
    if (x == true)
    {
        alertbox.classList.add('show');
        x = false;
    }
    else
    {
        alertbox.classList.remove('show');
        x=true;
    }
})

var close = document.querySelector('#close');
var y = true;

close.addEventListener('click', () =>{
    if (y == true)
    {
        alertbox.classList.remove('show');
    }
})

// Button.addEventListener('click', ()=>{
//     if (x == true)
//     {
//         alert("Woohoo, you're reading this text in a modal!");
//         x=false;
//     }
//     else{
//         Button.addEventListener('onwindows', ()=>{
        
//         })
//     }
// })