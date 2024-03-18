import { Avatar, AvatarFallback, AvatarImage } from "@clvds/ui/core";
import "@clvds/ui/style.css";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  argTypes: {
    // variant: {
    //   control: { type: "radio" },
    //   options: ["default", "destructive"],
    // },
  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (props) => (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
  name: "Avatar",
  args: {
    // variant: "default",
  },
};
