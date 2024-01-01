import { AlertTriangle, Ban, Bell, CheckCheck, Info } from "lucide-react";
import "./App.css";
import Alert from "./components/ui/Alert/Alert";

function App() {
  return (
    <div>
      <Alert
        type={"alert-default"}
        icon={<Bell size={20} />}
        title={"Upgrade your plan"}
        description={
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumendanecessitatibus sint rem at velit fuga enim omnis eaque itaque consectetur, ab fugit nostrum, alias veritatis labore et quia cum porro."
        }
      >
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Assumendanecessitatibus sint rem at velit fuga enim omnis eaque itaque
          consectetur, ab fugit nostrum, alias veritatis labore et quia{" "}
          <a href="/">lorem</a> cum porro.
        </p>
      </Alert>
      <Alert
        type={"alert-info"}
        icon={<Info size={20} />}
        title={"Note"}
        description={
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumendanecessitatibus sint rem at velit fuga enim omnis eaque itaque consectetur, ab fugit nostrum, alias veritatis labore et quia cum porro."
        }
      />
      <Alert
        type={"alert-success"}
        icon={<CheckCheck size={20} />}
        title={"Your order has been processed"}
        description={
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumendanecessitatibus sint rem at velit fuga enim omnis eaque itaque consectetur, ab fugit nostrum, alias veritatis labore et quia cum porro."
        }
      />
      <Alert
        type={"alert-error"}
        icon={<Ban size={20} />}
        title={"Something went wrong"}
        description={
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumendanecessitatibus sint rem at velit fuga enim omnis eaque itaque consectetur, ab fugit nostrum, alias veritatis labore et quia cum porro."
        }
      />
      <Alert
        type={"alert-warning"}
        icon={<AlertTriangle size={20} />}
        title={"Tips & Tricks"}
        description={
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumendanecessitatibus sint rem at velit fuga enim omnis eaque itaque consectetur, ab fugit nostrum, alias veritatis labore et quia cum porro."
        }
      />
    </div>
  );
}

export default App;
