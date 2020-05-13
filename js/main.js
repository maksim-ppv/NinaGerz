const itemButton = document.querySelectorAll('.button__card'),
    cardsBlock = document.querySelector('.cards__block'),
    itemModal = document.querySelectorAll('.item__modal'),
    itemShadow = document.querySelector('.item__shadow'),
    shadowButton = document.querySelector('.shadow__button');

const modalOpen = (event) => {
    const target = event.target;
    const modal = target.closest('.cards__item');
    console.log('modal: ', modal);
    const targetModal = modal.dataset.numberCard;
    itemModal.forEach((item)=>{
        if(item.id == targetModal){
            item.classList.add('modal__active')

        }
    });
}


const modalClose = (event)=>{
    const target = event.target;
    console.log('target: ', target);
    console.log('shadowButton: ', shadowButton);
    const modal = target.closest('.item__modal')
    if(target===modal||target===shadowButton){
        itemModal.forEach((item)=>{
            item.style.animation = 'modal'
            // item.classList.remove('modal__active')
        })
    }
        
};

itemButton.forEach((item)=>{
    item.addEventListener('click', modalOpen)
});
itemModal.forEach((item)=>{

    item.addEventListener('click', modalClose)
})



console.log('itemButton: ', cardsBlock);
