const cols = document.querySelectorAll('.col');
document.addEventListener('keydown', event => {
    event.preventDefault();
    if(event.code.toLowerCase() === 'space'){
        setRandomColor()
    }
});
document.addEventListener('click', event => {
    const type = event.target.dataset.type;

    if(type === 'lock'){
        const node = event.target.tagName.toLowerCase() === 'i'
        ? event.target
        : event.target.children[0]

        node.classList.toggle('fa-lock-open');
        node.classList.toggle('fa-lock');

    }
});

function generateRandomColor(){
    const hexColor = '1234567890ABCDEF';
    let color = '';

    for(let i = 0; i < 6; i++){
        color += hexColor[Math.floor(Math.random() * hexColor.length)]
    };

    return '#' + color;
}

function setRandomColor(){
    cols.forEach(col => {
        const text = col.querySelector('.col__title');
        const button = col.querySelector('.col__btn');
        // const color = generateRandomColor();
        const color = chroma.random();
        const isLocked = col.querySelector('i').classList.contains('fa-lock');

        if(isLocked){return};

        text.textContent = color;
        col.style.background = color;

        setTextColor(text, color);
        setTextColor(button, color);
    });
};

function setTextColor(text, color){
    const luminance = chroma(color).luminance();
    text.style.color = luminance > 0.5 ? "black" : "white"
};

setRandomColor();