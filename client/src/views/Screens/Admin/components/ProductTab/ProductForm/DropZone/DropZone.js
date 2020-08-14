import React from 'react';

import Dropzone from 'react-dropzone';
import { BsCloudUpload } from 'react-icons/bs';

import classes from './DropZone.module.css'

const DropZone = (props) => {
    return <Dropzone onDrop={props.uploadImage} multiple={false} maxSize={80000000} style={{}}   >
        {({ getRootProps, getInputProps }) => (
            <div  {...getRootProps({ className: [classes.DropZone, 'vertical-layout'].join(' ') })}     >
                <input {...getInputProps()} />
                <i><BsCloudUpload size="50" color="#3aa4df" /></i>
                <h5>Drag 'n' drop or</h5>
                <button>Browse</button>
                <p >.png .jpg</p>
            </div>
        )}
    </Dropzone>
}

export default DropZone;