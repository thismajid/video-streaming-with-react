const Items = () => {
  return (
    <div class="col">
      <div class="card">
        <img src="poster" class="card-img-top" alt="name" />
        <div class="card-body" style="height: 200px">
          <h5 class="card-title">name</h5>
          <p class="card-text">synopsis</p>
        </div>
        <div class="card-footer">
          <small class="text-muted">Upload Date:</small>
          <br />
          <small class="text-muted">
            <a class="btn btn-success btn-sm mt-2">Watch</a>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Items;
