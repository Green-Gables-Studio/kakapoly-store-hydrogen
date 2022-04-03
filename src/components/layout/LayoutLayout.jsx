export default function LayoutLayout({header, children, footer}) {
  return (
    <div className="min-h-screen max-w-screen text-gray-700 font-sans">
      {header}
      <main role="main" id="mainContent" className="relative bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8 py-10">
          {children}
        </div>
      </main>
      {footer}
    </div>
  );
}
