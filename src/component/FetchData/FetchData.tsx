import { useEffect, useState } from "react";

interface JokeType {
    id: number;
    type: string;
    setup: string;
    punchline: string;
}

export const FetchData = () => {


    const [Joke, setJoke] = useState<JokeType | null>(null);

    useEffect(() => {
        const JokeUrl = 'https://official-joke-api.appspot.com/jokes/random';

        const fetchJoke = async () => {
            const res = await fetch(JokeUrl);
            const data = await res.json();
            setJoke(data);
        }
        fetchJoke();
    }, []);


    return (

        <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
            <h2 className="text-xl font-semibold mb-4">Here's a Random Joke for You!</h2>
            {
                Joke && (
                    <div>
                        <p className="mb-2"><strong>Setup:</strong> {Joke.setup}</p>
                        <p><strong>Punchline:</strong> {Joke.punchline}</p>
                    </div>
                )
            }

        </div>

    )
}