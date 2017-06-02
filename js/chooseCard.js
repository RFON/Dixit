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
    cardID = $(this).attr('id')
    cloneID = cardID + 'clone'
    $("#select-button").show()
    $("#cancel-button").show()
    $("#select-button").addClass("pop-in-animate")
    $("#cancel-button").addClass("pop-in-animate")
    $("#select-button").addClass("select-cancel-button-size")
    $("#cancel-button").addClass("select-cancel-button-size")
    $("#card-box").append($("#" + cardID).clone().attr('id', cloneID))
    $("#" + cardID).hide(500)
    $("#" + cloneID).addClass("card-select")
    $("#" + cloneID).animate({
        width: '320px',
        height: '480px'
    }, 500)
    $("#shelter").fadeIn(500)
    setTimeout(function () {
        $("#select-button").removeClass("pop-in-animate")
        $("#cancel-button").removeClass("pop-in-animate")
    }, 500);
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
    }, 500)
    $("#" + cardID).show(500)
    $("#shelter").fadeOut(500)
    $("#select-button").addClass("pop-out-animate")
    $("#cancel-button").addClass("pop-out-animate")
    setTimeout(function () {
        $("#" + cloneID).remove()
        $("#select-button").removeClass("select-cancel-button-size")
        $("#cancel-button").removeClass("select-cancel-button-size")
        $("#select-button").removeClass("pop-out-animate")
        $("#cancel-button").removeClass("pop-out-animate")
        $("#select-button").hide()
        $("#cancel-button").hide()
    }, 500)
}