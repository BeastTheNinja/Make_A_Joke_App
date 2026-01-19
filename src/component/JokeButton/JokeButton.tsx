type Props = {
    onClick: () => void;
};

export const JokeButton = ({ onClick }: Props) => {
    return (
        <button
            onClick={onClick}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md transition-colors duration-200"
        >
            Hent ny joke
        </button>
    );
};
