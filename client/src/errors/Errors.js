import { ErrorsContext } from "../context/ErrorsContext"

const Errors = () => {
    const { errors } = userContext(ErrorsContext);
    const errorList = errors.map((error, idx) => <li key={idx}>{ error }</li>)

    return (
        <ul>{ errorList }</ul>
    )
}

export default Errors;