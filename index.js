const bodyE1=document.querySelector("body")
bodyE1.addEventListener("mousemove",(Event)=> {
    const xpos = Event.offsetX;
    const ypos= Event.offsetY;
    const spanE1=document.createElement("span");
    spanE1.style.left = XPos + "PX"
    bodyE1.appendChild(spanE1);

    
});
