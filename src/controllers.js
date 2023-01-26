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
    const totalContainer = document.createElement("div");
    totalContainer.classList.add("buttonQtdd");

    const seta = () => {
      const d = this.ttReform();
      const total = this.totalDeVdd();

      totalContainer.innerHTML = "";
      totalContainer.innerHTML = `Total: ${total}`;
    };

    const interval = setInterval(seta, 500);

    // const seta = () => {
    //   const total = this.totalDeVdd();

    //   totalContainer.innerHTML = "";
    //   totalContainer.innerHTML = `Total: ${total}`;

    //   console.log("total", total);
    // };

    // const interval = setInterval(seta, 500);

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
    container.appendChild(totalContainer);
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
  Inputs() {
    const input = document.createElement("input");

    input.type = "number";

    input.classList.add("inputNumber");

    return input;
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

      const inpt = this.Inputs();

      form.onsubmit = (e) => {
        e.preventDefault();

        const td = this.NewTd(input.value);

        app.state.products[0].lista.push(input.value);

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
  totalDeVdd() {
    const li = app.state.cart;

    var sum = 0;

    for (var i = 0; i < li.length; i++) {
      sum += li[i].totalGeral;
    }

    const geralTotal = sum.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    return geralTotal;
  },
  ttReform() {
    const li = app.state.cart;

    const td1 = this.Tt(0);
    const td2 = this.Tt(1);
    const td3 = this.Tt(2);
    const td4 = this.Tt(3);
    const td5 = this.Tt(4);
    const td6 = this.Tt(5);
    const td7 = this.Tt(6);
    const td8 = this.Tt(7);
    const td9 = this.Tt(8);
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
    const value = document.createElement("div");

    value.classList.add("buttonQtdd");
    backDrop.classList.add("backDrop");
    header.classList.add("headerStyle");
    footer.classList.add("footerStyle");

    let cartTotal = app.state.cart[id].totalGeral;

    const geralTotal = cartTotal.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    value.innerHTML = `Total: ${geralTotal}`;

    if (type === "modals") {
      const boddy = document.createElement("div");
      const bodyY = this.bodyModal("");

      table.classList.add("tableStyle");

      const form = document.createElement("form");
      const input = document.createElement("input");
      const button = document.createElement("button");
      const inputs = input.style;
      const containerInputs = document.createElement("div");
      const ipt = this.Inputs();
      const iptQtd = this.Inputs();
      const btn = document.createElement("div");
      const img = document.createElement("img");

      iptQtd.placeholder = "Quantidade";
      ipt.placeholder = "Valor";
      img.src = "./assets/enter.svg";

      containerInputs.style.display = "flex";
      containerInputs.style.justifyContent = "space-between";
      containerInputs.style.alignItems = "center";
      containerInputs.style.width = "14rem";
      const geralTotal = this.Tt(id);

      value.innerHTML = "";
      value.innerHTML = `Total: ${geralTotal}`;

      btn.onclick = () => {
        if (app.state.cart) {
          const lista = app.state.cart[id].lista;

          const all = {
            prod: input.value,
            money: ipt.value,
            Qtd: iptQtd.value,
            total: iptQtd.value * ipt.value,
          };

          lista.push(all);

          this.dumpData();
          var numero = ipt.value;
          var multiplicador = iptQtd.value;
          var foiMultiplicado = false;

          if (multiplicador < 1) {
            multiplicador = 1;
          }

          if (!foiMultiplicado) {
            numero *= multiplicador;
            foiMultiplicado = true;
          }
          app.state.arreyTotal.push(numero);

          const geralTotal = this.Tt(id);

          value.innerHTML = "";
          value.innerHTML = `Total: ${geralTotal}`;

          const num = numero.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          });

          const tdd = this.NewTd(
            "",
            "",
            input.value,
            iptQtd.value,
            ipt.value,
            num
          );
          table.appendChild(tdd);
          input.value = "";
          iptQtd.value = "";
          ipt.value = "";
        }
      };
      if (app.state.cart) {
        const lista = app.state.cart[id].lista;

        const tdd = lista.forEach((lista) => {
          var numero = lista.money;
          var multiplicador = lista.Qtd;
          var foiMultiplicado = false;
          if (multiplicador < 1) {
            multiplicador = 1;
          }
          if (!foiMultiplicado) {
            numero *= multiplicador;
            foiMultiplicado = true;
          }

          const num = numero.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          });

          const td = this.NewTd(
            lista,
            id,
            lista.prod,
            lista.Qtd,
            lista.money,
            num
          );

          td.onclick = () => {
            const geralTotal = this.Tt(id);

            value.innerHTML = "";
            value.innerHTML = `Total: ${geralTotal}`;

            this.dumpData();
          };

          table.appendChild(td);
        });
      }

      input.placeholder = "Digite o nome do produto";

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

      btn.classList.add("buttonConfirm");
      button.style.padding = "1rem";
      button.innerHTML = "X";
      button.onclick = closeMd;

      button.classList.add("buttonX");

      button2.style.padding = "1rem";
      button2.innerHTML = "Fixar lista";
      button2.onclick = closeMd;

      button2.classList.add("buttonFix");

      divLista.appendChild(table);
      header.appendChild(value);
      boddy.appendChild(form);
      containerInputs.appendChild(ipt);
      containerInputs.appendChild(iptQtd);
      btn.appendChild(img);
      containerInputs.appendChild(btn);
      boddy.appendChild(containerInputs);
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
  Tt(id) {
    const li = app.state.cart[id].lista;

    var total = li.reduce(getTotal, 0);
    function getTotal(total, item) {
      return total + item.Qtd * item.money;
    }

    app.state.cart[id].totalGeral = total;

    let cartTotal = app.state.cart[id].totalGeral;

    const geralTotal = cartTotal.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    return geralTotal;
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

        const valor = input.value;

        app.state.id++;

        this.Crud(app.state.id, valor);

        app.state.addArrey(valor);

        app.state.products[0].lista.push(valor);

        const add = { valor };

        app.state.addToCart();
      };

      input.placeholder = "Digite a categoria";

      form.appendChild(button);
      form.appendChild(input);
      body.appendChild(form);
    }

    return body;
  },
  NewTd(txt, id, texto, qtd, money, tt) {
    const div = document.createElement("div");
    const td = document.createElement("td");
    const tr = document.createElement("tr");
    const container = document.createElement("div");
    container.classList.add("buttonQtd");

    const contQtd = document.createElement("div");
    const contMon = document.createElement("div");
    const total = document.createElement("div");
    const divi = document.createElement("div");

    contMon.innerHTML = `Qtd: ${qtd}`;
    contQtd.innerHTML = `R$: ${money}`;
    total.innerHTML = `= ${tt}`;

    divi.style.border = "1px solid white";
    divi.style.height = "0.5rem";

    contMon.classList.add("QtdPrice");
    contQtd.classList.add("QtdPrice");
    total.classList.add("QtdPrice");

    td.classList.add("tds");

    td.onclick = () => {
      td.style.display = "flex";
      td.style.borderBottom = "1px solid rgb(171, 160, 160)";
      td.style.backgroundColor = "rgb(88, 58, 66)";
      td.style.color = "rgb(35, 10, 10)";

      app.state.removeFromCart(txt, id);
    };

    td.innerHTML = texto;
    container.appendChild(contQtd);
    container.appendChild(divi);
    container.appendChild(contMon);
    container.appendChild(total);
    td.appendChild(container);
    tr.appendChild(td);

    return tr;
  },
  ButtonMore(txt, id, valor) {
    const button = document.createElement("div");
    const buttons = button.style;
    const button2 = document.createElement("div");
    const buttons2 = button2.style;
    const numero = document.createElement("div");

    const containerQtd = document.createElement("div");
    containerQtd.style.border = "5px solid red";
    containerQtd.style.height = "1.2em";
    containerQtd.style.display = "flex";
    containerQtd.style.justifyContent = "space-between";
    containerQtd.style.justifyItems = "center";

    buttons.height = "1.2rem";
    buttons.width = "0.5rem";
    buttons.border = "2px solid blue";

    buttons2.height = "1.2rem";
    buttons2.width = "0.5rem";
    buttons2.border = "2px solid blue";

    numero.style.border = "1px solid green";
    numero.style.height = "1.2rem";
    numero.style.width = "1rem";
    numero.innerHTML = valor;

    button.onclick = () => {
      numero.innerHTML = "";
      valor--;
      app.state.Modify(txt, id, valor);
      this.dumpData();

      numero.innerHTML = valor;
    };

    button2.onclick = () => {
      numero.innerHTML = "";
      valor++;
      app.state.Modify(txt, id, valor);
      this.dumpData();

      numero.innerHTML = valor;
    };

    containerQtd.appendChild(button);
    containerQtd.appendChild(numero);
    containerQtd.appendChild(button2);

    return containerQtd;
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
    const bt0 = this.Styles(0, buttonCarne);
    const buttonVegetal = this.Buttons("vegetal", "vegetais", () => {
      const md = this.mdReturn(1);
      app.elements.root.appendChild(md);
    });
    const bt = this.Styles(1, buttonVegetal);
    const buttonFruta = this.Buttons("fruta", "frutas", () => {
      const md = this.mdReturn(2);
      app.elements.root.appendChild(md);
    });
    const bt1 = this.Styles(2, buttonFruta);
    const buttonBebida = this.Buttons("bebida", "bebidas", () => {
      const md = this.mdReturn(6);
      app.elements.root.appendChild(md);
    });
    const bt2 = this.Styles(6, buttonBebida);
    const buttonGelado = this.Buttons("congelados", "frios", () => {
      const md = this.mdReturn(4);
      app.elements.root.appendChild(md);
    });
    const bt3 = this.Styles(4, buttonGelado);
    const buttonGeral = this.Buttons("geral", "diversos", () => {
      const md = this.mdReturn(8);
      app.elements.root.appendChild(md);
    });
    const bt4 = this.Styles(8, buttonGeral);
    const buttonLaptop = this.Buttons("laptop", "tech", () => {
      const md = this.mdReturn(7);
      app.elements.root.appendChild(md);
    });
    const bt5 = this.Styles(7, buttonLaptop);
    const buttonPadaria = this.Buttons("padaria", "padaria", () => {
      const md = this.mdReturn(3);
      app.elements.root.appendChild(md);
    });
    const bt6 = this.Styles(3, buttonPadaria);
    const buttonSnacks = this.Buttons("snacks", "snacks", () => {
      const md = this.mdReturn(5);
      app.elements.root.appendChild(md);
    });
    const bt7 = this.Styles(5, buttonSnacks);

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
  Styles(id, button) {
    const seta = () => {
      if (app.state.cart[id].lista.length > 0) {
        button.style.border = "1px solid green";
      } else {
        button.style.border = "1px solid #4A4047";
      }
    };

    setInterval(seta, 500);

    return seta;
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
