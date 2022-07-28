document.querySelector(".menu--opener").addEventListener("click", () => {
    document.querySelector(".menu").classList.add("active")
})

document.querySelector(".menu--closer").addEventListener("click", () => {
    document.querySelector(".menu").classList.remove("active")
})