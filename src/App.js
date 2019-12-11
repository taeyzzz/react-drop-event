import React from 'react';
import logo from './logo.svg';
import './App.css';
import './style.scss'

class App extends React.Component{
  handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
    console.log(e);
  }

  handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    console.log(e);
    console.log(e.dataTransfer.files);
    const previewImage = document.getElementById("preview")
    var reader = new FileReader();
    reader.onload = function(e) {
      previewImage.src = e.target.result
    }
    reader.readAsDataURL(e.dataTransfer.files[0]);
  }

  render(){
    return (
      <div className="page">
        Page
        <div ref={ref => this.dropZone = ref} className="drop-zone" onDrag={this.handleDrag} onDragOver={this.handleDrag} onDrop={this.handleDrop}>
          <img id="preview" />
        </div>
      </div>
    )
  }
}

export default App
