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
        let card = document.createElement("li")
        let cardPicture = `<img src = ${pictureHouse[i]}>`
        // let picture = document.createElement("img")
        $("#card-box").append(card)
        $(card).append(cardPicture)
        $(card).addClass("card-in-hand")
        $(card).attr('id', 'card' + i)
    }
}
create(7)

$(".card-in-hand").mouseenter(function () {
    $(this).addClass("card-in-hand-hover")
})

$(".card-in-hand").mouseleave(function () {
    $(this).removeClass("card-in-hand-hover")
})

$(".card-in-hand").click(function () {
    cardID = $(this).attr('id')
    cloneID = cardID + 'clone'
    let selectButton = document.createElement("div")
    let cancelButton = document.createElement("div")
    $("body").append($(selectButton).attr("id", "select-button"), $(cancelButton).attr("id", "cancel-button"))
    $("#select-button").addClass("select-cancel-button select-button pop-in-animate")
    $("#select-button").append("<img src = 'images/icon/ic_done_white_36dp_2x.png'>")
    $("#cancel-button").addClass("select-cancel-button cancel-button pop-in-animate")
    $("#cancel-button").append("<img src = 'images/icon/ic_clear_white_36dp_2x.png'>")
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
})

$("#shelter").click(function () {
    $("#" + cloneID).animate({
        width: 0,
        height: 0
    }, 500)
    $(this).fadeOut(500)
    $("#" + cardID).show(500)
    $("#select-button").addClass("pop-out-animate")
    $("#cancel-button").addClass("pop-out-animate")
    setTimeout(function () {
        $("#" + cloneID).remove()
        $("#select-button").remove()
        $("#cancel-button").remove()
    }, 500)
})