import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'mdbreact';
import { NavItem,Row, Col,Input } from 'react-materialize';
import Progress from 'react-progress';
import { NavLink } from 'react-router-dom'

const OneStep = () => (
    
    
<section className="form-elegant">
<br/>
    <Row>
        <Col>
        <h6 className="h6-account">CREATE AN ACCOUNT</h6>
        
        <p className="p-margin-0">Nice to meet you!</p>
        <label className="font-small black-text label-welcome">Welcome to Adopets! Let´s get your organization registered with the app.</label>
        
        <label className="font-small grey-text label-min">Use this form to register a new  shelter or rescue. If you want join an existing shelter or rescue</label>
        <label className="font-small grey-text label-min">account, please  contact the Master Account for the organization.</label>
             
        <Row>
        <Input s={8} label="First name"/>
                
        <Input s={8} label="Last name" />
       </Row>
       
        <Row>
        <Input s={8} type='select' className="grey-text" label="What pronoun do you prefer?">
            <option value='1'>Mr.</option>
            <option value='2'>Mrs.</option>
            <option value='3'>Ms.</option>
            <option value='3'>Sir</option>
        </Input>
        </Row>
        
       
        
        <Button className="next-radius">Next</Button>
   
    </Col>
        
</Row>
    <row><Progress value={25} color="success"></Progress></row>
</section>
   
    
);

export default OneStep;