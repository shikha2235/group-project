import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
const Modal_Styles={
    backgroundColor: 'azure',
    position:'fixed',
    width:'43%',
     marginTop:'30%',
    // marginLeft:'30%',
    // marginRight:'30%',
    // marginDown:'30%',
    display:'flex',

    zindex: 1000

}
const Overlay_Styles={
    position:'fixed',
    top:0,
    left:0,
    right:0,
    bottom:0,
    zindex:1000,
    backgroundColor:'rgba(0,0,0,0.7)'
}
export default function Feed_modal({open,children,onClose}) {
    if(!open)
    return null
  return (
      <>
    <div style={Overlay_Styles}></div>
    <div style={Modal_Styles}>
    <div>
        <button onClick={onClose}><CloseIcon/></button>
        {children}
        </div>
    </div>
    </>
  )
}
