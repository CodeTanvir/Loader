export const verticalStyle = `
  .vertical {
    display: inline-flex;
    flex-direction: row;
    // justify-content: center;
    align-items: center;
    // height: 100vh;
    // background-color:green;
    width:;
  }
  .vertical div {
    width: 10px;
    height: 10px;
    margin: 3px;
    background-color: black;
    border-radius: 50%;
    animation: bounce 1s infinite alternate;
  }
  @keyframes bounce {
    from { transform: scale(1); }
    to { transform: scale(1.5); }
  }
`;

export const createVertical = ()=> {
    const vertical = document.createElement('div');
    vertical.setAttribute('class', 'vertical')

    for(let i= 0; i < 3; i++){
        const dot = document.createElement('div');
        vertical.appendChild(dot)
    }

    return vertical;
}