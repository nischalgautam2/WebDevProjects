const emojiSelectorIcon = document.getElementById('emojiSelectorIcon');
const emojiSelector = document.getElementById('emojiSelector');

emojiSelectorIcon.addEventListener('click', () => {
    emojiSelector.classList.toggle('active');
});

fetch('https://emoji-api.com/emojis?access_key=YOUR_API_KEY')
   .then(res => res.json())
   .then(data => loadEmoji(data))

function loadEmoji(data) {
   data.forEach(emoji => {
       let li = document.createElement('li');
       li.textContent = emoji.character;
       emojiList.appendChild(li);
   });
}
