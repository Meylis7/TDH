window.onscroll = function () {
    scrollFunc();
};

let intro = document.getElementById("intro");
let nav_fixed = document.getElementById("nav");
let to_top = document.getElementById("to-top");
let fix = intro.offsetTop;
function scrollFunc() {
    if (window.pageYOffset >= fix) {
        nav_fixed.classList.add("fix");
        to_top.classList.add("fixed");
    } else {
        nav_fixed.classList.remove("fix");
        to_top.classList.remove("fixed");
    }
}

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


let video_item = document.querySelectorAll('.media_video-item');
let modal_video = document.querySelector('.modal_video');
let body = document.querySelector('body');

let gal_item = document.querySelectorAll('.modal_gal-item');
let fancy_close = document.querySelector('.fancybox-button--close');
let modal_photo = document.querySelectorAll('.modal-photo');



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

    if (selectElement('.hidden__media').classList.contains('open') && !e.target.closest('.nav_open_media')) {
        selectElement('.hidden__media').classList.remove('open');
    }


    // modal_photo.forEach(modal_photo => {
    //     if (modal_photo != undefined) {
    //         modal_photo.classList.contains('active') && !e.target.closest('.fancybox modal_gal-item');
    //         modal_photo.classList.remove('active')
    //     }
    // }
    // );




    if (selectElement('.player_bg') != undefined) {
        if (selectElement('.player_bg').classList.contains('videoShow') && !e.target.closest('.player')) {
            selectElement('.player_bg').classList.remove('videoShow');
            selectElement('.player__video').pause();
            selectElement('.player__video').currentTime = 0;
        }
    }

    if (selectElement('.modal-photo') != undefined) {
        if (selectElement('.modal-photo').classList.contains('active') && !e.target.closest('.modal_gal') && !e.target.closest('.owl-nav')) {
            selectElement('.modal-photo').classList.remove('active');
        }
    }

    if (modal_video != undefined) {
        if (modal_video.classList.contains('active') && !e.target.closest('.modal_video-item video')) {
            modal_video.classList.remove('active')
            body.classList.remove('active')
        }
    }

}

function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}



// Theme Change ====================================

const toggleSwitch = document.querySelector('#theme-check');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}


toggleSwitch.addEventListener('change', switchTheme, false);

// Theme Change end ================================






// =============================================

if (video_item != undefined) {
    video_item.forEach(x => {
        x.addEventListener('click', function () {
            sleep(2).then(() => {
                modal_video.classList.add('active');
                body.classList.add('active');
                console.log("log")
            });
        });
    })
}


if (gal_item != undefined) {
    gal_item.forEach(x => {
        x.addEventListener('click', function () {
            sleep(2).then(() => {
                modal_photo.forEach(p => {
                    p.classList.add('disable');
                })
            });
        });
    })
}





selectElement('.loupe').addEventListener('click', function () {
    sleep(2).then(() => {
        selectElement('.mobile__search').classList.toggle('open');
    });
});


selectElement('.new__hamburg').addEventListener('click', function () {
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

// document.querySelectorAll('.video_item').forEach((e) => {
//     e.addEventListener('click', function () {
//         sleep(2).then(() => {
//             selectElement('.player_bg').classList.toggle('videoShow');
//             var vd = selectElement('.player__video');
//             while (vd.lastElementChild) {
//                 vd.removeChild(vd.lastElementChild);
//             }

//             var source = document.createElement('source');
//             // console.log(e)
//             // console.log(e.dataset.src)

//             source.setAttribute('src', e.dataset.src);

//             vd.appendChild(source);
//             vd.load();
//             vd.play();
//         });
//     })
// });

// document.querySelectorAll('.player__video').forEach((e) => {
//     e.addEventListener('ended', function () {
//         selectElement('.player_bg').classList.remove('videoShow');
//     })
// });

// // End Header

// Video Player
// const video = document.querySelector('.viewer');
// const toggle = document.querySelector('.toggle');
// const volume = document.querySelector('.volume');
// const skipButtons = document.querySelectorAll('[data-skip]');
// const ranges = document.querySelectorAll('.player__slider');
// const progress = document.querySelector('.progress');
// const progressBar = document.querySelector('.progress__filled');
// const fullscreen = document.querySelector('.fullscreen');


// // defining functions
// function togglePlay() {
//     // toggle for video play and pause
//     const playOrPause = video.paused ? 'play' : 'pause';
//     video[playOrPause]();
//     // toggle for icon change when play or pause
//     playOrPause === 'play' ? toggle.textContent = '❚ ❚' : toggle.textContent = '►';
// }

// function skip() {
//     // add or substract the skip time to current time of video
//     video.currentTime += parseFloat(this.dataset.skip);
// }

// function handleRangeChange() {
//     // Change the video's range value
//     video[this.name] = this.value;
// }

// function handleProgress() {
//     // convert video's current time into percentage
//     const percent = (video.currentTime / video.duration) * 100;
//     // append it to the flexBasis property (CSS)
//     progressBar.style.flexBasis = `${percent}%`;
// }

// function scrub(e) {
//     const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
//     video.currentTime = scrubTime;
// }

// function handleFullScreen() {
//     video.requestFullscreen();
// }

// // Play or Pause events(On video click)
// video.addEventListener('click', togglePlay);
// // 					   (On button click)
// toggle.addEventListener('click', togglePlay);

// // skipping video back and forth
// skipButtons.forEach(button => button.addEventListener('click', skip));

// // volume or fast forward events
// ranges.forEach(range => range.addEventListener('change', handleRangeChange));

// // Change progress wrt time
// video.addEventListener('timeupdate', handleProgress);

// // event on clicking progress bar
// let mouseDown = false;
// progress.addEventListener('click', scrub);
// progress.addEventListener('mousemove', (e) => mouseDown && scrub(e));
// progress.addEventListener('mousedown', () => mouseDown = true);
// progress.addEventListener('mouseup', () => mouseDown = false);

// // add full screen event
// fullscreen.addEventListener('click', handleFullScreen);





