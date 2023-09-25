import { useEffect, useState } from "react";
import { query ,collection, where, orderBy, onSnapshot} from "firebase/firestore";
import { db } from "../config/firebase-config";
import { useGetUserInfo } from "./useGetUserInfo";
export const useGetTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [transactionTotal,setTransactionTotal] =useState({balance:0.0,income:0.0,expenses:0.0})
  const transactionCollectionRef = collection(db, "transactions");
const {userId} = useGetUserInfo();
  const getTransactions = async () => {
    let unsubscribe;
    try {
      const queryTransactions = query(transactionCollectionRef,where("userId","==" ,userId),orderBy("createdAt"));
     unsubscribe =  onSnapshot(queryTransactions,(snapshot) =>{
        let docs =[];
        let totalIncome=0;
        let totalExpense =0;
        snapshot.forEach((doc)=>{
            const data =doc.data();
            const id =doc.id;

            docs.push({...data,id});
            

            if(data.transactionType === "expense"){
              totalExpense+= +(data.transactionAmount)
            }
            else{
              totalIncome+= +(data.transactionAmount)
            }
        })
        setTransactions(docs); 

        let balance =totalIncome-totalExpense;
        setTransactionTotal({
           balance, expenses:totalExpense,income:totalIncome
        })
    });
    } 
    catch (err) {
      console.error(err);
    }

    return () => unsubscribe();
  };
  useEffect(() => {
    getTransactions();
  }, []);
  return { transactions ,transactionTotal};
};
