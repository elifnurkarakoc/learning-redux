import { useDispatch } from "react-redux";
import { login } from "../stores/auth";
import { useHistory } from "react-router";
const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleClick = () => {
    const dummyData = {
      id: 1,
      name: "Elif",
      token: "fdsdfsfsdfddfg",
    };
    dispatch(login(dummyData));
    history.push("/");
  };
  return (
    <div>
      <h3>Giriş yap</h3>
      <button onClick={handleClick}>Giriş için tıklayın</button>
    </div>
  );
};

export default Login;
