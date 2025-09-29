import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

interface FormData {
  description: string;
  image: FileList;
}

const UploadImage: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [uploadedData, setUploadedData] = useState<{
    url: string;
    desc: string;
  } | null>(null);

  const onSubmit = async (data: FormData) => {
    if (!data.image || data.image.length === 0) {
      alert("Vui lòng chọn một ảnh!");
      return;
    }

    const formData = new FormData();
    formData.append("file", data.image[0]);
    formData.append("upload_preset", "my_preset");

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/dtv22zbpt/image/upload`,
        formData
      );

      setUploadedData({
        url: response.data.secure_url,
        desc: data.description,
      });

      reset();
    } catch (error) {
      console.error("Upload thất bại:", error);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px" }}>
      <h3>Bài 1</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Mô tả:</label>
          <input type="text" {...register("description", { required: true })} />
        </div>
        <div>
          <label>Chọn ảnh:</label>
          <input
            type="file"
            accept="image/*"
            {...register("image", { required: true })}
          />
        </div>
        <button type="submit">Upload</button>
      </form>

      {uploadedData && (
        <div style={{ marginTop: "20px" }}>
          <h3>Kết quả:</h3>
          <img src={uploadedData.url} alt="uploaded" width="200" />
          <p>{uploadedData.desc}</p>
        </div>
      )}
    </div>
  );
};

export default UploadImage;
