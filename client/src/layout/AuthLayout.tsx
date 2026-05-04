import {Button} from "@/components/ui/button";
import {Moon, Sun} from "lucide-react";
import {type JSX} from "react";
import {NavLink, Outlet} from "react-router-dom";
import UniStack from "../components/UniStack";
import {useThemeSwitcher} from "../hooks/ThemeSwitcher";

type navlinkType = {
  title: string;
  to: string;
};

const AuthLayout = () => {
  return (
    <main>
      <Navbar />
      <Outlet />
    </main>
  );
};

const Navbar = (): JSX.Element => {
  const {mode, toggle} = useThemeSwitcher();

  const navLinks: navlinkType[] = [
    {title: "Login", to: "/auth/login"},
    {title: "Sign up", to: "/auth/signup"},
    {title: "Institute", to: "/auth/register-institute"},
  ];

  return (
    <>
      <nav className="sticky top-0 z-40  backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="lg:flex items-center gap-4 hidden ">
              <UniStack />
            </div>

            <div className=" md:flex md:items-center  md:gap-8  md:w-[60%] lg:mx-auto lg:w-fit">
              {navLinks.map(({title, to}) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({isActive}) =>
                    `border-b-2 px-1 py-2 text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? "border-amber-400 text-amber-400"
                        : "border-transparent text-slate-300 hover:text-amber-300"
                    }`
                  }
                >
                  {title}
                </NavLink>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <div className=" md:block">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggle}
                  aria-label="Toggle theme"
                  className="text-amber-400 hover:text-amber-300"
                >
                  {mode === "dark" ? <Sun /> : <Moon />}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default AuthLayout;
