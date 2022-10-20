//creating division element
const main= document.querySelector('.main');
const containeer =document.createElement('div');
const wrapper=document.createElement('div');
const circle=document.createElement('div');


//addding classList 
wrapper.classList.add('wrapper');
containeer.classList.add('containeer')
circle.classList.add('circle');




//appending child to the division

main.append(containeer);
containeer.append(wrapper);
wrapper.append(circle);

let maxWrapperHeight=(window.getComputedStyle(document.querySelector('.wrapper')).height);//height measurement

let ballHeight=window.getComputedStyle(document.querySelector('.circle')).height.match(/\d+/g)[0];
//console.log(ballHeight);
 maxWrapperHeight= maxWrapperHeight.match(/\d+/g)[0];
 let finalHeight=maxWrapperHeight-ballHeight;
 console.log(finalHeight,maxWrapperHeight,ballHeight)
//creating loop for bouncing
let initialposition=0;
let goDown=true;

setInterval(function(){
    if(goDown){
        initialposition++;
        circle.style.top=(initialposition) +'px';
        if(initialposition==finalHeight){
    goDown=false;
        }

    }

    else{
        initialposition--;
        circle.style.top=initialposition + "px";
        if(initialposition==0){
            goDown=true;
        }
    }
},5) 

