let product = JSON.parse(localStorage.getItem("addToBag"));

let cartPrice=0
displayProduct(product);
function displayProduct(data){
    data.forEach(function(e,i){
        let tr=document.createElement("tr");
        let td1=document.createElement("img");
        td1.setAttribute("src", e.avatar);
        td1.setAttribute("id", "image")
        let td2=document.createElement("td");
        td2.innerText=e.Name;
        let td3=document.createElement("td");
        td3.innerText=`RS ${e.Price}`;
        // total=e.Price++;
        let td4=document.createElement("button");
        td4.innerText="Remove";
        td4.addEventListener("click", function(e,i){
            removeItem(e,i)
        })
        tr.append(td1,td2,td3,td4);
        document.querySelector("tbody").append(tr)
        cartPrice+=Number(e.Price)
    })
}
console.log(cartPrice)
let total = document.querySelector("#total");
total.innerText=`Total Price payble: ${cartPrice}`
function removeItem(e,i){
    product.splice(i,1);
    localStorage.setItem("addToBag", JSON.stringify(product));
    window.location.reload();
    displayProduct(product)
}