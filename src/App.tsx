import { useState, useEffect } from 'react';
import { Employes, CreateEmployes } from './Components';
import { IStateForm } from "./Components/CreateEmployes";
import "./style.css";

const App = () => {
    const [state, setState] = useState([]);

    const getEmployes = async () => {
        await fetch('/api/82731997a4b24029814d6bce8bd28e58/unicorns').then((response) => {
            response.json().then((data) => {setState(data)});
        });
    };

    useEffect(() => {
        getEmployes();
    }, []);

    const submit = async (data: IStateForm) => {
        await fetch('/api/82731997a4b24029814d6bce8bd28e58/unicorns', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        getEmployes();
    };

    return (
        <>
            <Employes data={state} />
            <hr />
            <CreateEmployes submit={submit} />
        </>
    );
}

export default App;
