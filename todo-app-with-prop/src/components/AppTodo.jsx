function AppTodo() {
  return (
    <div className="container text-center">
      <div className="row ta-rows">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here"></input>
        </div>
        <div className="col-4">
          <input type="date" placeholder="Enter Todo Here"></input>
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success ta-button">
            Add To List
          </button>
        </div>
      </div>
    </div>
  );
}
export default AppTodo;
