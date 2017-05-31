var cardID
var cloneID
function create(cardNum) {
    for (let i = 0; i < cardNum; i++) {
        let card = document.createElement("div")
        $("#card-box").append(card)
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
    $("body").append($(selectButton).attr("id","select-button"),$(cancelButton).attr("id","cancel-button"))
    $("#select-button").addClass("select-cancel-button select-button pop-in-animate")
    $("#cancel-button").addClass("select-cancel-button cancel-button pop-in-animate")
    $("#select-button").addClass("select-cancel-button-size")
    $("#cancel-button").addClass("select-cancel-button-size")
    $("#card-box").append($("#" + cardID).clone().attr('id',cloneID))
    $("#" + cardID).hide(500)
    $("#" + cloneID).addClass("card-select")
    $("#" + cloneID).animate({
        width: '320px',
        height: '480px'
    },500)
    $("#shelter").fadeIn(500)
})

$("#shelter").click(function () {
    $("#" + cloneID).animate({
        width:0,
        height:0
    },500)
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