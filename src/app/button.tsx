import Link from "next/link";

export default function Button({text} : {text: string}) {
  return <Link href="/" className="text-xl drop-shadow-md rounded-md bg-amber-500 text-white self-start px-4 py-3">{text}</Link>
}
