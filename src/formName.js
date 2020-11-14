import React from 'react'

const FormName = (props) => {
    return (
        <div>
            <label>
                <p>first name:</p>
                <input type="text" placeholder="Your First Name" value={props.firstName} onChange={props.changeFirstName} />
                <p>last name:</p>
                <input type="text" placeholder="Your Last Name" value={props.lastName} onChange={props.changeLastName} />
            </label>
        </div>
    )
}

export default FormName