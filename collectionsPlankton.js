let searchBar=document.getElementById("search_bar");
let products=document.getElementById("products");
let product=products.querySelectorAll("div");

searchBar.addEventListener("keyup",function(){
    let enteredVal=event.target.value.toUpperCase();

    for(count=0;count<product.length;count=count+1){
        let productName=product[count].querySelector("p").textContent;

        if(productName.toUpperCase().indexOf(enteredVal)<0){
            product[count].style.display="none";
        }
        else{
            product[count].style.display="block"
        }
    }
})