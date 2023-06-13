window.addEventListener("load", ()=>{
    const grid = new Isotope("figure", {
        itemSelector: "article",
        columnWidth: "article",
        transitionDuration: "0.5s"
    })
})

window.addEventListener("load", ()=>{
    const btns = document.querySelectorAll("main ul li");
    for(let el of btns){
        el.addEventListener("click", e=>{
            e.preventDefault();
            const sort = e.currentTarget.querySelector("a").getAttribute("href");
            grid.arrange({
                Filter : sort
            });
            for(let el of btns){
                el.classList.remove(on);
            }
            e.currentTarget.classList.add("on");
        })
    }
});