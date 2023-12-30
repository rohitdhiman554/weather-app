function Wind(props) {
    return (
        <svg
            width={props.width || 800}
            height={props.height || 800}
            viewBox="0 0 800 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M525.463 233.333C543.773 212.875 570.383 200 600 200c55.23 0 100 44.772 100 100 0 55.23-44.77 100-100 100H100m183.642-244.444c12.207-13.639 29.947-22.223 49.691-22.223 36.82 0 66.667 29.848 66.667 66.667s-29.847 66.667-66.667 66.667H100m283.643 377.776c12.207 13.64 29.947 22.224 49.69 22.224C470.153 666.667 500 636.82 500 600s-29.847-66.667-66.667-66.667H100"
                stroke="#98A2B3"
                strokeWidth={66.6667}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}
export default Wind
