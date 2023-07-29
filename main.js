import fileChangeCallback from './utils/fileChangeCallback';
import renderFilesAndFolder from './utils/renderFilesAndFolder';
import defaultFileAndFolderData from './defaultFileAndFolderData.json';
const fileInput = document.querySelector('input');

fileInput.addEventListener('change', fileChangeCallback);
fileInput.addEventListener('click', e => {
  e.target.value = '';
});

//render default structure
renderFilesAndFolder(defaultFileAndFolderData, document.querySelector('.main'));
