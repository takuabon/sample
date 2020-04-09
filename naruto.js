let naruto = [
    {src:"image2/naruto.jpg",alt:"自分の言葉はまっすぐまげねぇそれが俺の忍道だ！"},
    {src:"image2/sakura.jpg",alt:"シャンなろう！"},
    {src:"image2/sasuke.jpg",alt:"この目はよく闇が見える"},
    {src:"image2/kakashi.jpg",alt:"シノビの世界においてルールや掟を守らない奴はクズだ、でもな仲間を大切にしない奴はそれ以上のクズだ"},
    {src:"image2/itachi.jpg",alt:"許せサスケまた今度だ・・"},

];
for(let i = 0; naruto.length>i; i++){
    let img = document.createElement("img");
    let sub = document.querySelector(".sub");
    img.setAttribute("src",naruto[i].src);
    img.setAttribute("alt",naruto[i].alt);
    img.setAttribute("class","sub_img");
    sub.insertBefore(img,null);


};



let sub = document.querySelector(".sub");
let maine = document.getElementById("maine_img");
let massage = document.getElementById("massage");

sub.addEventListener("mouseover",function(event) {
    if(event.target.src) {
         maine.setAttribute("src",event.target.src);
         maine.setAttribute("alt",event.target.alt);
         massage.innerHTML = event.target.alt;

    } else {
        maine.setAttribute("src",naruto[0].src);
    　　 maine.setAttribute("alt",naruto[0].alt);
    　　　massage.innerHTML = naruto[0].alt;

    }
    
});





