function AppTodo() {
  return (
    <div class="container text-center">
      <div class="row ta-rows">
        <div class="col-6">
          <input type="text" placeholder="Enter Todo Here"></input>
        </div>
        <div class="col-4">
          <input type="date" placeholder="Enter Todo Here"></input>
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success ta-button">
            Add To List
          </button>
        </div>
      </div>
    </div>
  );
}
export default AppTodo;
