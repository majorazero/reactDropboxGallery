class Page extends React.Component{
  render(){
    return(
      <div className="woop">
        <Gallery />
      </div>
    );
  }
  componentDidMount(){
    this._dropboxAPIFetch();
  }
  _dropboxAPIFetch(){

  }
}
class Gallery extends React.Component{
  render(){
    return(
      <div className="gallery">
        Woops.
        <Portrait />
      </div>
    );
  }
}
class Portrait extends React.Component{
  render(){
    return(
      <div>
        <div className="portrait">
          Hey.
        </div>
        <div className="portrait">
          Hey.
        </div>

      </div>
    );
  }
}


ReactDOM.render(<Page />,document.getElementById('page'));
