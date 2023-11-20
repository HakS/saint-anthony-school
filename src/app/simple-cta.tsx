import Button from "./button";

export default function SimpleCTA({header, body, cta}: {header: string, body: string, cta: string}) {
  return (
    <div className="flex flex-col gap-10">
      <div className="text-4xl font-bold">{header}</div>
      <div className="text-xl">{body}</div>
      <Button text={cta} />
    </div>
  )
}
