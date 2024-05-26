import logo from './logo.svg';
import './App.css';
import header from"./myComponents/header";
import {todos} from"./myComponents/Todos";
import {footer} from"./myComponents/footer";
function App() {
  const onDelete =()=>{
    console.log("i am on delete of todo","todo")

  }
let Todos=[
{
sno:1,
title:"go to the market",
desc:"you need to go to the market to get this job done"  
}, 
{
  sno:2,
  title:"go to the mall",
  desc:"you need to go to the mall to get this job done"  
  } ,
  {
    sno:3,
    title:"go to the ghat",
    desc:"you need to go to the ghat to get this job done"  
    } 
]
  return (
<>
<header title="mytodoslist" searchbar={false}/>
<Todos todos={todos} onDelete={onDelete}/>
<footer/>
 </>  
   
  );
}

export default App;
