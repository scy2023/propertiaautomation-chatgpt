export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-lg font-semibold tracking-wide">
          Propertia Automation
        </span>
        <span className="text-sm opacity-70">AI Systems</span>
      </div>
    </nav>
  );
}
