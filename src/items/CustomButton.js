
import React from "react"

const CustomButton = (props) => {
    return (
        <button className={props.className} title={props.title} style={{
            backgroundColor: "#6155ED",
            width: '100%',
            padding: 8,
            borderRadius: 10,
            marginRight:'auto',
            marginLeft:'auto',
            textAlign: 'center',
            marginVertical: 5,
            display:'flex',
            justifyContent:'center',
            flexDirection:'row',
            alignItems:'center',
            color:'white',
            border:'none'
    
        }} onClick={props.onPress}>
            {props.text}
        </button>
    )
}
export default CustomButton
