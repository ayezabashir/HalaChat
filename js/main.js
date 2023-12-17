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
const changeUserIcon = document.getElementById('change-user-icon');
const avtars = document.querySelector('.select-avatar');
const changerUserIconSm = document.getElementById('change-user-icon-sm');
const msgIcon = document.getElementById('msg-icon');
const textChat = document.getElementById('text-chat');
const freeChatLink = document.getElementById('free-chat-Btn');

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
    stopBtn.classList.add('disabled');
    startNewChatBtn.style.display = 'none';
    nextBtn.classList.add('disabled');
    users.classList.add('d-none');
    nextBtn.classList.remove('d-none');
}

startNewChatBtn.addEventListener('click', startChat);

nextBtn.addEventListener('click', () => {
    const newButtonsContainer = document.querySelector('.new-buttons');
    newButtonsContainer.style.display = newButtonsContainer.style.display === 'none' ? 'block' : 'none';
    var btn1 = document.getElementById("new-Btn1");
    var btn2 = document.getElementById("new-Btn2");
    var btn3 = document.getElementById("new-Btn3");
    var btn4 = document.getElementById("new-Btn4");

    btn1.querySelector("button").addEventListener("click", function () {
        btn2.style.display = "block";
        btn1.style.display = "none";
        btn3.style.display = "none";
        btn4.style.display = "none";
    });

    btn2.querySelector("button").addEventListener("click", function () {
        btn3.style.display = "block";
        btn1.style.display = "none";
        btn2.style.display = "none";
        btn4.style.display = "none";
    });

    btn3.querySelector("button").addEventListener("click", function () {
        btn4.style.display = "block";
        btn1.style.display = "none";
        btn2.style.display = "none";
        btn3.style.display = "none";
    });
});

stopBtn.addEventListener('click', () => {
    const newStopButtonsContainer = document.querySelector('.new-stop-buttons');
    newStopButtonsContainer.style.display = newStopButtonsContainer.style.display === 'none' ? 'block' : 'none';
    var btn1 = document.getElementById("stop-Btn1");
    var btn2 = document.getElementById("stop-Btn2");
    var btn3 = document.getElementById("stop-Btn3");

    btn1.querySelector("button").addEventListener("click", function () {
        btn2.style.display = "block";
        btn1.style.display = "none";
        btn3.style.display = "none";
    });

    btn2.querySelector("button").addEventListener("click", function () {
        btn3.style.display = "block";
        btn1.style.display = "none";
        btn2.style.display = "none";
    });
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

changeUserIcon.addEventListener('click', () => {
    avtars.classList.toggle('d-none')
    const selectAvatarDiv = document.getElementById('select-avatar');
    if (selectAvatarDiv) {
        selectAvatarDiv.scrollIntoView({ behavior: 'smooth' });
    }
})

changerUserIconSm.addEventListener('click', () => {
    avtars.classList.toggle('d-none');
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