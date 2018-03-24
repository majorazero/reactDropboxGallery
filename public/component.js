class Page extends React.Component{
  render(){
    return(
      <div className="woop">
        Hello World from REACT!
      </div>
    );
  }
}


ReactDOM.render(<Page />,document.getElementById('page'));
