type Joke = {
    setup: string;
    punchline: string;
};

type Props = {
    joke: Joke | null;
    loading: boolean;
};

export const JokeCard = ({ joke, loading }: Props) => {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md mb-4 transition-colors duration-300">
            {loading && <p>Loading joke...</p>}

            {!loading && joke && (
                <>
                    <p className="font-semibold mb-2">{joke.setup}</p>
                    <p className="text-gray-600 dark:text-gray-300">{joke.punchline}</p>
                </>
            )}
        </div>
    );
};
