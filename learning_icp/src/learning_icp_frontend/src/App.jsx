import { useCallback, useEffect, useState } from 'react';
import { learning_icp_backend } from 'declarations/learning_icp_backend';
import './index.css';

function App() {
  const [newPhoneRecord, setNewPhoneRecord] = useState({
    name: "",
    entry: {
      phone: "",
      desc: ""
  }
  })
  const [phoneBook, setPhoneBook] = useState([])
  const [isLoading, setIsLoading] = useState(false)

const handleSubmit = (e) => {
e.preventDefault();
     
setIsLoading(true);
learning_icp_backend.insert(newPhoneRecord) .then((res) => {
  const updatedPhoneBook = [...phoneBook, res];
    setPhoneBook(updatedPhoneBook);
    setIsLoading(false)
});
//clean states
setNewPhoneRecord({ name: "", entry: { phone: "", desc: "" } });
}

 const fetchAllPhoneRecords = useCallback(async () => {
    try {
      setIsLoading(true)
      const res = await learning_icp_backend.getAllRecords().then((res) => {
      setPhoneBook(res)
      setIsLoading(false)});
    } catch (error) {
      console.error('Error fetching phone records:', error);
    }
  }, []);

  useEffect(() => {fetchAllPhoneRecords()}, [fetchAllPhoneRecords])



  return (
    <main className="bg-red-200 text-red-300">
    <h1>PhoneBook | Please Enter A Record</h1>
      <form action="#" onSubmit={handleSubmit} style={{padding: "50px 10px", borderRadius: "12px", border: "1px solid #dddddd"}}>

      <span>
        <label htmlFor="name">Name:</label>
        <input value={newPhoneRecord.name} onChange={(e) => setNewPhoneRecord({...newPhoneRecord, name: e.target.value})} id="name" alt="Name" type="text" />
      </span>

      <span>
        <label htmlFor="Phone">Phone</label>
        <input value={newPhoneRecord.entry.phone}  onChange={(e) => setNewPhoneRecord({...newPhoneRecord, entry: {...newPhoneRecord.entry, phone: e.target.value}})} id="Phone" alt="Phone" type="text" />
      </span>


      <span>
        <label htmlFor="Phone">Description</label>
        <input value={newPhoneRecord.entry.desc} onChange={(e) => setNewPhoneRecord({...newPhoneRecord, entry: {...newPhoneRecord.entry, desc: e.target.value}})} id="Description" alt="Description" type="text" />
      </span>


        <button type="submit">Submit</button>
      </form>
      <section>
        <h2 style={{color: "purple"}}>Phonebook Records</h2>

   
        <table>
            <th>Name</th>
            <th>Phone</th>
            <th>Description</th>
            {phoneBook.map((record,index) => (
          <tr key={index}>
            <td>{record.name}</td>
            <td>{record.entry.phone}</td>
            <td>{record.entry.desc}</td>
          </tr>      
          ))}
        </table>
            {isLoading ? <div style={{width:"350px", height:"20px", backgroundColor: "#dddd"}}></div> : ""}
      </section>
 
    </main>
  );
}

export default App;

