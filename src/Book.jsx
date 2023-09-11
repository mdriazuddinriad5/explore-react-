import './Book.css';

export default function Book({book}){
    return (
        <div className="book"> 
            <h3>Book name: {book.name}</h3>
            <p>Price: {book.price}</p>
        </div>
    )
}