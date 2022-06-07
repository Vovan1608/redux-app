import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {
    const dispatch = useDispatch();
    const cash = useSelector(state => state.cash.cash);
    const customers = useSelector(state => state.customers.customers);

    const addCash = (cash) => {
        dispatch({ 
            type: 'ADD_CASH', 
            payload: cash
        });
    };

    const getCash = (cash) => {
        dispatch({ 
            type: 'GET_CASH', 
            payload: cash
        });
    };

    const addCustomer = (name) => {
        const customer = {
            name,
            id: Date.now()
        };

        dispatch({
            type: 'ADD_CUSTOMER',
            payload: customer
        });
    };

    const deleteCustomer = (customer) => {
        dispatch({
            type: 'DELETE_CUSTOMER',
            payload: customer.id
        });
    };

    return (
        <div className="App">
            <div>{cash}</div>
            <div style={{ display: "flex" }}>
                <button onClick={() => addCash(Number(prompt()))}>Add cash</button>
                <button onClick={() => getCash(Number(prompt()))}>Get cash</button>
                <button onClick={() => addCustomer(prompt())}>Add customer</button>
                <button onClick={() => deleteCustomer(prompt())}>Delete customer</button>
            </div>
            <div>
                {customers.length > 0 ?
                    <div>
                        {customers.map((customer) => <div onClick={() => deleteCustomer(customer)} key={customer.id}>{customer.name}</div>)}
                    </div>
                    :
                    <div>No customers</div>
                }
            </div>
        </div>
    );
}

export default App;
