const inputss = document.querySelectorAll('input')
const sprawdzDaneButton = document.querySelector('#sprawdz-dane')
const incorrectDataParagraphs = document.querySelectorAll('.incorrect-data')
let isCorrect
sprawdzDaneButton.addEventListener('click', () => {
    isCorrect = true
    
    inputss.forEach((input, index) => {
        if(index == 0) {
            const regex = /^[a-z0-9\.]+@[a-z0-9\.]+[\.pl]$/
            if(!regex.test(input.value)) {
                incorrectDataParagraphs[index].style.opacity = '1'
                isCorrect = false
            }
            else incorrectDataParagraphs[index].style.opacity = '0'
        } // Checking e-mail address
        
        else if(index == 1 | index == 2) {
            const regex = /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]+$/
            if(!regex.test(input.value)) {
                incorrectDataParagraphs[index].style.opacity = '1'
                isCorrect = false
            }
            else incorrectDataParagraphs[index].style.opacity = '0'
        } // Checking first and last name

        else if(index == 3) {
            const regex = /^[A-Z a-z0-9\/]+$/

            if(!regex.test(input.value)) {
                incorrectDataParagraphs[index].style.opacity = '1'
                isCorrect = false
            }
            else incorrectDataParagraphs[index].style.opacity = '0'
        } // Checking address
        // According to the exercise, in the adress field, no special character is allowed. However, I do not agree with it, because many addresses have a `/` (forward slash) in them, for example: `Osiedle Widok 19E/6`. Therefore I allow a `/` (forward slash) in my regex.

        else if(index == 4) {
            const regex = /^[0-9][A-Z][a-z]$/
            if(!regex.test(input.value)) {
                incorrectDataParagraphs[index].style.opacity = '1'
                isCorrect = false
            }
            else incorrectDataParagraphs[index].style.opacity = '0'
        } // Checking class name

        else if(index == 5) {
            const regex = /^[1-2],[0-9]{2}$/
            if(!regex.test(input.value)) {
                incorrectDataParagraphs[index].style.opacity = '1'
                isCorrect = false
            }
            else incorrectDataParagraphs[index].style.opacity = '0'
        } // Checking height

        else if(index == 6) {
            const regex = /^[0-9]{11}$/
            if(!regex.test(input.value)) {
                incorrectDataParagraphs[index].style.opacity = '1'
                isCorrect = false
            }
            else incorrectDataParagraphs[index].style.opacity = '0'
        } // Checking PESEL

        else if(index == 7) {
            const regex = /^[A-Z]{3}[0-9]{6}$/
            if(!regex.test(input.value)) {
                incorrectDataParagraphs[index].style.opacity = '1'
                isCorrect = false
            }
            else incorrectDataParagraphs[index].style.opacity = '0'
        } // Checking ID Number

        else if(index == 8) {
            const regex = /^[0-9]{3}\-[0-9]{3}\-[0-9]{2}\-[0-9]{2}$/
            if(!regex.test(input.value)) {
                incorrectDataParagraphs[index].style.opacity = '1'
                isCorrect = false
            }
            else incorrectDataParagraphs[index].style.opacity = '0'
        } // Checking NIP Number

        else {
            const regex = /^(http|https):\/\/www\.[a-z]+\.pl$/
            if(!regex.test(input.value)) {
                incorrectDataParagraphs[index].style.opacity = '1'
                isCorrect = false
            }
            else incorrectDataParagraphs[index].style.opacity = '0'
        } // Checking Website URL
    })
})