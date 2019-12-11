import React from 'react';
import logo from './logo.svg';
import './App.css';
import './style.scss'

class App extends React.Component{
  componentDidMount() {
    let div = this.dropZone
    div.addEventListener('dragenter', this.handleDragIn)
    div.addEventListener('dragleave', this.handleDragOut)
    div.addEventListener('dragover', this.handleDrag)
    div.addEventListener('drop', this.handleDrop)
  }
  componentWillUnmount() {
    let div = this.dropZone
    div.removeEventListener('dragenter', this.handleDragIn)
    div.removeEventListener('dragleave', this.handleDragOut)
    div.removeEventListener('dragover', this.handleDrag)
    div.removeEventListener('drop', this.handleDrop)
  }

  handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
    console.log(e);
  }
  handleDragIn = (e) => {
    e.preventDefault()
    e.stopPropagation()
    console.log(e);
  }
  handleDragOut = (e) => {
    e.preventDefault()
    e.stopPropagation()
    console.log(e);
  }

  handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    console.log(e);
    console.log(e.dataTransfer.files);
  }

  render(){
    return (
      <div className="page">
        Page
        <div ref={ref => this.dropZone = ref} className="drop-zone">

        </div>
      </div>
    )
  }
}

export default App
