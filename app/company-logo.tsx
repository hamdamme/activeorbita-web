import Image from "next/image";

/** Display the mark from the supplied lockup without modifying the artwork. */
export default function CompanyLogo({ priority = false }: { priority?: boolean }) {
  return (
    <span className="block h-12 w-12 shrink-0 overflow-hidden bg-white" aria-hidden="true">
      <Image
        src="/images/brand/active-orbit-original.png"
        alt=""
        width={2975}
        height={802}
        sizes="180px"
        preload={priority}
        className="h-full w-auto max-w-none"
      />
    </span>
  );
}
