import React from 'react';

function Album(props) {
	const album = props.album;
    return (
		<div className="album-wrapper">
			<a href={album.link} target="_blank" className="album-link">
				<img src={album.cover} className="album-cover" alt="Album cover" />
				<p className="album-name">{album.name}</p>
			</a>
		</div>
    );

}

export default Album;