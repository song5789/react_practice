import "./NewsCategories.css";

const categories = [
  {
    name: "all",
    text: "전체보기",
  },
  {
    name: "business",
    text: "경제",
  },
  {
    name: "entertainment",
    text: "연예",
  },
  {
    name: "general",
    text: "일반",
  },
  {
    name: "health",
    text: "건강",
  },
  {
    name: "science",
    text: "과학",
  },
  {
    name: "sports",
    text: "스포츠",
  },
  {
    name: "technology",
    text: "기술",
  },
];

function NewCategories({ category, onSelect }) {
  return (
    <div className="cb">
      {categories.map((c) => (
        <div key={c.name} onClick={() => onSelect(c.name)} className={category === c.name ? "active" : ""}>
          {c.text}
        </div>
      ))}
    </div>
  );
}

export default NewCategories;
