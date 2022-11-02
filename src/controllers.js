app.controllers = {
  Layout() {
    const els = app.elements;
    const body = els.body;
    const bodys = body.style;

    els.root.style.height = "100vh";
    els.root.style.width = "100vw";
    els.root.style.display = "flex";
    els.root.style.flexDirection = "column";

    bodys.flexGrow = "1";

    this.Header();
    this.Body();
    els.root.appendChild(body);
    this.Footer();
    console.log("oi");
  },
  Header() {
    const els = app.elements;
    const header = els.header;
    const headers = header.style;

    const button = this.Buttons("button", "Nova lista", () => {
      if (localStorage.getItem("cartProducts")) {
        const data = JSON.stringify(app.state.products);

        localStorage.setItem("cartProducts", data);

        location.reload();
      } else {
        this.dumpData();
      }
    });
    button.classList.add("buttonDireita");

    const container = document.createElement("div");
    const containers = container.style;

    const a = document.createElement("h1");
    const b = document.createElement("a");

    const img = document.createElement("img");

    img.src = "./assets/geral.svg";

    img.style.width = "45px";

    headers.display = "flex";
    headers.justifyContent = "center";
    headers.backgroundColor = "#28282b";
    headers.width = "100vw";
    headers.height = "5rem";
    headers.color = "#fff";
    headers.borderBottom = "1px solid #fff";

    containers.display = "flex";
    containers.justifyContent = "space-between";
    containers.width = "100vw";
    containers.alignItems = "center";
    containers.alignContent = "center";
    containers.margin = "0rem 2.5rem 0rem 2.5rem";

    a.innerHTML = "ListaQ!";

    a.classList.add("listaQ");
    b.innerHTML = "nova lista";

    container.appendChild(a);
    container.appendChild(button);
    header.appendChild(container);

    els.root.appendChild(header);
  },
  Body() {
    const els = app.elements;
    const body = els.body;
    const bodys = body.style;

    const list = document.createElement("div");
    const lists = list.style;

    const listDiv = document.createElement("div");
    const listDivs = listDiv.style;

    const icons = this.NewBodyModal();

    bodys.display = "flex";
    bodys.flexDirection = "column";
    bodys.backgroundColor = "#2e3036";
    bodys.justifyContent = "center";
    bodys.alignItems = "center";

    icons.classList.add("icons");

    body.appendChild(icons);

    els.root.appendChild(body);
  },
  Footer() {
    const els = app.elements;
    const footer = els.footer;
    const footers = els.footer.style;
    const a = document.createElement("a");

    a.innerHTML = "Boas compras ヽ(^o^)丿";
    a.classList.add("boasCompras");

    footers.backgroundColor = "#28282b";
    footers.width = "100vw";
    footers.height = "4rem";
    footers.borderTop = "3px solid gray";
    footers.display = "flex";
    footers.justifyContent = "center";
    footers.alignItems = "center";

    footer.appendChild(a);
    els.root.appendChild(footer);
  },
  Buttons(type = "", name, onClick) {
    const button = document.createElement("div");
    const text = document.createElement("p");
    const img = document.createElement("img");
    const qtd = document.createElement("p");

    if (type !== "button") {
      text.classList.add("txt");
    }
    img.classList.add("img");

    if (type === "carne") {
      img.src = "./assets/carne.svg";
      text.innerHTML = name;
      button.onclick = onClick;
      button.classList.add("bt");

      // let qt = app.state.cart[0].lista.length;

      // qtd.innerHTML = qt;

      // button.appendChild(qtd);
      button.appendChild(img);
      button.appendChild(text);
    }
    if (type === "vegetal") {
      img.src = "./assets/veg.svg";
      text.innerHTML = name;
      button.onclick = onClick;
      button.classList.add("bt");

      button.appendChild(img);
      button.appendChild(text);
    }
    if (type === "congelados") {
      img.src = "./assets/gelado.svg";
      text.innerHTML = name;
      button.onclick = onClick;
      button.classList.add("bt");

      button.appendChild(img);
      button.appendChild(text);
    }
    if (type === "fruta") {
      img.src = "./assets/fruta.svg";
      text.innerHTML = name;
      button.onclick = onClick;
      button.classList.add("bt");

      button.appendChild(img);
      button.appendChild(text);
    }
    if (type === "padaria") {
      img.src = "./assets/padaria.svg";
      text.innerHTML = name;
      button.onclick = onClick;
      button.classList.add("bt");

      button.appendChild(img);
      button.appendChild(text);
    }
    if (type === "snacks") {
      img.src = "./assets/snacks.svg";
      text.innerHTML = name;
      button.onclick = onClick;
      button.classList.add("bt");

      button.appendChild(img);
      button.appendChild(text);
    }
    if (type === "bebida") {
      img.src = "./assets/bebida.svg";
      text.innerHTML = name;
      button.onclick = onClick;
      button.classList.add("bt");

      button.appendChild(img);
      button.appendChild(text);
    }
    if (type === "laptop") {
      img.src = "./assets/laptop.svg";
      text.innerHTML = name;
      button.onclick = onClick;
      button.classList.add("bt");

      button.appendChild(img);
      button.appendChild(text);
    }
    if (type === "geral") {
      img.src = "./assets/geral.svg";
      text.innerHTML = name;
      button.onclick = onClick;
      button.classList.add("bt");

      button.appendChild(img);
      button.appendChild(text);
    }
    if (type === "button") {
      text.innerHTML = name;
      text.style.color = "#fffff";
      button.onclick = onClick;

      button.appendChild(text);
    }

    return button;
  },
  Modal(type = "", closeMd, mdClick, createCard) {
    const backDrop = document.createElement("div");
    const modal = document.createElement("div");
    const header = document.createElement("div");
    const closeModal = () => {
      this.closeModal(modal);
    };
    const button = document.createElement("div");

    const body = this.bodyModal("lista");
    const bodyy = this.NewBodyModal();

    const footer = document.createElement("div");
    const footerS = footer.style;

    const button2 = document.createElement("div");

    const table = document.createElement("table");

    backDrop.classList.add("backDrop");

    if (type === "lista") {
      modal.style.display = "flex";
      modal.style.background = "#FFFFFF";
      modal.style.borderRadius = "4px";
      modal.style.width = "fit-content";
      modal.style.flexDirection = "column";

      header.style.display = "flex";
      header.style.justifyContent = "flex-end";

      button.style.padding = "1rem";
      button.innerHTML = "X";
      button.onclick = closeMd;

      button2.style.padding = "1rem";
      button2.innerHTML = "Create";
      button2.onclick = createCard;

      backDrop.classList.add("backdrop");
      backDrop.onclick = mdClick;

      footerS.display = "flex";
      footerS.justifyContent = "flex-end";

      footer.appendChild(button2);
      header.appendChild(button);
      modal.appendChild(header);
      modal.appendChild(body);
      modal.appendChild(footer);
    }
    if (type === "modals") {
      const boddy = document.createElement("div");
      const bodyY = this.bodyModal("");

      const form = document.createElement("form");
      const input = document.createElement("input");
      const button = document.createElement("button");
      const inputs = input.style;

      form.onsubmit = (e) => {
        e.preventDefault();

        const td = this.NewTd(input.value);

        app.state.products[0].lista.push(input.value);

        console.log(app.state.products[0].lista);

        table.appendChild(td);
      };

      input.placeholder = "Digite a categoria";

      form.appendChild(input);
      form.appendChild(button);

      boddy.style.backgroundColor = "red";
      boddy.style.padding = "4rem";
      boddy.display = "";

      backDrop.classList.add("backdrop");
      backDrop.onclick = mdClick;

      button.style.padding = "1rem";
      button.innerHTML = "X";
      button.onclick = closeMd;

      button2.style.padding = "1rem";
      button2.innerHTML = "Create";
      button2.onclick = createCard;

      modal.classList.add("animate");

      boddy.appendChild(form);
      boddy.appendChild(table);
      footer.appendChild(button2);
      header.appendChild(button);
      modal.appendChild(header);
      modal.appendChild(boddy);
      modal.appendChild(footer);
    }
    if (type === "list") {
      modal.style.display = "flex";
      modal.style.background = "#333";
      modal.style.width = "fit-content";
      modal.style.flexDirection = "column";

      header.style.display = "flex";
      header.style.justifyContent = "flex-end";

      button.style.padding = "1rem";
      button.innerHTML = "X";
      button.onclick = closeMd;

      button2.style.padding = "1rem";
      button2.innerHTML = "Create";
      button2.onclick = createCard;

      backDrop.classList.add("backdrop");
      backDrop.onclick = mdClick;

      footerS.display = "flex";
      footerS.justifyContent = "flex-end";

      footer.appendChild(button2);
      header.appendChild(button);
      modal.appendChild(header);
      modal.appendChild(bodyy);
      modal.appendChild(footer);
    }
    modal.classList.add("animate");
    backDrop.appendChild(modal);

    return backDrop;
  },
  newModal(id, type = "", closeMd, mdClick) {
    const backDrop = document.createElement("div");
    const modal = document.createElement("div");
    const header = document.createElement("div");
    const closeModal = () => {
      this.closeModal(modal);
    };

    const divLista = document.createElement("div");
    const button = document.createElement("div");

    const body = this.bodyModal("lista");
    const bodyy = this.NewBodyModal();

    const footer = document.createElement("div");
    const footerS = footer.style;

    const button2 = document.createElement("div");

    const table = document.createElement("table");
    backDrop.classList.add("backDrop");
    header.classList.add("headerStyle");
    footer.classList.add("footerStyle");

    if (type === "modals") {
      const boddy = document.createElement("div");
      const bodyY = this.bodyModal("");

      table.classList.add("tableStyle");

      const form = document.createElement("form");
      const input = document.createElement("input");
      const button = document.createElement("button");
      const inputs = input.style;

      form.onsubmit = (e) => {
        e.preventDefault();

        if (app.state.cart) {
          const lista = app.state.cart[id].lista;

          console.log(app.state.cart[id].lista);

          lista.push(input.value);
          this.dumpData();

          const tdd = this.NewTd(input.value);
          table.appendChild(tdd);
          input.value = "";
        }
      };
      if (app.state.cart) {
        const lista = app.state.cart[id].lista;

        const tdd = lista.forEach((lista) => {
          const td = this.NewTd(lista, id);

          td.onclick = () => {
            console.log(app.state.cart[id].lista);

            this.dumpData();
            console.log(td);
          };

          table.appendChild(td);
        });

        console.log(lista);
      }

      input.placeholder = "Digite a categoria";

      form.appendChild(input);
      form.appendChild(button);

      input.classList.add("inputStyle");

      modal.style.display = "flex";
      modal.style.background = "#FFFFFF";
      modal.style.borderRadius = "4px";
      modal.style.width = "22rem";
      modal.style.flexDirection = "column";

      divLista.style.maxHeight = "18rem";
      divLista.style.overflow = "auto ";

      boddy.style.backgroundColor = "#444";
      boddy.style.padding = "3rem";
      boddy.style.display = "flex";
      boddy.style.flexDirection = "column";
      boddy.style.justifyItems = "center";
      boddy.style.alignItems = "center";

      backDrop.classList.add("backdrop");
      backDrop.onclick = mdClick;

      button.style.padding = "1rem";
      button.innerHTML = "X";
      button.onclick = closeMd;

      button.classList.add("buttonX");

      button2.style.padding = "1rem";
      button2.innerHTML = "Fixar lista";
      button2.onclick = closeMd;

      button2.classList.add("buttonFix");

      divLista.appendChild(table);
      boddy.appendChild(form);
      boddy.appendChild(divLista);
      footer.appendChild(button2);
      header.appendChild(button);
      modal.appendChild(header);
      modal.appendChild(boddy);
      modal.appendChild(footer);
    }
    modal.classList.add("animate");

    backDrop.appendChild(modal);

    return backDrop;
  },
  bodyModal(type = "") {
    const body = document.createElement("div");
    const bodys = body.style;

    const input = document.createElement("input");
    const inputs = input.style;

    const inputNum = document.createElement("input");
    const inputNums = inputNum.style;

    const label = document.createElement("label");
    const formNum = document.createElement("form");

    const button = document.createElement("button");

    button.innerHTML = "button";

    const form = document.createElement("form");

    if (type === "lista") {
      bodys.display = "flex";
      bodys.flexDirection = "column";
      bodys.justifyContent = "center";
      bodys.alignItems = "center";
      bodys.margin = "2rem";
      bodys.padding = "1rem";

      form.onsubmit = (e) => {
        e.preventDefault();

        console.log(input.value);

        const valor = input.value;

        app.state.id++;
        console.log(app.state.id);

        this.Crud(app.state.id, valor);

        app.state.addArrey(valor);

        app.state.products[0].lista.push(valor);

        const add = { valor };

        console.log(add, "loggggg");

        app.state.addToCart();

        console.log(app.state.arrey);
      };

      input.placeholder = "Digite a categoria";

      form.appendChild(button);
      form.appendChild(input);
      body.appendChild(form);
    }

    return body;
  },
  NewTd(txt, id) {
    const div = document.createElement("div");
    const td = document.createElement("td");
    const tr = document.createElement("tr");

    td.classList.add("tds");

    td.onclick = () => {
      td.style.display = "flex";
      td.style.justifyContent = "end";
      td.style.borderBottom = "1px solid rgb(171, 160, 160)";
      td.style.backgroundColor = "rgb(88, 58, 66)";
      td.style.maxWidth = "12rem";
      td.style.padding = "0.3rem";
      td.style.color = "rgb(35, 10, 10)";

      app.state.removeFromCart(txt, id);
    };

    td.innerHTML = txt;
    tr.appendChild(td);

    return tr;
  },
  NewBodyModal() {
    const body = document.createElement("div");
    const bodyModal = document.createElement("div");
    const bodyModal1 = document.createElement("div");
    const bodyModal2 = document.createElement("div");

    bodyModal.classList.add("bodyModal");
    bodyModal1.classList.add("bodyModal");
    bodyModal2.classList.add("bodyModal");
    body.classList.add("bodyy");

    const buttonCarne = this.Buttons("carne", "carnes", () => {
      const md = this.newModal(
        0,
        "modals",
        () => {
          this.closeModal(md);
        },
        (e) => {
          if (e.target.classList.contains("backdrop")) {
            this.closeModal(md);
          }
        },
        () => {
          this.closeModal(md);
        },
        localStorage.getItem("input")
      );
      app.elements.root.appendChild(md);
    });
    const buttonVegetal = this.Buttons("vegetal", "vegetais", () => {
      const md = this.mdReturn(1);
      app.elements.root.appendChild(md);
    });
    const buttonFruta = this.Buttons("fruta", "frutas", () => {
      const md = this.mdReturn(2);
      app.elements.root.appendChild(md);
    });
    const buttonBebida = this.Buttons("bebida", "bebidas", () => {
      const md = this.mdReturn(6);
      app.elements.root.appendChild(md);
    });
    const buttonGelado = this.Buttons("congelados", "frios", () => {
      const md = this.mdReturn(4);
      app.elements.root.appendChild(md);
    });
    const buttonGeral = this.Buttons("geral", "diversos", () => {
      const md = this.mdReturn(8);
      app.elements.root.appendChild(md);
    });
    const buttonLaptop = this.Buttons("laptop", "tech", () => {
      const md = this.mdReturn(7);
      app.elements.root.appendChild(md);
    });
    const buttonPadaria = this.Buttons("padaria", "padaria", () => {
      const md = this.mdReturn(3);
      app.elements.root.appendChild(md);
    });
    const buttonSnacks = this.Buttons("snacks", "snacks", () => {
      const md = this.mdReturn(5);
      app.elements.root.appendChild(md);
    });

    bodyModal.appendChild(buttonCarne);
    bodyModal.appendChild(buttonVegetal);
    bodyModal.appendChild(buttonFruta);
    bodyModal1.appendChild(buttonPadaria);
    bodyModal1.appendChild(buttonGelado);
    bodyModal1.appendChild(buttonSnacks);
    bodyModal2.appendChild(buttonBebida);
    bodyModal2.appendChild(buttonLaptop);
    bodyModal2.appendChild(buttonGeral);
    body.appendChild(bodyModal);
    body.appendChild(bodyModal1);
    body.appendChild(bodyModal2);

    return body;
  },
  mdReturn(id) {
    const md = this.newModal(
      id,
      "modals",
      () => {
        this.closeModal(md);
      },
      (e) => {
        if (e.target.classList.contains("backdrop")) {
          this.closeModal(md);
        }
      },
      () => {
        this.closeModal(md);
      },
      localStorage.getItem("input")
    );

    return md;
  },
  Input(value) {
    const form = document.createElement("form");
    const input = document.createElement("input");
    const button = document.createElement("button");
    const inputs = input.style;

    form.onsubmit = (e) => {
      e.preventDefault();

      input.value = value;
    };

    input.placeholder = "Digite a categoria";

    form.appendChild(input);
    form.appendChild(button);

    return form;
  },
  closeModal(el) {
    el.style.display = "none";
  },
  openModal(el) {
    el.style.display = "flex";
  },
  dumpData() {
    const data = JSON.stringify(app.state.cart);

    localStorage.setItem("cartProducts", data);
  },
  loadData() {
    const data = localStorage.getItem("cartProducts");

    if (data) {
      app.state.setProduct(JSON.parse(data));

      console.log("esta funfando", data);
    }
  },
};
