export default function Content({page}) {
  const {title, body} = page;
  return (
    <div className="max-w-[704px] mx-auto">
      <h1 className="font-bold text-2xl md:text-3xl">{title}</h1>
      <div className="mt-10">
        <div
          dangerouslySetInnerHTML={{__html: body}}
          className="prose max-w-none"
        />
      </div>
    </div>
  );
}
