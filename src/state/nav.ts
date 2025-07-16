let open = false;
let position = 0;


export const state = {
  get open() {
    return open;
  },
  setOpen(value: boolean) {
    open = value;
  },
  get position() {
    return position;
  },
  setPosition(value: number) {
    position = value;
  },
};
