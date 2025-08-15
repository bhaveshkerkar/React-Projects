import styles from "./Item.module.css";

const Item = ({ foodItems, bought, handleBuyButton }) => {
  return (
    <li
      className={`${styles["bk-item"]} list-group-item ${bought && "active"}`}
    >
      <span className={styles["bk-span"]}>{foodItems}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
