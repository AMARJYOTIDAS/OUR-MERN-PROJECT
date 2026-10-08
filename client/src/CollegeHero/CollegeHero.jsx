import "./CollegeHero.css";

const NAV = [
  "Admissions",
  "Academics",
  "Faculty",
  "Students",
  "Fees",
  "Library",
  "Support",
];

// Stacked rings that give the 3D object its thickness (back to front).
const SLABS = [
  { z: -52, c: "#15176f" },
  { z: -40, c: "#1a1d86" },
  { z: -28, c: "#1f239c" },
  { z: -16, c: "#262bb4" },
  { z: -4, c: "#3037cf" },
];

const Icon = ({ children }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#fff"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

export default function CollageHero({
  accent = "#c4b5ff",
  onLogin,
  onGetStarted,
  onDemo,
  onExplore,
}) {
  return (
    <section className="cg-hero" style={{ "--accent": accent }}>
      {/* scenery */}
      <svg
        className="cg-mountains"
        aria-hidden="true"
        viewBox="0 0 1440 360"
        preserveAspectRatio="none"
      >
        <path
          d="M0 200 C160 150 260 120 420 150 C560 176 640 120 780 130 C920 140 1040 190 1180 160 C1300 134 1380 150 1440 170 L1440 360 L0 360 Z"
          fill="#1d1670"
          opacity=".85"
        />
        <path
          d="M0 260 C140 230 300 215 460 238 C620 262 760 210 940 224 C1100 236 1260 270 1440 246 L1440 360 L0 360 Z"
          fill="#120d4a"
        />
        <path
          d="M0 310 C200 296 420 300 640 308 C860 316 1100 296 1440 306 L1440 360 L0 360 Z"
          fill="#0a0728"
        />
      </svg>
      <div className="cg-fade" />

      <div className="cg-content">
        {/* nav */}
        <header className="cg-nav">
          <div className="cg-nav-left">
            <a href="/" className="cg-logo" aria-label="Collegia home">
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                aria-hidden="true"
              >
                <rect
                  x="3"
                  y="3"
                  width="28"
                  height="28"
                  rx="11"
                  stroke="#fff"
                  strokeWidth="3.5"
                />
                <rect
                  x="11"
                  y="11"
                  width="12"
                  height="12"
                  rx="4.5"
                  fill="#fff"
                />
              </svg>
              <span>Collegia</span>
            </a>
            <nav className="cg-links" aria-label="Main">
              {NAV.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`}>
                  {item}
                </a>
              ))}
            </nav>
          </div>
          <div className="cg-nav-right">
            <button
              type="button"
              className="cg-btn cg-btn-sm cg-btn-glass"
              onClick={onLogin}
            >
              Login
            </button>
            <button
              type="button"
              className="cg-btn cg-btn-sm cg-btn-light"
              onClick={onGetStarted}
            >
              Get started
            </button>
          </div>
        </header>

        {/* body */}
        <div className="cg-body">
          <div className="cg-copy">
            <h1 className="cg-title">
              <span>Run Your Campus.</span>
              <span>Elevate Every Student.</span>
            </h1>
            <p className="cg-sub">
              Collegia is a next-generation college management system that
              brings admissions, attendance, exams, fees and faculty into one
              fast, transparent workspace.
            </p>
            <div className="cg-cta">
              <button
                type="button"
                className="cg-btn cg-btn-lg cg-btn-light"
                onClick={onDemo}
              >
                Book a demo
              </button>
              <button
                type="button"
                className="cg-btn cg-btn-lg cg-btn-glass"
                onClick={onExplore}
              >
                Explore modules
              </button>
            </div>
          </div>

          <div className="cg-visual">
            <div className="cg-stage" aria-hidden="true">
              <div className="cg-shadow" />
              <div className="cg-float">
                <div className="cg-obj">
                  {SLABS.map((s) => (
                    <div
                      key={s.z}
                      className="cg-layer cg-slab"
                      style={{ "--z": `${s.z}px`, "--c": s.c }}
                    />
                  ))}

                  <div
                    className="cg-layer cg-slab cg-neon"
                    style={{
                      "--z": "8px",
                      borderColor: accent,
                      borderWidth: 3,
                    }}
                  />
                  <div
                    className="cg-layer cg-neon"
                    style={{
                      "--z": "14px",
                      width: 336,
                      height: 456,
                      borderRadius: 128,
                      opacity: 0.85,
                    }}
                  />
                  <div
                    className="cg-layer cg-ring-inner"
                    style={{ "--z": "2px" }}
                  />
                  <div
                    className="cg-layer cg-neon"
                    style={{
                      "--z": "18px",
                      width: 300,
                      height: 420,
                      borderRadius: 112,
                    }}
                  />
                  <div
                    className="cg-layer cg-glass"
                    style={{ "--z": "-6px" }}
                  />
                  <div className="cg-layer cg-core" style={{ "--z": "10px" }} />

                  <div
                    className="cg-chip"
                    style={{ "--z": "120px", left: -6, top: 120 }}
                  >
                    <Icon>
                      <rect x="3" y="5" width="18" height="16" rx="3" />
                      <path d="M8 3v4M16 3v4M3 11h18" />
                    </Icon>
                    <span>Attendance</span>
                  </div>
                  <div
                    className="cg-chip"
                    style={{ "--z": "150px", right: -10, top: 250 }}
                  >
                    <Icon>
                      <path d="M3 20h18" />
                      <path d="M6 20V11M12 20V5M18 20v-7" />
                    </Icon>
                    <span>Results</span>
                  </div>
                  <div
                    className="cg-chip"
                    style={{ "--z": "110px", left: 30, bottom: 90 }}
                  >
                    <Icon>
                      <rect x="3" y="6" width="18" height="13" rx="3" />
                      <path d="M3 10h18M7 15h4" />
                    </Icon>
                    <span>Fee desk</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
