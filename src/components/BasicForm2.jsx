import React from "react";
import { useStoreValToLocStorage } from "../customhooks/useStoreValToLocStorage";

const BasicForm2 = () => {
    const [name, setName] = useStoreValToLocStorage("name","");
    return (
        <div>
            <hr />
            <label>First Name</label>
            <input
                type="text"
                name="firstname"
                id="firstname"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </div>
    );
};
export default BasicForm2;
