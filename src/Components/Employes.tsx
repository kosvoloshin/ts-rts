import React from 'react';

interface IObject {
    age: number | string,
    gender: string,
    name: string,
    status: string,
    _id: string,
}

interface IProps {
    data: Array<IObject>
}


const Employes = ({ data }: IProps) => {

    return (
        <table role="table">
            <tbody>
                {data.map(({ _id, name, age, gender, status }: IObject) => {
                    return (
                        <tr data-testid="employes-row" role="row" key={_id}>
                            <td>{name}</td>
                            <td>{age}</td>
                            <td>{gender}</td>
                            <td>{status}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default Employes;
