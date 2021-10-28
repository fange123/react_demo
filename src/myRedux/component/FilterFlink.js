// @ts-nocheck
import { connect } from "react-redux";
import { setVisibilityFilter } from "../store/actions";
import Link from "./Link";

const mapStateToProps = (state, props) => {
  return {
    active: props.filter === state.visibilityFilter,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(props));
    },
  };
};

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);

export default FilterLink;
