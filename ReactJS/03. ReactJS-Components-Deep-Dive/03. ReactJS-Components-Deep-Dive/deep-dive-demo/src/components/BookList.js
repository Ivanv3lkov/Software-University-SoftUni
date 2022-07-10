import { useEffect } from "react";
import { Book } from "./Book";

export const BookList = (props) => {
    return (
        <ul>
            {props.books.map((x, i) => <Book key={i} {...x} />)}
        </ul>
    );
}
