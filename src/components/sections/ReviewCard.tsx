import { renderStars } from "@/lib/utils";

interface ReviewCardProps {
  name: string;
  location: string;
  jobType: string;
  rating: number;
  date: string;
  text: string;
  image?: string;
}

export default function ReviewCard({
  name,
  location,
  jobType,
  rating,
  date,
  text,
  image,
}: ReviewCardProps) {
  return (
    <article className="card p-6 sm:p-8" itemScope itemType="https://schema.org/Review">
      <meta itemProp="reviewRating" content={String(rating)} />
      <div className="flex items-start gap-4">
        {/* Avatar placeholder */}
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-700">
          {name
            .split(" ")[0]
            .charAt(0)
            .toUpperCase()}
        </div>

        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-base font-semibold text-gray-900" itemProp="author">
              {name}
            </h3>
            <span className="text-xs text-gray-400">•</span>
            <span className="text-sm text-gray-500">{location}</span>
          </div>

          <div className="mt-1 flex items-center gap-2">
            <span className="text-brand-500" aria-label={`${rating} out of 5 stars`}>
              {renderStars(rating)}
            </span>
            <span className="rounded bg-brand-50 px-2 py-0.5 text-xs font-medium text-brand-700">
              {jobType}
            </span>
          </div>

          <p className="mt-3 text-sm leading-relaxed text-gray-600">{text}</p>

          <div className="mt-4 flex items-center gap-3">
            {image && (
              <img
                src={image}
                alt={`${jobType} project for ${name}`}
                className="h-16 w-16 rounded-lg object-cover"
                loading="lazy"
              />
            )}
            <time dateTime={date} className="text-xs text-gray-400">
              {new Date(date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
          </div>
        </div>
      </div>
    </article>
  );
}
