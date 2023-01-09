import { render , screen} from "@testing-library/react"
import "@testing-library/jest-dom";
import SearchInput from "../SearchInput";
import userEvent from "@testing-library/user-event";


describe("Input tests", () => {
    let input;
    const setup = () => render(<SearchInput />);

    beforeEach(() => {
        
        // eslint-disable-next-line testing-library/no-render-in-setup
        setup();
        input = screen.getByLabelText(/text/i);
        
    });

    test("Input test", () => {
        
        expect(input).toBeInTheDocument();
        
    })

})
