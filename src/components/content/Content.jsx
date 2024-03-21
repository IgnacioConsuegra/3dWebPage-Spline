import './content.css'

function Content({children, mustShow}){
  return(
    <div className={`content ${mustShow ? "showComponent" : "hideComponent"}`}>
      {children}
    </div>
  )
}
export default Content;