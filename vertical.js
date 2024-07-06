export const verticalStyle = `
  .vertical {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  .vertical div {
    width: 10px;
    height: 10px;
    margin: 3px;
    background-color: #3498db;
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