let input = document.querySelector('.text');
let submitBtn = document.getElementById('submit');
let deleteBtn = document.getElementById('submit-2');
let ul = document.querySelector('.font');



submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let inputVal = input.value.trim();

    if (!inputVal) {
        alert('type something up');

        return;
    }


    let li = document.createElement('li');
    li.textContent = inputVal;
    li.style.fontSize = '20px';

    let deleteBtn = document.createElement('i');
    deleteBtn.className = "fa-solid fa-trash bin";
    deleteBtn.style.fontSize = "18px";


    deleteBtn.addEventListener('click', () => {
        li.remove();
    })

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            li.style.textDecoration = 'line-through';
            li.style.opacity = '0.8';
        } else {
            li.style.textDecoration = 'none';
            li.style.opacity = '1';
        }

    })


    li.appendChild(deleteBtn);
    li.appendChild(checkbox);
    ul.appendChild(li);

    input.value = '';
});

