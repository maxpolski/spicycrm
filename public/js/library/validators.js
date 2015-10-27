import * as _ from 'lodash';

let Validator = function() {};

    Validator.prototype.errorMessage = '';
    Validator.prototype.isValid = function(value) {
        throw new Error(' Method must be implemented in child class');
    };

    Validator.prototype.setErrorMessage = function(msg) {
        this.errorMessage = msg;
    };

    Validator.prototype.getErrorMessage = function() {
        return this.errorMessage;
    };


let ValidateName = function(options) {
        this.value;
        this.minLength = options.minLength;
        this.maxLength = options.maxLength;
        this.errorMessage;
    };

    ValidateName.prototype.errorMessage = "Value length must be between <min> and <max> characters";

    ValidateName.prototype.getErrorMessage = function() {
        return this.errorMessage.replace('<min>', this.minLength).replace('<max>', this.maxLength);
    };

    ValidateName.prototype.isValid = function(value) {
        this.value = value;

        if(this.value.length < this.minLength || this.value.length > this.maxLength) {
            return false;
        }

        return true;
    };


//IsNotEmptyValidate

let ValidateIsNotEmpty = function(options) {
        this.value;
        this.errorMessage;
    };

    ValidateIsNotEmpty.prototype = new Validator();

    ValidateIsNotEmpty.prototype.isValid = function(value) {
        this.value = value;

        if(this.value == '') {
            this.setErrorMessage('Required field. Can`t be empty');

            return false;
        }
        this.errorMessage = '';

        return true;
    };

let ValidateEmail = function(options) {
        this.value;
        this.errorMessage;
    };

    ValidateEmail.prototype = new Validator();

    ValidateEmail.prototype.isValid = function(val) {
        this.value = val;

        var reg = new RegExp('^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$');

        if(!reg.test(this.value)) {
            this.setErrorMessage('Not valid email');

            return false;
        }
        this.errorMessage = '';

        return true;
    };

var Validation = function() {
        this.email =  ValidateEmail,
        this.stringlength = ValidateName,
        this.notempty = ValidateIsNotEmpty
    };

let ValidatorChain = function() {
        this.errors = {};
        this.validators = {};
        this.data = {};
        console.log('validator chain created');
    };

    ValidatorChain.prototype.add = function(fieldName, validatorDefinition) {
        this.validators[fieldName] = [];

        let options = validatorDefinition.options || {};

        for(var i = 0; i < validatorDefinition.value.length; i++) {
            this.validators[fieldName].push(new Validation[validatorDefinition.value[i]](options));
        }
    };

    ValidatorChain.prototype.isValid = function (data) {
        var scope = this;
        var isValid = true;

        _.each(data, function(value, index) {
            scope.errors[index] = [];

            for(var i = 0; i < scope.validators[index].length; i++) {

                isValid &= scope.validators[index][i].isValid(value);
                if(!isValid) {
                    scope.errors[index].push(scope.validators[index][i].getErrorMessage());
                }
            }
        });
        return isValid;
    };

    ValidatorChain.prototype.getErrorMessages = function() {
        return this.errors;
    };

export default ValidatorChain;
