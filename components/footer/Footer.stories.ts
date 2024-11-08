import type { Meta, StoryObj } from "@storybook/vue3";
import Footer from "~/components/footer/Footer.vue";

const meta = {
  title: "Components/Footer",
  component: Footer,
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
