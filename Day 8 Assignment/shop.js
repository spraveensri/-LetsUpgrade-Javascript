let products = [
   {
    id: 1,
    name: "PUMA T-Shirt",
    size: "M",
    color: "red",
    price: 799,
    image: "product1.jpg",
    description: "Round neck Puma T-shirt",
  },
  {
    id: 2,
    name: "Black Wrist Watch",
    size: "Normal",
    color: "Black",
    price: 699,
    image: "product9.jpg",
    description: "This watch tells the time.",
  },

  {
    id: 3,

    name: "Track Pant",
    size: "XL",
    color: "grey",
    price: 499,
    image: "product3.jpg",
    description: "Double brested grey suit",
  },

  {
    id: 4,
    name: "T-Shirt",
    size: "L",
    color: "__",
    price: 699,
    image: "product4.jpg",
    description: "T-shirt to wear.",
  },

  {
    id: 5,
    name: "Shoes",
    size: "8",
    color: "White",
    price: 899,
    image: "product5.jpg",
    description: "Party wear orange tuxedo",
  },

  {
    id: 6,
    name: "T-shirt",
    size: "M",
    color: "black",
    price: 999,
    image: "product6.jpg",
    description: "Its a T-shirt.",
  },
  {
      id: 7,
      name: "White Tshirt",
      size: "L",
      color: "white",
      price: 1200,
      image: "product7.jpg",
      description: "Good looking white tshirt",
    },
    {
      id: 8,
      name: "Black Shirt",
      size: "M",
      color: "Black",
      price: 1500,
      image: "product8.jpeg",
      description: "Good looking black shirt",
    },
  
    {
      id: 9,
      name: "Checked Shirt",
      size: "S",
      color: "White & Black",
      price: 900,
      image: "product9.jpg",
      description: "Good looking Checked Shirt",
    },
  
    {
      id: 10,
      name: "Black Female Blazer",
      size: "M",
      color: "Black",
      price: 3000,
      image: "product10.jpg",
      description: "Beautifull Blazer",
    },
  
    {
      id: 11,
      name: "Navy Blue Top",
      size: "S",
      color: "Blue",
      price: 1300,
      image: "product11.jpg",
      description: "Good looking Top",
    },
  
    {
      id: 12,
      name: "Indian Dress",
      size: "M",
      color: "Henna",
      price: 1500,
      image: "product12.jpg",
      description: "Good looking Traditional Dress",
    },
];
let cart = [];
let count = 0;

function displaymerch(merchd, type = "main", place = "card") {
  console.log(merchd);
  let strmerch = "";
  let arrmerch = "";
  merchd.forEach(function (ele, index) {
    if (type == "main") {
      strmerch = ` <div class="productcardbg">
        <div class="image">
          <img src="/images/${ele.image}" width="100%" />
        </div>
        <div>
        <h3 style="font-family : Geneva, Verdana, sans-serif; padding-left : 10px">${ele.name}</h3>
        <p>Size : ${ele.size}</p>
        <p>Color : ${ele.color}</p>
        <p>price : ${ele.price}</p>
        <h5 style="font-family : Geneva, Verdana, sans-serif; padding-left : 10px ;padding-top : 10px">${ele.description}</h5>
        <p style="padding-top: 5px">
          <button class="buttonbg" onclick="addToCart(${ele.id})">Add to Cart</button>
        </p>
      </div>
      </div>`;
      arrmerch += strmerch;
    }

    if (type == "cartd") {
      strmerch = ` <div class="productcardbg">
        <div class="image">
          <img src="/images/${ele.image}" width="100%" />
        </div>
        <div>
        <h3 style="font-family : Geneva, Verdana, sans-serif; padding-left : 10px">${ele.name}</h3>
        <p>Size : ${ele.size}</p>
        <p>Color : ${ele.color}</p>
        <p>price : ${ele.price}</p>
        <h5 style="font-family : Geneva, Verdana, sans-serif; padding-left : 10px ;padding-top : 10px">${ele.description}</h5>
        <p style="padding-top: 5px">
          <button class="buttonbg" onclick="deletemerch(${ele.id})">Delete item</button>
        </p>
      </div>
      </div>`;

      arrmerch += strmerch;

    }
  });

  document.getElementById(place).innerHTML = arrmerch;

}


function getProductByID(mercha, id) {
  return mercha.find(function (ele) {
    return ele.id == id;
  });
}
let flag = false;

function addToCart(id) {
  flag = false;
  let item = getProductByID(products, id);

  cart.forEach(function (element) {
    if (element.id == item.id) {
      flag = true;

    }


  })
  if (flag) {
    alert('Item already added to cart!!');
    return 0;
  }
  cart.push(item);
  count += 1;
  document.getElementById("numb").innerText = count;
  let type = "cartd";
  let place = "cartcard";
  displaymerch(cart, type, place);

}


function search() {
  console.log("calling");
}

function deletemerch(id) {
  let item = getProductByID(products, id);
  let index = cart.findIndex(function (item1) {
    return item1.id == id;
  });
  cart.splice(index, 1);
  count -= 1;
  document.getElementById("numb").innerText = count;
  let type = "cartd";
  let place = "cartcard";
  displaymerch(cart, type, place);
}

function filter() {
  let minvalue = document.getElementById("minprice").value;
  let maxvalue = document.getElementById("maxprice").value;
  let items = products.filter(function (itemsl) {
    return itemsl.price >= minvalue && itemsl.price <= maxvalue;
  })
  displaymerch(items);
  document.getElementById("minprice").value = "";
  document.getElementById("maxprice").value = "";
}

function search() {
  let str = document.getElementById("serval").value;
  console.log(str); 
  let items = products.filter(function (ele) {
    return ele.name.indexOf(str) != -1;
  });
  displaymerch(items);


}
displaymerch(products);