import { Avatar } from "@mui/material"
import Logo from "../components/logo/Logo"
import useAuth from "../hooks/useAuth"
import Link from "next/link"
import { useRouter } from "next/router"

const AdminLayout = ({ children }) => {
  const { user } = useAuth()
  const router = useRouter();

  return (
    <div className="admin__layout">
      <div className="sidebar">
        <div className="avatar__container">
          <Avatar src={user?.avatar} sx={{ width: 56, height: 56 }} />
          <div className="user__name">
            { user?.name || 'John doe' }
          </div>
        </div>
        <div className="sidebar__links">
          <Link href={"/admin/perfil"}>
            <a className={router.pathname == "/admin/perfil" ? "sidebar__link active" : "sidebar__link"}>
              Peticiones
            </a>
          </Link>
        </div>
      </div>
      <div className="wrapper__content">
        <div className="appbar">
          <Logo></Logo>
        </div>
        <div className="container">
          <div className="card__content">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminLayout