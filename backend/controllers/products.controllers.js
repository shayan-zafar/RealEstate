export class Products {
  createProduct(req, res, next) {
    res.json({
      messege: "createProduct is called",
    });
  }

  getAllProducts(req, res, next) {
    res.json({
      messege: "getAllProducts is called",
    });
  }

  getProductById(res, req, next) {
    res.json({
      messege: "getProductById is called",
    });
  }
  updateProduct(res, req, next) {
    res.json({
      messege: "updateProduct is called",
    });
  }

  deleteProduct(res, req, next) {
    res.json({
      messege: "deleteProduct is called",
    });
  }
}
