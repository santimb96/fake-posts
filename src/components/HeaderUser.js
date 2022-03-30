import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

const HeaderUser = (props) => {

    useEffect(()=> {
         props.dispatch(fetchUser(props.userId));
    }, []);

    const render = props.user.id === props.userId ? <h1>{props.user.name}</h1> : <p>no hay!</p>;
    console.log(props.user.id, props.userId );
    return (
        <div>
            {render}
        </div>
    )
}

const getUser = (state) => {
    return { user: state.userList }
}

export default connect(getUser)(HeaderUser)