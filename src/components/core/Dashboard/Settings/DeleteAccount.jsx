import { FiTrash2 } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteProfile } from "../../../../services/operations/SettingsAPI";
import ConfirmationModal from '../../../common/ConfirmationModal';
import { useState } from "react";

export default function DeleteAccount() {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [confirmationModal, setConfirmationModal] = useState(null);

  return (
    <>
      <div className="delete-account-container">
        <div className="delete-account-icon">
          <FiTrash2 className="trash-icon" />
        </div>
        <div className="delete-account-content">
          <h2 className="delete-account-title">Delete Account</h2>
          <div className="delete-account-description">
            <p style={{fontWeight:'500', color:'red'}}>Would you like to delete account?</p>
            <p>
              This account may contain active Rents. Deleting your account is
              permanent and will remove all the contain associated with it.
            </p>
          </div>

          <button
            type="button"
            className="delete-account-button"
            onClick={() => setConfirmationModal({
              text1: "Are you sure?",
              text2: "After this your account will be deleted.",
              btn1Text: "Delete",
              btn2Text: "Cancel",
              btn1Handler: () => dispatch(deleteProfile(token, navigate)),
              btn2Handler: () => setConfirmationModal(null),
            }    
          )}
          >
            Delete My Account
          </button>
        </div>
      </div>
      {
        confirmationModal && <ConfirmationModal modalData={confirmationModal} />
      }
    </>
  );
}
