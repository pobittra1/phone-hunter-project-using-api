const loadData = (dynamicName , limitOfData) =>{
    fetch(`https://openapi.programming-hero.com/api/phones?search=${dynamicName}`)
    .then(res => res.json())
    .then(data => displayPhones(data.data , limitOfData))
}

const displayPhones = (phones , limitOfData) =>{
    const cardDiv = document.getElementById("card-container");
    cardDiv.innerHTML = "" ;
    if(phones.length === 0){
       const warningMessage =  document.getElementById("warning-message");
       warningMessage.classList.remove("d-none");
    }
    else{
        const warningMessage =  document.getElementById("warning-message");
        warningMessage.classList.add("d-none");
    }
    if(limitOfData && phones.length > 9){
        phones = phones.slice(0 , 9) ;
        document.getElementById("show-button").classList.remove("d-none") ;
    }
    else{
        document.getElementById("show-button").classList.add("d-none") ;
    }
    phones.forEach(phone =>{
        console.log(phone)
        cardDiv.innerHTML += `
        <div class="col">
        <div class="card">
          <img src="${phone.image}" class="card-img-top img-fluid p-5 py-3" alt="...">
          <div class="card-body">
            <h3 class="card-title">${phone.phone_name}</h3>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
      </div>
        ` ;
    })
    //remove loader
    document.getElementById("loader").classList.add("d-none");
}


const searchProcess = (limitOfData) =>{
      //add loader
    document.getElementById("loader").classList.remove("d-none");
    const searchBox = document.getElementById("search-box");
    const searchBoxText = searchBox.value;
    loadData(searchBoxText , limitOfData) ;
}

document.getElementById("search-button").addEventListener("click" , function(){
  searchProcess(9);

})

document.getElementById("show-button").addEventListener("click" , function(){
    searchProcess() ;
})
// loadData();