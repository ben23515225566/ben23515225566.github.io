function Goto(id){
    document.querySelector(id).scrollIntoView({
        block: "start", // 決定了垂直捲軸的位置
        inline: "nearest", // 決定水平捲軸的位置
        behavior: "smooth"
    });
}