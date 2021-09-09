const button = document.querySelector('button')
const h4activity = document.querySelector('#activity')

button.addEventListener('click', () => {
    fetch ('http://www.boredapi.com/api/activity/')
    .then(response => response.json())
    .then(data => {
        console.log(data)  
        h4activity.textContent = data.activity
    })
})

