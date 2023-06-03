import { useState } from "react";
import "./App.css";
import Item from "./components/Item/Item";
import Search from "./components/Search/Search";

function App() {
  const response = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
  ];

  const [filter, setFilter] = useState(response);
  function onFilter(event) {
    const searchText = event.target.value.toLowerCase();
    const s1 = event.target.value.toUpperCase();

    let newData = [];

    response.forEach((data) => {
      if (data?.name.includes(searchText) || data?.name.includes(s1)) {
        newData.push(data);
      }
    });
    console.log(newData);

    setFilter(newData);
  }

  function onClick(event) {
    const val = event.target.checked;
    if (val) {
      const dd = response?.filter((data) => data.stocked);
      console.log("DD ", dd);
      setFilter(dd);
    } else {
      setFilter(response);
    }
  }

  return (
    <>
      <div className="container">
        <Search onFilter={onFilter} onClick={onClick} />
        <Item filter={filter} />
      </div>
    </>
  );
}

export default App;
