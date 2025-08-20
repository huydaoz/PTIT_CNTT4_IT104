function Calculation() {
  const cong = (a: number, b: number) => a + b;
  const tru = (a: number, b: number) => a - b;
  const nhan = (a: number, b: number) => a * b;
  const chia = (a: number, b: number) => a / b;

  return (
    <>
      <h2>Danh sách kết quả</h2>
      <ul>
        <li>10 + 10 = {cong(10, 10)}</li>
        <li>10 - 10 = {tru(10, 10)}</li>
        <li>10 * 10 = {nhan(10, 10)}</li>
        <li>10 / 10 = {chia(10, 10)}</li>
      </ul>
    </>
  );
}

export default Calculation;
