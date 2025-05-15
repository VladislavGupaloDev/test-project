import { RatingPage } from '@pages/RatingPage/index'

//* Так как одна из страниц, я подразумеваю что есть какой-то фреймворк для роутинга по этому
//* задам структуру проекта сразу же для "многостраничного" приложения

function App() {
  return (
    <div className='relative flex h-svh items-center justify-center'>
      <RatingPage />
    </div>
  )
}

export default App
