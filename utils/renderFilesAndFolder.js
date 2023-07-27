function traverseAndAppendFilesAndFolder(files, domElement) {
  for (let i = 0; i < files.length; i++) {
    if (files[i]?.children) {
      domElement.insertAdjacentHTML(
        'beforeend',
        `
            <p contenteditable="true" class="hasFolder">${files[i].name}</p>
            `
      );
      const folderElement = document.createElement('div');
      folderElement.classList.add('folder');
      domElement.appendChild(folderElement);
      traverseAndAppendFilesAndFolder(files[i].children, folderElement);
    } else {
      domElement.insertAdjacentHTML(
        'beforeend',
        `
            <p contenteditable="true" class="hasFile">${files[i].name}</p>
            `
      );
    }
  }
}

export default traverseAndAppendFilesAndFolder;
