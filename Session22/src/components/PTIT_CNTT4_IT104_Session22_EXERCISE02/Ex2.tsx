import { Input } from "antd";
// const { TextArea } = Input;

export default function Ex2() {
  return (
    <div className="flex flex-col gap-[20px] m-20">
      <Input placeholder="input cỡ lớn" className="w-50 h-15" />
      <Input placeholder="input cỡ trung bình" className="w-50 h-10" />
      <Input placeholder="input cỡ bé" className="w-50 " />
    </div>
  );
}
