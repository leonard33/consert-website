const bands = {
    contestant1: {
        title: 'Sauti sol band',
        image: './assets/sautisol.jpg',
        text1: 'Swahili soul band to sing in kenya',
        text2: 'They sing sweet soulmusic in kiswahili very soothing to be presice.',
    },
    contestant2: {
        title: 'Heart the band',
        image: './assets/htheband.jpg',
        text1: 'Swahili soul band to sing in kenya',
        text2: 'They sing sweet soulmusic in kiswahili very soothing to be presice.',
    },
    contestant3: {
        title: 'Exit band',
        image: './assets/exitband.jpg',
        text1: 'Swahili soul band to sing in kenya',
        text2: 'They sing sweet soulmusic in kiswahili very soothing to be presice.',
    },
    contestant4: {
        title: 'Erick wainaina band',
        image: './assets/wainanina.jpg',
        text1: 'Swahili soul band to sing in kenya',
        text2: 'They sing sweet soulmusic in kiswahili very soothing to be presice.',
    },
    contestant5: {
        title: 'Wanavokali band',
        image: './assets/wanavokali.jpeg',
        text1: 'Swahili soul band to sing in kenya',
        text2: 'They sing sweet soulmusic in kiswahili very soothing to be presice.',
    },
    contestant6: {
        title: 'Elani band',
        image: './assets/elani.jpg',
        text1: 'Swahili soul band to sing in kenya',
        text2: 'They sing sweet soulmusic in kiswahili very soothing to be presice.',
    },
}

// Dynamic page created
const singerbands = document.querySelector('.contestants');
Object.keys(bands).forEach((key) => {
    singerbands.innerHTML += `
    <div class="cont ${key}">
    <div class="constest-holder">
    <img src="${bands[key].image}"/>
   </div>
   <div class="contest-info">
       <h6 class="names">${bands[key].title} </h6>
       <h6 class="descr">${bands[key].text1} </h6>
       <img src="./assets/Vector .png"/>
       <h6 class="paragraph">${bands[key].text2} </h6>
   </div>
   <button class="contest-btn" id="${key}">see more</button>
   </div>`
})

const openMenu = document.querySelector('.menu-sub');
const menu = document.querySelector('.menu-icon');
const close = document.querySelector('.close-btn');

// Open Menu
function open (event) {
   if(event.target) {
       openMenu.style.display = 'block';
       close.style.display = 'block';
   }
}
menu.addEventListener('click', open);

// Close menu
function closeMenu (event) {
    if(event.target) {
        openMenu.style.display = 'none';
        close.style.display = 'none';
    }
}
close.addEventListener('click', closeMenu);

// Open popup modal
const popupmodal = document.querySelector('.modal');
const popup = document.querySelectorAll('.contest-btn')

popup.forEach((element) => {
    element.onclick = function (event) {
        if(event.target) {
            popupmodal.style.display = 'flex';
            const key = event.target.id;
            document.querySelector('.band-name').innerHTML = bands[key].title;
            document.querySelector('.band-image').setAttribute('src', bands[key].image);
            document.querySelector('.descr').innerHTML = bands[key].text1;
            document.querySelector('.paragraph').innerHTML = bands[key].text2;
        }
    }
});

// close popup modal
const modalClose = document.querySelector('.close-modal');
function closeModal (event) {
    if(event.target) {
        popupmodal.style.display = 'none';
    }
}
modalClose.addEventListener('click', closeModal);

const readLess = document.querySelector('.read-less');
const readMore = document.querySelector('.read-more');
function readMoreText (event) {
    if(event.target) {
        document.querySelector('.contestants').style.overflow = 'visible';
        readMore.style.display = 'none';
        readLess.style.display = 'block';
    }
}
readMore.addEventListener('click', readMoreText);

function readless (event) {
    if(event.target) {
        document.querySelector('.contestants').style.overflow = 'hidden';
        readMore.style.display = 'block';
        readLess.style.display = 'none';
    }
}
readLess.addEventListener('click', readless);
