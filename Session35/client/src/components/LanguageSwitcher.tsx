import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../store/slice/languageSlice";

export default function LanguageSwitcher() {
  const dispatch = useDispatch();
  const lang = useSelector((state: any) => state.language.lang);

  const handleChange = (newLang: string) => {
    dispatch(setLanguage(newLang));
  };

  return (
    <div style={{ padding: "20px" }}>
      <select
        value={lang}
        onChange={(e) => handleChange(e.target.value)}
        style={{ padding: "6px", fontSize: "14px" }}
      >
        <option value="vi">Vietnamese</option>
        <option value="en">English</option>
      </select>

      <h2 style={{ marginTop: "20px" }}>
        {lang === "vi" ? "Học viện Rikkei" : "Rikkei Academy"}
      </h2>
    </div>
  );
}
