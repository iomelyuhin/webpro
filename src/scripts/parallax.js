const parallax = document.querySelector('.parallax'); // заводим всю сцену паралакса
const layers = parallax.children;                     // заведем все слои, берем потомков у parallax

function moveLayersDependsOnScroll(wScroll) {         //функция паралакса по скролу
  
  Array.from(layers).forEach(layer => {               //перебираем все слои 

    const divider = layer.dataset.speed;              //получаем значения атрибутов data-speed
    const strafe = wScroll * divider/10;              //умножаем на значение скролла

    layer.style.transform = `translateY(-${strafe}%)`;//применяем значение к trnslate

  })

}

window.addEventListener('scroll', e => {              //получаем значение скролла
  const wScroll = window.pageYOffset;
  moveLayersDependsOnScroll(wScroll);                 //передаем в wScroll
})