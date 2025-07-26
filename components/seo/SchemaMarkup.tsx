import Head from "next/head";

interface SchemaMarkupProps {
  schema: object | object[];
  key?: string;
}

export default function SchemaMarkup({
  schema,
  key = "schema",
}: SchemaMarkupProps) {
  const schemaArray = Array.isArray(schema) ? schema : [schema];

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            schemaArray.length === 1 ? schemaArray[0] : schemaArray
          ),
        }}
        key={`schema-${key}`}
      />
    </Head>
  );
}
