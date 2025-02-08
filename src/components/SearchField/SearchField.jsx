import styles from "./SearchField.module.css";

const SearchField = ({ searchTerm, setSearchTerm }) => {
  
  return (
    <div className={styles.wrapper}>
      <input
        placeholder="Filter dishes..."
        type="text"     
      />
    </div>
  );
};

export default SearchField;


