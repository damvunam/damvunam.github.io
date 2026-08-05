"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaGraduationCap } from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname();
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Experience", href: "/experience" },
    { name: "Projects", href: "/projects" },
    { name: "Publications", href: "/publications" },
    { name: "Achievements", href: "/achievements" },
    { name: "Blog", href: "/blog" },
    { name: "Q&A", href: "/qa" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#edf5fd]/85 backdrop-blur-md border-b border-sky-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Bên trái: Tên & Social Icons */}
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-xl font-bold text-[#023e63] hover:text-[#0077b6] transition duration-200">
            Vu-Nam Dam
          </Link>

          <div className="flex items-center space-x-1.5 text-slate-400">
            <a 
              href="https://github.com/damvunam" 
              target="_blank" 
              rel="noreferrer" 
              className="p-1.5 rounded-full hover:text-[#023e63] hover:bg-white/80 transition duration-200" 
              title="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a 
              href="https://linkedin.com/in/damvunam" 
              target="_blank" 
              rel="noreferrer" 
              className="p-1.5 rounded-full hover:text-[#0077b6] hover:bg-white/80 transition duration-200" 
              title="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
            <a 
              href="https://scholar.google.com" 
              target="_blank" 
              rel="noreferrer" 
              className="p-1.5 rounded-full hover:text-[#023e63] hover:bg-white/80 transition duration-200" 
              title="Google Scholar"
            >
              <FaGraduationCap size={20} />
            </a>
          </div>
        </div>

        {/* Ở giữa: Navigation có đường gạch chân trượt theo con chuột đúng chuẩn video */}
        <nav 
          className="hidden md:flex items-center space-x-2 text-sm font-semibold"
          onMouseLeave={() => setHoveredPath(null)}
        >
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            const isHovered = hoveredPath === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                onMouseEnter={() => setHoveredPath(item.href)}
                className={`relative px-3 py-2 transition-colors duration-200 ${
                  isActive || isHovered
                    ? "text-[#023e63] font-bold"
                    : "text-[#0077b6]"
                }`}
              >
                {/* Chữ */}
                <span className="relative z-10">{item.name}</span>

                {/* Đường gạch chân hiển thị khi HOVER hoặc đang ACTIVE */}
                {(isHovered || (isActive && !hoveredPath)) && (
                  <span 
                    className="absolute inset-x-1 bottom-0 h-[2.5px] bg-[#0077b6] rounded-full transition-all duration-300 ease-out"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Bên phải: Nút Connect */}
        <div>
          <a
            href="https://linkedin.com/in/damvunam"
            target="_blank"
            rel="noreferrer"
            className="bg-[#006699] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#023e63] hover:shadow-md active:scale-95 transition-all duration-200 inline-block"
          >
            Connect
          </a>
        </div>

      </div>
    </header>
  );
}