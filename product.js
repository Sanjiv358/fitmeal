let productDetail=[
    {
        img:"https://www.fitmeals.co.in/wp-content/uploads/2021/06/25-360x360.jpg",
        name:"Almond date choclate",
        desc:"Delicious Dates stuffed with a Almonds and covered in dark chocolate. With the finest golden almonds at the ...",
        price:"750"
    },
    {
        img:"https://www.fitmeals.co.in/wp-content/uploads/2021/06/23-360x360.jpg",
        name:"Coco Rush",
        desc:"Coco Rush is made with dates, nuts, premium grade cacao and wholesome ingredients. A delicious, healthy ...",
        price:"550",
    },
    {
        img:"https://www.fitmeals.co.in/wp-content/uploads/2021/06/veganhomemadeenergybarsh-360x360.jpg",
        name:"Energy Bars",
        desc:"Each bar brings a great texture with the energy and nutrients you need.  We keep things sweet by using only ...",
        price:"750",
    },
    {
        img:"https://www.fitmeals.co.in/wp-content/uploads/2021/06/24-360x361.jpg",
        name:"Flax Seed Balls",
        desc:"A crunchy, chocolaty dessert for hunger pangs, Flax Seeds will provide you instant energy. About This Product ...",
        price:"550",
    },
    {
        img:"https://www.fitmeals.co.in/wp-content/uploads/2021/06/snack-nuttyBuddy-300x300-1.jpg",
        name:"Nutty Buddy",
        desc:"Nutty Buddy – These Nutrient-packed nutty treats make for the perfect guilt-free snack … and ...",
        price:"650",
    },
    {
        img:"https://www.fitmeals.co.in/wp-content/uploads/2021/06/peanut-butter-balls-2-360x360.jpg",
        name:"Peanut Butter Truffles",
        desc:"Creamy peanut butter completely coated in dark chocolate — The ultimate snack for those who love all things ...",
        price:"1050",
    },
    {
        img:"https://www.fitmeals.co.in/wp-content/uploads/2021/05/1-300x300.jpg",
        name:"Almond Butter",
        desc:"Delectable almond butter prepared in-house, serves as the perfect guilt-free accompaniment with your healthy ...",
        price:"800",
    },
    {
        img:"https://www.fitmeals.co.in/wp-content/uploads/2021/06/arrabbiata-sauce-680x900-1-300x300.jpg",
        name:"Peanut Butter Truffles",
        desc:"Creamy peanut butter completely coated in dark chocolate — The ultimate snack for those who love all things ...",
        price:"1050",
    },
    {
        img:"https://www.fitmeals.co.in/wp-content/uploads/2021/06/peanut-butter-balls-2-360x360.jpg",
        name:"Peanut Butter Truffles",
        desc:"Creamy peanut butter completely coated in dark chocolate — The ultimate snack for those who love all things ...",
        price:"1050",
    },
    {
        img:"https://www.fitmeals.co.in/wp-content/uploads/2021/06/peanut-butter-balls-2-360x360.jpg",
        name:"Peanut Butter Truffles",
        desc:"Creamy peanut butter completely coated in dark chocolate — The ultimate snack for those who love all things ...",
        price:"1050",
    },
]


productDetail.forEach(function(elem,i){
    let box=document.createElement("div");

    let avatar=document.createElement("img");
    avatar.setAttribute("src",elem.img)

    let Name=document.createElement("h2");
    Name.innerText=elem.name

    let Desc=document.createElement("p");
    Desc.innerText=elem.desc

    let Price=document.createElement("h3");
    Price.innerText=`RS ${elem.price}`

    let Button=document.createElement("button");
    Button.innerText="Add to cart"

    Button.setAttribute("id", "addtobag")
    Button.addEventListener("click", function(){
        addToBag(elem,i)
    });
    box.append(avatar,Name,Desc,Price,Button)
    document.querySelector("#productdetail").append(box);
})
let productArr=JSON.parse(localStorage.getItem("addToBag"))|| []
function addToBag(elem,i){
    let obj={
        avatar:elem.img,
        Name:elem.name,
        Price:elem.price,
        // quantity:1
    }
    productArr.push(obj)
    console.log(productArr)
    localStorage.setItem("addToBag", JSON.stringify(productArr))
}