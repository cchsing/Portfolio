const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-content');

function PageTransition(){
    //Button click active class
    for (let i=0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function() {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].classList.remove('active-btn');
            this.classList.add('active-btn')
        })
    }
    //Section Active Class
    allSections[0].addEventListener('click', (Event) =>{
        const id = Event.target.dataset.id
        console.log(id)
        if(id){          
            //hide other sections
            sections.forEach((section) =>{
                section.classList.remove('active');
            });
            const element = document.getElementById(id);
            element.classList.add('active');
        }
        console.log(Event.target)
    })
}

PageTransition();