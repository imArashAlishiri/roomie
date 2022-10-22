
const btnEl = document.querySelectorAll('.audio-btn');
const audioEl = document.querySelectorAll('audio');
const sideBarBtn = document.querySelector('.side-bar-btn');
const sideBar = document.querySelector('.side-bar');
const arrow = document.querySelector('.arrow');
const hiddenBtn = document.querySelector('.hidden-btn');
const instructionP = document.querySelector('.instructions-p');
const hintP = document.querySelector('.hints-p');
const stage1 = document.querySelector('.stage-1');
const stage2 = document.querySelector('.stage-2');
const passwordInput = document.querySelector('.password-input');
const jumpScareAudio = document.querySelector('.jump-scare-audio');
const jumpScareImg = document.querySelector('.jump-scare-img');
const stage3 = document.querySelector('.stage-3');
const stage4 = document.querySelector('.stage-4');
function keyHandler(e) {
    console.log(e.code)

    if(e.code == 'KeyI') {
        document.querySelector('.i').classList.add('show-span');
        setTimeout(() => {
            document.removeEventListener('keydown', keyHandler);
            stage3.classList.add('none');
            stage2.classList.remove('none');
            instructionP.textContent = `Put in The correct password`;
            hintP.textContent = `No hint here either. Ask me for a hint only after you\'ve entered at least 3 different passwords`;
        }, 3000)
    }
}

let tries = 0;


document.querySelectorAll('nav audio').forEach(audio => {
    audio.volume = 0.3
})

function navF() {
    arrow.classList.toggle('rotate');
    sideBar.classList.toggle('show');
}

btnEl.forEach(btn => {
    btn.addEventListener('click', e => {
        const audio = document.querySelector(`.audio-${btn.dataset.num}`);
        const playBtn = document.querySelector(`.play-btn-${btn.dataset.num}`);
        const pauseBtn = document.querySelector(`.pause-btn-${btn.dataset.num}`);

        if(!audio.paused) {
            audio.pause();
            playBtn.classList.toggle('none');
            pauseBtn.classList.toggle('none');
        } else {

            if(audio.currentTime > 0) {
                audio.play();
            } else {
                audioEl.forEach(audio => {
                    audio.pause();
                    audio.currentTime = 0;
                })

                document.querySelectorAll('.play-btn').forEach(btn => {
                    btn.classList.remove('none');
                })

                document.querySelectorAll('.pause-btn').forEach(btn => {
                    btn.classList.add('none');
                })
    
                audio.play();
            }
            playBtn.classList.toggle('none');
            pauseBtn.classList.toggle('none');
        }
    })
})

sideBarBtn.addEventListener('click', () => {
    navF();
});

hiddenBtn.addEventListener('click', () => {
    hiddenBtn.classList.add('hidden-btn-active');
    setTimeout(() => {
        instructionP.textContent = 'Figure it out yourself, hehe';
        hintP.textContent = 'No hints on this level.';
        stage1.classList.add('none');
        stage3.classList.remove('none');
        document.addEventListener('keydown', keyHandler)
    }, 500);
});





document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();

    tries++;
    const text = passwordInput.value.trim().toLowerCase();
    passwordInput.value = "";

    if(text.trim().toLowerCase() == 'the correct password') {
        passwordInput.classList.add('remove');
        setTimeout(() => {
            stage2.classList.add('none');
            stage4.classList.remove('none');
            arrow.classList.add('none');
            sideBar.classList.add('none');

            setTimeout(() => {
                            document.querySelector('.a').classList.add('visib');
            document.querySelector('.b').classList.add('visib');
            document.querySelector('.c').classList.add('visib');
            }, 100)
        }, 1000)
    }

    if(tries == 3) {
        jumpScareAudio.play();
        jumpScareImg.classList.remove('none');
        setTimeout(() => {
            jumpScareImg.classList.add('none');
            jumpScareAudio.pause();
        }, 1000)
    }
})



document.querySelector('.card .btn').addEventListener('click', () => {
    document.querySelector('.card .btn').classList.add('btn-hide');
    setTimeout(() => {
        document.querySelector('.d').classList.add('visib');
        document.querySelector('.e').classList.add('visib');
    }, 1000)
})













