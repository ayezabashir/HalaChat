const listItems = document.querySelectorAll('.menu-list-items');
const toggleTagsBtn = document.getElementById('toggleTags');
const pauseplay = document.getElementById('play-pause-button');
const startNewChat = document.getElementById('start-new-chat');
const userProfile = document.getElementById('user-profile')
const startNewChatBtn = document.getElementById('start-new-chat');
const onlineUsers = document.getElementById('online-users');
const users = document.getElementById('two-users');
const startChatText = document.getElementById('start-voice-chat');
const nextBtn = document.getElementById('next');
const stopBtn = document.getElementById('stop');
const microphoneBtn = document.getElementById('micBtn');
const volumeBtn = document.getElementById('volumeBtn');
const mediaBtn = document.getElementById('mediaBtn');
const mediaOptions = document.querySelector('.media-options');
const avtars = document.querySelector('.select-avatar');
const msgIcon = document.getElementById('msg-icon');
const textChat = document.getElementById('text-chat');
const freeChatLink = document.getElementById('free-chat-Btn');
const catLinkOne = document.getElementById('cat1');
const catLinkTwo = document.getElementById('cat2');
const catLinkThree = document.getElementById('cat3');
const showCatOne = document.getElementById('cat1-show');
const showCatTwo = document.getElementById('cat2-show');
const showCatThree = document.getElementById('cat3-show');
const nextCatBtn = document.getElementById('next-cat');
const showNextCat = document.getElementById('next-cat-show');
const nextCatBtn1 = document.getElementById('next-cat1');
const nextCatBtn2 = document.getElementById('next-cat2');

catLinkOne.addEventListener('click', () => {
    showCatOne.classList.remove('d-none');
    showCatTwo.classList.add('d-none');
    showCatThree.classList.add('d-none');
    showNextCat.classList.add('d-none');
})

catLinkTwo.addEventListener('click', () => {
    showCatOne.classList.add('d-none');
    showCatTwo.classList.remove('d-none');
    showCatThree.classList.add('d-none');
    showNextCat.classList.add('d-none');
})

catLinkThree.addEventListener('click', () => {
    showCatOne.classList.add('d-none');
    showCatTwo.classList.add('d-none');
    showCatThree.classList.remove('d-none');
    showNextCat.classList.add('d-none');
})

nextCatBtn.addEventListener('click', () => {
    showCatOne.classList.add('d-none');
    showCatTwo.classList.add('d-none');
    showCatThree.classList.add('d-none');
    showNextCat.classList.remove('d-none');
})

nextCatBtn1.addEventListener('click', () => {
    showCatOne.classList.add('d-none');
    showCatTwo.classList.add('d-none');
    showCatThree.classList.add('d-none');
    showNextCat.classList.remove('d-none');
})

nextCatBtn2.addEventListener('click', () => {
    showCatOne.classList.add('d-none');
    showCatTwo.classList.add('d-none');
    showCatThree.classList.add('d-none');
    showNextCat.classList.remove('d-none');
})

const languages = [
    'Spanish', 'French', 'German', 'Chinese', 'Japanese', 'Arabic', 'Russian',
    'Portuguese', 'Italian', 'Korean', 'Dutch', 'Swedish', 'Turkish', 'Polish', 'Indonesian',
    'Norwegian', 'Danish', 'Finnish', 'Thai', 'Czech'
];

listItems.forEach(item => {
    item.addEventListener('click', function () {
        listItems.forEach(item => {
            item.classList.remove('font-bold');
        });

        this.classList.add('font-bold');
    });
});


let tagsAdded = false;
let addedTags = [];
let languageIndex = 0;

// Function to add more tags
function addMoreTags() {
    const tagsContainer = document.querySelector('.lang-opt-content');

    for (let i = 0; i < 20; i++) {
        const newTag = document.createElement('span');
        newTag.classList.add('tag', 'font-semi-bold', 'rounded-4', 'text-capitalize', 'text-white');
        newTag.textContent = `${languages[languageIndex]} voice chat`;

        tagsContainer.insertBefore(newTag, toggleTagsBtn);
        addedTags.push(newTag);

        languageIndex = (languageIndex + 1) % languages.length;
    }

    tagsAdded = true;
    toggleTagsBtn.classList.remove('fa-plus-circle');
    toggleTagsBtn.classList.add('fa-minus-circle');
}

// Function to remove added tags
function removeAddedTags() {
    addedTags.forEach(tag => {
        tag.remove();
    });

    addedTags = [];
    tagsAdded = false;
    toggleTagsBtn.classList.remove('fa-minus-circle');
    toggleTagsBtn.classList.add('fa-plus-circle');
}

toggleTagsBtn.addEventListener('click', function () {
    if (!tagsAdded) {
        addMoreTags();
    } else {
        removeAddedTags();
    }
});

function togglePlayPause() {
    var video = document.getElementById('video-element');

    if (video.paused || video.ended) {
        video.play();
        document.getElementById('play-pause-button').classList.remove('fa-play-circle');
        document.getElementById('play-pause-button').classList.add('fa-pause-circle');
    } else {
        video.pause();
        document.getElementById('play-pause-button').classList.remove('fa-pause-circle');
        document.getElementById('play-pause-button').classList.add('fa-play-circle');
    }
}

pauseplay.addEventListener('click', togglePlayPause)
function startChat() {
    const loadingIcon = document.querySelector('.loading-icon');
    loadingIcon.style.display = 'block';
    userProfile.style.display = 'none';
    onlineUsers.style.opacity = '0';
    setTimeout(() => {
        loadingIcon.style.display = 'none';
        startChatText.innerText = 'Your partner from Turkey'
        startChatText.style.paddingTop = '2rem'
        nextBtn.classList.remove('d-none');
        nextBtn.classList.remove('disabled');
        users.classList.remove('d-none');
        stopBtn.classList.remove('disabled');
        onlineUsers.style.display = 'none'
    }, 2000);
    startChatText.innerText = 'Searching for partner...'
    stopBtn.classList.add('disabled');
    startNewChatBtn.style.display = 'none';
    nextBtn.classList.add('disabled');
    users.classList.add('d-none');
    nextBtn.classList.remove('d-none');
}

startNewChatBtn.addEventListener('click', startChat);

const startBtn1 = document.getElementById('new-Btn1')
const startBtn2 = document.getElementById('new-Btn2')
const startBtn3 = document.getElementById('new-Btn3')
const startBtn4 = document.getElementById('new-Btn4')
const stopBtn1 = document.getElementById('stop-Btn1');
const stopBtn2 = document.getElementById('stop-Btn2');

nextBtn.addEventListener('click', () => {
    startBtn1.classList.remove('d-none');
    nextBtn.classList.add('d-none');
});

startBtn1.addEventListener('click', () => {
    startBtn2.classList.remove('d-none');
    startBtn1.classList.add('d-none');
    stopBtn2.classList.remove('d-none');
    stopBtn.classList.add('d-none');
})

startBtn2.addEventListener('click', () => {
    startBtn3.classList.remove('d-none');
    startBtn2.classList.add('d-none');
})

startBtn3.addEventListener('click', () => {
    startBtn4.classList.remove('d-none')
    startBtn3.classList.add('d-none');
})

stopBtn.addEventListener('click', () => {
    stopBtn1.classList.remove('d-none');
    stopBtn.classList.add('d-none');
})

stopBtn1.addEventListener('click', () => {
    stopBtn1.classList.add('d-none');
    stopBtn2.classList.remove('d-none');
})

stopBtn2.addEventListener('click', () => {
    stopBtn2.classList.add('d-none');
    stopBtn.classList.remove('d-none');
})

microphoneBtn.addEventListener('click', () => {
    if (microphoneBtn.classList.contains("fa-microphone")) {
        microphoneBtn.classList.remove("fa-microphone");
        microphoneBtn.classList.add("fa-microphone-slash");
    } else {
        microphoneBtn.classList.remove("fa-microphone-slash");
        microphoneBtn.classList.add("fa-microphone");
    }
})

volumeBtn.addEventListener('click', () => {
    if (volumeBtn.classList.contains("fa-volume-down")) {
        volumeBtn.classList.remove("fa-volume-down");
        volumeBtn.classList.add("fa-volume-times");
    } else {
        volumeBtn.classList.remove("fa-volume-times");
        volumeBtn.classList.add("fa-volume-down");
    }
})

mediaBtn.addEventListener('click', () => {
    console.log('hi')
    mediaOptions.classList.toggle('d-none');

})


msgIcon.addEventListener('click', () => {
    textChat.classList.toggle('d-none');
})

const startLink = document.getElementById('start-link-btn');
const aboutLink = document.getElementById('about-link-btn');
const rulesLink = document.getElementById('rules-link-btn');
const contactLink = document.getElementById('contact-us-btn');

aboutLink.addEventListener('click', () => {
    const aboutLinkSection = document.getElementById('about-link-section');
    if (aboutLinkSection) {
        aboutLinkSection.scrollIntoView({ behavior: 'smooth' });
    }
})

startLink.addEventListener('click', () => {
    const startSection = document.getElementById('start-section');
    if (startSection) {
        startSection.scrollIntoView({ behavior: 'smooth' });
    }
})

freeChatLink.addEventListener('click', () => {
    const startSection = document.getElementById('start-section');
    if (startSection) {
        startSection.scrollIntoView({ behavior: 'smooth' });
    }
})

rulesLink.addEventListener('click', () => {
    const rulesSection = document.getElementById('rules-section');
    if (rulesSection) {
        rulesSection.scrollIntoView({ behavior: 'smooth' });
    }
})

contactLink.addEventListener('click', () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
})