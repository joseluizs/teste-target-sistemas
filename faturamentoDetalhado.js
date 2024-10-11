const faturamentoEstados = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

function calcPercentual(faturamentoEstados) {
    const totalFaturamento = Object.values(faturamentoEstados).reduce((acc, valor) => acc + valor, 0);

    const percentuais = {};
    for (let estado in faturamentoEstados) {
        percentuais[estado] = (faturamentoEstados[estado] / totalFaturamento) * 100;
    }

    return {
        totalFaturamento,
        percentuais
    };
}

const resultados = calcPercentual(faturamentoEstados);

console.log(`Faturamento total: R$ ${resultados.totalFaturamento.toFixed(2)}\n`);
for (let estado in resultados.percentuais) {
    console.log(`${estado}: ${resultados.percentuais[estado].toFixed(2)}%`);
}
