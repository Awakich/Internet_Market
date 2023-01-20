const TableItem = ({ name, email, role }) => {
  return (
    <div className="bg-white p-5 text-black flex items-center justify-between font-semibold text-4xl rounded-xl">
      <p>{name}</p>
      <p>{email}</p>
      <p>{role}</p>
    </div>
  );
};

export default TableItem;
