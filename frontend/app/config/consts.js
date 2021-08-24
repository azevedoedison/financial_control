angular.module('primeiraApp').constant('consts', {
  appName: 'Controle Financeiro',
  version: '1.0',
  owner: 'Edison de Azevedo Filho',
  year: '2021',
  site: 'https://www.linkedin.com/in/edison-de-azevedo/',
  apiUrl: 'http://localhost:3003/api',
}).run(['$rootScope', 'consts', function($rootScope, consts) {
  $rootScope.consts = consts
}])
