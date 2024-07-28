import React, {useState, useEffect} from 'react';


const ImportFunc = () => {

    const [names, setNames] = useState([]);
    const [field, setField] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
}
    , []);

    const fetchData = async () => {
        try {
        const dataVal = await fetch('/api/names');
        setNames(await dataVal.json());
        setLoading(false);
        }
        catch (error) {
            console.log('Cannot load data',error);
        }

    }

    const onChange = (e) => {
        setField(e.target.value);
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!loading) {
            try {
            await fetch('/api/names',
            {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json',
                },
                body: JSON.stringify({first: field}),
            }
            );
          
            fetchData();
            setField('');
            setLoading(true);
        }
        catch (error) {
                console.log('error adding name',error);
        }
        }
    }
 return (

    <div>
        <form onSubmit = {onSubmit}>
        <input
        type = "text"
        value = {field}
        onChange = {onChange}
        placeholder = "Enter Name"
        required
        />

            <button type = "submit"> Submit Name</button>
        </form>
    <div>
        {loading ? (<p> Loading...</p>) : (
            <ul>
                {names.map((name,index) => 
                (
                    <li key = {index}> {name.first}  </li>
                ))}
            </ul>
        )
            
        }
    </div>


    </div>
 );





}
export default ImportFunc;