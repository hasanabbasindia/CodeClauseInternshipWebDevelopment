import { useState } from 'react'

import { Box, Typography, TextField, Button, styled,Alert } from '@mui/material'
import { storeItem,getStoredItem } from '../localStorage'

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  & > h4 {
    margin-top: 40px;
  }
  & > div,
  & > button {
    margin-top: 40px;
  }
`
const Add = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`
const AlertContainer = styled(Box)`
  position:absolute;
  right:0;
  top:0;
  z-index:20;

`

const NewTransactions = ({ setTransactions,mainbalance }) => {
  const [text, setText] = useState('')
  const [amount, setAmount] = useState()
  const [alert1,setAlert]=useState(false)

  const stopAlert=()=>{
    setAlert(false)
  }
  const addExpenseTransaction = () => {
    if (text===''|| amount==='') {
      alert('Pls enter required details!!!')
    }
    else if(isNaN(amount)){
      alert('pls enter amount in number!')
    }
    else{
    let mainbalancecopy=mainbalance;
    if(mainbalancecopy-amount<0){
      setAlert(true);
      // eslint-disable-next-line
      const closeAlert = setTimeout(stopAlert, 3000);
    }
    else{
      const transaction = {
        id: Math.floor(Math.random() * 100000),
        text: text,
        amount: -amount,
      }

      let history = JSON.parse(getStoredItem()) ?? [];
      
      history.push(transaction);

      storeItem(history);
      setTransactions((prevState) => [transaction, ...prevState]);
    }
  }}
  const addIncomeTransaction = () => {
    if (text===''|| amount==='') {
      alert('Pls enter required details!!!')
    }
    else if(isNaN(amount)){
      alert('pls enter amount in number!')
    }
    else{
      const transaction = {
        id: Math.floor(Math.random() * 100000),
        text: text,
        amount: +amount,
      }

      let history = JSON.parse(getStoredItem()) ?? [];
        
      history.push(transaction);

      storeItem(history);
        
      setTransactions((prevState) => [transaction, ...prevState])
    }}

  return (
    <Container>
      {alert1 ? <AlertContainer><Alert severity='error'>"Not enough Balance."</Alert></AlertContainer> : <></> }
      <Typography variant="h4"> New Transaction </Typography>
      <TextField
        variant="filled"
        label="Enter Expense"
        onChange={(e) => setText(e.target.value)}
      />
      <TextField
        variant="filled"
        label="Enter Amount"
        onChange={(e) => setAmount(e.target.value)}
      />
      <Add>
        <Button
          style={{ width: '200px' }}
          variant="contained"
          onClick={() => addExpenseTransaction()}
        >
          Expense
        </Button>
        <Button
          style={{ width: '200px' }}
          variant="contained"
          onClick={() => addIncomeTransaction()}
        >
          Income
        </Button>
      </Add>
    </Container>
  )
}
export default NewTransactions
