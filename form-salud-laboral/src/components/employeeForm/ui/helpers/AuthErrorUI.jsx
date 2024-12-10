export default function AuthErrorUI({ errorMessage }) {
    const warningDiv = {
        width: '100%',
        height: '99vh',
        backgroundColor:'#ff6701',
    }
    const padded = {
        width: '90%',
        padding:'3rem 0 0 2rem',
    }
    return (
        <div style={warningDiv}>
            <div style={padded}>
                <h3 style={{color:'#ff3c00'}}>
                    {errorMessage}
                </h3>
            </div>
        </div>
    )
}