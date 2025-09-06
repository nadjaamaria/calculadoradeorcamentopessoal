const form = document.getElementById('expense-form');
const descricaoInput = document.getElementById('descricao');
const valorInput = document.getElementById('valor');
const dataInput = document.getElementById('data');
const expenseList = document.getElementById('expense-list');
const totalSpan = document.getElementById('total');

let despesas = [];

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const descricao = descricaoInput.value;
  const valor = parseFloat(valorInput.value);
  const data = dataInput.value;

  if (!descricao || isNaN(valor) || !data) {
    alert('Preencha todos os campos corretamente.');
    return;
  }

  const despesa = {
    id: Date.now(),
    descricao,
    valor,
    data
  };

  despesas.push(despesa);
  atualizarInterface();

  // Limpar formulário
  descricaoInput.value = '';
  valorInput.value = '';
  dataInput.value = '';
});

function atualizarInterface() {
  // Limpa a lista
  expenseList.innerHTML = '';

  let total = 0;

  despesas.forEach((item) => {
    total += item.valor;

    const li = document.createElement('li');
    li.textContent = `${item.descricao} - R$ ${item.valor.toFixed(2)} em ${formatarData(item.data)}`;
    expenseList.appendChild(li);
  });

  totalSpan.textContent = total.toFixed(2);
}

function formatarData(dataStr) {
  const data = new Date(dataStr);
  return data.toLocaleDateString('pt-BR');
}
