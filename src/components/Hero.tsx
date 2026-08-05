"use client";

import Image from "next/image";
import { FiDownload } from "react-icons/fi";

export default function Hero() {
  return (
    <section id="home" className="max-w-7xl mx-auto px-6 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        
        {/* Cột bên trái: Thông tin giới thiệu */}
        <div className="md:col-span-7 space-y-6">
          {/* Subtitle / Role */}
          <span className="text-xs font-bold uppercase tracking-widest text-sky-600">
            AI Engineer & Researcher
          </span>

          {/* Headline lớn */}
          <h1 className="text-4xl md:text-5xl font-black text-[#0a2540] leading-tight">
            I'm <span className="text-[#023e63]">Vu-Nam Dam.</span> <br />
            <span className="text-sky-600">
              Advancing Multimodal Intelligence.
            </span>
          </h1>

          {/* Các dòng mô tả bản thân */}
          <div className="space-y-3 text-slate-600 text-base md:text-lg leading-relaxed">
            <p>
              Biological Engineer & Researcher focusing on Microbiology and Genomics.
            </p>
            <p>
              B.S. in Computer Science, VNU University of Engineering and Technology (VNU-UET).
            </p>
            <p>
              Specializing in Agentic Systems, GraphRAG, and On-Device SLM.
            </p>
            <p>
              Researching Multimodal Learning for Healthcare AI.
            </p>
          </div>

          {/* Các nút hành động (Call to Action) */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#experience"
              className="bg-[#006699] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#023e63] transition shadow-md"
            >
              View Experience
            </a>

            <a
              href="/cv.pdf"
              target="_blank"
              rel="noreferrer"
              className="bg-[#e0a93b] text-[#0a2540] px-6 py-3 rounded-xl font-semibold hover:bg-[#d0982b] transition shadow-md flex items-center gap-2"
            >
              Get CV <FiDownload size={18} />
            </a>

            <a
              href="#projects"
              className="bg-sky-50 text-[#006699] px-6 py-3 rounded-xl font-semibold hover:bg-sky-100 transition border border-sky-100"
            >
              Projects
            </a>
          </div>
        </div>

        {/* Cột bên phải: Ảnh đại diện bo góc khéo léo */}
        <div className="md:col-span-5 flex justify-center md:justify-end">
          <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 bg-slate-200">
            <Image
              src="/avatar.jpg" // File ảnh đặt trong thư mục public/
              alt="Vu-Nam Dam"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}