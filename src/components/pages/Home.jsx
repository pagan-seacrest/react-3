import React, {useState, useEffect} from "react";
import axios from "axios";
import List from "../List";

export default function Home () {
    const [list, setList] = useState([]);

    useEffect(() => {
        axios.get("/items").then(res => setList(res.data));
    }, []);

    return (
        <>
        <List list={list} />
        </>
    )
}