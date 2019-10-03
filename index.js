$(".list-group-item").hover(function() {
    console.log("called");
    $(this).addClass("list-group-item-hover");
    }, function(){
        console.log("offhover");
        $(this).removeClass("list-group-item-hover");
    });