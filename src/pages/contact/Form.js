import React from "react"
import { TextField, Button } from '@material-ui/core'
import styled from 'styled-components';
import { withStyles } from "@material-ui/core/styles"

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

const CssTextField = withStyles({
  root: {
    // Field background
    '& .MuiFilledInput-root': {
      backgroundColor: 'rgba(0, 0, 0, 0.0)',
    },
    // Input
    '& .MuiFilledInput-inputMarginDense': {
      color:'#262626',
    },
    // Label overhead
    '& .MuiInputLabel-filled.MuiInputLabel-shrink.MuiInputLabel-marginDense':{
      color: '#d6d6d6',
    },
    // Label initial
    '& .MuiFormLabel-root': {
      color:'#5c5c5c',
    },
  },
})(TextField);

class Form extends React.Component {
  constructor(){
    super();
    this.state= {text: 'Submit'}
  }
  state = {
    firstName: "",
    lastName: "",
    email: "",
   };

   handleClick = e => {
     fetch("/", {
       method: "POST",
       headers: { "Content-Type": "application/x-www-form-urlencoded"},
       body: encode({ "form-name": "contact", ...this.state })
      })
        .catch(error => alert("Error! Please fill out all required fields"))
        .then(() => this.setState({text:'Sent!'}))
        

      e.preventDefault();
   }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  };

  render (){
    return (
        <form 
          name="contact" 
          method="POST"
          data-netlify="true" 
          data-netlify-honeypot="bot-field"
          Content-Type="application/x-www-form-urlencoded"
          
        >
          <input type="hidden" name="form-name" value="contact" />
          <Field>
            <CssTextField
              fullWidth
              label="First Name"
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleInputChange}
              variant="filled"
              size="small"
              required
              // className={classes.myCustomClass}
            />
          </Field>
          <Field>
            <CssTextField
              fullWidth
              label="Last name"
              type="text" 
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleInputChange}
              variant="filled"
              size="small"
              required
            />
          </Field>
          <Field>
            <CssTextField
              fullWidth 
              label="Email"
              type="email" 
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              variant="filled"
              size="small"
              required
            />
          </Field>
          <Field>
            <CssTextField
              fullWidth
              label="Message"
              id="filled-multiline-static" 
              name="message"
              multiline
              rows={8}
              variant="filled"
              size="small"
              required
            />
          </Field>
          <Field>
            <Button variant="contained" type="submit" onClick= {this.handleClick}>
              {this.state.text}
            </Button>
          </Field>
        </form>
    )
  }
}

const Field = styled.div`
  margin-bottom: 10px;
`

export default Form
// export default withStyles(styles, { withTheme: true })(Form)