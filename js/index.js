//Events
//1.
window.addEventListener('resize', function(event) {
    this.alert('I see your changing the size!!!')
})

const mainPic = document.querySelector('.logo-heading');

//2. 
mainPic.addEventListener('mouseover', event => {
     mainPic.style.color = 'blue';
});

//3. 
mainPic.addEventListener('mouseleave', event => {
     mainPic.style.color ='';
});

const signMeUp = document.querySelector('.destination .btn');

//4.
signMeUp.addEventListener('dblclick', event => {
    signMeUp.style.color = 'yellow';
});

//5.
signMeUp.addEventListener('mouseleave', event => {
    signMeUp.style.color ='';
});

const signMeUp2 = document.querySelector('.destination:nth-of-type(2) .btn');

//6.
signMeUp2.addEventListener('dblclick', event => {
    signMeUp2.style.color = 'red';
});

//7.
signMeUp2.addEventListener('mouseleave', event => {
    signMeUp2.style.color ='';
});

const signMeUp3 = document.querySelector('.destination:nth-of-type(3) .btn');

//8.
signMeUp3.addEventListener('dblclick', event => {
    signMeUp3.style.color = 'blue';
});

//9.
signMeUp3.addEventListener('mouseleave', event => {
    signMeUp3.style.color ='';
});

const navLink = document.querySelector('.nav-link');
const navLink2 = document.querySelector('.nav-link:nth-of-type(2)');
const navLink3 = document.querySelector('.nav-link:nth-of-type(3)');
const navLink4 = document.querySelector('.nav-link:nth-of-type(4)');

//10.
navLink.addEventListener('click', event => {
    navLink.style.color = "red";
})
navLink2.addEventListener('click', event => {
    navLink2.style.color = 'blue';
})
navLink3.addEventListener('click', event => {
    navLink3.style.color = "green";
})
navLink4.addEventListener('click', event => {
    navLink4.style.color = 'orange';
})

const body = document.querySelector('body');

//11.
body.addEventListener('wheel', event => {
    body.style.backgroundColor = 'purple';
})

body.addEventListener('dblclick', event => {
    body.style.backgroundColor = '';
});

//stop propagation requirement
const grandparent = document.querySelector('#grandparent');
const parent = document.querySelector('#parent');
const child = document.querySelector('#child');
const buttonClick = document.querySelector('#button-click');

function listener(event) {
    console.log(`
        event passing through ${event.currentTarget.nodeName}
        target --> ${event.target.nodeName}
    `)
}

grandparent.addEventListener('click', listener);

parent.addEventListener('click', (e) => e.stopPropagation());
parent.addEventListener('click', listener);

child.addEventListener('click', listener);

buttonClick.addEventListener('click', listener);

//preventDefault requirement
const prevent = document.querySelector('#id-checkbox').addEventListener('click', event => {
    event.preventDefault();
})
