let position = $(".img__container:last-child").offset();
let countImg = $(".section__container").children().length
let imgSrc = new Array()
for (let i = 0; i < countImg; i++){
    imgSrc[i] = $(".section__img").eq(i).attr("src")
}

$(document).scroll(function () { 
    var screenTop = $(document).scrollTop();
    position = $(".img__container:last-child").offset();
    let y = 0;
    if (screenTop >= position.top - 600){
        for (y; y < countImg; y++){
            $(".section__container").append($('<div class="img__container"></div>').append($('<img src="' + imgSrc[y] + '" class="section__img">')))
        }
    }
});





