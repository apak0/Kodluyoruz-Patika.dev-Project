import  {render , screen} from "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import SearchInput from "./SearchInput"


describe("Input testing", () => {
    let input;

    beforeEach(()=> {
        render(<SearchInput />);

        input = screen.getByPlaceholderText("Search");
    });

    test("belirtilen placehorder bulunmalı", () => {
        const items = screen.getAllByPlaceholderText(/Search/i);
        
        except(items.length).toEqual(6);
    });
})