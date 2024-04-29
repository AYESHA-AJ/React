import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
    return (
        <div>
            <h1>Custom App</h1>
        </div>
    )
}
const anotheruser="chai or me"
const reactElement = React.createElement(
    'a',
    //attributes
    { href: 'https://google.com', target: '_blank' },
    'click me to visit google',
    anotheruser
)
ReactDOM.createRoot(document.getElementById('root')).render(

  reactElement
 
)
