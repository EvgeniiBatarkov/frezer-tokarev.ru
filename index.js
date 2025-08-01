/* импорт данных */
import { typeOfWorkArr } from "./data.js";

/* инициализация переменных */
const typeOfWorkEl =  document.getElementById("type-of-work-el")


/* Функция отрисовки блока с типами работ */
function render() {
    const typeOfWorkBlock = typeOfWorkArr.map(function(work) {
        return `
        <div>
            <h4>${work.title}</h4>
            <p>${work.description}</p>
        </div>
        `
    }).join('')

    typeOfWorkEl.innerHTML = typeOfWorkBlock
}

/* вызов функции отрисовки */
render()


    /* слушатель на всю страницу */
document.addEventListener('click', function(e) {
    /* Нажатие на любую из кнопок "зкакзать..", "Свяжитесь..", "Получить.." */
    if (e.target.id === "order-btn") { 
        e.preventDefault()
        document.getElementById('modal-order').style.display='block'
    }
    /* кнопка закрытие модального окна */
    else if (e.target.id === "close-modal-btn") {
        document.getElementById('modal-order').style.display='none'
    }
    /* копирование почты */
    else if (e.target.id === "copy-email-btn" || e.target.id === "copy-email"){
        copyToClipboard()
    }

})

    /* Функция копирования почты в буфер обмена  */
function copyToClipboard() {
    navigator.clipboard.writeText(document.getElementById('copy-email').innerText)
    document.getElementById("copy-email").style.display = 'none'
    document.getElementById("email-copied").style.display = 'block'
    setTimeout(function(){
        document.getElementById("copy-email").style.display = 'block'
        document.getElementById("email-copied").style.display = 'none'
    }, 3000)
    
}