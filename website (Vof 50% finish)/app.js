const colors = document.querySelectorAll('.color');
const GPUthingy = document.querySelectorAll('.GPUsmt');
const gradients = document.querySelectorAll('.gradient');
const GPUbg = document.querySelector('.GPUcon');

let prevColor = "RX 7900 GRE";
let animationEnd = true;

function changeSize(){
    sizes.forEach(size => size.classList.remove('active'));
    this.classList.add('active');
}

const colorDropdown = document.getElementById('colorDropdown');

function changeColorDropdown() {
    if (!animationEnd) return;

    let selectedOption = colorDropdown.options[colorDropdown.selectedIndex];
    let primary = selectedOption.value;
    let color = selectedOption.getAttribute('color');
    let GPUsmt = document.querySelector(`.GPUsmt[color="${color}"]`);
    let gradient = document.querySelector(`.gradient[color="${color}"]`);
    let prevGradient = document.querySelector(`.gradient[color="${prevColor}"]`);

    if (color == prevColor) return;

    document.documentElement.style.setProperty('--primary', primary);

    GPUthingy.forEach(s => s.classList.remove('show'));
    GPUsmt.classList.add('show');

    gradients.forEach(g => g.classList.remove('first', 'second'));
    gradient.classList.add('first');
    prevGradient.classList.add('second');

    if (color === "RTX 4090") {
        document.getElementById('AMD-Nvidia-header').textContent = "NVIDIA";
        document.getElementById('pro-name').textContent = "RTX 4090";
        document.getElementById('full-name').textContent = "GeForce RTX 4090";
        document.getElementById('pro-info').innerHTML = "• 24GB GDDR6X<br>• 2520 MHz Boost Clock<br>• 850 W Min PSU<br>";
    }
    if (color === "RX 7900 GRE") {
        document.getElementById('AMD-Nvidia-header').textContent = "AMD";
        document.getElementById('pro-name').textContent = "RX 7900 GRE";
        document.getElementById('full-name').textContent = "Radeon™ RX 7900 GRE";
        document.getElementById('pro-info').innerHTML = "• 16GB GDDR6<br>• 2245 MHz Boost Clock<br>• 600 W Min PSU<br>";
    }
    if (color === "RX 7600") {
        document.getElementById('AMD-Nvidia-header').textContent = "AMD";
        document.getElementById('pro-name').textContent = "RX 7600";
        document.getElementById('full-name').textContent = "Radeon™ RX 7600";
        document.getElementById('pro-info').innerHTML = "• 8GB GDDR6<br>• 2655 MHz Boost Clock<br>• 450 W Min PSU<br>";
    } 
    if (color === "RTX 4080 Super") {
        document.getElementById('AMD-Nvidia-header').textContent = "NVIDIA";
        document.getElementById('pro-name').textContent = "RTX 4080 Super";
        document.getElementById('full-name').textContent = "GeForce RTX 4080 Super";
        document.getElementById('pro-info').innerHTML = "• 16GB GDDR6X<br>• 2550 MHz Boost Clock<br>• 700 W Min PSU<br>";
    }
    if (color === "RTX 4080") {
        document.getElementById('AMD-Nvidia-header').textContent = "NVIDIA";
        document.getElementById('pro-name').textContent = "RTX 4080";
        document.getElementById('full-name').textContent = "GeForce RTX 4080";
        document.getElementById('pro-info').innerHTML = "• 16GB GDDR6X<br>• 2505 MHz Boost Clock<br>• 700 W Min PSU<br>";
    }

    prevColor = color;
    animationEnd = false;

    gradient.addEventListener('animationend', () => {
        animationEnd = true;
    });
}

colorDropdown.addEventListener('change', changeColorDropdown);

colors.forEach(c => c.addEventListener('click', changeColor));

let x = window.matchMedia("(max-width: 1000px)");

function changeHeight(){
    if(x.matches){
        let imgheight = GPUthingy[0].offsetHeight;
        GPUbg.style.height = `${imgheight * 0.9}px`;
    }
    else{
        GPUbg.style.height = "475px";
    }
}

changeHeight();

window.addEventListener('resize', changeHeight);