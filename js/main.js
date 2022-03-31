import data from './data.js';

const navButton = document.querySelector('.nav-menu-button');
const navMenu = document.querySelector('.nav-menu');
const nav = document.querySelector('.nav');
const navTitle = document.querySelector('.nav-title');
const navLinks = document.querySelectorAll('.nav-link');
const wmaa = document.querySelector('.whats-my-age-again');
const timeline = document.querySelector('.experience-timeline');
const experienceButtons = document.querySelectorAll('.experience-buttons button');
const workData = document.querySelector('.work-data');
const modal = document.querySelector('.modal');
const modalButton = document.querySelector('#more');
const modalClose = document.querySelector('#modal-close');
let lastScrollTop = 0;

/* Modal */
modalButton.addEventListener('click', () => {
    modal.classList.add('modal-show')
})

modalClose.addEventListener('click', () => {
    modal.classList.remove('modal-show')
})

const fillWork = () => {    
    data.work.forEach(item => {

        let card = document.createElement('div');
        card.classList.add('work-card');
    
        let header = document.createElement('div');
        header.classList.add('work-card-header');

        let text = document.createElement('div');
        text.classList.add('work-card-text');

        let footer = document.createElement('div');
        footer.classList.add('work-card-footer');   

        //Header
        let folder = document.createElement('i');
        folder.setAttribute('class', 'bx bx-folder txt-second');
        
        let github = document.createElement('a');
        github.setAttribute('href', item.ghLink);
        github.setAttribute('target', '_blank');
        github.classList.add('gh-link')
        let githubIcon = document.createElement('i');
        githubIcon.setAttribute('class', 'bx bxl-github');

        github.append(githubIcon);

        header.append(folder, github);

        //Text
        let title = document.createElement('h3');
        title.classList.add('work-title');   
        title.innerHTML = item.title;

        let description = document.createElement('p');
        description.classList.add('work-description');   
        description.innerHTML = item.description;

        text.append(title, description);

        //Footer
        item.tools.forEach(tool => {
            let toolItem = document.createElement('span');
            toolItem.classList.add('work-tool');   
            toolItem.innerHTML = tool;
            footer.appendChild(toolItem);
        });

        //Card append
        card.append(header, text, footer);
        workData.append(card);
          
    });
};

fillWork();

const fillExperience = (i) => {
    let key = Object.keys(data.experience)[i];
    data.experience[key].forEach(item => {
        let tEvent = document.createElement('div');
        tEvent.classList.add('timeline-event');
    
        let dot = document.createElement('div');
        dot.classList.add('dot');
    
        let eDescription = document.createElement('div');
        eDescription.classList.add('event-description');
    
        let title = document.createElement('p');
        title.classList.add('experience-title');
        title.textContent = item.title;
    
        let time = document.createElement('p');
        time.classList.add('experience-time');
        time.textContent = item.time;
    
        let description = document.createElement('p');
        description.classList.add('experience-description');
        description.innerHTML = item.description;
    
        eDescription.append(title, time, description);
    
        tEvent.append(dot, eDescription);
    
        timeline.append(tEvent);
    });
};

fillExperience(0);

experienceButtons.forEach((button, i) => {
    button.addEventListener('click', () => {
        timeline.textContent = '';
        fillExperience(i);
    })
})


/* I took her out, it was a Friday night... */
const getAge = () => {
    let today = new Date();
    let birthDate = new Date('1997-05-22');
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

wmaa.textContent = getAge();

/* Responsive navbar */
navButton.addEventListener('click', () => {
    navMenu.classList.toggle('nav-menu-show');
});

navTitle.addEventListener('click', () => {
    navMenu.classList.remove('nav-menu-show');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.toggle('nav-menu-show');
    });
})    

/* Show and change navbar color on scroll */
window.addEventListener("scroll", () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 200) {
        nav.classList.add('nav-scroll-bg');
        navTitle.classList.add('txt-fourth');
        navButton.classList.add('txt-fourth');
        navMenu.classList.add('nav-scroll-bg');
        navLinks.forEach(link => {
            link.classList.remove('txt-first');
            link.classList.add('txt-fourth');
        })                

        if (scrollTop > lastScrollTop) {
            nav.style.top = "-100rem";
        }
        else {
            nav.style.top = "0";
        }
        lastScrollTop = scrollTop; 
    }

    else {
        nav.classList.remove('nav-scroll-bg');
        navTitle.classList.remove('txt-fourth');
        navButton.classList.remove('txt-fourth');
        navMenu.classList.remove('nav-scroll-bg');
        navLinks.forEach(link => {
            link.classList.add('txt-first');
            link.classList.remove('txt-fourth');
        })      
    }
});