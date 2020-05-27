var numOfCats = 0;

const moveImg = function(id){
    const img = document.getElementById(id);

    // Generate next position
    let newLeft = 2*parseFloat(img.style.left) -parseFloat(img.prevLeft);
    let newTop = 2*parseFloat(img.style.top) -parseFloat(img.prevTop);
    // console.log(img.style.top, img.style.left, img.prevTop, img.prevLeft, newTop, newLeft);

    // save position for next cycle
    img.prevLeft = img.style.left; 
    img.prevTop = img.style.top; 

    // update position
    img.style.left = newLeft + "%"; 
    img.style.top = newTop + "%";
}

const createCat = function(){
    numOfCats +=1;
    let cat = document.createElement('img');
    cat.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif";
    cat.style.position = 'absolute';

    // generate starting position
    cat.style.left = String(Math.random()*100)+"%";
    cat.style.top =  String(Math.random()*100)+"%";

    cat.prevLeft = String(1-2*Math.random() + parseFloat(cat.style.left)) + '%' // 1-2 is to create a range of -1 to 1 for speeds
    cat.prevTop = String(1-2*Math.random() + parseFloat(cat.style.top)) + '%' 

    cat.id = String(numOfCats);
    document.getElementsByTagName('body')[0].appendChild(cat);
    cat.id = numOfCats; // set the id of the timer, to the id of the cat
    const timerId = setInterval( function() {moveImg(cat.id)}, 100);
    moveImg(cat.id);    
    // cat.addEventListener('click')
}


const createCatButton = document.getElementById('create-cat');
createCatButton.style.position = "absolute";
createCatButton.style.left = "50%";
createCatButton.style.top = "50%";
createCatButton.addEventListener('click', createCat);

// todo, have the cats bounce when they reach walls. and maybe rotate
