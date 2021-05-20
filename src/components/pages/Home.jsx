import React, {useState, useEffect} from "react";
import propTypes from "prop-types";
import axios from "axios";
import List from "../List";

List.propTypes = { list: propTypes.array.isRequired }

export default function Home ({addToCart}) {
    const [list, setList] = useState([]);

    useEffect(() => {
        axios.get("/items").then(res => setList(res.data));
    }, []);

    return <List ajax={true} list={list} addToCart={addToCart} />
}