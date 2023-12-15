import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const User = () => {
  const { user } = useContext(UserContext);

  return (
    <section className="user-thumbnail">
      <img src={user.avatar_url} className="user-pfp"></img>
      <p className="username">{user.username}</p>
    </section>
  );
};

export default User;
