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
            className={`bg-blue-500 text-white mulish-bold rounded-full hover:bg-blue-700 px-7 py-3 transition duration-300 ease-in-out ${className}`}
        >
            {children}
        </button>
    )
}