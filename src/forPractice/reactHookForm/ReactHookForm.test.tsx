import { render, screen, within } from "@testing-library/react"
import ReactHookForm from "./ReactHookForm"
import userEvent from "@testing-library/user-event"


describe('React Hook Form component test case', () => {
    test('render react hook form fields', () => {
        render(<ReactHookForm />)
        expect(screen.getByRole('heading', { name: /ReactHookForm/i }))
        expect(screen.getByLabelText(/first name/i)).toBeInTheDocument()
        expect(screen.getByLabelText(/last name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/age/i)).toBeInTheDocument()
        expect(screen.getByLabelText('Password')).toBeInTheDocument();
        expect(screen.getByLabelText(/Confirm password/i)).toBeInTheDocument()
        expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    })
    test('allow user to type input', async () => {
        render(<ReactHookForm />)
        await userEvent.type(screen.getByLabelText(/first name/i), 'lalchand')
        expect(
            screen.getByLabelText(/first name/i)
        ).toHaveValue('lalchand')
        await userEvent.type(screen.getByLabelText(/last name/i), 'katariya')
        await userEvent.type(screen.getByLabelText(/age/i), '23')
        await userEvent.type(screen.getByLabelText('Password'), 'lalchand@123')
        await userEvent.type(screen.getByLabelText(/confirm password/i), 'lalchand@123')
        await userEvent.type(screen.getByLabelText(/email/i), 'lalchand@lal.com')
        await userEvent.click(screen.getByRole('button', { name: 'Submit' }))
        const sucessfuly = await screen.findByText(/form sucessfuly submit/i)
        expect(sucessfuly).toBeInTheDocument()
        const ele = screen.getByLabelText(/first name/i)
        screen.debug(ele)
        expect(ele).toHaveValue('')
    })
    test("check text within message", ()=>{
        const {getByText} = render(<div>great</div>)
        const message = getByText('great')
        const greatMessage = within(message).getByText('great')
    })
    test("lalchand", ()=>{
        
    })
})