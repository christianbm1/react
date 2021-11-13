import React from "react";
import FileItemContainer from "../components/file-item/components/FileItemContainer/FileItemContainer";
import InputButton from "../components/input-button/InputButton"
import FileItem from "../components/file-item/components/FileItem/FileItem";

//${sold.includes(parseInt(file.file.name.split('.')[0])) ? 'green' : 'red'}

let sold = [
  1 , 5, 345, 374, 89 , 322
]

function App(){
  let [images, setImages] = React.useState([]);
  let [selectedImage, setSelectedImage] = React.useState<number>();
  function onDelete(id) {
    setImages(images.filter((x) => x.id !== id));
  };
  async function addImages(files) {
    //console.log(files[0].file.name.split(".")[0])
    let x = await files.sort((a:any, b:any) => parseInt(a.file.name.split(".")[0]) - parseInt(b.file.name.split(".")[0]));
    setImages(x);
  }
    return(
        <div>
          <InputButton multiple onChange={(files) => addImages(files)}
          />
          <FileItemContainer
            view="grid"
            style={{
              height: 'auto',
              maxWidth: '100%',
              backgroundColor:'white',
              margin: '0px',
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}
          >
            {images.map((file) => (
              <div style={{
                margin: '1px',
                border: `${selectedImage == parseInt(file.file.name.split('.')[0]) ? 'solid 5px #3BC14A' : 'solid 5px transparent'}`,
                borderRadius: '10px'
              }}>
                <FileItem 
                  {...file} 
                  key={file.id}
                  allStyle={{
                    "fileItemContainerBackground":{
                      width: '100px',
                      padding: '3px',
                    },
                    "fileItemContainer": {
                      backgroundColor: 'white',
                      boxShadow: `3px 3px 5px 1px rgb(136, 135, 135)`,
                      border: 'solid 0.5px',
                      borderRadius: '10px'
                    },
                    "fileItemBackground": {
                      width: 'auto',
                      borderBottom: 'solid 1px',
                    },
                    "fileItemImageContainer": {
                      //border: 'solid 3px yellow',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: '5px',
                    },
                    "fileItemImage": {
                      margin: '0',
                      padding: '0',
                      //border: 'solid 2px white',
                      width: '100%',
                    },
                    "fileItemTitle": {

                    },
                    "fileItemTitleButtonContainer": {

                    },
                    "fileItemTitleButton":{

                    }
                  }}
                  
                  preview 
                  hd
                  onClick={() => setSelectedImage(parseInt(file.file.name.split('.')[0])) }
                  onDelete={onDelete}
                  >
                </FileItem>
              </div>
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