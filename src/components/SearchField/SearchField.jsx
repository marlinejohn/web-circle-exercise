import styles from "./SearchField.module.css";

const SearchField = ({ searchTerm, setSearchTerm }) => {
  
  return (
    <div className={styles.wrapper}>
      <input
        placeholder="Filter dishes..."
        type="text"  
        onChange={(e) => setSearchTerm(e.target.value)}   
      />
    </div>
  );
};

export default SearchField;


