import { useState } from 'react'
import './App.css'
import Index from './components/colorgenerator'
import Counter from './components/counter'
import StarRating from './components/starRating'
import SetInput from './components/setInput'
import ReducerHook from './components/reducer'
import EffectHook from './components/EffectHook'
import RefHook from './components/RefHook'
import LoadMoreData from './components/loadMoreButton'
import GithubProfileFinder from './components/githubProfiles/GithubProfileFinder'

function App() {
  

  return (
    // <div className='App'>
    //   <Index />
    // </div>

    
    // <div style={{ textAlign: 'center', marginTop: '100px' }}>
    //         <h1>Rate This Product</h1>
    //         <StarRating totalStars={5} />
    // </div>

    // <div>
    //   <Counter />
    // </div>

    // <div>
    //   <SetInput />
    // </div>

    // <div>
    // <ReducerHook />
    // </div>

    // <div>
    //   <EffectHook />
    // </div>

    // <div>
    //   <RefHook />
    // </div>

    // <div>
    //   <LoadMoreData/>
    // </div>

    <div>
      <GithubProfileFinder />
    </div>

  )
}

export default App
