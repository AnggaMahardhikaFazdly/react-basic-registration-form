import React from 'react'

const FormAddress = (props) => {
    return (
        <div>
            <label>
                <p>address:</p>
                <input type="text" placeholder="Your Address" value={props.address} onChange={props.changeAddress} />
            </label>
        </div>
    )
}

export default FormAddress