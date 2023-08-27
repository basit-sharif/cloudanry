"use client"
import { CldUploadButton } from 'next-cloudinary';
import { CldImage } from 'next-cloudinary';
import { useState } from 'react';


export default function Home() {
  const [imageId, setImageId] = useState("ubkwun8c1lxgnznucwtv");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CldUploadButton
        onUpload={(result: any): any => {
          setImageId(result.info.public_id)
        }}
        uploadPreset="yz0blvtm"
      />
      {!!imageId && (
        <CldImage
          width="400"
          height="300"
          src={imageId}
          sizes="100vw"
          alt="Description of my image"
        />
      )}
    </main>
  )
}
