/**
 * Created by Enrique 2 on 11/11/2015.
 */

var corporativeApp = angular.module("corporativeApp", []);
corporativeApp.controller("corporativeAppCtrl", corporativeAppCtrl);

function corporativeAppCtrl(){
    var vm = this;

    vm.variable = '#toregister';

    vm.quienesPage = function(){
        window.location = "quienessomos.html";
    }
    vm.contactoPage = function(){
        window.location = "contact-form.html";
    }
    vm.loginPage = function(){
        window.location = "login.html";
    }

    vm.userLogin = function(){
        if( vm.checkEmail() ){
            if( vm.getPass(vm.useremail) == vm.userpass ){
                console.log("Login correcto");
                if(vm.keeplogin){
                    console.log("No cerrar sesión en true");
                }
            }else{
                console.log("Email y contraseña no coincidentes");
            }
        }else{
            console.log("Email no válido");
        }
    }

    vm.userRegistration = function(){
        if(vm.userpass1 == vm.userpass2){
            if( !vm.checkEmail() ){
                if( !vm.checkUsername() ){
                    console.log("Registrado correctamente");
                }else{
                    console.log("Username no disponible, prueba con otro");
                }
            }else{
                console.log("Email ya registrado en nuestra base de datos");
            }
        }else{
            console.log("Las contraseñas no coinciden");
        }
    }

    vm.checkEmail = function(){
        return true;
    }
    vm.checkUsername = function(){
        return true;
    }
    vm.getPass = function(email){
        //realizo búsqueda en la base de datos y devuelvo el pass del email que recibo por parametro
    }
}