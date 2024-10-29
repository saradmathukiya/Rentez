import * as Icons from "react-icons/vsc"
// import { useDispatch } from "react-redux"
import { NavLink, matchPath, useLocation } from "react-router-dom"

export default function SidebarLink({ link, iconName }) {

  const Icon = Icons[iconName]
  const location = useLocation()
  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname)
  }

  return (
    <NavLink 
      to={link.path}
      className={`sidebar-link ${matchRoute(link.path) ? 'active' : ''}`}
    >
      <div className="sidebar-link-inside">
        {/* Icon Goes Here */}
        <Icon className="sidebar-link-icon" />
        <span style={{fontSize:'16px'}}>{link.name}</span>
      </div>

    </NavLink>
  )
}