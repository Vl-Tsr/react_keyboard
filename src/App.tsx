import { Component } from 'react';

type State = {
  pressedKey: string | null;
};

export class App extends Component {
  state: State = {
    pressedKey: null,
  };

  handleKeyUp = (event: KeyboardEvent): void => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keydown', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keydown', this.handleKeyUp);
  }

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        {pressedKey === null ? (
          <p className="App__message">Nothing was pressed yet</p>
        ) : (
          <p className="App__message">The last pressed key is [{pressedKey}]</p>
        )}
      </div>
    );
  }
}
