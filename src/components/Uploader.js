import React, {useState} from "react";

function Uploader() {
  const author = 'u/author';
  // fetch a function through reducer to add new article when clicked
  // tips from https://www.pluralsight.com/guides/uploading-files-with-reactjs
  const [selectedFile, setSelectedFile] = useState(); // should contain info on currently picked file
  const [isFilePicked, setIsFilePicked] = useState(false); // should determine if a file has been picked or not
  const changeHandler = (e) => {
    setSelectedFile(e.target.files[0]);
    setIsFilePicked(true);
    console.log('Accessed changeHandler('+e.target.files[0].name+')!');
  };
  const handleSubmission = () => {
    console.log('Submitted!');
  };
  return (
    <div className='Uploader centralize corefunc'>
      <form>
        <div>
          <img id='ul--output' width='256' />
        </div>
        <div>
          <input type="file" id="input-article-image input--file"
          className="image_inputType_file"
          accept=".gif, .jpeg, .jpg, .png, .mp4"
          onChange={(e) => {
            let image = document.getElementById('ul--output');
            image.src = URL.createObjectURL(e.target.files[0]);
            changeHandler(e);
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
          placeholder='Title (required)' /><br />
          <input type='text' id='input-article-text'
          placeholder='optional text' />
        </div>
        <div>
          <input type='button' className='input-article-new input--button'
          value='Upload' onClick={handleSubmission} />
        </div>
      </form>
    </div>
  );
}

export default Uploader;
