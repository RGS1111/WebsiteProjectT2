interface ReviewCardProps {
  name: string;
  location: string;
  jobType: string;
  rating: number;
  date: string;
  text: string;
  image?: string;
}

/** Returns initials for a first + last name string */
function initials(name: string): string {
  const parts = name.split(" ");
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }
  return parts[0][0]?.toUpperCase() ?? "?";
}

/** Deterministic background hue from name string (avoids layout shift on rerender) */
function avatarHue(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return `hsl(${((hash % 24) + 24) % 24 * 15}, 55%, 92%)`;
}

function avatarTextColor(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return `hsl(${((hash % 24) + 24) % 24 * 15}, 40%, 30%)`;
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
  const formattedDate = new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <article
      className="group relative rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_8px_30px_-6px_rgba(0,0,0,0.08)] hover:border-gray-200 sm:p-7"
      itemScope
      itemType="https://schema.org/Review"
    >
      <meta itemProp="reviewRating" content={String(rating)} />

      {/* Decorative quote mark */}
      <svg
        className="absolute right-5 top-5 h-8 w-8 text-gray-100 sm:h-10 sm:w-10"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C9.175 11.69 11 13.232 11 15.204 11 17.383 9.313 19 7.146 19c-1.09 0-1.955-.515-2.563-1.679zm9.711 0C13.223 16.227 12.67 15 12.67 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C18.845 11.69 20.67 13.232 20.67 15.204c0 2.179-1.687 3.796-3.854 3.796-1.09 0-1.955-.515-2.563-1.679z" />
      </svg>

      {/* Header: avatar + name + location */}
      <div className="flex items-center gap-4">
        {/* Avatar */}
        {image ? (
          <img
            src={image}
            alt={`${name} review`}
            className="h-12 w-12 rounded-full object-cover ring-2 ring-white shadow-sm"
            loading="lazy"
          />
        ) : (
          <div
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-bold ring-2 ring-white shadow-sm"
            style={{
              backgroundColor: avatarHue(name),
              color: avatarTextColor(name),
            }}
          >
            {initials(name)}
          </div>
        )}

        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
            <h3 className="text-base font-semibold text-gray-900" itemProp="author">
              {name}
            </h3>
            <span className="hidden sm:inline text-gray-500">·</span>
            <span className="text-sm text-gray-600 truncate">{location}</span>
          </div>

          {/* Star row */}
          <div className="mt-1 flex items-center gap-1.5">
            <div className="flex" aria-label={`${rating} out of 5 stars`} role="img">
              {Array.from({ length: 5 }, (_, i) => (
                <svg
                  key={i}
                  className={`h-4 w-4 ${i < Math.floor(rating) ? "text-amber-400" : "text-gray-200"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="rounded-full bg-amber-50 px-2 py-0.5 text-[11px] font-semibold text-amber-700">
              {jobType}
            </span>
          </div>
        </div>
      </div>

      {/* Review body */}
      <p className="mt-5 text-sm leading-relaxed text-gray-600 sm:text-[15px]">
        &ldquo;{text}&rdquo;
      </p>

      {/* Footer meta */}
      <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-gray-600">
        <time dateTime={date}>{formattedDate}</time>
        <span className="inline-flex items-center gap-1 rounded-full border border-green-200 bg-green-50 px-2.5 py-0.5 text-[11px] font-medium text-green-700">
          <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
          Verified Review
        </span>
      </div>
    </article>
  );
}
