import React from "react";

export default function Ex01() {
  const [name] = React.useState<string>("Nguyễn Văn A");
  return (
    <div>
      <p>Họ và tên: {name}</p>
    </div>
  );
}
