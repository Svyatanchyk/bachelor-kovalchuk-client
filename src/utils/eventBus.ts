type Callback = () => void;

const listeners: Callback[] = [];

export const authEventBus = {
  on(callback: Callback) {
    listeners.push(callback);
  },
  emit() {
    listeners.forEach((callback) => callback());
  },
};
