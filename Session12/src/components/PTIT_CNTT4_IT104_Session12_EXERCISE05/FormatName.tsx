interface User {
  firstName: string;
  lastName: string;
}

function formatName(user: User): string {
  return `${user.firstName} ${user.lastName}`;
}

function FormatName() {
  const user: User = {
    firstName: "Nguyễn Văn",
    lastName: "Nam",
  };

  return (
    <div>
      <h2>Họ và tên: {formatName(user)}</h2>
    </div>
  );
}
export default FormatName;
