export const flipStyle = `
    .flipBox{
        width:2.5rem;
        height:2.5rem;
        border:2px solid black;
        border-radius:0.5rem;
        padding:0.4rem;
        display:flex;
        justify-content:center;
        align-items:center;
        animation: Boxflip 0.7s linear infinite;
    }
    .flippa{
        background-color:black;
        width:80%;
        height:80%;  
        animation: flip 0.5s linear infinite;
    }

    @keyframes flip{
        0% {transform: rotate(90deg)}
        100%{transform: rotate(180deg)}
    }

    @keyframes Boxflip{
        100% {transform: rotate(90deg)}
        0%{transform: rotate(180deg)}
    }
`

export const createFlip = ()=>{
    const flipBox = document.createElement('div');
    flipBox.setAttribute('class', 'flipBox')

    const flipper = document.createElement('div')
    flipper.setAttribute('class', 'flippa')

    flipBox.appendChild(flipper)


    return flipBox;
}