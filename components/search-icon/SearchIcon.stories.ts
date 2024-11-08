import type { Meta, StoryObj } from "@storybook/vue3";
import SearchIcon from "~/components/search-icon/SearchIcon.vue";

const meta = {
  title: "Logo & Icons/SearchIcon",
  component: SearchIcon,
} satisfies Meta<typeof SearchIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
