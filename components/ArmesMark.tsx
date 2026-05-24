import Image from "next/image";

interface ArmesMarkProps {
  size?: number;
  className?: string;
}

/**
 * ARMES CI 로고 마크 컴포넌트
 * 흰색 배경 PNG를 filter: invert(1)로 어두운 배경에서 흰색으로 표시
 * object-position: center top 으로 A+링 마크 부분만 크롭
 */
export default function ArmesMark({ size = 32, className = "" }: ArmesMarkProps) {
  return (
    <div
      className={`rounded-xl overflow-hidden flex-shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src="/armes-logo.png"
        alt="ARMES"
        width={size * 4}
        height={size * 4}
        className="w-full h-full object-cover"
        style={{
          objectPosition: "center 12%",
          filter: "invert(1)",
        }}
        priority
      />
    </div>
  );
}
