export function Lights(): JSX.Element {
  return (
    <>
      <ambientLight intensity={1} />
      <pointLight intensity={5} position={[1, 1, 1]} />
    </>
  );
}
