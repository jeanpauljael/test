// navbar ===========================================

const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    
    burger.addEventListener("click", () =>{
        // toggle nav
        nav.classList.toggle("nav-active");

        // animate links
        navLinks.forEach((link, index) => {
        
            if(link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });

        // burger animation
        burger.classList.toggle("toggle");

    });
    
    
};

// navbar add active class ============================
const list = document.querySelectorAll('.list');
function activeLink(){
  list.forEach((item) => 
  item.classList.remove('active'));
  this.classList.add('active');
}
list.forEach((item) => 
item.addEventListener('click', activeLink));

navSlide();

// gallery ============================================
// init

function assetsTemplate(heading, description, path) {
    return `
      <div class="asset">
        <img src="./img/${path}" alt="" />
        <div class="overlay">
          <div>
            <h4>${heading}</h4>
            <p>${description}</p>
          </div>
        </div>
      </div>
    
          `;
  }
  
  // get assets
  function getAssets() {
    const assetElement = document.querySelector(".galleryWrapper");
  
    for (var asset in this) {
      assetElement.innerHTML += assetsTemplate(
        this[asset].heading,
        this[asset].description,
        this[asset].path
      );
    }
  }
  
  // call function to pass value
  getAssets.call({
    man: {
      heading: "Man Image",
      description: "Image of a man.",
      path: "man.jpg",
    },
    wizard: {
      heading: "Wizard Image",
      description: "Image of a wizard.",
      path: "wizard.jpg",
    },
    beast: {
      heading: "Beast Image",
      description: "Image of a beast.",
      path: "beast.jpg",
    },
  });