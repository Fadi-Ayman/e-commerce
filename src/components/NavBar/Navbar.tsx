import { linksList } from "../../utils/constants";
import IconAndLogo from "./IconAndLogo";
import NavIconList from "./NavIconList";
import NavLinks from "./NavLinks";
import NavbarContainer from "./NavbarContainer";



export default function NavBar() {
  return (
    <NavbarContainer>
      <>
        <IconAndLogo />

        <NavLinks linksList={linksList} />

        <NavIconList />
      </>
    </NavbarContainer>
  );
}
