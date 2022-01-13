/*
$(document).ready(function() {
  const monalisaContainer = $("#monalisa-container")
  const campiContainer = $("#campi-container")
  const faceContainer = $("#face-container")
  const lastDanceContainer = $("#last_dance-container")
  const geniusContainer = $("#genius-container")
  const festivalContainer = $("#festival-container")
  const womenContainer = $("#women-container")
  const kidBearContainer = $("#kid_bear-container")
  const textBox = $("#text-box")
  const submit = $("#submit")

  $("#monalisa").click(function(event) {
    event.preventDefault()
    if (monalisaContainer.first().is(":hidden")) {
      monalisaContainer.show("slow", () => {
      });
      monalisaContainer.text("Artwork: Monalisa")
      monalisaContainer.append(textBox)
      monalisaContainer.append(submit)
    } else {
      monalisaContainer.hide();
    }
  })

  $("#campi").click(function(event) {
    event.preventDefault()
    if (campiContainer.first().is(":hidden")) {
      campiContainer.show("slow", () => {
      });
      campiContainer.text("Artwork: Campi")
      campiContainer.append(textBox)
      campiContainer.append(submit)
    } else {
      campiContainer.hide();
    }
  })

  $("#face").click(function(event) {
    event.preventDefault()
    if (faceContainer.first().is(":hidden")) {
      faceContainer.show("slow", () => {
      });
      faceContainer.text("Artwork: Face")
      faceContainer.append(textBox)
      faceContainer.append(submit)
    } else {
      faceContainer.hide();
    }
  })
*/
/*
Adding the description for the rest of the pcitures
Jan. 10 @ 7:00 PST
*/
/*
  $("#last-dance").click(function(event) {
    event.preventDefault()
    if (lastDanceContainer.first().is(":hidden")) {
      lastDanceContainer.show("slow", () => {
      });
      lastDanceContainer.text("Artwork: Last Dance")
      lastDanceContainer.append(textBox)
      lastDanceContainer.append(submit)
    } else {
      lastDanceContainer.hide();
    }
  })

  $("#genius").click(function(event) {
    event.preventDefault()
    if (geniusContainer.first().is(":hidden")) {
      geniusContainer.show("slow", () => {
      });
      geniusContainer.text("Artwork: Genius - A. E.")
      geniusContainer.append(textBox)
      geniusContainer.append(submit)
    } else {
      geniusContainer.hide();
    }
  })

  $("#festival").click(function(event) {
    event.preventDefault()
    if (festivalContainer.first().is(":hidden")) {
      festivalContainer.show("slow", () => {
      });
      festivalContainer.text("Artwork: Festival in Peru")
      festivalContainer.append(textBox)
      festivalContainer.append(submit)
    } else {
      festivalContainer.hide();
    }
  })

  $("#women").click(function(event) {
    event.preventDefault()
    if (womenContainer.first().is(":hidden")) {
      womenContainer.show("slow", () => {
      });
      womenContainer.text("Artwork: Festival in Peru")
      womenContainer.append(textBox)
      womenContainer.append(submit)
    } else {
      womenContainer.hide();
    }
  })

  $("#kid-bear").click(function(event) {
    event.preventDefault()
    if (kidBearContainer.first().is(":hidden")) {
      kidBearContainer.show("slow", () => {
      });
      kidBearContainer.text("Artwork: Festival in Peru")
      kidBearContainer.append(textBox)
      kidBearContainer.append(submit)
    } else {
      kidBearContainer.hide();
    }
  })

})
*/

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
const addProductToList = function(products, rowNum) {
  $(".row:last").append(products);
}
const createProduct = function(product) {
  console.log(product);
  return `
    <div class="col-md-3 border">
      <ul class="product-container">
        <div class="container-image">
          <img alt=${product.title}
            src= ${product.url_photo} width="200"
            height="300"/>
            <form method="post" action="/products/delete/${product.id}">
            <button id="delete-monalisa" type="submit">delete</button>
          </form>
          <div class="bottom-right"><i class="fas fa-heart"></i></div>
        </div>
        <div class="product-info" id="campi-container">
          <textarea id="text-box" placeholder="send a message to vendor"></textarea>
          <input id="submit" type="submit">
        </div>
      </ul>
    </div>
    `
}
function addProducts(products) {
  console.log(products);
  for (let i = 0; i < products.length; i++) {
    if (i % 4 === 0) {
      container.append(`<div class="row">`);
    }
    console.log(products[i]);
    let rowNum = (i - (i % 4)) / 4;
    console.log(rowNum);
    const productHTML = createProduct(products[i], rowNum);
    addProductToList(productHTML);
    if (i % 4 === 3) {
      container.append(`</div>`)
    }
  }
}

/*
Function to add image to favourites
When the heart emoji is click, the image is send to favourite page
Can use product id
Get or Post route?
*/

function addToFavourites() {
  //click the heart emoji to add the image to favourites
  //created a class for the heart emoji to get an easy handle

}


function getAllListings() {
  let url = "/getlists";
  return $.ajax({ url: url, method: 'GET' });
}
getAllListings().then(function(data) {
  console.log(data);
  addProducts(data);
});

$(document).on('click', '.container-image', function() {
  $(".container-image").on("click", function(event) {
    const showInfo = $(this).parent(".product-container")
      .find(".product-info").is(":hidden")
    $(".product-info").hide();
    if (showInfo) {
      $(this).parent(".product-container")
        .find(".product-info")
        .show()
    }
  })
});

