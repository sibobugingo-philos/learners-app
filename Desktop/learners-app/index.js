function showNotification(message,color) {
    const divElt = document.createElement("div");
    divElt.className=`notification px-3 py-1.5 rounded-md bg-${color}-700`;
    divElt.append(message);

    const container =document.querySelector(".container");
    const mainElt = document.querySelector(".main");
    container.insertBefore(divElt,mainElt);
    setTimeout(() => document.querySelector(".notification").remove(), 3000);
}

document.querySelector("#stuntents-list").addEventListener("click", e => {
    if(e.target.classList.contains("delete")) {
        e.target.parentElement.parentElement.remove();
        showNotification("succussfull deleted","sky");
            
    }
});
