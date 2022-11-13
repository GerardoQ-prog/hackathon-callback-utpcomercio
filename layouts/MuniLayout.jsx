/// types = light, red
/// size = sm, lg

import Link from "next/link"

import HomeIcon from '@mui/icons-material/Home';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useRouter } from "next/router";

const routes = [
  {
    text: 'Inicio',
    icon: <HomeIcon style={{ width: '20px', height: '20px' }} />,
    path: '/municipalidad'
  },
  {
    text: 'Mapa de Obras y Reportes',
    icon: <AddLocationAltIcon style={{ width: '20px', height: '20px' }} />,
    path: '/municipalidad/mapa'
  },
  {
    text: 'Mis Estadísticas',
    icon: <QueryStatsIcon style={{ width: '20px', height: '20px' }} />,
    path: '/municipalidad/estadisticas'
  },
  {
    text: 'Mi Perfil',
    icon: <AccountCircleIcon style={{ width: '20px', height: '20px' }} />,
    path: '/municipalidad/perfil'
  },
]

const MuniNav = ({ list = [] }) => {

  const router = useRouter();

  return (
    <div className="muni__navigation">
      {
        list.map((menu, i) => (
            <Link key={`muni_n_${i}`} href={menu.path}>
              <a key={`muni_l_${i}`} className={ router.pathname == menu.path ?  'muni__navigation_link active' : 'muni__navigation_link' }>
                <span className="navigation__icon">
                  { menu.icon }
                </span>
                <span className="navigation__text">
                  {menu.text}
                </span>
              </a>
            </Link>
        ))
      }
    </div>
  )
}

const MuniLayout = ({ type = "red", size = "sm", header, children }) => {
  return (
    <div className={`muni__layout ${type} ${size}`}>
      <div className="header">
        { header }
      </div>
      <div className="content">
        { children }
      </div>
      <div className="navigation">
        <MuniNav list={routes} />
      </div>
    </div>
  )
}


export default MuniLayout