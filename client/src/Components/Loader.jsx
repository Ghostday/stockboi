// Loading Spinner
export default function Loader({show}) {
    return show ? <div className="loader"></div> : null;
}

// Import it in as <Loader show/>