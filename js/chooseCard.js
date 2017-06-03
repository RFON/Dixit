var cardID
var cloneID
var pictureHouse = new Array()
pictureHouse[0] = 'images/dixit-test0.jpg'
pictureHouse[1] = 'images/dixit-test1.jpg'
pictureHouse[2] = 'images/dixit-test2.jpg'
pictureHouse[3] = 'images/dixit-test3.jpg'
pictureHouse[4] = 'images/dixit-test4.jpg'
pictureHouse[5] = 'images/dixit-test5.jpg'
pictureHouse[6] = 'images/dixit-test6.jpg'
var styles = getComputedStyle(document.documentElement)
function create(cardNum) {
    for (let i = 0; i < cardNum; i++) {
        cardID = 'card' + i
        let card = document.createElement("li")
        let cardPicture = `<img src = ${pictureHouse[i]}>`
        $("#card-box").append(card)
        $(card).append(cardPicture)
        $(card).addClass("card-in-hand")
        $(card).attr('id', cardID)
    }
}

create(7)

$(".card-in-hand").mouseenter(function () {
    $(this).addClass("card-in-hand-hover")
})

$(".card-in-hand").mouseleave(function () {
    $(this).removeClass("card-in-hand-hover")
})

$("li").click(function () {
    var cardWidth = String(styles.getPropertyValue("--card-selected-width"))
    var cardHeight = String(styles.getPropertyValue("--card-selected-height"))
    console.log(cardWidth,cardHeight)
    cardID = $(this).attr('id')
    cloneID = cardID + 'clone'
    $("#button-box").show()
    $("#select-button").addClass("pop-in-animate")
    $("#cancel-button").addClass("pop-in-animate")
    $("#select-button").addClass("select-cancel-button-size")
    $("#cancel-button").addClass("select-cancel-button-size")
    $("body").append($("#" + cardID).clone().attr('id', cloneID))
    $("#" + cardID).hide(300)
    $("#" + cloneID).addClass("card-select")
    $("#" + cloneID).removeClass("card-selected")
    $("#" + cloneID).animate({
        width: cardWidth,
        height: cardHeight
    }, 300)
    $("#shelter").fadeIn(300)
    setTimeout(function () {
        $("#select-button").removeClass("pop-in-animate")
        $("#cancel-button").removeClass("pop-in-animate")
    }, 300);
})

$("#shelter").click(function () {
    itemsPopOut()
})
$("#cancel-button").click(function () {
    itemsPopOut()
})

$("#select-button").click(function(){
    $(".card-selected").removeClass("card-selected")
    $("#"+cardID).addClass("card-selected")
    itemsPopOut()
})

function itemsPopOut(){
    $("#" + cloneID).animate({
        width: 0,
        height: 0
    }, 300)
    $("#" + cardID).show(300)
    $("#shelter").fadeOut(300)
    $("#select-button").addClass("pop-out-animate")
    $("#cancel-button").addClass("pop-out-animate")
    setTimeout(function () {
        $("#" + cloneID).remove()
        $("#select-button").removeClass("select-cancel-button-size")
        $("#cancel-button").removeClass("select-cancel-button-size")
        $("#select-button").removeClass("pop-out-animate")
        $("#cancel-button").removeClass("pop-out-animate")
        $("#button-box").hide()
    }, 300)
}