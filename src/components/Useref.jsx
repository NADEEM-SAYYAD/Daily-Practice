import React, { useRef } from "react";

const Useref = () => {
    const firstnameRef = React.useRef();
    const lastnameRef = React.useRef();
    const myColorRef = React.useRef();


    const formSubmitHandler = (e) => {
        e.preventDefault();
        console.log(firstnameRef.current.value);
        console.log(lastnameRef.current.value);
        myColorRef.current.style.background ='blue'
    };
    return (
        <div style={{ background: "red" }} ref={myColorRef}>
            <form onSubmit={formSubmitHandler}>
                <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    ref={firstnameRef}
                />
                <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    ref={lastnameRef}
                />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};
export default Useref;
