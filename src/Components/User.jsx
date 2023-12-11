import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const User = () => {
    const { user } = useContext(UserContext);

    return (
        <section className="user-thumbnail">
                <p>User: { user.username }</p>
                <img src={ user.avatar_url }></img>
        </section>
    );
}

export default User;