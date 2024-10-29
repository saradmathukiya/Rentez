import React, { useEffect, useState } from 'react'
import { FaBath } from "react-icons/fa";
import { IoBedSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { deleteProperty } from '../../services/operations/propertyAPI';
import ConfirmationModal from './ConfirmationModal';
import { RxSize } from "react-icons/rx";
import { BsHouseAdd } from "react-icons/bs";
import { getPropertyDetail } from '../../services/operations/propertyAPI';
import { setLoading } from '../../slices/profileSlice';
import { FaLocationDot } from "react-icons/fa6";

const Card = ({className,img, city, state, bhk, size, bath, price, pricePer, type, propertyId, isSeller=false}) => {
  const {token} = useSelector((state) => state.auth);
  const [confirmationModal, setConfirmationModal] = useState(null);
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [properties, setProperties] = useState([null]);
  useEffect(() => {
    const getProperty = async () => {
      setLoading(true);
      const result = await getPropertyDetail(propertyId);
      // console.log(result);
      if (result) {
        setProperties(result);
      }
    };
    getProperty();
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [propertyId]);

  return (
    <>
          <div className={`card ${className}`}>
            <div className='card-img'>
              <img src={img} alt='' />
            </div>
            <div className='card-info'>
              <div className='card-price'>₹{price}<span>/{pricePer}</span></div>
              
                <div className='card-location' 
                style={{display:'flex',
                color:"#393939",
                textTransform:'capitalize',
                fontWeight:'500',
                gap:'5px',
                alignItems:'center'
                }}
                >
                  <FaLocationDot style={{fontSize:'18px',color:"#393939"}}/>
                  {city}, {state}
                </div>


              <div className='card-property-details'>
                <div>
                  <span style={{color:"#393939",fontWeight:'500',display:'flex'}}><IoBedSharp style={{color:"#393939"}}/>{bhk}</span>
                  <span style={{color:"#393939",fontWeight:'500',display:'flex'}}><FaBath style={{color:"#393939"}}/>{bath}</span>
                </div>
                <div>
                  <span style={{color:"#393939",fontWeight:'500'}}><RxSize style={{fontSize:'20px',color:"#393939"}}/>{size} Sq.ft</span>
                  <span style={{color:"#393939",fontWeight:'500',justifyContent:'end',display:'flex'}}><BsHouseAdd style={{fontSize:'20px',color:"#393939"}}/>{type}</span>
                </div>   
              </div>

              {/* added seller name */}
              
              {/* <div className="card-seller-name">
                <span>Listed By - </span>
                <span style={{textTransform:'capitalize', color:'#3770FF',textDecoration:'underline'}}>
                  {`${properties.seller?.firstName}
                  ${properties.seller?.lastName}`}
                </span>
              </div> */}
              {
                !isSeller ? (
                  <button className='card-button' onClick={ () => navigate(`/property/${propertyId}`)}>View Details</button>
                ) : (
                  <div className='card-buttons'>
                    <button className='card-button' onClick={ () => navigate(`/property/${propertyId}`)}>View Details</button>
                    <button className='card-delete-btn' onClick={() => setConfirmationModal({
                      text1: "Are you sure?",
                      text2: "After this you cannot access this Listing.",
                      btn1Text: "Delete",
                      btn2Text: "Cancel",
                      btn1Handler: () => dispatch(deleteProperty(token, propertyId)),
                      btn2Handler: () => setConfirmationModal(null),
                  }    
              )}>
                <RiDeleteBinLine style={{ height: '15px', width: '15px'}}/>
              </button>
                </div>
                )
              }
            </div>
            
          </div>
          {
            confirmationModal && <ConfirmationModal modalData={confirmationModal} />
          }
        </>
  )
}

export default Card