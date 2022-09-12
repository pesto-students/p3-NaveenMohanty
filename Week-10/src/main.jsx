import Header from "./header";
import Footer from "./footer";
import { useState, memo } from "react";

const MidBody = memo(function () {
  return (
    <div className="bg-secondary text-dark px-4 py-5 text-center">
      <div className="py-5">
        <h1 className="display-5 fw-bold text-white">Shorten your URL</h1>
        <div className="col-lg-6 mx-auto">
          <p className="fs-5 mb-4">
            Anyone with an internet browser can use link shorteners: social media managers, regular everyday Facebook moms, small business owners, TikTok tweens of all heights — and you!
          </p>
        </div>
      </div>
    </div>
  )
})


export default function Main(props) {
  const [url, setUrl] = useState("")
  const [inProgress, setInProgress] = useState(false)
  const [urlData, setUrlData] = useState(false)

  const getShortUrl = (e) => {
    e && e.preventDafault && e.preventDafault()
    if (url) {
      setInProgress(true)
      setUrlData(false)
      fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
        .then((response) => response.json())
        .then((data) => {
          setInProgress(false)
          if (data.ok) {
            setUrlData(data.result)
            props.openTost('URL shorten successfully!')
          } else {
            props.openTost(data.error, 'error')
          }
        }).catch((error) => {
          setInProgress(false)
          props.openTost(error.msg, 'error')
        });
    } else {
      props.openTost('Enter a URL', 'error')
    }
  }

  function copyToClip() {
    navigator.clipboard.writeText(urlData && urlData.full_short_link ? urlData.full_short_link : '');
    props.openTost('URL Copied successfully!')
  }



  return (
    <div>
      <Header/>
      <MidBody />
      <div className="card" style={{ padding: "50px  0" }}>
        <div className="card-body">
          <div className="input-group" style={{ width: "50%", margin: 'auto' }}>
            <input
              type="text"
              className="form-control"
              placeholder="Enter URL to Shorten."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              onChange={(e) => { setUrl(e.target.value); setUrlData(false) }}
              value={url}
            />
            <span className="input-group-text" id="basic-addon2" role='button' onClick={getShortUrl}>
              Shorten
            </span>
          </div>
        </div>
      </div>

      {urlData ? <div className="card bg-info" style={{ padding: "50px  0" }}>
        <div className="card-body fs-4" style={{ width: "50%", margin: 'auto' }}>
          <h3 className="card-title text-center">Shorten Link</h3>
          <div className="d-flex flex-row text-center">
            <a href={urlData && urlData.full_short_link ? urlData.full_short_link : ''} rel="noreferrer" class="link-primary" target="_blank" style={{ margin: 'auto' }}>{urlData && urlData.short_link ? urlData.short_link : ''}</a>
            <button type="button" class="btn btn-outline-light" onClick={copyToClip}>Copy</button>
          </div>
        </div>
      </div> : ''}
      {inProgress ? <div className="d-flex justify-content-center" style={{ padding: "50px  0" }}>
        <div class="spinner-border m-auto" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div> : ''}


      <Footer />

    </div>
  );
}
