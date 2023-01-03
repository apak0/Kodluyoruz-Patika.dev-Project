import  {render , screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";


import SearchInput from "./SearchInput"

describe("Input testing", () => {
    let input;

    beforeEach(()=> {
        render(<SearchInput />);

        input = screen.getByPlaceHolder();
    })
})