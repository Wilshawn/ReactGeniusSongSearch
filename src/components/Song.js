import '../stylesheets/song.css'

const Song = ({ song }) => {
  return (
    <div className='song-card'>
      <div className='song-image'>
        <img src={song.header_image_url} alt={song.title + ' cover'} />
      </div>
      <div className='song-data'>
        <h3>{song.title}</h3>
        <a href={song.primary_artist.url} className='artist-name' target='_blank' rel='noreferrer'>
          By {song.artist_names}
        </a>
        <small>Released on {song.release_date_for_display}</small>
        <a href={song.url} target='_blank' rel='noreferrer'>View Lyrics</a>
      </div>
    </div>
  )
}

export default Song