import { FormEvent, useState } from 'react';

export interface IStateForm {
    name: string;
    age: string;
    gender: string;
    status: string;
}

const initialState = {
    name: '',
    age: '',
    gender: '',
    status: '',
};

const CreateEmployes = ({ submit }: { submit: Function }) => {
    const [form, setForm] = useState<IStateForm>(initialState);
    const { name, age, gender, status } = form;
    const onChange = (event: FormEvent) => {
        const target = event.target as HTMLInputElement | HTMLSelectElement;
        setForm({ ...form, [target.name]: target.value });
    };

    const _submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        submit(form);
        setForm(initialState);
    };

    return (
        <form role="form" className="form" onSubmit={_submit}>
            <div className="form__row">
                <label htmlFor="name">Name:</label>
                <input id="name" name="name" value={name} onChange={onChange} />
            </div>

            <div className="form__row">
                <label htmlFor="age">Age:</label>
                <input id="age" name="age" value={age} onChange={onChange} type="number" />
            </div>

            <div className="form__row">
                <label htmlFor="male">Male:</label>
                <input
                    id="male"
                    name="gender"
                    value="male"
                    onChange={onChange}
                    type="radio"
                    checked={gender === 'male'}
                />
            </div>

            <div className="form__row">
                <label htmlFor="female">Female:</label>
                <input
                    id="female"
                    name="gender"
                    value="female"
                    onChange={onChange}
                    type="radio"
                    checked={gender === 'female'}
                />
            </div>

            <div className="form__row">
                <label htmlFor="status">Status:</label>
                <select id="status" name="status" value={status} onChange={onChange}>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                </select>
            </div>
            <button type="submit">Add employer</button>
        </form>
    );
};

export default CreateEmployes;
