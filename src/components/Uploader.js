import React, {useState} from "react";
import Base64 from '../modules/Base64';
import serverLink from "../pseudoLinks/links";

function Uploader({id}) {
  // const author = 'u/author';
  // fetch a function through reducer to add new article when clicked
  // tips from https://www.pluralsight.com/guides/uploading-files-with-reactjs
  const [selectedFile, setSelectedFile] = useState(); // should contain info on currently picked file
  const [isFilePicked, setIsFilePicked] = useState(false); // should determine if a file has been picked or not
  const [articleTitle, setArticleTitle] = useState('');
  const [hasArticleTitle, setHasArticleTitle] = useState(false);
  const [articleText, setArticleText] = useState('');
  const [hasArticleText, setHasArticleText] = useState(false);
  const changeFileHandler = (e) => {
    const newFile = new File(e.target.files, e.target.files[0].name, {
      type: e.target.files[0].type
    });
    setSelectedFile(newFile);
    setIsFilePicked(true);
  };
  const changeTitleHandler = (e) => {
    setArticleTitle(e.target.value);
    if (e.target.value !== '') {
      setHasArticleTitle(true);
    } else {
      setHasArticleTitle(false);
    }
  }
  const changeTextHandler = (e) => {
    setArticleText(e.target.value);
    if (e.target.value !== '') {
      setHasArticleText(true);
    } else {
      setHasArticleText(false);
    }
  }
  const resetUploader = (e) => {
    if (isFilePicked) {
      document.getElementById('ul--output').src='';
      document.getElementById('input-article-file').value=null;
      setSelectedFile(null);
      setIsFilePicked(false);
      // console.log(selectedFile.name + isFilePicked);
    }
    if (hasArticleTitle) {
      document.getElementById('input-article-title').value='';
      setArticleTitle('');
      setHasArticleTitle(false);
      // console.log(articleTitle);
    }
    if (hasArticleText) {
      document.getElementById('input-article-text').value='';
      setArticleText('');
      setHasArticleText(false);
      // console.log(articleText);
    }
  }
  const handleSubmission = () => {
    // intended for testing via association with "https://freeimage.host/":
    const formData = new FormData();
    if (!isFilePicked || !hasArticleTitle) {
      let uploadError = "";
      if (!isFilePicked) uploadError += 'No file(s) at all!\n';
      if (!hasArticleTitle) uploadError += 'No proper title!\n';
      alert(uploadError); return;
    }
    const newFileName = id+'-'+Base64.encode(selectedFile.name);
    formData.append('articleFile', selectedFile, newFileName); // do I post a base64 string here instead...?
    formData.append('articleTitle', articleTitle);
    formData.append('articleText', articleText);
    console.log('Preparing upload...\n\n' + newFileName + '\n' + articleTitle + '\n' + articleText);
    fetch(
      serverLink,
      {
        method: 'POST',
        body: formData,
      }
    )
      .then((response) => response.json())
      .then((result) => {
        console.log('Success:', result);
        // post received URI as new article;
        // as such, add the received dispatch function HERE!
        resetUploader();
      })
      .catch((error) => {
        console.error('Error:', error);
        resetUploader();
      });
  };
  return (
    <div className='Uploader centralize corefunc'>
      <form className='uploader__form'>
        <div>
          <img id='ul--output' width='256' alt='preview frame' src='' />
        </div>
        <div>
          <input type="file" id="input-article-file"
          className="image_inputType_file"
          accept=".gif, .jpeg, .jpg, .png, .mp4"
          onChange={(e) => {
            let image = document.getElementById('ul--output');
            image.src = URL.createObjectURL(e.target.files[0]);
            changeFileHandler(e);
          }} /><br />
          {/* <label htmlFor='file'>Choose image or video to upload</label><br /> */}
          {isFilePicked ? (
            <div>
              <p>Filename: {selectedFile.name}</p>
              <p>Filetype: {selectedFile.type}</p>
              <p>Size in bytes: {selectedFile.size}</p>
              <p>
                lastModifiedDate:{' '}
                {selectedFile.lastModifiedDate.toLocaleDateString()}
              </p>
            </div>
          ) : (
            <p>Choose image or video to upload</p>
          ) }
          <input type='text' id='input-article-title'
          placeholder='Title (required)'
          onChange={(e) => {changeTitleHandler(e)}} /><br />
          <input type='text' id='input-article-text'
          placeholder='optional text'
          onChange={(e) => {changeTextHandler(e)}} />
        </div>
        <div>
          <button type="reset" onClick={(e) => {
            resetUploader(e)
          }}>Reset form</button>
          <input type='button' className='input-article-new input--button'
          value='Upload' onClick={handleSubmission} />
        </div>
      </form>
    </div>
  );
}

export default Uploader;
