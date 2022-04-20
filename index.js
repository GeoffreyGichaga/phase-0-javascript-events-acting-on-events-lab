// Your code here
const dodger = document.getElementById('dodger')
dodger.style.backgroundColor = "#FF69B4"
dodger.style.bottom = '0px'
dodger.style.left = 'px'




function moveDodgerLeft()
{
    let doggerLeft = dodger.style.left.replace('px','')
    let leftDistance = parseInt(doggerLeft,10)

    if(leftDistance > 0)
    {
        dodger.style.left = `${leftDistance - 1 }px`

    }
    
}
document.addEventListener('keydown',(e)=>{

    if(e.key === 'ArrowLeft')
    {
        moveDodgerLeft();
    }
})






function moveDodgerRight()
{
    let doggerLeft = dodger.style.left.replace('px','')
    let leftDistance = parseInt(doggerLeft,10)

    if(leftDistance  > 0)
    {
        dodger.style.left = `${leftDistance + 1 }px`

    }
 
}

document.addEventListener('keydown',(e)=>{
    if(e.key === 'ArrowRight')
    {
        moveDodgerRight()
    }
})

