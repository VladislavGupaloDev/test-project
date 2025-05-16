//* Так как одна из страниц, я подразумеваю что есть какой-то фреймворк для роутинга по этому
//* задам структуру проекта сразу же для "многостраничного" приложения
import { RatingPage } from '@/pages/RatingPage'

function App() {
  return (
    <div className='relative flex h-screen items-center justify-center'>
      <RatingPage />
    </div>
  )
}

export default App
