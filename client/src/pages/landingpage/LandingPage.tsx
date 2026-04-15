import {Button} from "@/components/ui/button";
import {Moon, Sun} from "lucide-react";
import {type JSX} from "react";
import {useLocation} from "react-router-dom";
import PillLabel from "../../components/common/PillLabel";
import UniStack from "../../components/UniStack";
import {useThemeSwitcher} from "../../hooks/ThemeSwitcher";
import "../../theme.css";

const LandingPage = (): JSX.Element => {
  return (
    <main className="min-h-screen w-screen">
      <Navbar />
      <section
        id="hero"
        className="min-h-[calc(100vh-72px)] w-full flex items-center justify-center flex-col px-6"
        style={{
          background: "var(--hero-gradient)",
        }}
      >
        <div className="mb-7 flex justify-center">
          <PillLabel text={"Enterprise-Grade Ready"} />
        </div>
        <h1 className="text-[2.75rem] leading-[1.05] font-extrabold text-center lg:text-[4.25rem]">
          Your University Portal.
          <br />
          <span style={{color: "var(--accent-primary)"}}>Live in Minutes.</span>
        </h1>
        <p
          className="mt-6 max-w-3xl text-center text-[1rem] leading-8 lg:text-[1.6rem]"
          style={{color: "var(--text-secondary)"}}
        >
          Deploy a bespoke digital campus with zero lines of code. Empower your
          administration with institutional-grade tools while students enjoy a
          high-performance educational experience.
        </p>
        <div className="mt-10 flex items-center gap-4">
          <Button
            className="h-12 px-7 text-[0.75rem] font-bold uppercase tracking-wide"
            style={{
              color: "#120c00",
              background:
                "linear-gradient(135deg, rgba(245,158,11,1) 0%, rgba(255,193,116,1) 100%)",
            }}
          >
            Get Started Free
          </Button>
          <Button
            className="h-12 px-7 text-[0.75rem] font-bold uppercase tracking-wide"
            variant={"outline"}
            style={{
              color: "var(--text-primary)",
              borderColor: "rgba(245, 158, 11, 0.28)",
              backgroundColor: "rgba(32, 27, 20, 0.2)",
            }}
          >
            Schedule Demo
          </Button>
        </div>
      </section>

      <section>
        
      </section>
    </main>
  );
};

const Navbar = (): JSX.Element => {
  const {mode, toggle} = useThemeSwitcher();
  const location = useLocation();

  const navLinks = [
    {title: "Features", to: "#feature"},
    {title: "How it Works", to: "#how-it-works"},
    {title: "pricing", to: "#pricing"},
  ];

  return (
    <>
      <nav className="flex items-center lg:justify-around justify-between   py-4 px-6 lg:px-0 shadow-lg">
        <UniStack />
        <div className="lg:flex items-center justify-center gap-3.5 hidden ">
          {navLinks.map(({title, to}: {title: string; to: string}) => {
            const isActive =
              location.hash === to || (!location.hash && to === "#feature");

            return (
              <a
                href={to}
                key={title}
                style={{
                  color: isActive ? "var(--accent-primary)" : undefined,
                  borderBottom: isActive
                    ? "2px solid var(--accent-primary)"
                    : "2px solid transparent",
                  paddingBottom: "2px",
                }}
              >
                {title}
              </a>
            );
          })}
        </div>
        <div className="flex items-center justify-center gap-2">
          <Button onClick={toggle}>
            {mode === "dark" ? <Sun /> : <Moon />}
          </Button>
          <Button
            className="lg:inline-flex hidden items-center justify-center text-center"
            variant={"outline"}
            style={{
              color: "var(--accent-primary)",
            }}
          >
            Launch your campuse
          </Button>
        </div>
      </nav>
    </>
  );
};

export default LandingPage;
