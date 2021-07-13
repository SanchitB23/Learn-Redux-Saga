import React, {useState} from 'react';
import {Button, Form, FormGroup, Input, Label} from "reactstrap";


const NewUserForm = ({onSubmit}) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({firstName, lastName})
    setLastName('')
    setFirstName('')
  }

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value)
  }
  const handleLastNameChange = (e) => {
    setLastName(e.target.value)
  }
  return (
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>First Name</Label>
          <Input required placeholder={"First Name"} onChange={handleFirstNameChange} value={firstName}/>
        </FormGroup>
        <FormGroup>
          <Label>Last Name</Label>
          <Input required placeholder={"Last Name"} onChange={handleLastNameChange} value={lastName}/>
        </FormGroup>
        <FormGroup>
          <Button block outline type="submit" color="primary">Create</Button>
        </FormGroup>
      </Form>
  );
};

export default NewUserForm;
