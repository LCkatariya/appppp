import { findAllByRole, screen } from '@testing-library/dom';
import { render } from "@testing-library/react";
import userEvent from '@testing-library/user-event';


const App = () =>{
    return(
        <select>
            <option value={1}>lalchand</option>
            <option value={2}>suresh</option>
            <option value={3}>lxman</option>
        </select>
    )
}


render(<App />)

describe('App component testing', () => {
    // test('should open select india and close dropdowns', async () => {
    //     const open = screen.getByTestId('selectC')
    //     await userEvent.click(open)
    //     const option = await screen.findByRole('option', { name: 'India' })
    //     await userEvent.click(option)
    //     expect(screen.queryByRole('option', { name: 'India' })).not.toBeInTheDocument()
    //     expect(screen.getByText(/India/i)).toBeInTheDocument()
    // })
    test('should start next test case no 2', async () => {
        const select = screen.getByRole('combobox')
        await userEvent.selectOptions(select, 'suresh')
        const sureshOption = screen.getByRole('option', {
            name: 'suresh',
        }) as HTMLOptionElement

        expect(sureshOption.selected).toBe(true)
        const lalchandOption = screen.getByRole('option', {
            name: 'lalchand',
        }) as HTMLOptionElement

        expect(lalchandOption.selected).toBe(false)
    })
})