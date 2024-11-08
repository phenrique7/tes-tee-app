import { css } from "styled-system/css";
import type { Meta, StoryObj } from "@storybook/vue3";
import Logo from "~/components/logo/Logo.vue";

const meta = {
  title: "Logo & Icons/Logo",
  component: Logo,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Logo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: () => ({
    setup() {
      return () => h("div", { class: css({ w: "10rem" }) }, h(Logo));
    },
  }),
};
