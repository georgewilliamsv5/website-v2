/**
 * @copyright 2025 George Lloyd Williams V
 * @license Apache-2.0
 */

type ReferenceCardProps = {
  content: string;
  imgSrc: string;
  name: string;
  company: string;
  linkedInUrl: string;
};

const ratings = new Array(5);
ratings.fill({
  icon: "star",
  style: { fontVariationSettings: '"FILL" 1' },
});

const ReferenceCard = ({
  content,
  imgSrc,
  name,
  company,
  linkedInUrl,
}: ReferenceCardProps) => {
  return (
    <div className="bg-zinc-800 p-5 rounded-xl min-w-[320px] flex flex-col lg:min-w-[420px]">
      <div className="flex items-center gap-1 mb-3">
        {ratings.map(({ icon, style }, key) => (
          <span
            key={key}
            className="material-symbols-rounded text-yellow-300 text-[18px]"
            style={style}
          >
            {icon}
          </span>
        ))}
      </div>

      <p className="text-zinc-400 mb-8">{content}</p>

      <div className="flex items-center gap-2 mt-auto">
        <figure className="w-48 h-48 rounded-lg overflow-hidden bg-zinc-700 shrink-0">
          <img
            src={imgSrc}
            alt={name}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </figure>

        <div>
          <a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline"
          >
            {name}
          </a>

          <p className="text-xs text-zinc-400 tracking-wider">{company}</p>
        </div>
      </div>
    </div>
  );
};

export default ReferenceCard;
