
const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const input = document.querySelector('input');
const btn = document.querySelector('.btn');
const errorMsg = document.querySelector('.error');

const showMessage = () => {
        
    btn.addEventListener('click', () => {   
        if(input.value.length == 0 || !input.value.match(regex)){
            errorMsg.style.display = 'block'
            input.classList.toggle('invalid-input')
        } else if(input.value.match(regex)){
            errorMsg.textContent = 'Thank You for Your subscription';
            errorMsg.classList.toggle('valid-email');
            input.value = '';
        }
    })
}

showMessage();