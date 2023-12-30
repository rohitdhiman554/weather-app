import clsx from "clsx";

const Loader = ({ variant = "primary", size = "medium" }) => {
    return (
        <div
            className={clsx(
                "block animate-spin rounded-full border-2",
                variant === "primary"
                    ? "border-white border-t-black"
                    : "border-secondary/30 border-t-secondary",
                variant === "secondary"
                    ? "border-black  border-t-white"
                    : "border-secondary/30 border-t-secondary",
                size === "large"
                    ? "h-10 w-10 border-4"
                    : size === "medium"
                        ? "h-5 w-5"
                        : "h-4 w-4"
            )}
        />
    );
};

export default Loader
