

var buttun = document.getElementById('sanket');

buttun.style.color = 'pink';

var cart = document.querySelector('.cart');

buttun.addEventListener('click', function() {

    cart.style.display = cart.style.display ==='none'?'block':'none';
});













function first() {
   
    var box = document.createElement("div");
    box.className = "box";
  
 
    cart.appendChild(box);
  

    var picture = document.createElement("img");
    var heading = document.createElement("h3");
    var prize = document.createElement("h2");
  
  
    var property = {
        image: "/dennislingo_premium_attire_green_striped_slim_fit_shirt.jpg",
        name: "DENNISLINGO PREMIUM ATTIRE",
        prize: "515 RS"
    };
  

    picture.src = property.image;
    heading.textContent = property.name;
    prize.textContent = property.prize;
  

    box.appendChild(picture);
    box.appendChild(heading);
    box.appendChild(prize);

    if (Array.isArray(cart)) {
        cart.push(property);
    }
  }
  





  function second() {
   
    var box = document.createElement("div");
    box.className = "box";
  
 
    cart.appendChild(box);
  

    var picture = document.createElement("img");
    var heading = document.createElement("h3");
    var prize = document.createElement("h2");
  
  
    var prop = 
    {image:"/ketch_maroon_checked_slim_fit_shirt_with_patch_pocket.jpg",
        name:"KETCH",
        prize:"570 RS"
       }
      
  

    picture.src = prop.image;
    heading.textContent = prop.name;
    prize.textContent = prop.prize;
  

    box.appendChild(picture);
    box.appendChild(heading);
    box.appendChild(prize);

    if (Array.isArray(cart)) {
        cart.push(prop);
    }
  }





  function third() {
   
    var box = document.createElement("div");
    box.className = "box";
  
 
    cart.appendChild(box);
  

    var picture = document.createElement("img");
    var heading = document.createElement("h3");
    var prize = document.createElement("h2");
  
  
    var proper = 
        {image:"/the_indian_garage_co_navy_blue_checked_shirt_with_patch_pocket.jpg",
            name:"THE INDIAN GARAGE CO",
            prize:"560 RS"
           }
      
  

    picture.src = proper.image;
    heading.textContent = proper.name;
    prize.textContent = proper.prize;
  

    box.appendChild(picture);
    box.appendChild(heading);
    box.appendChild(prize);

    if (Array.isArray(cart)) {
        cart.push(proper);
    }
  }




































































































































// var proper = [
//   {image:"/ketch_maroon_checked_slim_fit_shirt_with_patch_pocket.jpg",
//    name:"KETCH",
//    prize:"570 RS"
//   }
// ];


var prop = [
  {image:"/the_indian_garage_co_navy_blue_checked_shirt_with_patch_pocket.jpg",
   name:"THE INDIAN GARAGE CO",
   prize:"560 RS"
  }
]


// // function batton(){
  

// //   var sann = [
// //     {image:"/dennislingo_premium_attire_green_striped_slim_fit_shirt.jpg",
// //      name:"DENNISLINGO PREMIUM ATTIRE",
// //      prize:"515 RS"
// //     }
// //   ];
 

// //     sann.push(property);


// // }



// // function lastobject() {

// // property.pop();



// // }


var proper = [
    {image:"/ketch_maroon_checked_slim_fit_shirt_with_patch_pocket.jpg",
     name:"KETCH",
     prize:"570 RS"
    }
  ];



// // var cart =document.querySelector("cart")
// function second(){ 

// proper.forEach(e=>{
//     var box= document.createElement("div")
// box.className="box";

// cart.appendChild(box)

// var picture= document.createElement("img")
// var heading= document.createElement("h3") 
// var priz= document.createElement("h2")


// box.appendChild(picture)
// box.appendChild(heading)
// box.appendChild(priz)

// picture.src=e.image;
// heading.textContent=e.name;
// priz.textContent=e.prize


// })
// }



// // var prop = [
// //     {image:"/the_indian_garage_co_navy_blue_checked_shirt_with_patch_pocket.jpg",
// //      name:"THE INDIAN GARAGE CO",
// //      prize:"560 RS"
// //     }
// //   ];



// // var cart =document.querySelector("cart")
// function third(){ 

// prop.forEach(c=>{
//     var box= document.createElement("div")
// box.className="box";

// cart.appendChild(box)

// var picture= document.createElement("img")
// var heading= document.createElement("h3") 
// var priz= document.createElement("h2")


// box.appendChild(picture)
// box.appendChild(heading)
// box.appendChild(priz)

// picture.src=c.image;
// heading.textContent=c.name;
// priz.textContent=c.prize


// })
// }



// function lastobject() (){

//     property.pop();
  
//     netflix();
  
//   }