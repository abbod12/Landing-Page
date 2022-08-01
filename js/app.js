


//storing all 'section' elements in an array called 'sections'
const sections= Array.from(document.querySelectorAll('section'));

//getting the id of the unordered list
const menu= document.getElementById('navbar__list');


//setting the options constant to detect section in view port later
const options= {
    threshold: 0.5, //will apply if 50% of the content is in the viewport
};


// Adding section to the navbar

function itemAdding(){
    for(let section of sections){
        
        //get its name from the'data-nav' attribute 
        const nameSection= section.getAttribute('data-nav');

        //and its Id from the id attribute
        let linkSection= section.getAttribute('id');

        let list= document.createElement('li');
        
        list.innerHTML= `<a class='menu__link' href='#${linkSection}'>${nameSection}</a>`

        menu.insertAdjacentElement('beforeend',list);
}}

//revoking the function to add new "section" items one at a time
itemAdding();

//then do the whole process again untile every section in sections be executed



    
//Detecting the section in viewport
const observer= new IntersectionObserver(function(entries, observer){
    
    entries.forEach(function (entry) {
        //getting the id of the href attribute to see if the id matches the name of the section beeing viewed
        const linkId= document.querySelector(`a[href="#${entry.target.id}"]`);

        if (!entry.isIntersecting) {
            //remove the active class from it and from its corresponding navbar item
            entry.target.classList.remove('active');
            linkId.classList.remove('linkActive');
     
        }
        //if it IS intersecting
        else {
            //ok, now add the active classes
            entry.target.classList.add('active');
            linkId.classList.add('linkActive');
    }
    });
}, //the option we declared earlier at the top of the page
options);

//revoking the function passing the array 'sections' and looping over each 'section' and detecting it
sections.forEach(section => {
    observer.observe(section);
});


/*
Another method for adding the active class to the sections and navigation|||\\

//adding 'linkActive' class to the first list item
const navActive= document.querySelector('a').classList.add('linkActive');

window.addEventListener('scroll', () => {
    sections.forEach(section =>{
        const sectionTop= section.getBoundingClientRect().top;
        const linkId= document.querySelector(`a[href="#${section.id}"]`);
        if(sectionTop>0 && sectionTop<500){
            section.classList.add('active');
            linkId.classList.add('linkActive');
        }
        else{
            section.classList.remove('active');
            linkId.classList.remove('linkActive');
        }
        })
});
*/




//scrolling in a smoothy way

//storing all anchor links in a constant
const links= document.querySelectorAll('ul li a');

links.forEach(link => link.addEventListener('click', clickHandler));

function clickHandler(event){
    event.preventDefault();
    const targetId= event.currentTarget.getAttribute('href')
    document.querySelector(targetId).scrollIntoView({
        behavior: "smooth"
    });
}




//ScrollToTop button

let toTopButton= document.querySelector('.toTop');

window.onscroll= function(){

    //It is 250 because this is th Y-coordinate when the section is actualy beginning to appear
    if(scrollY >=250){
        toTopButton.classList.add('appear');
    }else{
        toTopButton.classList.remove('appear');
    }
};

//scrolling to the top of the page in a smoothy way
toTopButton.onclick= function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};





//showing content when the navbar button is clicked on small screens
const nav= document.querySelector('nav');

function myFunction(){
    nav.classList.toggle('show');

 }



/** 
//hiding fixed navbar when not scrolling

window.addEventListener('scroll', navHid);

let noScrolling
function navHid(){
    nav.style.display="block";

    clearTimeout(noScrolling);
    noScrolling= setTimeout(() =>{
        nav.style.display="none";
    }, 4000);
}
//this is the way to hide the navbar when there is no scrolling, but it is disabled due to interference with the response of the navbar on small screens
//when the hamburger button is clicked, after the 4000ms passes, all list items gets hidden, including the actual <nav></nav> bar 
*/