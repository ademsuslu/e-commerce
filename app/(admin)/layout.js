import AdminNavbar from '../components/AdminNavbar/AdminNavbar'
import AdminNav from '../components/AdminNav/AdminNav'
export default function AdminLayout({ children }) {
  return (
    <div
      style={{ minHeight: '100vh' }}
      className="d-flex flex-row  h-100 text-white  container-fluid  p-0  "
    >
      <div className="col-lg-2 bg-secondary col-md-1  col-1 p-2     ">
        <AdminNavbar />
        <div className="d-none d-lg-block">
          <AdminNav />
        </div>
      </div>
      <div className="w-100 p-3 mt-1">{children}</div>
    </div>
  )
}
