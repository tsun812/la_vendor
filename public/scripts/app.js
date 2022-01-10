$(document).ready(function() {
  const monalisaContainer = $("#monalisa-container")
  const campiContainer = $("#campi-container")
  const faceContainer = $("#face-container")
  const lastDanceContainer = $("#last_dance-container")
  const geniusContainer = $("#genius-container")
  const festivalContainer = $("#festival-container")
  const womenContainer = $("#women-container")
  const kidBearContainer = $("#kid_bear-container")

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

  $("#genius").click(function(event) {
    event.preventDefault()
    if (geniusContainer.first().is(":hidden")) {
      geniusContainer.show("slow", () => {
      });
      geniusContainer.text("Artwork: Genius - A. E.")
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
    } else {
      kidBearContainer.hide();
    }
  })

})







