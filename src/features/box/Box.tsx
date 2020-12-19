export function Box(): JSX.Element {
  return (
    <mesh>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
}
