import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarCollapseBtn,
  NavbarContainer,
  NavbarItem,
  NavbarList,
} from "keep-react";
import { Link } from "react-router-dom";
import ReactLogo from "../../assets/react.svg";

const Header = () => {
  return (
    <Navbar className="dark:bg-[#242424]">
      <NavbarContainer>
        <NavbarBrand>
          <img src={ReactLogo} alt="keep" />
        </NavbarBrand>
        <NavbarList>
          <NavbarItem>
            <Link to="/">Home</Link>
          </NavbarItem>
          <NavbarItem>
            <Link to="/products">Products</Link>
          </NavbarItem>
          <NavbarItem>
            <Link to="/blog">Blog</Link>
          </NavbarItem>
          <NavbarItem>
            <Link to="/contact">Contact</Link>
          </NavbarItem>
        </NavbarList>
        <NavbarList>
          <NavbarItem>
            <Link to="/sign-in">Sign In</Link>
          </NavbarItem>
          <NavbarItem active={true}>
            <Link to="/sign-up">Sign Up</Link>
          </NavbarItem>
        </NavbarList>
        <NavbarCollapseBtn />
        <NavbarCollapse>
          <NavbarItem>Projects</NavbarItem>
          <NavbarItem>Research</NavbarItem>
          <NavbarItem>Contact</NavbarItem>
          <NavbarItem>Sign In</NavbarItem>
          <NavbarItem active={true}>Sign Up</NavbarItem>
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
  );
};

export default Header;
