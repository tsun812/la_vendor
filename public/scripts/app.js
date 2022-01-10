$(document).ready(function() {
  const monalisaContainer = $("#monalisa-container")
  const campiContainer = $("#campi-container")
  const faceContainer = $("#face-container")
  const lastDanceContainer = $("#last_dance-container")

  $("#monalisa").click(function(event) {
    event.preventDefault()
    if (monalisaContainer.first().is(":hidden")) {
      monalisaContainer.show("slow", () => {
      });
      monalisaContainer.text("Artwork: Monalisa")
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
    } else {
      faceContainer.hide();
    }
  })

  /*
  Adding the description for the rest of the pcitures
  Jan. 10 @ 7:00 PST
  */

  $("#last-dance").click(function(event) {
    event.preventDefault()
    if (lastDanceContainer.first().is(":hidden")) {
      lastDanceContainer.show("slow", () => {
      });
      lastDanceContainer.text("Artwork: Last Dance")
    } else {
      lastDanceContainer.hide();
    }
  })



})







