test('Component Header renders', () => {    
    render(<Header />);
    const headerElement = screen.getByText(/Investment Calculator/i);
    expect(headerElement).toBeInTheDocument();
    });