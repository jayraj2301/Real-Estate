import {useCallback , useState} from 'react';
import {useDropzone,FileWithPath} from 'react-dropzone';
import { Button } from '../ui/button';

type FileUploaderProps = {
    fieldChange: (files: File[]) => void;
  };

function FileUploader({fieldChange}: FileUploaderProps) {

  const [files, setFiles] = useState<File[]>([])
  const [fileUrl, setFileUrl] = useState<string>()

  const onDrop = useCallback((acceptedFiles: FileWithPath[])=>{
    setFiles(acceptedFiles)
    fieldChange(acceptedFiles)
    setFileUrl(URL.createObjectURL(acceptedFiles[0]))
  },[files])

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ".jpeg", ".jpg"],
    },
  });

  return (
    <div
     {...getRootProps()}
     className='flex justify-center items-center flex-col cursor-pointer rounded-xl bg-[#101012]'
    >
      <input {...getInputProps()} className='cursor-pointer' />
      {
        fileUrl ? (
          <>
            <div className='flex justify-center p-5 lg:p-10 flex-1 w-full'>
              <img src={fileUrl} alt='image' className='h-80 lg:h-[480px] w-full rounded-[24px] object-cover object-top' />
            </div>
            <p className='text-[#5C5C7B] text-center w-full p-4 border-t border-t-[#1F1F22]'>Click or drag photo to replace</p>
          </>
        ) : (
          <div className='flex justify-center items-center flex-col p-7 h-80 lg:h-[612px]'>
            <img
              src='/assets/file-upload.svg'
              alt='image'
              height={96}
              width={77}
            />
            <h2 className='text-lg'>Drag Photo here</h2>
            <p className="text-[#5C5C7B] ext-[14px] font-normal leading-[140%] mb-6">SVG, PNG, JPG</p>
            <Button type="button" className="h-12 bg-[#1F1F22] px-5 text-[#70708b] flex gap-2 !important">
              Select from computer
            </Button>
          </div>  
        )
      }
    </div>
  )
}

export default FileUploader