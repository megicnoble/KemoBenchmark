let text = document.getElementById('text');
let anilogo = document.getElementById('anilogo');

window.addEventListener('scroll', () => {
  let value = window.scrollY;

  text.style.left = value * -1.5 + 'px';
  anilogo.style.left = value * 1.5 + 'px';
  btn.style.marginLeft = value * -1.5 + 'px';
  p.style.left = value * -1.5 + 'px';

});

const menuIcon = document.getElementById('menu-icon');
const phonenav = document.querySelector('.phonenav');

menuIcon.addEventListener('click', () => {
  phonenav.style.right = phonenav.style.right === '0px' ? '-20em' : '0px';
});


function toggleDropdown(cpuId) {
  const dropdownContent = document.getElementById(cpuId + '-dropdown-content');
  dropdownContent.style.display = dropdownContent.style.display === 'none' ? 'block' : 'none';

  if (dropdownContent.style.display === "none") {
    dropdownContent.style.display = "block";
    searchBox.style.display = "block";
  } else {
    dropdownContent.style.display = "none";
    searchBox.style.display = "none";
  }
}

function toggleDropdown(cpuId) {
  const dropdownContent = document.getElementById(cpuId + "-dropdown-content");
  const searchBox = document.getElementById(cpuId + "-search-box");

  if (dropdownContent.style.display === "none") {
    dropdownContent.style.display = "block";
    searchBox.style.display = "block";
  } else {
    dropdownContent.style.display = "none";
    searchBox.style.display = "none";
  }
}

document.addEventListener("click", function (event) {
  const targetElement = event.target;

  if (
    targetElement !== document.getElementById("cpu1-dropdown-button") &&
    !document.getElementById("cpu1-dropdown-content").contains(targetElement)
  ) {
    document.getElementById("cpu1-dropdown-content").style.display = "none";
    document.getElementById("cpu1-search-box").style.display = "none";
  }

  if (
    targetElement !== document.getElementById("cpu2-dropdown-button") &&
    !document.getElementById("cpu2-dropdown-content").contains(targetElement)
  ) {
    document.getElementById("cpu2-dropdown-content").style.display = "none";
    document.getElementById("cpu2-search-box").style.display = "none";
  }
});


document.getElementById("cpu1-search-box").addEventListener("click", function (event) {

  event.stopPropagation();
});

document.getElementById("cpu2-search-box").addEventListener("click", function (event) {

  event.stopPropagation();
});

function selectCPU(cpuId, cpu) {
  const dropdownButton = document.getElementById(cpuId + '-dropdown-button');
  dropdownButton.textContent = cpu;
  toggleDropdown(cpuId);

  const selectedValue = document.querySelector(`#${cpuId}-dropdown-content .dropdown-item[data-value="${cpu}"]`).getAttribute('data-value');
  console.log('Selected value:', selectedValue);
  compareProducts();
}

function filterCpuOptions(event, cpuId) {
  const input = event.target.value.toLowerCase();
  const dropdownItems = document.querySelectorAll(`#${cpuId}-dropdown-content .dropdown-item`);

  dropdownItems.forEach((item) => {
    const itemText = item.textContent.trim().toLowerCase();
    const itemElement = item;
    const inputIsNumeric = isNaN(parseFloat(input)) && isFinite(input);
    const itemTextIsNumeric = isNaN(parseFloat(itemText)) && isFinite(itemText);
    if (input.length < 2 || inputIsNumeric && itemTextIsNumeric && itemText.includes(input)) {
      itemElement.style.display = "block";
    }
    else if (!inputIsNumeric && !itemTextIsNumeric && itemText.includes(input)) {
      itemElement.style.display = "block";
    } else {
      itemElement.style.display = "none";
    }
  });
}
const buttons = document.querySelectorAll('.top_selection button');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => {
      btn.classList.remove('selected_option');
      btn.classList.add('nonselected_option');
    });
    button.classList.remove('nonselected_option');
    button.classList.add('selected_option');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.top_selection button');
  const containers = document.querySelectorAll('.cpu_detail_container');
  document.getElementById('general').classList.remove('hidden');
  document.getElementById('general-button').classList.add('selected_option');

  buttons.forEach(button => {
    button.addEventListener('click', function () {
      const containerId = button.id.split('-')[0];

      containers.forEach(container => {
        container.classList.add('hidden');
      });
      buttons.forEach(btn => {
        btn.classList.remove('selected_option');
      });

      document.getElementById(containerId).classList.remove('hidden');
      button.classList.add('selected_option');
    });
  });

  const selectedCpu1 = localStorage.getItem('cpu1');
  if (selectedCpu1) {
    const cpuDetails1 = cpuData[selectedCpu1];
    if (cpuDetails1) {
      const cpuButton1 = document.getElementById('cpu1-dropdown-button');
      cpuButton1.textContent = selectedCpu1;
      const cpu1Image = document.getElementById('product1-image');
      cpu1Image.src = cpuDetails1.image;
      const cpu1cores = document.getElementById("cpu1-cores");
      cpu1cores.textContent = cpuDetails1.cores;
      const cpu1threads = document.getElementById("cpu1-threads");
      cpu1threads.textContent = cpuDetails1.threads;
      const cpu1base_clock = document.getElementById("cpu1-base_clock");
      cpu1base_clock.textContent = cpuDetails1.base_clock;
      const cpu1boost_clock = document.getElementById("cpu1-boost_clock");
      cpu1boost_clock.textContent = cpuDetails1.boost_clock;
      const cpu1L2_Cache = document.getElementById("cpu1-L2_Cache");
      cpu1L2_Cache.textContent = cpuDetails1.L2_Cache;
      const cpu1L3_Cache = document.getElementById("cpu1-L3_Cache");
      cpu1L3_Cache.textContent = cpuDetails1.L3_Cache;
      const cpu1Memory_Type = document.getElementById("cpu1-Memory_Type");
      cpu1Memory_Type.textContent = cpuDetails1.Memory_Type;
      const cpu1Memory_Speed = document.getElementById("cpu1-Memory_Speed");
      cpu1Memory_Speed.textContent = cpuDetails1.Memory_Speed;
      const cpu1pcie = document.getElementById("cpu1-pcie");
      cpu1pcie.textContent = cpuDetails1.pcie;
      const cpu1Sockets = document.getElementById("cpu1-Sockets");
      cpu1Sockets.textContent = cpuDetails1.Sockets;
      const cpu1igpu = document.getElementById("cpu1-igpu");
      cpu1igpu.textContent = cpuDetails1.igpu;
      const cpu1single_score = document.getElementById("cpu1-single_score");
      cpu1single_score.textContent = cpuDetails1.single_score;
      const cpu1multi_score = document.getElementById("cpu1-multi_score");
      cpu1multi_score.textContent = cpuDetails1.multi_score;
      const cpu1blender_score = document.getElementById("cpu1-blender_score");
      cpu1blender_score.textContent = cpuDetails1.blender_score;
      const cpu1tdp = document.getElementById("cpu1-tdp");
      cpu1tdp.textContent = cpuDetails1.tdp;
      const cpu1idle_load = document.getElementById("cpu1-idle_load");
      cpu1idle_load.textContent = cpuDetails1.idle_load;
      const cpu1full_load = document.getElementById("cpu1-full_load");
      cpu1full_load.textContent = cpuDetails1.full_load;
    }
  }
  const selectedCpu2 = localStorage.getItem('cpu2');
  if (selectedCpu2) {
    const cpuDetails2 = cpuData[selectedCpu2];
    if (cpuDetails2) {
      const cpuButton2 = document.getElementById('cpu2-dropdown-button');
      cpuButton2.textContent = selectedCpu2;
      const cpu2Image = document.getElementById('product2-image');
      cpu2Image.src = cpuDetails2.image;
      const cpu2cores = document.getElementById("cpu2-cores");
      cpu2cores.textContent = cpuDetails2.cores;
      const cpu2threads = document.getElementById("cpu2-threads");
      cpu2threads.textContent = cpuDetails2.threads;
      const cpu2base_clock = document.getElementById("cpu2-base_clock");
      cpu2base_clock.textContent = cpuDetails2.base_clock;
      const cpu2boost_clock = document.getElementById("cpu2-boost_clock");
      cpu2boost_clock.textContent = cpuDetails2.boost_clock;
      const cpu2L2_Cache = document.getElementById("cpu2-L2_Cache");
      cpu2L2_Cache.textContent = cpuDetails2.L2_Cache;
      const cpu2L3_Cache = document.getElementById("cpu2-L3_Cache");
      cpu2L3_Cache.textContent = cpuDetails2.L3_Cache;
      const cpu2Memory_Type = document.getElementById("cpu2-Memory_Type");
      cpu2Memory_Type.textContent = cpuDetails2.Memory_Type;
      const cpu2Memory_Speed = document.getElementById("cpu2-Memory_Speed");
      cpu2Memory_Speed.textContent = cpuDetails2.Memory_Speed;
      const cpu2pcie = document.getElementById("cpu2-pcie");
      cpu2pcie.textContent = cpuDetails2.pcie;
      const cpu2Sockets = document.getElementById("cpu2-Sockets");
      cpu2Sockets.textContent = cpuDetails2.Sockets;
      const cpu2igpu = document.getElementById("cpu2-igpu");
      cpu2igpu.textContent = cpuDetails2.igpu;
      const cpu2single_score = document.getElementById("cpu2-single_score");
      cpu2single_score.textContent = cpuDetails2.single_score;
      const cpu2multi_score = document.getElementById("cpu2-multi_score");
      cpu2multi_score.textContent = cpuDetails2.multi_score;
      const cpu2blender_score = document.getElementById("cpu2-blender_score");
      cpu2blender_score.textContent = cpuDetails2.blender_score;
      const cpu2tdp = document.getElementById("cpu2-tdp");
      cpu2tdp.textContent = cpuDetails2.tdp;
      const cpu2idle_load = document.getElementById("cpu2-idle_load");
      cpu2idle_load.textContent = cpuDetails2.idle_load;
      const cpu2full_load = document.getElementById("cpu2-full_load");
      cpu2full_load.textContent = cpuDetails2.full_load;
    }
  }

});

function getCpuDetails(cpuId) {
  const cpuSelect = document.getElementById(cpuId + '-dropdown-button');
  const cpuValue = cpuSelect.textContent;
  const cpuDetails = cpuData[cpuValue] || {
    image: "https://i.gifer.com/origin/ba/ba4eeed06a8f9efb0d7b5ad26f1f8d45_w200.gif",
    cores: "",
    threads: "",
    base_clock: "",
    boost_clock: "",
    L2_Cache: "",
    L3_Cache: "",
    Memory_Type: "",
    Memory_Speed: "",
    pcie: "",
    Sockets: "",
    igpu: "",
    single_score: "",
    multi_score: "",
    blender_score: "",
    tdp: "",
    idle_load: "",
    full_load: "",

  };

  return {
    image: cpuDetails.image,
    cores: cpuDetails.cores,
    threads: cpuDetails.threads,
    base_clock: cpuDetails.base_clock,
    boost_clock: cpuDetails.boost_clock,
    L2_Cache: cpuDetails.L2_Cache,
    L3_Cache: cpuDetails.L3_Cache,
    Memory_Type: cpuDetails.Memory_Type,
    Memory_Speed: cpuDetails.Memory_Speed,
    pcie: cpuDetails.pcie,
    Sockets: cpuDetails.Sockets,
    igpu: cpuDetails.igpu,
    single_score: cpuDetails.single_score,
    multi_score: cpuDetails.multi_score,
    blender_score: cpuDetails.blender_score,
    idle_load: cpuDetails.idle_load,
    tdp: cpuDetails.tdp,
    full_load: cpuDetails.full_load,
  };
}

function compareProducts() {
  const cpu1Details = getCpuDetails("cpu1");
  const cpu2Details = getCpuDetails("cpu2");

  document.getElementById("product1-image").src = cpu1Details.image;
  document.getElementById("product2-image").src = cpu2Details.image;

  document.getElementById("cpu1-cores").textContent = cpu1Details.cores;
  document.getElementById("cpu2-cores").textContent = cpu2Details.cores;

  document.getElementById("cpu1-threads").textContent = cpu1Details.threads;
  document.getElementById("cpu2-threads").textContent = cpu2Details.threads;

  document.getElementById("cpu1-base_clock").textContent = cpu1Details.base_clock;
  document.getElementById("cpu2-base_clock").textContent = cpu2Details.base_clock;

  document.getElementById("cpu1-boost_clock").textContent = cpu1Details.boost_clock;
  document.getElementById("cpu2-boost_clock").textContent = cpu2Details.boost_clock;

  document.getElementById("cpu1-L2_Cache").textContent = cpu1Details.L2_Cache;
  document.getElementById("cpu2-L2_Cache").textContent = cpu2Details.L2_Cache;

  document.getElementById("cpu1-L3_Cache").textContent = cpu1Details.L3_Cache;
  document.getElementById("cpu2-L3_Cache").textContent = cpu2Details.L3_Cache;

  document.getElementById("cpu1-Memory_Type").textContent = cpu1Details.Memory_Type;
  document.getElementById("cpu2-Memory_Type").textContent = cpu2Details.Memory_Type;

  document.getElementById("cpu1-Memory_Speed").textContent = cpu1Details.Memory_Speed;
  document.getElementById("cpu2-Memory_Speed").textContent = cpu2Details.Memory_Speed;

  document.getElementById("cpu1-pcie").textContent = cpu1Details.pcie;
  document.getElementById("cpu2-pcie").textContent = cpu2Details.pcie;

  document.getElementById("cpu1-Sockets").textContent = cpu1Details.Sockets;
  document.getElementById("cpu2-Sockets").textContent = cpu2Details.Sockets;

  document.getElementById("cpu1-igpu").textContent = cpu1Details.igpu;
  document.getElementById("cpu2-igpu").textContent = cpu2Details.igpu;

  document.getElementById("cpu1-single_score").textContent = cpu1Details.single_score;
  document.getElementById("cpu2-single_score").textContent = cpu2Details.single_score;

  document.getElementById("cpu1-multi_score").textContent = cpu1Details.multi_score;
  document.getElementById("cpu2-multi_score").textContent = cpu2Details.multi_score;

  document.getElementById("cpu1-blender_score").textContent = cpu1Details.blender_score;
  document.getElementById("cpu2-blender_score").textContent = cpu2Details.blender_score;

  document.getElementById("cpu1-tdp").textContent = cpu1Details.tdp;
  document.getElementById("cpu2-tdp").textContent = cpu2Details.tdp;

  document.getElementById("cpu1-idle_load").textContent = cpu1Details.idle_load;
  document.getElementById("cpu2-idle_load").textContent = cpu2Details.idle_load;

  document.getElementById("cpu1-full_load").textContent = cpu1Details.full_load;
  document.getElementById("cpu2-full_load").textContent = cpu2Details.full_load;


}

function applyComparisonStyling() {

  const cpu1ScoreElement = document.getElementById("cpu1-multi_score");
  const cpu2ScoreElement = document.getElementById("cpu2-multi_score");
  const cpu1Score = parseInt(cpu1ScoreElement.textContent);
  const cpu2Score = parseInt(cpu2ScoreElement.textContent);
  if (cpu1Score > cpu2Score) {
    cpu1ScoreElement.style.color = "#21B6A8";
    cpu2ScoreElement.style.color = "#DB1F48";
  } else if (cpu2Score > cpu1Score) {
    cpu2ScoreElement.style.color = "#21B6A8";
    cpu1ScoreElement.style.color = "#DB1F48";
  } else {
    cpu1ScoreElement.style.color = "";
    cpu2ScoreElement.style.color = "";
  }

  const cpu1SingleScoreElement = document.getElementById("cpu1-single_score");
  const cpu2SingleScoreElement = document.getElementById("cpu2-single_score");
  const cpu1SingleScore = parseInt(cpu1SingleScoreElement.textContent);
  const cpu2SingleScore = parseInt(cpu2SingleScoreElement.textContent);
  if (cpu1SingleScore > cpu2SingleScore) {
    cpu1SingleScoreElement.style.color = "#21B6A8";
    cpu2SingleScoreElement.style.color = "#DB1F48";
  } else if (cpu2SingleScore > cpu1SingleScore) {
    cpu2SingleScoreElement.style.color = "#21B6A8";
    cpu1SingleScoreElement.style.color = "#DB1F48";
  } else {
    cpu1SingleScoreElement.style.color = "";
    cpu2SingleScoreElement.style.color = "";
  }

  const cpu1BlenderScoreElement = document.getElementById("cpu1-blender_score");
  const cpu2BlenderScoreElement = document.getElementById("cpu2-blender_score");
  const cpu1BlenderScore = parseInt(cpu1BlenderScoreElement.textContent);
  const cpu2BlenderScore = parseInt(cpu2BlenderScoreElement.textContent);
  if (cpu1BlenderScore > cpu2BlenderScore) {
    cpu1BlenderScoreElement.style.color = "#21B6A8";
    cpu2BlenderScoreElement.style.color = "#DB1F48";
  } else if (cpu2BlenderScore > cpu1BlenderScore) {
    cpu2BlenderScoreElement.style.color = "#21B6A8";
    cpu1BlenderScoreElement.style.color = "#DB1F48";
  } else {
    cpu1BlenderScoreElement.style.color = "";
    cpu2BlenderScoreElement.style.color = "";
  }

  const cpu1IdleLoadElement = document.getElementById("cpu1-idle_load");
  const cpu2IdleLoadElement = document.getElementById("cpu2-idle_load");
  const cpu1IdleLoad = parseInt(cpu1IdleLoadElement.textContent);
  const cpu2IdleLoad = parseInt(cpu2IdleLoadElement.textContent);
  if (cpu1IdleLoad > cpu2IdleLoad) {
    cpu1IdleLoadElement.style.color = "#DB1F48";
    cpu2IdleLoadElement.style.color = "#21B6A8";
  } else if (cpu2IdleLoad > cpu1IdleLoad) {
    cpu2IdleLoadElement.style.color = "#DB1F48";
    cpu1IdleLoadElement.style.color = "#21B6A8";
  } else {
    cpu1IdleLoadElement.style.color = "";
    cpu2IdleLoadElement.style.color = "";
  }

  const cpu1FullLoadElement = document.getElementById("cpu1-full_load");
  const cpu2FullLoadElement = document.getElementById("cpu2-full_load");
  const cpu1FullLoad = parseInt(cpu1FullLoadElement.textContent);
  const cpu2FullLoad = parseInt(cpu2FullLoadElement.textContent);
  if (cpu1FullLoad > cpu2FullLoad) {
    cpu1FullLoadElement.style.color = "#DB1F48";
    cpu2FullLoadElement.style.color = "#21B6A8";
  } else if (cpu2FullLoad > cpu1FullLoad) {
    cpu2FullLoadElement.style.color = "#DB1F48";
    cpu1FullLoadElement.style.color = "#21B6A8";
  } else {
    cpu1FullLoadElement.style.color = "";
    cpu2FullLoadElement.style.color = "";
  }

  setTimeout(applyComparisonStyling, 2000);
}

applyComparisonStyling();

const cpuData = {
  "Ryzen 7 7700X": {
    image: "https://www.techpowerup.com/review/amd-ryzen-7-3700x/images/small.png",
    cores: "8",
    threads: "16",
    base_clock: "4.50 GHz",
    boost_clock: "5.40 GHz",
    L2_Cache: "8 MB",
    L3_Cache: "32 MB",
    Memory_Type: "DDR5",
    Memory_Speed: "5200",
    pcie: "5.0",
    Sockets: "AM5",
    igpu: "RDNA 2",
    single_score: "2001",
    multi_score: "19810",
    blender_score: "279",
    tdp: "105 W",
    idle_load: "N/A",
    full_load: "130 W",
  },
  "Core i5 13500": {
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Intel_Core_i5_%2811th_generation%2C_logo%29.svg/512px-Intel_Core_i5_%2811th_generation%2C_logo%29.svg.png?20211018065945",
    cores: "14 ( 6P+8E )",
    threads: "20",
    base_clock: "2.50 GHz",
    boost_clock: "4.80 GHz",
    L2_Cache: "11.5 MB",
    L3_Cache: "24 MB",
    Memory_Type: "DDR4 / DDR5",
    Memory_Speed: "3200 / 4800",
    pcie: "5.0",
    Sockets: "LGA1700",
    igpu: "UHD 770",
    single_score: "1884",
    multi_score: "21216",
    blender_score: "266",
    tdp: "65 W",
    idle_load: "N/A",
    full_load: "N/A",
  },
  "Core i5 13400F": {
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Intel_Core_i5_%2811th_generation%2C_logo%29.svg/512px-Intel_Core_i5_%2811th_generation%2C_logo%29.svg.png?20211018065945",
    cores: "10 ( 6P+4E )",
    threads: "16",
    base_clock: "2.50 GHz",
    boost_clock: "4.60 GHz",
    L2_Cache: "9.5 MB",
    L3_Cache: "20 MB",
    Memory_Type: "DDR4 / DDR5",
    Memory_Speed: "3200 / 4800",
    pcie: "5.0",
    Sockets: "LGA1700",
    igpu: "N/A",
    single_score: "1794",
    multi_score: "15890",
    blender_score: "205",
    tdp: "65 W",
    idle_load: "N/A",
    full_load: "N/A",
  },
  "Core i3 13100F": {
    image: "https://upload.wikimedia.org/wikipedia/commons/9/90/Intel_Core_i3_Logo_2020.png?20210405013512",
    cores: "4 ( 4P+0E )",
    threads: "8",
    base_clock: "3.40 GHz",
    boost_clock: "4.50 GHz",
    L2_Cache: "5 MB",
    L3_Cache: "12 MB",
    Memory_Type: "DDR4 / DDR5",
    Memory_Speed: "3200 / 4800",
    pcie: "5.0",
    Sockets: "LGA1700",
    igpu: "N/A",
    single_score: "1751",
    multi_score: "8843",
    blender_score: "110",
    tdp: "58 W",
    idle_load: "55",
    full_load: "146 W",
  },
  "Core i5 12400": {
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Intel_Core_i5_%2811th_generation%2C_logo%29.svg/512px-Intel_Core_i5_%2811th_generation%2C_logo%29.svg.png?20211018065945",
    cores: "6",
    threads: "12",
    base_clock: "2.50 GHz",
    boost_clock: "4.40 GHz",
    L2_Cache: "7.5 MB",
    L3_Cache: "18 MB",
    Memory_Type: "DDR4 / DDR5",
    Memory_Speed: "3200 / 4800",
    pcie: "5.0",
    Sockets: "LGA1700",
    igpu: "UHD 730",
    single_score: "1734",
    multi_score: "11657",
    blender_score: "161",
    tdp: "65 W",
    idle_load: "52 W",
    full_load: "138 W",
  },
  "Core i5 12400F": {
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Intel_Core_i5_%2811th_generation%2C_logo%29.svg/512px-Intel_Core_i5_%2811th_generation%2C_logo%29.svg.png?20211018065945",
    cores: "6",
    threads: "12",
    base_clock: "2.50 GHz",
    boost_clock: "4.40 GHz",
    L2_Cache: "7.5 MB",
    L3_Cache: "18 MB",
    Memory_Type: "DDR4 / DDR5",
    Memory_Speed: "3200 / 4800",
    pcie: "5.0",
    Sockets: "LGA1700",
    igpu: "N/A",
    single_score: "1734",
    multi_score: "11657",
    blender_score: "161",
    tdp: "65 W",
    idle_load: "52 W",
    full_load: "138 W",
  },
  "Core i3 12100": {
    image: "https://upload.wikimedia.org/wikipedia/commons/9/90/Intel_Core_i3_Logo_2020.png?20210405013512",
    cores: "4",
    threads: "8",
    base_clock: "3.30 GHz",
    boost_clock: "4.30 GHz",
    L2_Cache: "5 MB",
    L3_Cache: "12 MB",
    Memory_Type: "DDR4 / DDR5",
    Memory_Speed: "3200 / 4800",
    pcie: "5.0",
    Sockets: "LGA1700",
    igpu: "UHD 730",
    single_score: "1678",
    multi_score: "8530",
    blender_score: "110",
    tdp: "60 W",
    idle_load: "46 W",
    full_load: "114 W",
  },
  "Core i3 12100F": {
    image: "https://upload.wikimedia.org/wikipedia/commons/9/90/Intel_Core_i3_Logo_2020.png?20210405013512",
    cores: "4",
    threads: "8",
    base_clock: "3.30 GHz",
    boost_clock: "4.30 GHz",
    L2_Cache: "5 MB",
    L3_Cache: "12 MB",
    Memory_Type: "DDR4 / DDR5",
    Memory_Speed: "3200 / 4800",
    pcie: "5.0",
    Sockets: "LGA1700",
    igpu: "N/A",
    single_score: "1678",
    multi_score: "8530",
    blender_score: "110",
    tdp: "58 W",
    idle_load: "46 W",
    full_load: "114 W",
  }, 
  "Core i5 11400F": {
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Intel_Core_i5_%2811th_generation%2C_logo%29.svg/512px-Intel_Core_i5_%2811th_generation%2C_logo%29.svg.png?20211018065945",
    cores: "6",
    threads: "12",
    base_clock: "2.60 GHz",
    boost_clock: "4.40 GHz",
    L2_Cache: "3 MB",
    L3_Cache: "12 MB",
    Memory_Type: "DDR4 / DDR5",
    Memory_Speed: "3200 / 4800",
    pcie: "4.0",
    Sockets: "LGA1200",
    igpu: "N/A",
    single_score: "1402",
    multi_score: "10155",
    blender_score: "140",
    tdp: "65 W",
    idle_load: "53 W",
    full_load: "130 W",
  },
  "Ryzen 5 5600X": {
    image: "https://www.techpowerup.com/review/amd-ryzen-5-3600/images/small.png",
    cores: "6",
    threads: "12",
    base_clock: "3.70 GHz",
    boost_clock: "4.60 GHz",
    L2_Cache: "3 MB",
    L3_Cache: "32 MB",
    Memory_Type: "DDR4",
    Memory_Speed: "3200",
    pcie: "4.0 x16",
    Sockets: "AM4",
    igpu: "N/A",
    single_score: "1593",
    multi_score: "11077",
    blender_score: "153",
    tdp: "65 W",
    idle_load: "50 W",
    full_load: "126 W",
  },
  "Ryzen 5 5600": {
    image: "https://www.techpowerup.com/review/amd-ryzen-5-3600/images/small.png",
    cores: "6",
    threads: "12",
    base_clock: "3.50 GHz",
    boost_clock: "4.40 GHz",
    L2_Cache: "3 MB",
    L3_Cache: "32 MB",
    Memory_Type: "DDR4",
    Memory_Speed: "3200",
    pcie: "4.0",
    Sockets: "AM4",
    igpu: "N/A",
    single_score: "1504",
    multi_score: "10898",
    blender_score: "152",
    tdp: "65 W",
    idle_load: "51 W",
    full_load: "126 W",
  },
  "Ryzen 5 5600G": {
    image: "https://www.techpowerup.com/review/amd-ryzen-5-3600/images/small.png",
    cores: "6",
    threads: "12",
    base_clock: "3.90 GHz",
    boost_clock: "4.40 GHz",
    L2_Cache: "3 MB",
    L3_Cache: "16 MB",
    Memory_Type: "DDR4",
    Memory_Speed: "3200",
    pcie: "3.0",
    Sockets: "AM4",
    igpu: "Vega 7",
    single_score: "1456",
    multi_score: "10860",
    blender_score: "145",
    tdp: "65 W",
    idle_load: "52 W",
    full_load: "132 W",
  },
  "Ryzen 5 3600": {
    image: "https://www.techpowerup.com/review/amd-ryzen-5-3600/images/small.png",
    cores: "6",
    threads: "12",
    base_clock: "3.60 GHz",
    boost_clock: "4.20 GHz",
    L2_Cache: "3 MB",
    L3_Cache: "32 MB",
    Memory_Type: "DDR4",
    Memory_Speed: "3200",
    pcie: "4.0 x16",
    Sockets: "AM4",
    igpu: "N/A",
    single_score: "1250",
    multi_score: "9150",
    blender_score: "127",
    tdp: "65 W",
    idle_load: "51 W",
    full_load: "135 W",
  },

};

