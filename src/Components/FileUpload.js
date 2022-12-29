import React, { useState } from 'react'
// Import the main component
import { Viewer } from '@react-pdf-viewer/core'; // install this library
// Plugins
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// Worker
import { Worker } from '@react-pdf-viewer/core'; // install this library

export const FileUpload = ({ files }) => {



    // for onchange event
    const [pdfFile, setPdfFile] = useState(null);
    const [pdfFileError, setPdfFileError] = useState('');

    // for submit event
    const [viewPdf, setViewPdf] = useState(null);

    // onchange event
    const fileType = ['application/pdf'];
    files = pdfFile;
    const handlePdfFileChange = (e) => {
        let selectedFile = e.target.files[0];
        if (selectedFile) {
            if (selectedFile && fileType.includes(selectedFile.type)) {
                let reader = new FileReader();
                reader.readAsDataURL(selectedFile);
                reader.onloadend = (e) => {
                    setPdfFile(e.target.result);
                    setPdfFileError('');
                }
            }
            else {
                setPdfFile(null);
                setPdfFileError('Please select valid pdf file');
            }
        }
        else {
            console.log('select your file');
        }
    }

    // form submit
    const handlePdfFileSubmit = (e) => {
        e.preventDefault();
        if (pdfFile !== null) {
            setViewPdf(pdfFile);
        }
        else {
            setViewPdf(null);
        }
    }

    return (
        <div className='container'>

            <br></br>

            <form className='form-group' onSubmit={handlePdfFileSubmit}>
                <input type="file" className='form-control'
                    required onChange={handlePdfFileChange}
                />
                {pdfFileError && <div className='error-msg'>{pdfFileError}</div>}
                <br></br>
                <button type="submit" className='btn btn-success btn-lg'>
                    UPLOAD
                </button>
            </form>
            <br></br>
            <h4>View PDF</h4>
            <div className='pdf-container'>
                {/* show pdf conditionally (if we have one)  */}
                {viewPdf && <><Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
                    <Viewer fileUrl={viewPdf}
                    />
                </Worker></>}

                {/* if we dont have pdf or viewPdf state is null */}
                {!viewPdf && <>No pdf file selected</>}
            </div>

        </div>
    )
}

export default FileUpload