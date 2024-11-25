import { describe, expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { SubmitForm } from "./SubmitForm";
import { userEvent } from "@vitest/browser/context";

describe("SubmitForm.tsx", () => {
  test("type name", async () => {
    // Arrange
    const screen = render(<SubmitForm />);
    const firstNameInputElement = screen.getByLabelText("first name");
    const lastNameInputElement = screen.getByLabelText("last name");

    // Act
    await userEvent.type(firstNameInputElement, "John");
    await userEvent.type(lastNameInputElement, "Son");

    // Assert
    await expect.element(firstNameInputElement).toHaveDisplayValue("John");
    await expect.element(lastNameInputElement).toHaveDisplayValue("Son");
  });
});
