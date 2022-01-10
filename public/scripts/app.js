$(document).ready(function() {
  const monalisaContainer = $("#monalisa-container")
  const campiContainer = $("#campi-container")
  const faceContainer = $("#face-container")

  $("#monalisa").click(function (event) {
    event.preventDefault()
   if ( monalisaContainer.first().is( ":hidden" ) ) {
    monalisaContainer.show( "slow" , () => {
    });
    monalisaContainer.text("This is monalisa")
  } else {
    monalisaContainer.hide();
  }
 })

 $("#campi").click(function (event) {
  event.preventDefault()
 if ( campiContainer.first().is( ":hidden" ) ) {
  campiContainer.show( "slow" , () => {
  });
  campiContainer.text("This is campi")
} else {
  campiContainer.hide();
}
})

$("#face").click(function (event) {
  event.preventDefault()
 if ( faceContainer.first().is( ":hidden" ) ) {
  faceContainer.show( "slow" , () => {
  });
  faceContainer.text("This is face")
} else {
  faceContainer.hide();
}
})




})







