for (i=0; i<256; i++) {
    const container = document.querySelector('.container');
    const div = document.createElement('div');
    div.classList.add('grid');
    container.appendChild(div);
}

const divs = document.querySelectorAll('.grid');
divs.forEach(div => {
    div.addEventListener('mouseenter', ()=> {
        div.style.backgroundColor = 'blue';
    });
    div.addEventListener('mouseleave', ()=> {
        div.style.backgroundColor = 'white';
    })
})

