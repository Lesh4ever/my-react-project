interface HelloUserProps {
  name: string;
}

export default function HelloUser({ name }: HelloUserProps) {
  return <h2>Привіт, {name}! </h2>;
}
