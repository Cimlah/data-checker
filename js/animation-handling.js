const topPlaceholders = document.querySelectorAll('.top-placeholder')
const inputs = document.querySelectorAll('input')
inputs.forEach((input, index) => {
    input.addEventListener('focusin', () => {
        topPlaceholders[index].style.opacity = '1'
        topPlaceholders[index].style.color = '#53FF5A'
    })
    input.addEventListener('focusout', () => {
        if(!input.value) topPlaceholders[index].style.opacity = '0'
        topPlaceholders[index].style.color = '#67E06C'
    })
})

const popup = document.querySelector('.popup')
const timeoutProgress = document.querySelector('.timeout-progress')
sprawdzDaneButton.addEventListener('click', () => {
    if(isCorrect == true) {
        setTimeout(() => {
            popup.classList.add('popup-animation-move-in')
            timeoutProgress.classList.add('timeout-progress-animation')
        }, 200)
        setTimeout(() => {
            popup.classList.remove('popup-animation-move-in')
            popup.classList.add('popup-animation-move-out')
        }, 2200)
        popup.classList.remove('popup-animation-move-out')
        timeoutProgress.classList.remove('timeout-progress-animation')
    }
})