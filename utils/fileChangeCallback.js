import isValidJsonFile from './isValidJsonFile';
import traverseAndAppendFilesAndFolder from './renderFilesAndFolder';

const fileChangeCallback = e => {
  console.log('file is selected bro');
  const selectedJsonFile = e.target.files[0];
  if (selectedJsonFile.type !== 'application/json') {
    alert('please select json file');
    return;
  }

  const fileReader = new FileReader();
  fileReader.readAsText(selectedJsonFile);
  fileReader.addEventListener('load', fileReaderLoadCallBack(fileReader));
};

const fileReaderLoadCallBack = fileReader => {
  return () => {
    const jsonFileData = JSON.parse(fileReader.result);
    if (!isValidJsonFile(jsonFileData)) {
      alert('please select generated json file ...');
    } else {
      document.querySelector('.main').innerHTML = '';
      traverseAndAppendFilesAndFolder(
        jsonFileData.files,
        document.querySelector('.main')
      );
    }
  };
};

export default fileChangeCallback;
