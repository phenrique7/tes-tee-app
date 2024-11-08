import type { Meta, StoryObj } from "@storybook/vue3";
import CartIcon from "~/components/cart-icon/CartIcon.vue";

const meta = {
  title: "Logo & Icons/CartIcon",
  component: CartIcon,
} satisfies Meta<typeof CartIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
