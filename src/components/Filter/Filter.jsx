import style from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter, getFilter } from "redux/contactsSlice";

const Filter = () => {

    const dispatch = useDispatch();
    const filterValue = useSelector(getFilter);
    return (
        <label  >
            <p className={style.filter_label}> Find Contact by name</p>

            <input className={style.filter_input}
                type="text"
                value={filterValue}
                onChange={e => dispatch(changeFilter(e.currentTarget.value))}
            />
        </label >
    )
};

export default Filter;