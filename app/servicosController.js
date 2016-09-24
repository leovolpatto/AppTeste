app.controller("ServicosController", function($scope){

    $scope.abrirModalEdicao = function(servico){
        $('#modalServico').modal('show');
    };
    
    $scope.abrirModalNovo = function(){
        $('#modalServico').modal('show');        
    };

    $scope.salvarEdicao = function(servico){
        $('#modalServico').modal('hide');
    };
    
});