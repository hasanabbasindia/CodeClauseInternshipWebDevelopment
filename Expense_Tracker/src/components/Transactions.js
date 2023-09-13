import { Box, Typography, Divider, List } from '@mui/material'
import Transaction from './Transaction'

const Transactions = ({ transactions ,setTransactions}) => {
  if(transactions.length===0){
    return(<>
    <h3>No Data Available</h3>
    
    </>)
  }else{
    return (
    <Box>
      <Typography variant="h5"> Transaction History </Typography>
      <Divider />
      <List>
        {transactions.map((transaction) => (
          <Transaction transaction={transaction} setTransactions={setTransactions} transactions={transactions}/>
        ))}
      </List>
    </Box>
  )
  }
}
export default Transactions
