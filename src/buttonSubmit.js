import React from 'react'

const ButtonSumbit = (props) => {
    return (
        <button onClick={props.clickButton} disabled={props.disabledButton} /*disabled={props.firstName < 5 || props.lastName < 5 || props.address < 5 || props.phoneNumber < 8 || props.phoneNumber > 12} */ >Submit</button>
    )
}

export default ButtonSumbit