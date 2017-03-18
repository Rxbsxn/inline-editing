window.onload = function() {
    const input = document.getElementById('input');

    const changeToInput = () => {
        input.setAttribute('contenteditable', true);
    }

    const blurOut = (e) => {
        if(e.key == "Enter") {
          input.setAttribute('contenteditable', false);

        }
    }

    input.addEventListener('mousedown', changeToInput);
    input.addEventListener('keypress', blurOut);
}