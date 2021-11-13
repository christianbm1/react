import React, { FC, Fragment } from "react";
export interface FileItemImageProps {
  /**
   * The image source
   */
  imageSource: string | undefined;
  /**
   * the url file icon
   */
  url: string;
  /**
   * The name to be used as alt
   */
  fileName:string;
  fileItemImageContainer?:object;
  fileItemImage?:object;
  onClick?: Function;
}

const FileItemImage: FC<FileItemImageProps> = (props: FileItemImageProps) => {
  const { imageSource, url ,fileName, fileItemImageContainer, fileItemImage} = props;
  return (
    <Fragment>
      {/*imageSource && (
        <div className="img-container blur">
          <img src={imageSource} alt={`blur ${fileName}`} />
        </div>
      )*/}
      <div style={fileItemImageContainer}>
        <img src={imageSource || url} alt={`preview ${fileName}`} style={fileItemImage} onClick={(e) => props.onClick(e)}/>
      </div>
    </Fragment>
  );
};
export default FileItemImage;
