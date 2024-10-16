// ขอบคุณ ChatGPT มากที่ทำให้ผมไม่ต้องเขียนแบบเน้นถึก <3
function setupContainer(container) {
    const colors = container.querySelectorAll('.color');
    const GPUthingy = container.querySelectorAll('.GPUsmt');
    const gradients = container.querySelectorAll('.gradient');
    const GPUbg = container.querySelector('.GPUcon');
    const colorDropdown = container.querySelector('#colorDropdown');

    let prevColor = "RX 7900 GRE";
    let animationEnd = true;


    function changeSize(){
        const sizes = container.querySelectorAll('.size');
        sizes.forEach(size => size.classList.remove('active'));
        this.classList.add('active');
    }

    function changeColorDropdown() {
        if (!animationEnd) return;

        let selectedOption = colorDropdown.options[colorDropdown.selectedIndex];
        let primary = selectedOption.value;
        let color = selectedOption.getAttribute('color');
        let GPUsmt = container.querySelector(`.GPUsmt[color="${color}"]`);
        let gradient = container.querySelector(`.gradient[color="${color}"]`);
        let prevGradient = container.querySelector(`.gradient[color="${prevColor}"]`);

        if (color == prevColor) return;

        container.style.setProperty('--primary', primary);

        GPUthingy.forEach(s => s.classList.remove('show'));
        GPUsmt.classList.add('show');
        gradients.forEach(g => g.classList.remove('first', 'second'));
        gradient.classList.add('first');
        prevGradient.classList.add('second');
        updateInfo(color, container);

        prevColor = color;
        animationEnd = false;

        gradient.addEventListener('animationend', () => {
            animationEnd = true;
        });
    }
    function updateInfo(color, container) {
        const header = container.querySelector('#AMD-Nvidia-header');
        const proName = container.querySelector('#pro-name');
        const fullName = container.querySelector('#full-name');
        const proInfo = container.querySelector('#pro-info');

        if (color === "RTX 4090") {
            header.textContent = "NVIDIA";
            proName.textContent = "RTX 4090";
            fullName.textContent = "GeForce RTX 4090";
            proInfo.innerHTML = "• 24GB GDDR6X<br>• 2520 MHz Boost Clock<br>• 850 W Min PSU<br>";
        } else if (color === "RX 7900 GRE") {
            header.textContent = "AMD";
            proName.textContent = "RX 7900 GRE";
            fullName.textContent = "Radeon™ RX 7900 GRE";
            proInfo.innerHTML = "• 16GB GDDR6<br>• 2245 MHz Boost Clock<br>• 600 W Min PSU<br>";
        } else if (color === "RX 7600") {
            header.textContent = "AMD";
            proName.textContent = "RX 7600";
            fullName.textContent = "Radeon™ RX 7600";
            proInfo.innerHTML = "• 8GB GDDR6<br>• 2655 MHz Boost Clock<br>• 450 W Min PSU<br>";
        } else if (color === "RTX 4080 Super") {
            header.textContent = "NVIDIA";
            proName.textContent = "RTX 4080 Super";
            fullName.textContent = "GeForce RTX 4080 Super";
            proInfo.innerHTML = "• 16GB GDDR6X<br>• 2550 MHz Boost Clock<br>• 700 W Min PSU<br>";
        } else if (color === "RTX 4080") {
            header.textContent = "NVIDIA";
            proName.textContent = "RTX 4080";
            fullName.textContent = "GeForce RTX 4080";
            proInfo.innerHTML = "• 16GB GDDR6X<br>• 2505 MHz Boost Clock<br>• 700 W Min PSU<br>";
        }
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
}

setupContainer(document.querySelector('.left-container'));
setupContainer(document.querySelector('.right-container'));
