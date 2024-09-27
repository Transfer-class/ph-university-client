import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div>
      <h1>This is Navbar</h1>
      <h1> This is admin layout </h1>
      <Outlet />
    </div>
  );
};

export default AdminLayout;
