const main = document.querySelector('.main');
inputURL = main.querySelector('input');
view = document.querySelector('.view');
generateBtn = main.querySelector('button');
qrImg = main.querySelector('.imgsection img');
generateBtn.addEventListener("click",()=>{
    let inputValue = inputURL.value;
    if(!inputValue) return;
    generateBtn.innerText = "Generating QR Code....";
    qrImg.src=` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue} `;
    view.href=` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue} `;
    qrImg.addEventListener("load",()=>{
        main.classList.add("active");
        generateBtn.innerText = "Generate QR Code"
    })
}); 

inputURL.addEventListener("keyup",()=>{
    if(!inputURL.value){
        main.classList.remove("active");
    };
})
