import './builder.css';

export default function BuilderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="font-sans antialiased text-[#1A1A1A] bg-white">
      {children}
    </div>
  );
}
