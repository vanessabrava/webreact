// Importando o React
import React from "react";
// Importantando o component Home
import OneStep from "./create/OneStep/OneStep";
// Importando os components necessárias da lib react-materialize
import { Container } from 'react-materialize';
// Importanto o component <Switch /> e <Route /> da nossa Lib de rotas
import { Switch, Route } from 'react-router-dom'

const Main = () => (
  <main>
    <Container>
      <Switch>
        <Route exact path='/' component={OneStep}/>
       
      </Switch>
    </Container>
  </main>  
);

export default Main;