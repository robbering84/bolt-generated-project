import React from 'react'
    import ReactDOM from 'react-dom/client'
    import App from './App.jsx'
    import './index.css'
    import { createBrowserRouter, RouterProvider } from 'react-router-dom';
    import WordList from './WordList.jsx';
    import AddWord from './AddWord.jsx';
    import ImportWords from './ImportWords.jsx';
    import Review from './Review.jsx';
    import Flashcards from './Flashcards.jsx';
    import Dashboard from './Dashboard.jsx';
    import Settings from './Settings.jsx';

    const router = createBrowserRouter([
      {
        path: "/",
        element: <App />,
        children: [
          {
            path: "/words",
            element: <WordList />,
          },
          {
            path: "/words/new",
            element: <AddWord />,
          },
          {
            path: "/import",
            element: <ImportWords />,
          },
          {
            path: "/review",
            element: <Review />,
          },
          {
            path: "/flashcards",
            element: <Flashcards />,
          },
          {
            path: "/dashboard",
            element: <Dashboard />,
          },
          {
            path: "/settings",
            element: <Settings />,
          },
        ],
      },
    ]);

    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>,
    )
