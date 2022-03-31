const questions = document.querySelectorAll('.question-answer')

questions.forEach(question => {
    question.addEventListener('click', (e)=>{
        e.currentTarget.childNodes[3].classList.toggle('visible')
        e.currentTarget.childNodes[1].childNodes[1].classList.toggle('rotate');
    })

})
