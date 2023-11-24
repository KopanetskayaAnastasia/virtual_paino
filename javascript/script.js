//АНИМАЦИЯ ДЛЯ БУРГЕР-МЕНЮ
document.querySelector('.navbar__container-wrap-burger').addEventListener('click',function(){
  this.classList.toggle('active');
  document.querySelector('.navbar__container-wrap-menu').classList.toggle('open');
})

//СОБЫТИЯ КЛАВИАТУРЫ
let keys = document.querySelectorAll('.key');
const arr=new Map([
  ['q','C'],['2','Cs'],['w','D'],['3','Ds'],['e','E'],
  ['x','F'],['d','Fs'],['c','G'],['f','Gs'],['v','A'],['g','As'],['b','B'],

  ['n','C1'],['j','Cs1'],['m','D1'],['k','Ds1'],[',','E1'],
  ['i','F1'],['9','Fs1'],['o','G1'],['0','Gs1'],['p','A1'],['-','As1'],['[','B1']

]);
document.addEventListener('keydown', function(e){
  if (e.repeat == false) {
    keys.forEach(key =>{
      for(let pair of arr.entries()){
        if (e.key===pair[0]){
          if(key.classList.contains(pair[1])){
            let sound=document.getElementById(pair[1]);
            sound.currentTime = 0;
            sound.play();
            key.classList.add('active');
            document.addEventListener('keyup',() => {
            key.classList.remove('active');
            });
          } 
        }
      }
    })     
  } 
})

//СОБЫТИЯ МЫШИ
keys.forEach(key => {
 key.addEventListener('mousedown', playSound);
});

function playSound(e) {
 let key = e.target;
 let sound = document.getElementById(key.dataset.sound);
 key.classList.add('active');
 sound.currentTime = 0;
 sound.play();
 key.addEventListener('mouseup',() => {
  key.classList.remove('active');
 });
}

//МОДАЛЬНОЕ ОКНО
const CLASS_LIST={
  MODAL:'modal',
  MODAL_ACTIVE:'modal--active',
  MODAL_HAS_SCROLL:'modal--has-scroll',
  MODAL_DIALOG_BODY:'modal__dialog-body',
  TRIGGER_OPEN:'js-modal-open',
  TRIGGER_CLOSE:'js-modal-close'
};
document.addEventListener('click',(event)=>{
  //open
  if(event.target.closest(`.${CLASS_LIST.TRIGGER_OPEN}`)){ 
    console.log('open');
    event.preventDefault();

    const target =event.target.closest(`.${CLASS_LIST.TRIGGER_OPEN}`);
    const modalId=target.getAttribute('href').replace('#','');
    const modal=document.getElementById(modalId);

    //document.body.style.paddingRight=`${getScrollbarWidth()}px`;
    document.body.style.overflow='hidden';

    modal.classList.add(CLASS_LIST.MODAL_ACTIVE);
  }
  //close
  if(event.target.closest(`.${CLASS_LIST.TRIGGER_CLOSE}`) ||event.target.classList.contains(CLASS_LIST.MODAL_ACTIVE)){
    console.log('close');
    event.preventDefault();

    const modal =event.target.closest(`.${CLASS_LIST.MODAL_ACTIVE}`);
    document.body.style.overflow='visible';
    modal.classList.remove(CLASS_LIST.MODAL_ACTIVE);
  }
});

const getScrollbarWidth=()=>{
  const item=document.createElement('div');

  item.style.position='absolute';
  item.style.top='-9999px'
  item.style.width='50px';
  item.style.height='50px';
  item.style.overflow='scroll';
  item.style.visibility='hidden';

  document.body.appendChild(item);
  const getScrollBarWidth=item.offsetWidth-item.clientWidth;
  document.body.removeChild(item);

  return getScrollBarWidth;
}

//СЛИК
$(document).ready(function(){
  $('.sl').slick({
    slidesToShow:1,
    dots: true,
    arrows:true,
    centerMode: false,
    responsive:[
      {
      breakpoint: 768,
      settings: {
        slidesToShow:1
      }},
    
      {
        breakpoint: 550,
        settings: {
          slidesToShow:1
        }}
    ]
  });
});