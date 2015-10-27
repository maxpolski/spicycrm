import React, { findDOMNode, Component } from 'react';
import ValidatorChain from '../../library/validators';
import FormInput from '../form/InputElement';

var AddContact = {};

export default AddContact = React.createClass ({
  render() {

    let inputs = ["name", "company", "email", "phone", "group"];

    return(
      <form  id='formGroup'>
        <h3>Add a new contact</h3>
        <hr />
        { inputs.map( (val) =>
          <FormInput
            id = {val}
            val = {''}
            ref = {val}
          />
        )}
        <div  onClick = { this.onAdd } className="btn btn-default">Save</div>
        <div
          onClick = { this.props.cancelAdding }
          className="btn btn-default"
        >
            Cancel
        </div>
      </form>
    )
  },
  getFormData()   {
    let formData = {};
    for(let element in this.refs) {
      let parentEl =  this.refs[element].getDOMNode();
      formData[element] = parentEl.querySelector('input').value;
    }
    return formData;
  },
  onAdd() {

    let data = this.getFormData();
    let validationRules = {
            email: {
                validator: ['email', 'notempty']
            },
            name: {
                validator: ['stringlength'],
                options: {
                    minLength: 3,
                    maxLength: 20
                }
            },
            phone: {
                validator: ['notempty']
            },
            company: {
                validator: ['notempty', 'stringlength'],
                options: {
                    minLength: 3,
                    maxLength: 20
                }
            },
            group: {
                validator: ['notempty']
            }
    };

    let inputValidator = new ValidatorChain();

    _.each(validationRules, (value, fieldName) => {
      inputValidator.add(fieldName, {
        value: value.validator,
        options: value.options
      });
    });

    if(inputValidator.isValid(data)) {
      this.props.onAdd(data);
    } else {
      this.showErrors(inputValidator.getErrorMessages());
    }

  },

  showErrors(errors) {
    for(let refId in errors) {
      this.refs[refId].showError(errors[refId]);
    }

  }
});
