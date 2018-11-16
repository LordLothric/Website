        var playing = false;
        var obj = document.createElement("audio");
        var obj2 = document.createElement("audio");
        var obj3 = document.createElement("audio");
        obj3.src = "../audio/Spooky.mp3";
        obj2.src = "../audio/pete.mp3";
        obj.src = "../audio/Doot.mp3";
        obj.volume = 0.10;
        obj.autoPlay = false;
        obj.preLoad = true;


        $('.doot').click(function () {
            if (playing == false) {
                obj.play();
                playing = true;
            } else {
                obj.pause();
                playing = false;
            }
        });

        $('#keepo').click(function () {
            if (playing == false) {
                obj2.play();
                playing = true;
            } else {
                obj2.pause();
                playing = false;
            }
        });


        $('.Spooky').click(function () {
            if (playing == false) {
                obj3.play();
                playing = true;
            } else {
                obj3.pause();
                playing = false;
            }
        });
