import './style.css'
import { SearchIQPost } from './pages/posts/searchiq'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = SearchIQPost()
