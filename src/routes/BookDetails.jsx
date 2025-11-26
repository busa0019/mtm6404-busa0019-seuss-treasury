import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export const BookDetails = () => {
    const [book, setBook] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://seussology.info/api/books/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setBook(data);
                setIsLoading(false);
            });
    }, [id]);
    
    if (isLoading) {
        return (
            <div className="page-container">
                <div className="loading-animation">
                    <div className="book-spinner">📖</div>
                    <h2>Opening the Storybook...</h2>
                </div>
            </div>
        )
    }

    return (
        <div className="page-container">
            <div className="navigation-section">
                <Link to="/" className="back-button">
                    <span className="back-arrow">←</span>
                    Back to Collection
                </Link>
            </div>

            {book && (
                <div className="book-details-layout">
                    <div className="book-visual-section">
                        <div className="book-cover-frame">
                            <img
                                src={book.image}
                                alt={`Cover of ${book.title}`}
                                className="featured-book-cover"
                            />
                            <div className="cover-shadow"></div>
                        </div>
                    </div>
                    
                    <div className="book-content-section">
                        <div className="book-header">
                            <h1 className="book-main-title">{book.title}</h1>
                            <div className="title-underline"></div>
                        </div>
                        
                        <div className="story-description">
                            <h3 className="description-title">
                                <span className="title-icon">📝</span>
                                About This Magical Story
                            </h3>
                            <div className="description-text">
                                <p>{book.description}</p>
                            </div>
                        </div>
                        
                        <div className="action-buttons">
                            <Link to="/" className="action-button secondary">
                                ← Back to All Books
                            </Link>
                            <Link to="/quotes" className="action-button primary">
                                Read Quotes →
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};