import React, { useContext } from "react";
import { ErrorsContext } from "../context/ErrorsContext";

const Errors = () => {
    const { errors } = useContext(ErrorsContext);
    const errorList = errors.map((error, idx) => <p key={idx}>{ error }</p>)

    return (
        <p className="errors">{ errorList }</p>
    )
}

export default Errors;