import App from './App.tsx'
import { createRoot } from 'react-dom/client'

import './index.css'

const element = document.getElementById('root')!

const root = createRoot(element)

root.render(<App />)
