function goTo(id){
    document.querySelector(id).scrollIntoView({
        block: "start", // �M�w�F�������b����m
        inline: "nearest", // �M�w�������b����m
        behavior: "smooth"
    });
}

function showChildMenu(childMenu){
    var element = document.querySelector(childMenu);
    var items = element.querySelectorAll("li");
    element.style.display = "block";
    element.style.marginTop = "10px";
    items.forEach(item => {
        item.style.borderBottom = "1px solid black";
        item.style.margin = "0px";
        item.style.padding = "10px 5px";
    });
}

function hideChildMenu(childMenu){
    document.querySelector(childMenu).style.display = "none";
}