$("#video").click(function() {
    $(".video").html('<iframe width="560" height="315" src="https://www.youtube.com/embed/g3rGzOpV7mI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
});
document.getElementById("audio").addEventListener("click", function() {
    var audio = new Audio("diwali2.mp3");
    audio.play();
    document.getElementById("pause").addEventListener("click", function() {
        audio.pause();
    });
});

AOS.init();