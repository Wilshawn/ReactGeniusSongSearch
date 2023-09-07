import '../stylesheets/songs.css'
import Song from './Song'

const Songs = ({ songs }) => {
  return (
    <section className="container songs-section">
        <h2>Results</h2>
        <div className="songs-container">
          {
            songs.length > 0 ?
            (
              songs.map((song) => (
                <Song key={song.result.id} song={song.result} />
              ))
            )
            :
            (
              <div className='no-results'>
                <p>No songs to display</p>
              </div>
            )
          }
        </div>
    </section>
  )
}

export default Songs