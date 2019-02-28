$("button").click(function(){
    var q1 = parseInt($("#in1").val()); var q2 = $("#in2").val().toLowerCase(); 
    if(q1 > 90 && q2 === "work"){
        $("#p1").html("Plankton");
        $("#im1").hide();
        $("#im2").hide();
        $("#im3").show();
        $("#im4").hide();
        $("body").css("background-image","url(https://static.comicvine.com/uploads/scale_medium/11/111746/4747208-thechumbucket.jpg)");
        }
        
    else if(q1 > 90 && q2 === "play"){
        $("#p1").html("Sandy");
        $("#im1").hide();
        $("#im2").hide();
        $("#im3").hide();
        $("#im4").show();
        $("body").css("background-image","url(https://imgix.bustle.com/elite-daily/2016/02/06135819/The_Treedome.jpg?w=1020&h=574&fit=crop&crop=faces&auto=format&q=70)");
        }
        
    else if(q1 <= 90 && q2 === "work"){
        $("#p1").html("Spongebob");
        $("#im1").show();
        $("#im2").hide();
        $("#im3").hide();
        $("#im4").hide();
        $("body").css("background-image","url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVr3x9et4KPoODgPJEvxVm2tPCsuL86fMPxCDdSeFCYfBf_Ff31A)");
        }
        
    else if(q1 <= 90 && q2 === "play"){
        $("#p1").html("Patrick");
        $("#im1").hide();
        $("#im2").show();
        $("#im3").hide();
        $("#im4").hide();
        $("body").css("background-image","url(http://vignette1.wikia.nocookie.net/spongebob/images/f/fd/Glove_World_R.I.P._03.png/revision/latest?cb=20150614052609)");
        }
    });