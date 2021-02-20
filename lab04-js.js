function change(event){
    const top = event.currentTarget.querySelector('#top');
    const topa=top.querySelector('.white');
    const topb=top.querySelector('.black');
    topa.classList.remove('white');
    topa.classList.add('black');
    
    topb.classList.remove('black');
    topb.classList.add('white');

    const bott =event.currentTarget.querySelector('#botton');
    const botta = bott.querySelector('.black');
    const bottb = bott.querySelector('.white');

    botta.classList.remove('black');
    botta.classList.add('white');

    bottb.classList.remove('white');
    bottb.classList.add('black');

    
 }
 const obj2 = document.querySelector(".board");
 obj2.addEventListener('click',change);