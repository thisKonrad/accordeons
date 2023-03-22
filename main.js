/* :: accordeon SCRIPT :: main JS */

const accordHead01 = document.querySelector('#header-01');
const accordHead02 = document.querySelector('#header-02');

/* accordeon 1 with changing signs */
accordHead01.addEventListener('click', ()=>{

    accordHead01.classList.toggle('active');
    const accordItemBody = accordHead01.nextElementSibling;

    if(accordHead01.classList.contains('active')){
        accordItemBody.style.maxHeight = accordItemBody.scrollHeight + 'px';
    } else {
        accordItemBody.style.maxHeight = 0;
    }
})

/* accordeon 2 with rotating sign */
accordHead02.addEventListener('click', ()=>{

    accordHead02.classList.toggle('activeRoll');
    const accordItemBody = accordHead02.nextElementSibling;

    if(accordHead02.classList.contains('activeRoll')){
        accordItemBody.style.maxHeight = accordItemBody.scrollHeight + 'px';
    } else {
        accordItemBody.style.maxHeight = 0;
    }
})
