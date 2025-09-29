import React, { useState } from "react";
import axios from "axios";

interface UploadedImage {
  original: string;
  thumbnail: string;
}

const UploadThumbnailImage: React.FC = () => {
  const [image, setImage] = useState<UploadedImage | null>(null);
  const [loading, setLoading] = useState(false);
  const [showOriginal, setShowOriginal] = useState(false);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    const file = e.target.files[0];

    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "my_preset"); // thay bằng preset của bạn

    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dtv22zbpt/image/upload",
        formData
      );

      const originalUrl = res.data.secure_url;

      // Tạo thumbnail từ secure_url
      // Cloudinary public_id có trong res.data.public_id
      const publicId = res.data.public_id;
      const cloudName = "dtv22zbpt";

      const thumbnailUrl = `https://res.cloudinary.com/${cloudName}/image/upload/w_150,h_150,c_fill/${publicId}.jpg`;

      setImage({
        original: originalUrl,
        thumbnail: thumbnailUrl,
      });
    } catch (err) {
      console.error("Upload thất bại:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Bài 5</h2>
      <input type="file" accept="image/*" onChange={handleUpload} />
      {loading && <p>Đang upload...</p>}

      {image && (
        <div style={{ marginTop: 20 }}>
          <h3>Kết quả:</h3>

          {!showOriginal ? (
            <img
              src={image.thumbnail}
              alt="Thumbnail"
              style={{ cursor: "pointer", border: "1px solid #ccc" }}
              onClick={() => setShowOriginal(true)}
            />
          ) : (
            <img
              src={image.original}
              alt="Original"
              style={{ maxWidth: "400px", display: "block" }}
              onClick={() => setShowOriginal(false)}
            />
          )}
          <p>(Click vào ảnh để chuyển đổi)</p>
        </div>
      )}
    </div>
  );
};

export default UploadThumbnailImage;
