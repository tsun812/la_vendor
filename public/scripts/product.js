// $(() => {
//   const container = $(".container");
//   const addProductToList = function(product) {
//     container.addProduct(product);
// }

//   const createProduct = function(product) {
//     return `
//     <div class="col border">
//       <ul class="product-container">
//         <div class="container-image">
//           <image id=<%= product.id %> alt=<%= product.name %>
//             src=<%= product.image_url %> width="200"
//             height="300"> </image>
//           <div class="bottom-right"><i class="fas fa-heart"></i></div>
//         </div>
//         <div class="product-info" id="campi-container">
//           <textarea id="text-box" placeholder="send a message"></textarea>
//           <input id="submit" type="submit">
//         </div>
//       </ul>
//     </div>
//     `
//   }
//   function addProducts(products){
//     for (const product in products) {
//       const product = properties[propertyId];
//       addProductToList(product);
//     }
//   }
//   function getAllListings(params) {
//     let url = "/home";
//     return $.ajax({
//       url,
//     });
//   }
//   getAllListings().then(function( json ) {
//    addProducts(json.products);
//   });

// });