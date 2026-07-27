import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Bắt buộc để Next.js xuất ra HTML tĩnh chạy trên GitHub Pages
  images: {
    unoptimized: true, // Tránh lỗi tối ưu ảnh tĩnh trên GitHub Pages
  },
};

export default nextConfig;