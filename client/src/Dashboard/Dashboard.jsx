import React, { useState } from "react";

const navItems = [
  { label: "Dashboard", icon: "🏠", active: true },
  { label: "Students", icon: "👥" },
  { label: "Teachers", icon: "👨‍🏫" },
  { label: "Classes", icon: "📚" },
  { label: "Attendance", icon: "✅" },
  { label: "Examinations", icon: "📝" },
  { label: "Fees", icon: "💵" },
  { label: "Library", icon: "📖" },
  { label: "Transport", icon: "🚌" },
  { label: "Notice Board", icon: "📋" },
  { label: "Reports", icon: "📊" },
  { label: "Settings", icon: "⚙️" },
];

const stats = [
  {
    label: "Total Students",
    value: "1250",
    icon: "👥",
    color: "#4CAF50",
    bg: "#e8f5e9",
    link: "View Details",
  },
  {
    label: "Total Teachers",
    value: "85",
    icon: "👨‍🏫",
    color: "#2196F3",
    bg: "#e3f2fd",
    link: "View Details",
  },
  {
    label: "Total Classes",
    value: "45",
    icon: "📚",
    color: "#FF9800",
    bg: "#fff3e0",
    link: "View Details",
  },
  {
    label: "Total Revenue",
    value: "₹1,45,000",
    icon: "💰",
    color: "#F44336",
    bg: "#ffebee",
    link: "View Details",
  },
];

const upcomingExams = [
  { name: "1st Term Exam", date: "20 May, 2024", color: "#4CAF50" },
  { name: "Half Yearly Exam", date: "10 Aug, 2024", color: "#2196F3" },
  { name: "Annual Exam", date: "15 Dec, 2024", color: "#9C27B0" },
];

const recentActivities = [
  { text: "New student John Doe added", time: "2 min ago", color: "#4CAF50" },
  {
    text: "Fee payment of ₹3500 received",
    time: "15 min ago",
    color: "#2196F3",
  },
  {
    text: "Attendance marked for Class 10A",
    time: "30 min ago",
    color: "#FF9800",
  },
];

const feeData = [
  { month: "Jan", value: 180 },
  { month: "Feb", value: 120 },
  { month: "Mar", value: 160 },
  { month: "Apr", value: 140 },
  { month: "May", value: 200 },
  { month: "Jun", value: 170 },
];

// SVG Donut Chart Component
const DonutChart = () => {
  const radius = 45;
  const cx = 60;
  const cy = 60;
  const circumference = 2 * Math.PI * radius;

  const segments = [
    { percent: 85, color: "#4CAF50", label: "Present - 85%" },
    { percent: 10, color: "#F44336", label: "Absent - 10%" },
    { percent: 5, color: "#FF9800", label: "Leave - 5%" },
  ];

  let offset = circumference * 0.25; // Start from top

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
      <svg width="120" height="120" viewBox="0 0 120 120">
        {segments.map((seg, i) => {
          const dash = (seg.percent / 100) * circumference;
          const dashOffset = circumference - offset;
          const el = (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r={radius}
              fill="none"
              stroke={seg.color}
              strokeWidth="14"
              strokeDasharray={`${dash} ${circumference - dash}`}
              strokeDashoffset={dashOffset}
            />
          );
          offset += dash;
          return el;
        })}
        <text
          x={cx}
          y={cy - 6}
          textAnchor="middle"
          fontSize="16"
          fontWeight="bold"
          fill="#222"
        >
          85%
        </text>
        <text x={cx} y={cy + 12} textAnchor="middle" fontSize="9" fill="#888">
          Present
        </text>
      </svg>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {segments.map((seg) => (
          <div
            key={seg.label}
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: seg.color,
              }}
            />
            <span style={{ fontSize: "12px", color: "#555" }}>{seg.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Bar Chart Component
const BarChart = () => {
  const maxVal = Math.max(...feeData.map((d) => d.value));
  const yLabels = ["200K", "150K", "100K", "50K", "0"];

  return (
    <div style={{ display: "flex", gap: "8px", height: "140px" }}>
      {/* Y-axis labels */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          paddingBottom: "18px",
          alignItems: "flex-end",
        }}
      >
        {yLabels.map((l) => (
          <span key={l} style={{ fontSize: "9px", color: "#aaa" }}>
            {l}
          </span>
        ))}
      </div>
      {/* Bars */}
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "flex-end",
          gap: "8px",
          borderBottom: "1px solid #eee",
          borderLeft: "1px solid #eee",
          paddingBottom: "0",
        }}
      >
        {feeData.map((d) => (
          <div
            key={d.month}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <div
              style={{
                width: "70%",
                height: `${(d.value / maxVal) * 100}px`,
                backgroundColor: "#1a237e",
                borderRadius: "4px 4px 0 0",
              }}
            />
            <span style={{ fontSize: "10px", color: "#888" }}>{d.month}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Dashboard = () => {
  const [activeNav, setActiveNav] = useState("Dashboard");

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: "#f0f2f5",
        overflow: "hidden",
      }}
    >
      {/* ─── Sidebar ─── */}
      <aside
        style={{
          width: "220px",
          backgroundColor: "#1a237e",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          flexShrink: 0,
          boxShadow: "2px 0 6px rgba(0,0,0,0.25)",
        }}
      >
        {/* Logo */}
        <div
          style={{
            padding: "18px 16px",
            borderBottom: "1px solid rgba(255,255,255,0.12)",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div
            style={{
              width: 38,
              height: 38,
              backgroundColor: "#fff",
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 22,
            }}
          >
            🏫
          </div>
          <span
            style={{ fontSize: "12px", fontWeight: 700, lineHeight: "1.4" }}
          >
            School Management
            <br />
            System
          </span>
        </div>

        {/* Nav */}
        <nav style={{ flex: 1, overflowY: "auto", padding: "8px 0" }}>
          {navItems.map((item) => (
            <div
              key={item.label}
              onClick={() => setActiveNav(item.label)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 18px",
                cursor: "pointer",
                fontSize: "13px",
                backgroundColor:
                  activeNav === item.label
                    ? "rgba(255,255,255,0.15)"
                    : "transparent",
                borderLeft:
                  activeNav === item.label
                    ? "3px solid #fff"
                    : "3px solid transparent",
                transition: "background 0.2s",
              }}
            >
              <span style={{ fontSize: 16 }}>{item.icon}</span>
              {item.label}
            </div>
          ))}
        </nav>
      </aside>

      {/* ─── Main ─── */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          minWidth: 0,
        }}
      >
        {/* Top Bar */}
        <header
          style={{
            backgroundColor: "#fff",
            padding: "12px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              fontSize: 15,
              fontWeight: 700,
              color: "#1a237e",
            }}
          >
            <button
              style={{
                background: "none",
                border: "none",
                fontSize: 20,
                cursor: "pointer",
                color: "#555",
              }}
            >
              ☰
            </button>
            School Management System
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <button
              style={{
                background: "none",
                border: "none",
                fontSize: 18,
                cursor: "pointer",
                color: "#555",
              }}
            >
              ⚙️
            </button>
            <button
              style={{
                background: "none",
                border: "none",
                fontSize: 18,
                cursor: "pointer",
                color: "#555",
                position: "relative",
              }}
            >
              🔔
              <span
                style={{
                  position: "absolute",
                  top: -4,
                  right: -4,
                  width: 8,
                  height: 8,
                  backgroundColor: "#F44336",
                  borderRadius: "50%",
                }}
              />
            </button>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 14px",
                backgroundColor: "#f5f5f5",
                borderRadius: 20,
                fontSize: 13,
                cursor: "pointer",
              }}
            >
              <span>👤</span>
              <span>Admin</span>
              <span style={{ fontSize: 10 }}>▾</span>
            </div>
          </div>
        </header>

        {/* Page Body */}
        <main
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "20px 24px",
          }}
        >
          <h2
            style={{
              margin: "0 0 18px",
              fontSize: 20,
              fontWeight: 700,
              color: "#1a237e",
            }}
          >
            Dashboard
          </h2>

          {/* ── Stats ── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
              gap: 16,
              marginBottom: 20,
            }}
          >
            {stats.map((s) => (
              <div
                key={s.label}
                style={{
                  backgroundColor: "#fff",
                  borderRadius: 10,
                  padding: "16px 18px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: 8,
                  }}
                >
                  <span
                    style={{ fontSize: 12, color: "#888", fontWeight: 500 }}
                  >
                    {s.label}
                  </span>
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 8,
                      backgroundColor: s.bg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 18,
                    }}
                  >
                    {s.icon}
                  </div>
                </div>
                <div
                  style={{
                    fontSize: 26,
                    fontWeight: 800,
                    color: s.color,
                    marginBottom: 6,
                  }}
                >
                  {s.value}
                </div>
                <a
                  href="#"
                  style={{
                    fontSize: 11,
                    color: "#2196F3",
                    textDecoration: "none",
                  }}
                >
                  {s.link}
                </a>
              </div>
            ))}
          </div>

          {/* ── Charts ── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.6fr",
              gap: 16,
              marginBottom: 20,
            }}
          >
            {/* Attendance */}
            <div
              style={{
                backgroundColor: "#fff",
                borderRadius: 10,
                padding: 18,
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              }}
            >
              <h3
                style={{
                  margin: "0 0 16px",
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#222",
                }}
              >
                Attendance Overview
              </h3>
              <DonutChart />
            </div>

            {/* Fee Collection */}
            <div
              style={{
                backgroundColor: "#fff",
                borderRadius: 10,
                padding: 18,
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              }}
            >
              <h3
                style={{
                  margin: "0 0 16px",
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#222",
                }}
              >
                Fee Collection
              </h3>
              <BarChart />
            </div>
          </div>

          {/* ── Bottom Row ── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 16,
            }}
          >
            {/* Upcoming Exams */}
            <div
              style={{
                backgroundColor: "#fff",
                borderRadius: 10,
                padding: 18,
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              }}
            >
              <h3
                style={{
                  margin: "0 0 12px",
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#222",
                }}
              >
                Upcoming Exams
              </h3>
              {upcomingExams.map((exam) => (
                <div
                  key={exam.name}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "10px 0",
                    borderBottom: "1px solid #f0f0f0",
                  }}
                >
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      backgroundColor: exam.color,
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ fontSize: 13, color: "#333", flex: 1 }}>
                    {exam.name}
                  </span>
                  <span style={{ fontSize: 11, color: "#888" }}>
                    {exam.date}
                  </span>
                </div>
              ))}
            </div>

            {/* Recent Activities */}
            <div
              style={{
                backgroundColor: "#fff",
                borderRadius: 10,
                padding: 18,
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              }}
            >
              <h3
                style={{
                  margin: "0 0 12px",
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#222",
                }}
              >
                Recent Activities
              </h3>
              {recentActivities.map((act, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 10,
                    padding: "10px 0",
                    borderBottom: "1px solid #f0f0f0",
                  }}
                >
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      backgroundColor: act.color,
                      marginTop: 4,
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ fontSize: 12, color: "#444", flex: 1 }}>
                    {act.text}
                  </span>
                  <span
                    style={{
                      fontSize: 11,
                      color: "#aaa",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {act.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
