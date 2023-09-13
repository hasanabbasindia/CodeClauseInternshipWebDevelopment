import { ListItem, ListItemText, styled } from '@mui/material'
import Chip from '@mui/joy/Chip'
// eslint-disable-next-line
import { deleteItem } from '../localStorage'
import DeleteIcon from '@mui/icons-material/Delete';

const Detail = styled(ListItem)`
  margin-top: 15px;
`
const Transaction = ({ transaction,setTransactions,transactions }) => {
  const color = transaction.amount > 0 ? 'green' : 'red'
  const handleDelete=(id)=>{
    deleteItem(id);
    const temp1=transactions.filter((x)=>x.id!==id)
    setTransactions(temp1);
  }
  return (
    <div className="inner">
      <Detail style={{ background: color, color: 'white' }}>
        <ListItemText>{transaction.text}</ListItemText>
        <ListItemText>{transaction.amount}</ListItemText>
        <button className='deletebutton' onClick={()=>{handleDelete(transaction.id)}}>
          <Chip 
            size="lg"
            variant="solid"
            color="danger"
            label="DELETE"
          >
            <span className='delete' >DELETE</span><DeleteIcon />
          </Chip>
        </button>
      </Detail>
    </div>
  )
}

export default Transaction
