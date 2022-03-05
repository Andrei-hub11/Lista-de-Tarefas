document.querySelector("#push").onclick = function () {
  if (document.querySelector("#novaTarefa input").value.length == 0) {
    swal("Erro.", "Nenhuma tarefa foi adicionada", "error");
  } else {
    swal({
      title: "Bom trabalho!",
      html: "Tarefa adicionada!",
      icon: "success",
    });
    document.querySelector("#tarefas").innerHTML += `
            <div class="tarefa">
                <span id="nomeTarefa">
                    ${document.querySelector("#novaTarefa input").value}
                </span>
                <button class="delete">
                    <i class="fa fa-trash-o"></i>
                </button>
            </div>
        `;
    var current_tarefas = document.querySelectorAll(".delete");
    for (var i = 0; i < current_tarefas.length; i++) {
      current_tarefas[i].onclick = function () {
        swal("", "A tarefa foi excluída!", "success");
        this.parentNode.remove();
      };
    }
  }
};
