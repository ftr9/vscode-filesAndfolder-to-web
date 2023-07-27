const isValidJsonFile = jsonData => {
  if (Array.isArray(jsonData)) {
    return false;
  }
  if (jsonData?.name !== 'generatedFrom_VSCode_file&foder_tojson') {
    return false;
  }
  return true;
};

export default isValidJsonFile;
