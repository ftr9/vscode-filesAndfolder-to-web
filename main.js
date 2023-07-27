import fileChangeCallback from './utils/fileChangeCallback';
const fileInput = document.querySelector('input');

fileInput.addEventListener('change', fileChangeCallback);
