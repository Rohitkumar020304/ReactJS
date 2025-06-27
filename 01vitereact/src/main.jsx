import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }
const anotherElement = (
    <a href="https://google.com" target='_blank'> Visit google </a>
)

const reactElement =  React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    'click me to visit google'
)

function MyApp() {
    return (
        <div>
            <h1>hello</h1>
        </div>
    )
}
createRoot(document.getElementById('root')).
render(
    // anotherElement
    // reactElement
    <App />
)
