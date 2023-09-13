export const getStoredItem=()=>{
  return localStorage.getItem("transaction");
}
export const storeItem=(params)=>{
  localStorage.setItem("transaction",JSON.stringify(params));
}
export const deleteItem = (id) => {
  const items = JSON.parse(localStorage.getItem("transaction"));
  localStorage.setItem("transaction", JSON.stringify(items.filter((item) => item.id !== id)));
}