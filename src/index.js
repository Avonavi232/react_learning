// import React from 'react';
// import ReactDOM from 'react-dom';
//
// import App from './book_chapter_10/components/App';
//
// ReactDOM.render(<App />, document.getElementById('root'));
//
// if (process.env.NODE_ENV !== "production") {
//     if (module.hot) {
//         module.hot.accept('./book_chapter_10/components/App', () => {
//             ReactDOM.render(<App />, document.getElementById('root'))
//         })
//     }
// }
//

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './slider/App'


render(
    <App />,
    document.getElementById('root')
)

