import React from 'react';
import './Users.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'

const Users = (props) => {
    // console.log(props)
    const { photo, name, email, phone, yearlySelary } = props.user;
    return (
        <div className="profile">
            <div>
                <img src={photo} alt="" />
            </div>

            <div>
                <h2>Name:{name}</h2>
                <br />
                <p>Email:{email}</p>
                <p>Phone:{phone}</p>
                <p>Yearly selary:${yearlySelary}</p>
                <button className="add-button"
                    onClick={() => props.handleAddUser(props.user)}
                >
                    <FontAwesomeIcon icon={faPlusSquare} />

                    Add People</button>
            </div>
        </div>



    )
};

export default Users;