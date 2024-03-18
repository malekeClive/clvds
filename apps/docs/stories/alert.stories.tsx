import { Alert, AlertDescription, AlertTitle } from "@clvds/ui/core";
import "@clvds/ui/style.css";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Alert> = {
  component: Alert,
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["default", "destructive"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Alert>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (props) => (
    <Alert {...props}>
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components and dependencies to your app using the cli.
      </AlertDescription>
    </Alert>
  ),
  name: "Alert",
  args: {
    variant: "default",
  },
};
