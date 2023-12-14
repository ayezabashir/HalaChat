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
});

stopBtn.addEventListener('click', () => {
    const newStopButtonsContainer = document.querySelector('.new-stop-buttons');
    newStopButtonsContainer.style.display = newStopButtonsContainer.style.display === 'none' ? 'block' : 'none';
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