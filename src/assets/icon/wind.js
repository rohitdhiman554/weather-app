function Wind(props) {
    return (
        <svg
            width={props.width || "800px"}
            height={props.height || "800px"}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M15.764 7A3 3 0 1118 12H3m5.51-7.333A2 2 0 1110 8H3m8.51 11.333A2 2 0 1013 16H3"
                stroke="#000"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}
export default Wind
