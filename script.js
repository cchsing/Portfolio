const websiteMainDisplay = document.querySelectorAll('.main-content');
const mySidebarButton = document.querySelectorAll('.mySidebar-btn');
const sections = document.querySelectorAll('.section');

function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
}
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}

function mySidebarChange() {
    websiteMainDisplay[0].addEventListener('click',(Event) =>{
        const cls = Event.target.dataset.cls;
        console.log(cls);
        if (cls) {
            sections.forEach((section) =>{
                section.classList.remove('active');
            });
            for(let i=0; i < sections.length; i++){
                for (let j=0; j < sections[i].classList.length; j++) {
                    if (sections[i].classList[j] == cls) {
                        sections[i].classList.add('active');
                    }
                }
            };    
        };
    })
}

mySidebarChange();