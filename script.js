const btn = document.querySelector('.setGrid');
btn.addEventListener('click', ()=> {
    let gridSize = parseInt(prompt('Enter the size of the grid (1-100)'));
    if (isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
            alert('Please enter a number between 1 and 100');
            return;
    }

    const container = document.querySelector('.container');
    container.innerHTML = '';
    
    for (let i=0; i<gridSize * gridSize; i++) {
        const div = document.createElement('div');
        div.classList.add('grid');
        container.appendChild(div);
        div.addEventListener('mouseenter', ()=> {
            div.style.backgroundColor = 'blue';
        })};
    
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr`;

    const divs = document.querySelectorAll('.grid');
    divs.forEach(div => {
        div.style.width = `${100 / gridSize}%`;
        div.style.height = `${100 / gridSize}%`;
        div.style.display = 'flex';
        div.style.justifyContent = 'center';
        div.style.alignItems = 'center';
    })
})
    


