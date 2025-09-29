import React, { useState } from "react";
import axios from "axios";
import Resizer from "react-image-file-resizer";

const UploadCompressedImage: React.FC = () => {
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const resizeFile = (file: File): Promise<File> =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        800,
        800,
        "JPEG",
        80,
        0,
        (uri) => {
          resolve(uri as File);
        },
        "file"
      );
    });

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;

    const file = e.target.files[0];
    try {
      setLoading(true);

      const resizedImage = (await resizeFile(file)) as File;

      const formData = new FormData();
      formData.append("file", resizedImage);
      formData.append("upload_preset", "my_preset");

      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dtv22zbpt/image/upload",
        formData
      );

      setPreview(res.data.secure_url);
    } catch (err) {
      console.error("Upload thất bại:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Bài 4</h2>
      <input type="file" accept="image/*" onChange={handleUpload} />
      {loading && <p>Đang upload...</p>}

      {preview && (
        <div style={{ marginTop: 20 }}>
          <h3>Ảnh đã upload:</h3>
          <img src={preview} alt="Uploaded" width="300" />
        </div>
      )}
    </div>
  );
};

export default UploadCompressedImage;
