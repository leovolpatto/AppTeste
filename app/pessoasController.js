app.controller("PessoasController", function($scope, $rootScope, $pessoasService){
    
    $scope.pessoas = [];
    
    $scope.abrirModalEdicao = function(pessoa){
        $('#modalPessoa').modal('show');
    };
    
    $scope.abrirModalNovo = function(){
        $('#modalPessoa').modal('show');        
    }
    
    $scope.salvarEdicao = function(pessoa){
        $('#modalPessoa').modal('hide');
    };
    
    $scope.abrirModalHistoricos = function(pessoa){
        $rootScope.abrirModalHistoricosParaPessoa(pessoa);
    };
});