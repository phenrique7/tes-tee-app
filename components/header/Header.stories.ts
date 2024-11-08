import type { Meta, StoryObj } from "@storybook/vue3";
import Header from "~/components/header/Header.vue";

const meta = {
  title: "Components/Header",
  component: Header,
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
