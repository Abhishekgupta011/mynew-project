import Expenseitems from './newcompo/Expenseitems';
function App(){
  const ExpenseArray = [
    {
      id: 'e1',
      title: 'toilet paper',
      amount: 94.12,
      date: new Date(2019,3,18),
      location : 'Los Angeles, CA'
    },
    {
      id: 'e2',
      title: 'groceries',
      amount: 230.56,
      date: new Date(2020, 6, 15),
      location: 'New York, NY',
    },
    {
      id: 'e3',
      title: 'gasoline',
      amount: 50.0,
      date: new Date(2021, 2, 10),
      location: 'Chicago, IL',
    },
     ];
     const expenseItems = [];

  for (let i = 0; i < ExpenseArray.length; i++) {
    const expense = ExpenseArray[i];
    expenseItems.push(
      <Expenseitems
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        location={expense.location}
      />
    );
  }
     
  return(
    <div>
       <h2>Let's get started</h2>
       {expenseItems}
    </div>
  );
}
export default App;