


$(".image").click(function() {

   console.log(this);
    var divId = $(this).children('a').attr('data-reveal-id');
    var fullImgSrc = $(this).children('a').attr("href");
    var avatarImgSrc = $(this).children('.info').children("img").attr("src");

    $(".javascript-box").remove();

    var $photoDiv = $("<div id='" + divId + "' class='reveal-modal javascript-box' data-reveal aria-hidden='true' role='dialog'></div>");
    var $headerTwo = $("<h2 class='modalTitle'>Photo</h2>");
    var $imgElementOne = $("<img src='" + fullImgSrc + "' alt='Photo'>");
    var $avatarDiv = $("<div class='info'></div>");
    var $imgElementTwo = $("<img src='" + avatarImgSrc + "' alt='photo' class='avatar'>");
    var $span = $("<span class='attribution'>Photo by <b>Werner Bechtelar</b></span>");
    var $anchor = $("<a class='close-reveal-modal' aria-label='Close'>&#215;</a>");

    $('footer').after($photoDiv);
    $photoDiv.append($headerTwo).append($imgElementOne).append($avatarDiv).append($anchor);
    $avatarDiv.append($imgElementTwo).append($span);

});

$(document).foundation();


