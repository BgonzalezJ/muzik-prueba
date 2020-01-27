import React from 'react';
import './App.css';

import Filter from './components/Filter';
import AlbumList from './components/AlbumList';

import {getAlbums} from './lib/Api';


class App extends React.Component {

  state = {
    albums: [],
    albumsOriginalState: [],
    categories: []
  }

  componentDidMount() {
    getAlbums(
      (res) => {
        const albums = res.data.feed.entry.map(album =>  {
            return {
              name: album["im:name"].label,
              cover: album["im:image"][2].label,
              category: album.category.attributes.label,
              link: album.link.attributes.href
            }
          });

        let categories = [...new Set(albums.map(album => album.category))];
        categories = categories.map(el => { return {name: el, active: false}});

        this.setState({categories});
        this.setState({albums});
        this.setState({albumsOriginalState: albums});
      });
  }

  selectCategory(cat) {
    let albums;
    if (cat) {
      albums = this.state.albumsOriginalState.filter((el) => {
        if (el.category == cat.name)
          return el;
      });
      this.setState({albums});
    } else
      albums = this.state.albumsOriginalState;
    this.setState({albums});
  }

  render() {
    return (
      <div className="container" id="main-wrapper">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-2 filter-wrapper">
            <Filter categories={this.state.categories} onClick={(cat) => this.selectCategory(cat)} />
          </div>
          <div className="col-12 col-sm-12 col-md-10 album-list-wrapper">
            <AlbumList albums={this.state.albums} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;