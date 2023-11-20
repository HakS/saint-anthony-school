import Link from "next/link";

export default function Button({text} : {text: string}) {
  return <Link href="/" className="text-lg inline-block text-center drop-shadow-md rounded-md bg-amber-500 hover:bg-amber-600 transition-colors text-white self-start px-4 py-3">{text}</Link>
}
