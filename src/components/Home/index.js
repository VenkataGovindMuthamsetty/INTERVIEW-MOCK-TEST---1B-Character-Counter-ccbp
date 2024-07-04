import {Component} from 'react'
import {v4} from 'uuid'

class Home extends Component {
  state = {
    searchInput: '',
    inputList: [],
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickAdd = () => {
    const {searchInput} = this.state
    const wordObject = {
      id: v4(),
      word: searchInput,
      length: searchInput.length,
    }
    this.setState(prevState => ({
      inputList: [...prevState.inputList, wordObject],
    }))
    this.setState({searchInput: ''})
  }

  render() {
    const {searchInput, inputList} = this.state
    console.log(inputList)
    return (
      <div>
        <div>
          <div>
            <h1>Count the characters like a Boss...</h1>
          </div>
          <div>
            {inputList.length === 0 ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
              />
            ) : (
              <ul>
                {inputList.map(eachObj => (
                  <li key={eachObj.id}>
                    <p>
                      {eachObj.word}:{eachObj.length}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <form onSubmit={this.onClickAdd}>
          <h1>Character Counter</h1>
          <input
            type="text"
            onChange={this.onChangeInput}
            value={searchInput}
            placeholder="Enter the Characters here"
          />
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}
export default Home
