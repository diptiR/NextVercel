import Style from './albums.module.css'

function Albums({ albums, preview }) {
  return (
      <div>
          <div className={Style.alert}><b>Preview Mode is 
              {preview ? ' ON':' OFF'}
              </b>
              {preview ? <a href="/api/exit-preview"> Leave Preview Mode</a> :''}
          </div>
          <ul>
            {albums.data.map((album) => (
                <li className={Style.thumbnails} key={album.id}>
                    <div>
                        <div>Id: {album.id}</div>
                        <div>UserId: {album.userId}</div>
                        <div>Title: {album.title}</div>
                    </div>
                </li>
            ))}
        </ul>
      </div>
  );
}

export async function getStaticProps({preview = false, previewData}) {
  const apiUrl = preview ? 'https://4bbdwp2p-dev.preview.zesty.io/-/custom/draft-albums.json' : 'https://4bbdwp2p-dev.preview.zesty.io/-/custom/albums.json'
  const res = await fetch(apiUrl);
  const albums = await res.json();
  return {
    props: {
        albums, preview
    }
  };
}

export default Albums;
