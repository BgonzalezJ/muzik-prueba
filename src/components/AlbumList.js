import React from 'react';
import Album from './Album';

class AlbumList extends React.Component {
  render() {
  	const albums = this.props.albums;
    return (
    	<div>
			<header className="songs"><h1>Music Songs</h1></header>
		    <div className="song-list-wrapper">
		    	{albums.map((album, index) => (<Album key={index} album={album} />))}
		    </div>
        </div>
    );
  }
}

export default AlbumList;