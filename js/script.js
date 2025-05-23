document.addEventListener('DOMContentLoaded', () => {
    const open = document.getElementById('open');
    const popUp = document.getElementById('popUpContainer');
    const close = document.getElementById('close');

    const openCart = document.getElementById('openCart');
    const cartModal = document.getElementById('cartModal');
    const closeCart = document.getElementById('closeCart');

    const plusBtn = document.getElementById("plusBtn");
    const number = document.getElementById("number");
    const minusBtn = document.getElementById("minusBtn");

    if (open && popUp && close) 
    {
        open.addEventListener('click', () => {
            popUp.classList.add('show');
        });

        close.addEventListener('click', () => {
            popUp.classList.remove('show');
        });

    }

    if (openCart && cartModal && closeCart) 
    {
        openCart.addEventListener('click', () => {
            cartModal.classList.add('show');
            console.log("Opened Cart");
        });

        closeCart.addEventListener('click', () => {
            cartModal.classList.remove('show');
        });

    }

    if (plusBtn && number && minusBtn)
    {
        plusBtn.addEventListener('click', () => {
            console.log(parseInt(number.textContent))
            let newNum = parseInt(number.textContent) +1;
            number.textContent = newNum;
        });

        minusBtn.addEventListener('click', () => {
            console.log(parseInt(number.textContent))
            let newNum = parseInt(number.textContent) -1;
            number.textContent = newNum;
        });

    }


}); //kept getting an error about a variable being null so had to add this to make sure the elements were loaded first
