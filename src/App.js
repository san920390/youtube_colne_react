import React from 'react'
import AppContext from './context/contextApi'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './componants/Header'
import Feed from './componants/Feed'
import SearchResult from './componants/SearchResult'
import VideoDetails from './componants/VideoDetails'



const App = () => {
  return (
    <div>
        <AppContext>
          <BrowserRouter>
            <div className='flex flex-col h-full'>
            <Header/>
            <Routes>
              <Route path='/' exact element={<Feed/>}/>
              <Route path='/searchReasult/:searchQuery' element={<SearchResult/>}/>
              <Route path='/video/:id' element={<VideoDetails/>}/>
            </Routes>

            </div>
          </BrowserRouter>
        </AppContext> 
    </div>
  )
}

export default App