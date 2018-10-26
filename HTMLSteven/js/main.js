 $(document).ready(function() {
        var playing = false;
        var obj = document.createElement("audio");
        obj.src="../audio/Doot.mp3";
        obj.volume=0.10;
        obj.autoPlay=false;
        obj.preLoad=true;       
 
     
     $('.doot').click(function() {
  if (playing == false) {
      obj.play();
      playing = true;
  } else {
      obj.pause();
      playing = false;
  }
});  
    });