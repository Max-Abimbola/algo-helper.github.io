import React, {Component} from 'react';
import Node from './Node.js';


export default class Pathfinding extends Component {
  constructor(props) {
      super(props)
      this.state = {grid: []}
  }
  createGrid = () => {
      const grid = []
      for (let row = 0; row < 3; row++){
          const currentNode = []
          for (let col = 0; col < 3; col++){
              const currentRow = {
                  col,
                  row,
              };
              currentNode.push(currentRow)
          }
          grid.push(currentNode)
      };
      this.setState({grid})
  }
  render() {
      const {grid} = this.state;
      console.log(grid)
      return (
          <div className = "Board">
              {grid.map((row,rowIdx) => {
                  return(
                      <div key={rowIdx}>
                          {row.map((node,nodeId) => {
                              return <Node></Node>
                          })}
                      </div>
                  )
              })}
          </div>
      )
  }
}; 

</div>
