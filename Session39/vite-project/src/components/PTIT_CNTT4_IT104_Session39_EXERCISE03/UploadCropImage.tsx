import React, { useRef, useState } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import axios from "axios";

const UploadCropImage: React.FC = () => {
  const cropperRef = useRef<HTMLImageElement>(null);
  const [image, setImage] = useState<string>("");
  const [croppedUrl, setCroppedUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const cropAndUpload = async () => {
    if (!cropperRef.current) return;

    const cropper = (cropperRef.current as any).cropper;
    const canvas = cropper.getCroppedCanvas({
      width: 500,
      height: 500,
    });

    if (!canvas) return;

    setLoading(true);

    canvas.toBlob(async (blob: Blob | null) => {
      if (!blob) return;

      const formData = new FormData();
      formData.append("file", blob);
      formData.append("upload_preset", "my_preset");

      try {
        const res = await axios.post(
          "https://api.cloudinary.com/v1_1/dtv22zbpt/image/upload",
          formData
        );

        setCroppedUrl(res.data.secure_url);
      } catch (err) {
        console.error("Upload thất bại:", err);
      } finally {
        setLoading(false);
      }
    }, "image/jpeg");
  };

  return (
    <div style={{ padding: 20 }}>
      <h3>Bài 3</h3>
      <input type="file" accept="image/*" onChange={onSelectFile} />

      {image && (
        <div style={{ marginTop: 20 }}>
          <Cropper
            src={image}
            style={{ height: 400, width: "100%" }}
            aspectRatio={1}
            guides={true}
            ref={cropperRef}
            viewMode={1}
          />
          <button onClick={cropAndUpload} disabled={loading}>
            {loading ? "Đang upload..." : "Crop & Upload"}
          </button>
        </div>
      )}

      {croppedUrl && (
        <div style={{ marginTop: 20 }}>
          <h3>Kết quả:</h3>
          <img src={croppedUrl} alt="Cropped" width="200" />
        </div>
      )}
    </div>
  );
};

export default UploadCropImage;
