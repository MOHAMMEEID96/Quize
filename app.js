const correctAnswers = ['B','A','B']
const form = document.querySelector('.quiz-form')
const result = document.querySelector('.result')

form.addEventListener('submit',e=>{
    e.preventDefault()
    let score = 0;
  const userAnswers = [form.Q1.value , form.Q2.value , form.Q3.value]  
  userAnswers.forEach((answer ,index)=>{
    if(answer === correctAnswers[index]){
        score +=25;
    }
})
scrollTo(0,0)
result.querySelector('span').textContent = `${score}%`
result.classList.remove('d-none')
})
