export default function Link({ link }: { link: any }) {
  return (
    <>
      {link && link.type === "file" ? (
        <a
          href={link.file.asset.url}
          target="_blank"
          className="mt-4 pill btn btn-external"
        >
          {link.title ?? "Learn more"}
          <span />
        </a>
      ) : null}
    </>
  );
}
