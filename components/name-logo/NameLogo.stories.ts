import { css } from "styled-system/css";
import type { Meta, StoryObj } from "@storybook/vue3";
import NameLogo from "~/components/name-logo/NameLogo.vue";

const meta = {
  title: "Logo & Icons/NameLogo",
  component: NameLogo,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof NameLogo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: () => ({
    setup() {
      return () => h("div", { class: css({ w: "20rem" }) }, h(NameLogo));
    },
  }),
};
