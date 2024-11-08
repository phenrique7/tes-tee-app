import type { Meta, StoryObj } from "@storybook/vue3";
import MainLayout from "~/layouts/main.vue";
import IndexView from "~/views/index/IndexView.vue";

const meta = {
  title: "Pages/IndexView",
  component: IndexView,
  parameters: {
    layout: "fullscreen",
  },
  // https://github.com/nuxt-modules/storybook/issues/808
  // decorators: [
  //   () => ({
  //     components: { MainLayout },
  //     template: `<MainLayout><story /></MainLayout>`,
  //   }),
  // ],
} satisfies Meta<typeof IndexView>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: () => ({
    setup() {
      return () => h(MainLayout, h(IndexView));
    },
  }),
};
