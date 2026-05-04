// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const textToSpeak = document.querySelector('#text-to-speak');
  const voiceSelect = document.querySelector('#voice-select');
  const talkButton = document.querySelector('#explore button');
  const faceImage = document.querySelector('#explore > img');
  const normalFace = 'assets/images/smiling.png';
  const speakingFace = 'assets/images/smiling-open.png';

  if (!('speechSynthesis' in window)) {
    return;
  }

  function populateVoices() {
    const voices = window.speechSynthesis.getVoices();

    voiceSelect.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';

    voices.forEach((voice, index) => {
      const option = document.createElement('option');
      option.value = String(index);
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.append(option);
    });
  }

  populateVoices();
  window.speechSynthesis.onvoiceschanged = populateVoices;

  talkButton.addEventListener('click', () => {
    const text = textToSpeak.value.trim();

    if (!text) {
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();
    const selectedVoice = voices[Number(voiceSelect.value)];

    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }

    function resetFace() {
      faceImage.src = normalFace;
      faceImage.alt = 'Smiling face';
    }

    utterance.onend = resetFace;
    utterance.onerror = resetFace;

    window.speechSynthesis.cancel();
    faceImage.src = speakingFace;
    faceImage.alt = 'Speaking face';
    window.speechSynthesis.speak(utterance);
  });
}
