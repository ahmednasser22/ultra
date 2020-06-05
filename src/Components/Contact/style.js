/*
    ===============================
            Drop Styles
    ===============================
*/
import styled from 'styled-components';
export const ContactSection = styled.div`
text-align: center
`,

    ContactTitle = styled.h2`
font-size: 60px;
position : relative;
&::after {
    content: "";
    width: 10%;
    background-color: #fd7500;
    height: 2%;
    position: absolute;
    display: block;
    left: 44.7%;
    top : 123%;
    `,
    Span = styled.span`
font-weight: normal;
&::after {
    content: "";
    width: 18%;
    background-color: #fd7500;
    height: 3%;
    position: absolute;
    display: block;
    left: 41%;
    top: 110%;
    }
`,
    Form = styled.form`
width: 70%;
margin: auto;
`,

    FormInput = styled.div`
overflow: hidden;
`,
    Input = styled.input`
box-sizing: border-box;
margin-bottom: 10px;
padding: 10px;
border: 1px solid#fd7500;
border-radius: 10px;
outline: none; 
font-size: 18px;
color: #a03535;
`,


    TextInput = styled(Input)`
float: left;
width: 49%;
`,

    EmailInput = styled(Input)`
float: right;
width: 49%;
`,

    SubjectInput = styled(Input)`
width: 75%;
`,

    Textarea = styled.textarea`
width: 75%;
outline: 0;
background: none;
font-size: 18px;
padding: 10px;
border: 1px solid#fd7500;
color : #a03535;
    `,

    SubmitInput = styled(Input)`
width: 30%;
background: #fff;
border: 1px solid #fd7500;
color: #888;
cursor: pointer;
font-weight : normal;
letter-spacing : 1px;
transition : ease-in-out .5s;
&:hover{
    background-color : #fd7500;
    color : white;
    border-color : white;
}
    `;


