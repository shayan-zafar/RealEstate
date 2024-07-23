function Todoitem2() {
  let todoName = "Go to college";
  let todoDate = "4/2/21";
  return (
    <div className="row m-3   ">
      <div className="col-6   ">
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
export default Todoitem2;
