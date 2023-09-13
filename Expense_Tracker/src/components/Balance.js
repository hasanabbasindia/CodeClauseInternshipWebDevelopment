import { Box, Typography, styled } from '@mui/material'

const BalanceText = styled(Typography)`
  font-size: 25px;
  color: blue;
  margin-bottom: 25px;
`

const Balance = ({ mainbalance }) => {

  return (
    <Box>
      <BalanceText> Balance = ₹ {mainbalance}</BalanceText>
    </Box>
  )
}
export default Balance
