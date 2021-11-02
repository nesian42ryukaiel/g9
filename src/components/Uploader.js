import React, {useState} from "react";

function Uploader() {
  const author = 'u/author';
  // fetch a function through reducer to add new article when clicked
  // tips from https://www.pluralsight.com/guides/uploading-files-with-reactjs
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  return (
    <div className='Uploader centralize corefunc'>
      <form>
        <div>
          <img id='ul--output' width='256' />
        </div>
        <div>
          <label htmlFor='file'>Choose image or video to upload</label><br />
          <input type="file" id="input-article-image input--file" className="image_inputType_file"
          accept=".gif, .jpeg, .jpg, .png, .mp4"
          onChange={(e) => {
            let image = document.getElementById('ul--output');
            image.src = URL.createObjectURL(e.target.files[0]);
          }} /><br />
          <input type='text' id='input-article-title' placeholder='Title (required)' /><br />
          <input type='text' id='input-article-text' placeholder='optional text' />
        </div>
        <div>
          <input type='submit' className='input-article-new input--button' value='Upload' />
        </div>
      </form>
    </div>
  );
}

export default Uploader;
