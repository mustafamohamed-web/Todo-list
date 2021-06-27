const button = document.querySelector('.btn')
const input = document.querySelector('.input')
const content = document.querySelector('.content')





button.addEventListener('click', function(){
    let newElement = document.createElement('p')
    content.appendChild(newElement);
    newElement.innerText = input.value;
    input.value = '';
    newElement.classList.add('para')

    // line through

    newElement.addEventListener('click', function(){
        newElement.style.textDecoration = 'line-through'
    })

    // Remove

    newElement.addEventListener('dblclick', function(){
        content.removeChild(newElement);
    })

})


