let image = document.querySelector('.image');
let file = document.querySelector('.file');
let img = document.createElement('img');
file.addEventListener('change',()=>{
    let upload = '';
    let reader = new FileReader();
    reader.addEventListener('load',()=>{
        upload = reader.result;
        image.append(img);
        img.setAttribute('src',`${upload}`);
    });
    reader.readAsDataURL(file.files[0]);
});
let file2 = document.querySelector('.file2');
file2.addEventListener('change',()=>{
    
    let upload = '';
    let reader = new FileReader();
    reader.addEventListener('load',()=>{
        upload = reader.result;
        image.append(img);
        img.setAttribute('src',upload);
        //  reset filters for changing the image look at the line: 135 
        img.style.filter =  `brightness(${input[0].value=100}%) saturate(${input[1].value=100}%) invert(${input[2].value=0}%) grayscale(${input[3].value=0}%)`;
    });
    reader.readAsDataURL(file2.files[0]);
});


let Brightness = document.querySelector('.btn_Brightness');
let Saturation = document.querySelector('.btn_Saturation');
let Inversion = document.querySelector('.btn_Inversion');
let Grayscale = document.querySelector('.btn_Grayscale');
let input = document.querySelectorAll('input');

let fliterName = document.querySelector('.filter_name');
let rangeNumber = document.querySelector('.range_number');

let rangeBrightness = document.querySelector('.range_Brightness');
let rangeSaturation = document.querySelector('.range_Saturation');
let rangeInversion = document.querySelector('.range_Inversion');
let rangeGrayscale = document.querySelector('.range_Grayscale');

input[0].addEventListener('input',(e)=>{
    rangeNumber.innerText = `${e.target.value}%`;
});
input[1].addEventListener('input',(e)=>{
    rangeNumber.innerText = `${e.target.value}%`;
});
input[2].addEventListener('input',(e)=>{
    rangeNumber.innerText = `${e.target.value}%`;
});
input[3].addEventListener('input',(e)=>{
    rangeNumber.innerText = `${e.target.value}%`;
});

Brightness.addEventListener('click',()=>{
    fliterName.innerText = 'Brightness';
    Brightness.style.backgroundColor = '#6366f1';
    Brightness.style.color = 'white';
    Saturation.style.backgroundColor = 'white';
    Saturation.style.color = '#4b5563';
    Inversion.style.backgroundColor = 'white';
    Inversion.style.color = '#4b5563';
    Grayscale.style.backgroundColor = 'white';
    Grayscale.style.color = '#4b5563';
    input[0].addEventListener('input',()=>{
        // this img that we create look at the line: 22
        img.style.filter =  `brightness(${input[0].value}%) saturate(${input[1].value}%) invert(${input[2].value}%) grayscale(${input[3].value}%)`;
    });
    input[0].style.display = 'block'; 
    input[1].style.display = 'none';
    input[2].style.display = 'none';
    input[3].style.display = 'none';
});

Saturation.addEventListener('click',()=>{
    fliterName.innerText = 'Saturation';
    Saturation.style.backgroundColor = '#6366f1';
    Saturation.style.color = 'white';
    Brightness.style.backgroundColor = 'white';
    Brightness.style.color = '#4b5563';
    Inversion.style.backgroundColor = 'white';
    Inversion.style.color = '#4b5563';
    Grayscale.style.backgroundColor = 'white';
    Grayscale.style.color = '#4b5563';
    input[1].addEventListener('input',()=>{
        img.style.filter =  `brightness(${input[0].value}%) saturate(${input[1].value}%) invert(${input[2].value}%) grayscale(${input[3].value}%)`;
    });
    input[0].style.display = 'none'; 
    input[1].style.display = 'block';
    input[2].style.display = 'none';
    input[3].style.display = 'none';
});

Inversion.addEventListener('click',()=>{
    fliterName.innerText = 'Inversion';
    Inversion.style.backgroundColor = '#6366f1';
    Inversion.style.color = 'white';
    Brightness.style.backgroundColor = 'white';
    Brightness.style.color = '#4b5563';
    Saturation.style.backgroundColor = 'white';
    Saturation.style.color = '#4b5563';
    Grayscale.style.backgroundColor = 'white';
    Grayscale.style.color = '#4b5563';
    input[2].addEventListener('input',()=>{
        img.style.filter =  `brightness(${input[0].value}%) saturate(${input[1].value}%) invert(${input[2].value}%) grayscale(${input[3].value}%)`;
    });
    input[0].style.display = 'none'; 
    input[1].style.display = 'none';
    input[2].style.display = 'block';
    input[3].style.display = 'none';
});

Grayscale.addEventListener('click',()=>{
    fliterName.innerText = 'Grayscale';
    Grayscale.style.backgroundColor = '#6366f1';
    Grayscale.style.color = 'white';
    Brightness.style.backgroundColor = 'white';
    Brightness.style.color = '#4b5563';
    Saturation.style.backgroundColor = 'white';
    Saturation.style.color = '#4b5563';
    Inversion.style.backgroundColor = 'white';
    Inversion.style.color = '#4b5563';
    input[3].addEventListener('input',()=>{
        img.style.filter =  `brightness(${input[0].value}%) saturate(${input[1].value}%) invert(${input[2].value}%) grayscale(${input[3].value}%)`;
    });
    input[0].style.display = 'none'; 
    input[1].style.display = 'none';
    input[2].style.display = 'none';
    input[3].style.display = 'block';
    
});

let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let btn3 = document.querySelector('.btn3');
let btn4 = document.querySelector('.btn4');
let rotatX = '';
let rotatY = '';
let rotat = '';
btn1.addEventListener('click',()=>{
    img.style.transform += 'rotate(-90deg)';
     rotat = img.style.transform ;
    
});
btn2.addEventListener('click',()=>{
    img.style.transform += 'rotate(90deg)';
});
btn3.addEventListener('click',()=>{
    img.style.transform += 'rotateY(-180deg)';
    rotatY = img.style.transform;

});
btn4.addEventListener('click',()=>{
    img.style.transform += 'rotateX(180deg)';
    rotatX = img.style.transform;
    
});

let reset = document.querySelector('.reset');
reset.addEventListener('click',()=>{
    img.style.filter =  `brightness(${input[0].value=100}%) saturate(${input[1].value=100}%) invert(${input[2].value=0}%) grayscale(${input[3].value=0}%)`;
    img.style.transform = 'rotate(0deg)';
});

// saving the image
let save = document.querySelector('.save');
save.addEventListener('click',()=>{
    const canvas = document.createElement('canvas'); // create canvas
    const ctx = canvas.getContext('2d'); //return a drawing context on the canvas
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
 
    //applying user filter to canvas filter 
    ctx.filter = `brightness(${input[0].value}%) saturate(${input[1].value}%) invert(${input[2].value}%) grayscale(${input[3].value}%)`;
    ctx.translate(canvas.width / 2, canvas.height / 2);
    if(rotat !== 0){
        ctx.rotate(rotat* Math.PI /180);
    }
    ctx.scale(rotatX,rotatY); // flip canvas , horizontally/vertically
    ctx.drawImage(img, -canvas.width / 2, -canvas.height / 2,canvas.width,canvas.height);
    const link = document.createElement('a'); // create <a> element
    link.download = 'image.jpg'; // passing <a> download to 'image.jpg'
    link.href = canvas.toDataURL(); // pasisng <a> href value to canvas data url
    link.click(); // clicking <a> tag so the image download
})