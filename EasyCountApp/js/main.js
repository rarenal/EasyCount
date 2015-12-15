/**
 * Created by Enrique 2 on 11/11/2015.
 */
angular.module("corporativeApp", ['ngResource', 'ngRoute'])

    .factory('Usuarios', ['$resource', function($resource) {
        return $resource('/usuarios/:id', null, {
            'update': {method: 'PUT'},
            'query': {method: 'GET', isArray: true}
        });
    }])


    .controller('corporativeAppCtrl', ['$scope', '$route', 'Usuarios', function ($scope, $route, Usuarios) {
        var vm = this;
        vm.variable = '#toregister';
        var usuarios = [];
        var response = Usuarios.query();    // GET
        response.$promise.then(function(data){
            for(var i=0;i<data.length;i++){
                usuarios[i] = data[i];
            }
        });

        vm.quienesPage = function(){
            window.location = "quienessomos";
        }
        vm.contactoPage = function(){
            window.location = "contacto";
        }
        vm.loginPage = function(){
            window.location = "login";
        }

        vm.userLogin = function(){

            if(vm.checkEmail()){
                if( vm.getPass(vm.useremail) == vm.userpass ){
                    vm.showName(vm.useremail);
                    if(vm.keeplogin){
                        console.log("No cerrar sesión en true");
                    }
                }else{
                    alert("Contraseña incorrecta");
                }
            }else{
                alert("Email no registrado, compruebe sus datos o regístrese");
            }
        }

        vm.userRegistration = function(){
            if(vm.userpass1 == vm.userpass2){
                if(!vm.checkEmail()){
                    vm.registerUser();
                }else{
                    alert("Email ya registrado en nuestra base de datos");
                }
            }else{
                alert("Las contraseñas no coinciden");
            }
        }

        vm.checkEmail = function(){
            for(var i=0;i<usuarios.length;i++){
                if(usuarios[i].email == vm.useremail){
                    return true;
                }
            }
            return false;
        }

        vm.registerUser = function(){
            var nuevoRegistro = new Usuarios ({name: vm.username, email: vm.useremail, password: vm.userpass1});
            nuevoRegistro.$save(function(){
                document.getElementById("bsignup").disabled = true;
                return true;
            });
        }
        vm.showName = function(email){
            for(var i=0;i<usuarios.length;i++){
                if(usuarios[i].email == email){
                    alert("Bienvenido, "+ usuarios[i].name);
                }
            }
            return false;
        }

        vm.getPass = function(email){
            for(var i=0;i<usuarios.length;i++){
                if(usuarios[i].email == email){
                    return usuarios[i].password;
                }
            }
            return false;
        }
    }]);


