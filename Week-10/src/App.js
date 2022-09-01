import Main from "./main";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [show, setShow] = useState(false);
  const [type, setType] = useState('success');
  const [toastMsg, setToastMsg] = useState("")
  const openTost = (msg = '', type = 'success', time = 3000) => {
    setToastMsg(msg)
    setShow(true)
    setType(type)
    setTimeout(() => {
      closeTost()
    }, time)
  }
  const closeTost = () => {
    setToastMsg("")
    setShow(false)
    setType('success')
  }
  return (
    <>
      <Main openTost={openTost} closeTost={closeTost} />
      <div className="toast-container position-fixed bottom-0 end-0 p-3">
        <div
          id="liveToast"
          className={"toast" + (show ? ' show' : '') + (type === 'success' ? ' text-bg-success' : type === 'error' ? ' text-bg-danger' : '')}
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="d-flex">
            <div className="toast-body">{toastMsg}</div>
            <button
              type="button"
              className="btn-close me-2 m-auto"
              data-bs-dismiss="toast"
              aria-label="Close"
              onClick={closeTost}
            />
          </div>
        </div>
      </div>
    </>);
}
