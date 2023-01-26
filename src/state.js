app.state = {
  products: [
    {
      id: 1,
      categoria: "carnes",
      lista: [],
      totalGeral: [],
    },
    {
      id: 2,
      categoria: "vegetais",
      lista: [],
      totalGeral: [],
    },
    {
      id: 3,
      categoria: "frutas",
      lista: [],
      totalGeral: [],
    },
    {
      id: 4,
      categoria: "padaria",
      lista: [],
      totalGeral: [],
    },
    {
      id: 5,
      categoria: "frios",
      lista: [],
      totalGeral: [],
    },
    {
      id: 6,
      categoria: "snacks",
      lista: [],
      totalGeral: [],
    },
    {
      id: 7,
      categoria: "bebidas",
      lista: [],
      totalGeral: [],
    },
    {
      id: 8,
      categoria: "eletronicos",
      lista: [],
      totalGeral: [],
    },
    {
      id: 9,
      categoria: "geral",
      lista: [],
      totalGeral: [],
    },
  ],
  getinput() {
    const input = app.controllers.input;

    const a = document.createElement("a");

    a.innerHTML = localStorage.getItem("nome");
  },
  arrey: [],
  addArrey(products) {
    app.state.arrey.push(products);
  },
  arreyTotal: [],
  id: 0,
  count: 0,
  color: {},
  cart: [
    {
      id: 1,
      categoria: "carnes",
      lista: [],
      totalGeral: [],
    },
    {
      id: 2,
      categoria: "vegetais",
      lista: [],
      totalGeral: [],
    },
    {
      id: 3,
      categoria: "frutas",
      lista: [],
      totalGeral: [],
    },
    {
      id: 4,
      categoria: "padaria",
      lista: [],
      totalGeral: [],
    },
    {
      id: 5,
      categoria: "frios",
      lista: [],
      totalGeral: [],
    },
    {
      id: 6,
      categoria: "snacks",
      lista: [],
      totalGeral: [],
    },
    {
      id: 7,
      categoria: "bebidas",
      lista: [],
      totalGeral: [],
    },
    {
      id: 8,
      categoria: "eletronicos",
      lista: [],
      totalGeral: [],
    },
    {
      id: 9,
      categoria: "geral",
      lista: [],
      totalGeral: [],
    },
  ],
  addToCart(products) {
    if (app.state.cart.find((p) => p.id === products.id)) {
      return "EXISTS";
    } else {
      app.state.cart.push(products);
    }

    return "OK";
  },
  removeFromCart(products) {
    if (this.count <= 0) {
      App.state.cart = App.state.cart.filter((p) => p.id !== products.id);
    }
  },
  pushItens(id) {
    app.state.cart[id].lista;

    return a;
  },
  removeAllWallet(products, id) {
    const index = localStorage.getItem(id).indexOf(products);
    if (index > -1) {
      localStorage.removeItem(id).splice(index);
    }
  },
  setProduct(newProduct) {
    app.state.cart = newProduct;
  },
  removeFromCart(products, id) {
    const index = app.state.cart[id].lista.indexOf(products);

    if (index > -1) {
      app.state.cart[id].lista.splice(index, 1);
    }
  },
};
