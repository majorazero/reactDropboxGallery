class Page extends React.Component{
  render(){
    return(
      <div className="woop">
        <Gallery />
      </div>
    );
  }
  _dropboxAPIFetch(){
    let key = "i2ucyknubgl3g21";
    let secret = "m555a1swkhbs6jf";
    let token = "4DOPxV7FGysAAAAAAAAMpqlYCZBq15TA4_Ws9KtFLEZdiQLyeOQZ9j2xUSibZ7nC";
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
