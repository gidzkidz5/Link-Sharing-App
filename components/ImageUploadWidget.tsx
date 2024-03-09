"use client";

import { CldUploadWidget } from "next-cloudinary";
import { useEffect, useState } from "react";

interface ImageUploadProps {
  disabled?: boolean;
  onChange: (value: String) => void;
  onRemove: (value: String) => void;
  value: String[];
}

const ImageUploadWidget: React.FC<ImageUploadProps> = ({
  disabled,
  onChange,
  onRemove,
  value,
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const onUpload = (result: any) => {
    onChange(result.info.secure_url);
    setImageUrl(result.info.secure_url);
  };

  if (!isMounted) {
    return null;
  }
  return (
    <CldUploadWidget uploadPreset="x3l8c2jd" onUpload={onUpload}>
      {({ open }) => {
        return (
          <button
            onClick={(e) => {
              e.preventDefault();
              open();
            }}
          >
            <div className="w-full max-w-4xl items-center justify-center relative">
              {/* <div className="w-full h-full absolute top-0 bg-black -z-10"></div> */}
              <div
                className={imageUrl ? `bg-secondary rounded-xl w-48 max-w-48 aspect-square flex flex-col justify-center items-center gap-4 hover:bg-blend-overlay hover:bg-popover z-10`: `bg-secondary rounded-xl w-48 max-w-48 aspect-square flex flex-col justify-center items-center gap-4 hover:bg-primary-foreground hover:bg-blend-multiply z-10`}
                style={
                  imageUrl && {
                    backgroundImage: `url(${imageUrl})`,
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    zIndex: "-1",
                  }
                }
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {imageUrl && isHovered ? (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="none"
                      viewBox="0 0 40 40"
                      className="opacity-100"
                    >
                      <path
                        fill="#FFFFFF"
                        d="M33.75 6.25H6.25a2.5 2.5 0 0 0-2.5 2.5v22.5a2.5 2.5 0 0 0 2.5 2.5h27.5a2.5 2.5 0 0 0 2.5-2.5V8.75a2.5 2.5 0 0 0-2.5-2.5Zm0 2.5v16.055l-4.073-4.072a2.5 2.5 0 0 0-3.536 0l-3.125 3.125-6.875-6.875a2.5 2.5 0 0 0-3.535 0L6.25 23.339V8.75h27.5ZM6.25 26.875l8.125-8.125 12.5 12.5H6.25v-4.375Zm27.5 4.375h-3.34l-5.624-5.625L27.91 22.5l5.839 5.84v2.91ZM22.5 15.625a1.875 1.875 0 1 1 3.75 0 1.875 1.875 0 0 1-3.75 0Z"
                      />
                    </svg>
                    <div className="text-white fs-bold-S">+ Upload Image</div>
                  </>
                ) : !imageUrl ? (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="none"
                      viewBox="0 0 40 40"
                    >
                      <path
                        fill="#633CFF"
                        d="M33.75 6.25H6.25a2.5 2.5 0 0 0-2.5 2.5v22.5a2.5 2.5 0 0 0 2.5 2.5h27.5a2.5 2.5 0 0 0 2.5-2.5V8.75a2.5 2.5 0 0 0-2.5-2.5Zm0 2.5v16.055l-4.073-4.072a2.5 2.5 0 0 0-3.536 0l-3.125 3.125-6.875-6.875a2.5 2.5 0 0 0-3.535 0L6.25 23.339V8.75h27.5ZM6.25 26.875l8.125-8.125 12.5 12.5H6.25v-4.375Zm27.5 4.375h-3.34l-5.624-5.625L27.91 22.5l5.839 5.84v2.91ZM22.5 15.625a1.875 1.875 0 1 1 3.75 0 1.875 1.875 0 0 1-3.75 0Z"
                      />
                    </svg>
                    <div className="text-primary fs-bold-S">+ Upload Image</div>
                  </>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="none"
                    viewBox="0 0 40 40"
                  ></svg>
                )}
              </div>
            </div>
          </button>
        );
      }}
    </CldUploadWidget>
  );
};

export default ImageUploadWidget;
