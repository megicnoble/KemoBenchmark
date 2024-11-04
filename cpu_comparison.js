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

function navigateToComparisonPage() {
  window.location.href = "cpu_comparison_2.html";
}

function SwitchPage() {
  window.location.href = "gpu_comparison.html";
}

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
  localStorage.setItem(cpuId, selectedValue);
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

function getCpuDetails(cpuId) {
  const cpuSelect = document.getElementById(cpuId + '-dropdown-button');
  const cpuValue = cpuSelect.textContent;
  const cpuDetails = cpuData[cpuValue] ||
  {
    image: "https://i.gifer.com/origin/ba/ba4eeed06a8f9efb0d7b5ad26f1f8d45_w200.gif",
  };

  return {
    image: cpuDetails.image,
  };
}

function compareProducts() {
  const cpu1Details = getCpuDetails("cpu1");
  const cpu2Details = getCpuDetails("cpu2");

  document.getElementById("product1-image").src = cpu1Details.image;
  document.getElementById("product2-image").src = cpu2Details.image;

}
const cpuData = {
  "Ryzen 7 7700X": {
    image: "https://www.techpowerup.com/review/amd-ryzen-7-3700x/images/small.png",
  },
  "Core i5 13500": {
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Intel_Core_i5_%2811th_generation%2C_logo%29.svg/512px-Intel_Core_i5_%2811th_generation%2C_logo%29.svg.png?20211018065945",
  },
  "Core i5 13400F": {
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Intel_Core_i5_%2811th_generation%2C_logo%29.svg/512px-Intel_Core_i5_%2811th_generation%2C_logo%29.svg.png?20211018065945",
  },
  "Core i3 13100F": {
    image: "https://upload.wikimedia.org/wikipedia/commons/9/90/Intel_Core_i3_Logo_2020.png?20210405013512",
  },
  "Core i5 12400": {
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Intel_Core_i5_%2811th_generation%2C_logo%29.svg/512px-Intel_Core_i5_%2811th_generation%2C_logo%29.svg.png?20211018065945",
  },
  "Core i5 12400F": {
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Intel_Core_i5_%2811th_generation%2C_logo%29.svg/512px-Intel_Core_i5_%2811th_generation%2C_logo%29.svg.png?20211018065945",
  },
  "Core i5 11400F": {
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Intel_Core_i5_%2811th_generation%2C_logo%29.svg/512px-Intel_Core_i5_%2811th_generation%2C_logo%29.svg.png?20211018065945",
  },
  "Core i3 12100": {
    image: "https://upload.wikimedia.org/wikipedia/commons/9/90/Intel_Core_i3_Logo_2020.png?20210405013512",
  },
  "Core i3 12100F": {
    image: "https://upload.wikimedia.org/wikipedia/commons/9/90/Intel_Core_i3_Logo_2020.png?20210405013512",
  },
  "Ryzen 5 5600X": {
    image: "https://www.techpowerup.com/review/amd-ryzen-5-3600/images/small.png",
  },
  "Ryzen 5 5600": {
    image: "https://www.techpowerup.com/review/amd-ryzen-5-3600/images/small.png",
  },
  "Ryzen 5 5600G": {
    image: "https://www.techpowerup.com/review/amd-ryzen-5-3600/images/small.png",
  },
  "Ryzen 5 3600": {
    image: "https://www.techpowerup.com/review/amd-ryzen-5-3600/images/small.png",
  },

  
};



document.addEventListener('DOMContentLoaded', function() {
  const audioPlayer = document.getElementById('audio-player');
  audioPlayer.volume = 0.3;
});

const audioPlayer = document.getElementById('audio-player');
const playPauseBtn = document.getElementById('play-pause-btn');
const currentTimeSpan = document.getElementById('current-time');
const totalDurationSpan = document.getElementById('total-duration');
const progressBar = document.getElementById('progress-bar');
const coverImage = document.getElementById('cover-image');
const MusicArtists = document.getElementById('music-artist');
const MusicName = document.getElementById('music-name');

let isPlaying = false;
let currentTrackIndex = 0;
const Name = ["" , ""]
const tracks = ["" , ""];
const covers = ["" , ""];
const Artists = ["" , ""];

playPauseBtn.addEventListener('click', () => {
  if (isPlaying) {
    audioPlayer.pause();
  } else {
    audioPlayer.play();
  }
  isPlaying = !isPlaying;
  updatePlayPauseButton();
});

audioPlayer.addEventListener('timeupdate', () => {
  const currentTime = audioPlayer.currentTime;
  const totalDuration = audioPlayer.duration;
  const progressPercentage = (currentTime / totalDuration) * 100;

  currentTimeSpan.textContent = formatTime(currentTime);
  totalDurationSpan.textContent = formatTime(totalDuration);
  progressBar.style.width = `${progressPercentage}%`;

  if (isPlaying) {
    audioPlayers[currentTrackIndex].pause();
  } else {
    audioPlayers[currentTrackIndex].play();
  }

  isPlaying = !isPlaying;
  updatePlayPauseButton();
});

const nextBtn = document.getElementById('next-btn');
nextBtn.addEventListener('click', () => {
  playNextTrack();
});

function playNextTrack() {
  currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
  audioPlayer.src = tracks[currentTrackIndex];
  coverImage.src = covers[currentTrackIndex];
  MusicArtists.textContent = Artists[currentTrackIndex];
  MusicName.textContent = Name[currentTrackIndex];

  audioPlayer.play();
  isPlaying = true;
  updatePlayPauseButton();
}

const beforeBtn = document.getElementById('before-btn');
beforeBtn.addEventListener('click', () => {
  playPreviousTrack();
});

function playPreviousTrack() {
  currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
  audioPlayer.src = tracks[currentTrackIndex];
  coverImage.src = covers[currentTrackIndex];
  MusicArtists.textContent = Artists[currentTrackIndex];
  MusicName.textContent = Name[currentTrackIndex];

  audioPlayer.play();
  isPlaying = true;
  updatePlayPauseButton();
}

function formatTime(timeInSeconds) {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

function updatePlayPauseButton() {
  if (isPlaying) {
    playPauseBtn.classList.add('playing');
  } else {
    playPauseBtn.classList.remove('playing');
  }
}