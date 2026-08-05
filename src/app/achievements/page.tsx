import Navbar from "@/components/Navbar";

export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-[#f4f8fb]">
      <Navbar />
      <main className="max-w-4xl mx-auto p-8 mt-10">
        <h1 className="text-3xl font-extrabold text-[#023e63]">Achievements</h1>
        <p className="mt-4 text-slate-600">Nội dung về Các thành tựu sẽ nằm ở đây.</p>
      </main>
    </div>
  );
}