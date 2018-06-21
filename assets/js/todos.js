// Check off item by clicking
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});

// Delete item
$("ul").on("click", ".delete", function (e) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    e.stopPropagation();
});

// Add new item
$("input[type='text']").keypress(function(e){
    if(e.which === 13){
        $("ul").append("<li><span class='delete'><i class='fas fa-trash-alt'></i></span> " + $(this).val() + " </li>");
        $(this).val("");
    }
});

// Toggle text input
$(".fa-minus").click(function(){
    $("input[type='text']").fadeToggle();
});