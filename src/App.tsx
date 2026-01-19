import { useEffect, useState } from "react";
import { JokeCard } from "./component/JokeCard/JokeCard";
import { JokeButton } from "./component/JokeButton/JokeButton";
import { CategorySelect } from "./component/Category/CategorySelect";

// TypeScript type for en joke
type Joke = {
  setup: string;
  punchline: string;
};

function App() {
  // State til at gemme joke
  const [joke, setJoke] = useState<Joke | null>(null);
  // State til loading-indikator
  const [loading, setLoading] = useState(false);
  // State til valgt kategori
  const [category, setCategory] = useState("");
  // State til dark/light mode
  const [darkMode, setDarkMode] = useState(false);

  // Funktion til at hente en joke fra API
  const handleNewJoke = async () => {
    setLoading(true); // viser loader mens vi henter

    const url = category
      ? `https://official-joke-api.appspot.com/jokes/${category}/random` // kategori-specifik
      : "https://official-joke-api.appspot.com/jokes/random"; // random joke

    const res = await fetch(url);
    const data = await res.json();

    // Kategori-endpoint returnerer array, random endpoint returnerer objekt
    setJoke(Array.isArray(data) ? data[0] : data);
    setLoading(false);
  };

  // useEffect kører, når appen loader eller når kategori ændres
  useEffect(() => {
    handleNewJoke();
  }, [category]);

  return (
    // Root div, darkMode bestemmer om Tailwind dark-mode klasser aktiveres
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen flex items-center justify-center px-4
        bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300"
      >
        <div className="w-full max-w-md text-center">

          {/* Dark/Light mode toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="mb-4 text-sm underline"
          >
            Skift til {darkMode ? "Light" : "Dark"} mode
          </button>

          <h1 className="text-2xl font-bold mb-4">Joke App</h1>

          {/* Kategori dropdown */}
          <CategorySelect
            category={category}
            setCategory={setCategory}
          />

          {/* Viser joke */}
          <JokeCard joke={joke} loading={loading} />

          {/* Knap til ny joke */}
          <JokeButton onClick={handleNewJoke} />
        </div>
      </div>
    </div>
  );
}

export default App;
