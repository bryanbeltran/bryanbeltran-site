import Link from "next/link";

export default function Featured() {
  return (
    <section
      id="featured"
      className="scroll-mt-20 max-w-2xl mx-auto px-4 pt-20 space-y-4"
    >
      <h2 className="text-2xl font-semibold tracking-tight">
        🛠️ Featured Project
      </h2>
      <div className="border rounded-lg p-4 shadow-sm">
        <h3 className="text-lg font-semibold">ParaPlanner</h3>
        <p className="text-muted-foreground text-sm mt-1">
          A scheduling tool to help SPED educators coordinate para availability.
        </p>
        <Link
          href="/projects#paraplanner"
          className="inline-block mt-2 text-primary hover:underline text-sm"
        >
          Learn more →
        </Link>
      </div>
    </section>
  );
}
