import { render , screen} from "@testing-library/react"
import "@testing-library/jest-dom";
import { userEvent } from "@testing-library/user-event/dist/types/setup"

import SearchInput from "./SearchInput"

test("input with text render", () => {
    render(<SearchInput />);
  
    const headerDom = screen.ge
    expect(headerDom).toBeInTheDocument();
  });
  