document.addEventListener('DOMContentLoaded', () => {
    const open = document.getElementById('open');
    const popUp = document.getElementById('popUpContainer');
    const close = document.getElementById('close');

    const openCart = document.getElementById('openCart');
    const cartModal = document.getElementById('cartModal');
    const closeCart = document.getElementById('closeCart');

    const MarsPlusBtn = document.getElementById("MarsPlusBtn");
    const MarsNumber = document.getElementById("MarsNumber");
    const MarsMinusBtn = document.getElementById("MarsMinusBtn");
    const MarsCartText = document.getElementById("MarsCartText");
    const MarsBuyBtn = document.getElementById("MarsBuyBtn");

    const NeptunePlusBtn = document.getElementById("NeptunePlusBtn");
    const NeptuneNumber = document.getElementById("NeptuneNumber");
    const NeptuneMinusBtn = document.getElementById("NeptuneMinusBtn");
    const NeptuneCartText = document.getElementById("NeptuneCartText");
    const NeptuneBuyBtn = document.getElementById("NeptuneBuyBtn");

    const JupiterPlusBtn = document.getElementById("JupiterPlusBtn");
    const JupiterNumber = document.getElementById("JupiterNumber");
    const JupiterMinusBtn = document.getElementById("JupiterMinusBtn");
    const JupiterCartText = document.getElementById("JupiterCartText");
    const JupiterBuyBtn = document.getElementById("JupiterBuyBtn");

    const SaturnPlusBtn = document.getElementById("SaturnPlusBtn");
    const SaturnNumber = document.getElementById("SaturnNumber");
    const SaturnMinusBtn = document.getElementById("SaturnMinusBtn");
    const SaturnCartText = document.getElementById("SaturnCartText");
    const SaturnBuyBtn = document.getElementById("SaturnBuyBtn");

    const UranusPlusBtn = document.getElementById("UranusPlusBtn");
    const UranusNumber = document.getElementById("UranusNumber");
    const UranusMinusBtn = document.getElementById("UranusMinusBtn");
    const UranusCartText = document.getElementById("UranusCartText");
    const UranusBuyBtn = document.getElementById("UranusBuyBtn");

    const MoonPlusBtn = document.getElementById("MoonPlusBtn");
    const MoonNumber = document.getElementById("MoonNumber");
    const MoonMinusBtn = document.getElementById("MoonMinusBtn");
    const MoonCartText = document.getElementById("MoonCartText");
    const MoonBuyBtn = document.getElementById("MoonBuyBtn");

    const searchBar = document.getElementById("searchArea");

    const searchResults = document.getElementById("SearchResults");


    //Contact Page Modal
    if (open && popUp && close) 
    {
        open.addEventListener('click', () => {
            popUp.classList.add('show');
        });

        close.addEventListener('click', () => {
            popUp.classList.remove('show');
        });

    }


    //Cart Modals
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


    //Flight Page Logic
    if (
        MarsPlusBtn && MarsNumber && MarsMinusBtn && MarsCartText && MarsBuyBtn &&
        NeptunePlusBtn && NeptuneNumber && NeptuneMinusBtn && NeptuneCartText && NeptuneBuyBtn&&
        JupiterPlusBtn && JupiterNumber && JupiterMinusBtn && JupiterCartText&& JupiterBuyBtn&&
        UranusPlusBtn && UranusMinusBtn && UranusNumber && UranusCartText && UranusBuyBtn&&
        SaturnPlusBtn && SaturnMinusBtn && SaturnNumber && SaturnCartText && SaturnBuyBtn&&
        MoonPlusBtn && MoonMinusBtn && MoonNumber && MoonCartText && MoonBuyBtn

    )
    {
        
    MarsPlusBtn.addEventListener('click', () => {
        console.log(parseInt(MarsNumber.textContent));
        addFlight(MarsNumber);
    });

    MarsMinusBtn.addEventListener('click', () => {
        console.log(parseInt(MarsNumber.textContent));
        removeFlight(MarsNumber);
    });

    MarsBuyBtn.addEventListener('click', () => {
        console.log("Buying " + MarsNumber.textContent);
        bookFlight(MarsNumber, MarsCartText);
    });

    NeptunePlusBtn.addEventListener('click', () => {
        console.log(parseInt(NeptuneNumber.textContent));
        addFlight(NeptuneNumber);
    });

    NeptuneMinusBtn.addEventListener('click', () => {
        console.log(parseInt(NeptuneNumber.textContent));
        removeFlight(NeptuneNumber);
    });

    NeptuneBuyBtn.addEventListener('click', () => {
        console.log("Buying " + NeptuneNumber.textContent);
        bookFlight(NeptuneNumber, NeptuneCartText);
    });

    JupiterPlusBtn.addEventListener('click', () => {
        console.log(parseInt(JupiterNumber.textContent));
        addFlight(JupiterNumber);
    });

    JupiterMinusBtn.addEventListener('click', () => {
        console.log(parseInt(JupiterNumber.textContent));
        removeFlight(JupiterNumber);
    });

    JupiterBuyBtn.addEventListener('click', () => {
        console.log("Buying " + JupiterNumber.textContent);
        bookFlight(JupiterNumber, JupiterCartText);
    });

    UranusPlusBtn.addEventListener('click', () => {
        console.log(parseInt(UranusNumber.textContent));
        addFlight(UranusNumber);
    });

    UranusMinusBtn.addEventListener('click', () => {
        console.log(parseInt(UranusNumber.textContent));
        removeFlight(UranusNumber);
    });

    UranusBuyBtn.addEventListener('click', () => {
        console.log("Buying " + UranusNumber.textContent);
        bookFlight(UranusNumber, UranusCartText);
    });

    SaturnPlusBtn.addEventListener('click', () => {
        console.log(parseInt(SaturnNumber.textContent));
        addFlight(SaturnNumber);
    });

    SaturnMinusBtn.addEventListener('click', () => {
        console.log(parseInt(SaturnNumber.textContent));
        removeFlight(SaturnNumber);
    });

    SaturnBuyBtn.addEventListener('click', () => {
        console.log("Buying " + SaturnNumber.textContent);
        bookFlight(SaturnNumber, SaturnCartText);
    });

    MoonPlusBtn.addEventListener('click', () => {
        console.log(parseInt(MoonNumber.textContent));
        addFlight(MoonNumber);
    });

    MoonMinusBtn.addEventListener('click', () => {
        console.log(parseInt(MoonNumber.textContent));
        removeFlight(MoonNumber);
    });

    MoonBuyBtn.addEventListener('click', () => {
        console.log("Buying " + MoonNumber.textContent);
        bookFlight(MoonNumber, MoonCartText);
    });




        //Modular Stuff
        function addFlight (flightTotal)
        {
            let newNum = parseInt(flightTotal.textContent) +1;
            flightTotal.textContent = newNum;
        }

        function removeFlight (flightTotal)
        {
            if (parseInt(flightTotal.textContent) != 0)
            {
                let newNum = parseInt(flightTotal.textContent) -1;
                flightTotal.textContent = newNum;
            }
            console.log("You shall not be negative");
        }

        function bookFlight (flightTotal, cartText) 
        {
            let text = cartText.textContent;
            let newText = text.split(":")[0].trim() + ": " + flightTotal.textContent;

            cartText.textContent = newText;
        }

    }else
    {
        console.log("Failed to load elements");
    }

    if (searchBar)
    {
        searchBar.addEventListener('click', () => {
            console.log("Clicked Search Bar");
            searchResults.classList.add('show');
        });
        

        document.getElementById("closeSearchResults").addEventListener('click', () => {
            searchResults.classList.remove('show');
            console.log("Closed Search")
        });

        searchBar.addEventListener('input', () => {
            searchFlight();
        });

        
        function searchFlight() 
        {
            let input = searchBar.value.toLowerCase();
            console.log(input);
            let flights = document.getElementsByClassName('flight');

            for (let i = 0; i < flights.length; i++) 
            {
                let name = flights[i].textContent.toLowerCase();
                flights[i].style.display = name.includes(input) ? "list-item" : "none";
            }
        }

    }


}); //kept getting an error about a variable being null so had to add this to make sure the elements were loaded first
