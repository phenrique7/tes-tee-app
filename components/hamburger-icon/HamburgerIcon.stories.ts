import type { Meta, StoryObj } from "@storybook/vue3";
import HamburgerIcon from "~/components/hamburger-icon/HamburgerIcon.vue";

const meta = {
  title: "Logo & Icons/HamburgerIcon",
  component: HamburgerIcon,
} satisfies Meta<typeof HamburgerIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
