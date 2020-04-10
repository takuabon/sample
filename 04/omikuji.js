
let omikuji = {

    omikujiimg:[

        {src:"img/omikuji_daikichi.jpg",massage:"大吉"},
        {src:"img/omikuji_chuukichi.jpg",massage:"中吉"},
        {src:"img/omikuji_syoukichi.jpg",massage:"小吉"},
        {src:"img/omikuji_syoukichi.jpg",massage:"小吉"},

        {src:"img/omikuji_chuukichi.jpg",massage:"中吉"},
        {src:"img/omikuji_kyou.jpg",massage:"凶"},
        {src:"img/omikuji_kyou.jpg",massage:"凶"},
        {src:"img/omikuji_daikyou.jpg",massage:"大凶"},
        {src:"img/omikuji_syoukichi.jpg",massage:"小吉"},
        {src:"img/omikuji_syoukichi.jpg",massage:"小吉"},
        {src:"img/omikuji_kyou.jpg",massage:"凶"},

        
        
    ],

    getResult: function() {

        let result = Math.floor(Math.random()*11);
        let re = this.omikujiimg[result].src;
        let image  = document.getElementById("image");
        image.src = re;
        

        
        
    }

      
    
};


let button = document.getElementById("button");
console.log(button);

button.addEventListener("click",function() {
    omikuji.getResult();

    
    
    
});


