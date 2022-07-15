let star = document.querySelectorAll(".star")
let index

star.forEach(
    (el) => {
        el.addEventListener("click", (e)=>{
            index = Number(e.target.getAttribute("data-index"))
            star.forEach((ele)=>{
                ele.setAttribute("src","assets/image/star-1.png")
            })
            for (i=0; i<index; i++){
                star[i].setAttribute ("src", "assets/image/star.png")
            }  
        })
    }
)