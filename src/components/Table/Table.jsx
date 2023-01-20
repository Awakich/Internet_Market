import TableItem from "../Table/TableItem";

const Table = ({ users }) => {
  return (
    <div className="my-20 bg-black text-white p-12 rounded-3xl text-center">
      <h2 className="font-medium text-8xl mb-12">Users</h2>
      <div className="flex flex-col gap-12">
        {users.map(({ email, name, role, id }) => (
          <TableItem key={id} name={name} role={role} email={email} />
        ))}
      </div>
    </div>
  );
};

export default Table;
