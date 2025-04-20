import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { useId } from "react";
import { contactFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";
console.log(selectNameFilter);

export default function SearchBox() {
  const value = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  const id = useId();

  const onFilter = (val) => {
    dispatch(contactFilter(val));
  };

  return (
    <div className={css.box}>
      <label htmlFor={id}>Find contacts by name</label>

      <input
        className={css.input}
        value={value}
        type="text"
        name="filter"
        id={id}
        onChange={(event) => onFilter(event.target.value)}
      />
    </div>
  );
}
