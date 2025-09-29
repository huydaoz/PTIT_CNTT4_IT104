import UploadImage from "./components/PTIT_CNTT4_IT104_Session39_EXERCISE01/UploadImage";
import UploadCropImage from "./components/PTIT_CNTT4_IT104_Session39_EXERCISE03/UploadCropImage";
import UploadCompressedImage from "./components/PTIT_CNTT4_IT104_Session39_EXERCISE04/UploadCompressedImage";
import UploadThumbnailImage from "./components/PTIT_CNTT4_IT104_Session39_EXERCISE05/UploadThumbnailImage";

function App() {
  return (
    <div>
      {/* Bài 1 */}
      <UploadImage />
      {/* Bài 3 */}
      <UploadCropImage />
      {/* Bài 4 */}
      <UploadCompressedImage />
      {/* Bài 5 */}
      <UploadThumbnailImage />
    </div>
  );
}

export default App;
