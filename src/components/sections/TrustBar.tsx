import { globalUI, companyDetails } from "@/config/site-config";
import { getIcon } from "@/components/ui/Icons";

export default function TrustBar() {
  const { trustBar } = globalUI;
  const regionsShort = companyDetails.regionsCovered.slice(0, 3).join(", ");

  return (
    <section className="bg-gray-900 py-4 sm:py-5" aria-label="Trust signals">
      <div className="section-container">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 sm:gap-x-8 lg:gap-x-12">
          {trustBar.items.map((item) => {
            const Icon = getIcon(item.icon);
            return (
              <div
                key={item.icon}
                className="flex items-center gap-2 text-sm font-medium text-gray-200"
              >
                {Icon && <Icon className="h-4 w-4 text-brand-400" aria-hidden="true" />}
                <span>
                  {item.text === "Covering Nottingham & Surrounding Areas"
                    ? `Covering ${regionsShort}`
                    : item.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
