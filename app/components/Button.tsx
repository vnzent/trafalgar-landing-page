"use client";

type ButtonProps = {
    children: React.ReactNode;
    onClick: () => void;
    className?: string;
};

export default function Button({ children, onClick, className }: ButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`rounded-full px-7 py-3 lg:px-14 lg:py-4 transition duration-300 ease-in-out ${className}`}
        >
            {children}
        </button>
    )
}