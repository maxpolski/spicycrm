import React, { findDOMNode, Component } from 'react';
import ValidatorChain from '../../library/validators';
import FormInput from './InputElement'

var EditContact = {};

export default EditContact = React.createClass ({

  getInitialState() {
    return {}
  },

  render() {

    let inputs = [];
    for( let key in this.props.data ) {
      inputs.push({'key': key, 'val': this.props.data[key]});
    }

    return(
      <form role="form" id='formGroup'>
        <h3>Edit an existing contact</h3>

        {inputs.map( (value, index) => {
              return (
                <FormInput
                  id = {value.key}
                  val = {value.val}
                  ref = {value.key}
                  setCurrentProps = {this.props.setCurrentProps}
                />
              )
            }
          )
        }

        <div type="submit" onClick = { this.onEdit } className="btn btn-default">Save</div>
        <div type="submit" onClick = { this.onDelete } className="btn btn-danger">Delete</div>
        <div type="submit" onClick = { this.props.cancelEditing } className="btn btn-default">Cancel</div>
      </form>
    )
  },
  getFormData(id = '') {
    let formData = {};
    for(let element in this.refs) {
      let parentEl =  this.refs[element].getDOMNode();
      formData[element] = parentEl.querySelector('input').value;
    }
    return id ? formData[id] : formData;
  },
  onEdit() {
    let data = this.getFormData();
    let validationRules = {
            __v: {
              validator: [],
            },
            _id: {
              validator: ['stringlength'],
              options: {
                  minLength: 0,
                  maxLength: 50
              }
            },
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
      this.props.onEdit(data);
    } else {
      this.showErrors(inputValidator.getErrorMessages());
    }

  },

  showErrors(errors) {
    for(let refId in errors) {
      this.refs[refId].showError(errors[refId]);
    }
  },
  onDelete() {
    let _id = this.getFormData('_id');
    this.props.onDelete(_id);
  }

});
