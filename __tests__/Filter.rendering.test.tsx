import { render, screen } from "@testing-library/react";
import { Filter } from "./../src/components/filter";
import { FilterOption } from "./../src/shared/filter-option";

describe("Filter", () => {
    describe("rendering", () => {
        it("should render buttons", async () => {
            renderOptions();
            const buttons = await screen.findAllByRole("button");
            // Although there are only 2 options, we also expect the 'All' option
            expect(buttons).toHaveLength(3);
        });
    })
})

const options: FilterOption[] = [
    {
        id: "0",
        value: "Option 0"
    },
    {
        id: "1",
        value: "Option 1"
    }
];
const defaultProps = {
    options: options,
    clickCallback: (selectValue: string) => {}
};
function renderOptions() {
    render(<Filter {...defaultProps}/>)
}