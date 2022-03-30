import fakePosts from "../apis/fakePosts";
import axios from "axios";
import _ from "lodash";

export const fetchPostAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPost())
  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .value()
    .forEach(id => dispatch(fetchUser(id)))
   }

export const fetchPost = () => async (dispatch) => {
  const response = await fetch(fakePosts.baseUriPosts);
  const data = await response.json();

  dispatch({ type: "FETCH_POSTS", payload: data });
};

export const fetchUser = (id) => async (dispatch) => {
    const response = await axios.get(fakePosts.baseUriUsers+'/'+id); //fakePosts.baseUriUsers + '/' + id;
    //const data = await response.json();
    console.log(response);

    dispatch({type: "FETCH_USERS", payload: response.data})
}
