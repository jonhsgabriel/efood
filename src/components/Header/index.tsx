import { HeaderBar } from "./styles"

import logo from '../../assets/images/logo.png'

const Header = () => (
  <HeaderBar>
    <img src={logo} alt="Efood" />
  </HeaderBar>
)

export default Header