const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add("visible");
        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(".reveal").forEach(el=>{
    observer.observe(el);
});

document.addEventListener("mousemove",(e)=>{

    const cursor = document.getElementById("cursor");

    if(cursor){

        cursor.style.transform =
        `translate(${e.clientX}px, ${e.clientY}px)`;

    }

});