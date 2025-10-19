import Image from "next/image"

// ロゴ------------------------
export default function Logo() {
  return (
    <div className="p-0 m-0">
      <Image
        src="/takoyaki-logo.png"
        alt="takoyaki-logo"
        width={120}
        height={30}
        className="block my-1"
      />
    </div>
  )
}

