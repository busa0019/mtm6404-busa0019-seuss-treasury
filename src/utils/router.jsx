import App from "../App.jsx";
import { BookCollection } from "../routes/BookCollection.jsx";
import { BookDetails } from "../routes/BookDetails.jsx";
import { InspirationalQuotes } from "../routes/InspirationalQuotes.jsx";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <BookCollection />
            },
            {
                path: '/book/:id',
                element: <BookDetails />
            },
            {
                path: '/quotes',
                element: <InspirationalQuotes />
            }
        ]
    },
]);

export default router;