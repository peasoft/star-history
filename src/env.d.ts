// Declare vue component type
declare module "*.vue" {
  import { defineComponent } from "vue";
  const component: ReturnType<typeof defineComponent>;
  export default component;
}

interface AppState {
  token: string;
  repos: string[];
}