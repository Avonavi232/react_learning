import React from 'react';

export default (Child) => {
    return class authHOC extends React.Component {
        constructor(props) {
            super(props);
            this.state = {name: false};

        }

        resetLocalStorage = () => {
            alert(1);
            localStorage.removeItem('auth');
        };


        auth() {
            const {ws} = this.props;

            let name = localStorage.getItem('auth');
            if (!name) {
                name = prompt('Entere your name: ');
            }

            if (!name || !name.trim().length) {
                return false
            } else {
                localStorage.setItem('auth', name);
                ws.emit(name);
                return name;
            }
        }

        componentDidMount() {
            window.addEventListener('beforeunload', this.resetLocalStorage);
            const name = this.auth();
            this.setState({name});
        }


        notLogged() {
            return (
                <div className="notlogged-wrap">
                    You didn`t enter the name :c
                    <br/>
                    <button onClick={() => window.location.reload()}>Try again?</button>
                </div>
            )
        }

        render() {
            return (
                this.state.name ?
                    <Child/> :
                    this.notLogged()
            )
        }
    }
}