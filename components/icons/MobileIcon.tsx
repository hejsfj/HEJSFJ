interface IconProps {
    size: number;
}
export default function MobileIcon(props: IconProps) {

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={props.size} height={props.size} viewBox="0 0 384 512" fill="currentColor">
            <path d="M80 0C44.7 0 16 28.7 16 64V448c0 35.3 28.7 64 64 64H304c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H80zm80 432h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/>
        </svg>
    );
}