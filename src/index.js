import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'


//Recoil
import { RecoilRoot } from 'recoil'

//style
import "bootstrap/dist/css/bootstrap.min.css";


ReactDOM.render(
    <React.StrictMode>
        <RecoilRoot>
            <App/>
        </RecoilRoot>
    </React.StrictMode>,
    document.getElementById('root')
)