app.state = {
  products: [
    {
      id: 1,
      categoria: "carnes",
      lista: [],
    },
    {
      id: 2,
      categoria: "vegetais",
      lista: [],
    },
    {
      id: 3,
      categoria: "frutas",
      lista: [],
    },
    {
      id: 4,
      categoria: "padaria",
      lista: [],
    },
    {
      id: 5,
      categoria: "frios",
      lista: [],
    },
    {
      id: 6,
      categoria: "snacks",
      lista: [],
    },
    {
      id: 7,
      categoria: "bebidas",
      lista: [],
    },
    {
      id: 8,
      categoria: "eletronicos",
      lista: [],
    },
    {
      id: 9,
      categoria: "geral",
      lista: [],
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
  id: 0,
  count: 0,
  color: {},
  cart: [
    {
      id: 1,
      categoria: "carnes",
      lista: [],
    },
    {
      id: 2,
      categoria: "vegetais",
      lista: [],
    },
    {
      id: 3,
      categoria: "frutas",
      lista: [],
    },
    {
      id: 4,
      categoria: "padaria",
      lista: [],
    },
    {
      id: 5,
      categoria: "frios",
      lista: [],
    },
    {
      id: 6,
      categoria: "snacks",
      lista: [],
    },
    {
      id: 7,
      categoria: "bebidas",
      lista: [],
    },
    {
      id: 8,
      categoria: "eletronicos",
      lista: [],
    },
    {
      id: 9,
      categoria: "geral",
      lista: [],
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
  Crud2() {
    const produtos = {
      categoria: [
        {
          cate: "cate1",
        },
      ],
      item: [
        {
          id: 0,
          owner: "owner1",
          item: "item1",
        },
      ],
    };
    console.log(produtos.item);

    const criaProd = (dados) => {
      produtos.item.push({
        id: produtos.item.length + 1,
        owner: dados.owner,
        item: dados.item,
      });
    };

    criaProd({ owner: "objeto1", item: "objeto2" });

    console.log(produtos.item);

    const pegaTudo = () => {
      return produtos.item;
    };

    const update = (id, newProduto) => {
      const postAtt = pegaTudo().find((item) => {
        return item.id === id;
      });
      console.log(postAtt);
    };

    const del = (id) => {
      const listaAtt = pegaTudo().filter((atual) => {
        return atual.id !== id;
      });

      produtos.item = listaAtt;

      del(1);
      console.log(del());
    };
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

    console.log(app.state.cart[id].lista);
    // console.log(listaa.indexOf(txt));
    // console.log(listaa.splice(splice, 1), "splice aq ");
    // console.log(listaa, "listaaaaaaaaaaaaaaaaaaaaaaaaaa");
  },
};
