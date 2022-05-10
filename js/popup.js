const popupScreen = document.querySelector(".popup-screen")
        const popupBox = document.querySelector(".popup-box")
        const closeBtn = document.querySelector(".close-btn")

        window.addEventListener("load", () =>{
            setTimeout(() => {
            popupScreen.classList.add("active")   
            },100);

            closeBtn.addEventListener("click",() =>{
                popupScreen.classList.remove("active")
            });
        }); 