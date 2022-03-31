export default function LayoutLayout({header, children, footer}) {
  return (
    <div className="min-h-screen max-w-screen text-gray-700 font-sans">
      {header}
      <main role="main" id="mainContent" className="relative bg-gray-50">
        <div className="mx-auto max-w-7xl p-4 md:py-5 md:px-8">{children}</div>
      </main>
      {footer}
    </div>
  );
}
