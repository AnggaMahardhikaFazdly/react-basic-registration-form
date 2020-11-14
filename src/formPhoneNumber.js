import React from 'react'

const FormPhoneNumber = (props) => {
    return (
        <div>
            <label>
                <p>phone number:</p>
                <input type="text" placeholder="Your Phone Number" value={props.phoneNumber} onChange={props.changePhoneNumber} />
            </label>
        </div>
    )
}

export default FormPhoneNumber