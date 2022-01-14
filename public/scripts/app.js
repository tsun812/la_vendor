/*
This will traverse to the closest parent (product-container)
and traverse back down to closest child (product-info)

- This is the function for the images - when the image is click,
  it will show the information
- When same image is click, the image will hide
- Also,when another image is click, the previous image will hide the
  information
*/
const container = $(".container");
//const row = $(".row");
const addProductToList = function (product) {
  $(".row:last").append(product);
};
const createProduct = function (product, user, index, showDelete) {
  //console.log(product);
  const deleteButton = `
    <form method="post" action="/products/delete/${product.id}">
      <button id="delete-monalisa" class="user-botton" type="submit">delete</button>
    </form>`;
  let productHTML = `
    <div class="col-md-3 border">
      <ul class="product-container">
        <div class="container-image" data-image=${product.id}>
          <img alt=${product.title}
            src= ${product.url_photo} width="200"
            height="300"/>
          <div class="bottom-right"><i class="fas fa-heart" id=${product.id}></i></div>
        </div>
        <div class="product-info" id="campi-container">
          <textarea id="text-box" placeholder="send a message to vendor"></textarea>
          <input id="submit" type="submit">
        </div>
      </ul>
    </div>
    `
    let user_id = parseInt(user);
    let curr_id = parseInt(product.user_id);
    console.log(curr_id);
    console.log(user_id);
    addProductToList(productHTML);
    if(user_id === curr_id) {
      console.log("here");
      const containerImage = $(".container-image:last");
      containerImage.append('<div class="button-container"></div>');
      //const userBotton = $(".button-container:last");
      containerImage.append('<button class="user-botton sold" type="button">Sold</button>');
      containerImage.append(deleteButton);
    }
  }

function addProducts(products, user) {
  //console.log(products);
  for (let i = 0; i < products.length; i++) {
    if (i % 4 === 0) {
      container.append(`<div class="row">`);
    }
    //console.log(products[i]);
    //console.log(rowNum);
    const productHTML = createProduct(
      products[i],
      user,
      i,
      document.cookie.indexOf("session=") > -1
    );
    //addProductToList(productHTML);
    if (i % 4 === 3) {
      container.append(`</div>`);
    }
  }
}

//this function returns current user id
function getCurrUserId(data) {
  return data[0].user_id;
}

function getAllListings() {
  let url = "/getlists";
  return $.ajax({ url: url, method: "GET" });
}

function getUser() {
  let url = "/getUser";
  return $.ajax({ url: url, method: "GET" });
}

let params = [];
$.when(
  //get all paintings
  getAllListings().then(function (data) {
    params[0] = data;
  }),
  //get current user's id
  getUser().then(function (user) {
    params[1] = user;
  })
).then(function () {
  addProducts(params[0], params[1]);
});

$(document).on("click", ".container-image", function () {
  $(".container-image").on("click", function (event) {
    const showInfo = $(this)
      .parent(".product-container")
      .find(".product-info")
      .is(":hidden");
    $(".product-info").hide();
    if (showInfo) {
      $(this).parent(".product-container").find(".product-info").show();
    }
  });
});
function addToFavourites(productID) {
  //click the heart emoji to add the image to favourites
  //created a class for the heart emoji to get an easy handle
  let url = "/addFavourites";
  return $.ajax({ url: url, method: "POST", data: "product_id=" + productID });
}
$(document).on('click', '.fa-heart', function() {
      const productID = $(this).attr('id');
      console.log(productID);
      addToFavourites(productID);
  })

function markAsSold(productID) {
    let url = 'products/marksold';
    return $.ajax({ url: url, method: 'POST', data: 'product_id=' + productID });
}
$(document).on('click', '.sold', function() {
    const imageContainer = $(this).parent();
    const soldText = '<div class="markSold">SOLD</div>';
    imageContainer.append(soldText);
    $('.markSold').addClass('markSold');
    const productID = $(this).closest('.container-image').attr('data-image');
    console.log(productID);
    markAsSold(productID);
})
