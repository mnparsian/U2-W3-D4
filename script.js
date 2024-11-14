
const URL = "https://api.pexels.com/v1/search?query=cat"
const URL2 = "https://api.pexels.com/v1/search?query=dog"

function createPage (url,buttonId){
    const API_KEY = "ZIZcZUTKvfiGBK8SPHp4DcIq3HScqtb523Th9cGgTjtMNAisP9NZrAk8";
    fetch(url, {
  headers: {
    Authorization: API_KEY
  }
})
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  })
  .then((data) => {
    const loadbtn = document.getElementById(buttonId);
    loadbtn.addEventListener("click", () => {  
      const card_list = document.getElementById("cards");
      card_list.innerHTML = ""; 
     
      data.photos.forEach((photo) => {
        console.log(photo.src.original); 
        
        const card = document.createElement("div");
        card.classList.add("col-md-4");
        card.innerHTML = `
          <div class="card mb-4 shadow-sm">
            <img
              src=${photo.src.original}
              class="bd-placeholder-img card-img-top vh-20"
              alt="Photo from Pexels"
            />
            <div class="card-body">
              <h5 class="card-title">Lorem Ipsum</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>`;
        card_list.appendChild(card);
      });
    });
  })
 }
createPage(URL,"loadimage");
createPage(URL2,"loadimage2");