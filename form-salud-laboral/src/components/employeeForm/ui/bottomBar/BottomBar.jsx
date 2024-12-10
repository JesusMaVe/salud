import "./BottomBar.css"

export default function BottomBar() {
    return (
        <div className="BottomBar__navCtn">
            <div className="BottomBar__navBody">
                <div>
                    <ion-icon name="reader-outline" style={{fontSize:'24px'}}></ion-icon>
                </div>
                <div>
                    <ion-icon name="information-circle-outline" style={{fontSize:'24px'}}></ion-icon>
                </div>
            </div>
        </div>
    )
}
