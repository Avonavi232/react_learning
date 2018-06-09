import React from 'react';

export default (Child) => {
	return class authHOC extends React.Component{
		auth(){
			const name = prompt('Entere your name: ');

			if (!name || !name.trim().length) {
				return false
			} else {
				return name;
			}
		}

		componentDidMount(){
			this.name = this.auth();
		}

		notLogged(){
			return (
					<div className="notlogged-wrap">
						You didn`t enter the name :c
						<br/>
						<button onClick={() => window.location.reload()}>Try again?</button>
					</div>
			)
		}

		render(){
			return(
					this.name ?
							<Child/> :
							this.notLogged()
			)
		}
	}
}