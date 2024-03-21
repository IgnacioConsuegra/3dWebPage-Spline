import './social.css'

function Social({children, mustShow}) {
  return(
    <div className={`social ${mustShow ? "showComponent" : "hideComponent"}`}>
      {children}
    </div>
  )
}

export default Social;