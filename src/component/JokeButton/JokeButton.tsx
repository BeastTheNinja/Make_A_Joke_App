type Props = {
    onClick: () => void;
};

export const JokeButton = ({ onClick }: Props) => {
    return (
        <button
            onClick={onClick}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg"
        >
            Hent ny joke
        </button>
    );
};
