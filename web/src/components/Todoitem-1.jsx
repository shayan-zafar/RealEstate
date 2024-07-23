function Todoitem1() {
  let todoName = "Buy milk";
  let todoDate = "4/10/23";
  return (
    <div className="row m-3 ">
      <div className="col-6 text  ">
        <h4>{todoName}</h4>
      </div>
      <div className="col-4 ">
        <h4>{todoDate}</h4>
      </div>
      <div className="col-2">
        <button type="button" className="btn btn-danger">
          delete
        </button>
      </div>
    </div>
  );
}
export default Todoitem1;
