export default function Ex5() {
  return (
    <div className="size-50 bg-blue-300 border-blue-200 border-20 relative rounded-[6px]">
      <p className="m-4">Relative parent</p>
      <div className="absolute bottom-0 left-0 p-2 bg-blue-600 rounded-[10px] text-white">
        <p>Absolute child</p>
      </div>
    </div>
  );
}
