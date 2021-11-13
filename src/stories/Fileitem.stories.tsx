import React from "react";
import FileItemContainer from "../components/file-item/components/FileItemContainer/FileItemContainer";
import InputButton from "../components/input-button/InputButton"
import FileItem from "../components/file-item/components/FileItem/FileItem";

function App(){
  let [images, setImages] = React.useState([]);
  function addImages(files){
    console.log(files);
    setImages(files);
  }
    return(
        <div>
          <InputButton onChange={(files) => addImages(files)}
          />
          <FileItemContainer
            style={{
              height: 'auto',
              maxWidth: '250px',
              backgroundColor:'#ccc',
              border: 'solid',
              padding: '0px',
              margin: '0px',
              cursor: 'pointer'
            }}
            onClick={() => console.log('hello')}
          >
            {images.map((file) => (
              <FileItem 
                style={{
                  bg:{
                    border: 'solid red 1px'
                  }
                }}
              {...file} 
              preview 
              hd
              onClick={() => console.log(file)}>
              </FileItem>
            ))}
          </FileItemContainer>
        </div>
    );
}

const Template = (args) => <App />;

export const Primary = Template.bind({});
Primary.args = {
  localization: "EN_en",
};
export default {
  title: "FileItem",
  component: Template,
};