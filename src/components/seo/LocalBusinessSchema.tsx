import { getLocalBusinessSchema } from "@/lib/schema";

interface LocalBusinessSchemaProps {
  pageType?: string;
  extraSchema?: object[];
}

export default function LocalBusinessSchema({
  pageType = "Organization",
  extraSchema = [],
}: LocalBusinessSchemaProps) {
  const businessSchema = getLocalBusinessSchema();

  const schemas = [businessSchema, ...extraSchema];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(
          schemas.length === 1 ? schemas[0] : schemas,
          null,
          0
        ),
      }}
    />
  );
}
