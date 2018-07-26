// Importando o React
import React from "react";
// Importando os componentes OneStep
import OneStep from "./create/onestep/onestep";
// Importando os components necessários da lib react-materialize
import { Container } from 'react-materialize';

import { Switch, Route } from 'react-router-dom'

const Main = () => (
  <main>
    <Container>
    <Switch>
        <Route exact path='/' component={OneStep}/>
      <OneStep />
      </Switch>
    </Container>
  </main>  
);

export default Main;