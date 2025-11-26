import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const BookCollection = () => {
    const [books, setBooks] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        fetch('https://seussology.info/api/books')
            .then(response => response.json())
            .then(data => {
                setBooks(data)
                setIsLoading(false)
            });
    }, []);

    if (isLoading) {
        return (
            <div className="page-container">
                <div className="loading-animation">
                    <div className="book-spinner">📚</div>
                    <h2>Loading Magical Stories...</h2>
                </div>
            </div>
        )
    }

    return (
        <div className="page-container">
            <div className="hero-section">
                <h2 className="section-title">Explore the Wonderful World of Dr. Seuss</h2>
                <p className="section-subtitle">Click on any book to dive into its magical story</p>
            </div>
            
            <div className="books-showcase">
                {books.map(book => (
                    <div key={book.id} className="book-card">
                        <Link to={`/book/${book.id}`} className="book-card-link">
                            <div className="book-image-container">
                                <img 
                                    src={book.image} 
                                    alt={`Cover of ${book.title}`} 
                                    className="book-cover-image"
                                />
                                <div className="book-overlay">
                                    <span className="view-details">View Details →</span>
                                </div>
                            </div>
                            <div className="book-info">
                                <h3 className="book-title">{book.title}</h3>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}