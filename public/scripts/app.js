$(document).ready(function() {
 const descContainer = $("#description-container")

 $("#monalisa").click(function () {
  if ( descContainer.first().is( ":hidden" ) ) {
    descContainer.slideDown( "slow" );
  } else {
    descContainer.hide();
  }
});
  })


  /*

<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
  $(".btn1").click(function(){
    $("p").slideUp();
  });
  $(".btn2").click(function(){
    $("p").slideDown();
  });
});
</script>
</head>
<body>
  */







