import '../stylesheets/search.css';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';

const Search = ({onSearch}) => {
    const [text, setText] = useState('')
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            onSubmit()
        }
    }

    const onSubmit = (e) => {
        if(!text) {
            alert('Please add a search query')
            return
        }

        onSearch({ text })

        setText('')
    }
    return (
        <section className='search-section'>
            <div className='container'>
                <div className='search-container'>
                    <input id='songInput' type='text' onKeyUp={handleKeyPress} value={text} onChange={(e) => setText(e.target.value)} placeholder='search a song here...' />
                    <FaSearch onClick={onSubmit} />
                </div>
            </div>
        </section>
    )
}

export default Search