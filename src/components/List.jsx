import "boxicons";
import { default as api } from "../store/apiSlice";

export const List = () => {
    const {data , isFetching, isSuccess , isError} =  api.useGetLabelsQuery();
    const [deleteTransaction] = api.useDeleteTransactionMutation()
    let Transactions;
    
    const handleClick = (e) => {
      e.preventDefault();
       if(!e.target.dataset.id) return 0;
       deleteTransaction({_id : e.target.dataset.id})
    }

    if(isFetching){
      Transactions = <div>Fetching</div>
    }else if(isSuccess){
      Transactions = data.map((v , i) => <Transaction key={i} handler={handleClick} category={v}/> )
    }else if(isError){
      Transactions = <div>Error</div>
    }

    return (
        <div className='flex flex-col py-6 gap-3'>
            <h1 className='py-4 text-md text-bold text-xl'>History</h1>
           {
            Transactions
           }
       
        </div>
    );
};

function Transaction({category , handler}) {
    if(!category) return null;
    return(
        <div className="history item flex justify-center border bg-grey-50 py-2 rounded-r" style={{borderRight: `8px solid ${category.color}`}}>
            <button onClick={handler} className="px-3 "><box-icon data-id={category._id ?? ""} name="trash" color="red" /></button>
            <span className="block w-full">{category.name ?? ""}</span>

        </div>
    )
}