class Parquimetro {
  #tarifas;

  constructor() {
    this.#tarifas = [
      { valor: 1.0, tempo: 30 },
      { valor: 1.75, tempo: 60 },
      { valor: 3.0, tempo: 120 },
    ];
  }

  calcular(valorInformado) {
    if (Number.isNaN(valorInformado) || valorInformado <= 0) {
      return {
        sucesso: false,
        mensagem: "Digite um valor válido.",
      };
    }

    if (valorInformado < this.#tarifas[0].valor) {
      return {
        sucesso: false,
        mensagem: "Valor insuficiente. O mínimo é R$ 1,00.",
      };
    }

    let tarifaAplicada = this.#tarifas[0];

    for (const tarifa of this.#tarifas) {
      if (valorInformado >= tarifa.valor) {
        tarifaAplicada = tarifa;
      }
    }

    const troco = valorInformado - tarifaAplicada.valor;

    return {
      sucesso: true,
      tempo: tarifaAplicada.tempo,
      valorCobrado: tarifaAplicada.valor,
      troco,
    };
  }
}

const parquimetro = new Parquimetro();

const inputValor = document.getElementById("valor");
const inputBox = document.getElementById("inputBox");
const botaoCalcular = document.getElementById("calcular");
const resultado = document.getElementById("resultado");
const botoesTarifa = document.querySelectorAll(".price-card");

function converterValor(texto) {
  if (!texto) return NaN;

  const valorNormalizado = texto.trim().replace(",", ".");
  return Number.parseFloat(valorNormalizado);
}

function formatarMoeda(valor) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function exibirResultado(calculo) {
  resultado.hidden = false;
  resultado.className = "result";

  if (!calculo.sucesso) {
    resultado.classList.add("result--error");
    resultado.innerHTML = `
      <span class="result__label">ATENÇÃO</span>
      <strong>${calculo.mensagem}</strong>
      <p>Confira o valor informado e tente novamente.</p>
    `;
    return;
  }

  resultado.classList.add("result--success");
  resultado.innerHTML = `
    <span class="result__label">TEMPO DISPONÍVEL</span>
    <div class="result__time">${calculo.tempo} <small>min</small></div>
    <div class="result__details">
      <p><span>Valor utilizado</span><strong>${formatarMoeda(calculo.valorCobrado)}</strong></p>
      <p><span>Troco</span><strong>${formatarMoeda(calculo.troco)}</strong></p>
    </div>
  `;
}

function calcularEstacionamento() {
  const valor = converterValor(inputValor.value);
  const calculo = parquimetro.calcular(valor);

  inputBox.classList.toggle("input-box--error", !calculo.sucesso);
  exibirResultado(calculo);
}

botaoCalcular.addEventListener("click", calcularEstacionamento);

inputValor.addEventListener("keydown", (evento) => {
  if (evento.key === "Enter") {
    calcularEstacionamento();
  }
});

inputValor.addEventListener("input", () => {
  inputBox.classList.remove("input-box--error");
});

botoesTarifa.forEach((botao) => {
  botao.addEventListener("click", () => {
    inputValor.value = Number(botao.dataset.valor).toFixed(2).replace(".", ",");
    calcularEstacionamento();
  });
});
