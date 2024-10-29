import ChangeProfilePicture from "./ChangeProfilePicture"
import DeleteAccount from "./DeleteAccount"
import EditProfile from "./EditProfile"
import UpdatePassword from "./UpdatePassword"

export default function Settings() {
  return (
    <div className="setting-container">
      <h1 className="my-profile-title">
        Edit Profile
      </h1>
      {/* Change Profile Picture */}
      <ChangeProfilePicture />
      {/* Profile */}
      <EditProfile />
      <div className="partition1" />
      {/* Password */}
      <UpdatePassword />
      <div className="partition1" />
      {/* Delete Account */}
      <DeleteAccount />
    </div>
  )
}