type Joke = {
    setup: string;
    punchline: string;
}

type JokeCardProps = {
    joke: Joke | null;
    loading: boolean;
}

export const JokeCard = ({ joke, loading }: JokeCardProps) => {
    return (
        <div className="bg-white rounded-xl p-6 shadow-md mb-4">
            {loading && <p>Loading...</p>}

            {!loading && joke && (
                <>
                    <p className="font-semibold mb-2">{joke.setup}</p>
                    <p className="text-gray-600">{joke.punchline}</p>
                </>
            )}
        </div>
    )
}