const namey = (<h1>Heritage</h1>)
const element = (
    <div>
        <h1>Akinwale Heritage Ololade</h1>
        <p>Male</p>
        <p>heritageololade@gmail.com</p>
    </div>
)
const footer = <h3>This Is The Footer</h3>


const rootElement = document.getElementById("root")
const root = ReactDOM.createRoot(rootElement)
root.render(
    <React.Fragment>
        {namey}
        {element}
        {footer}
    </React.Fragment>
)

