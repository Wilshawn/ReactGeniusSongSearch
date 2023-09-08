
import './App.css';
import { useState } from 'react'
import Header from './components/Header';
import Search from './components/Search';
import Songs from './components/Songs';

function App() {
  const [songs, setSongs] = useState([])

  // Search Query
  const searchQuery = async (query) => {
    const res = await fetch(`https://api.genius.com/search?q=${query.text}`, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer -paZEmQPo5A8yPCcOcwGznNDlRQaFGT0xNzRalZlvtjJ_P9rwLnH8PYhAPA14os5',
      }
    });
    const data = await res.json();
    setSongs(data.response.hits);
  }

  return (
    <div className="App">
      <Header />
      <Search onSearch={searchQuery} />
      <Songs songs={songs} />
    </div>
  );
}

export default App;
