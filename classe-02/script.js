const cepInput = document.querySelector("#cep");
const cidadeInput = document.querySelector("#cidade");
const ruaInput = document.querySelector("#rua");

cepInput.addEventListener("change", function (event) {
    if (cepInput.value.length !== 8) {
        console.log("ERRO");
        return;
    }

    const respostaPromise = fetch(`https://viacep.com.br/ws/${cepInput.value}/json/`);

    respostaPromise.then(function (resposta) {
        const bodyPromise = resposta.json();

        bodyPromise.then(function (body) {
            cidadeInput.value = body.localidade;
            ruaInput.value = body.logradouro;
        });
    });
});