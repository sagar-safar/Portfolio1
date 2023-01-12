
let theme = "day"


document.addEventListener('mousemove',(e)=>{
    let x = (e.clientX/innerWidth)*100;
    let y = (e.clientY/innerHeight)*100;

    document.querySelector('.mouth').style = `border-radius:51% 49% 51% 49% / ${100-x}% ${100-x}% ${x}% ${x}% `
    document.querySelector('.ball1').style= `left:${x}%;top:${y}%`;

    document.querySelector('.ball1').style.transform = `translate(${-x}%,${-y}%)`;
    document.querySelector('.ball2').style= `left:${x}%;top:${y}%`;

    document.querySelector('.ball2').style.transform = `translate(${-x}%,${-y}%)`;
    
})


document.querySelector('.theme').addEventListener('click',()=>{
    
    if(theme ==="day"){
        document.querySelector('body').style = 'background-color:black;color:white'
        document.querySelector('.theme').innerHTML = '<img src="./assest/day.jpg" alt="" class="day"></img>'

    }
    else{
        document.querySelector('body').style = 'background-color:#FAEEE7;color:black'
        document.querySelector('.theme').innerHTML = '<img src="./assest/moon.png" alt="" class="night"></img>'

    }

    theme = theme === "day"?"night":"day"
})


document.querySelector('.li-about').addEventListener('click',()=>{
    document.querySelector('.skills').scrollIntoView({behavior:'smooth'})
})