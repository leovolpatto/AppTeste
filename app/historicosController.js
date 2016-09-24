app.controller("HistoricosController", function($scope, $rootScope, $pessoasService, $servicosService){
    $scope.pessoa = {};
    $scope.historicos = [];
    
    $scope.abrirModalEdicao = function(historico){
        $('#modalHistorico').modal('show');
    };
        
    $scope.abrirModalNovo = function(){
        $('#modalHistorico').modal('show');
    }
    
    $scope.salvarEdicao = function(historico){
        $('#modalHistorico').modal('hide');
    };
    
    $rootScope.abrirModalHistoricosParaPessoa = function(pessoa){
        $('#modalListHistoricos').modal('show');
    };
    
});