
import { Results} from './Results';
import { test, expect } from "vitest";

test("renders the component"), () => {
    render(<Results />);
    const headerElement = screen.getByText(/Results/i); // Replace with actual text
    expect(headerElement).toBeInTheDocument();
    };