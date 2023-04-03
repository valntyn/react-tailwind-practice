import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Button } from "../Button";
import { NavItem } from "../NavItem";
import { NavMenu } from "../NavMenu";
import { COMPANY, FEATURES } from './constants'

export const Header = () => {
  return (
    <header className="flex items-center justify-center">
      <Logo className="object-contain object-center w-[84px] h-[27px] flex pt-1" />
      <nav className="hidden xl:inherit space-x-8 ml-8 items-center">
        <NavItem text="Feature">
          <NavMenu items={ FEATURES }/>
        </NavItem>
        <NavItem text="Company">
          <NavMenu items={ COMPANY } />
        </NavItem>
        <NavItem text="Careers" />
        <NavItem text="About" />
      </nav>
      <div className='ml-auto flex space-x-5'>
        <Button>
          Login
        </Button>
        <Button hasBorder={true} >
          Register
        </Button>
      </div>
    </header>
  )
}
