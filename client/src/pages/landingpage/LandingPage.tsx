import {Button} from "@/components/ui/button";
import {Card, CardDescription, CardHeader} from "@/components/ui/card";
import {
  Brain,
  CheckCircle2,
  File,
  Moon,
  Radio,
  Sun,
  XCircle,
} from "lucide-react";
import {motion} from "framer-motion";
import {type JSX} from "react";
import {useLocation} from "react-router-dom";
import PillLabel from "../../components/common/PillLabel";
import UniStack from "../../components/UniStack";
import {useThemeSwitcher} from "../../hooks/ThemeSwitcher";
import "../../theme.css";

interface Feature {
  icon?: JSX.Element;
  title: string;
  dec: string;
}

interface workflow extends Feature {
  num: string;
}

interface pricingPlan {
  name: string;
  price: string;
  unit: string;
  dec: string;
  cta: string;
  featured?: boolean;
  points: {label: string; muted?: boolean}[];
}

const features: Feature[] = [
  {
    icon: <File size={28} strokeWidth={1.6} />,
    title: "Notes & File Management",
    dec: "Centralized repository for all academic assets. Secure, encrypted, and accessible from any device worldwide.",
  },
  {
    icon: <Brain size={28} strokeWidth={1.6} />,
    title: "AI-Powered Summaries",
    dec: "Leverage state-of-the-art LLMs to distill hours of lectures and thousands of pages into actionable insights.",
  },
  {
    icon: <Radio size={28} strokeWidth={1.6} />,
    title: "Live Classes",
    dec: "Ultra-low latency streaming with interactive whiteboards and real-time student engagement analytics.",
  },
];
const workFlow: workflow[] = [
  {
    num: "01",
    title: "Build Your Campus",
    dec: "Choose your modules, brand your domain, and configure your architecture with our instant setup wizard.",
  },
  {
    num: "02",
    title: "Generate Secure Access",
    dec: "Issue unique cryptographic codes for your cohort. Full control over permissions and access tiers.",
  },
  {
    num: "03",
    title: "Onboard Frictionless",
    dec: "Users join with a single click. No complex training required. Ready for students and employees immediately.",
  },
];

const pricingPlans: pricingPlan[] = [
  {
    name: "Starter",
    price: "₹2,000",
    unit: "/mo",
    dec: "Perfect for private tutors and labs.",
    cta: "Select Tier",
    points: [
      {label: "Up to 50 Students"},
      {label: "100GB Storage"},
      {label: "AI Summation", muted: true},
    ],
  },
  {
    name: "Growth",
    price: "₹5,000",
    unit: "/mo",
    dec: "Ideal for growing colleges and institutions.",
    cta: "Scale Now",
    featured: true,
    points: [
      {label: "Unlimited Students"},
      {label: "1TB Storage"},
      {label: "Advanced AI Modules"},
    ],
  },
  {
    name: "Enterprise",
    price: "₹15,000",
    unit: "/mo",
    dec: "Full-scale digital transformation.",
    cta: "Contact Sales",
    points: [
      {label: "Custom Infrastructure"},
      {label: "24/7 Dedicated Support"},
      {label: "Custom SSO Integration"},
    ],
  },
];

const viewPortConfig = {once: true, amount: 0.2};

const LandingPage = (): JSX.Element => {
  return (
    <main className="h-screen w-screen">
      <Navbar />
      <section
        id="hero"
        className="min-h-[calc(100vh-72px)] w-full flex items-center justify-center flex-col px-6"
        style={{
          background: "var(--hero-gradient)",
        }}
      >
        <motion.div
          initial={{opacity: 0, y: 24}}
          whileInView={{opacity: 1, y: 0}}
          viewport={viewPortConfig}
          transition={{duration: 0.65, delay: 0.1, ease: [0.2, 0, 0, 1]}}
          className="mb-7 flex justify-center"
        >
          <PillLabel text={"Enterprise-Grade Ready"} />
        </motion.div>

        <motion.h1
          initial={{opacity: 0, y: 24}}
          whileInView={{opacity: 1, y: 0}}
          viewport={viewPortConfig}
          transition={{duration: 0.65, delay: 0.25, ease: [0.2, 0, 0, 1]}}
          className="text-[2.75rem] leading-[1.05] font-extrabold text-center lg:text-[4.25rem]"
        >
          Your University Portal.
          <br />
          <span style={{color: "var(--accent-primary)"}}>Live in Minutes.</span>
        </motion.h1>

        <motion.p
          initial={{opacity: 0, y: 24}}
          whileInView={{opacity: 1, y: 0}}
          viewport={viewPortConfig}
          transition={{duration: 0.65, delay: 0.4, ease: [0.2, 0, 0, 1]}}
          className="mt-6 max-w-3xl text-center text-[1rem] leading-8 lg:text-[1.2rem]"
          style={{color: "var(--text-secondary)"}}
        >
          Deploy a bespoke digital campus with zero lines of code. Empower your
          administration with institutional-grade tools while students enjoy a
          high-performance educational experience.
        </motion.p>
        <motion.div
          className="mt-10 flex items-center gap-4"
          initial={{opacity: 0, y: 24}}
          whileInView={{opacity: 1, y: 0}}
          viewport={viewPortConfig}
          transition={{duration: 0.65, delay: 0.4, ease: [0.2, 0, 0, 1]}}
        >
          <Button
            className="h-12 w-44 px-7 text-[0.75rem] font-bold uppercase tracking-wide"
            style={{
              color: "#120c00",
              background:"var(--btn-gradient)"
            }}
          >
            Get Started Free
          </Button>
        </motion.div>
      </section>

      <motion.section
        id="feature"
        className="flex items-start flex-col justify-center py-16 gap-6 w-full min-h-[80vh] px-4 lg:px-12"
        style={{
          backgroundColor: "var(--bg-secondary)",
          // background:'red'
        }}
        initial={{opacity: 0, y: 24}}
        whileInView={{opacity: 1, y: 0}}
        viewport={viewPortConfig}
        transition={{duration: 0.65, ease: [0.2, 0, 0, 1]}}
      >
        <div className="flex items-start  justify-center flex-col gap-2">
          <PillLabel text="Capabilities" className=" w-30 h-8" />
          <h5
            className="text-xl lg:text-3xl font-bold text-center leading-tight"
            style={{
              color: "var(--text-primary)",
            }}
          >
            Engineered for Excellence.
          </h5>
        </div>

        <div className=" grid grid-cols-1 lg:grid-cols-3 gap-6 w-full mt-8 mx-auto">
          {features.map(({icon, title, dec}: Feature, index: number) => (
            <motion.div
              key={title}
              initial={{opacity: 0, y: 28}}
              whileInView={{opacity: 1, y: 0}}
              viewport={viewPortConfig}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
                ease: [0.2, 0, 0, 1],
              }}
            >
              <Card
                className="group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 rounded-none"
                style={{
                  backgroundColor: "var(--bg-secondary)",
                  padding: "32px 28px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <div
                  className="p-3 rounded-lg inline-flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{
                    color: "var(--accent-primary)",
                    width: "56px",
                    height: "56px",
                  }}
                >
                  {icon}
                </div>
                <div className="flex flex-col gap-3 flex-1">
                  <h4
                    className="text-lg font-bold"
                    style={{
                      color: "var(--text-primary)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {title}
                  </h4>
                  <p
                    className="text-sm leading-relaxed w-[85%] text-justify"
                    style={{
                      color: "var(--text-tertiary)",
                      lineHeight: 1.7,
                    }}
                  >
                    {dec}
                  </p>
                </div>
                <div
                  className="mt-4 h-0.75 w-full max-w-75"
                  style={{backgroundColor: "var(--hr-color)"}}
                />
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="workflow"
        style={{
          background: "var(--bg-primary)",
        }}
        className="flex items-start flex-col justify-center py-16 gap-6 w-full min-h-[80vh] px-4 lg:px-12"
        initial={{opacity: 0, y: 24}}
        whileInView={{opacity: 1, y: 0}}
        viewport={viewPortConfig}
        transition={{duration: 0.65, ease: [0.2, 0, 0, 1]}}
      >
        <div className="flex w-full items-start justify-between gap-4">
          <div className="flex items-start justify-center flex-col gap-2">
            <PillLabel text="Workflow" className="w-30 h-8" />
            <h5
              className="text-xl lg:text-5xl font-bold text-left leading-tight"
              style={{
                color: "var(--text-primary)",
              }}
            >
              Your Campus in Three Beats.
            </h5>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full mt-8 mx-auto">
          {workFlow.map(({num, title, dec}: workflow, index: number) => (
            <motion.div
              key={num}
              initial={{opacity: 0, y: 28}}
              whileInView={{opacity: 1, y: 0}}
              viewport={viewPortConfig}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
                ease: [0.2, 0, 0, 1],
              }}
            >
              <Card className="relative h-full border-none rounded-none bg-transparent ring-0 py-0 overflow-visible">
                <span
                  className="absolute -top-1 left-0 text-7xl leading-none"
                  style={{
                    color: "var(--border-light)",
                    fontWeight: "900",
                  }}
                >
                  {num}
                </span>
                <CardHeader className="px-0 pt-14 pb-3">
                  <h5
                    className="text-3xl font-bold"
                    style={{color: "var(--text-primary)"}}
                  >
                    {title}
                  </h5>
                </CardHeader>
                <CardDescription
                  className="px-0 text-[1.15rem] leading-9 max-w-[38ch]"
                  style={{color: "var(--text-secondary)"}}
                >
                  {dec}
                </CardDescription>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="pricing"
        className="w-full px-4 lg:px-12 py-20"
        style={{background: "var(--bg-secondary)"}}
        initial={{opacity: 0, y: 24}}
        whileInView={{opacity: 1, y: 0}}
        viewport={viewPortConfig}
        transition={{duration: 0.65, ease: [0.2, 0, 0, 1]}}
      >
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h3
              className="text-3xl lg:text-5xl font-bold"
              style={{color: "var(--text-primary)"}}
            >
              Investment Tiers
            </h3>
            <p
              className="mt-4 text-base lg:text-xl"
              style={{color: "var(--text-secondary)"}}
            >
              Scalable pricing designed for the future of education.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-0  items-stretch">
            {pricingPlans.map(
              (
                {name, price, unit, dec, cta, featured, points},
                index: number,
              ) => (
                <motion.div
                  key={name}
                  initial={{opacity: 0, y: 28}}
                  whileInView={{opacity: 1, y: 0}}
                  viewport={viewPortConfig}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.12,
                    ease: [0.2, 0, 0, 1],
                  }}
                >
                  <Card
                    className="relative rounded-none py-8 px-6 lg:px-9 border-none"
                    style={{
                      backgroundColor: featured
                        ? "var(--bg-tertiary)"
                        : "var(--bg-primary)",
                      transform: featured ? "translateY(-10px)" : "none",
                    }}
                  >
                    {featured ? (
                      <span
                        className="absolute top-3 right-8 px-4 py-1 text-[0.65rem] tracking-[0.14em] font-bold uppercase"
                        style={{
                          color: "#120c00",
                          backgroundColor: "var(--accent-primary)",
                        }}
                      >
                        Most Popular
                      </span>
                    ) : null}

                    <p
                      className="text-[0.7rem] font-bold uppercase tracking-[0.14em]"
                      style={{color: "var(--accent-primary)"}}
                    >
                      {name}
                    </p>

                    <div className="mt-4 flex items-end gap-1">
                      <h4
                        className="text-5xl font-extrabold leading-none"
                        style={{color: "var(--text-primary)"}}
                      >
                        {price}
                      </h4>
                      <span
                        className="text-lg font-semibold mb-1"
                        style={{color: "var(--text-secondary)"}}
                      >
                        {unit}
                      </span>
                    </div>

                    <p
                      className="mt-2 text-sm"
                      style={{color: "var(--text-tertiary)"}}
                    >
                      {dec}
                    </p>

                    <div className="mt-10 flex flex-col gap-4">
                      {points.map(({label, muted}) => (
                        <div
                          key={label}
                          className="flex items-center gap-3 text-base"
                        >
                          {muted ? (
                            <XCircle
                              size={14}
                              style={{
                                color: "var(--text-tertiary)",
                                flexShrink: 0,
                              }}
                            />
                          ) : (
                            <CheckCircle2
                              size={14}
                              style={{
                                color: "var(--accent-primary)",
                                flexShrink: 0,
                              }}
                            />
                          )}
                          <span
                            style={{
                              color: muted
                                ? "var(--text-tertiary)"
                                : "var(--text-primary)",
                            }}
                          >
                            {label}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Button
                      className="mt-12 h-12 w-full rounded-none text-[0.72rem] font-bold tracking-[0.16em] uppercase"
                      style={
                        featured
                          ? {
                              color: "#120c00",
                              background:
                                "linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%)",
                            }
                          : {
                              color: "var(--text-primary)",
                              background: "transparent",
                              border: "1px solid var(--border-color)",
                            }
                      }
                    >
                      {cta}
                    </Button>
                  </Card>
                </motion.div>
              ),
            )}
          </div>
        </div>
      </motion.section>
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
