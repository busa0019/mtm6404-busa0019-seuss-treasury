import { useEffect, useState } from "react"

export const InspirationalQuotes = () => {
    const [quotes, setQuotes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        fetch('https://seussology.info/api/quotes/random/10')
            .then(response => response.json())
            .then(data => {
                setQuotes(data);
                setIsLoading(false);
            });
    }, [])

    if (isLoading) {
        return (
            <div className="page-container">
                <div className="loading-animation">
                    <div className="quote-spinner">💭</div>
                    <h2>Gathering Wisdom...</h2>
                </div>
            </div>
        )
    }

    return (
        <div className="page-container">
            <div className="hero-section">
                <h2 className="section-title">Inspirational Quotes from Dr. Seuss</h2>
                <p className="section-subtitle">Words of wisdom that spark imagination and joy</p>
            </div>
            
            <div className="quotes-gallery">
                {quotes.map((quote, index) => (
                    <div 
                        key={quote.id} 
                        className="quote-card"
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <div className="quote-content">
                            <div className="quote-icon">❝</div>
                            <p className="quote-text">{quote.text}</p>
                            <div className="quote-source">
                                <span className="source-book">— {quote.book.title}</span>
                            </div>
                        </div>
                        <div className="quote-decoration"></div>
                    </div>
                ))}
            </div>
        </div>
    );
}