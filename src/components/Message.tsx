interface MessageProps {
  text: string;
}

export default function Message({ text }: MessageProps) {
  return (
    <>
      <h2>Яка сьогодні погода?</h2>
      <p>{text}</p>
    </>
  );
}
