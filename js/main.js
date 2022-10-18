window.onscroll = function () {
    scrollFunc();
};

let intro = document.getElementById("intro");
let nav_fixed = document.getElementById("nav");
let fix = intro.offsetTop;
function scrollFunc() {
    if (window.pageYOffset >= fix) {
        nav_fixed.classList.add("fix");
    } else {
        nav_fixed.classList.remove("fix");
    }
}

// preloader fucntion =============================
// 'use strict';
// $(window).on('load', function () {
//     $(".loader").fadeOut();
//     $("#preloader").delay(400).fadeOut("slow");

// });
// preloader fucntion end =======================


// Header

const selectElement = function (element) {
    return document.querySelector(element);
};

let menu = selectElement('.menu');
let hide_menu = selectElement('.hide_menu');
let link_media = selectElement('.link_media');
let hide_media = selectElement('.hide_media');

let currentLang = selectElement('.current_lang');
let languegs = selectElement('.languages');
let pyramid = selectElement('.pyramid');

let navs = selectElement('.navs_inner');
let burger = selectElement('.hamburg');

let langMobile = selectElement('.langMobile');
let languagesMobile = selectElement('.languagesMobile');

// console.log(burger);

window.onclick = function (e) {


    if (selectElement('.mobile__search').classList.contains('open') && !e.target.closest('.mobile__form')) {
        selectElement('.mobile__search').classList.remove('open');
    }


    if (selectElement('.navs__back').classList.contains('open') && !e.target.closest('.open__link') && !e.target.closest('.nav__group')) {
        selectElement('.navs__back').classList.remove('open');
    }

    if (selectElement('.navs__inner').classList.contains('open') && !e.target.closest('.open__link') && !e.target.closest('.nav__group')) {
        selectElement('.navs__inner').classList.remove('open');
    }
    
    if (selectElement('.hidden__media').classList.contains('open')) {
        selectElement('.hidden__media').classList.remove('open');
    }
    

    if (selectElement('.player_bg').classList.contains('videoShow') && !e.target.closest('.player')) {
        selectElement('.player_bg').classList.remove('videoShow');
        selectElement('.player__video').pause();
        selectElement('.player__video').currentTime = 0;
    }

}

function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}





selectElement('.loupe').addEventListener('click', function () {
    sleep(2).then(() => {
        selectElement('.mobile__search').classList.toggle('open');
    });
});


selectElement('.new__hamburg').addEventListener('click', function () {
    console.log("hello")
    sleep(2).then(() => {
        selectElement('.navs__back').classList.toggle('open');
    });
});

selectElement('.new__hamburg').addEventListener('click', function () {
    sleep(2).then(() => {
        selectElement('.navs__inner').classList.toggle('open');
    });
});

selectElement('.nav_open_media').addEventListener('click', function () {
    sleep(2).then(() => {
        selectElement('.hidden__media').classList.toggle('open');
    });
});

selectElement('.mobile__close').addEventListener('click', function () {
    sleep(2).then(() => {
        selectElement('.mobile__search').classList.remove('open');
    });
});


document.querySelectorAll('.gallery_video').forEach((e) => {
    e.addEventListener('click', function () {
        sleep(2).then(() => {
            selectElement('.player_bg').classList.toggle('videoShow');
            var vd = selectElement('.player__video');
            while (vd.lastElementChild) {
                vd.removeChild(vd.lastElementChild);
            }

            var source = document.createElement('source');
            console.log(e)
            console.log(e.dataset.src)

            source.setAttribute('src', e.dataset.src);

            vd.appendChild(source);
            vd.load();
            vd.play();
        });
    })
});

document.querySelectorAll('.video_item').forEach((e) => {
    e.addEventListener('click', function () {
        sleep(2).then(() => {
            selectElement('.player_bg').classList.toggle('videoShow');
            var vd = selectElement('.player__video');
            while (vd.lastElementChild) {
                vd.removeChild(vd.lastElementChild);
            }

            var source = document.createElement('source');
            console.log(e)
            console.log(e.dataset.src)

            source.setAttribute('src', e.dataset.src);

            vd.appendChild(source);
            vd.load();
            vd.play();
        });
    })
});
// }   

document.querySelectorAll('.player__video').forEach((e) => {
    e.addEventListener('ended', function () {
        // sleep(0).then(() => {
        selectElement('.player_bg').classList.remove('videoShow');
        // });
    })
});

// // End Header

// Video Player 
const video = document.querySelector('.viewer');
const toggle = document.querySelector('.toggle');
const volume = document.querySelector('.volume');
const skipButtons = document.querySelectorAll('[data-skip]');
const ranges = document.querySelectorAll('.player__slider');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');
const fullscreen = document.querySelector('.fullscreen');


// defining functions
function togglePlay() {
    // toggle for video play and pause
    const playOrPause = video.paused ? 'play' : 'pause';
    video[playOrPause]();
    // toggle for icon change when play or pause
    playOrPause === 'play' ? toggle.textContent = '❚ ❚' : toggle.textContent = '►';
}

function skip() {
    // add or substract the skip time to current time of video
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeChange() {
    // Change the video's range value
    video[this.name] = this.value;
}

function handleProgress() {
    // convert video's current time into percentage
    const percent = (video.currentTime / video.duration) * 100;
    // append it to the flexBasis property (CSS)
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

function handleFullScreen() {
    video.requestFullscreen();
}

// Play or Pause events(On video click)
video.addEventListener('click', togglePlay);
// 					   (On button click)
toggle.addEventListener('click', togglePlay);

// skipping video back and forth
skipButtons.forEach(button => button.addEventListener('click', skip));

// volume or fast forward events
ranges.forEach(range => range.addEventListener('change', handleRangeChange));

// Change progress wrt time
video.addEventListener('timeupdate', handleProgress);

// event on clicking progress bar
let mouseDown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mouseDown && scrub(e));
progress.addEventListener('mousedown', () => mouseDown = true);
progress.addEventListener('mouseup', () => mouseDown = false);

// add full screen event
fullscreen.addEventListener('click', handleFullScreen);





