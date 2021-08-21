//VARIBLES  
const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');
//Getting the Width of the Imager Container or images
const imgContainer= document.querySelector('.image-container');
const imgContainerWidth= imgContainer.clientWidth;

//FUCNTIONs
const scroll_X=(event)=>{
    const direction=event.target.innerText;//Getting the driection icons;
    direction==="<"? imgContainer.scrollBy(-imgContainerWidth,0): imgContainer.scrollBy(imgContainerWidth,0);//Checker for which direction to scroll left/right.
};

//EVENT LISTENER's
btnLeft.addEventListener('click',scroll_X); //for left button
btnRight.addEventListener('click',scroll_X); //for right button
