interface IconProps {
  size: number;
}
export default function UnsplashIcon(props: IconProps) {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" width={props.size} height={props.size} viewBox="0 0 448 512" fill="currentColor"><path d="M448 230.2V480H0V230.2H141.1V355.1H306.9V230.2zM306.9 32H141.1V156.9H306.9z"/></svg>
  );
}
