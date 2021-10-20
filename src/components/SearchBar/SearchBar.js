// import { useState } from "react";
// import { ImSearch } from "react-icons/im";
// import s from "./SearchBar.module.css";

// function Searchbar({ onSubmit }) {
//   const [searchQuery, setSearchQuery] = useState("");
//   //записываем в state запрос
//   const hundleChange = (event) => {
//     event.preventDefault();
//     setSearchQuery(event.currentTarget.value.toLowerCase());
//   };
//   //делаем проверку на пустоту запроса, передаем значение state в Арр и чистим state
//   const hundleSubmit = (event) => {
//     event.preventDefault();
//     if (searchQuery.trim() === "") {
//       alert("Input query");
//       return;
//     }
//     onSubmit(searchQuery);
//     setSearchQuery("");
//   };
//   return (
//     <header className={s.searchBar}>
//       <form className={s.searchForm} onSubmit={hundleSubmit}>
//         <button type="submit" className={s.searchFormButton}>
//           <span className={s.searchFormButtonLabel}>
//             <ImSearch />
//             Search
//           </span>
//         </button>

//         <input
//           className={s.searchFormInput}
//           value={searchQuery}
//           type="text"
//           autoComplete="off"
//           autoFocus
//           placeholder="Search images and photos"
//           onChange={hundleChange}
//         />
//       </form>
//     </header>
//   );
// }

// export default Searchbar;

import PropTypes from "prop-types";

import { useState } from "react";
import { toast } from "react-toastify";

import s from "./SearchBar.module.css";

export default function Searchbar({ onSubmit }) {
  const [searchValue, setSearchValue] = useState("");
  const hundleChange = (event) => {
    event.preventDefault();
    setSearchValue(event.currentTarget.value);
  };

  const hundleSubmit = (event) => {
    event.preventDefault();
    if (searchValue.trim() === "") {
      return toast.error("Enter the names of the pictures");
    }
    onSubmit(searchValue);
    setSearchValue("");
  };

  return (
    <header className={s.searchbar}>
      <form onSubmit={hundleSubmit} className={s.searchForm}>
        <button type="submit" className={s.searchForm_button}>
          <span className={s.searchForm_button_label}>Search</span>
        </button>

        <input
          className={s.searchForm_input}
          type="text"
          value={searchValue}
          onChange={hundleChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  Searchbar: PropTypes.func,
};
