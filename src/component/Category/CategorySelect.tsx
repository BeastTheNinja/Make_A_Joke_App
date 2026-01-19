type Props = {
    category: string;
    setCategory: (value: string) => void;
};

export const CategorySelect = ({ category, setCategory }: Props) => {
    return (
        <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mb-4 p-2 rounded border w-full"
        >
            <option value="">Random</option>
            <option value="general">General</option>
            <option value="programming">Programming</option>
            <option value="knock-knock">Knock knock</option>
        </select>
    );
};
