function TodoItem2() {
  let todoName = "go to office";
  let todoDate = "30-03-2024";
  return (
    <div class="container">
      <div class="row ta-rows">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger ta-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem2;
