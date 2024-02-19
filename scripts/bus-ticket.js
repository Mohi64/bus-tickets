

function setBackgroundColor(seatNumber){
    const selectSeat=document.getElementById(seatNumber);
    selectSeat.classList.add('bg-green-700')
}

setBackgroundColor('seat-arrangement')