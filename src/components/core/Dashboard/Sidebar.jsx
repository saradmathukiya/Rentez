import React, { useState } from 'react'
import { TbLogout } from "react-icons/tb";
import { logout } from "../../../services/operations/authAPI"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import SidebarLink from './SidebarLink'
import { sidebarLinks } from "../../../data/dashboard-links"
import ConfirmationModal from '../../common/ConfirmationModal'

const Sidebar = () => {

    const { user, loading: profileLoading } = useSelector(
        (state) => state.profile
    )
    const { loading: authLoading } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [confirmationModal, setConfirmationModal] = useState(null)

    if (profileLoading || authLoading) {
        return (
            <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
            <div className="loader">
                  <div className="circle"></div>
                  <div className="circle"></div>
                  <div className="circle"></div>
                  <div className="shadow"></div>
                  <div className="shadow"></div>
                  <div className="shadow"></div>
              </div>
          </div>
        )
      }

  return (
    <>
    <div className='sidebar'>
       <div className="sidebar-top">
        <div className="sidebar-top-under">
            {sidebarLinks.map((link) => {
                if (link.type && user?.accountType !== link.type) return null
                return (
                <SidebarLink key={link.id} link={link} iconName={link.icon} />
                )
            })}
        </div>
       </div>
        
        <div className="partition" />
        
        <div className="sidebar-bottom">
            <button
                onClick={() =>
                setConfirmationModal({
                    text1: "Are you sure?",
                    text2: "You will be logged out of your account.",
                    btn1Text: "Logout",
                    btn2Text: "Cancel",
                    btn1Handler: () => dispatch(logout(navigate)),
                    btn2Handler: () => setConfirmationModal(null),
                })
                }
            >
                <div className="logout-sidebar">
                    <TbLogout className="logout-icon-sidebar" />
                    <span>Logout</span>
                </div>
            </button>
        </div>
    </div>

    {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
</>
  )
}

export default Sidebar