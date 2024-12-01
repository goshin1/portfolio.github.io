let items = ["Departorium", "ChatPress", "영어단어정복ABC", "PasserBob", "ReactCh", "universocial"];
let itemsImg = {
    "Departorium" : "/images/icons/Depatorium.png",
    "ChatPress" : "/images/icons/",
    "영어단어정복ABC" : "/images/icons/englishnoteLogo.png",
    "PasserBob" : "/images/icons/passerbob.PNG",
    "ReactCh" : "/images/icons/reactCh.PNG",
    "universocial" : "/images/icons/universocial.PNG"
}

const appMenu = document.getElementById('appMenu');
function renderBlocks() {
    appMenu.innerHTML = '';
    items.forEach((item, index) => {
        const icon = document.createElement('div');
        icon.style.backgroundImage = `url(${itemsImg[item]})`;
        icon.classList.add('icon');
        icon.setAttribute('draggable', true);
        icon.setAttribute('id', item)
        icon.dataset.index = index;
        appMenu.appendChild(icon);
        icon.addEventListener('dragstart', onDragStart);
        icon.addEventListener('dragover', onDragOver);
        icon.addEventListener('dragleave', onDragLeave);
        icon.addEventListener('drop', onDrop);
        icon.addEventListener('dragend', onDragEnd);
        icon.addEventListener('click', screenChangeFunction);
    });
}

function onDragStart(e) {
    const draggedBlock = e.target;
    draggedBlock.classList.add('dragging');
    e.dataTransfer.setData('text/plain', draggedBlock.dataset.index);
}

function onDragOver(e) {
    e.preventDefault(); // Necessary to allow drop
    const overBlock = e.target;
    overBlock.classList.add('over');
}

function onDragLeave(e) {
    const overBlock = e.target;
    overBlock.classList.remove('over');
}

function onDrop(e) {
    e.preventDefault();
    const overBlock = e.target;
    overBlock.classList.remove('over');

    const draggedIndex = e.dataTransfer.getData('text/plain');
    const draggedBlock = appMenu.querySelector(`.icon[data-index="${draggedIndex}"]`);
    const droppedIndex = overBlock.dataset.index;

    const temp = items[draggedIndex];
    items[draggedIndex] = items[droppedIndex];
    items[droppedIndex] = temp;

    renderBlocks(); 
}


function onDragEnd(e) {
    const draggedBlock = e.target;
    draggedBlock.classList.remove('dragging');
}

renderBlocks();

// ["Departorium", "ChatPress", "영어단어정복ABC", "PasserBob", "ReactCh", "universocial"];
const slideImages = {
    "Departorium" : [], 
    "ChatPress" : [], 
    "영어단어정복ABC" : [], 
    "PasserBob" : [], 
    "ReactCh" : [], 
    "universocial" : []
}
function screenChangeFunction(event){
    console.log(event.currentTarget.id)

    document.getElementById("phoneLeft").style.transitionTimingFunction = 'ease';
    document.getElementById("phoneLeft").style.animation = 'main_to_explain_left 0s 1 forwards'

    document.getElementById("phoneRight").style.transitionTimingFunction = 'ease';
    document.getElementById("phoneRight").style.animation = 'main_to_explain_right 0s 1 forwards'


    document.getElementById("box1").style.zIndex = 0;
    document.getElementById("box1").style.opacity = 0;
    document.getElementById("box2").style.zIndex = 1;
    document.getElementById("box2").style.opacity = 100;

    const container = document.querySelector('.container');
    const prev = document.querySelector('.prev')
    const next = document.querySelector('.next')

    prev.addEventListener('click',()=>{
    const slides = document.querySelectorAll('.slide')
    
    container.append(slides[0])
    })

    next.addEventListener('click',()=>{
    const slides = document.querySelectorAll('.slide')
    
    container.prepend(slides[slides.length-1])
    })

    for(let i = 1; i <= 7; i++){
        document.getElementById(`slide${i}`).style.backgroundImage = 'url(/images/reactCh/reactCh2.gif)'
    }

}