import { render , screen} from "@testing-library/react"
import "@testing-library/jest-dom";


import SearchInput from "./SearchInput"

test("input with text render", () => {
    render(<SearchInput />);
  
   let item = screen.getByLabelText(/text/i);
   expect(item).toBeInTheDocument();
    
  });
  