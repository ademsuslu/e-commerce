'use client'
import { CldUploadWidget } from 'next-cloudinary'
import Image from 'next/image'
import { useCallback } from 'react'
import { TbPhotoPlus } from 'react-icons/tb'

const ImageUpload = ({ onChange, value }) => {
  const handleUpload = useCallback(
    (result) => {
      onChange(result.info.secure_url)
    },
    [onChange]
  )

  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset="crrezjke"
      options={{
        maxFiles: 1,
      }}
    >
      {({ open }) => {
        return (
          <div
            className="relative cursor-pointer hover-opacity-70 transition border-dashed border-2 p-20 border-secondary flex flex-col justify-center items-center gap-4 text-secondary"
            onClick={() => open?.()}
          >
            <TbPhotoPlus size={50} />
            <div className="font-semibold text-lg">image</div>
            {value && (
              <div className="absolute inset-0 w-25">
                <Image
                  width={40}
                  height={40}
                  alt="Upload"
                  style={{ objectFit: 'cover' }}
                  src={value}
                />
              </div>
            )}
          </div>
        )
      }}
    </CldUploadWidget>
  )
}

export default ImageUpload
