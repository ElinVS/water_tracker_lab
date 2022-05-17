import { useContext } from "react";
import UserContext from "../context/UserContext";

const Header = () => {

    const {name} = useContext(UserContext)

    return (
        <>
            <UserContext.Consumer>
                { () =>{
                    return(
                    <h2>Hello {name} 👋</h2>

                    )
                }
                
                }
                
            </UserContext.Consumer>
        </>
    )
}

export default Header;
