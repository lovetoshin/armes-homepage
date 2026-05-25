import Image from "next/image";

interface ArmesMarkProps {
  size?: number;
  className?: string;
  invert?: boolean; // true = 어두운 배경, false = 밝은 배경(기본)
}

export default function ArmesMark({ size = 32, className = "", invert = false }: ArmesMarkProps) {
  return (
    <div
      className={`rounded-xl overflow-hidden flex-shrink-0 self-center ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src="/armes-logo.png"
        alt="ARMES"
        width={size * 4}
        height={size * 4}
        className="w-full h-full object-cover"
        style={{
          objectPosition: "center 35%",
          filter: invert ? "invert(1)" : "none",
        }}
        priority
      />
    </div>
  );
}
