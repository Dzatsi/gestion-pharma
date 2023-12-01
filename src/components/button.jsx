import { Link } from "react-router-dom";

export default function Button({linkValue, buttonValue}){
    return(
        <button>
            <Link to={linkValue}>
                {buttonValue}
            </Link>
        </button>
    )
}