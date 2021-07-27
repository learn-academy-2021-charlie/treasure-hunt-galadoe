import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      board: ["?", "?", "?", "?", "?", "?", "?", "?", "?"],
      treasureLocation: null,
      bombLocation: null
    }
  }

  handleGamePlay = (index) => {
      // alert(index)
      // this.setState.tree
      const {board} = this.state
      if(index === this.state.treasureLocation){
        board[index] = "💎"
        this.setState({board: board})
      }else if(index === this.state.bombLocation){
        board[index] = "💣"
        this.setState({board: board})
      }else{
        board[index] = "🌴"
        this.setState({board: board})
      }
  }

  componentDidMount(){
    let treasure = Math.floor(Math.random() * this.state.board.length)
    let bomb = Math.floor(Math.random() * this.state.board.length)
    this.setState({treasureLocation: treasure, bombLocation: bomb})
  }

  render(){
    return(
      <>
        <h1>Treasure Hunt Game</h1>
        <div id = "gameboard">
          {this.state.board.map((value, index) => {
            return(
            <Square value = {value}
            key = {index}
            handleGamePlay = {this.handleGamePlay}
            />
          )
          })}
        </div>
      </>
    )
  }
}
export default App
