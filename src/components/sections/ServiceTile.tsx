import Link from "next/link";
import { getIcon } from "@/components/ui/Icons";

interface ServiceTileProps {
  icon: string;
  title: string;
  description: string;
  image: string;
  anchor: string;
}

export default function ServiceTile({ icon, title, description, image, anchor }: ServiceTileProps) {
  const Icon = getIcon(icon);

  return (
    <Link href={anchor} className="card group flex flex-col">
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden bg-gray-200">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-900 backdrop-blur-sm">
          {Icon && <Icon className="h-3.5 w-3.5 text-brand-600" />}
          {title}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-brand-600 transition-colors">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-gray-600">{description}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 group-hover:gap-2 transition-all">
          Learn more
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
