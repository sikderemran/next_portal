
import '../assets/style.css'
const Loading = ({ loading }) => {
    return (
        <>
            {
                loading == true ?
                    <div className="loading">
                        <span className="spinner smooth" />
                    </div>
                    : ''
            }
        </>
    )

}

export default Loading