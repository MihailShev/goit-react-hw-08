import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { AuthNavig } from "../AuthNavig/AuthNavig";
import Nav from "../Nav/Nav";
import { UserMenu } from "../UserMenu/UserMenu";

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header className="">
      <Nav />

      {isLoggedIn ? <UserMenu /> : <AuthNavig />}
    </header>
  );
}
