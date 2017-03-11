// window.onload = function () {
//     const input = document.getElementById('input');



//     function getPlaceHolder(e) {
//         var input = e.target;
//         var placeholder = e.target.placeholder;
//         console.log(placeholder);
//         input.value = placeholder;
        
        
//     };

//     function changeValue(e) {
//         var input = e.target;
//         var placeholder = e.target.placeholder;
//         console.log(e.target.value);
//         document.getElementById('input').placeholder = input.value;
//         console.log(`new placeholder: ${placeholder}`);

//     }

//     function left(e) {
//         var input = e.target;
//         var placeholder = e.target.placeholder;
        
//         console.log(placeholder);
//         input.value = "";
//     }
    

//     input.addEventListener('mousedown', getPlaceHolder);
//     input.addEventListener('keyup', changeValue);
//     input.addEventListener('blur', left)
     
// }

window.onload = function() {
    const input = document.getElementById('input');

    function changeToInput(e) {
        input.setAttribute('contenteditable', true);
    }
    function blurOut(e) {
        if(e.key == "Enter") {
          input.setAttribute('contenteditable', false);

        }
    }

    input.addEventListener('mousedown', changeToInput);
    input.addEventListener('keypress', blurOut);
}