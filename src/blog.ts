import './style.css'
import { BlogPage } from './pages/blog'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = BlogPage()

