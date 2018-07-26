// Importando o React
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-materialize';
// Importando os components necessários da lib react-materialize
import {Navbar, NavItem,Row, Col, Input, Button} from 'react-materialize';




const OneStep = () => (
    <Row>
    
        <h5 className="subtitle">Nice to meet you!</h5>
        <h1>Welcome to Adopets!Let´s get your organization registered with the app.</h1>
        <p>Use this form to register a new  shelter or rescue. If you want join an existing shelter or rescue</p>
        <p>account, please  contact the Master Account for the organization.</p>
        
        <Row>
        <Input s={6} label="First name"/>
        <Input s={6} label="Last name" />
        </Row>
           
        <Input s={6} type='select' label="What pronoun do you prefer?">
            <option value='1'>Mr.</option>
            <option value='2'>Mrs.</option>
            <option value='3'>Ms.</option>
            <option value='3'>Sir</option>
        </Input>
       
        <Button  color="#ce3f71" aria-label="Delete" className={classes.button}>
        Next</Button>
    
    <Col s={12}>
    <ProgressBar progress={25}/>
    </Col>

    </Row>
    
);

export default OneStep;