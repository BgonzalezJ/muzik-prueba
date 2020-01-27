import React from 'react';

class Filter extends React.Component {

	state = {
		catSelected: false,
		open: false
	}

	filter(e, cat) {
		e.preventDefault();

		if (this.state.catSelected)
			this.state.catSelected.active = false;
		
		if (cat)	
			cat.active = true;

		this.props.onClick(cat);
		this.setState({catSelected: cat});
		this.setState({open: false});
	}

	openMenu(e) {
		e.preventDefault();
		this.setState({open: true});
	}

	render() {
		const categories = this.props.categories;
		return (
			<div>
				<header className="filter">
					<h1 className="appname">Muzik</h1>
				</header>

				<nav className="menu-filter">
					<a href="#" onClick={(e) => { this.openMenu(e) }}>
						MUSIC <span>{this.state.catSelected ? this.state.catSelected.name : 'All' }</span>
					</a>
					<ul className={this.state.open ? 'open' : ''}>
						<li onClick={(e) => {this.filter(e, false)}}>
							<a href="#" className={!this.state.catSelected ? 'active' : ''}>All</a>
						</li>
						{categories.map((cat, index) =>(
							<li onClick={(e) => {this.filter(e, cat)}} key={index}>
								<a href="#" className={cat.active ? 'active' : ''}>{cat.name}</a>
							</li>
						))}
					</ul>
				</nav>
			</div>
		);
	}
}

export default Filter;