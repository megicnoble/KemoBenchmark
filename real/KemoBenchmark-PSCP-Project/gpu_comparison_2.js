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
      const cpu1base_clock = document.getElementById("cpu1-base_clock");
      cpu1base_clock.textContent = cpuDetails1.base_clock;
      const cpu1boost_clock = document.getElementById("cpu1-boost_clock");
      cpu1boost_clock.textContent = cpuDetails1.boost_clock;
      const cpu1memory = document.getElementById("cpu1-memory");
      cpu1memory.textContent = cpuDetails1.memory;
      const cpu1memory_clock = document.getElementById("cpu1-memory_clock");
      cpu1memory_clock.textContent = cpuDetails1.memory_clock;
      const cpu2TFLOPs = document.getElementById("cpu1-TFLOPs");
      cpu2TFLOPs.textContent = cpuDetails1.TFLOPs;
      const cpu1rt_cores = document.getElementById("cpu1-rt_cores");
      cpu1rt_cores.textContent = cpuDetails1.rt_cores;
      const cpu1timespy = document.getElementById("cpu1-timespy");
      cpu1timespy.textContent = cpuDetails1.timespy;
      const cpu1blender = document.getElementById("cpu1-blender");
      cpu1blender.textContent = cpuDetails1.blender;

      const cpu1apex = document.getElementById("cpu1-apex");
      cpu1apex.textContent = cpuDetails1.apex;
      const cpu1valhalla = document.getElementById("cpu1-valhalla");
      cpu1valhalla.textContent = cpuDetails1.valhalla;
      const cpu1cyberpunk = document.getElementById("cpu1-cyberpunk");
      cpu1cyberpunk.textContent = cpuDetails1.cyberpunk;
      const cpu1forza = document.getElementById("cpu1-forza");
      cpu1forza.textContent = cpuDetails1.forza;
      const cpu1rdr = document.getElementById("cpu1-rdr");
      cpu1rdr.textContent = cpuDetails1.rdr;
      const cpu1village = document.getElementById("cpu1-village");
      cpu1village.textContent = cpuDetails1.village;
      const cpu1tdp = document.getElementById("cpu1-tdp");
      cpu1tdp.textContent = cpuDetails1.tdp;
      const cpu1minpsu = document.getElementById("cpu1-minpsu");
      cpu1minpsu.textContent = cpuDetails1.minpsu;
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
      const cpu2base_clock = document.getElementById("cpu2-base_clock");
      cpu2base_clock.textContent = cpuDetails2.base_clock;
      const cpu2boost_clock = document.getElementById("cpu2-boost_clock");
      cpu2boost_clock.textContent = cpuDetails2.boost_clock;
      const cpu2memory = document.getElementById("cpu2-memory");
      cpu2memory.textContent = cpuDetails2.memory;
      const cpu2memory_clock = document.getElementById("cpu2-memory_clock");
      cpu2memory_clock.textContent = cpuDetails2.memory_clock;
      const cpu2TFLOPs = document.getElementById("cpu2-TFLOPs");
      cpu2TFLOPs.textContent = cpuDetails2.TFLOPs;
      const cpu2rt_cores = document.getElementById("cpu2-rt_cores");
      cpu2rt_cores.textContent = cpuDetails2.rt_cores;
      const cpu2timespy = document.getElementById("cpu2-timespy");
      cpu2timespy.textContent = cpuDetails2.timespy;
      const cpu2blender = document.getElementById("cpu2-blender");
      cpu2blender.textContent = cpuDetails2.blender;
      
      const cpu2apex = document.getElementById("cpu2-apex");
      cpu2apex.textContent = cpuDetails2.apex;
      const cpu2valhalla = document.getElementById("cpu2-valhalla");
      cpu2valhalla.textContent = cpuDetails2.valhalla;
      const cpu2cyberpunk = document.getElementById("cpu2-cyberpunk");
      cpu2cyberpunk.textContent = cpuDetails2.cyberpunk;
      const cpu2forza = document.getElementById("cpu2-forza");
      cpu2forza.textContent = cpuDetails2.forza;
      const cpu2rdr = document.getElementById("cpu2-rdr");
      cpu2rdr.textContent = cpuDetails2.rdr;
      const cpu2village = document.getElementById("cpu2-village");
      cpu2village.textContent = cpuDetails2.village;
      const cpu2tdp = document.getElementById("cpu2-tdp");
      cpu2tdp.textContent = cpuDetails2.tdp;
      const cpu2minpsu = document.getElementById("cpu2-minpsu");
      cpu2minpsu.textContent = cpuDetails2.minpsu;
    }
  }

});

function getCpuDetails(cpuId) {
  const cpuSelect = document.getElementById(cpuId + '-dropdown-button');
  const cpuValue = cpuSelect.textContent;
  const cpuDetails = cpuData[cpuValue] || {
    image: "https://i.gifer.com/origin/ba/ba4eeed06a8f9efb0d7b5ad26f1f8d45_w200.gif",
    base_clock: "",
    boost_clock: "",
    memory: "",
    memory_clock: "",
    TFLOPs: "",
    rt_cores: "",
    timespy: "",
    blender: "",
    apex: "",
    valhalla: "",
    cyberpunk: "",
    forza: "",
    rdr: "",
    village: "",
    tdp: "",
    minpsu: "",

  };

  return {
    image: cpuDetails.image,
    base_clock: cpuDetails.base_clock,
    boost_clock: cpuDetails.boost_clock,
    memory: cpuDetails.memory,
    memory_clock: cpuDetails.memory_clock,
    TFLOPs: cpuDetails.TFLOPs,
    rt_cores: cpuDetails.rt_cores,
    timespy: cpuDetails.timespy,
    blender: cpuDetails.blender,
    apex: cpuDetails.apex,
    valhalla: cpuDetails.valhalla,
    cyberpunk: cpuDetails.cyberpunk,
    forza: cpuDetails.forza,
    rdr: cpuDetails.rdr,
    village: cpuDetails.village,
    tdp: cpuDetails.tdp,
    minpsu: cpuDetails.minpsu,

  };
}

function compareProducts() {
  const cpu1Details = getCpuDetails("cpu1");
  const cpu2Details = getCpuDetails("cpu2");

  document.getElementById("product1-image").src = cpu1Details.image;
  document.getElementById("product2-image").src = cpu2Details.image;

  document.getElementById("cpu1-base_clock").textContent = cpu1Details.base_clock;
  document.getElementById("cpu2-base_clock").textContent = cpu2Details.base_clock;

  document.getElementById("cpu1-boost_clock").textContent = cpu1Details.boost_clock;
  document.getElementById("cpu2-boost_clock").textContent = cpu2Details.boost_clock;

  document.getElementById("cpu1-memory").textContent = cpu1Details.memory;
  document.getElementById("cpu2-memory").textContent = cpu2Details.memory;

  document.getElementById("cpu1-memory_clock").textContent = cpu1Details.memory_clock;
  document.getElementById("cpu2-memory_clock").textContent = cpu2Details.memory_clock;

  document.getElementById("cpu1-TFLOPs").textContent = cpu1Details.TFLOPs;
  document.getElementById("cpu2-TFLOPs").textContent = cpu2Details.TFLOPs;

  document.getElementById("cpu1-rt_cores").textContent = cpu1Details.rt_cores;
  document.getElementById("cpu2-rt_cores").textContent = cpu2Details.rt_cores;

  document.getElementById("cpu1-timespy").textContent = cpu1Details.timespy;
  document.getElementById("cpu2-timespy").textContent = cpu2Details.timespy;

  document.getElementById("cpu1-blender").textContent = cpu1Details.blender;
  document.getElementById("cpu2-blender").textContent = cpu2Details.blender;

  document.getElementById("cpu1-apex").textContent = cpu1Details.apex;
  document.getElementById("cpu2-apex").textContent = cpu2Details.apex;

  document.getElementById("cpu1-valhalla").textContent = cpu1Details.valhalla;
  document.getElementById("cpu2-valhalla").textContent = cpu2Details.valhalla;

  document.getElementById("cpu1-cyberpunk").textContent = cpu1Details.cyberpunk;
  document.getElementById("cpu2-cyberpunk").textContent = cpu2Details.cyberpunk;

  document.getElementById("cpu1-forza").textContent = cpu1Details.forza;
  document.getElementById("cpu2-forza").textContent = cpu2Details.forza;

  document.getElementById("cpu1-rdr").textContent = cpu1Details.rdr;
  document.getElementById("cpu2-rdr").textContent = cpu2Details.rdr;

  document.getElementById("cpu1-village").textContent = cpu1Details.village;
  document.getElementById("cpu2-village").textContent = cpu2Details.village;

  document.getElementById("cpu1-tdp").textContent = cpu1Details.tdp;
  document.getElementById("cpu2-tdp").textContent = cpu2Details.tdp;

  document.getElementById("cpu1-minpsu").textContent = cpu1Details.minpsu;
  document.getElementById("cpu2-minpsu").textContent = cpu2Details.minpsu;

}

function applyComparisonStyling() {
  const cpu1timespyElement = document.getElementById("cpu1-timespy");
  const cpu2timespyElement = document.getElementById("cpu2-timespy");
  const cpu1timespy = parseInt(cpu1timespyElement.textContent);
  const cpu2timespy = parseInt(cpu2timespyElement.textContent);
  if (cpu1timespy > cpu2timespy) {
    cpu1timespyElement.style.color = "#21B6A8";
    cpu2timespyElement.style.color = "#DB1F48";
  } else if (cpu2timespy > cpu1timespy) {
    cpu2timespyElement.style.color = "#21B6A8";
    cpu1timespyElement.style.color = "#DB1F48";
  } else {
    cpu1timespyElement.style.color = "";
    cpu2timespyElement.style.color = "";
  }
  const cpu1blenderElement = document.getElementById("cpu1-blender");
  const cpu2blenderElement = document.getElementById("cpu2-blender");
  const cpu1blender = parseInt(cpu1blenderElement.textContent);
  const cpu2blender = parseInt(cpu2blenderElement.textContent);
  if (cpu1blender > cpu2blender) {
    cpu1blenderElement.style.color = "#21B6A8";
    cpu2blenderElement.style.color = "#DB1F48";
  } else if (cpu2blender > cpu1blender) {
    cpu2blenderElement.style.color = "#21B6A8";
    cpu1blenderElement.style.color = "#DB1F48";
  } else {
    cpu1blenderElement.style.color = "";
    cpu2blenderElement.style.color = "";
  }
  const cpu1apexElement = document.getElementById("cpu1-apex");
  const cpu2apexElement = document.getElementById("cpu2-apex");
  const cpu1apex = parseInt(cpu1apexElement.textContent);
  const cpu2apex = parseInt(cpu2apexElement.textContent);
  if (cpu1apex > cpu2apex) {
    cpu1apexElement.style.color = "#21B6A8";
    cpu2apexElement.style.color = "#DB1F48";
  } else if (cpu2apex > cpu1apex) {
    cpu2apexElement.style.color = "#21B6A8";
    cpu1apexElement.style.color = "#DB1F48";
  } else {
    cpu1apexElement.style.color = "";
    cpu2apexElement.style.color = "";
  }
  const cpu1valhallaElement = document.getElementById("cpu1-valhalla");
  const cpu2valhallaElement = document.getElementById("cpu2-valhalla");
  const cpu1valhalla = parseInt(cpu1valhallaElement.textContent);
  const cpu2valhalla = parseInt(cpu2valhallaElement.textContent);
  if (cpu1valhalla > cpu2valhalla) {
    cpu1valhallaElement.style.color = "#21B6A8";
    cpu2valhallaElement.style.color = "#DB1F48";
  } else if (cpu2valhalla > cpu1valhalla) {
    cpu2valhallaElement.style.color = "#21B6A8";
    cpu1valhallaElement.style.color = "#DB1F48";
  } else {
    cpu1valhallaElement.style.color = "";
    cpu2valhallaElement.style.color = "";
  }
  const cpu1cyberpunkElement = document.getElementById("cpu1-cyberpunk");
  const cpu2cyberpunkElement = document.getElementById("cpu2-cyberpunk");
  const cpu1cyberpunk = parseInt(cpu1cyberpunkElement.textContent);
  const cpu2cyberpunk = parseInt(cpu2cyberpunkElement.textContent);
  if (cpu1cyberpunk > cpu2cyberpunk) {
    cpu1cyberpunkElement.style.color = "#21B6A8";
    cpu2cyberpunkElement.style.color = "#DB1F48";
  } else if (cpu2cyberpunk > cpu1cyberpunk) {
    cpu2cyberpunkElement.style.color = "#21B6A8";
    cpu1cyberpunkElement.style.color = "#DB1F48";
  } else {
    cpu1cyberpunkElement.style.color = "";
    cpu2cyberpunkElement.style.color = "";
  }
  const cpu1forzaElement = document.getElementById("cpu1-forza");
  const cpu2forzaElement = document.getElementById("cpu2-forza");
  const cpu1forza = parseInt(cpu1forzaElement.textContent);
  const cpu2forza = parseInt(cpu2forzaElement.textContent);
  if (cpu1forza > cpu2forza) {
    cpu1forzaElement.style.color = "#21B6A8";
    cpu2forzaElement.style.color = "#DB1F48";
  } else if (cpu2forza > cpu1forza) {
    cpu2forzaElement.style.color = "#21B6A8";
    cpu1forzaElement.style.color = "#DB1F48";
  } else {
    cpu1forzaElement.style.color = "";
    cpu2forzaElement.style.color = "";
  }
  const cpu1rdrElement = document.getElementById("cpu1-rdr");
  const cpu2rdrElement = document.getElementById("cpu2-rdr");
  const cpu1rdr = parseInt(cpu1rdrElement.textContent);
  const cpu2rdr = parseInt(cpu2rdrElement.textContent);
  if (cpu1rdr > cpu2rdr) {
    cpu1rdrElement.style.color = "#21B6A8";
    cpu2rdrElement.style.color = "#DB1F48";
  } else if (cpu2rdr > cpu1rdr) {
    cpu2rdrElement.style.color = "#21B6A8";
    cpu1rdrElement.style.color = "#DB1F48";
  } else {
    cpu1rdrElement.style.color = "";
    cpu2rdrElement.style.color = "";
  }
  const cpu1villageElement = document.getElementById("cpu1-village");
  const cpu2villageElement = document.getElementById("cpu2-village");
  const cpu1village = parseInt(cpu1villageElement.textContent);
  const cpu2village = parseInt(cpu2villageElement.textContent);
  if (cpu1village > cpu2village) {
    cpu1villageElement.style.color = "#21B6A8";
    cpu2villageElement.style.color = "#DB1F48";
  } else if (cpu2rdr > cpu1village) {
    cpu2villageElement.style.color = "#21B6A8";
    cpu1villageElement.style.color = "#DB1F48";
  } else {
    cpu1villageElement.style.color = "";
    cpu2villageElement.style.color = "";
  }
  
  setTimeout(applyComparisonStyling, 2000);
}

applyComparisonStyling();

const cpuData = {
  "RTX 3060 12GB": {
    image: "https://static.hardwaredb.net/badges/geforce-rtx-3060.png",
    base_clock: "1320 MHz",
    boost_clock: "1777 MHz",
    memory: "12 GB GDDR6",
    memory_clock: "1875 MHz",
    TFLOPs: "12.74",
    rt_cores: "28",
    timespy: "8705",
    blender: "2543",
    apex: "176 FPS",
    valhalla: "91 FPS",
    cyberpunk: "56 FPS",
    forza: "63 FPS",
    rdr: "57 FPS",
    village: "66 FPS",
    tdp: "170 W",
    minpsu: "550 W",
  },
  "RX 6600 XT": {
    image: "https://static.hardwaredb.net/badges/radeon-rx-6600-xt.png",
    base_clock: "1968 MHz",
    boost_clock: "2589 MHz",
    memory: "8 GB GDDR6",
    memory_clock: "2000 MHz",
    TFLOPs: "10.6",
    rt_cores: "32",
    timespy: "9652",
    blender: "1096",
    apex: "N/A",
    valhalla: "85 FPS",
    cyberpunk: "66 FPS",
    forza: "76 FPS",
    rdr: "87 FPS",
    village: "88 FPS",
    tdp: "160 W",
    minpsu: "500 W",
  },

};

