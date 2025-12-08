import style from '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
      <div className="pageContainer">
          <style jsx global>
              {style}
          </style>
          <Component {...pageProps} />
      </div>
  )
}

export default MyApp
