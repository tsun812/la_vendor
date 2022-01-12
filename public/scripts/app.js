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
  const addProductToList = function(products) {
    container.append(products);
}
  const createProduct = function(product) {
    console.log(product);
    return `
    <div class="col border">
      <ul class="product-container">
        <div class="container-image">
          <img alt=${product.title}
            src= ${product.url_photo} width="200"
            height="300"/>
          <div class="bottom-right"><i class="fas fa-heart"></i></div>
        </div>
        <div class="product-info" id="campi-container">
        <form method="post" action="/delete">
        <textarea id="text-box" placeholder="send a message"></textarea>
          <input id="submit" type="submit">
            <button id="delete-monalisa" type="submit">delete</button>
          </form>
       </div>
      </ul>
    </div>
    `
  }
  function addProducts(products){
    console.log(products);
    for (let i = 0; i < products.length; i++) {
      console.log(products[i]);
      const productHTML = createProduct(products[i]);
      addProductToList(productHTML);
    }
  }
  function getAllListings() {
    let url = "/getlists";
    return $.ajax({url: url, method: 'GET'});
  }
  getAllListings().then(function( data ) {
    console.log(data);
    addProducts(data);
  });

  $(document).on('click', '.container-image', function(){
    $(".container-image").on("click", function(event) {
    const showInfo = $(this).parent(".product-container")
      .find(".product-info").is(":hidden")
    $(".product-info").hide();
    if (showInfo) {
      $(this).parent(".product-container")
        .find(".product-info")
        .show()
    }})
});

