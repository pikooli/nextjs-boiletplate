type Obj = {
  [key: string]: any;
};

type FormEvent = React.FormEvent<HTMLFormElement>;

type NextApiResponseCustom = NextApiResponse & {
  socket: {
    server: Obj;
  };
};

type BtnType = "button" | "submit" | "reset" | undefined;

interface Event<T = EventTarget> {
  target: T;
  // ...
}
