import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'

export function Form() {
    const registerInput = async event => {
        event.preventDefault();

        const res = await fetch('/api/vips', {
                body: JSON.stringify({
                    name: event.target.name.value,
                    email: event.target.email.value,
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST'
        });

        const result = await res.json()
    }

    return (
        <form onSubmit={registerInput}>
        <span className="p-float-label">
            <InputText name='name' id="name" className='inputfield' required />
            <label name='name' id="name">Name</label>
        </span>

        <span className="p-float-label">
            <InputText name='email' id="email" className='inputfield' type='email' required />
            <label name='email' id="email">Email</label>
        </span>
        <Button type='submit' label='Save' className='p-button-primary' /> 
    </form>
    )
}
