import { useEffect, useState } from "react";
import { JokeCard } from "./component/JokeCard/JokeCard";
import { JokeButton } from "./component/JokeButton/JokeButton";
import { CategorySelect } from "./component/Category/CategorySelect";

type Joke = {
  setup: string;
  punchline: string;
};

function App() {
  const [joke, setJoke] = useState<Joke | null>(null);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("");

  const fetchJoke = async () => {
    setLoading(true);

    const url = category
      ? `https://official-joke-api.appspot.com/jokes/${category}/random`
      : "https://official-joke-api.appspot.com/jokes/random";

    const res = await fetch(url);
    const data = await res.json();

    setJoke(Array.isArray(data) ? data[0] : data);
    setLoading(false);
  };

  useEffect(() => {
    fetchJoke();
  }, [category]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">Joke App</h1>

        <CategorySelect
          category={category}
          setCategory={setCategory}
        />

        <JokeCard joke={joke} loading={loading} />
        <JokeButton onClick={fetchJoke} />
      </div>
    </div>
  );
}

export default App;
