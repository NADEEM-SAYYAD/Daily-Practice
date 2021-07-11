import React, { useState } from "react";
import useCustomInput from './useCustomInput';

const BasicForm = () => {
    const [firstname,bindFirstName,resetFirstName] = useCustomInput("karan");
    const [lastname,bindLastName,resetLastName] = useCustomInput("Sharma");

    return (
        <div>
            <hr />
            <div>
                <label>First Name</label> 
                <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    {...bindFirstName}
                />
            </div>
            <div>
                <label>Last Name</label> 
                <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    {...bindLastName}
                />
            </div>
        </div>
    );
};
export default BasicForm;
