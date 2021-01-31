const fastClassCost = 150;
const economyCost = 100;

const fastClassPBtn = document.getElementById('plusButtonF').addEventListener('click', function () {
    inputTicketValue('fastClass-input', true)
})
const economyPBtn = document.getElementById('plusButtonE').addEventListener('click', function () {
    inputTicketValue('economy-input', true)
})
const fastClassMBtn = document.getElementById('minusButtonF').addEventListener('click', function () {
    inputTicketValue('fastClass-input', false)
})
const economyMBtn = document.getElementById('minusButtonE').addEventListener('click', function () {
    inputTicketValue('economy-input', false)
})

function inputTicketValue(plus, minus) {
    const plusValue = document.getElementById(plus).value;
    const inputPlusValue = parseInt(plusValue);
    let ticketValue = inputPlusValue;
    if (minus == true) {
        ticketValue = inputPlusValue + 1;
    } else if (minus == false && ticketValue > 0) {
        ticketValue = inputPlusValue - 1;
        document.getElementById(plus).value = ticketValue;
        totalTicketBooking()
    }
}


function totalTicketBooking() {
    const fastClassTicketPrise = document.getElementById('fastClass-input').value;
    const economyTicketPrise = document.getElementById('economy-input')
    const subTotalPrise = (fastClassTicketPrise * fastClassCost) + (economyTicketPrise * economyCost);
    document.getElementById('subtotal').innerText = subTotalPrise;
    const texFree = subTotalPrise * .1;
    document.getElementById('free').innerText = texFree;
    totalMembers = subTotalPrise + texFree;
    document.getElementById('total').innerText = totalMembers;
}

//  function flightBooking()

// document.getElementById('plusButtonF').addEventListener('click',function(){
//     document.getElementById('subTotal').innerText = ''
// })
// document.getElementById('plusButtonE').addEventListener('click',function(){
//     document.getElementById('subTotal').innerText = ''
// })
// document.getElementById('minusButtonF').addEventListener('click',function(){
//     document.getElementById('subTotal').innerText = ''
// })
// document.getElementById('minusButtonE').addEventListener('click',function(){
//     document.getElementById('subTotal').innerText = ''
// })

// function bookingTicket(fast,economy){
//     const ticketPrise = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         const inputTicket  = arguments[i];
//         let  EcoInputTicket = in

//     }

// }


// function totalTicketBooking(booking, members) {
//     const emptySeat = getInputValue(booking);
//     let newTicketSale = emptySeat;
//     if (members == true) {
//         newTicketSale = emptySeat + 1;
//     }
//     if (members == false && emptySeat > 0) {
//         newTicketSale = emptySeat - 1;
//     }
//     document.getElementById(booking + '-input').value = newTicketSale;
//     let totalTicket = 0;
//     if (booking == 'fastClass') {
//         totalTicket = newTicketSale * 150;
//     }
//     if (booking == 'economy') {
//         totalTicket = newTicketSale * 100;
//     }
//     document.getElementById(ticket + '-prise').innerText = '$' + totalTicket;
//     flightBooking()
// }

// function flightBooking(){
//     const fastClassTicketPrise = getInputValue('fastClass');
//     const economyTicketPrise = getInputValue('economy');
//     const subTotalPrise = fastClassTicketPrise * 150 + economyTicketPrise * 100;
//     document.getElementById('subtotal').innerText = '$' + subTotalPrise;
//     const ticketVat = Math.round(subTotalPrise * 50);
//     document.getElementById('free').innerText = '$' + ticketVat;
//     const totalMembers = subTotalPrise + ticketVat;
//     document.getElementById('totalBooking').innerText = '$' +totalMembers;

// } 
// function getInputValue(booking){
//     const newBooking = document.getElementById(booking + '-input');
//     const emptySeat = parseInt(newBooking.value);
//     return emptySeat;
// }
